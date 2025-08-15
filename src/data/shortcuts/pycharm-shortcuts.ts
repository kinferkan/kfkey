import { Shortcut } from '../../types'

export const pycharmShortcuts: Shortcut[] = [
  // 编辑
  {
    id: 'pycharm-duplicate-line',
    keys: ['Ctrl', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-duplicate-line-mac',
    keys: ['Cmd', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'pycharm-delete-line',
    keys: ['Ctrl', 'Y'],
    description: '删除当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-delete-line-mac',
    keys: ['Cmd', 'Backspace'],
    description: '删除当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'pycharm-comment-line',
    keys: ['Ctrl', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-comment-line-mac',
    keys: ['Cmd', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'pycharm-block-comment',
    keys: ['Ctrl', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-block-comment-mac',
    keys: ['Cmd', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'mac'
  },
  
  // 导航
  {
    id: 'pycharm-goto-declaration',
    keys: ['Ctrl', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'pycharm-goto-declaration-mac',
    keys: ['Cmd', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'pycharm-goto-implementation',
    keys: ['Ctrl', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'pycharm-goto-implementation-mac',
    keys: ['Cmd', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'pycharm-find-usages',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'pycharm-find-usages-mac',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '导航',
    platform: 'mac'
  },
  
  // 重构
  {
    id: 'pycharm-rename',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'pycharm-rename-mac',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'pycharm-extract-method',
    keys: ['Ctrl', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'pycharm-extract-method-mac',
    keys: ['Cmd', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'pycharm-extract-variable',
    keys: ['Ctrl', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'pycharm-extract-variable-mac',
    keys: ['Cmd', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'mac'
  },
  
  // 运行和调试
  {
    id: 'pycharm-run',
    keys: ['Shift', 'F10'],
    description: '运行',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'pycharm-run-mac',
    keys: ['Ctrl', 'R'],
    description: '运行',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'pycharm-debug',
    keys: ['Shift', 'F9'],
    description: '调试',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'pycharm-debug-mac',
    keys: ['Ctrl', 'D'],
    description: '调试',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'pycharm-toggle-breakpoint',
    keys: ['Ctrl', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'pycharm-toggle-breakpoint-mac',
    keys: ['Cmd', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'mac'
  },
  
  // Python特有
  {
    id: 'pycharm-quick-docs',
    keys: ['Ctrl', 'Q'],
    description: '查看文档',
    category: 'Python特有',
    platform: 'win'
  },
  {
    id: 'pycharm-quick-docs-mac',
    keys: ['F1'],
    description: '查看文档',
    category: 'Python特有',
    platform: 'mac'
  },
  {
    id: 'pycharm-optimize-imports',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: 'Python特有',
    platform: 'win'
  },
  {
    id: 'pycharm-optimize-imports-mac',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: 'Python特有',
    platform: 'mac'
  },
  {
    id: 'pycharm-format-code',
    keys: ['Ctrl', 'Alt', 'L'],
    description: '格式化代码',
    category: 'Python特有',
    platform: 'win'
  },
  {
    id: 'pycharm-format-code-mac',
    keys: ['Cmd', 'Alt', 'L'],
    description: '格式化代码',
    category: 'Python特有',
    platform: 'mac'
  }
]