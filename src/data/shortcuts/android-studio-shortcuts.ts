import { Shortcut } from '../../types'

/**
 * Android Studio 快捷键数据
 * 支持 Windows、macOS、Linux 三个平台
 * 包含完整的Android开发工具快捷键集合
 */
export const androidStudioShortcuts: Shortcut[] = [
  // ============= Windows版本快捷键 =============
  
  // 通用操作
  {
    id: 'android-general-1',
    keys: ['Ctrl', 'Shift', 'A'],
    description: '查找操作',
    category: '通用',
    platform: 'win'
  },
  {
    id: 'android-general-2',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '通用',
    platform: 'win'
  },
  {
    id: 'android-general-3',
    keys: ['Alt', 'Enter'],
    description: '显示意图操作和快速修复',
    category: '通用',
    platform: 'win'
  },
  {
    id: 'android-general-4',
    keys: ['Ctrl', 'Alt', 'S'],
    description: '打开设置对话框',
    category: '通用',
    platform: 'win'
  },
  {
    id: 'android-general-5',
    keys: ['Ctrl', 'Alt', 'Shift', 'S'],
    description: '打开项目结构对话框',
    category: '通用',
    platform: 'win'
  },
  {
    id: 'android-general-6',
    keys: ['Ctrl', 'K'],
    description: 'VCS提交',
    category: '通用',
    platform: 'win'
  },
  {
    id: 'android-general-7',
    keys: ['Ctrl', 'Shift', 'K'],
    description: 'VCS推送',
    category: '通用',
    platform: 'win'
  },

  // 文件操作
  {
    id: 'android-file-1',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'android-file-2',
    keys: ['Ctrl', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'android-file-3',
    keys: ['Ctrl', 'S'],
    description: '保存文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'android-file-4',
    keys: ['Ctrl', 'Shift', 'S'],
    description: '保存所有文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'android-file-5',
    keys: ['Ctrl', 'W'],
    description: '关闭当前标签页',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'android-file-6',
    keys: ['Ctrl', 'Shift', 'W'],
    description: '关闭所有标签页',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'android-file-7',
    keys: ['Ctrl', 'Shift', 'T'],
    description: '重新打开关闭的标签页',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'android-file-8',
    keys: ['Ctrl', 'E'],
    description: '最近打开的文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'android-file-9',
    keys: ['Ctrl', 'Shift', 'E'],
    description: '最近编辑的文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'android-file-10',
    keys: ['Alt', '1'],
    description: '打开/关闭项目工具窗口',
    category: '文件',
    platform: 'win'
  },

  // 导航操作
  {
    id: 'android-nav-1',
    keys: ['Ctrl', 'N'],
    description: '转到类',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'android-nav-2',
    keys: ['Ctrl', 'Shift', 'N'],
    description: '转到文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'android-nav-3',
    keys: ['Ctrl', 'Alt', 'Shift', 'N'],
    description: '转到符号',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'android-nav-4',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'android-nav-5',
    keys: ['Ctrl', 'B'],
    description: '转到声明',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'android-nav-6',
    keys: ['Ctrl', 'Alt', 'B'],
    description: '转到实现',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'android-nav-7',
    keys: ['Ctrl', 'U'],
    description: '转到父类',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'android-nav-8',
    keys: ['Alt', 'Left'],
    description: '后退',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'android-nav-9',
    keys: ['Alt', 'Right'],
    description: '前进',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'android-nav-10',
    keys: ['Ctrl', 'Alt', 'Left'],
    description: '上一个编辑位置',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'android-nav-11',
    keys: ['Ctrl', 'Alt', 'Right'],
    description: '下一个编辑位置',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'android-nav-12',
    keys: ['Ctrl', 'Tab'],
    description: '在打开的文件间切换',
    category: '导航',
    platform: 'win'
  },

  // 编辑操作
  {
    id: 'android-edit-1',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-2',
    keys: ['Ctrl', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-3',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-4',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-5',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-6',
    keys: ['Ctrl', 'D'],
    description: '复制当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-7',
    keys: ['Ctrl', 'Y'],
    description: '删除当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-8',
    keys: ['Ctrl', '/'],
    description: '切换行注释',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-9',
    keys: ['Ctrl', 'Shift', '/'],
    description: '切换块注释',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-10',
    keys: ['Alt', 'Shift', 'Up'],
    description: '向上移动行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-11',
    keys: ['Alt', 'Shift', 'Down'],
    description: '向下移动行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-12',
    keys: ['Ctrl', 'W'],
    description: '扩展选择',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-13',
    keys: ['Ctrl', 'Shift', 'W'],
    description: '收缩选择',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-14',
    keys: ['Tab'],
    description: '增加缩进',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-15',
    keys: ['Shift', 'Tab'],
    description: '减少缩进',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-16',
    keys: ['Ctrl', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'android-edit-17',
    keys: ['Ctrl', 'L'],
    description: '选择当前行',
    category: '编辑',
    platform: 'win'
  },

  // 搜索和替换
  {
    id: 'android-search-1',
    keys: ['Ctrl', 'F'],
    description: '在当前文件中查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'android-search-2',
    keys: ['Ctrl', 'R'],
    description: '在当前文件中替换',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'android-search-3',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在项目中查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'android-search-4',
    keys: ['Ctrl', 'Shift', 'R'],
    description: '在项目中替换',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'android-search-5',
    keys: ['F3'],
    description: '查找下一个',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'android-search-6',
    keys: ['Shift', 'F3'],
    description: '查找上一个',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'android-search-7',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'android-search-8',
    keys: ['Ctrl', 'F7'],
    description: '在文件中查找使用',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'android-search-9',
    keys: ['Ctrl', 'Alt', 'F7'],
    description: '显示使用',
    category: '搜索',
    platform: 'win'
  },

  // 重构操作
  {
    id: 'android-refactor-1',
    keys: ['Shift', 'F6'],
    description: '重命名',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'android-refactor-2',
    keys: ['Ctrl', 'Alt', 'M'],
    description: '提取方法',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'android-refactor-3',
    keys: ['Ctrl', 'Alt', 'V'],
    description: '提取变量',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'android-refactor-4',
    keys: ['Ctrl', 'Alt', 'F'],
    description: '提取字段',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'android-refactor-5',
    keys: ['Ctrl', 'Alt', 'C'],
    description: '提取常量',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'android-refactor-6',
    keys: ['Ctrl', 'Alt', 'P'],
    description: '提取参数',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'android-refactor-7',
    keys: ['F6'],
    description: '移动',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'android-refactor-8',
    keys: ['F5'],
    description: '复制',
    category: '重构',
    platform: 'win'
  },
  {
    id: 'android-refactor-9',
    keys: ['Alt', 'Delete'],
    description: '安全删除',
    category: '重构',
    platform: 'win'
  },

  // 调试操作
  {
    id: 'android-debug-1',
    keys: ['Shift', 'F9'],
    description: '调试运行',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'android-debug-2',
    keys: ['Shift', 'F10'],
    description: '正常运行',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'android-debug-3',
    keys: ['Ctrl', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'android-debug-4',
    keys: ['Ctrl', 'Shift', 'F8'],
    description: '查看断点',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'android-debug-5',
    keys: ['F9'],
    description: '恢复程序',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'android-debug-6',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'android-debug-7',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'android-debug-8',
    keys: ['Shift', 'F8'],
    description: '单步跳出',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'android-debug-9',
    keys: ['Alt', 'F9'],
    description: '运行到光标',
    category: '调试',
    platform: 'win'
  },
  {
    id: 'android-debug-10',
    keys: ['Alt', 'F8'],
    description: '计算表达式',
    category: '调试',
    platform: 'win'
  },

  // 代码生成和模板
  {
    id: 'android-code-1',
    keys: ['Alt', 'Insert'],
    description: '生成代码',
    category: '代码生成',
    platform: 'win'
  },
  {
    id: 'android-code-2',
    keys: ['Ctrl', 'O'],
    description: '重写方法',
    category: '代码生成',
    platform: 'win'
  },
  {
    id: 'android-code-3',
    keys: ['Ctrl', 'I'],
    description: '实现方法',
    category: '代码生成',
    platform: 'win'
  },
  {
    id: 'android-code-4',
    keys: ['Ctrl', 'J'],
    description: '插入实时模板',
    category: '代码生成',
    platform: 'win'
  },
  {
    id: 'android-code-5',
    keys: ['Ctrl', 'Alt', 'T'],
    description: '环绕代码',
    category: '代码生成',
    platform: 'win'
  },
  {
    id: 'android-code-6',
    keys: ['Ctrl', 'Alt', 'L'],
    description: '格式化代码',
    category: '代码生成',
    platform: 'win'
  },
  {
    id: 'android-code-7',
    keys: ['Ctrl', 'Alt', 'O'],
    description: '优化导入',
    category: '代码生成',
    platform: 'win'
  },
  {
    id: 'android-code-8',
    keys: ['Ctrl', 'Alt', 'I'],
    description: '自动缩进行',
    category: '代码生成',
    platform: 'win'
  },

  // Android特有功能
  {
    id: 'android-android-1',
    keys: ['Ctrl', 'F9'],
    description: '构建项目',
    category: 'Android开发',
    platform: 'win'
  },
  {
    id: 'android-android-2',
    keys: ['Ctrl', 'Shift', 'F9'],
    description: '重新构建项目',
    category: 'Android开发',
    platform: 'win'
  },
  {
    id: 'android-android-3',
    keys: ['Alt', 'Shift', 'F10'],
    description: '运行配置选择',
    category: 'Android开发',
    platform: 'win'
  },
  {
    id: 'android-android-4',
    keys: ['Alt', 'Shift', 'F9'],
    description: '调试配置选择',
    category: 'Android开发',
    platform: 'win'
  },
  {
    id: 'android-android-5',
    keys: ['Ctrl', 'Shift', 'O'],
    description: '同步项目与Gradle文件',
    category: 'Android开发',
    platform: 'win'
  },
  {
    id: 'android-android-6',
    keys: ['Ctrl', 'Alt', 'Y'],
    description: '同步',
    category: 'Android开发',
    platform: 'win'
  },

  // 视图和窗口
  {
    id: 'android-view-1',
    keys: ['Ctrl', 'Shift', 'F12'],
    description: '最大化编辑器',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'android-view-2',
    keys: ['Alt', '1'],
    description: '项目工具窗口',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'android-view-3',
    keys: ['Alt', '2'],
    description: '收藏夹工具窗口',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'android-view-4',
    keys: ['Alt', '3'],
    description: '查找工具窗口',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'android-view-5',
    keys: ['Alt', '4'],
    description: '运行工具窗口',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'android-view-6',
    keys: ['Alt', '5'],
    description: '调试工具窗口',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'android-view-7',
    keys: ['Alt', '6'],
    description: 'TODO工具窗口',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'android-view-8',
    keys: ['Alt', '7'],
    description: '结构工具窗口',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'android-view-9',
    keys: ['Alt', '9'],
    description: '版本控制工具窗口',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'android-view-10',
    keys: ['Alt', '0'],
    description: '消息工具窗口',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'android-view-11',
    keys: ['Shift', 'Escape'],
    description: '关闭活动工具窗口',
    category: '视图',
    platform: 'win'
  },

  // 智能感知和补全
  {
    id: 'android-intellisense-1',
    keys: ['Ctrl', 'Space'],
    description: '基本代码补全',
    category: '智能感知',
    platform: 'win'
  },
  {
    id: 'android-intellisense-2',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '智能代码补全',
    category: '智能感知',
    platform: 'win'
  },
  {
    id: 'android-intellisense-3',
    keys: ['Ctrl', 'P'],
    description: '参数信息',
    category: '智能感知',
    platform: 'win'
  },
  {
    id: 'android-intellisense-4',
    keys: ['Ctrl', 'Q'],
    description: '快速文档查看',
    category: '智能感知',
    platform: 'win'
  },
  {
    id: 'android-intellisense-5',
    keys: ['Ctrl', 'Shift', 'I'],
    description: '快速定义查看',
    category: '智能感知',
    platform: 'win'
  },
  {
    id: 'android-intellisense-6',
    keys: ['Ctrl', 'F1'],
    description: '错误描述',
    category: '智能感知',
    platform: 'win'
  },

  // ============= macOS版本快捷键 =============
  
  // 通用操作 - macOS
  {
    id: 'android-general-1-mac',
    keys: ['Cmd', 'Shift', 'A'],
    description: '查找操作',
    category: '通用',
    platform: 'mac'
  },
  {
    id: 'android-general-2-mac',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '通用',
    platform: 'mac'
  },
  {
    id: 'android-general-3-mac',
    keys: ['Option', 'Enter'],
    description: '显示意图操作和快速修复',
    category: '通用',
    platform: 'mac'
  },
  {
    id: 'android-general-4-mac',
    keys: ['Cmd', ','],
    description: '打开设置对话框',
    category: '通用',
    platform: 'mac'
  },
  {
    id: 'android-general-5-mac',
    keys: ['Cmd', ';'],
    description: '打开项目结构对话框',
    category: '通用',
    platform: 'mac'
  },

  // 文件操作 - macOS
  {
    id: 'android-file-1-mac',
    keys: ['Cmd', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'android-file-2-mac',
    keys: ['Cmd', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'android-file-3-mac',
    keys: ['Cmd', 'S'],
    description: '保存文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'android-file-4-mac',
    keys: ['Cmd', 'W'],
    description: '关闭当前标签页',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'android-file-5-mac',
    keys: ['Cmd', 'E'],
    description: '最近打开的文件',
    category: '文件',
    platform: 'mac'
  },

  // 导航操作 - macOS
  {
    id: 'android-nav-1-mac',
    keys: ['Cmd', 'O'],
    description: '转到类',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'android-nav-2-mac',
    keys: ['Cmd', 'Shift', 'O'],
    description: '转到文件',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'android-nav-3-mac',
    keys: ['Cmd', 'Option', 'O'],
    description: '转到符号',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'android-nav-4-mac',
    keys: ['Cmd', 'L'],
    description: '转到行',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'android-nav-5-mac',
    keys: ['Cmd', 'B'],
    description: '转到声明',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'android-nav-6-mac',
    keys: ['Cmd', '['],
    description: '后退',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'android-nav-7-mac',
    keys: ['Cmd', ']'],
    description: '前进',
    category: '导航',
    platform: 'mac'
  },

  // 编辑操作 - macOS
  {
    id: 'android-edit-1-mac',
    keys: ['Cmd', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'android-edit-2-mac',
    keys: ['Cmd', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'android-edit-3-mac',
    keys: ['Cmd', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'android-edit-4-mac',
    keys: ['Cmd', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'android-edit-5-mac',
    keys: ['Cmd', 'D'],
    description: '复制当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'android-edit-6-mac',
    keys: ['Cmd', '/'],
    description: '切换行注释',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'android-edit-7-mac',
    keys: ['Cmd', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'mac'
  },

  // 搜索和替换 - macOS
  {
    id: 'android-search-1-mac',
    keys: ['Cmd', 'F'],
    description: '在当前文件中查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'android-search-2-mac',
    keys: ['Cmd', 'R'],
    description: '在当前文件中替换',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'android-search-3-mac',
    keys: ['Cmd', 'Shift', 'F'],
    description: '在项目中查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'android-search-4-mac',
    keys: ['Option', 'F7'],
    description: '查找使用',
    category: '搜索',
    platform: 'mac'
  },

  // 调试操作 - macOS
  {
    id: 'android-debug-1-mac',
    keys: ['Ctrl', 'D'],
    description: '调试运行',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'android-debug-2-mac',
    keys: ['Ctrl', 'R'],
    description: '正常运行',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'android-debug-3-mac',
    keys: ['Cmd', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'android-debug-4-mac',
    keys: ['F9'],
    description: '恢复程序',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'android-debug-5-mac',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'mac'
  },
  {
    id: 'android-debug-6-mac',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'mac'
  },

  // ============= Linux版本快捷键 =============
  
  // 通用操作 - Linux (与 Windows 基本相同)
  {
    id: 'android-general-1-linux',
    keys: ['Ctrl', 'Shift', 'A'],
    description: '查找操作',
    category: '通用',
    platform: 'linux'
  },
  {
    id: 'android-general-2-linux',
    keys: ['Shift', 'Shift'],
    description: '随处搜索',
    category: '通用',
    platform: 'linux'
  },
  {
    id: 'android-general-3-linux',
    keys: ['Alt', 'Enter'],
    description: '显示意图操作和快速修复',
    category: '通用',
    platform: 'linux'
  },
  {
    id: 'android-general-4-linux',
    keys: ['Ctrl', 'Alt', 'S'],
    description: '打开设置对话框',
    category: '通用',
    platform: 'linux'
  },

  // 文件操作 - Linux
  {
    id: 'android-file-1-linux',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'android-file-2-linux',
    keys: ['Ctrl', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'android-file-3-linux',
    keys: ['Ctrl', 'S'],
    description: '保存文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'android-file-4-linux',
    keys: ['Ctrl', 'W'],
    description: '关闭当前标签页',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'android-file-5-linux',
    keys: ['Ctrl', 'E'],
    description: '最近打开的文件',
    category: '文件',
    platform: 'linux'
  },

  // 导航操作 - Linux
  {
    id: 'android-nav-1-linux',
    keys: ['Ctrl', 'N'],
    description: '转到类',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'android-nav-2-linux',
    keys: ['Ctrl', 'Shift', 'N'],
    description: '转到文件',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'android-nav-3-linux',
    keys: ['Ctrl', 'Alt', 'Shift', 'N'],
    description: '转到符号',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'android-nav-4-linux',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'android-nav-5-linux',
    keys: ['Ctrl', 'B'],
    description: '转到声明',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'android-nav-6-linux',
    keys: ['Alt', 'Left'],
    description: '后退',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'android-nav-7-linux',
    keys: ['Alt', 'Right'],
    description: '前进',
    category: '导航',
    platform: 'linux'
  },

  // 编辑操作 - Linux
  {
    id: 'android-edit-1-linux',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'android-edit-2-linux',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'android-edit-3-linux',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'android-edit-4-linux',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'android-edit-5-linux',
    keys: ['Ctrl', 'D'],
    description: '复制当前行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'android-edit-6-linux',
    keys: ['Ctrl', '/'],
    description: '切换行注释',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'android-edit-7-linux',
    keys: ['Ctrl', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'linux'
  },

  // 搜索和替换 - Linux
  {
    id: 'android-search-1-linux',
    keys: ['Ctrl', 'F'],
    description: '在当前文件中查找',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'android-search-2-linux',
    keys: ['Ctrl', 'R'],
    description: '在当前文件中替换',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'android-search-3-linux',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在项目中查找',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'android-search-4-linux',
    keys: ['Alt', 'F7'],
    description: '查找使用',
    category: '搜索',
    platform: 'linux'
  },

  // 调试操作 - Linux
  {
    id: 'android-debug-1-linux',
    keys: ['Shift', 'F9'],
    description: '调试运行',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'android-debug-2-linux',
    keys: ['Shift', 'F10'],
    description: '正常运行',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'android-debug-3-linux',
    keys: ['Ctrl', 'F8'],
    description: '切换断点',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'android-debug-4-linux',
    keys: ['F9'],
    description: '恢复程序',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'android-debug-5-linux',
    keys: ['F8'],
    description: '单步跳过',
    category: '调试',
    platform: 'linux'
  },
  {
    id: 'android-debug-6-linux',
    keys: ['F7'],
    description: '单步进入',
    category: '调试',
    platform: 'linux'
  }
]