import { Shortcut } from '../../types'

/**
 * Xcode 快捷键数据
 * 仅支持 macOS 平台（Xcode 只在 macOS 上运行）
 */
export const xcodeShortcuts: Shortcut[] = [
  // macOS版本快捷键 (Xcode只在macOS上运行)
  {
    id: 'xcode-1',
    keys: ['Cmd', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'xcode-2',
    keys: ['Cmd', 'Shift', 'N'],
    description: '新建项目',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'xcode-3',
    keys: ['Cmd', 'O'],
    description: '打开',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'xcode-4',
    keys: ['Cmd', 'S'],
    description: '保存',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'xcode-5',
    keys: ['Cmd', 'Shift', 'S'],
    description: '保存所有',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'xcode-6',
    keys: ['Cmd', 'R'],
    description: '运行',
    category: '构建',
    platform: 'mac'
  },
  {
    id: 'xcode-7',
    keys: ['Cmd', 'B'],
    description: '构建',
    category: '构建',
    platform: 'mac'
  },
  {
    id: 'xcode-8',
    keys: ['Cmd', 'Shift', 'K'],
    description: '清理构建文件夹',
    category: '构建',
    platform: 'mac'
  },
  {
    id: 'xcode-9',
    keys: ['Cmd', 'U'],
    description: '测试',
    category: '测试',
    platform: 'mac'
  },
  {
    id: 'xcode-10',
    keys: ['Cmd', 'Shift', 'O'],
    description: '快速打开',
    category: '导航',
    platform: 'mac'
  },
  
  // 编辑操作
  {
    id: 'xcode-undo',
    keys: ['Cmd', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-redo',
    keys: ['Cmd', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-copy',
    keys: ['Cmd', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-cut',
    keys: ['Cmd', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-paste',
    keys: ['Cmd', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-select-all',
    keys: ['Cmd', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-duplicate-line',
    keys: ['Cmd', 'D'],
    description: '复制行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-delete-line',
    keys: ['Ctrl', 'K'],
    description: '删除行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-comment',
    keys: ['Cmd', '/'],
    description: '注释/取消注释',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-indent',
    keys: ['Cmd', ']'],
    description: '增加缩进',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-unindent',
    keys: ['Cmd', '['],
    description: '减少缩进',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-move-line-up',
    keys: ['Cmd', 'Option', '['],
    description: '上移行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-move-line-down',
    keys: ['Cmd', 'Option', ']'],
    description: '下移行',
    category: '编辑',
    platform: 'mac'
  },
  
  // 搜索和替换
  {
    id: 'xcode-find',
    keys: ['Cmd', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'xcode-find-next',
    keys: ['Cmd', 'G'],
    description: '查找下一个',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'xcode-find-previous',
    keys: ['Cmd', 'Shift', 'G'],
    description: '查找上一个',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'xcode-replace',
    keys: ['Cmd', 'Option', 'F'],
    description: '替换',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'xcode-find-in-project',
    keys: ['Cmd', 'Shift', 'F'],
    description: '在项目中查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'xcode-find-symbol',
    keys: ['Cmd', 'Shift', 'O'],
    description: '查找符号',
    category: '搜索',
    platform: 'mac'
  },
  
  // 导航
  {
    id: 'xcode-goto-line',
    keys: ['Cmd', 'L'],
    description: '跳转到行',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'xcode-jump-to-definition',
    keys: ['Cmd', 'Ctrl', 'J'],
    description: '跳转到定义',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'xcode-back',
    keys: ['Cmd', 'Ctrl', 'Left'],
    description: '后退',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'xcode-forward',
    keys: ['Cmd', 'Ctrl', 'Right'],
    description: '前进',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'xcode-reveal-in-navigator',
    keys: ['Cmd', 'Shift', 'J'],
    description: '在导航器中显示',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'xcode-show-related-items',
    keys: ['Ctrl', '1'],
    description: '显示相关项',
    category: '导航',
    platform: 'mac'
  },
  
  // 调试
  {
    id: 'xcode-toggle-breakpoint',
    keys: ['Cmd', 'Backslash'],
    description: '切换断点',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'xcode-continue',
    keys: ['Cmd', 'Ctrl', 'Y'],
    description: '继续执行',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'xcode-step-over',
    keys: ['F6'],
    description: '单步跳过',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'xcode-step-into',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'xcode-step-out',
    keys: ['F8'],
    description: '单步跳出',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'xcode-view-debug-area',
    keys: ['Cmd', 'Shift', 'Y'],
    description: '显示/隐藏调试区域',
    category: '调试',
    platform: 'mac'
  },
  
  // iOS开发
  {
    id: 'xcode-run-simulator',
    keys: ['Cmd', 'R'],
    description: '在模拟器中运行',
    category: 'iOS开发',
    platform: 'mac'
  },
  {
    id: 'xcode-stop',
    keys: ['Cmd', '.'],
    description: '停止运行',
    category: 'iOS开发',
    platform: 'mac'
  },
  {
    id: 'xcode-device-simulator',
    keys: ['Cmd', 'Shift', '2'],
    description: '设备和模拟器',
    category: 'iOS开发',
    platform: 'mac'
  },
  {
    id: 'xcode-organizer',
    keys: ['Cmd', 'Shift', 'O'],
    description: '组织者',
    category: 'iOS开发',
    platform: 'mac'
  },
  {
    id: 'xcode-profile',
    keys: ['Cmd', 'I'],
    description: '性能分析',
    category: 'iOS开发',
    platform: 'mac'
  },
  
  // Interface Builder
  {
    id: 'xcode-show-storyboard',
    keys: ['Cmd', 'Option', 'Enter'],
    description: '显示关联的Interface Builder',
    category: 'Interface Builder',
    platform: 'mac'
  },
  {
    id: 'xcode-assistant-editor',
    keys: ['Cmd', 'Option', 'Enter'],
    description: '显示/隐藏助手编辑器',
    category: 'Interface Builder',
    platform: 'mac'
  },
  {
    id: 'xcode-show-library',
    keys: ['Cmd', 'Shift', 'L'],
    description: '显示对象库',
    category: 'Interface Builder',
    platform: 'mac'
  },
  {
    id: 'xcode-align-left',
    keys: ['Cmd', 'Option', '['],
    description: '左对齐',
    category: 'Interface Builder',
    platform: 'mac'
  },
  {
    id: 'xcode-align-right',
    keys: ['Cmd', 'Option', ']'],
    description: '右对齐',
    category: 'Interface Builder',
    platform: 'mac'
  },
  {
    id: 'xcode-distribute-horizontally',
    keys: ['Cmd', 'Option', '\\'],
    description: '水平分布',
    category: 'Interface Builder',
    platform: 'mac'
  },
  
  // 窗口管理
  {
    id: 'xcode-hide-navigator',
    keys: ['Cmd', '0'],
    description: '显示/隐藏导航器',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'xcode-show-project-navigator',
    keys: ['Cmd', '1'],
    description: '显示项目导航器',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'xcode-show-source-control-navigator',
    keys: ['Cmd', '2'],
    description: '显示源代码控制导航器',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'xcode-show-symbol-navigator',
    keys: ['Cmd', '3'],
    description: '显示符号导航器',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'xcode-show-find-navigator',
    keys: ['Cmd', '4'],
    description: '显示查找导航器',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'xcode-show-issue-navigator',
    keys: ['Cmd', '5'],
    description: '显示问题导航器',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'xcode-show-test-navigator',
    keys: ['Cmd', '6'],
    description: '显示测试导航器',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'xcode-show-debug-navigator',
    keys: ['Cmd', '7'],
    description: '显示调试导航器',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'xcode-show-breakpoint-navigator',
    keys: ['Cmd', '8'],
    description: '显示断点导航器',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'xcode-show-report-navigator',
    keys: ['Cmd', '9'],
    description: '显示报告导航器',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'xcode-hide-utilities',
    keys: ['Cmd', 'Option', '0'],
    description: '显示/隐藏实用工具',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'xcode-show-file-inspector',
    keys: ['Cmd', 'Option', '1'],
    description: '显示文件检查器',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'xcode-show-quick-help',
    keys: ['Cmd', 'Option', '2'],
    description: '显示快速帮助',
    category: '窗口',
    platform: 'mac'
  },
  
  // 代码辅助
  {
    id: 'xcode-code-completion',
    keys: ['Esc'],
    description: '代码补全',
    category: '代码辅助',
    platform: 'mac'
  },
  {
    id: 'xcode-show-documentation',
    keys: ['Cmd', 'Option', '/'],
    description: '显示文档',
    category: '代码辅助',
    platform: 'mac'
  },
  {
    id: 'xcode-edit-all-in-scope',
    keys: ['Cmd', 'Ctrl', 'E'],
    description: '编辑作用域内所有',
    category: '代码辅助',
    platform: 'mac'
  },
  {
    id: 'xcode-refactor',
    keys: ['Cmd', 'Ctrl', 'Shift', 'R'],
    description: '重构',
    category: '代码辅助',
    platform: 'mac'
  },
  {
    id: 'xcode-extract-method',
    keys: ['Cmd', 'Ctrl', 'Shift', 'M'],
    description: '提取方法',
    category: '代码辅助',
    platform: 'mac'
  },
  {
    id: 'xcode-rename',
    keys: ['Cmd', 'Ctrl', 'Shift', 'N'],
    description: '重命名',
    category: '代码辅助',
    platform: 'mac'
  },
  
  // 版本控制
  {
    id: 'xcode-commit',
    keys: ['Cmd', 'Option', 'C'],
    description: '提交更改',
    category: '版本控制',
    platform: 'mac'
  },
  {
    id: 'xcode-discard-changes',
    keys: ['Cmd', 'Option', 'D'],
    description: '放弃更改',
    category: '版本控制',
    platform: 'mac'
  },
  {
    id: 'xcode-add-files',
    keys: ['Cmd', 'Option', 'A'],
    description: '添加文件',
    category: '版本控制',
    platform: 'mac'
  },
  {
    id: 'xcode-show-version-editor',
    keys: ['Cmd', 'Option', 'Enter'],
    description: '显示版本编辑器',
    category: '版本控制',
    platform: 'mac'
  },
  
  // 模拟器操作
  {
    id: 'xcode-simulator-home',
    keys: ['Cmd', 'Shift', 'H'],
    description: '模拟器主屏幕',
    category: '模拟器',
    platform: 'mac'
  },
  {
    id: 'xcode-simulator-lock',
    keys: ['Cmd', 'L'],
    description: '模拟器锁屏',
    category: '模拟器',
    platform: 'mac'
  },
  {
    id: 'xcode-simulator-rotate-left',
    keys: ['Cmd', 'Left'],
    description: '模拟器左旋转',
    category: '模拟器',
    platform: 'mac'
  },
  {
    id: 'xcode-simulator-rotate-right',
    keys: ['Cmd', 'Right'],
    description: '模拟器右旋转',
    category: '模拟器',
    platform: 'mac'
  },
  {
    id: 'xcode-simulator-screenshot',
    keys: ['Cmd', 'S'],
    description: '模拟器截图',
    category: '模拟器',
    platform: 'mac'
  },
  
  // 高级重构
  {
    id: 'xcode-refactor-rename',
    keys: ['Cmd', 'Ctrl', 'Shift', 'N'],
    description: '重命名符号',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'xcode-refactor-extract',
    keys: ['Cmd', 'Ctrl', 'Shift', 'E'],
    description: '提取方法',
    category: '重构',
    platform: 'mac'
  },
  {
    id: 'xcode-refactor-create-constant',
    keys: ['Cmd', 'Ctrl', 'Shift', 'C'],
    description: '创建常量',
    category: '重构',
    platform: 'mac'
  },
  
  // 性能和分析
  {
    id: 'xcode-instruments',
    keys: ['Cmd', 'I'],
    description: '启动Instruments',
    category: '性能分析',
    platform: 'mac'
  },
  {
    id: 'xcode-memory-graph',
    keys: ['Cmd', 'Option', 'M'],
    description: '显示内存图',
    category: '性能分析',
    platform: 'mac'
  },
  {
    id: 'xcode-view-hierarchy',
    keys: ['Cmd', 'Option', 'V'],
    description: '查看视图层次结构',
    category: '性能分析',
    platform: 'mac'
  },
  
  // 辅助功能
  {
    id: 'xcode-accessibility-inspector',
    keys: ['Cmd', 'Option', 'A'],
    description: '显示辅助功能检查器',
    category: '辅助功能',
    platform: 'mac'
  },
  {
    id: 'xcode-voiceover',
    keys: ['Cmd', 'F5'],
    description: '切换VoiceOver',
    category: '辅助功能',
    platform: 'mac'
  },
  
  // 项目管理
  {
    id: 'xcode-add-target',
    keys: ['Cmd', 'Option', 'T'],
    description: '添加目标',
    category: '项目管理',
    platform: 'mac'
  },
  {
    id: 'xcode-add-file',
    keys: ['Cmd', 'Option', 'N'],
    description: '添加文件',
    category: '项目管理',
    platform: 'mac'
  },
  {
    id: 'xcode-reveal-in-finder',
    keys: ['Cmd', 'R'],
    description: '在Finder中显示',
    category: '项目管理',
    platform: 'mac'
  },
  
  // 构建设置
  {
    id: 'xcode-build-settings',
    keys: ['Cmd', 'Option', 'B'],
    description: '显示构建设置',
    category: '构建',
    platform: 'mac'
  },
  {
    id: 'xcode-scheme-editor',
    keys: ['Cmd', 'Option', 'S'],
    description: '编辑方案',
    category: '构建',
    platform: 'mac'
  },
  
  // 测试相关
  {
    id: 'xcode-test-navigator',
    keys: ['Cmd', '6'],
    description: '显示测试导航器',
    category: '测试',
    platform: 'mac'
  },
  {
    id: 'xcode-test-history',
    keys: ['Cmd', 'Option', 'H'],
    description: '测试历史',
    category: '测试',
    platform: 'mac'
  },
  {
    id: 'xcode-enable-disable-breakpoint',
    keys: ['Cmd', 'Option', 'Y'],
    description: '启用/禁用断点',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'xcode-add-exception-breakpoint',
    keys: ['Cmd', 'Option', 'E'],
    description: '添加异常断点',
    category: '调试',
    platform: 'mac'
  },
  
  // 代码片段
  {
    id: 'xcode-show-snippets',
    keys: ['Cmd', 'Shift', 'Option', 'S'],
    description: '显示代码片段',
    category: '代码辅助',
    platform: 'mac'
  },
  {
    id: 'xcode-create-snippet',
    keys: ['Cmd', 'Shift', 'Option', 'C'],
    description: '创建代码片段',
    category: '代码辅助',
    platform: 'mac'
  },
  
  // 文档和帮助
  {
    id: 'xcode-documentation',
    keys: ['Cmd', 'Shift', '0'],
    description: '显示文档和参考',
    category: '帮助',
    platform: 'mac'
  },
  {
    id: 'xcode-developer-website',
    keys: ['Cmd', 'Shift', 'Option', 'W'],
    description: '打开开发者网站',
    category: '帮助',
    platform: 'mac'
  },
  
  // 光标和选择
  {
    id: 'xcode-move-to-beginning',
    keys: ['Cmd', 'Left'],
    description: '移动到行首',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-move-to-end',
    keys: ['Cmd', 'Right'],
    description: '移动到行尾',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-select-line',
    keys: ['Cmd', 'L'],
    description: '选择整行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'xcode-select-word',
    keys: ['Cmd', 'D'],
    description: '选择单词',
    category: '编辑',
    platform: 'mac'
  }
]