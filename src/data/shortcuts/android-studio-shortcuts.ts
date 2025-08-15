import { Shortcut } from '../../types'

/**
 * Android Studio 快捷键数据
 * 支持 Windows、macOS、Linux 三个平台
 */
export const androidStudioShortcuts: Shortcut[] = [
  // Windows版本快捷键
  {
    id: 'android-1',
    keys: ['Ctrl', 'Shift', 'A'],
    description: '查找操作',
    category: '通用',
    platform: 'win'
  },
  {
    id: 'android-2',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'android-3',
    keys: ['Ctrl', 'N'],
    description: '转到类',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'android-4',
    keys: ['Ctrl', 'Shift', 'N'],
    description: '转到文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'android-5',
    keys: ['Ctrl', 'Alt', 'Shift', 'N'],
    description: '转到符号',
    category: '导航',
    platform: 'win'
  },

  // macOS版本快捷键
  {
    id: 'android-1-mac',
    keys: ['Cmd', 'Shift', 'A'],
    description: '查找操作',
    category: '通用',
    platform: 'mac'
  },
  {
    id: 'android-2-mac',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '搜索',
    platform: 'mac'
  },

  // Linux版本快捷键
  {
    id: 'android-1-linux',
    keys: ['Ctrl', 'Shift', 'A'],
    description: '查找操作',
    category: '通用',
    platform: 'linux'
  }
]