import { Shortcut } from '../../types'

export const chromeDevtoolsShortcuts: Shortcut[] = [
  // 打开DevTools
  {
    id: 'chrome-devtools-open',
    keys: ['F12'],
    description: '打开开发者工具',
    category: '基础',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-open-mac',
    keys: ['Cmd', 'Option', 'I'],
    description: '打开开发者工具',
    category: '基础',
    platform: 'mac'
  },
  {
    id: 'chrome-devtools-open-alt',
    keys: ['Ctrl', 'Shift', 'I'],
    description: '打开开发者工具',
    category: '基础',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-open-elements',
    keys: ['Ctrl', 'Shift', 'C'],
    description: '打开开发者工具并聚焦元素面板',
    category: '基础',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-open-elements-mac',
    keys: ['Cmd', 'Shift', 'C'],
    description: '打开开发者工具并聚焦元素面板',
    category: '基础',
    platform: 'mac'
  },
  
  // 面板导航
  {
    id: 'chrome-devtools-panel-elements',
    keys: ['Ctrl', '1'],
    description: '切换到元素面板',
    category: '面板导航',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-panel-elements-mac',
    keys: ['Cmd', '1'],
    description: '切换到元素面板',
    category: '面板导航',
    platform: 'mac'
  },
  {
    id: 'chrome-devtools-panel-console',
    keys: ['Ctrl', '2'],
    description: '切换到控制台面板',
    category: '面板导航',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-panel-console-mac',
    keys: ['Cmd', '2'],
    description: '切换到控制台面板',
    category: '面板导航',
    platform: 'mac'
  },
  {
    id: 'chrome-devtools-panel-sources',
    keys: ['Ctrl', '3'],
    description: '切换到源代码面板',
    category: '面板导航',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-panel-sources-mac',
    keys: ['Cmd', '3'],
    description: '切换到源代码面板',
    category: '面板导航',
    platform: 'mac'
  },
  {
    id: 'chrome-devtools-panel-network',
    keys: ['Ctrl', '4'],
    description: '切换到网络面板',
    category: '面板导航',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-panel-network-mac',
    keys: ['Cmd', '4'],
    description: '切换到网络面板',
    category: '面板导航',
    platform: 'mac'
  },
  
  // 控制台
  {
    id: 'chrome-devtools-console-clear',
    keys: ['Ctrl', 'L'],
    description: '清空控制台',
    category: '控制台',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-console-clear-mac',
    keys: ['Cmd', 'K'],
    description: '清空控制台',
    category: '控制台',
    platform: 'mac'
  },
  {
    id: 'chrome-devtools-console-execute',
    keys: ['Enter'],
    description: '执行控制台命令',
    category: '控制台',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-console-execute-mac',
    keys: ['Enter'],
    description: '执行控制台命令',
    category: '控制台',
    platform: 'mac'
  },
  {
    id: 'chrome-devtools-console-multiline',
    keys: ['Shift', 'Enter'],
    description: '控制台多行输入',
    category: '控制台',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-console-multiline-mac',
    keys: ['Shift', 'Enter'],
    description: '控制台多行输入',
    category: '控制台',
    platform: 'mac'
  },
  
  // 元素面板
  {
    id: 'chrome-devtools-elements-edit',
    keys: ['F2'],
    description: '编辑HTML元素',
    category: '元素面板',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-elements-edit-mac',
    keys: ['Enter'],
    description: '编辑HTML元素',
    category: '元素面板',
    platform: 'mac'
  },
  {
    id: 'chrome-devtools-elements-hide',
    keys: ['H'],
    description: '隐藏元素',
    category: '元素面板',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-elements-hide-mac',
    keys: ['H'],
    description: '隐藏元素',
    category: '元素面板',
    platform: 'mac'
  },
  
  // 调试
  {
    id: 'chrome-devtools-debug-continue',
    keys: ['F8'],
    description: '继续执行',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-debug-continue-mac',
    keys: ['F8'],
    description: '继续执行',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'chrome-devtools-debug-step-over',
    keys: ['F10'],
    description: '单步跳过',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-debug-step-over-mac',
    keys: ['F10'],
    description: '单步跳过',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'chrome-devtools-debug-step-into',
    keys: ['F11'],
    description: '单步进入',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'chrome-devtools-debug-step-into-mac',
    keys: ['F11'],
    description: '单步进入',
    category: '调试',
    platform: 'mac'
  }
]