/**
 * KeyFlow Platform 类型定义
 * 定义了应用中使用的所有数据结构和接口
 */

/**
 * 平台类型
 */
export type Platform = 'win' | 'mac' | 'linux' | 'all'

/**
 * 快捷键接口
 */
export interface Shortcut {
  /** 唯一标识符 */
  id: string
  /** 按键组合 */
  keys: string[]
  /** 功能描述 */
  description: string
  /** 功能分类 */
  category: string
  /** 支持的平台 */
  platform: Platform
  /** 匹配分数（搜索时使用） */
  matchScore?: number
}

/**
 * 工具接口
 */
export interface Tool {
  /** 唯一标识符 */
  id: string
  /** 工具名称 */
  name: string
  /** 工具分类 */
  category: string
  /** 工具图标URL */
  icon: string
  /** 快捷键列表 */
  shortcuts: Shortcut[]
  /** 热度评分 (0-100) */
  popularity: number
  /** 最后更新时间 */
  lastUpdated: Date
  /** 工具描述 */
  description?: string
  /** 是否被收藏 */
  isFavorite?: boolean
  /** 官方网站 */
  website?: string
  /** 版本信息 */
  version?: string
  /** 标签 */
  tags?: string[]
}

/**
 * 工具分类接口
 */
export interface ToolCategory {
  /** 唯一标识符 */
  id: string
  /** 分类名称 */
  name: string
  /** 分类下的工具列表 */
  tools: Tool[]
  /** 分类描述 */
  description?: string
  /** 分类图标 */
  icon?: string
}

/**
 * 搜索结果接口
 */
export interface SearchResult {
  /** 匹配的工具 */
  tool: Tool
  /** 匹配的快捷键列表 */
  matchedShortcuts: Shortcut[]
  /** 匹配分数 */
  matchScore: number
  /** 匹配类型 */
  matchType: 'tool' | 'shortcut' | 'both'
}

/**
 * 搜索选项接口
 */
export interface SearchOptions {
  /** 是否包含工具搜索 */
  includeTools?: boolean
  /** 是否包含快捷键搜索 */
  includeShortcuts?: boolean
  /** 指定平台 */
  platform?: Platform
  /** 指定分类 */
  category?: string
  /** 最小匹配分数 */
  minScore?: number
}

/**
 * 筛选选项接口
 */
export interface FilterOptions {
  /** 选中的分类 */
  categories: string[]
  /** 选中的平台 */
  platforms: Platform[]
  /** 是否只显示收藏 */
  favoritesOnly: boolean
  /** 热度范围 */
  popularityRange: [number, number]
  /** 排序方式 */
  sortBy: 'name' | 'popularity' | 'lastUpdated' | 'shortcutCount'
  /** 排序方向 */
  sortOrder: 'asc' | 'desc'
}

/**
 * 用户偏好设置接口
 */
export interface UserPreferences {
  /** 主题模式 */
  theme: 'light' | 'dark' | 'system'
  /** 首选平台 */
  preferredPlatform: Platform
  /** 语言设置 */
  language: 'zh-CN' | 'en-US'
  /** 是否显示快捷键符号 */
  showKeySymbols: boolean
  /** 是否启用动画 */
  enableAnimations: boolean
  /** 每页显示数量 */
  itemsPerPage: number
  /** 默认视图模式 */
  defaultView: 'grid' | 'list'
}

/**
 * 统计信息接口
 */
export interface Statistics {
  /** 工具总数 */
  totalTools: number
  /** 快捷键总数 */
  totalShortcuts: number
  /** 分类数量 */
  categoriesCount: number
  /** 平均热度 */
  averagePopularity: number
  /** 收藏总数 */
  totalFavorites?: number
  /** 按分类统计收藏 */
  favoritesByCategory?: Record<string, number>
}

/**
 * 平台信息接口
 */
export interface PlatformInfo {
  /** 平台标识 */
  platform: Platform
  /** 平台名称 */
  name: string
  /** 平台图标 */
  icon: string
  /** 按键符号映射 */
  keySymbols: Record<string, string>
}

/**
 * 热度等级接口
 */
export interface PopularityLevel {
  /** 最小值 */
  min: number
  /** 最大值 */
  max: number
  /** 等级标签 */
  label: string
  /** 颜色 */
  color: string
}

/**
 * 应用状态接口
 */
export interface AppState {
  /** 当前选中的工具 */
  selectedTool: Tool | null
  /** 当前平台 */
  currentPlatform: Platform
  /** 搜索查询 */
  searchQuery: string
  /** 搜索结果 */
  searchResults: SearchResult[]
  /** 筛选选项 */
  filters: FilterOptions
  /** 用户偏好 */
  preferences: UserPreferences
  /** 是否正在加载 */
  isLoading: boolean
  /** 错误信息 */
  error: string | null
}

/**
 * API 响应接口
 */
export interface ApiResponse<T = any> {
  /** 是否成功 */
  success: boolean
  /** 响应数据 */
  data?: T
  /** 错误信息 */
  error?: string
  /** 错误代码 */
  code?: number
  /** 响应消息 */
  message?: string
}

/**
 * 事件接口
 */
export interface AppEvent {
  /** 事件类型 */
  type: string
  /** 事件数据 */
  payload?: any
  /** 时间戳 */
  timestamp: number
}

/**
 * 组件属性基础接口
 */
export interface BaseComponentProps {
  /** CSS 类名 */
  className?: string
  /** 子元素 */
  children?: React.ReactNode
  /** 是否禁用 */
  disabled?: boolean
  /** 是否正在加载 */
  loading?: boolean
}

/**
 * 键盘热力图数据接口
 */
export interface HeatmapData {
  /** 按键标识 */
  key: string
  /** 使用频率 */
  frequency: number
  /** 相关快捷键 */
  shortcuts: Shortcut[]
}

/**
 * 导出配置接口
 */
export interface ExportConfig {
  /** 导出格式 */
  format: 'json' | 'csv' | 'pdf' | 'html'
  /** 包含的数据类型 */
  includeData: ('tools' | 'shortcuts' | 'favorites')[]
  /** 是否包含图标 */
  includeIcons: boolean
  /** 文件名 */
  filename?: string
}

/**
 * 导入配置接口
 */
export interface ImportConfig {
  /** 数据源格式 */
  format: 'json' | 'csv'
  /** 是否覆盖现有数据 */
  overwrite: boolean
  /** 验证选项 */
  validation: {
    /** 是否验证数据结构 */
    validateStructure: boolean
    /** 是否验证必填字段 */
    validateRequired: boolean
  }
}

/**
 * 工具使用统计接口
 */
export interface ToolUsageStats {
  /** 工具ID */
  toolId: string
  /** 查看次数 */
  viewCount: number
  /** 最后查看时间 */
  lastViewed: Date
  /** 收藏时间 */
  favoriteTime?: Date
  /** 使用的快捷键ID列表 */
  usedShortcuts: string[]
}

/**
 * 通知接口
 */
export interface Notification {
  /** 通知ID */
  id: string
  /** 通知类型 */
  type: 'info' | 'success' | 'warning' | 'error'
  /** 标题 */
  title: string
  /** 内容 */
  message: string
  /** 是否自动关闭 */
  autoClose: boolean
  /** 关闭延迟（毫秒） */
  duration?: number
  /** 操作按钮 */
  actions?: Array<{
    label: string
    action: () => void
  }>
}

/**
 * 键盘布局接口
 */
export interface KeyboardLayout {
  /** 布局名称 */
  name: string
  /** 布局标识 */
  id: string
  /** 按键映射 */
  keyMap: Record<string, {
    /** 显示文本 */
    display: string
    /** 位置坐标 */
    position: { x: number; y: number }
    /** 尺寸 */
    size: { width: number; height: number }
  }>
}

// 常量类型定义
export const PLATFORMS = ['win', 'mac', 'linux'] as const
export const THEMES = ['light', 'dark', 'system'] as const
export const LANGUAGES = ['zh-CN', 'en-US'] as const
export const SORT_OPTIONS = ['name', 'popularity', 'lastUpdated', 'shortcutCount'] as const
export const VIEW_MODES = ['grid', 'list'] as const
export const EXPORT_FORMATS = ['json', 'csv', 'pdf', 'html'] as const