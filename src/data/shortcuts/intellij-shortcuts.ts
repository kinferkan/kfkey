import { Shortcut } from '../../types'

/**
 * IntelliJ IDEA 快捷键数据
 * 支持 Windows、macOS、Linux 三个平台
 */
export const intellijShortcuts: Shortcut[] = [
  // Windows版本快捷键
  {
    id: 'intellij-1',
    keys: ['Ctrl', 'Shift', 'A'],
    description: '查找操作',
    category: '通用',
    platform: 'win'
  },
  {
    id: 'intellij-2',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'intellij-3',
    keys: ['Ctrl', 'N'],
    description: '转到类',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-4',
    keys: ['Ctrl', 'Shift', 'N'],
    description: '转到文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-5',
    keys: ['Ctrl', 'Alt', 'Shift', 'N'],
    description: '转到符号',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-6',
    keys: ['Alt', 'Right'],
    description: '下一个标签',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-7',
    keys: ['Alt', 'Left'],
    description: '上一个标签',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-8',
    keys: ['F12'],
    description: '回到上一个工具窗口',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-9',
    keys: ['Esc'],
    description: '转到编辑器',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-10',
    keys: ['Shift', 'Esc'],
    description: '隐藏活动或最后活动的窗口',
    category: '导航',
    platform: 'win'
  },

  // macOS版本快捷键
  {
    id: 'intellij-1-mac',
    keys: ['Cmd', 'Shift', 'A'],
    description: '查找操作',
    category: '通用',
    platform: 'mac'
  },
  {
    id: 'intellij-2-mac',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'intellij-3-mac',
    keys: ['Cmd', 'O'],
    description: '转到类',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-4-mac',
    keys: ['Cmd', 'Shift', 'O'],
    description: '转到文件',
    category: '导航',
    platform: 'mac'
  },

  // Linux版本快捷键
  {
    id: 'intellij-1-linux',
    keys: ['Ctrl', 'Shift', 'A'],
    description: '查找操作',
    category: '通用',
    platform: 'linux'
  },
  {
    id: 'intellij-2-linux',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'intellij-3-linux',
    keys: ['Ctrl', 'N'],
    description: '转到类',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'intellij-4-linux',
    keys: ['Ctrl', 'Shift', 'N'],
    description: '转到文件',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'intellij-5-linux',
    keys: ['Ctrl', 'Alt', 'Shift', 'N'],
    description: '转到符号',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'intellij-6-linux',
    keys: ['Alt', 'Right'],
    description: '下一个标签',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'intellij-7-linux',
    keys: ['Alt', 'Left'],
    description: '上一个标签',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'intellij-8-linux',
    keys: ['F12'],
    description: '回到上一个工具窗口',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'intellij-9-linux',
    keys: ['Esc'],
    description: '转到编辑器',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'intellij-10-linux',
    keys: ['Shift', 'Esc'],
    description: '隐藏活动或最后活动的窗口',
    category: '导航',
    platform: 'linux'
  },
  
  // 补充macOS版本的缺失快捷键
  {
    id: 'intellij-5-mac',
    keys: ['Cmd', 'Alt', 'O'],
    description: '转到符号',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-6-mac',
    keys: ['Ctrl', 'Right'],
    description: '下一个标签',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-7-mac',
    keys: ['Ctrl', 'Left'],
    description: '上一个标签',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-8-mac',
    keys: ['F12'],
    description: '回到上一个工具窗口',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-9-mac',
    keys: ['Esc'],
    description: '转到编辑器',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-10-mac',
    keys: ['Shift', 'Esc'],
    description: '隐藏活动或最后活动的窗口',
    category: '导航',
    platform: 'mac'
  },
  
  // 文件操作
  {
    id: 'intellij-new-file',
    keys: ['Ctrl', 'Alt', 'Insert'],
    description: '新建文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'intellij-new-file-mac',
    keys: ['Cmd', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'intellij-new-file-linux',
    keys: ['Ctrl', 'Alt', 'Insert'],
    description: '新建文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'intellij-save',
    keys: ['Ctrl', 'S'],
    description: '保存所有',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'intellij-save-mac',
    keys: ['Cmd', 'S'],
    description: '保存所有',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'intellij-save-linux',
    keys: ['Ctrl', 'S'],
    description: '保存所有',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'intellij-close',
    keys: ['Ctrl', 'F4'],
    description: '关闭',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'intellij-close-mac',
    keys: ['Cmd', 'W'],
    description: '关闭',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'intellij-close-linux',
    keys: ['Ctrl', 'F4'],
    description: '关闭',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'intellij-reopen',
    keys: ['Ctrl', 'Shift', 'T'],
    description: '重新打开最近关闭的文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'intellij-reopen-mac',
    keys: ['Cmd', 'Shift', 'T'],
    description: '重新打开最近关闭的文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'intellij-reopen-linux',
    keys: ['Ctrl', 'Shift', 'T'],
    description: '重新打开最近关闭的文件',
    category: '文件',
    platform: 'linux'
  },
  
  // 编辑操作
  {
    id: 'intellij-undo',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-undo-mac',
    keys: ['Cmd', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-undo-linux',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'intellij-redo',
    keys: ['Ctrl', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-redo-mac',
    keys: ['Cmd', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-redo-linux',
    keys: ['Ctrl', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'intellij-copy',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-copy-mac',
    keys: ['Cmd', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-copy-linux',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'intellij-paste',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-paste-mac',
    keys: ['Cmd', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-paste-linux',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'intellij-cut',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-cut-mac',
    keys: ['Cmd', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-cut-linux',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'intellij-select-all',
    keys: ['Ctrl', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-select-all-mac',
    keys: ['Cmd', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-select-all-linux',
    keys: ['Ctrl', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'intellij-duplicate-line',
    keys: ['Ctrl', 'D'],
    description: '复制行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-duplicate-line-mac',
    keys: ['Cmd', 'D'],
    description: '复制行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-duplicate-line-linux',
    keys: ['Ctrl', 'D'],
    description: '复制行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'intellij-delete-line',
    keys: ['Ctrl', 'Y'],
    description: '删除行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-delete-line-mac',
    keys: ['Cmd', 'Backspace'],
    description: '删除行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-delete-line-linux',
    keys: ['Ctrl', 'Y'],
    description: '删除行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'intellij-move-line-up',
    keys: ['Shift', 'Alt', 'Up'],
    description: '上移行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-move-line-up-mac',
    keys: ['Shift', 'Alt', 'Up'],
    description: '上移行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-move-line-up-linux',
    keys: ['Shift', 'Alt', 'Up'],
    description: '上移行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'intellij-move-line-down',
    keys: ['Shift', 'Alt', 'Down'],
    description: '下移行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-move-line-down-mac',
    keys: ['Shift', 'Alt', 'Down'],
    description: '下移行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-move-line-down-linux',
    keys: ['Shift', 'Alt', 'Down'],
    description: '下移行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'intellij-comment-line',
    keys: ['Ctrl', '/'],
    description: '行注释',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-comment-line-mac',
    keys: ['Cmd', '/'],
    description: '行注释',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-comment-line-linux',
    keys: ['Ctrl', '/'],
    description: '行注释',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'intellij-comment-block',
    keys: ['Ctrl', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-comment-block-mac',
    keys: ['Cmd', 'Alt', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-comment-block-linux',
    keys: ['Ctrl', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'intellij-format-code',
    keys: ['Ctrl', 'Alt', 'L'],
    description: '格式化代码',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-format-code-mac',
    keys: ['Cmd', 'Alt', 'L'],
    description: '格式化代码',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-format-code-linux',
    keys: ['Ctrl', 'Alt', 'L'],
    description: '格式化代码',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'intellij-optimize-imports',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-optimize-imports-mac',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-optimize-imports-linux',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: '编辑',
    platform: 'linux'
  },
  
  // 搜索和替换
  {
    id: 'intellij-find',
    keys: ['Ctrl', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'intellij-find-mac',
    keys: ['Cmd', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'intellij-find-linux',
    keys: ['Ctrl', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'intellij-replace',
    keys: ['Ctrl', 'R'],
    description: '替换',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'intellij-replace-mac',
    keys: ['Cmd', 'R'],
    description: '替换',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'intellij-replace-linux',
    keys: ['Ctrl', 'R'],
    description: '替换',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'intellij-find-in-path',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在路径中查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'intellij-find-in-path-mac',
    keys: ['Cmd', 'Shift', 'F'],
    description: '在路径中查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'intellij-find-in-path-linux',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在路径中查找',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'intellij-replace-in-path',
    keys: ['Ctrl', 'Shift', 'R'],
    description: '在路径中替换',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'intellij-replace-in-path-mac',
    keys: ['Cmd', 'Shift', 'R'],
    description: '在路径中替换',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'intellij-replace-in-path-linux',
    keys: ['Ctrl', 'Shift', 'R'],
    description: '在路径中替换',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'intellij-find-usages',
    keys: ['Alt', 'F7'],
    description: '查找用法',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'intellij-find-usages-mac',
    keys: ['Alt', 'F7'],
    description: '查找用法',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'intellij-find-usages-linux',
    keys: ['Alt', 'F7'],
    description: '查找用法',
    category: '搜索',
    platform: 'linux'
  },
  
  // 导航增强
  {
    id: 'intellij-go-to-declaration',
    keys: ['Ctrl', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-go-to-declaration-mac',
    keys: ['Cmd', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-go-to-declaration-linux',
    keys: ['Ctrl', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'intellij-go-to-implementation',
    keys: ['Ctrl', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-go-to-implementation-mac',
    keys: ['Cmd', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-go-to-implementation-linux',
    keys: ['Ctrl', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'intellij-go-to-line',
    keys: ['Ctrl', 'G'],
    description: '跳转到行',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-go-to-line-mac',
    keys: ['Cmd', 'L'],
    description: '跳转到行',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-go-to-line-linux',
    keys: ['Ctrl', 'G'],
    description: '跳转到行',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'intellij-recent-files',
    keys: ['Ctrl', 'E'],
    description: '最近的文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-recent-files-mac',
    keys: ['Cmd', 'E'],
    description: '最近的文件',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-recent-files-linux',
    keys: ['Ctrl', 'E'],
    description: '最近的文件',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'intellij-back',
    keys: ['Ctrl', 'Alt', 'Left'],
    description: '后退',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-back-mac',
    keys: ['Cmd', '['],
    description: '后退',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-back-linux',
    keys: ['Ctrl', 'Alt', 'Left'],
    description: '后退',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'intellij-forward',
    keys: ['Ctrl', 'Alt', 'Right'],
    description: '前进',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-forward-mac',
    keys: ['Cmd', ']'],
    description: '前进',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-forward-linux',
    keys: ['Ctrl', 'Alt', 'Right'],
    description: '前进',
    category: '导航',
    platform: 'linux'
  },
  
  // 重构
  {
    id: 'intellij-rename',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'intellij-rename-mac',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'intellij-rename-linux',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'linux'
  },
  {
    id: 'intellij-extract-method',
    keys: ['Ctrl', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'intellij-extract-method-mac',
    keys: ['Cmd', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'intellij-extract-method-linux',
    keys: ['Ctrl', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'linux'
  },
  {
    id: 'intellij-extract-variable',
    keys: ['Ctrl', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'intellij-extract-variable-mac',
    keys: ['Cmd', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'intellij-extract-variable-linux',
    keys: ['Ctrl', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'linux'
  },
  {
    id: 'intellij-extract-field',
    keys: ['Ctrl', 'Alt', 'F'],
    description: '提取字段',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'intellij-extract-field-mac',
    keys: ['Cmd', 'Alt', 'F'],
    description: '提取字段',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'intellij-extract-field-linux',
    keys: ['Ctrl', 'Alt', 'F'],
    description: '提取字段',
    category: '重构',
    platform: 'linux'
  },
  {
    id: 'intellij-inline',
    keys: ['Ctrl', 'Alt', 'N'],
    description: '内联',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'intellij-inline-mac',
    keys: ['Cmd', 'Alt', 'N'],
    description: '内联',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'intellij-inline-linux',
    keys: ['Ctrl', 'Alt', 'N'],
    description: '内联',
    category: '重构',
    platform: 'linux'
  },
  
  // 代码生成和智能提示
  {
    id: 'intellij-code-completion',
    keys: ['Ctrl', 'Space'],
    description: '基本代码补全',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'intellij-code-completion-mac',
    keys: ['Ctrl', 'Space'],
    description: '基本代码补全',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'intellij-code-completion-linux',
    keys: ['Ctrl', 'Space'],
    description: '基本代码补全',
    category: '编码辅助',
    platform: 'linux'
  },
  {
    id: 'intellij-smart-completion',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '智能代码补全',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'intellij-smart-completion-mac',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '智能代码补全',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'intellij-smart-completion-linux',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '智能代码补全',
    category: '编码辅助',
    platform: 'linux'
  },
  {
    id: 'intellij-generate',
    keys: ['Alt', 'Insert'],
    description: '生成代码',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'intellij-generate-mac',
    keys: ['Cmd', 'N'],
    description: '生成代码',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'intellij-generate-linux',
    keys: ['Alt', 'Insert'],
    description: '生成代码',
    category: '编码辅助',
    platform: 'linux'
  },
  {
    id: 'intellij-surround-with',
    keys: ['Ctrl', 'Alt', 'T'],
    description: '包围代码',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'intellij-surround-with-mac',
    keys: ['Cmd', 'Alt', 'T'],
    description: '包围代码',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'intellij-surround-with-linux',
    keys: ['Ctrl', 'Alt', 'T'],
    description: '包围代码',
    category: '编码辅助',
    platform: 'linux'
  },
  {
    id: 'intellij-quick-fix',
    keys: ['Alt', 'Enter'],
    description: '显示意图操作和快速修复',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'intellij-quick-fix-mac',
    keys: ['Alt', 'Enter'],
    description: '显示意图操作和快速修复',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'intellij-quick-fix-linux',
    keys: ['Alt', 'Enter'],
    description: '显示意图操作和快速修复',
    category: '编码辅助',
    platform: 'linux'
  },
  
  // 运行和调试
  {
    id: 'intellij-run',
    keys: ['Shift', 'F10'],
    description: '运行',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'intellij-run-mac',
    keys: ['Ctrl', 'R'],
    description: '运行',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'intellij-run-linux',
    keys: ['Shift', 'F10'],
    description: '运行',
    category: '运行',
    platform: 'linux'
  },
  {
    id: 'intellij-debug',
    keys: ['Shift', 'F9'],
    description: '调试',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'intellij-debug-mac',
    keys: ['Ctrl', 'D'],
    description: '调试',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'intellij-debug-linux',
    keys: ['Shift', 'F9'],
    description: '调试',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'intellij-step-over',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'intellij-step-over-mac',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'intellij-step-over-linux',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'intellij-step-into',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'intellij-step-into-mac',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'intellij-step-into-linux',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'intellij-step-out',
    keys: ['Shift', 'F8'],
    description: '单步跳出',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'intellij-step-out-mac',
    keys: ['Shift', 'F8'],
    description: '单步跳出',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'intellij-step-out-linux',
    keys: ['Shift', 'F8'],
    description: '单步跳出',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'intellij-resume',
    keys: ['F9'],
    description: '继续执行',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'intellij-resume-mac',
    keys: ['F9'],
    description: '继续执行',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'intellij-resume-linux',
    keys: ['F9'],
    description: '继续执行',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'intellij-toggle-breakpoint',
    keys: ['Ctrl', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'intellij-toggle-breakpoint-mac',
    keys: ['Cmd', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'intellij-toggle-breakpoint-linux',
    keys: ['Ctrl', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'intellij-evaluate-expression',
    keys: ['Alt', 'F8'],
    description: '计算表达式',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'intellij-evaluate-expression-mac',
    keys: ['Alt', 'F8'],
    description: '计算表达式',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'intellij-evaluate-expression-linux',
    keys: ['Alt', 'F8'],
    description: '计算表达式',
    category: '调试',
    platform: 'linux'
  }
]