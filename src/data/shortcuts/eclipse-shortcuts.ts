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
  },
  {
    id: 'eclipse-3-linux',
    keys: ['Ctrl', 'Shift', 'T'],
    description: '打开类型',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'eclipse-4-linux',
    keys: ['Ctrl', 'H'],
    description: '打开搜索对话框',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'eclipse-5-linux',
    keys: ['Ctrl', 'K'],
    description: '查找下一个',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'eclipse-6-linux',
    keys: ['Ctrl', 'Shift', 'K'],
    description: '查找上一个',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'eclipse-7-linux',
    keys: ['Ctrl', 'L'],
    description: '转到行',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'eclipse-8-linux',
    keys: ['Ctrl', 'Q'],
    description: '转到最后编辑位置',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'eclipse-9-linux',
    keys: ['Ctrl', '.'],
    description: '下一个问题',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'eclipse-10-linux',
    keys: ['Ctrl', ','],
    description: '上一个问题',
    category: '导航',
    platform: 'linux'
  },
  
  // 补充macOS版本的缺失快捷键
  {
    id: 'eclipse-4-mac',
    keys: ['Cmd', 'H'],
    description: '打开搜索对话框',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'eclipse-5-mac',
    keys: ['Cmd', 'K'],
    description: '查找下一个',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'eclipse-6-mac',
    keys: ['Cmd', 'Shift', 'K'],
    description: '查找上一个',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'eclipse-7-mac',
    keys: ['Cmd', 'L'],
    description: '转到行',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'eclipse-8-mac',
    keys: ['Cmd', 'Q'],
    description: '转到最后编辑位置',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'eclipse-9-mac',
    keys: ['Cmd', '.'],
    description: '下一个问题',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'eclipse-10-mac',
    keys: ['Cmd', ','],
    description: '上一个问题',
    category: '导航',
    platform: 'mac'
  },
  
  // 文件操作
  {
    id: 'eclipse-new-file',
    keys: ['Ctrl', 'N'],
    description: '新建',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'eclipse-new-file-mac',
    keys: ['Cmd', 'N'],
    description: '新建',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'eclipse-new-file-linux',
    keys: ['Ctrl', 'N'],
    description: '新建',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'eclipse-save',
    keys: ['Ctrl', 'S'],
    description: '保存',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'eclipse-save-mac',
    keys: ['Cmd', 'S'],
    description: '保存',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'eclipse-save-linux',
    keys: ['Ctrl', 'S'],
    description: '保存',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'eclipse-save-all',
    keys: ['Ctrl', 'Shift', 'S'],
    description: '保存全部',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'eclipse-save-all-mac',
    keys: ['Cmd', 'Shift', 'S'],
    description: '保存全部',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'eclipse-save-all-linux',
    keys: ['Ctrl', 'Shift', 'S'],
    description: '保存全部',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'eclipse-close',
    keys: ['Ctrl', 'W'],
    description: '关闭',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'eclipse-close-mac',
    keys: ['Cmd', 'W'],
    description: '关闭',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'eclipse-close-linux',
    keys: ['Ctrl', 'W'],
    description: '关闭',
    category: '文件',
    platform: 'linux'
  },
  
  // 编辑操作
  {
    id: 'eclipse-undo',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'eclipse-undo-mac',
    keys: ['Cmd', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'eclipse-undo-linux',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'eclipse-redo',
    keys: ['Ctrl', 'Y'],
    description: '重做',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'eclipse-redo-mac',
    keys: ['Cmd', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'eclipse-redo-linux',
    keys: ['Ctrl', 'Y'],
    description: '重做',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'eclipse-copy',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'eclipse-copy-mac',
    keys: ['Cmd', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'eclipse-copy-linux',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'eclipse-paste',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'eclipse-paste-mac',
    keys: ['Cmd', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'eclipse-paste-linux',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'eclipse-cut',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'eclipse-cut-mac',
    keys: ['Cmd', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'eclipse-cut-linux',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'eclipse-select-all',
    keys: ['Ctrl', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'eclipse-select-all-mac',
    keys: ['Cmd', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'eclipse-select-all-linux',
    keys: ['Ctrl', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'eclipse-delete-line',
    keys: ['Ctrl', 'D'],
    description: '删除行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'eclipse-delete-line-mac',
    keys: ['Cmd', 'D'],
    description: '删除行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'eclipse-delete-line-linux',
    keys: ['Ctrl', 'D'],
    description: '删除行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'eclipse-duplicate-line',
    keys: ['Ctrl', 'Alt', 'Down'],
    description: '复制行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'eclipse-duplicate-line-mac',
    keys: ['Cmd', 'Alt', 'Down'],
    description: '复制行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'eclipse-duplicate-line-linux',
    keys: ['Ctrl', 'Alt', 'Down'],
    description: '复制行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'eclipse-move-line-up',
    keys: ['Alt', 'Up'],
    description: '上移行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'eclipse-move-line-up-mac',
    keys: ['Alt', 'Up'],
    description: '上移行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'eclipse-move-line-up-linux',
    keys: ['Alt', 'Up'],
    description: '上移行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'eclipse-move-line-down',
    keys: ['Alt', 'Down'],
    description: '下移行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'eclipse-move-line-down-mac',
    keys: ['Alt', 'Down'],
    description: '下移行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'eclipse-move-line-down-linux',
    keys: ['Alt', 'Down'],
    description: '下移行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'eclipse-comment-line',
    keys: ['Ctrl', '/'],
    description: '切换行注释',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'eclipse-comment-line-mac',
    keys: ['Cmd', '/'],
    description: '切换行注释',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'eclipse-comment-line-linux',
    keys: ['Ctrl', '/'],
    description: '切换行注释',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'eclipse-format',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '格式化代码',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'eclipse-format-mac',
    keys: ['Cmd', 'Shift', 'F'],
    description: '格式化代码',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'eclipse-format-linux',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '格式化代码',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'eclipse-organize-imports',
    keys: ['Ctrl', 'Shift', 'O'],
    description: '整理导入',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'eclipse-organize-imports-mac',
    keys: ['Cmd', 'Shift', 'O'],
    description: '整理导入',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'eclipse-organize-imports-linux',
    keys: ['Ctrl', 'Shift', 'O'],
    description: '整理导入',
    category: '编辑',
    platform: 'linux'
  },
  
  // 重构
  {
    id: 'eclipse-rename',
    keys: ['Alt', 'Shift', 'R'],
    description: '重命名',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'eclipse-rename-mac',
    keys: ['Cmd', 'Alt', 'R'],
    description: '重命名',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'eclipse-rename-linux',
    keys: ['Alt', 'Shift', 'R'],
    description: '重命名',
    category: '重构',
    platform: 'linux'
  },
  {
    id: 'eclipse-extract-method',
    keys: ['Alt', 'Shift', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'eclipse-extract-method-mac',
    keys: ['Cmd', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'eclipse-extract-method-linux',
    keys: ['Alt', 'Shift', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'linux'
  },
  {
    id: 'eclipse-extract-variable',
    keys: ['Alt', 'Shift', 'L'],
    description: '提取局部变量',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'eclipse-extract-variable-mac',
    keys: ['Cmd', 'Alt', 'L'],
    description: '提取局部变量',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'eclipse-extract-variable-linux',
    keys: ['Alt', 'Shift', 'L'],
    description: '提取局部变量',
    category: '重构',
    platform: 'linux'
  },
  
  // 运行和调试
  {
    id: 'eclipse-run',
    keys: ['Ctrl', 'F11'],
    description: '运行',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'eclipse-run-mac',
    keys: ['Cmd', 'F11'],
    description: '运行',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'eclipse-run-linux',
    keys: ['Ctrl', 'F11'],
    description: '运行',
    category: '运行',
    platform: 'linux'
  },
  {
    id: 'eclipse-debug',
    keys: ['F11'],
    description: '调试',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'eclipse-debug-mac',
    keys: ['F11'],
    description: '调试',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'eclipse-debug-linux',
    keys: ['F11'],
    description: '调试',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'eclipse-step-over',
    keys: ['F6'],
    description: '单步跳过',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'eclipse-step-over-mac',
    keys: ['F6'],
    description: '单步跳过',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'eclipse-step-over-linux',
    keys: ['F6'],
    description: '单步跳过',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'eclipse-step-into',
    keys: ['F5'],
    description: '单步进入',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'eclipse-step-into-mac',
    keys: ['F5'],
    description: '单步进入',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'eclipse-step-into-linux',
    keys: ['F5'],
    description: '单步进入',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'eclipse-step-return',
    keys: ['F7'],
    description: '单步返回',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'eclipse-step-return-mac',
    keys: ['F7'],
    description: '单步返回',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'eclipse-step-return-linux',
    keys: ['F7'],
    description: '单步返回',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'eclipse-resume',
    keys: ['F8'],
    description: '继续',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'eclipse-resume-mac',
    keys: ['F8'],
    description: '继续',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'eclipse-resume-linux',
    keys: ['F8'],
    description: '继续',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'eclipse-toggle-breakpoint',
    keys: ['Ctrl', 'Shift', 'B'],
    description: '切换断点',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'eclipse-toggle-breakpoint-mac',
    keys: ['Cmd', 'Shift', 'B'],
    description: '切换断点',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'eclipse-toggle-breakpoint-linux',
    keys: ['Ctrl', 'Shift', 'B'],
    description: '切换断点',
    category: '调试',
    platform: 'linux'
  }
]