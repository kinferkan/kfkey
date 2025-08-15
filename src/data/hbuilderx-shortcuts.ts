import { Shortcut } from '../types'

export const hbuilderXShortcuts: Shortcut[] = [
  // Windows版本快捷键
  // 文件操作
  {
    id: 'hx-1',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'hx-2',
    keys: ['Ctrl', 'Alt', 'N'],
    description: '新建项目',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'hx-3',
    keys: ['Ctrl', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'hx-4',
    keys: ['Ctrl', 'S'],
    description: '保存文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'hx-5',
    keys: ['Ctrl', 'Shift', 'S'],
    description: '另存为',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'hx-6',
    keys: ['Ctrl', 'W'],
    description: '关闭当前文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'hx-7',
    keys: ['Ctrl', 'Shift', 'W'],
    description: '关闭所有文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'hx-8',
    keys: ['Ctrl', 'Shift', 'T'],
    description: '重新打开关闭的文件',
    category: '文件',
    platform: 'win'
  },

  // 导航快捷键
  {
    id: 'hx-9',
    keys: ['Ctrl', 'P'],
    description: '转到文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'hx-10',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '命令面板',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'hx-11',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'hx-12',
    keys: ['Ctrl', 'R'],
    description: '转到符号',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'hx-13',
    keys: ['F12'],
    description: '转到定义',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'hx-14',
    keys: ['Alt', 'F12'],
    description: '查看定义',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'hx-15',
    keys: ['Shift', 'F12'],
    description: '查找引用',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'hx-16',
    keys: ['Alt', 'Left'],
    description: '后退',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'hx-17',
    keys: ['Alt', 'Right'],
    description: '前进',
    category: '导航',
    platform: 'win'
  },

  // 编辑快捷键
  {
    id: 'hx-18',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'hx-19',
    keys: ['Ctrl', 'Y'],
    description: '重做',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'hx-20',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'hx-21',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'hx-22',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'hx-23',
    keys: ['Ctrl', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'hx-24',
    keys: ['Ctrl', 'L'],
    description: '选择行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'hx-25',
    keys: ['Ctrl', 'D'],
    description: '选择相同词',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'hx-26',
    keys: ['Ctrl', 'Shift', 'L'],
    description: '选择所有相同词',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'hx-27',
    keys: ['Ctrl', 'Shift', 'K'],
    description: '删除行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'hx-28',
    keys: ['Ctrl', 'Shift', 'D'],
    description: '复制行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'hx-29',
    keys: ['Ctrl', 'Shift', 'Up'],
    description: '向上移动行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'hx-30',
    keys: ['Ctrl', 'Shift', 'Down'],
    description: '向下移动行',
    category: '编辑',
    platform: 'win'
  },

  // 多光标编辑
  {
    id: 'hx-31',
    keys: ['Ctrl', 'Alt', 'Up'],
    description: '向上添加光标',
    category: '多光标',
    platform: 'win'
  },
  {
    id: 'hx-32',
    keys: ['Ctrl', 'Alt', 'Down'],
    description: '向下添加光标',
    category: '多光标',
    platform: 'win'
  },
  {
    id: 'hx-33',
    keys: ['Alt', 'Click'],
    description: '添加光标',
    category: '多光标',
    platform: 'win'
  },
  {
    id: 'hx-34',
    keys: ['Ctrl', 'U'],
    description: '撤销光标',
    category: '多光标',
    platform: 'win'
  },

  // 搜索和替换
  {
    id: 'hx-35',
    keys: ['Ctrl', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'hx-36',
    keys: ['Ctrl', 'H'],
    description: '替换',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'hx-37',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在文件中查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'hx-38',
    keys: ['Ctrl', 'Shift', 'H'],
    description: '在文件中替换',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'hx-39',
    keys: ['F3'],
    description: '查找下一个',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'hx-40',
    keys: ['Shift', 'F3'],
    description: '查找上一个',
    category: '搜索',
    platform: 'win'
  },

  // 代码格式化和注释
  {
    id: 'hx-41',
    keys: ['Ctrl', 'Alt', 'F'],
    description: '格式化文档',
    category: '格式化',
    platform: 'win'
  },
  {
    id: 'hx-42',
    keys: ['Ctrl', 'K', 'Ctrl', 'F'],
    description: '格式化选择',
    category: '格式化',
    platform: 'win'
  },
  {
    id: 'hx-43',
    keys: ['Ctrl', '/'],
    description: '切换行注释',
    category: '注释',
    platform: 'win'
  },
  {
    id: 'hx-44',
    keys: ['Ctrl', 'Shift', '/'],
    description: '切换块注释',
    category: '注释',
    platform: 'win'
  },

  // 代码折叠
  {
    id: 'hx-45',
    keys: ['Ctrl', 'Shift', '['],
    description: '折叠区域',
    category: '代码折叠',
    platform: 'win'
  },
  {
    id: 'hx-46',
    keys: ['Ctrl', 'Shift', ']'],
    description: '展开区域',
    category: '代码折叠',
    platform: 'win'
  },
  {
    id: 'hx-47',
    keys: ['Ctrl', 'K', 'Ctrl', '0'],
    description: '折叠所有',
    category: '代码折叠',
    platform: 'win'
  },
  {
    id: 'hx-48',
    keys: ['Ctrl', 'K', 'Ctrl', 'J'],
    description: '展开所有',
    category: '代码折叠',
    platform: 'win'
  },

  // uni-app特有功能
  {
    id: 'hx-49',
    keys: ['Ctrl', 'R'],
    description: '运行到手机或模拟器',
    category: 'uni-app',
    platform: 'win'
  },
  {
    id: 'hx-50',
    keys: ['Ctrl', 'Shift', 'R'],
    description: '运行到内置浏览器',
    category: 'uni-app',
    platform: 'win'
  },
  {
    id: 'hx-51',
    keys: ['Ctrl', 'U'],
    description: '发行',
    category: 'uni-app',
    platform: 'win'
  },
  {
    id: 'hx-52',
    keys: ['F5'],
    description: '刷新',
    category: 'uni-app',
    platform: 'win'
  },

  // 代码提示和智能感知
  {
    id: 'hx-53',
    keys: ['Ctrl', 'Space'],
    description: '触发建议',
    category: '智能感知',
    platform: 'win'
  },
  {
    id: 'hx-54',
    keys: ['Ctrl', 'Shift', 'Space'],
    description: '触发参数提示',
    category: '智能感知',
    platform: 'win'
  },
  {
    id: 'hx-55',
    keys: ['Ctrl', 'I'],
    description: '选择建议',
    category: '智能感知',
    platform: 'win'
  },

  // 视图和窗口
  {
    id: 'hx-56',
    keys: ['Ctrl', 'B'],
    description: '切换侧边栏',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'hx-57',
    keys: ['Ctrl', 'Shift', 'E'],
    description: '显示资源管理器',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'hx-58',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '显示搜索',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'hx-59',
    keys: ['Ctrl', 'Shift', 'G'],
    description: '显示源代码管理',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'hx-60',
    keys: ['Ctrl', 'Shift', 'D'],
    description: '显示调试',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'hx-61',
    keys: ['Ctrl', 'Shift', 'X'],
    description: '显示插件',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'hx-62',
    keys: ['F11'],
    description: '切换全屏',
    category: '视图',
    platform: 'win'
  },

  // 终端和控制台
  {
    id: 'hx-63',
    keys: ['Ctrl', 'Shift', '`'],
    description: '新建终端',
    category: '终端',
    platform: 'win'
  },
  {
    id: 'hx-64',
    keys: ['Ctrl', '`'],
    description: '切换终端',
    category: '终端',
    platform: 'win'
  },

  // macOS版本快捷键
  {
    id: 'hx-1-mac',
    keys: ['Cmd', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'hx-2-mac',
    keys: ['Cmd', 'Option', 'N'],
    description: '新建项目',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'hx-3-mac',
    keys: ['Cmd', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'hx-4-mac',
    keys: ['Cmd', 'S'],
    description: '保存文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'hx-5-mac',
    keys: ['Cmd', 'Shift', 'S'],
    description: '另存为',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'hx-6-mac',
    keys: ['Cmd', 'W'],
    description: '关闭当前文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'hx-9-mac',
    keys: ['Cmd', 'P'],
    description: '转到文件',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'hx-10-mac',
    keys: ['Cmd', 'Shift', 'P'],
    description: '命令面板',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'hx-11-mac',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'hx-12-mac',
    keys: ['Cmd', 'R'],
    description: '转到符号',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'hx-18-mac',
    keys: ['Cmd', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'hx-19-mac',
    keys: ['Cmd', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'hx-20-mac',
    keys: ['Cmd', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'hx-21-mac',
    keys: ['Cmd', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'hx-22-mac',
    keys: ['Cmd', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'hx-23-mac',
    keys: ['Cmd', 'A'],
    description: '全选',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'hx-25-mac',
    keys: ['Cmd', 'D'],
    description: '选择相同词',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'hx-31-mac',
    keys: ['Cmd', 'Option', 'Up'],
    description: '向上添加光标',
    category: '多光标',
    platform: 'mac'
  },
  {
    id: 'hx-32-mac',
    keys: ['Cmd', 'Option', 'Down'],
    description: '向下添加光标',
    category: '多光标',
    platform: 'mac'
  },
  {
    id: 'hx-35-mac',
    keys: ['Cmd', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'hx-36-mac',
    keys: ['Cmd', 'Option', 'F'],
    description: '替换',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'hx-37-mac',
    keys: ['Cmd', 'Shift', 'F'],
    description: '在文件中查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'hx-41-mac',
    keys: ['Cmd', 'Option', 'F'],
    description: '格式化文档',
    category: '格式化',
    platform: 'mac'
  },
  {
    id: 'hx-43-mac',
    keys: ['Cmd', '/'],
    description: '切换行注释',
    category: '注释',
    platform: 'mac'
  },
  {
    id: 'hx-49-mac',
    keys: ['Cmd', 'R'],
    description: '运行到手机或模拟器',
    category: 'uni-app',
    platform: 'mac'
  },
  {
    id: 'hx-53-mac',
    keys: ['Ctrl', 'Space'],
    description: '触发建议',
    category: '智能感知',
    platform: 'mac'
  },
  {
    id: 'hx-56-mac',
    keys: ['Cmd', 'B'],
    description: '切换侧边栏',
    category: '视图',
    platform: 'mac'
  },

  // Linux版本快捷键 (与Windows版本相同)
  {
    id: 'hx-1-linux',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'hx-3-linux',
    keys: ['Ctrl', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'hx-4-linux',
    keys: ['Ctrl', 'S'],
    description: '保存文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'hx-6-linux',
    keys: ['Ctrl', 'W'],
    description: '关闭当前文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'hx-9-linux',
    keys: ['Ctrl', 'P'],
    description: '转到文件',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'hx-10-linux',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '命令面板',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'hx-11-linux',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'hx-18-linux',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'hx-19-linux',
    keys: ['Ctrl', 'Y'],
    description: '重做',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'hx-21-linux',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'hx-22-linux',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'hx-25-linux',
    keys: ['Ctrl', 'D'],
    description: '选择相同词',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'hx-27-linux',
    keys: ['Ctrl', 'Shift', 'K'],
    description: '删除行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'hx-28-linux',
    keys: ['Ctrl', 'Shift', 'D'],
    description: '复制行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'hx-35-linux',
    keys: ['Ctrl', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'hx-36-linux',
    keys: ['Ctrl', 'H'],
    description: '替换',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'hx-37-linux',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在文件中查找',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'hx-41-linux',
    keys: ['Ctrl', 'Alt', 'F'],
    description: '格式化文档',
    category: '格式化',
    platform: 'linux'
  },
  {
    id: 'hx-43-linux',
    keys: ['Ctrl', '/'],
    description: '切换行注释',
    category: '注释',
    platform: 'linux'
  },
  {
    id: 'hx-49-linux',
    keys: ['Ctrl', 'R'],
    description: '运行到手机或模拟器',
    category: 'uni-app',
    platform: 'linux'
  },
  {
    id: 'hx-53-linux',
    keys: ['Ctrl', 'Space'],
    description: '触发建议',
    category: '智能感知',
    platform: 'linux'
  }
]