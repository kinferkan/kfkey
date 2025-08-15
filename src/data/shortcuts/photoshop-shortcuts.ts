import { Shortcut } from '../../types'

/**
 * Adobe Photoshop 快捷键数据
 * 支持 Windows、macOS、Linux 三个平台
 */
export const photoshopShortcuts: Shortcut[] = [
  // Windows版本快捷键
  {
    id: 'ps-1',
    keys: ['Ctrl', 'N'],
    description: '新建',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'ps-2',
    keys: ['Ctrl', 'O'],
    description: '打开',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'ps-3',
    keys: ['Ctrl', 'S'],
    description: '保存',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'ps-4',
    keys: ['Ctrl', 'Shift', 'S'],
    description: '另存为',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'ps-5',
    keys: ['Ctrl', 'Alt', 'Shift', 'S'],
    description: '存储为Web所用格式',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'ps-6',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'ps-7',
    keys: ['Ctrl', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'ps-8',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'ps-9',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'ps-10',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'win'
  },

  // macOS版本快捷键
  {
    id: 'ps-1-mac',
    keys: ['Cmd', 'N'],
    description: '新建',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'ps-2-mac',
    keys: ['Cmd', 'O'],
    description: '打开',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'ps-3-mac',
    keys: ['Cmd', 'S'],
    description: '保存',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'ps-6-mac',
    keys: ['Cmd', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'ps-7-mac',
    keys: ['Cmd', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'mac'
  },

  // Linux版本快捷键
  {
    id: 'ps-1-linux',
    keys: ['Ctrl', 'N'],
    description: '新建',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'ps-2-linux',
    keys: ['Ctrl', 'O'],
    description: '打开',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'ps-3-linux',
    keys: ['Ctrl', 'S'],
    description: '保存',
    category: '文件',
    platform: 'linux'
  }
]