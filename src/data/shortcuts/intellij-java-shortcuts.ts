import { Shortcut } from '../../types'

export const intellijJavaShortcuts: Shortcut[] = [
  // 编辑
  {
    id: 'intellij-java-override-methods',
    keys: ['Ctrl', 'O'],
    description: '重写方法',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-java-override-methods-mac',
    keys: ['Cmd', 'O'],
    description: '重写方法',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-java-implement-methods',
    keys: ['Ctrl', 'I'],
    description: '实现方法',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-java-implement-methods-mac',
    keys: ['Cmd', 'I'],
    description: '实现方法',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'intellij-java-generate',
    keys: ['Alt', 'Insert'],
    description: '生成代码（getter、setter、构造函数等）',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'intellij-java-generate-mac',
    keys: ['Cmd', 'N'],
    description: '生成代码（getter、setter、构造函数等）',
    category: '编辑',
    platform: 'mac'
  },
  
  // 导航
  {
    id: 'intellij-java-goto-declaration',
    keys: ['Ctrl', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-java-goto-declaration-mac',
    keys: ['Cmd', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-java-goto-implementation',
    keys: ['Ctrl', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-java-goto-implementation-mac',
    keys: ['Cmd', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'intellij-java-goto-super',
    keys: ['Ctrl', 'U'],
    description: '跳转到父类/方法',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'intellij-java-goto-super-mac',
    keys: ['Cmd', 'U'],
    description: '跳转到父类/方法',
    category: '导航',
    platform: 'mac'
  },
  
  // 重构
  {
    id: 'intellij-java-rename',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'intellij-java-rename-mac',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'intellij-java-extract-method',
    keys: ['Ctrl', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'intellij-java-extract-method-mac',
    keys: ['Cmd', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'intellij-java-extract-variable',
    keys: ['Ctrl', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'intellij-java-extract-variable-mac',
    keys: ['Cmd', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'intellij-java-extract-field',
    keys: ['Ctrl', 'Alt', 'F'],
    description: '提取字段',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'intellij-java-extract-field-mac',
    keys: ['Cmd', 'Alt', 'F'],
    description: '提取字段',
    category: '重构',
    platform: 'mac'
  },
  
  // 运行和调试
  {
    id: 'intellij-java-run',
    keys: ['Shift', 'F10'],
    description: '运行',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'intellij-java-run-mac',
    keys: ['Ctrl', 'R'],
    description: '运行',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'intellij-java-debug',
    keys: ['Shift', 'F9'],
    description: '调试',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'intellij-java-debug-mac',
    keys: ['Ctrl', 'D'],
    description: '调试',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'intellij-java-toggle-breakpoint',
    keys: ['Ctrl', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'intellij-java-toggle-breakpoint-mac',
    keys: ['Cmd', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'mac'
  },
  
  // Java特有
  {
    id: 'intellij-java-optimize-imports',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: 'Java特有',
    platform: 'win'
  },
  {
    id: 'intellij-java-optimize-imports-mac',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: 'Java特有',
    platform: 'mac'
  },
  {
    id: 'intellij-java-format-code',
    keys: ['Ctrl', 'Alt', 'L'],
    description: '格式化代码',
    category: 'Java特有',
    platform: 'win'
  },
  {
    id: 'intellij-java-format-code-mac',
    keys: ['Cmd', 'Alt', 'L'],
    description: '格式化代码',
    category: 'Java特有',
    platform: 'mac'
  }
]