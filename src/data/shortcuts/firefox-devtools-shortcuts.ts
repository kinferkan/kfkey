import { Shortcut } from '../../types'

export const firefoxDevtoolsShortcuts: Shortcut[] = [
  // 打开DevTools
  {
    id: 'firefox-devtools-open',
    keys: ['F12'],
    description: '打开开发者工具',
    category: '基础',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-open-mac',
    keys: ['Cmd', 'Option', 'I'],
    description: '打开开发者工具',
    category: '基础',
    platform: 'mac'
  },
  {
    id: 'firefox-devtools-open-alt',
    keys: ['Ctrl', 'Shift', 'I'],
    description: '打开开发者工具',
    category: '基础',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-inspect',
    keys: ['Ctrl', 'Shift', 'C'],
    description: '检查元素',
    category: '基础',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-inspect-mac',
    keys: ['Cmd', 'Option', 'C'],
    description: '检查元素',
    category: '基础',
    platform: 'mac'
  },
  
  // 面板导航
  {
    id: 'firefox-devtools-panel-inspector',
    keys: ['Ctrl', 'Shift', 'C'],
    description: '切换到查看器面板',
    category: '面板导航',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-panel-inspector-mac',
    keys: ['Cmd', 'Option', 'C'],
    description: '切换到查看器面板',
    category: '面板导航',
    platform: 'mac'
  },
  {
    id: 'firefox-devtools-panel-console',
    keys: ['Ctrl', 'Shift', 'K'],
    description: '切换到控制台面板',
    category: '面板导航',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-panel-console-mac',
    keys: ['Cmd', 'Option', 'K'],
    description: '切换到控制台面板',
    category: '面板导航',
    platform: 'mac'
  },
  {
    id: 'firefox-devtools-panel-debugger',
    keys: ['Ctrl', 'Shift', 'S'],
    description: '切换到调试器面板',
    category: '面板导航',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-panel-debugger-mac',
    keys: ['Cmd', 'Option', 'S'],
    description: '切换到调试器面板',
    category: '面板导航',
    platform: 'mac'
  },
  {
    id: 'firefox-devtools-panel-network',
    keys: ['Ctrl', 'Shift', 'E'],
    description: '切换到网络面板',
    category: '面板导航',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-panel-network-mac',
    keys: ['Cmd', 'Option', 'E'],
    description: '切换到网络面板',
    category: '面板导航',
    platform: 'mac'
  },
  
  // 控制台
  {
    id: 'firefox-devtools-console-clear',
    keys: ['Ctrl', 'L'],
    description: '清空控制台',
    category: '控制台',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-console-clear-mac',
    keys: ['Cmd', 'K'],
    description: '清空控制台',
    category: '控制台',
    platform: 'mac'
  },
  {
    id: 'firefox-devtools-console-execute',
    keys: ['Enter'],
    description: '执行控制台命令',
    category: '控制台',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-console-execute-mac',
    keys: ['Enter'],
    description: '执行控制台命令',
    category: '控制台',
    platform: 'mac'
  },
  {
    id: 'firefox-devtools-console-multiline',
    keys: ['Shift', 'Enter'],
    description: '控制台多行输入',
    category: '控制台',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-console-multiline-mac',
    keys: ['Shift', 'Enter'],
    description: '控制台多行输入',
    category: '控制台',
    platform: 'mac'
  },
  
  // 调试
  {
    id: 'firefox-devtools-debug-continue',
    keys: ['F8'],
    description: '继续执行',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-debug-continue-mac',
    keys: ['F8'],
    description: '继续执行',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'firefox-devtools-debug-step-over',
    keys: ['F10'],
    description: '单步跳过',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-debug-step-over-mac',
    keys: ['F10'],
    description: '单步跳过',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'firefox-devtools-debug-step-into',
    keys: ['F11'],
    description: '单步进入',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-debug-step-into-mac',
    keys: ['F11'],
    description: '单步进入',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'firefox-devtools-debug-step-out',
    keys: ['Shift', 'F11'],
    description: '单步跳出',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-debug-step-out-mac',
    keys: ['Shift', 'F11'],
    description: '单步跳出',
    category: '调试',
    platform: 'mac'
  },
  
  // 特有功能
  {
    id: 'firefox-devtools-responsive-design',
    keys: ['Ctrl', 'Shift', 'M'],
    description: '响应式设计模式',
    category: '特有功能',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-responsive-design-mac',
    keys: ['Cmd', 'Option', 'M'],
    description: '响应式设计模式',
    category: '特有功能',
    platform: 'mac'
  },
  {
    id: 'firefox-devtools-eyedropper',
    keys: ['Shift', 'I'],
    description: '在查看器中使用吸管工具',
    category: '特有功能',
    platform: 'win'
  },
  {
    id: 'firefox-devtools-eyedropper-mac',
    keys: ['Shift', 'I'],
    description: '在查看器中使用吸管工具',
    category: '特有功能',
    platform: 'mac'
  }
]