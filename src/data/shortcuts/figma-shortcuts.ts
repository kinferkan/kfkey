import { Shortcut } from '../../types'

/**
 * Figma 快捷键数据
 * 支持 Windows、macOS、Linux 三个平台
 */
export const figmaShortcuts: Shortcut[] = [
  // Windows版本快捷键
  {
    id: 'figma-1',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'figma-2',
    keys: ['Ctrl', 'O'],
    description: '打开文件浏览器',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'figma-3',
    keys: ['Ctrl', 'S'],
    description: '保存到版本历史',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'figma-4',
    keys: ['Ctrl', 'Shift', 'E'],
    description: '导出',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'figma-5',
    keys: ['V'],
    description: '移动工具',
    category: '工具',
    platform: 'win'
  },
  {
    id: 'figma-6',
    keys: ['F'],
    description: '框架工具',
    category: '工具',
    platform: 'win'
  },
  {
    id: 'figma-7',
    keys: ['R'],
    description: '矩形工具',
    category: '工具',
    platform: 'win'
  },
  {
    id: 'figma-8',
    keys: ['O'],
    description: '椭圆工具',
    category: '工具',
    platform: 'win'
  },
  {
    id: 'figma-9',
    keys: ['L'],
    description: '直线工具',
    category: '工具',
    platform: 'win'
  },
  {
    id: 'figma-10',
    keys: ['T'],
    description: '文本工具',
    category: '工具',
    platform: 'win'
  },

  // macOS版本快捷键
  {
    id: 'figma-1-mac',
    keys: ['Cmd', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'figma-2-mac',
    keys: ['Cmd', 'O'],
    description: '打开文件浏览器',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'figma-3-mac',
    keys: ['Cmd', 'S'],
    description: '保存到版本历史',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'figma-5-mac',
    keys: ['V'],
    description: '移动工具',
    category: '工具',
    platform: 'mac'
  },
  {
    id: 'figma-6-mac',
    keys: ['F'],
    description: '框架工具',
    category: '工具',
    platform: 'mac'
  },

  // Linux版本快捷键
  {
    id: 'figma-1-linux',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'figma-2-linux',
    keys: ['Ctrl', 'O'],
    description: '打开文件浏览器',
    category: '文件',
    platform: 'linux'
  }
]