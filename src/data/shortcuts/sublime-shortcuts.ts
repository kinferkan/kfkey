import { Shortcut } from '../../types'

/**
 * Sublime Text 快捷键数据
 * 支持 Windows、macOS、Linux 三个平台
 */
export const sublimeShortcuts: Shortcut[] = [
  // Windows版本快捷键
  {
    id: 'sublime-1',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '命令面板',
    category: '通用',
    platform: 'win'
  },
  {
    id: 'sublime-2',
    keys: ['Ctrl', 'P'],
    description: '转到任何内容',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'sublime-3',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'sublime-4',
    keys: ['Ctrl', 'R'],
    description: '转到符号',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'sublime-5',
    keys: ['Ctrl', 'Shift', 'R'],
    description: '转到项目中的符号',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'sublime-6',
    keys: ['Ctrl', 'D'],
    description: '选择单词',
    category: '选择',
    platform: 'win'
  },
  {
    id: 'sublime-7',
    keys: ['Ctrl', 'L'],
    description: '选择行',
    category: '选择',
    platform: 'win'
  },
  {
    id: 'sublime-8',
    keys: ['Ctrl', 'Shift', 'L'],
    description: '将选择拆分为行',
    category: '选择',
    platform: 'win'
  },
  {
    id: 'sublime-9',
    keys: ['Ctrl', 'Shift', 'M'],
    description: '选择括号内容',
    category: '选择',
    platform: 'win'
  },
  {
    id: 'sublime-10',
    keys: ['Ctrl', 'M'],
    description: '跳转到匹配的括号',
    category: '导航',
    platform: 'win'
  },

  // macOS版本快捷键
  {
    id: 'sublime-1-mac',
    keys: ['Cmd', 'Shift', 'P'],
    description: '命令面板',
    category: '通用',
    platform: 'mac'
  },
  {
    id: 'sublime-2-mac',
    keys: ['Cmd', 'P'],
    description: '转到任何内容',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'sublime-3-mac',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'sublime-4-mac',
    keys: ['Cmd', 'R'],
    description: '转到符号',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'sublime-6-mac',
    keys: ['Cmd', 'D'],
    description: '选择单词',
    category: '选择',
    platform: 'mac'
  },
  {
    id: 'sublime-7-mac',
    keys: ['Cmd', 'L'],
    description: '选择行',
    category: '选择',
    platform: 'mac'
  },

  // Linux版本快捷键
  {
    id: 'sublime-1-linux',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '命令面板',
    category: '通用',
    platform: 'linux'
  },
  {
    id: 'sublime-2-linux',
    keys: ['Ctrl', 'P'],
    description: '转到任何内容',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'sublime-6-linux',
    keys: ['Ctrl', 'D'],
    description: '选择单词',
    category: '选择',
    platform: 'linux'
  }
]