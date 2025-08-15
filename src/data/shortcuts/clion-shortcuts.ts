import { Shortcut } from '../../types'

export const clionShortcuts: Shortcut[] = [
  // 编辑
  {
    id: 'clion-duplicate-line',
    keys: ['Ctrl', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-duplicate-line-mac',
    keys: ['Cmd', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'clion-delete-line',
    keys: ['Ctrl', 'Y'],
    description: '删除当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-delete-line-mac',
    keys: ['Cmd', 'Backspace'],
    description: '删除当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'clion-comment-line',
    keys: ['Ctrl', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-comment-line-mac',
    keys: ['Cmd', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'clion-block-comment',
    keys: ['Ctrl', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-block-comment-mac',
    keys: ['Cmd', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'mac'
  },
  
  // 导航
  {
    id: 'clion-goto-declaration',
    keys: ['Ctrl', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'clion-goto-declaration-mac',
    keys: ['Cmd', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'clion-goto-implementation',
    keys: ['Ctrl', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'clion-goto-implementation-mac',
    keys: ['Cmd', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'clion-find-usages',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'clion-find-usages-mac',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '导航',
    platform: 'mac'
  },
  
  // 重构
  {
    id: 'clion-rename',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'clion-rename-mac',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'clion-extract-method',
    keys: ['Ctrl', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'clion-extract-method-mac',
    keys: ['Cmd', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'clion-extract-variable',
    keys: ['Ctrl', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'clion-extract-variable-mac',
    keys: ['Cmd', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'mac'
  },
  
  // 运行和调试
  {
    id: 'clion-run',
    keys: ['Shift', 'F10'],
    description: '运行',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'clion-run-mac',
    keys: ['Ctrl', 'R'],
    description: '运行',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'clion-debug',
    keys: ['Shift', 'F9'],
    description: '调试',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'clion-debug-mac',
    keys: ['Ctrl', 'D'],
    description: '调试',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'clion-toggle-breakpoint',
    keys: ['Ctrl', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'clion-toggle-breakpoint-mac',
    keys: ['Cmd', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'mac'
  },
  
  // C/C++特有
  {
    id: 'clion-switch-header-source',
    keys: ['Ctrl', 'Tab'],
    description: '在头文件和源文件之间切换',
    category: 'C/C++特有',
    platform: 'win'
  },
  {
    id: 'clion-switch-header-source-mac',
    keys: ['Cmd', 'Tab'],
    description: '在头文件和源文件之间切换',
    category: 'C/C++特有',
    platform: 'mac'
  },
  {
    id: 'clion-optimize-includes',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化包含',
    category: 'C/C++特有',
    platform: 'win'
  },
  {
    id: 'clion-optimize-includes-mac',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化包含',
    category: 'C/C++特有',
    platform: 'mac'
  },
  {
    id: 'clion-format-code',
    keys: ['Ctrl', 'Alt', 'L'],
    description: '格式化代码',
    category: 'C/C++特有',
    platform: 'win'
  },
  {
    id: 'clion-format-code-mac',
    keys: ['Cmd', 'Alt', 'L'],
    description: '格式化代码',
    category: 'C/C++特有',
    platform: 'mac'
  }
]