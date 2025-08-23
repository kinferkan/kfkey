import { Shortcut } from '../../types'

export const clionShortcuts: Shortcut[] = [
  // 编辑
  {
    id: 'clion-duplicate-line',
    keys: ['Ctrl', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-duplicate-line-mac',
    keys: ['Cmd', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'clion-delete-line',
    keys: ['Ctrl', 'Y'],
    description: '删除当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-delete-line-mac',
    keys: ['Cmd', 'Backspace'],
    description: '删除当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'clion-comment-line',
    keys: ['Ctrl', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-comment-line-mac',
    keys: ['Cmd', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'clion-block-comment',
    keys: ['Ctrl', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-block-comment-mac',
    keys: ['Cmd', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'mac'
  },
  
  // 导航
  {
    id: 'clion-goto-declaration',
    keys: ['Ctrl', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'clion-goto-declaration-mac',
    keys: ['Cmd', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'clion-goto-implementation',
    keys: ['Ctrl', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'clion-goto-implementation-mac',
    keys: ['Cmd', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'clion-find-usages',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'clion-find-usages-mac',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '导航',
    platform: 'mac'
  },
  
  // 重构
  {
    id: 'clion-rename',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'clion-rename-mac',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'clion-extract-method',
    keys: ['Ctrl', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'clion-extract-method-mac',
    keys: ['Cmd', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'clion-extract-variable',
    keys: ['Ctrl', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'clion-extract-variable-mac',
    keys: ['Cmd', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'mac'
  },
  
  // 运行和调试
  {
    id: 'clion-run',
    keys: ['Shift', 'F10'],
    description: '运行',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'clion-run-mac',
    keys: ['Ctrl', 'R'],
    description: '运行',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'clion-debug',
    keys: ['Shift', 'F9'],
    description: '调试',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'clion-debug-mac',
    keys: ['Ctrl', 'D'],
    description: '调试',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'clion-toggle-breakpoint',
    keys: ['Ctrl', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'clion-toggle-breakpoint-mac',
    keys: ['Cmd', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'mac'
  },
  
  // C/C++特有
  {
    id: 'clion-switch-header-source',
    keys: ['Ctrl', 'Tab'],
    description: '在头文件和源文件之间切换',
    category: 'C/C++特有',
    platform: 'win'
  },
  {
    id: 'clion-switch-header-source-mac',
    keys: ['Cmd', 'Tab'],
    description: '在头文件和源文件之间切换',
    category: 'C/C++特有',
    platform: 'mac'
  },
  {
    id: 'clion-optimize-includes',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化包含',
    category: 'C/C++特有',
    platform: 'win'
  },
  {
    id: 'clion-optimize-includes-mac',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化包含',
    category: 'C/C++特有',
    platform: 'mac'
  },
  {
    id: 'clion-format-code',
    keys: ['Ctrl', 'Alt', 'L'],
    description: '格式化代码',
    category: 'C/C++特有',
    platform: 'win'
  },
  {
    id: 'clion-format-code-mac',
    keys: ['Cmd', 'Alt', 'L'],
    description: '格式化代码',
    category: 'C/C++特有',
    platform: 'mac'
  },

  // 搜索和替换
  {
    id: 'clion-find',
    keys: ['Ctrl', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'clion-find-mac',
    keys: ['Cmd', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'clion-replace',
    keys: ['Ctrl', 'R'],
    description: '替换',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'clion-replace-mac',
    keys: ['Cmd', 'R'],
    description: '替换',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'clion-find-in-path',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在路径中查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'clion-find-in-path-mac',
    keys: ['Cmd', 'Shift', 'F'],
    description: '在路径中查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'clion-replace-in-path',
    keys: ['Ctrl', 'Shift', 'R'],
    description: '在路径中替换',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'clion-replace-in-path-mac',
    keys: ['Cmd', 'Shift', 'R'],
    description: '在路径中替换',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'clion-find-next',
    keys: ['F3'],
    description: '查找下一个',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'clion-find-next-mac',
    keys: ['Cmd', 'G'],
    description: '查找下一个',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'clion-find-previous',
    keys: ['Shift', 'F3'],
    description: '查找上一个',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'clion-find-previous-mac',
    keys: ['Cmd', 'Shift', 'G'],
    description: '查找上一个',
    category: '搜索',
    platform: 'mac'
  },

  // 文件操作
  {
    id: 'clion-new-file',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'clion-new-file-mac',
    keys: ['Cmd', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'clion-open-file',
    keys: ['Ctrl', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'clion-open-file-mac',
    keys: ['Cmd', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'clion-save-file',
    keys: ['Ctrl', 'S'],
    description: '保存文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'clion-save-file-mac',
    keys: ['Cmd', 'S'],
    description: '保存文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'clion-save-all',
    keys: ['Ctrl', 'Shift', 'S'],
    description: '保存所有',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'clion-save-all-mac',
    keys: ['Cmd', 'Shift', 'S'],
    description: '保存所有',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'clion-close-file',
    keys: ['Ctrl', 'W'],
    description: '关闭文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'clion-close-file-mac',
    keys: ['Cmd', 'W'],
    description: '关闭文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'clion-reopen-closed',
    keys: ['Ctrl', 'Shift', 'T'],
    description: '重新打开关闭的文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'clion-reopen-closed-mac',
    keys: ['Cmd', 'Shift', 'T'],
    description: '重新打开关闭的文件',
    category: '文件',
    platform: 'mac'
  },

  // 通用功能
  {
    id: 'clion-undo',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-undo-mac',
    keys: ['Cmd', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'clion-redo',
    keys: ['Ctrl', 'Y'],
    description: '重做',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-redo-mac',
    keys: ['Cmd', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'clion-copy',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-copy-mac',
    keys: ['Cmd', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'clion-paste',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-paste-mac',
    keys: ['Cmd', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'clion-cut',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-cut-mac',
    keys: ['Cmd', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'clion-select-all',
    keys: ['Ctrl', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'clion-select-all-mac',
    keys: ['Cmd', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'mac'
  },

  // 代码导航增强
  {
    id: 'clion-go-to-line',
    keys: ['Ctrl', 'G'],
    description: '跳转到行',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'clion-go-to-line-mac',
    keys: ['Cmd', 'L'],
    description: '跳转到行',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'clion-go-to-file',
    keys: ['Ctrl', 'Shift', 'N'],
    description: '跳转到文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'clion-go-to-file-mac',
    keys: ['Cmd', 'Shift', 'O'],
    description: '跳转到文件',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'clion-go-to-class',
    keys: ['Ctrl', 'N'],
    description: '跳转到类',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'clion-go-to-class-mac',
    keys: ['Cmd', 'O'],
    description: '跳转到类',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'clion-go-to-symbol',
    keys: ['Ctrl', 'Alt', 'Shift', 'N'],
    description: '跳转到符号',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'clion-go-to-symbol-mac',
    keys: ['Cmd', 'Alt', 'O'],
    description: '跳转到符号',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'clion-recent-files',
    keys: ['Ctrl', 'E'],
    description: '最近文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'clion-recent-files-mac',
    keys: ['Cmd', 'E'],
    description: '最近文件',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'clion-back',
    keys: ['Ctrl', 'Alt', 'Left'],
    description: '后退',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'clion-back-mac',
    keys: ['Cmd', '['],
    description: '后退',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'clion-forward',
    keys: ['Ctrl', 'Alt', 'Right'],
    description: '前进',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'clion-forward-mac',
    keys: ['Cmd', ']'],
    description: '前进',
    category: '导航',
    platform: 'mac'
  },

  // 代码生成和智能提示
  {
    id: 'clion-code-completion',
    keys: ['Ctrl', 'Space'],
    description: '代码补全',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'clion-code-completion-mac',
    keys: ['Ctrl', 'Space'],
    description: '代码补全',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'clion-smart-completion',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '智能代码补全',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'clion-smart-completion-mac',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '智能代码补全',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'clion-generate-code',
    keys: ['Alt', 'Insert'],
    description: '生成代码',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'clion-generate-code-mac',
    keys: ['Cmd', 'N'],
    description: '生成代码',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'clion-surround-with',
    keys: ['Ctrl', 'Alt', 'T'],
    description: '包围代码',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'clion-surround-with-mac',
    keys: ['Cmd', 'Alt', 'T'],
    description: '包围代码',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'clion-quick-fix',
    keys: ['Alt', 'Enter'],
    description: '快速修复',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'clion-quick-fix-mac',
    keys: ['Alt', 'Enter'],
    description: '快速修复',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'clion-show-intention',
    keys: ['Ctrl', 'Alt', 'Shift', 'T'],
    description: '显示意图操作',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'clion-show-intention-mac',
    keys: ['Cmd', 'Alt', 'Shift', 'T'],
    description: '显示意图操作',
    category: '编码辅助',
    platform: 'mac'
  },

  // 调试增强
  {
    id: 'clion-step-over',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'clion-step-over-mac',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'clion-step-into',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'clion-step-into-mac',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'clion-step-out',
    keys: ['Shift', 'F8'],
    description: '单步跳出',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'clion-step-out-mac',
    keys: ['Shift', 'F8'],
    description: '单步跳出',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'clion-resume',
    keys: ['F9'],
    description: '继续执行',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'clion-resume-mac',
    keys: ['F9'],
    description: '继续执行',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'clion-evaluate',
    keys: ['Alt', 'F8'],
    description: '计算表达式',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'clion-evaluate-mac',
    keys: ['Alt', 'F8'],
    description: '计算表达式',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'clion-view-breakpoints',
    keys: ['Ctrl', 'Shift', 'F8'],
    description: '查看断点',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'clion-view-breakpoints-mac',
    keys: ['Cmd', 'Shift', 'F8'],
    description: '查看断点',
    category: '调试',
    platform: 'mac'
  },

  // CMake和构建
  {
    id: 'clion-build-project',
    keys: ['Ctrl', 'F9'],
    description: '构建项目',
    category: '构建',
    platform: 'win'
  },
  {
    id: 'clion-build-project-mac',
    keys: ['Cmd', 'F9'],
    description: '构建项目',
    category: '构建',
    platform: 'mac'
  },
  {
    id: 'clion-rebuild-project',
    keys: ['Ctrl', 'Shift', 'F9'],
    description: '重新构建项目',
    category: '构建',
    platform: 'win'
  },
  {
    id: 'clion-rebuild-project-mac',
    keys: ['Cmd', 'Shift', 'F9'],
    description: '重新构建项目',
    category: '构建',
    platform: 'mac'
  },
  {
    id: 'clion-clean',
    keys: ['Ctrl', 'Shift', 'X'],
    description: '清理',
    category: '构建',
    platform: 'win'
  },
  {
    id: 'clion-clean-mac',
    keys: ['Cmd', 'Shift', 'X'],
    description: '清理',
    category: '构建',
    platform: 'mac'
  },

  // 窗口管理
  {
    id: 'clion-close-active-tab',
    keys: ['Ctrl', 'F4'],
    description: '关闭当前标签',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'clion-close-active-tab-mac',
    keys: ['Cmd', 'W'],
    description: '关闭当前标签',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'clion-next-tab',
    keys: ['Alt', 'Right'],
    description: '下一个标签',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'clion-next-tab-mac',
    keys: ['Ctrl', 'Right'],
    description: '下一个标签',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'clion-previous-tab',
    keys: ['Alt', 'Left'],
    description: '上一个标签',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'clion-previous-tab-mac',
    keys: ['Ctrl', 'Left'],
    description: '上一个标签',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'clion-split-vertically',
    keys: ['Ctrl', 'Shift', '\\'],
    description: '垂直分割',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'clion-split-vertically-mac',
    keys: ['Cmd', 'Shift', '\\'],
    description: '垂直分割',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'clion-split-horizontally',
    keys: ['Ctrl', 'Shift', '-'],
    description: '水平分割',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'clion-split-horizontally-mac',
    keys: ['Cmd', 'Shift', '-'],
    description: '水平分割',
    category: '窗口',
    platform: 'mac'
  },

  // 版本控制
  {
    id: 'clion-vcs-operations',
    keys: ['Ctrl', 'K'],
    description: 'VCS操作弹出菜单',
    category: '版本控制',
    platform: 'win'
  },
  {
    id: 'clion-vcs-operations-mac',
    keys: ['Cmd', 'K'],
    description: 'VCS操作弹出菜单',
    category: '版本控制',
    platform: 'mac'
  },
  {
    id: 'clion-commit',
    keys: ['Ctrl', 'K'],
    description: '提交',
    category: '版本控制',
    platform: 'win'
  },
  {
    id: 'clion-commit-mac',
    keys: ['Cmd', 'K'],
    description: '提交',
    category: '版本控制',
    platform: 'mac'
  },
  {
    id: 'clion-update-project',
    keys: ['Ctrl', 'T'],
    description: '更新项目',
    category: '版本控制',
    platform: 'win'
  },
  {
    id: 'clion-update-project-mac',
    keys: ['Cmd', 'T'],
    description: '更新项目',
    category: '版本控制',
    platform: 'mac'
  },
  {
    id: 'clion-push',
    keys: ['Ctrl', 'Shift', 'K'],
    description: '推送',
    category: '版本控制',
    platform: 'win'
  },
  {
    id: 'clion-push-mac',
    keys: ['Cmd', 'Shift', 'K'],
    description: '推送',
    category: '版本控制',
    platform: 'mac'
  }
]