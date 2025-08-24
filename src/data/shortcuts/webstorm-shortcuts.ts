import { Shortcut } from '../../types'

/**
 * WebStorm 快捷键数据
 * 支持 Windows、macOS、Linux 三个平台
 */
export const webstormShortcuts: Shortcut[] = [
  // Windows版本快捷键
  {
    id: 'webstorm-1',
    keys: ['Ctrl', 'Shift', 'A'],
    description: '查找操作',
    category: '通用',
    platform: 'win'
  },
  {
    id: 'webstorm-2',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'webstorm-3',
    keys: ['Ctrl', 'N'],
    description: '转到类',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'webstorm-4',
    keys: ['Ctrl', 'Shift', 'N'],
    description: '转到文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'webstorm-5',
    keys: ['Ctrl', 'Alt', 'Shift', 'N'],
    description: '转到符号',
    category: '导航',
    platform: 'win'
  },
  
  // macOS版本快捷键
  {
    id: 'webstorm-1-mac',
    keys: ['Cmd', 'Shift', 'A'],
    description: '查找操作',
    category: '通用',
    platform: 'mac'
  },
  {
    id: 'webstorm-2-mac',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'webstorm-3-mac',
    keys: ['Cmd', 'O'],
    description: '转到类',
    category: '导航',
    platform: 'mac'
  },
  
  // Linux版本快捷键
  {
    id: 'webstorm-1-linux',
    keys: ['Ctrl', 'Shift', 'A'],
    description: '查找操作',
    category: '通用',
    platform: 'linux'
  },
  {
    id: 'webstorm-2-linux',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '搜索',
    platform: 'linux'
  },
  
  // 编辑操作
  {
    id: 'webstorm-duplicate-line',
    keys: ['Ctrl', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'webstorm-duplicate-line-mac',
    keys: ['Cmd', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'webstorm-duplicate-line-linux',
    keys: ['Ctrl', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'webstorm-delete-line',
    keys: ['Ctrl', 'Y'],
    description: '删除当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'webstorm-delete-line-mac',
    keys: ['Cmd', 'Backspace'],
    description: '删除当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'webstorm-delete-line-linux',
    keys: ['Ctrl', 'Y'],
    description: '删除当前行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'webstorm-comment-line',
    keys: ['Ctrl', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'webstorm-comment-line-mac',
    keys: ['Cmd', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'webstorm-comment-line-linux',
    keys: ['Ctrl', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'webstorm-block-comment',
    keys: ['Ctrl', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'webstorm-block-comment-mac',
    keys: ['Cmd', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'webstorm-block-comment-linux',
    keys: ['Ctrl', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'webstorm-undo',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'webstorm-undo-mac',
    keys: ['Cmd', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'webstorm-undo-linux',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'webstorm-redo',
    keys: ['Ctrl', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'webstorm-redo-mac',
    keys: ['Cmd', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'webstorm-redo-linux',
    keys: ['Ctrl', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'webstorm-move-line-up',
    keys: ['Shift', 'Alt', 'Up'],
    description: '上移行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'webstorm-move-line-up-mac',
    keys: ['Shift', 'Option', 'Up'],
    description: '上移行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'webstorm-move-line-up-linux',
    keys: ['Shift', 'Alt', 'Up'],
    description: '上移行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'webstorm-move-line-down',
    keys: ['Shift', 'Alt', 'Down'],
    description: '下移行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'webstorm-move-line-down-mac',
    keys: ['Shift', 'Option', 'Down'],
    description: '下移行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'webstorm-move-line-down-linux',
    keys: ['Shift', 'Alt', 'Down'],
    description: '下移行',
    category: '编辑',
    platform: 'linux'
  },
  
  // 搜索和替换
  {
    id: 'webstorm-find',
    keys: ['Ctrl', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'webstorm-find-mac',
    keys: ['Cmd', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'webstorm-find-linux',
    keys: ['Ctrl', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'webstorm-replace',
    keys: ['Ctrl', 'R'],
    description: '替换',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'webstorm-replace-mac',
    keys: ['Cmd', 'R'],
    description: '替换',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'webstorm-replace-linux',
    keys: ['Ctrl', 'R'],
    description: '替换',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'webstorm-find-in-path',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在路径中查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'webstorm-find-in-path-mac',
    keys: ['Cmd', 'Shift', 'F'],
    description: '在路径中查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'webstorm-find-in-path-linux',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在路径中查找',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'webstorm-find-usages',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'webstorm-find-usages-mac',
    keys: ['Option', 'F7'],
    description: '查找使用',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'webstorm-find-usages-linux',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '搜索',
    platform: 'linux'
  },
  
  // 导航
  {
    id: 'webstorm-goto-declaration',
    keys: ['Ctrl', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'webstorm-goto-declaration-mac',
    keys: ['Cmd', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'webstorm-goto-declaration-linux',
    keys: ['Ctrl', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'webstorm-goto-implementation',
    keys: ['Ctrl', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'webstorm-goto-implementation-mac',
    keys: ['Cmd', 'Option', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'webstorm-goto-implementation-linux',
    keys: ['Ctrl', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'webstorm-goto-line',
    keys: ['Ctrl', 'G'],
    description: '跳转到行',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'webstorm-goto-line-mac',
    keys: ['Cmd', 'L'],
    description: '跳转到行',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'webstorm-goto-line-linux',
    keys: ['Ctrl', 'G'],
    description: '跳转到行',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'webstorm-recent-files',
    keys: ['Ctrl', 'E'],
    description: '最近文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'webstorm-recent-files-mac',
    keys: ['Cmd', 'E'],
    description: '最近文件',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'webstorm-recent-files-linux',
    keys: ['Ctrl', 'E'],
    description: '最近文件',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'webstorm-back',
    keys: ['Ctrl', 'Alt', 'Left'],
    description: '后退',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'webstorm-back-mac',
    keys: ['Cmd', '['],
    description: '后退',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'webstorm-back-linux',
    keys: ['Ctrl', 'Alt', 'Left'],
    description: '后退',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'webstorm-forward',
    keys: ['Ctrl', 'Alt', 'Right'],
    description: '前进',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'webstorm-forward-mac',
    keys: ['Cmd', ']'],
    description: '前进',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'webstorm-forward-linux',
    keys: ['Ctrl', 'Alt', 'Right'],
    description: '前进',
    category: '导航',
    platform: 'linux'
  },
  
  // 代码补全和提示
  {
    id: 'webstorm-code-completion',
    keys: ['Ctrl', 'Space'],
    description: '代码补全',
    category: '代码',
    platform: 'win'
  },
  {
    id: 'webstorm-code-completion-mac',
    keys: ['Ctrl', 'Space'],
    description: '代码补全',
    category: '代码',
    platform: 'mac'
  },
  {
    id: 'webstorm-code-completion-linux',
    keys: ['Ctrl', 'Space'],
    description: '代码补全',
    category: '代码',
    platform: 'linux'
  },
  {
    id: 'webstorm-smart-completion',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '智能代码补全',
    category: '代码',
    platform: 'win'
  },
  {
    id: 'webstorm-smart-completion-mac',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '智能代码补全',
    category: '代码',
    platform: 'mac'
  },
  {
    id: 'webstorm-smart-completion-linux',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '智能代码补全',
    category: '代码',
    platform: 'linux'
  },
  {
    id: 'webstorm-reformat-code',
    keys: ['Ctrl', 'Alt', 'L'],
    description: '格式化代码',
    category: '代码',
    platform: 'win'
  },
  {
    id: 'webstorm-reformat-code-mac',
    keys: ['Cmd', 'Option', 'L'],
    description: '格式化代码',
    category: '代码',
    platform: 'mac'
  },
  {
    id: 'webstorm-reformat-code-linux',
    keys: ['Ctrl', 'Alt', 'L'],
    description: '格式化代码',
    category: '代码',
    platform: 'linux'
  },
  {
    id: 'webstorm-optimize-imports',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: '代码',
    platform: 'win'
  },
  {
    id: 'webstorm-optimize-imports-mac',
    keys: ['Ctrl', 'Option', 'O'],
    description: '优化导入',
    category: '代码',
    platform: 'mac'
  },
  {
    id: 'webstorm-optimize-imports-linux',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: '代码',
    platform: 'linux'
  },
  
  // 重构
  {
    id: 'webstorm-rename',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'webstorm-rename-mac',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'webstorm-rename-linux',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'linux'
  },
  {
    id: 'webstorm-extract-variable',
    keys: ['Ctrl', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'webstorm-extract-variable-mac',
    keys: ['Cmd', 'Option', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'webstorm-extract-variable-linux',
    keys: ['Ctrl', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'linux'
  },
  {
    id: 'webstorm-extract-method',
    keys: ['Ctrl', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'webstorm-extract-method-mac',
    keys: ['Cmd', 'Option', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'webstorm-extract-method-linux',
    keys: ['Ctrl', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'linux'
  },
  
  // 运行和调试
  {
    id: 'webstorm-run',
    keys: ['Shift', 'F10'],
    description: '运行',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'webstorm-run-mac',
    keys: ['Ctrl', 'R'],
    description: '运行',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'webstorm-run-linux',
    keys: ['Shift', 'F10'],
    description: '运行',
    category: '运行',
    platform: 'linux'
  },
  {
    id: 'webstorm-debug',
    keys: ['Shift', 'F9'],
    description: '调试',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'webstorm-debug-mac',
    keys: ['Ctrl', 'D'],
    description: '调试',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'webstorm-debug-linux',
    keys: ['Shift', 'F9'],
    description: '调试',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'webstorm-toggle-breakpoint',
    keys: ['Ctrl', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'webstorm-toggle-breakpoint-mac',
    keys: ['Cmd', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'webstorm-toggle-breakpoint-linux',
    keys: ['Ctrl', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'webstorm-step-over',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'webstorm-step-over-mac',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'webstorm-step-over-linux',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'webstorm-step-into',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'webstorm-step-into-mac',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'webstorm-step-into-linux',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'linux'
  },
  
  // 文件管理
  {
    id: 'webstorm-new-file',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'webstorm-new-file-mac',
    keys: ['Cmd', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'webstorm-new-file-linux',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'webstorm-open-file',
    keys: ['Ctrl', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'webstorm-open-file-mac',
    keys: ['Cmd', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'webstorm-open-file-linux',
    keys: ['Ctrl', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'webstorm-save',
    keys: ['Ctrl', 'S'],
    description: '保存',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'webstorm-save-mac',
    keys: ['Cmd', 'S'],
    description: '保存',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'webstorm-save-linux',
    keys: ['Ctrl', 'S'],
    description: '保存',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'webstorm-save-all',
    keys: ['Ctrl', 'Shift', 'S'],
    description: '保存全部',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'webstorm-save-all-mac',
    keys: ['Cmd', 'Option', 'S'],
    description: '保存全部',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'webstorm-save-all-linux',
    keys: ['Ctrl', 'Shift', 'S'],
    description: '保存全部',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'webstorm-close-file',
    keys: ['Ctrl', 'W'],
    description: '关闭文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'webstorm-close-file-mac',
    keys: ['Cmd', 'W'],
    description: '关闭文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'webstorm-close-file-linux',
    keys: ['Ctrl', 'W'],
    description: '关闭文件',
    category: '文件',
    platform: 'linux'
  },
  
  // 终端和Git
  {
    id: 'webstorm-terminal',
    keys: ['Alt', 'F12'],
    description: '打开终端',
    category: '终端',
    platform: 'win'
  },
  {
    id: 'webstorm-terminal-mac',
    keys: ['Option', 'F12'],
    description: '打开终端',
    category: '终端',
    platform: 'mac'
  },
  {
    id: 'webstorm-terminal-linux',
    keys: ['Alt', 'F12'],
    description: '打开终端',
    category: '终端',
    platform: 'linux'
  },
  {
    id: 'webstorm-git-commit',
    keys: ['Ctrl', 'K'],
    description: 'Git 提交',
    category: 'Git',
    platform: 'win'
  },
  {
    id: 'webstorm-git-commit-mac',
    keys: ['Cmd', 'K'],
    description: 'Git 提交',
    category: 'Git',
    platform: 'mac'
  },
  {
    id: 'webstorm-git-commit-linux',
    keys: ['Ctrl', 'K'],
    description: 'Git 提交',
    category: 'Git',
    platform: 'linux'
  },
  {
    id: 'webstorm-show-version-control',
    keys: ['Alt', '9'],
    description: '显示版本控制',
    category: 'Git',
    platform: 'win'
  },
  {
    id: 'webstorm-show-version-control-mac',
    keys: ['Cmd', '9'],
    description: '显示版本控制',
    category: 'Git',
    platform: 'mac'
  },
  {
    id: 'webstorm-show-version-control-linux',
    keys: ['Alt', '9'],
    description: '显示版本控制',
    category: 'Git',
    platform: 'linux'
  },
  
  // 前端开发特有
  {
    id: 'webstorm-live-templates',
    keys: ['Ctrl', 'J'],
    description: '实时模板',
    category: '前端开发',
    platform: 'win'
  },
  {
    id: 'webstorm-live-templates-mac',
    keys: ['Cmd', 'J'],
    description: '实时模板',
    category: '前端开发',
    platform: 'mac'
  },
  {
    id: 'webstorm-live-templates-linux',
    keys: ['Ctrl', 'J'],
    description: '实时模板',
    category: '前端开发',
    platform: 'linux'
  },
  {
    id: 'webstorm-emmet-expand',
    keys: ['Tab'],
    description: 'Emmet 展开',
    category: '前端开发',
    platform: 'win'
  },
  {
    id: 'webstorm-emmet-expand-mac',
    keys: ['Tab'],
    description: 'Emmet 展开',
    category: '前端开发',
    platform: 'mac'
  },
  {
    id: 'webstorm-emmet-expand-linux',
    keys: ['Tab'],
    description: 'Emmet 展开',
    category: '前端开发',
    platform: 'linux'
  },
  {
    id: 'webstorm-npm-scripts',
    keys: ['Ctrl', 'Shift', 'X'],
    description: 'NPM 脚本',
    category: '前端开发',
    platform: 'win'
  },
  {
    id: 'webstorm-npm-scripts-mac',
    keys: ['Cmd', 'Shift', 'X'],
    description: 'NPM 脚本',
    category: '前端开发',
    platform: 'mac'
  },
  {
    id: 'webstorm-npm-scripts-linux',
    keys: ['Ctrl', 'Shift', 'X'],
    description: 'NPM 脚本',
    category: '前端开发',
    platform: 'linux'
  }
]