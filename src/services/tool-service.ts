import { Tool, ToolCategory } from '../types'

/**
 * 工具服务类
 * 提供工具数据的统一管理和操作接口
 */
export class ToolService {
  private static instance: ToolService
  private toolsData: ToolCategory[] = []

  private constructor() {}

  /**
   * 获取单例实例
   */
  public static getInstance(): ToolService {
    if (!ToolService.instance) {
      ToolService.instance = new ToolService()
    }
    return ToolService.instance
  }

  /**
   * 初始化工具数据
   * @param data 工具分类数据
   */
  public initialize(data: ToolCategory[]): void {
    this.toolsData = data
  }

  /**
   * 获取所有工具分类数据
   * @returns 工具分类数组
   */
  public getToolsData(): ToolCategory[] {
    return this.toolsData
  }

  /**
   * 获取所有工具的扁平化数组
   * @returns 工具数组
   */
  public getAllTools(): Tool[] {
    return this.toolsData.flatMap(category => category.tools)
  }

  /**
   * 根据ID获取工具
   * @param id 工具ID
   * @returns 工具对象或undefined
   */
  public getToolById(id: string): Tool | undefined {
    return this.getAllTools().find(tool => tool.id === id)
  }

  /**
   * 根据分类获取工具
   * @param categoryName 分类名称
   * @returns 工具数组
   */
  public getToolsByCategory(categoryName: string): Tool[] {
    const category = this.toolsData.find(cat => cat.name === categoryName)
    return category ? category.tools : []
  }

  /**
   * 搜索工具
   * @param query 搜索关键词
   * @returns 匹配的工具数组
   */
  public searchTools(query: string): Tool[] {
    if (!query.trim()) return this.getAllTools()
    
    const lowercaseQuery = query.toLowerCase()
    return this.getAllTools().filter(tool => 
      tool.name.toLowerCase().includes(lowercaseQuery) ||
      tool.category.toLowerCase().includes(lowercaseQuery)
    )
  }

  /**
   * 根据热度排序工具
   * @param tools 工具数组
   * @param ascending 是否升序排列
   * @returns 排序后的工具数组
   */
  public sortToolsByPopularity(tools: Tool[], ascending: boolean = false): Tool[] {
    return [...tools].sort((a, b) => 
      ascending ? a.popularity - b.popularity : b.popularity - a.popularity
    )
  }

  /**
   * 获取热门工具（热度前N名）
   * @param limit 限制数量
   * @returns 热门工具数组
   */
  public getPopularTools(limit: number = 5): Tool[] {
    const sortedTools = this.sortToolsByPopularity(this.getAllTools())
    return sortedTools.slice(0, limit)
  }

  /**
   * 获取工具统计信息
   * @returns 统计信息对象
   */
  public getStatistics(): {
    totalTools: number
    totalShortcuts: number
    categoriesCount: number
    averagePopularity: number
  } {
    const allTools = this.getAllTools()
    const totalShortcuts = allTools.reduce((sum, tool) => sum + tool.shortcuts.length, 0)
    const averagePopularity = allTools.reduce((sum, tool) => sum + tool.popularity, 0) / allTools.length

    return {
      totalTools: allTools.length,
      totalShortcuts,
      categoriesCount: this.toolsData.length,
      averagePopularity: Math.round(averagePopularity * 100) / 100
    }
  }
}

// 导出单例实例
export const toolService = ToolService.getInstance()