import { ToolCategory } from '../types'
import { toolsRegistry, validateToolsData } from './tools-registry'
import { toolService } from '../services/tool-service'
import { favoriteService } from '../services/favorite-service'

/**
 * 工具数据管理模块
 * 提供统一的数据访问接口和初始化功能
 */

// 验证工具数据完整性
const validationResult = validateToolsData(toolsRegistry)
if (!validationResult.isValid) {
  console.error('Tools data validation failed:', validationResult.errors)
}

// 初始化工具服务
toolService.initialize(toolsRegistry)

/**
 * 获取工具数据（带收藏状态同步）
 * @returns 工具分类数据
 */
export const toolsData: ToolCategory[] = toolsRegistry.map(category => ({
  ...category,
  tools: category.tools.map(tool => ({
    ...tool,
    isFavorite: favoriteService.isFavorite(tool.id)
  }))
}))

/**
 * 导出服务实例供组件使用
 */
export { toolService, favoriteService }

/**
 * 工具数据统计信息
 */
export const toolsStatistics = toolService.getStatistics()

/**
 * 热门工具列表
 */
export const popularTools = toolService.getPopularTools(6)

/**
 * 按分类获取工具数量
 */
export const toolCountByCategory = toolsRegistry.reduce((acc, category) => {
  acc[category.name] = category.tools.length
  return acc
}, {} as Record<string, number>)

/**
 * 获取所有支持的平台
 */
export const supportedPlatforms = Array.from(
  new Set(
    toolsRegistry
      .flatMap(category => category.tools)
      .flatMap(tool => tool.shortcuts)
      .map(shortcut => shortcut.platform)
  )
)

/**
 * 获取所有快捷键分类
 */
export const shortcutCategories = Array.from(
  new Set(
    toolsRegistry
      .flatMap(category => category.tools)
      .flatMap(tool => tool.shortcuts)
      .map(shortcut => shortcut.category)
  )
)

// 开发环境下的调试信息
if (process.env.NODE_ENV === 'development') {
  console.log('🚀 KeyFlow Platform - Tools Data Loaded')
  console.log('📊 Statistics:', toolsStatistics)
  console.log('🔥 Popular Tools:', popularTools.map(t => t.name))
  console.log('🌐 Supported Platforms:', supportedPlatforms)
  console.log('📂 Shortcut Categories:', shortcutCategories)
}