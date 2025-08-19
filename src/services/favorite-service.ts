import { Tool } from '../types'
import { toolService } from './tool-service'

/**
 * 收藏服务类
 * 管理用户收藏的工具
 */
export class FavoriteService {
  private static instance: FavoriteService
  private readonly STORAGE_KEY = 'keyflow_favorite_tools'

  private constructor() {}

  /**
   * 获取单例实例
   */
  public static getInstance(): FavoriteService {
    if (!FavoriteService.instance) {
      FavoriteService.instance = new FavoriteService()
    }
    return FavoriteService.instance
  }

  /**
   * 获取收藏的工具ID列表
   * @returns 工具ID数组
   */
  private getFavoriteIds(): string[] {
    try {
      const favorites = localStorage.getItem(this.STORAGE_KEY)
      return favorites ? JSON.parse(favorites) : []
    } catch (error) {
      console.error('Failed to get favorite tools from localStorage:', error)
      return []
    }
  }

  /**
   * 保存收藏的工具ID列表
   * @param favoriteIds 工具ID数组
   */
  private saveFavoriteIds(favoriteIds: string[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favoriteIds))
    } catch (error) {
      console.error('Failed to save favorite tools to localStorage:', error)
    }
  }

  /**
   * 获取收藏的工具列表
   * @returns 收藏的工具数组
   */
  public getFavoriteTools(): Tool[] {
    const favoriteIds = this.getFavoriteIds()
    const allTools = toolService.getAllTools()
    
    return allTools.filter(tool => {
      const isFavorite = favoriteIds.includes(tool.id)
      // 同步更新工具的收藏状态
      tool.isFavorite = isFavorite
      return isFavorite
    })
  }

  /**
   * 检查工具是否被收藏
   * @param toolId 工具ID
   * @returns 是否被收藏
   */
  public isFavorite(toolId: string): boolean {
    const favoriteIds = this.getFavoriteIds()
    return favoriteIds.includes(toolId)
  }

  /**
   * 添加工具到收藏
   * @param toolId 工具ID
   * @returns 操作是否成功
   */
  public addToFavorites(toolId: string): boolean {
    try {
      const favoriteIds = this.getFavoriteIds()
      if (!favoriteIds.includes(toolId)) {
        favoriteIds.push(toolId)
        this.saveFavoriteIds(favoriteIds)
        
        // 更新工具的收藏状态
        const tool = toolService.getToolById(toolId)
        if (tool) {
          tool.isFavorite = true
        }
        
        // 触发自定义事件通知其他组件更新收藏数量
        window.dispatchEvent(new CustomEvent('favoritesChange'))
        
        return true
      }
      return false
    } catch (error) {
      console.error('Failed to add tool to favorites:', error)
      return false
    }
  }

  /**
   * 从收藏中移除工具
   * @param toolId 工具ID
   * @returns 操作是否成功
   */
  public removeFromFavorites(toolId: string): boolean {
    try {
      const favoriteIds = this.getFavoriteIds()
      const index = favoriteIds.indexOf(toolId)
      
      if (index > -1) {
        favoriteIds.splice(index, 1)
        this.saveFavoriteIds(favoriteIds)
        
        // 更新工具的收藏状态
        const tool = toolService.getToolById(toolId)
        if (tool) {
          tool.isFavorite = false
        }
        
        // 触发自定义事件通知其他组件更新收藏数量
        window.dispatchEvent(new CustomEvent('favoritesChange'))
        
        return true
      }
      return false
    } catch (error) {
      console.error('Failed to remove tool from favorites:', error)
      return false
    }
  }

  /**
   * 切换工具的收藏状态
   * @param toolId 工具ID
   * @returns 新的收藏状态
   */
  public toggleFavorite(toolId: string): boolean {
    const isFavorite = this.isFavorite(toolId)
    
    if (isFavorite) {
      this.removeFromFavorites(toolId)
      // 触发自定义事件通知其他组件更新收藏数量
      window.dispatchEvent(new CustomEvent('favoritesChange'))
      return false
    } else {
      this.addToFavorites(toolId)
      // 触发自定义事件通知其他组件更新收藏数量
      window.dispatchEvent(new CustomEvent('favoritesChange'))
      return true
    }
  }

  /**
   * 清空所有收藏
   */
  public clearAllFavorites(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY)
      
      // 更新所有工具的收藏状态
      const allTools = toolService.getAllTools()
      allTools.forEach(tool => {
        tool.isFavorite = false
      })
      
      // 触发自定义事件通知其他组件更新收藏数量
      window.dispatchEvent(new CustomEvent('favoritesChange'))
    } catch (error) {
      console.error('Failed to clear all favorites:', error)
    }
  }

  /**
   * 获取收藏统计信息
   * @returns 统计信息对象
   */
  public getStatistics(): {
    totalFavorites: number
    favoritesByCategory: Record<string, number>
  } {
    const favoriteTools = this.getFavoriteTools()
    const favoritesByCategory: Record<string, number> = {}
    
    favoriteTools.forEach(tool => {
      favoritesByCategory[tool.category] = (favoritesByCategory[tool.category] || 0) + 1
    })
    
    return {
      totalFavorites: favoriteTools.length,
      favoritesByCategory
    }
  }
}

// 导出单例实例
export const favoriteService = FavoriteService.getInstance()