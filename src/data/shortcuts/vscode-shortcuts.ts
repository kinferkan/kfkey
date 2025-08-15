import { Shortcut } from '../../types'

/**
 * Visual Studio Code 快捷键数据
 * 支持 Windows、macOS、Linux 三个平台
 */
export const vscodeShortcuts: Shortcut[] = [
  // Windows版本快捷键
  {
    id: 'vscode-1',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '命令面板',
    category: '通用',
    platform: 'win'
  },
  {
    id: 'vscode-2',
    keys: ['Ctrl', 'P'],
    description: '快速打开文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'vscode-3',
    keys: ['Ctrl', 'Shift', 'N'],
    description: '新建窗口',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-4',
    keys: ['Ctrl', 'Shift', 'W'],
    description: '关闭窗口',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-5',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-6',
    keys: ['Ctrl', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-7',
    keys: ['Ctrl', 'S'],
    description: '保存',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-8',
    keys: ['Ctrl', 'Shift', 'S'],
    description: '另存为',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-9',
    keys: ['Ctrl', 'K', 'S'],
    description: '保存所有',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-10',
    keys: ['Ctrl', 'W'],
    description: '关闭',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-11',
    keys: ['Ctrl', 'K', 'Ctrl', 'W'],
    description: '关闭所有',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-12',
    keys: ['Ctrl', 'Shift', 'T'],
    description: '重新打开关闭的编辑器',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-13',
    keys: ['Ctrl', 'K', 'Enter'],
    description: '保持预览模式编辑器打开',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-14',
    keys: ['Ctrl', 'Tab'],
    description: '打开下一个',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-15',
    keys: ['Ctrl', 'Shift', 'Tab'],
    description: '打开上一个',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-16',
    keys: ['Ctrl', 'K', 'P'],
    description: '复制活动文件的路径',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-17',
    keys: ['Ctrl', 'K', 'R'],
    description: '在资源管理器中显示活动文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'vscode-18',
    keys: ['Ctrl', 'K', 'O'],
    description: '在新窗口/实例中显示活动文件',
    category: '文件',
    platform: 'win'
  },

  // macOS版本快捷键
  {
    id: 'vscode-1-mac',
    keys: ['Cmd', 'Shift', 'P'],
    description: '命令面板',
    category: '通用',
    platform: 'mac'
  },
  {
    id: 'vscode-2-mac',
    keys: ['Cmd', 'P'],
    description: '快速打开文件',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'vscode-3-mac',
    keys: ['Cmd', 'Shift', 'N'],
    description: '新建窗口',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'vscode-4-mac',
    keys: ['Cmd', 'Shift', 'W'],
    description: '关闭窗口',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'vscode-5-mac',
    keys: ['Cmd', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'vscode-6-mac',
    keys: ['Cmd', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'vscode-7-mac',
    keys: ['Cmd', 'S'],
    description: '保存',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'vscode-8-mac',
    keys: ['Cmd', 'Shift', 'S'],
    description: '另存为',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'vscode-9-mac',
    keys: ['Cmd', 'Option', 'S'],
    description: '保存所有',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'vscode-10-mac',
    keys: ['Cmd', 'W'],
    description: '关闭',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'vscode-11-mac',
    keys: ['Cmd', 'K', 'Cmd', 'W'],
    description: '关闭所有',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'vscode-12-mac',
    keys: ['Cmd', 'Shift', 'T'],
    description: '重新打开关闭的编辑器',
    category: '文件',
    platform: 'mac'
  },

  // Linux版本快捷键
  {
    id: 'vscode-1-linux',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '命令面板',
    category: '通用',
    platform: 'linux'
  },
  {
    id: 'vscode-2-linux',
    keys: ['Ctrl', 'P'],
    description: '快速打开文件',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'vscode-5-linux',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'vscode-7-linux',
    keys: ['Ctrl', 'S'],
    description: '保存',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'vscode-10-linux',
    keys: ['Ctrl', 'W'],
    description: '关闭',
    category: '文件',
    platform: 'linux'
  }
]