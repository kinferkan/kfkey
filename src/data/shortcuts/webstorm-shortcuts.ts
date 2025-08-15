import { Shortcut } from '../../types'

export const webstormShortcuts: Shortcut[] = [
  // 编辑
  {
    id: 'webstorm-duplicate-line',
    keys: ['Ctrl', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'webstorm-duplicate-line-mac',
    keys: ['Cmd', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'webstorm-delete-line',
    keys: ['Ctrl', 'Y'],
    description: '删除当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'webstorm-delete-line-mac',
    keys: ['Cmd', 'Backspace'],
    description: '删除当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'webstorm-comment-line',
    keys: ['Ctrl', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'webstorm-comment-line-mac',
    keys: ['Cmd', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'webstorm-block-comment',
    keys: ['Ctrl', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'webstorm-block-comment-mac',
    keys: ['Cmd', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'mac'
  },
  
  // 导航
  {
    id: 'webstorm-goto-declaration',
    keys: ['Ctrl', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'webstorm-goto-declaration-mac',
    keys: ['Cmd', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'webstorm-goto-file',
    keys: ['Ctrl', 'Shift', 'N'],
    description: '按文件名查找文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'webstorm-goto-file-mac',
    keys: ['Cmd', 'Shift', 'O'],
    description: '按文件名查找文件',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'webstorm-recent-files',
    keys: ['Ctrl', 'E'],
    description: '最近打开的文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'webstorm-recent-files-mac',
    keys: ['Cmd', 'E'],
    description: '最近打开的文件',
    category: '导航',
    platform: 'mac'
  },
  
  // 代码
  {
    id: 'webstorm-code-completion',
    keys: ['Ctrl', 'Space'],
    description: '代码补全',
    category: '代码',
    platform: 'win'
  },
  {
    id: 'webstorm-code-completion-mac',
    keys: ['Ctrl', 'Space'],
    description: '代码补全',
    category: '代码',
    platform: 'mac'
  },
  {
    id: 'webstorm-reformat-code',
    keys: ['Ctrl', 'Alt', 'L'],
    description: '格式化代码',
    category: '代码',
    platform: 'win'
  },
  {
    id: 'webstorm-reformat-code-mac',
    keys: ['Cmd', 'Alt', 'L'],
    description: '格式化代码',
    category: '代码',
    platform: 'mac'
  },
  {
    id: 'webstorm-optimize-imports',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: '代码',
    platform: 'win'
  },
  {
    id: 'webstorm-optimize-imports-mac',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: '代码',
    platform: 'mac'
  },
  
  // 重构
  {
    id: 'webstorm-rename',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'webstorm-rename-mac',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'webstorm-extract-variable',
    keys: ['Ctrl', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'webstorm-extract-variable-mac',
    keys: ['Cmd', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'mac'
  },
  
  // 运行
  {
    id: 'webstorm-run',
    keys: ['Shift', 'F10'],
    description: '运行',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'webstorm-run-mac',
    keys: ['Ctrl', 'R'],
    description: '运行',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'webstorm-debug',
    keys: ['Shift', 'F9'],
    description: '调试',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'webstorm-debug-mac',
    keys: ['Ctrl', 'D'],
    description: '调试',
    category: '运行',
    platform: 'mac'
  }
]