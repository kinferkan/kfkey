import { Shortcut } from '../../types'

export const golandShortcuts: Shortcut[] = [
  // 编辑
  {
    id: 'goland-duplicate-line',
    keys: ['Ctrl', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'goland-duplicate-line-mac',
    keys: ['Cmd', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'goland-delete-line',
    keys: ['Ctrl', 'Y'],
    description: '删除当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'goland-delete-line-mac',
    keys: ['Cmd', 'Backspace'],
    description: '删除当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'goland-comment-line',
    keys: ['Ctrl', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'goland-comment-line-mac',
    keys: ['Cmd', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'mac'
  },
  
  // 导航
  {
    id: 'goland-goto-declaration',
    keys: ['Ctrl', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'goland-goto-declaration-mac',
    keys: ['Cmd', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'goland-goto-implementation',
    keys: ['Ctrl', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'goland-goto-implementation-mac',
    keys: ['Cmd', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'goland-find-usages',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'goland-find-usages-mac',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '导航',
    platform: 'mac'
  },
  
  // 重构
  {
    id: 'goland-rename',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'goland-rename-mac',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'goland-extract-method',
    keys: ['Ctrl', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'goland-extract-method-mac',
    keys: ['Cmd', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'goland-extract-variable',
    keys: ['Ctrl', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'goland-extract-variable-mac',
    keys: ['Cmd', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'mac'
  },
  
  // 运行和调试
  {
    id: 'goland-run',
    keys: ['Shift', 'F10'],
    description: '运行',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'goland-run-mac',
    keys: ['Ctrl', 'R'],
    description: '运行',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'goland-debug',
    keys: ['Shift', 'F9'],
    description: '调试',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'goland-debug-mac',
    keys: ['Ctrl', 'D'],
    description: '调试',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'goland-toggle-breakpoint',
    keys: ['Ctrl', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'goland-toggle-breakpoint-mac',
    keys: ['Cmd', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'mac'
  },
  
  // Go特有
  {
    id: 'goland-go-to-test',
    keys: ['Ctrl', 'Shift', 'T'],
    description: '在测试和代码之间切换',
    category: 'Go特有',
    platform: 'win'
  },
  {
    id: 'goland-go-to-test-mac',
    keys: ['Cmd', 'Shift', 'T'],
    description: '在测试和代码之间切换',
    category: 'Go特有',
    platform: 'mac'
  },
  {
    id: 'goland-implement-interface',
    keys: ['Ctrl', 'I'],
    description: '实现接口',
    category: 'Go特有',
    platform: 'win'
  },
  {
    id: 'goland-implement-interface-mac',
    keys: ['Cmd', 'I'],
    description: '实现接口',
    category: 'Go特有',
    platform: 'mac'
  },
  {
    id: 'goland-optimize-imports',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: 'Go特有',
    platform: 'win'
  },
  {
    id: 'goland-optimize-imports-mac',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: 'Go特有',
    platform: 'mac'
  },
  {
    id: 'goland-format-code',
    keys: ['Ctrl', 'Alt', 'L'],
    description: '格式化代码',
    category: 'Go特有',
    platform: 'win'
  },
  {
    id: 'goland-format-code-mac',
    keys: ['Cmd', 'Alt', 'L'],
    description: '格式化代码',
    category: 'Go特有',
    platform: 'mac'
  }
]