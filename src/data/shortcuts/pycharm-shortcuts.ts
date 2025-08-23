import { Shortcut } from '../../types'

export const pycharmShortcuts: Shortcut[] = [
  // 编辑
  {
    id: 'pycharm-duplicate-line',
    keys: ['Ctrl', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-duplicate-line-mac',
    keys: ['Cmd', 'D'],
    description: '复制当前行或选中内容',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'pycharm-delete-line',
    keys: ['Ctrl', 'Y'],
    description: '删除当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-delete-line-mac',
    keys: ['Cmd', 'Backspace'],
    description: '删除当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'pycharm-comment-line',
    keys: ['Ctrl', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-comment-line-mac',
    keys: ['Cmd', '/'],
    description: '注释/取消注释当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'pycharm-block-comment',
    keys: ['Ctrl', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-block-comment-mac',
    keys: ['Cmd', 'Shift', '/'],
    description: '块注释',
    category: '编辑',
    platform: 'mac'
  },
  
  // 导航
  {
    id: 'pycharm-goto-declaration',
    keys: ['Ctrl', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'pycharm-goto-declaration-mac',
    keys: ['Cmd', 'B'],
    description: '跳转到声明',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'pycharm-goto-implementation',
    keys: ['Ctrl', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'pycharm-goto-implementation-mac',
    keys: ['Cmd', 'Alt', 'B'],
    description: '跳转到实现',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'pycharm-find-usages',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'pycharm-find-usages-mac',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '导航',
    platform: 'mac'
  },
  
  // 重构
  {
    id: 'pycharm-rename',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'pycharm-rename-mac',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'pycharm-extract-method',
    keys: ['Ctrl', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'pycharm-extract-method-mac',
    keys: ['Cmd', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'pycharm-extract-variable',
    keys: ['Ctrl', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'pycharm-extract-variable-mac',
    keys: ['Cmd', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'mac'
  },
  
  // 运行和调试
  {
    id: 'pycharm-run',
    keys: ['Shift', 'F10'],
    description: '运行',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'pycharm-run-mac',
    keys: ['Ctrl', 'R'],
    description: '运行',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'pycharm-debug',
    keys: ['Shift', 'F9'],
    description: '调试',
    category: '运行',
    platform: 'win'
  },
  {
    id: 'pycharm-debug-mac',
    keys: ['Ctrl', 'D'],
    description: '调试',
    category: '运行',
    platform: 'mac'
  },
  {
    id: 'pycharm-toggle-breakpoint',
    keys: ['Ctrl', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'pycharm-toggle-breakpoint-mac',
    keys: ['Cmd', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'mac'
  },
  
  // Python特有
  {
    id: 'pycharm-quick-docs',
    keys: ['Ctrl', 'Q'],
    description: '查看文档',
    category: 'Python特有',
    platform: 'win'
  },
  {
    id: 'pycharm-quick-docs-mac',
    keys: ['F1'],
    description: '查看文档',
    category: 'Python特有',
    platform: 'mac'
  },
  {
    id: 'pycharm-optimize-imports',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: 'Python特有',
    platform: 'win'
  },
  {
    id: 'pycharm-optimize-imports-mac',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: 'Python特有',
    platform: 'mac'
  },
  {
    id: 'pycharm-format-code',
    keys: ['Ctrl', 'Alt', 'L'],
    description: '格式化代码',
    category: 'Python特有',
    platform: 'win'
  },
  {
    id: 'pycharm-format-code-mac',
    keys: ['Cmd', 'Alt', 'L'],
    description: '格式化代码',
    category: 'Python特有',
    platform: 'mac'
  },
  
  // 文件操作
  {
    id: 'pycharm-new-file',
    keys: ['Ctrl', 'Alt', 'Insert'],
    description: '新建文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'pycharm-new-file-mac',
    keys: ['Cmd', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'pycharm-new-file-linux',
    keys: ['Ctrl', 'Alt', 'Insert'],
    description: '新建文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'pycharm-save',
    keys: ['Ctrl', 'S'],
    description: '保存所有',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'pycharm-save-mac',
    keys: ['Cmd', 'S'],
    description: '保存所有',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'pycharm-save-linux',
    keys: ['Ctrl', 'S'],
    description: '保存所有',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'pycharm-close',
    keys: ['Ctrl', 'F4'],
    description: '关闭',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'pycharm-close-mac',
    keys: ['Cmd', 'W'],
    description: '关闭',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'pycharm-close-linux',
    keys: ['Ctrl', 'F4'],
    description: '关闭',
    category: '文件',
    platform: 'linux'
  },
  
  // 编辑增强
  {
    id: 'pycharm-undo',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-undo-mac',
    keys: ['Cmd', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'pycharm-undo-linux',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'pycharm-redo',
    keys: ['Ctrl', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-redo-mac',
    keys: ['Cmd', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'pycharm-redo-linux',
    keys: ['Ctrl', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'pycharm-copy',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-copy-mac',
    keys: ['Cmd', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'pycharm-copy-linux',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'pycharm-paste',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-paste-mac',
    keys: ['Cmd', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'pycharm-paste-linux',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'pycharm-cut',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-cut-mac',
    keys: ['Cmd', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'pycharm-cut-linux',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'pycharm-select-all',
    keys: ['Ctrl', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'pycharm-select-all-mac',
    keys: ['Cmd', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'pycharm-select-all-linux',
    keys: ['Ctrl', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'linux'
  },
  
  // 搜索和替换
  {
    id: 'pycharm-find',
    keys: ['Ctrl', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'pycharm-find-mac',
    keys: ['Cmd', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'pycharm-find-linux',
    keys: ['Ctrl', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'pycharm-replace',
    keys: ['Ctrl', 'R'],
    description: '替换',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'pycharm-replace-mac',
    keys: ['Cmd', 'R'],
    description: '替换',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'pycharm-replace-linux',
    keys: ['Ctrl', 'R'],
    description: '替换',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'pycharm-find-in-path',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在路径中查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'pycharm-find-in-path-mac',
    keys: ['Cmd', 'Shift', 'F'],
    description: '在路径中查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'pycharm-find-in-path-linux',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在路径中查找',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'pycharm-search-everywhere',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'pycharm-search-everywhere-mac',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'pycharm-search-everywhere-linux',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '搜索',
    platform: 'linux'
  },
  
  // 导航增强
  {
    id: 'pycharm-go-to-class',
    keys: ['Ctrl', 'N'],
    description: '跳转到类',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'pycharm-go-to-class-mac',
    keys: ['Cmd', 'O'],
    description: '跳转到类',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'pycharm-go-to-class-linux',
    keys: ['Ctrl', 'N'],
    description: '跳转到类',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'pycharm-go-to-file',
    keys: ['Ctrl', 'Shift', 'N'],
    description: '跳转到文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'pycharm-go-to-file-mac',
    keys: ['Cmd', 'Shift', 'O'],
    description: '跳转到文件',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'pycharm-go-to-file-linux',
    keys: ['Ctrl', 'Shift', 'N'],
    description: '跳转到文件',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'pycharm-go-to-line',
    keys: ['Ctrl', 'G'],
    description: '跳转到行',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'pycharm-go-to-line-mac',
    keys: ['Cmd', 'L'],
    description: '跳转到行',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'pycharm-go-to-line-linux',
    keys: ['Ctrl', 'G'],
    description: '跳转到行',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'pycharm-recent-files',
    keys: ['Ctrl', 'E'],
    description: '最近的文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'pycharm-recent-files-mac',
    keys: ['Cmd', 'E'],
    description: '最近的文件',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'pycharm-recent-files-linux',
    keys: ['Ctrl', 'E'],
    description: '最近的文件',
    category: '导航',
    platform: 'linux'
  },
  
  // 代码生成和智能提示
  {
    id: 'pycharm-code-completion',
    keys: ['Ctrl', 'Space'],
    description: '基本代码补全',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'pycharm-code-completion-mac',
    keys: ['Ctrl', 'Space'],
    description: '基本代码补全',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'pycharm-code-completion-linux',
    keys: ['Ctrl', 'Space'],
    description: '基本代码补全',
    category: '编码辅助',
    platform: 'linux'
  },
  {
    id: 'pycharm-smart-completion',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '智能代码补全',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'pycharm-smart-completion-mac',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '智能代码补全',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'pycharm-smart-completion-linux',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '智能代码补全',
    category: '编码辅助',
    platform: 'linux'
  },
  {
    id: 'pycharm-generate',
    keys: ['Alt', 'Insert'],
    description: '生成代码',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'pycharm-generate-mac',
    keys: ['Cmd', 'N'],
    description: '生成代码',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'pycharm-generate-linux',
    keys: ['Alt', 'Insert'],
    description: '生成代码',
    category: '编码辅助',
    platform: 'linux'
  },
  {
    id: 'pycharm-quick-fix',
    keys: ['Alt', 'Enter'],
    description: '显示意图操作和快速修复',
    category: '编码辅助',
    platform: 'win'
  },
  {
    id: 'pycharm-quick-fix-mac',
    keys: ['Alt', 'Enter'],
    description: '显示意图操作和快速修复',
    category: '编码辅助',
    platform: 'mac'
  },
  {
    id: 'pycharm-quick-fix-linux',
    keys: ['Alt', 'Enter'],
    description: '显示意图操作和快速修复',
    category: '编码辅助',
    platform: 'linux'
  },
  
  // 调试增强
  {
    id: 'pycharm-step-over',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'pycharm-step-over-mac',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'pycharm-step-over-linux',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'pycharm-step-into',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'pycharm-step-into-mac',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'pycharm-step-into-linux',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'pycharm-step-out',
    keys: ['Shift', 'F8'],
    description: '单步跳出',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'pycharm-step-out-mac',
    keys: ['Shift', 'F8'],
    description: '单步跳出',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'pycharm-step-out-linux',
    keys: ['Shift', 'F8'],
    description: '单步跳出',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'pycharm-resume',
    keys: ['F9'],
    description: '继续执行',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'pycharm-resume-mac',
    keys: ['F9'],
    description: '继续执行',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'pycharm-resume-linux',
    keys: ['F9'],
    description: '继续执行',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'pycharm-evaluate-expression',
    keys: ['Alt', 'F8'],
    description: '计算表达式',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'pycharm-evaluate-expression-mac',
    keys: ['Alt', 'F8'],
    description: '计算表达式',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'pycharm-evaluate-expression-linux',
    keys: ['Alt', 'F8'],
    description: '计算表达式',
    category: '调试',
    platform: 'linux'
  },
  
  // Python特有增强
  {
    id: 'pycharm-run-python-console',
    keys: ['Alt', 'Shift', 'F10'],
    description: '运行Python控制台',
    category: 'Python特有',
    platform: 'win'
  },
  {
    id: 'pycharm-run-python-console-mac',
    keys: ['Alt', 'Shift', 'F10'],
    description: '运行Python控制台',
    category: 'Python特有',
    platform: 'mac'
  },
  {
    id: 'pycharm-run-python-console-linux',
    keys: ['Alt', 'Shift', 'F10'],
    description: '运行Python控制台',
    category: 'Python特有',
    platform: 'linux'
  },
  {
    id: 'pycharm-show-type-info',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '显示类型信息',
    category: 'Python特有',
    platform: 'win'
  },
  {
    id: 'pycharm-show-type-info-mac',
    keys: ['Cmd', 'Shift', 'P'],
    description: '显示类型信息',
    category: 'Python特有',
    platform: 'mac'
  },
  {
    id: 'pycharm-show-type-info-linux',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '显示类型信息',
    category: 'Python特有',
    platform: 'linux'
  },
  {
    id: 'pycharm-python-interpreter',
    keys: ['Ctrl', 'Alt', 'S'],
    description: 'Python解释器设置',
    category: 'Python特有',
    platform: 'win'
  },
  {
    id: 'pycharm-python-interpreter-mac',
    keys: ['Cmd', ','],
    description: 'Python解释器设置',
    category: 'Python特有',
    platform: 'mac'
  },
  {
    id: 'pycharm-python-interpreter-linux',
    keys: ['Ctrl', 'Alt', 'S'],
    description: 'Python解释器设置',
    category: 'Python特有',
    platform: 'linux'
  }
]