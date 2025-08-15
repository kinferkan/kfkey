import { Tool, Shortcut } from '../types'
import { toolService } from './tool-service'

/**
 * 搜索结果接口
 */
export interface SearchResult {
  tool: Tool
  matchedShortcuts: Shortcut[]
  matchScore: number
  matchType: 'tool' | 'shortcut' | 'both'
}

/**
 * 搜索选项接口
 */
export interface SearchOptions {
  includeTools?: boolean
  includeShortcuts?: boolean
  platform?: 'win' | 'mac' | 'linux'
  category?: string
  minScore?: number
}

/**
 * 搜索服务类
 * 提供高级搜索功能，支持模糊匹配和智能排序
 */
export class SearchService {
  private static instance: SearchService

  private constructor() {}

  /**
   * 获取单例实例
   */
  public static getInstance(): SearchService {
    if (!SearchService.instance) {
      SearchService.instance = new SearchService()
    }
    return SearchService.instance
  }

  /**
   * 计算字符串相似度（使用Levenshtein距离）
   * @param str1 字符串1
   * @param str2 字符串2
   * @returns 相似度分数 (0-1)
   */
  private calculateSimilarity(str1: string, str2: string): number {
    const len1 = str1.length
    const len2 = str2.length
    
    if (len1 === 0) return len2 === 0 ? 1 : 0
    if (len2 === 0) return 0

    const matrix: number[][] = []
    
    // 初始化矩阵
    for (let i = 0; i <= len1; i++) {
      matrix[i] = [i]
    }
    for (let j = 0; j <= len2; j++) {
      matrix[0][j] = j
    }

    // 计算编辑距离
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,      // 删除
          matrix[i][j - 1] + 1,      // 插入
          matrix[i - 1][j - 1] + cost // 替换
        )
      }
    }

    const maxLen = Math.max(len1, len2)
    return (maxLen - matrix[len1][len2]) / maxLen
  }

  /**
   * 计算匹配分数
   * @param query 查询字符串
   * @param target 目标字符串
   * @returns 匹配分数 (0-100)
   */
  private calculateMatchScore(query: string, target: string): number {
    const queryLower = query.toLowerCase()
    const targetLower = target.toLowerCase()

    // 完全匹配
    if (queryLower === targetLower) return 100

    // 开头匹配
    if (targetLower.startsWith(queryLower)) return 90

    // 包含匹配
    if (targetLower.includes(queryLower)) return 80

    // 模糊匹配
    const similarity = this.calculateSimilarity(queryLower, targetLower)
    return Math.round(similarity * 70) // 最高70分
  }

  /**
   * 搜索工具和快捷键
   * @param query 搜索查询
   * @param options 搜索选项
   * @returns 搜索结果数组
   */
  public search(query: string, options: SearchOptions = {}): SearchResult[] {
    if (!query.trim()) return []

    const {
      includeTools = true,
      includeShortcuts = true,
      platform,
      category,
      minScore = 30
    } = options

    const allTools = toolService.getAllTools()
    const results: SearchResult[] = []

    allTools.forEach(tool => {
      // 分类过滤
      if (category && tool.category !== category) return

      let toolMatchScore = 0
      let matchedShortcuts: Shortcut[] = []
      let matchType: SearchResult['matchType'] = 'shortcut'

      // 搜索工具名称
      if (includeTools) {
        const nameScore = this.calculateMatchScore(query, tool.name)
        const categoryScore = this.calculateMatchScore(query, tool.category)
        toolMatchScore = Math.max(nameScore, categoryScore)
        
        if (toolMatchScore >= minScore) {
          matchType = 'tool'
        }
      }

      // 搜索快捷键
      if (includeShortcuts) {
        const shortcuts = platform 
          ? tool.shortcuts.filter(s => s.platform === platform)
          : tool.shortcuts

        shortcuts.forEach(shortcut => {
          const descScore = this.calculateMatchScore(query, shortcut.description)
          const keysScore = this.calculateMatchScore(query, shortcut.keys.join(' '))
          const categoryScore = this.calculateMatchScore(query, shortcut.category)
          
          const shortcutScore = Math.max(descScore, keysScore, categoryScore)
          
          if (shortcutScore >= minScore) {
            matchedShortcuts.push({
              ...shortcut,
              matchScore: shortcutScore
            } as Shortcut & { matchScore: number })
          }
        })

        if (matchedShortcuts.length > 0) {
          matchType = toolMatchScore >= minScore ? 'both' : 'shortcut'
        }
      }

      // 计算最终匹配分数
      const shortcutMaxScore = matchedShortcuts.length > 0 
        ? Math.max(...matchedShortcuts.map(s => (s as any).matchScore))
        : 0

      const finalScore = Math.max(toolMatchScore, shortcutMaxScore)

      if (finalScore >= minScore) {
        results.push({
          tool,
          matchedShortcuts: matchedShortcuts.sort((a, b) => 
            ((b as any).matchScore || 0) - ((a as any).matchScore || 0)
          ),
          matchScore: finalScore,
          matchType
        })
      }
    })

    // 按匹配分数排序
    return results.sort((a, b) => {
      // 首先按匹配分数排序
      if (b.matchScore !== a.matchScore) {
        return b.matchScore - a.matchScore
      }
      
      // 然后按工具热度排序
      if (b.tool.popularity !== a.tool.popularity) {
        return b.tool.popularity - a.tool.popularity
      }
      
      // 最后按匹配的快捷键数量排序
      return b.matchedShortcuts.length - a.matchedShortcuts.length
    })
  }

  /**
   * 获取搜索建议
   * @param query 查询字符串
   * @param limit 建议数量限制
   * @returns 搜索建议数组
   */
  public getSuggestions(query: string, limit: number = 5): string[] {
    if (!query.trim()) return []

    const allTools = toolService.getAllTools()
    const suggestions = new Set<string>()

    allTools.forEach(tool => {
      // 工具名称建议
      if (tool.name.toLowerCase().includes(query.toLowerCase())) {
        suggestions.add(tool.name)
      }

      // 快捷键描述建议
      tool.shortcuts.forEach(shortcut => {
        if (shortcut.description.toLowerCase().includes(query.toLowerCase())) {
          suggestions.add(shortcut.description)
        }
      })
    })

    return Array.from(suggestions).slice(0, limit)
  }

  /**
   * 获取热门搜索词
   * @returns 热门搜索词数组
   */
  public getPopularSearchTerms(): string[] {
    return [
      '复制', '粘贴', '撤销', '保存', '查找',
      '替换', '格式化', '注释', '调试', '运行',
      '新建', '打开', '关闭', '选择', '导航'
    ]
  }

  /**
   * 按分类搜索
   * @param category 分类名称
   * @returns 该分类下的所有工具
   */
  public searchByCategory(category: string): Tool[] {
    return toolService.getAllTools().filter(tool => 
      tool.category.toLowerCase().includes(category.toLowerCase())
    )
  }

  /**
   * 按平台搜索快捷键
   * @param platform 平台名称
   * @returns 该平台的所有快捷键
   */
  public searchByPlatform(platform: 'win' | 'mac' | 'linux'): SearchResult[] {
    const allTools = toolService.getAllTools()
    const results: SearchResult[] = []

    allTools.forEach(tool => {
      const platformShortcuts = tool.shortcuts.filter(s => s.platform === platform)
      
      if (platformShortcuts.length > 0) {
        results.push({
          tool,
          matchedShortcuts: platformShortcuts,
          matchScore: 100,
          matchType: 'shortcut'
        })
      }
    })

    return results.sort((a, b) => b.tool.popularity - a.tool.popularity)
  }
}

// 导出单例实例
export const searchService = SearchService.getInstance()