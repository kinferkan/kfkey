import { useTranslation } from 'react-i18next'

/**
 * 国际化工具函数
 * 用于处理工具描述、快捷键描述和分类的翻译
 */

/**
 * 获取工具描述的翻译
 * @param toolId 工具ID
 * @param fallback 备用文本
 * @returns 翻译后的描述
 */
export function useToolDescription(toolId: string, fallback?: string) {
  const { t } = useTranslation()
  return t(`toolDescriptions.${toolId}`, fallback || '')
}

/**
 * 获取快捷键分类的翻译
 * @param category 分类名称
 * @returns 翻译后的分类名称
 */
export function useShortcutCategory(category: string) {
  const { t } = useTranslation()
  
  // 将中文分类映射到英文键值
  const categoryMap: Record<string, string> = {
    '通用': 'general',
    '文件': 'file',
    '导航': 'navigation',
    '编辑': 'editing',
    '搜索': 'search',
    '搜索与替换': 'search',
    '搜索替换': 'search',
    '调试': 'debugging',
    '重构': 'refactoring',
    '版本控制': 'version_control',
    '视图': 'view',
    '窗口': 'window',
    '窗口管理': 'window'
  }
  
  const key = categoryMap[category] || category.toLowerCase()
  return t(`shortcutCategories.${key}`, category)
}

/**
 * 获取快捷键描述的翻译
 * @param description 描述文本
 * @returns 翻译后的描述
 */
export function useShortcutDescription(description: string) {
  const { t } = useTranslation()
  
  // 将中文描述映射到英文键值
  const descriptionMap: Record<string, string> = {
    '命令面板': 'command_palette',
    '快速打开文件': 'quick_open',
    '新建窗口': 'new_window',
    '关闭窗口': 'close_window',
    '新建文件': 'new_file',
    '打开文件': 'open_file',
    '保存': 'save',
    '另存为': 'save_as',
    '保存所有': 'save_all',
    '关闭': 'close',
    '关闭所有': 'close_all',
    '重新打开关闭的编辑器': 'reopen_closed',
    '保持预览模式编辑器打开': 'keep_preview',
    '打开下一个': 'next_tab',
    '打开上一个': 'prev_tab',
    '复制活动文件的路径': 'copy_path',
    '在资源管理器中显示活动文件': 'reveal_in_explorer',
    '在新窗口/实例中显示活动文件': 'show_in_new_window'
  }
  
  const key = descriptionMap[description]
  return key ? t(`shortcutDescriptions.${key}`, description) : description
}

/**
 * 不使用Hook的版本，用于在非组件中使用
 */
export const i18nTools = {
  getToolDescription: (t: any, toolId: string, fallback?: string) => {
    return t(`toolDescriptions.${toolId}`, fallback || '')
  },
  
  getShortcutCategory: (t: any, category: string) => {
    const categoryMap: Record<string, string> = {
      '通用': 'general',
      '文件': 'file',
      '导航': 'navigation',
      '编辑': 'editing',
      '搜索': 'search',
      '搜索与替换': 'search',
      '搜索替换': 'search',
      '调试': 'debugging',
      '重构': 'refactoring',
      '版本控制': 'version_control',
      '视图': 'view',
      '窗口': 'window',
      '窗口管理': 'window'
    }
    
    const key = categoryMap[category] || category.toLowerCase()
    return t(`shortcutCategories.${key}`, category)
  },
  
  getShortcutDescription: (t: any, description: string) => {
    const descriptionMap: Record<string, string> = {
      '命令面板': 'command_palette',
      '快速打开文件': 'quick_open',
      '新建窗口': 'new_window',
      '关闭窗口': 'close_window',
      '新建文件': 'new_file',
      '打开文件': 'open_file',
      '保存': 'save',
      '另存为': 'save_as',
      '保存所有': 'save_all',
      '关闭': 'close',
      '关闭所有': 'close_all',
      '重新打开关闭的编辑器': 'reopen_closed',
      '保持预览模式编辑器打开': 'keep_preview',
      '打开下一个': 'next_tab',
      '打开上一个': 'prev_tab',
      '复制活动文件的路径': 'copy_path',
      '在资源管理器中显示活动文件': 'reveal_in_explorer',
      '在新窗口/实例中显示活动文件': 'show_in_new_window'
    }
    
    const key = descriptionMap[description]
    return key ? t(`shortcutDescriptions.${key}`, description) : description
  }
}