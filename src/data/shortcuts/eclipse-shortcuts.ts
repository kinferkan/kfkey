import { Shortcut } from '../../types'

/**
 * Eclipse IDE 快捷键数据
 * 支持 Windows、macOS、Linux 三个平台
 */
export const eclipseShortcuts: Shortcut[] = [
  // Windows版本快捷键
  {
    id: 'eclipse-1',
    keys: ['Ctrl', 'Shift', 'L'],
    description: '显示键盘快捷键',
    category: '帮助',
    platform: 'win'
  },
  {
    id: 'eclipse-2',
    keys: ['Ctrl', 'Shift', 'R'],
    description: '打开资源',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'eclipse-3',
    keys: ['Ctrl', 'Shift', 'T'],
    description: '打开类型',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'eclipse-4',
    keys: ['Ctrl', 'H'],
    description: '打开搜索对话框',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'eclipse-5',
    keys: ['Ctrl', 'K'],
    description: '查找下一个',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'eclipse-6',
    keys: ['Ctrl', 'Shift', 'K'],
    description: '查找上一个',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'eclipse-7',
    keys: ['Ctrl', 'L'],
    description: '转到行',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'eclipse-8',
    keys: ['Ctrl', 'Q'],
    description: '转到最后编辑位置',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'eclipse-9',
    keys: ['Ctrl', '.'],
    description: '下一个问题',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'eclipse-10',
    keys: ['Ctrl', ','],
    description: '上一个问题',
    category: '导航',
    platform: 'win'
  },

  // macOS版本快捷键
  {
    id: 'eclipse-1-mac',
    keys: ['Cmd', 'Shift', 'L'],
    description: '显示键盘快捷键',
    category: '帮助',
    platform: 'mac'
  },
  {
    id: 'eclipse-2-mac',
    keys: ['Cmd', 'Shift', 'R'],
    description: '打开资源',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'eclipse-3-mac',
    keys: ['Cmd', 'Shift', 'T'],
    description: '打开类型',
    category: '导航',
    platform: 'mac'
  },

  // Linux版本快捷键
  {
    id: 'eclipse-1-linux',
    keys: ['Ctrl', 'Shift', 'L'],
    description: '显示键盘快捷键',
    category: '帮助',
    platform: 'linux'
  },
  {
    id: 'eclipse-2-linux',
    keys: ['Ctrl', 'Shift', 'R'],
    description: '打开资源',
    category: '导航',
    platform: 'linux'
  }
]