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
  },
  
  // 编辑操作
  {
    id: 'vscode-undo',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'vscode-undo-mac',
    keys: ['Cmd', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'vscode-undo-linux',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'vscode-redo',
    keys: ['Ctrl', 'Y'],
    description: '重做',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'vscode-redo-mac',
    keys: ['Cmd', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'vscode-redo-linux',
    keys: ['Ctrl', 'Y'],
    description: '重做',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'vscode-copy',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'vscode-copy-mac',
    keys: ['Cmd', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'vscode-copy-linux',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'vscode-paste',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'vscode-paste-mac',
    keys: ['Cmd', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'vscode-paste-linux',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'vscode-cut',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'vscode-cut-mac',
    keys: ['Cmd', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'vscode-cut-linux',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'vscode-select-all',
    keys: ['Ctrl', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'vscode-select-all-mac',
    keys: ['Cmd', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'vscode-select-all-linux',
    keys: ['Ctrl', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'vscode-duplicate-line',
    keys: ['Shift', 'Alt', 'Down'],
    description: '复制行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'vscode-duplicate-line-mac',
    keys: ['Shift', 'Option', 'Down'],
    description: '复制行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'vscode-duplicate-line-linux',
    keys: ['Shift', 'Alt', 'Down'],
    description: '复制行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'vscode-move-line-up',
    keys: ['Alt', 'Up'],
    description: '上移行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'vscode-move-line-up-mac',
    keys: ['Option', 'Up'],
    description: '上移行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'vscode-move-line-up-linux',
    keys: ['Alt', 'Up'],
    description: '上移行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'vscode-move-line-down',
    keys: ['Alt', 'Down'],
    description: '下移行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'vscode-move-line-down-mac',
    keys: ['Option', 'Down'],
    description: '下移行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'vscode-move-line-down-linux',
    keys: ['Alt', 'Down'],
    description: '下移行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'vscode-delete-line',
    keys: ['Ctrl', 'Shift', 'K'],
    description: '删除行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'vscode-delete-line-mac',
    keys: ['Cmd', 'Shift', 'K'],
    description: '删除行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'vscode-delete-line-linux',
    keys: ['Ctrl', 'Shift', 'K'],
    description: '删除行',
    category: '编辑',
    platform: 'linux'
  },
  
  // 搜索和替换
  {
    id: 'vscode-find',
    keys: ['Ctrl', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'vscode-find-mac',
    keys: ['Cmd', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'vscode-find-linux',
    keys: ['Ctrl', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'vscode-replace',
    keys: ['Ctrl', 'H'],
    description: '替换',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'vscode-replace-mac',
    keys: ['Cmd', 'Option', 'F'],
    description: '替换',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'vscode-replace-linux',
    keys: ['Ctrl', 'H'],
    description: '替换',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'vscode-find-in-files',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在文件中查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'vscode-find-in-files-mac',
    keys: ['Cmd', 'Shift', 'F'],
    description: '在文件中查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'vscode-find-in-files-linux',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在文件中查找',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'vscode-replace-in-files',
    keys: ['Ctrl', 'Shift', 'H'],
    description: '在文件中替换',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'vscode-replace-in-files-mac',
    keys: ['Cmd', 'Shift', 'H'],
    description: '在文件中替换',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'vscode-replace-in-files-linux',
    keys: ['Ctrl', 'Shift', 'H'],
    description: '在文件中替换',
    category: '搜索',
    platform: 'linux'
  },
  
  // 多光标编辑
  {
    id: 'vscode-add-cursor-above',
    keys: ['Ctrl', 'Alt', 'Up'],
    description: '在上方添加光标',
    category: '多光标',
    platform: 'win'
  },
  {
    id: 'vscode-add-cursor-above-mac',
    keys: ['Cmd', 'Option', 'Up'],
    description: '在上方添加光标',
    category: '多光标',
    platform: 'mac'
  },
  {
    id: 'vscode-add-cursor-above-linux',
    keys: ['Ctrl', 'Alt', 'Up'],
    description: '在上方添加光标',
    category: '多光标',
    platform: 'linux'
  },
  {
    id: 'vscode-add-cursor-below',
    keys: ['Ctrl', 'Alt', 'Down'],
    description: '在下方添加光标',
    category: '多光标',
    platform: 'win'
  },
  {
    id: 'vscode-add-cursor-below-mac',
    keys: ['Cmd', 'Option', 'Down'],
    description: '在下方添加光标',
    category: '多光标',
    platform: 'mac'
  },
  {
    id: 'vscode-add-cursor-below-linux',
    keys: ['Ctrl', 'Alt', 'Down'],
    description: '在下方添加光标',
    category: '多光标',
    platform: 'linux'
  },
  {
    id: 'vscode-select-all-occurrences',
    keys: ['Ctrl', 'Shift', 'L'],
    description: '选择所有出现的位置',
    category: '多光标',
    platform: 'win'
  },
  {
    id: 'vscode-select-all-occurrences-mac',
    keys: ['Cmd', 'Shift', 'L'],
    description: '选择所有出现的位置',
    category: '多光标',
    platform: 'mac'
  },
  {
    id: 'vscode-select-all-occurrences-linux',
    keys: ['Ctrl', 'Shift', 'L'],
    description: '选择所有出现的位置',
    category: '多光标',
    platform: 'linux'
  },
  
  // 调试
  {
    id: 'vscode-start-debugging',
    keys: ['F5'],
    description: '开始调试',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'vscode-start-debugging-mac',
    keys: ['F5'],
    description: '开始调试',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'vscode-start-debugging-linux',
    keys: ['F5'],
    description: '开始调试',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'vscode-run-without-debugging',
    keys: ['Ctrl', 'F5'],
    description: '无调试运行',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'vscode-run-without-debugging-mac',
    keys: ['Cmd', 'F5'],
    description: '无调试运行',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'vscode-run-without-debugging-linux',
    keys: ['Ctrl', 'F5'],
    description: '无调试运行',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'vscode-toggle-breakpoint',
    keys: ['F9'],
    description: '切换断点',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'vscode-toggle-breakpoint-mac',
    keys: ['F9'],
    description: '切换断点',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'vscode-toggle-breakpoint-linux',
    keys: ['F9'],
    description: '切换断点',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'vscode-step-over',
    keys: ['F10'],
    description: '单步跳过',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'vscode-step-over-mac',
    keys: ['F10'],
    description: '单步跳过',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'vscode-step-over-linux',
    keys: ['F10'],
    description: '单步跳过',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'vscode-step-into',
    keys: ['F11'],
    description: '单步进入',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'vscode-step-into-mac',
    keys: ['F11'],
    description: '单步进入',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'vscode-step-into-linux',
    keys: ['F11'],
    description: '单步进入',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'vscode-step-out',
    keys: ['Shift', 'F11'],
    description: '单步跳出',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'vscode-step-out-mac',
    keys: ['Shift', 'F11'],
    description: '单步跳出',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'vscode-step-out-linux',
    keys: ['Shift', 'F11'],
    description: '单步跳出',
    category: '调试',
    platform: 'linux'
  },
  
  // 终端
  {
    id: 'vscode-toggle-terminal',
    keys: ['Ctrl', '`'],
    description: '切换终端',
    category: '终端',
    platform: 'win'
  },
  {
    id: 'vscode-toggle-terminal-mac',
    keys: ['Ctrl', '`'],
    description: '切换终端',
    category: '终端',
    platform: 'mac'
  },
  {
    id: 'vscode-toggle-terminal-linux',
    keys: ['Ctrl', '`'],
    description: '切换终端',
    category: '终端',
    platform: 'linux'
  },
  {
    id: 'vscode-new-terminal',
    keys: ['Ctrl', 'Shift', '`'],
    description: '新建终端',
    category: '终端',
    platform: 'win'
  },
  {
    id: 'vscode-new-terminal-mac',
    keys: ['Ctrl', 'Shift', '`'],
    description: '新建终端',
    category: '终端',
    platform: 'mac'
  },
  {
    id: 'vscode-new-terminal-linux',
    keys: ['Ctrl', 'Shift', '`'],
    description: '新建终端',
    category: '终端',
    platform: 'linux'
  },
  
  // Git
  {
    id: 'vscode-git-commit',
    keys: ['Ctrl', 'Enter'],
    description: 'Git提交',
    category: 'Git',
    platform: 'win'
  },
  {
    id: 'vscode-git-commit-mac',
    keys: ['Cmd', 'Enter'],
    description: 'Git提交',
    category: 'Git',
    platform: 'mac'
  },
  {
    id: 'vscode-git-commit-linux',
    keys: ['Ctrl', 'Enter'],
    description: 'Git提交',
    category: 'Git',
    platform: 'linux'
  },
  {
    id: 'vscode-show-git',
    keys: ['Ctrl', 'Shift', 'G'],
    description: '显示Git面板',
    category: 'Git',
    platform: 'win'
  },
  {
    id: 'vscode-show-git-mac',
    keys: ['Ctrl', 'Shift', 'G'],
    description: '显示Git面板',
    category: 'Git',
    platform: 'mac'
  },
  {
    id: 'vscode-show-git-linux',
    keys: ['Ctrl', 'Shift', 'G'],
    description: '显示Git面板',
    category: 'Git',
    platform: 'linux'
  },
  
  // 窗口管理
  {
    id: 'vscode-split-editor',
    keys: ['Ctrl', '\\'],
    description: '分割编辑器',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'vscode-split-editor-mac',
    keys: ['Cmd', '\\'],
    description: '分割编辑器',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'vscode-split-editor-linux',
    keys: ['Ctrl', '\\'],
    description: '分割编辑器',
    category: '窗口',
    platform: 'linux'
  },
  {
    id: 'vscode-focus-editor-group-1',
    keys: ['Ctrl', '1'],
    description: '聚焦编辑器组1',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'vscode-focus-editor-group-1-mac',
    keys: ['Cmd', '1'],
    description: '聚焦编辑器组1',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'vscode-focus-editor-group-1-linux',
    keys: ['Ctrl', '1'],
    description: '聚焦编辑器组1',
    category: '窗口',
    platform: 'linux'
  },
  {
    id: 'vscode-toggle-sidebar',
    keys: ['Ctrl', 'B'],
    description: '切换侧边栏',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'vscode-toggle-sidebar-mac',
    keys: ['Cmd', 'B'],
    description: '切换侧边栏',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'vscode-toggle-sidebar-linux',
    keys: ['Ctrl', 'B'],
    description: '切换侧边栏',
    category: '窗口',
    platform: 'linux'
  },
  {
    id: 'vscode-show-explorer',
    keys: ['Ctrl', 'Shift', 'E'],
    description: '显示文件资源管理器',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'vscode-show-explorer-mac',
    keys: ['Cmd', 'Shift', 'E'],
    description: '显示文件资源管理器',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'vscode-show-explorer-linux',
    keys: ['Ctrl', 'Shift', 'E'],
    description: '显示文件资源管理器',
    category: '窗口',
    platform: 'linux'
  },
  
  // 代码操作
  {
    id: 'vscode-quick-fix',
    keys: ['Ctrl', '.'],
    description: '快速修复',
    category: '代码操作',
    platform: 'win'
  },
  {
    id: 'vscode-quick-fix-mac',
    keys: ['Cmd', '.'],
    description: '快速修复',
    category: '代码操作',
    platform: 'mac'
  },
  {
    id: 'vscode-quick-fix-linux',
    keys: ['Ctrl', '.'],
    description: '快速修复',
    category: '代码操作',
    platform: 'linux'
  },
  {
    id: 'vscode-code-action',
    keys: ['Ctrl', 'Shift', '.'],
    description: '源代码操作',
    category: '代码操作',
    platform: 'win'
  },
  {
    id: 'vscode-code-action-mac',
    keys: ['Cmd', 'Shift', '.'],
    description: '源代码操作',
    category: '代码操作',
    platform: 'mac'
  },
  {
    id: 'vscode-code-action-linux',
    keys: ['Ctrl', 'Shift', '.'],
    description: '源代码操作',
    category: '代码操作',
    platform: 'linux'
  },
  {
    id: 'vscode-trigger-suggest',
    keys: ['Ctrl', 'Space'],
    description: '触发建议',
    category: '代码操作',
    platform: 'win'
  },
  {
    id: 'vscode-trigger-suggest-mac',
    keys: ['Ctrl', 'Space'],
    description: '触发建议',
    category: '代码操作',
    platform: 'mac'
  },
  {
    id: 'vscode-trigger-suggest-linux',
    keys: ['Ctrl', 'Space'],
    description: '触发建议',
    category: '代码操作',
    platform: 'linux'
  },
  {
    id: 'vscode-trigger-parameter-hints',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '触发参数提示',
    category: '代码操作',
    platform: 'win'
  },
  {
    id: 'vscode-trigger-parameter-hints-mac',
    keys: ['Cmd', 'Shift', 'Space'],
    description: '触发参数提示',
    category: '代码操作',
    platform: 'mac'
  },
  {
    id: 'vscode-trigger-parameter-hints-linux',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '触发参数提示',
    category: '代码操作',
    platform: 'linux'
  },
  {
    id: 'vscode-format-document',
    keys: ['Shift', 'Alt', 'F'],
    description: '格式化文档',
    category: '代码操作',
    platform: 'win'
  },
  {
    id: 'vscode-format-document-mac',
    keys: ['Shift', 'Option', 'F'],
    description: '格式化文档',
    category: '代码操作',
    platform: 'mac'
  },
  {
    id: 'vscode-format-document-linux',
    keys: ['Ctrl', 'Shift', 'I'],
    description: '格式化文档',
    category: '代码操作',
    platform: 'linux'
  },
  {
    id: 'vscode-format-selection',
    keys: ['Ctrl', 'K', 'Ctrl', 'F'],
    description: '格式化选择',
    category: '代码操作',
    platform: 'win'
  },
  {
    id: 'vscode-format-selection-mac',
    keys: ['Cmd', 'K', 'Cmd', 'F'],
    description: '格式化选择',
    category: '代码操作',
    platform: 'mac'
  },
  {
    id: 'vscode-format-selection-linux',
    keys: ['Ctrl', 'K', 'Ctrl', 'F'],
    description: '格式化选择',
    category: '代码操作',
    platform: 'linux'
  },
  
  // 重构
  {
    id: 'vscode-rename-symbol',
    keys: ['F2'],
    description: '重命名符号',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'vscode-rename-symbol-mac',
    keys: ['F2'],
    description: '重命名符号',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'vscode-rename-symbol-linux',
    keys: ['F2'],
    description: '重命名符号',
    category: '重构',
    platform: 'linux'
  },
  {
    id: 'vscode-extract-method',
    keys: ['Ctrl', 'Shift', 'R'],
    description: '提取方法',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'vscode-extract-method-mac',
    keys: ['Cmd', 'Shift', 'R'],
    description: '提取方法',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'vscode-extract-method-linux',
    keys: ['Ctrl', 'Shift', 'R'],
    description: '提取方法',
    category: '重构',
    platform: 'linux'
  },
  
  // 视图管理
  {
    id: 'vscode-show-search',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '显示搜索',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'vscode-show-search-mac',
    keys: ['Cmd', 'Shift', 'F'],
    description: '显示搜索',
    category: '视图',
    platform: 'mac'
  },
  {
    id: 'vscode-show-search-linux',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '显示搜索',
    category: '视图',
    platform: 'linux'
  },
  {
    id: 'vscode-show-extensions',
    keys: ['Ctrl', 'Shift', 'X'],
    description: '显示扩展',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'vscode-show-extensions-mac',
    keys: ['Cmd', 'Shift', 'X'],
    description: '显示扩展',
    category: '视图',
    platform: 'mac'
  },
  {
    id: 'vscode-show-extensions-linux',
    keys: ['Ctrl', 'Shift', 'X'],
    description: '显示扩展',
    category: '视图',
    platform: 'linux'
  },
  {
    id: 'vscode-show-problems',
    keys: ['Ctrl', 'Shift', 'M'],
    description: '显示问题',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'vscode-show-problems-mac',
    keys: ['Cmd', 'Shift', 'M'],
    description: '显示问题',
    category: '视图',
    platform: 'mac'
  },
  {
    id: 'vscode-show-problems-linux',
    keys: ['Ctrl', 'Shift', 'M'],
    description: '显示问题',
    category: '视图',
    platform: 'linux'
  },
  {
    id: 'vscode-show-output',
    keys: ['Ctrl', 'Shift', 'U'],
    description: '显示输出',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'vscode-show-output-mac',
    keys: ['Cmd', 'Shift', 'U'],
    description: '显示输出',
    category: '视图',
    platform: 'mac'
  },
  {
    id: 'vscode-show-output-linux',
    keys: ['Ctrl', 'Shift', 'U'],
    description: '显示输出',
    category: '视图',
    platform: 'linux'
  },
  {
    id: 'vscode-show-debug-console',
    keys: ['Ctrl', 'Shift', 'Y'],
    description: '显示调试控制台',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'vscode-show-debug-console-mac',
    keys: ['Cmd', 'Shift', 'Y'],
    description: '显示调试控制台',
    category: '视图',
    platform: 'mac'
  },
  {
    id: 'vscode-show-debug-console-linux',
    keys: ['Ctrl', 'Shift', 'Y'],
    description: '显示调试控制台',
    category: '视图',
    platform: 'linux'
  },
  {
    id: 'vscode-toggle-zen-mode',
    keys: ['Ctrl', 'K', 'Z'],
    description: '切换禅模式',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'vscode-toggle-zen-mode-mac',
    keys: ['Cmd', 'K', 'Z'],
    description: '切换禅模式',
    category: '视图',
    platform: 'mac'
  },
  {
    id: 'vscode-toggle-zen-mode-linux',
    keys: ['Ctrl', 'K', 'Z'],
    description: '切换禅模式',
    category: '视图',
    platform: 'linux'
  },
  {
    id: 'vscode-toggle-fullscreen',
    keys: ['F11'],
    description: '切换全屏',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'vscode-toggle-fullscreen-mac',
    keys: ['Ctrl', 'Cmd', 'F'],
    description: '切换全屏',
    category: '视图',
    platform: 'mac'
  },
  {
    id: 'vscode-toggle-fullscreen-linux',
    keys: ['F11'],
    description: '切换全屏',
    category: '视图',
    platform: 'linux'
  },
  
  // 导航增强
  {
    id: 'vscode-go-to-definition',
    keys: ['F12'],
    description: '转到定义',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'vscode-go-to-definition-mac',
    keys: ['F12'],
    description: '转到定义',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'vscode-go-to-definition-linux',
    keys: ['F12'],
    description: '转到定义',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'vscode-peek-definition',
    keys: ['Alt', 'F12'],
    description: '查看定义',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'vscode-peek-definition-mac',
    keys: ['Option', 'F12'],
    description: '查看定义',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'vscode-peek-definition-linux',
    keys: ['Ctrl', 'Shift', 'F10'],
    description: '查看定义',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'vscode-go-to-references',
    keys: ['Shift', 'F12'],
    description: '转到引用',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'vscode-go-to-references-mac',
    keys: ['Shift', 'F12'],
    description: '转到引用',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'vscode-go-to-references-linux',
    keys: ['Shift', 'F12'],
    description: '转到引用',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'vscode-go-to-line',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'vscode-go-to-line-mac',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'vscode-go-to-line-linux',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'vscode-go-to-symbol',
    keys: ['Ctrl', 'Shift', 'O'],
    description: '转到文件中的符号',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'vscode-go-to-symbol-mac',
    keys: ['Cmd', 'Shift', 'O'],
    description: '转到文件中的符号',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'vscode-go-to-symbol-linux',
    keys: ['Ctrl', 'Shift', 'O'],
    description: '转到文件中的符号',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'vscode-go-to-symbol-workspace',
    keys: ['Ctrl', 'T'],
    description: '转到工作区中的符号',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'vscode-go-to-symbol-workspace-mac',
    keys: ['Cmd', 'T'],
    description: '转到工作区中的符号',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'vscode-go-to-symbol-workspace-linux',
    keys: ['Ctrl', 'T'],
    description: '转到工作区中的符号',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'vscode-go-back',
    keys: ['Alt', 'Left'],
    description: '后退',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'vscode-go-back-mac',
    keys: ['Ctrl', '-'],
    description: '后退',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'vscode-go-back-linux',
    keys: ['Ctrl', 'Alt', '-'],
    description: '后退',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'vscode-go-forward',
    keys: ['Alt', 'Right'],
    description: '前进',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'vscode-go-forward-mac',
    keys: ['Ctrl', 'Shift', '-'],
    description: '前进',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'vscode-go-forward-linux',
    keys: ['Ctrl', 'Shift', '-'],
    description: '前进',
    category: '导航',
    platform: 'linux'
  },
  
  // 编辑器增强
  {
    id: 'vscode-toggle-word-wrap',
    keys: ['Alt', 'Z'],
    description: '切换自动换行',
    category: '编辑器',
    platform: 'win'
  },
  {
    id: 'vscode-toggle-word-wrap-mac',
    keys: ['Option', 'Z'],
    description: '切换自动换行',
    category: '编辑器',
    platform: 'mac'
  },
  {
    id: 'vscode-toggle-word-wrap-linux',
    keys: ['Alt', 'Z'],
    description: '切换自动换行',
    category: '编辑器',
    platform: 'linux'
  },
  {
    id: 'vscode-zoom-in',
    keys: ['Ctrl', '='],
    description: '放大',
    category: '编辑器',
    platform: 'win'
  },
  {
    id: 'vscode-zoom-in-mac',
    keys: ['Cmd', '='],
    description: '放大',
    category: '编辑器',
    platform: 'mac'
  },
  {
    id: 'vscode-zoom-in-linux',
    keys: ['Ctrl', '='],
    description: '放大',
    category: '编辑器',
    platform: 'linux'
  },
  {
    id: 'vscode-zoom-out',
    keys: ['Ctrl', '-'],
    description: '缩小',
    category: '编辑器',
    platform: 'win'
  },
  {
    id: 'vscode-zoom-out-mac',
    keys: ['Cmd', '-'],
    description: '缩小',
    category: '编辑器',
    platform: 'mac'
  },
  {
    id: 'vscode-zoom-out-linux',
    keys: ['Ctrl', '-'],
    description: '缩小',
    category: '编辑器',
    platform: 'linux'
  },
  {
    id: 'vscode-reset-zoom',
    keys: ['Ctrl', 'Numpad0'],
    description: '重置缩放',
    category: '编辑器',
    platform: 'win'
  },
  {
    id: 'vscode-reset-zoom-mac',
    keys: ['Cmd', 'Numpad0'],
    description: '重置缩放',
    category: '编辑器',
    platform: 'mac'
  },
  {
    id: 'vscode-reset-zoom-linux',
    keys: ['Ctrl', 'Numpad0'],
    description: '重置缩放',
    category: '编辑器',
    platform: 'linux'
  },
  
  // 插件管理
  {
    id: 'vscode-install-extension',
    keys: ['Ctrl', 'Shift', 'X'],
    description: '安装扩展',
    category: '插件',
    platform: 'win'
  },
  {
    id: 'vscode-install-extension-mac',
    keys: ['Cmd', 'Shift', 'X'],
    description: '安装扩展',
    category: '插件',
    platform: 'mac'
  },
  {
    id: 'vscode-install-extension-linux',
    keys: ['Ctrl', 'Shift', 'X'],
    description: '安装扩展',
    category: '插件',
    platform: 'linux'
  },
  {
    id: 'vscode-reload-window',
    keys: ['Ctrl', 'R'],
    description: '重新加载窗口',
    category: '插件',
    platform: 'win'
  },
  {
    id: 'vscode-reload-window-mac',
    keys: ['Cmd', 'R'],
    description: '重新加载窗口',
    category: '插件',
    platform: 'mac'
  },
  {
    id: 'vscode-reload-window-linux',
    keys: ['Ctrl', 'R'],
    description: '重新加载窗口',
    category: '插件',
    platform: 'linux'
  },
  
  // 设置和配置
  {
    id: 'vscode-open-settings',
    keys: ['Ctrl', ','],
    description: '打开设置',
    category: '设置',
    platform: 'win'
  },
  {
    id: 'vscode-open-settings-mac',
    keys: ['Cmd', ','],
    description: '打开设置',
    category: '设置',
    platform: 'mac'
  },
  {
    id: 'vscode-open-settings-linux',
    keys: ['Ctrl', ','],
    description: '打开设置',
    category: '设置',
    platform: 'linux'
  },
  {
    id: 'vscode-open-keyboard-shortcuts',
    keys: ['Ctrl', 'K', 'Ctrl', 'S'],
    description: '打开键盘快捷键',
    category: '设置',
    platform: 'win'
  },
  {
    id: 'vscode-open-keyboard-shortcuts-mac',
    keys: ['Cmd', 'K', 'Cmd', 'S'],
    description: '打开键盘快捷键',
    category: '设置',
    platform: 'mac'
  },
  {
    id: 'vscode-open-keyboard-shortcuts-linux',
    keys: ['Ctrl', 'K', 'Ctrl', 'S'],
    description: '打开键盘快捷键',
    category: '设置',
    platform: 'linux'
  },
  {
    id: 'vscode-open-user-snippets',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '打开用户代码片段',
    category: '设置',
    platform: 'win'
  },
  {
    id: 'vscode-open-user-snippets-mac',
    keys: ['Cmd', 'Shift', 'P'],
    description: '打开用户代码片段',
    category: '设置',
    platform: 'mac'
  },
  {
    id: 'vscode-open-user-snippets-linux',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '打开用户代码片段',
    category: '设置',
    platform: 'linux'
  }
]