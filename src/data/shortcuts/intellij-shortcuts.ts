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
  }
]