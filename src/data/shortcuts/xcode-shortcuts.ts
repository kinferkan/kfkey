import { Shortcut } from '../../types'

/**
 * Xcode 快捷键数据
 * 仅支持 macOS 平台（Xcode 只在 macOS 上运行）
 */
export const xcodeShortcuts: Shortcut[] = [
  // macOS版本快捷键 (Xcode只在macOS上运行)
  {
    id: 'xcode-1',
    keys: ['Cmd', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'xcode-2',
    keys: ['Cmd', 'Shift', 'N'],
    description: '新建项目',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'xcode-3',
    keys: ['Cmd', 'O'],
    description: '打开',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'xcode-4',
    keys: ['Cmd', 'S'],
    description: '保存',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'xcode-5',
    keys: ['Cmd', 'Shift', 'S'],
    description: '保存所有',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'xcode-6',
    keys: ['Cmd', 'R'],
    description: '运行',
    category: '构建',
    platform: 'mac'
  },
  {
    id: 'xcode-7',
    keys: ['Cmd', 'B'],
    description: '构建',
    category: '构建',
    platform: 'mac'
  },
  {
    id: 'xcode-8',
    keys: ['Cmd', 'Shift', 'K'],
    description: '清理构建文件夹',
    category: '构建',
    platform: 'mac'
  },
  {
    id: 'xcode-9',
    keys: ['Cmd', 'U'],
    description: '测试',
    category: '测试',
    platform: 'mac'
  },
  {
    id: 'xcode-10',
    keys: ['Cmd', 'Shift', 'O'],
    description: '快速打开',
    category: '导航',
    platform: 'mac'
  }
]