import { Shortcut } from '../../types'

export const atomShortcuts: Shortcut[] = [
  // 基本编辑
  {
    id: 'atom-duplicate-line',
    keys: ['Ctrl', 'Shift', 'D'],
    description: '复制当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'atom-duplicate-line-mac',
    keys: ['Cmd', 'Shift', 'D'],
    description: '复制当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'atom-delete-line',
    keys: ['Ctrl', 'Shift', 'K'],
    description: '删除当前行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'atom-delete-line-mac',
    keys: ['Cmd', 'Shift', 'K'],
    description: '删除当前行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'atom-toggle-comment',
    keys: ['Ctrl', '/'],
    description: '注释/取消注释',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'atom-toggle-comment-mac',
    keys: ['Cmd', '/'],
    description: '注释/取消注释',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'atom-indent',
    keys: ['Ctrl', ']'],
    description: '增加缩进',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'atom-indent-mac',
    keys: ['Cmd', ']'],
    description: '增加缩进',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'atom-outdent',
    keys: ['Ctrl', '['],
    description: '减少缩进',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'atom-outdent-mac',
    keys: ['Cmd', '['],
    description: '减少缩进',
    category: '编辑',
    platform: 'mac'
  },
  
  // 查找和替换
  {
    id: 'atom-find',
    keys: ['Ctrl', 'F'],
    description: '在当前文件中查找',
    category: '查找',
    platform: 'win'
  },
  {
    id: 'atom-find-mac',
    keys: ['Cmd', 'F'],
    description: '在当前文件中查找',
    category: '查找',
    platform: 'mac'
  },
  {
    id: 'atom-find-in-project',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在项目中查找',
    category: '查找',
    platform: 'win'
  },
  {
    id: 'atom-find-in-project-mac',
    keys: ['Cmd', 'Shift', 'F'],
    description: '在项目中查找',
    category: '查找',
    platform: 'mac'
  },
  {
    id: 'atom-find-next',
    keys: ['F3'],
    description: '查找下一个',
    category: '查找',
    platform: 'win'
  },
  {
    id: 'atom-find-next-mac',
    keys: ['Cmd', 'G'],
    description: '查找下一个',
    category: '查找',
    platform: 'mac'
  },
  
  // 视图
  {
    id: 'atom-toggle-tree-view',
    keys: ['Ctrl', '\\'],
    description: '切换文件树视图',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'atom-toggle-tree-view-mac',
    keys: ['Cmd', '\\'],
    description: '切换文件树视图',
    category: '视图',
    platform: 'mac'
  },
  {
    id: 'atom-toggle-fullscreen',
    keys: ['F11'],
    description: '切换全屏',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'atom-toggle-fullscreen-mac',
    keys: ['Ctrl', 'Cmd', 'F'],
    description: '切换全屏',
    category: '视图',
    platform: 'mac'
  },
  {
    id: 'atom-increase-font-size',
    keys: ['Ctrl', '+'],
    description: '增大字体',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'atom-increase-font-size-mac',
    keys: ['Cmd', '+'],
    description: '增大字体',
    category: '视图',
    platform: 'mac'
  },
  
  // 多光标编辑
  {
    id: 'atom-multi-cursor-down',
    keys: ['Ctrl', 'Alt', 'Down'],
    description: '向下添加光标',
    category: '多光标',
    platform: 'win'
  },
  {
    id: 'atom-multi-cursor-down-mac',
    keys: ['Cmd', 'Alt', 'Down'],
    description: '向下添加光标',
    category: '多光标',
    platform: 'mac'
  },
  {
    id: 'atom-multi-cursor-up',
    keys: ['Ctrl', 'Alt', 'Up'],
    description: '向上添加光标',
    category: '多光标',
    platform: 'win'
  },
  {
    id: 'atom-multi-cursor-up-mac',
    keys: ['Cmd', 'Alt', 'Up'],
    description: '向上添加光标',
    category: '多光标',
    platform: 'mac'
  }
]