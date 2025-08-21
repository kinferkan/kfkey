import { useTranslation } from 'react-i18next'

export function useToolDescription(toolId: string, fallback?: string) {
  const { t } = useTranslation()
  return t(`toolDescriptions.${toolId}`, fallback || '')
}

export function useShortcutCategory(category: string) {
  const { t } = useTranslation()
  
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
    '窗口管理': 'window',
    '查找': 'search',
    '多光标': 'multi_cursor',
    '运行': 'run',
    'C/C++特有': 'cpp_specific',
    '帮助': 'help'
  }
  
  const key = categoryMap[category] || category.toLowerCase()
  return t(`shortcutCategories.${key}`, category)
}

export function useShortcutDescription(description: string) {
  const { t } = useTranslation()
  
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
    '在新窗口/实例中显示活动文件': 'show_in_new_window',
    '查找操作': 'find_action',
    '随处搜索': 'search_everywhere',
    '转到类': 'go_to_class',
    '转到文件': 'go_to_file',
    '转到符号': 'go_to_symbol',
    '复制当前行': 'duplicate_line',
    '删除当前行': 'delete_line',
    '注释/取消注释': 'toggle_comment',
    '增加缩进': 'indent',
    '减少缩进': 'outdent',
    '在当前文件中查找': 'find_in_file',
    '在项目中查找': 'find_in_project',
    '查找下一个': 'find_next',
    '切换文件树视图': 'toggle_tree_view',
    '切换全屏': 'toggle_fullscreen',
    '增大字体': 'increase_font_size',
    '向下添加光标': 'add_cursor_below',
    '向上添加光标': 'add_cursor_above',
    '复制当前行或选中内容': 'duplicate_line_selection',
    '注释/取消注释当前行': 'toggle_line_comment',
    '块注释': 'block_comment',
    '跳转到声明': 'go_to_declaration',
    '跳转到实现': 'go_to_implementation',
    '查找使用': 'find_usages',
    '重命名': 'rename',
    '提取方法': 'extract_method',
    '提取变量': 'extract_variable',
    '运行': 'run',
    '调试': 'debug',
    '切换断点': 'toggle_breakpoint',
    '在头文件和源文件之间切换': 'switch_header_source',
    '优化包含': 'optimize_includes',
    '格式化代码': 'format_code',
    '显示键盘快捷键': 'show_keybindings',
    '打开资源': 'open_resource',
    '打开类型': 'open_type',
    '打开搜索对话框': 'open_search_dialog',
    '查找上一个': 'find_previous',
    '转到行': 'go_to_line',
    '转到最后编辑位置': 'go_to_last_edit',
    '下一个问题': 'next_problem',
    '上一个问题': 'previous_problem'
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
      '窗口管理': 'window',
      '查找': 'search',
      '多光标': 'multi_cursor',
      '运行': 'run',
      'C/C++特有': 'cpp_specific',
      '帮助': 'help'
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
      '在新窗口/实例中显示活动文件': 'show_in_new_window',
      '查找操作': 'find_action',
      '随处搜索': 'search_everywhere',
      '转到类': 'go_to_class',
      '转到文件': 'go_to_file',
      '转到符号': 'go_to_symbol',
      '复制当前行': 'duplicate_line',
      '删除当前行': 'delete_line',
      '注释/取消注释': 'toggle_comment',
      '增加缩进': 'indent',
      '减少缩进': 'outdent',
      '在当前文件中查找': 'find_in_file',
      '在项目中查找': 'find_in_project',
      '查找下一个': 'find_next',
      '切换文件树视图': 'toggle_tree_view',
      '切换全屏': 'toggle_fullscreen',
      '增大字体': 'increase_font_size',
      '向下添加光标': 'add_cursor_below',
      '向上添加光标': 'add_cursor_above',
      '复制当前行或选中内容': 'duplicate_line_selection',
      '注释/取消注释当前行': 'toggle_line_comment',
      '块注释': 'block_comment',
      '跳转到声明': 'go_to_declaration',
      '跳转到实现': 'go_to_implementation',
      '查找使用': 'find_usages',
      '重命名': 'rename',
      '提取方法': 'extract_method',
      '提取变量': 'extract_variable',
      '运行': 'run',
      '调试': 'debug',
      '切换断点': 'toggle_breakpoint',
      '在头文件和源文件之间切换': 'switch_header_source',
      '优化包含': 'optimize_includes',
      '格式化代码': 'format_code',
      '显示键盘快捷键': 'show_keybindings',
      '打开资源': 'open_resource',
      '打开类型': 'open_type',
      '打开搜索对话框': 'open_search_dialog',
      '查找上一个': 'find_previous',
      '转到行': 'go_to_line',
      '转到最后编辑位置': 'go_to_last_edit',
      '下一个问题': 'next_problem',
      '上一个问题': 'previous_problem'
    }
    
    const key = descriptionMap[description]
    return key ? t(`shortcutDescriptions.${key}`, description) : description
  }
}