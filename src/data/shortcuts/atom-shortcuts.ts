import { Shortcut } from '../../types'

export const atomShortcuts: Shortcut[] = [
  // 文件操作
  {
    id: 'atom-new-file',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'atom-new-file-mac',
    keys: ['Cmd', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'atom-open-file',
    keys: ['Ctrl', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'atom-open-file-mac',
    keys: ['Cmd', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'atom-save',
    keys: ['Ctrl', 'S'],
    description: '保存文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'atom-save-mac',
    keys: ['Cmd', 'S'],
    description: '保存文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'atom-save-as',
    keys: ['Ctrl', 'Shift', 'S'],
    description: '另存为',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'atom-save-as-mac',
    keys: ['Cmd', 'Shift', 'S'],
    description: '另存为',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'atom-close-tab',
    keys: ['Ctrl', 'W'],
    description: '关闭标签页',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'atom-close-tab-mac',
    keys: ['Cmd', 'W'],
    description: '关闭标签页',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'atom-reopen-closed-tab',
    keys: ['Ctrl', 'Shift', 'T'],
    description: '重新打开关闭的标签页',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'atom-reopen-closed-tab-mac',
    keys: ['Cmd', 'Shift', 'T'],
    description: '重新打开关闭的标签页',
    category: '文件',
    platform: 'mac'
  },

  // 导航
  {
    id: 'atom-quick-open',
    keys: ['Ctrl', 'P'],
    description: '快速打开文件',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'atom-quick-open-mac',
    keys: ['Cmd', 'P'],
    description: '快速打开文件',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'atom-command-palette',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '命令面板',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'atom-command-palette-mac',
    keys: ['Cmd', 'Shift', 'P'],
    description: '命令面板',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'atom-goto-line',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'atom-goto-line-mac',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'atom-goto-symbol',
    keys: ['Ctrl', 'R'],
    description: '转到符号',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'atom-goto-symbol-mac',
    keys: ['Cmd', 'R'],
    description: '转到符号',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'atom-next-tab',
    keys: ['Ctrl', 'Tab'],
    description: '下一个标签页',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'atom-next-tab-mac',
    keys: ['Cmd', 'Option', 'Right'],
    description: '下一个标签页',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'atom-prev-tab',
    keys: ['Ctrl', 'Shift', 'Tab'],
    description: '上一个标签页',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'atom-prev-tab-mac',
    keys: ['Cmd', 'Option', 'Left'],
    description: '上一个标签页',
    category: '导航',
    platform: 'mac'
  },

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
  {
    id: 'atom-find-previous',
    keys: ['Shift', 'F3'],
    description: '查找上一个',
    category: '查找',
    platform: 'win'
  },
  {
    id: 'atom-find-previous-mac',
    keys: ['Cmd', 'Shift', 'G'],
    description: '查找上一个',
    category: '查找',
    platform: 'mac'
  },
  {
    id: 'atom-replace',
    keys: ['Ctrl', 'H'],
    description: '替换',
    category: '查找',
    platform: 'win'
  },
  {
    id: 'atom-replace-mac',
    keys: ['Cmd', 'Option', 'F'],
    description: '替换',
    category: '查找',
    platform: 'mac'
  },
  {
    id: 'atom-find-buffer',
    keys: ['Ctrl', 'B'],
    description: '在缓冲区中查找',
    category: '查找',
    platform: 'win'
  },
  {
    id: 'atom-find-buffer-mac',
    keys: ['Cmd', 'B'],
    description: '在缓冲区中查找',
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
  {
    id: 'atom-decrease-font-size',
    keys: ['Ctrl', '-'],
    description: '减小字体',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'atom-decrease-font-size-mac',
    keys: ['Cmd', '-'],
    description: '减小字体',
    category: '视图',
    platform: 'mac'
  },
  {
    id: 'atom-reset-font-size',
    keys: ['Ctrl', '0'],
    description: '重置字体大小',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'atom-reset-font-size-mac',
    keys: ['Cmd', '0'],
    description: '重置字体大小',
    category: '视图',
    platform: 'mac'
  },
  {
    id: 'atom-toggle-dev-tools',
    keys: ['Ctrl', 'Shift', 'I'],
    description: '切换开发者工具',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'atom-toggle-dev-tools-mac',
    keys: ['Cmd', 'Option', 'I'],
    description: '切换开发者工具',
    category: '视图',
    platform: 'mac'
  },
  {
    id: 'atom-reload-window',
    keys: ['Ctrl', 'R'],
    description: '重新加载窗口',
    category: '视图',
    platform: 'win'
  },
  {
    id: 'atom-reload-window-mac',
    keys: ['Cmd', 'R'],
    description: '重新加载窗口',
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
  {    id: 'atom-multi-cursor-up-mac',
    keys: ['Cmd', 'Alt', 'Up'],
    description: '向上添加光标',
    category: '多光标',
    platform: 'mac'
  },

  // 选择
  {
    id: 'atom-select-word',
    keys: ['Ctrl', 'D'],
    description: '选择单词',
    category: '选择',
    platform: 'win'
  },
  {
    id: 'atom-select-word-mac',
    keys: ['Cmd', 'D'],
    description: '选择单词',
    category: '选择',
    platform: 'mac'
  },
  {
    id: 'atom-select-line',
    keys: ['Ctrl', 'L'],
    description: '选择整行',
    category: '选择',
    platform: 'win'
  },
  {
    id: 'atom-select-line-mac',
    keys: ['Cmd', 'L'],
    description: '选择整行',
    category: '选择',
    platform: 'mac'
  },
  {
    id: 'atom-select-all',
    keys: ['Ctrl', 'A'],
    description: '全选',
    category: '选择',
    platform: 'win'
  },
  {
    id: 'atom-select-all-mac',
    keys: ['Cmd', 'A'],
    description: '全选',
    category: '选择',
    platform: 'mac'
  },
  {
    id: 'atom-expand-selection',
    keys: ['Alt', 'Up'],
    description: '扩展选择',
    category: '选择',
    platform: 'win'
  },
  {
    id: 'atom-expand-selection-mac',
    keys: ['Ctrl', 'Shift', 'Up'],
    description: '扩展选择',
    category: '选择',
    platform: 'mac'
  },

  // 代码操作
  {
    id: 'atom-auto-indent',
    keys: ['Ctrl', 'Shift', 'I'],
    description: '自动缩进',
    category: '代码',
    platform: 'win'
  },
  {
    id: 'atom-auto-indent-mac',
    keys: ['Cmd', 'Shift', 'I'],
    description: '自动缩进',
    category: '代码',
    platform: 'mac'
  },
  {
    id: 'atom-fold-code',
    keys: ['Ctrl', 'Shift', '['],
    description: '折叠代码',
    category: '代码',
    platform: 'win'
  },
  {
    id: 'atom-fold-code-mac',
    keys: ['Cmd', 'Option', '['],
    description: '折叠代码',
    category: '代码',
    platform: 'mac'
  },
  {
    id: 'atom-unfold-code',
    keys: ['Ctrl', 'Shift', ']'],
    description: '展开代码',
    category: '代码',
    platform: 'win'
  },
  {
    id: 'atom-unfold-code-mac',
    keys: ['Cmd', 'Option', ']'],
    description: '展开代码',
    category: '代码',
    platform: 'mac'
  },
  {
    id: 'atom-move-line-up',
    keys: ['Ctrl', 'Up'],
    description: '向上移动行',
    category: '代码',
    platform: 'win'
  },
  {
    id: 'atom-move-line-up-mac',
    keys: ['Ctrl', 'Cmd', 'Up'],
    description: '向上移动行',
    category: '代码',
    platform: 'mac'
  },
  {
    id: 'atom-move-line-down',
    keys: ['Ctrl', 'Down'],
    description: '向下移动行',
    category: '代码',
    platform: 'win'
  },
  {
    id: 'atom-move-line-down-mac',
    keys: ['Ctrl', 'Cmd', 'Down'],
    description: '向下移动行',
    category: '代码',
    platform: 'mac'
  },

  // 窗口管理
  {
    id: 'atom-split-pane-right',
    keys: ['Ctrl', 'K', 'Right'],
    description: '向右分屏',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'atom-split-pane-right-mac',
    keys: ['Cmd', 'K', 'Right'],
    description: '向右分屏',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'atom-split-pane-down',
    keys: ['Ctrl', 'K', 'Down'],
    description: '向下分屏',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'atom-split-pane-down-mac',
    keys: ['Cmd', 'K', 'Down'],
    description: '向下分屏',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'atom-focus-pane-right',
    keys: ['Ctrl', 'K', 'Ctrl', 'Right'],
    description: '切换到右侧面板',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'atom-focus-pane-right-mac',
    keys: ['Cmd', 'K', 'Cmd', 'Right'],
    description: '切换到右侧面板',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'atom-close-pane',
    keys: ['Ctrl', 'K', 'Ctrl', 'W'],
    description: '关闭面板',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'atom-close-pane-mac',
    keys: ['Cmd', 'K', 'Cmd', 'W'],
    description: '关闭面板',
    category: '窗口',
    platform: 'mac'
  },

  // 版本控制
  {
    id: 'atom-git-toggle',
    keys: ['Ctrl', 'Shift', '9'],
    description: '切换Git面板',
    category: '版本控制',
    platform: 'win'
  },
  {
    id: 'atom-git-toggle-mac',
    keys: ['Cmd', 'Shift', '9'],
    description: '切换Git面板',
    category: '版本控制',
    platform: 'mac'
  },
  {
    id: 'atom-git-stage-file',
    keys: ['Ctrl', 'Shift', 'A'],
    description: '暂存文件',
    category: '版本控制',
    platform: 'win'
  },
  {
    id: 'atom-git-stage-file-mac',
    keys: ['Cmd', 'Shift', 'A'],
    description: '暂存文件',
    category: '版本控制',
    platform: 'mac'
  }
]