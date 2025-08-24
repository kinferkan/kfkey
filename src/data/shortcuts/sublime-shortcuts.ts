import { Shortcut } from '../../types'

/**
 * Sublime Text 快捷键数据
 * 支持 Windows、macOS、Linux 三个平台
 */
export const sublimeShortcuts: Shortcut[] = [
  // Windows版本快捷键
  {
    id: 'sublime-1',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '命令面板',
    category: '通用',
    platform: 'win'
  },
  {
    id: 'sublime-2',
    keys: ['Ctrl', 'P'],
    description: '转到任何内容',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'sublime-3',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'sublime-4',
    keys: ['Ctrl', 'R'],
    description: '转到符号',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'sublime-5',
    keys: ['Ctrl', 'Shift', 'R'],
    description: '转到项目中的符号',
    category: '导航',
    platform: 'win'
  },
  {
    id: 'sublime-6',
    keys: ['Ctrl', 'D'],
    description: '选择单词',
    category: '选择',
    platform: 'win'
  },
  {
    id: 'sublime-7',
    keys: ['Ctrl', 'L'],
    description: '选择行',
    category: '选择',
    platform: 'win'
  },
  {
    id: 'sublime-8',
    keys: ['Ctrl', 'Shift', 'L'],
    description: '将选择拆分为行',
    category: '选择',
    platform: 'win'
  },
  {
    id: 'sublime-9',
    keys: ['Ctrl', 'Shift', 'M'],
    description: '选择括号内容',
    category: '选择',
    platform: 'win'
  },
  {
    id: 'sublime-10',
    keys: ['Ctrl', 'M'],
    description: '跳转到匹配的括号',
    category: '导航',
    platform: 'win'
  },

  // macOS版本快捷键
  {
    id: 'sublime-1-mac',
    keys: ['Cmd', 'Shift', 'P'],
    description: '命令面板',
    category: '通用',
    platform: 'mac'
  },
  {
    id: 'sublime-2-mac',
    keys: ['Cmd', 'P'],
    description: '转到任何内容',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'sublime-3-mac',
    keys: ['Ctrl', 'G'],
    description: '转到行',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'sublime-4-mac',
    keys: ['Cmd', 'R'],
    description: '转到符号',
    category: '导航',
    platform: 'mac'
  },
  {
    id: 'sublime-6-mac',
    keys: ['Cmd', 'D'],
    description: '选择单词',
    category: '选择',
    platform: 'mac'
  },
  {
    id: 'sublime-7-mac',
    keys: ['Cmd', 'L'],
    description: '选择行',
    category: '选择',
    platform: 'mac'
  },

  // Linux版本快捷键
  {
    id: 'sublime-1-linux',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '命令面板',
    category: '通用',
    platform: 'linux'
  },
  {
    id: 'sublime-2-linux',
    keys: ['Ctrl', 'P'],
    description: '转到任何内容',
    category: '导航',
    platform: 'linux'
  },
  {
    id: 'sublime-6-linux',
    keys: ['Ctrl', 'D'],
    description: '选择单词',
    category: '选择',
    platform: 'linux'
  },
  
  // 编辑操作
  {
    id: 'sublime-undo',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'sublime-undo-mac',
    keys: ['Cmd', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'sublime-undo-linux',
    keys: ['Ctrl', 'Z'],
    description: '撤销',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'sublime-redo',
    keys: ['Ctrl', 'Y'],
    description: '重做',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'sublime-redo-mac',
    keys: ['Cmd', 'Shift', 'Z'],
    description: '重做',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'sublime-redo-linux',
    keys: ['Ctrl', 'Y'],
    description: '重做',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'sublime-copy',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'sublime-copy-mac',
    keys: ['Cmd', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'sublime-copy-linux',
    keys: ['Ctrl', 'C'],
    description: '复制',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'sublime-cut',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'sublime-cut-mac',
    keys: ['Cmd', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'sublime-cut-linux',
    keys: ['Ctrl', 'X'],
    description: '剪切',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'sublime-paste',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'sublime-paste-mac',
    keys: ['Cmd', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'sublime-paste-linux',
    keys: ['Ctrl', 'V'],
    description: '粘贴',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'sublime-duplicate-line',
    keys: ['Ctrl', 'Shift', 'D'],
    description: '复制行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'sublime-duplicate-line-mac',
    keys: ['Cmd', 'Shift', 'D'],
    description: '复制行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'sublime-duplicate-line-linux',
    keys: ['Ctrl', 'Shift', 'D'],
    description: '复制行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'sublime-delete-line',
    keys: ['Ctrl', 'Shift', 'K'],
    description: '删除行',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'sublime-delete-line-mac',
    keys: ['Ctrl', 'Shift', 'K'],
    description: '删除行',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'sublime-delete-line-linux',
    keys: ['Ctrl', 'Shift', 'K'],
    description: '删除行',
    category: '编辑',
    platform: 'linux'
  },
  {
    id: 'sublime-toggle-comment',
    keys: ['Ctrl', '/'],
    description: '切换注释',
    category: '编辑',
    platform: 'win'
  },
  {
    id: 'sublime-toggle-comment-mac',
    keys: ['Cmd', '/'],
    description: '切换注释',
    category: '编辑',
    platform: 'mac'
  },
  {
    id: 'sublime-toggle-comment-linux',
    keys: ['Ctrl', '/'],
    description: '切换注释',
    category: '编辑',
    platform: 'linux'
  },
  
  // 搜索和替换
  {
    id: 'sublime-find',
    keys: ['Ctrl', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'sublime-find-mac',
    keys: ['Cmd', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'sublime-find-linux',
    keys: ['Ctrl', 'F'],
    description: '查找',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'sublime-replace',
    keys: ['Ctrl', 'H'],
    description: '替换',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'sublime-replace-mac',
    keys: ['Cmd', 'Option', 'F'],
    description: '替换',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'sublime-replace-linux',
    keys: ['Ctrl', 'H'],
    description: '替换',
    category: '搜索',
    platform: 'linux'
  },
  {
    id: 'sublime-find-in-files',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在文件中查找',
    category: '搜索',
    platform: 'win'
  },
  {
    id: 'sublime-find-in-files-mac',
    keys: ['Cmd', 'Shift', 'F'],
    description: '在文件中查找',
    category: '搜索',
    platform: 'mac'
  },
  {
    id: 'sublime-find-in-files-linux',
    keys: ['Ctrl', 'Shift', 'F'],
    description: '在文件中查找',
    category: '搜索',
    platform: 'linux'
  },
  
  // 多光标编辑
  {
    id: 'sublime-select-all-matching',
    keys: ['Alt', 'F3'],
    description: '选择所有匹配项',
    category: '多光标',
    platform: 'win'
  },
  {
    id: 'sublime-select-all-matching-mac',
    keys: ['Ctrl', 'Cmd', 'G'],
    description: '选择所有匹配项',
    category: '多光标',
    platform: 'mac'
  },
  {
    id: 'sublime-select-all-matching-linux',
    keys: ['Alt', 'F3'],
    description: '选择所有匹配项',
    category: '多光标',
    platform: 'linux'
  },
  {
    id: 'sublime-add-cursor-column',
    keys: ['Ctrl', 'Alt', 'Down'],
    description: '向下添加光标',
    category: '多光标',
    platform: 'win'
  },
  {
    id: 'sublime-add-cursor-column-mac',
    keys: ['Ctrl', 'Shift', 'Down'],
    description: '向下添加光标',
    category: '多光标',
    platform: 'mac'
  },
  {
    id: 'sublime-add-cursor-column-linux',
    keys: ['Ctrl', 'Alt', 'Down'],
    description: '向下添加光标',
    category: '多光标',
    platform: 'linux'
  },
  
  // 文件管理
  {
    id: 'sublime-new-file',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'sublime-new-file-mac',
    keys: ['Cmd', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'sublime-new-file-linux',
    keys: ['Ctrl', 'N'],
    description: '新建文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'sublime-open-file',
    keys: ['Ctrl', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'sublime-open-file-mac',
    keys: ['Cmd', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'sublime-open-file-linux',
    keys: ['Ctrl', 'O'],
    description: '打开文件',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'sublime-save',
    keys: ['Ctrl', 'S'],
    description: '保存',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'sublime-save-mac',
    keys: ['Cmd', 'S'],
    description: '保存',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'sublime-save-linux',
    keys: ['Ctrl', 'S'],
    description: '保存',
    category: '文件',
    platform: 'linux'
  },
  {
    id: 'sublime-close-file',
    keys: ['Ctrl', 'W'],
    description: '关闭文件',
    category: '文件',
    platform: 'win'
  },
  {
    id: 'sublime-close-file-mac',
    keys: ['Cmd', 'W'],
    description: '关闭文件',
    category: '文件',
    platform: 'mac'
  },
  {
    id: 'sublime-close-file-linux',
    keys: ['Ctrl', 'W'],
    description: '关闭文件',
    category: '文件',
    platform: 'linux'
  },
  
  // 窗口管理
  {
    id: 'sublime-split-view-2-columns',
    keys: ['Alt', 'Shift', '2'],
    description: '分割视图：2列',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'sublime-split-view-2-columns-mac',
    keys: ['Cmd', 'Option', '2'],
    description: '分割视图：2列',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'sublime-split-view-2-columns-linux',
    keys: ['Alt', 'Shift', '2'],
    description: '分割视图：2列',
    category: '窗口',
    platform: 'linux'
  },
  {
    id: 'sublime-split-view-single',
    keys: ['Alt', 'Shift', '1'],
    description: '单一视图',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'sublime-split-view-single-mac',
    keys: ['Cmd', 'Option', '1'],
    description: '单一视图',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'sublime-split-view-single-linux',
    keys: ['Alt', 'Shift', '1'],
    description: '单一视图',
    category: '窗口',
    platform: 'linux'
  },
  {
    id: 'sublime-focus-group-1',
    keys: ['Ctrl', '1'],
    description: '聚焦组 1',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'sublime-focus-group-1-mac',
    keys: ['Ctrl', '1'],
    description: '聚焦组 1',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'sublime-focus-group-1-linux',
    keys: ['Ctrl', '1'],
    description: '聚焦组 1',
    category: '窗口',
    platform: 'linux'
  },
  {
    id: 'sublime-move-file-to-group-1',
    keys: ['Ctrl', 'Shift', '1'],
    description: '移动文件到组 1',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'sublime-move-file-to-group-1-mac',
    keys: ['Ctrl', 'Shift', '1'],
    description: '移动文件到组 1',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'sublime-move-file-to-group-1-linux',
    keys: ['Ctrl', 'Shift', '1'],
    description: '移动文件到组 1',
    category: '窗口',
    platform: 'linux'
  },
  {
    id: 'sublime-toggle-sidebar',
    keys: ['Ctrl', 'K', 'Ctrl', 'B'],
    description: '切换侧边栏',
    category: '窗口',
    platform: 'win'
  },
  {
    id: 'sublime-toggle-sidebar-mac',
    keys: ['Cmd', 'K', 'Cmd', 'B'],
    description: '切换侧边栏',
    category: '窗口',
    platform: 'mac'
  },
  {
    id: 'sublime-toggle-sidebar-linux',
    keys: ['Ctrl', 'K', 'Ctrl', 'B'],
    description: '切换侧边栏',
    category: '窗口',
    platform: 'linux'
  },
  
  // 代码折叠
  {
    id: 'sublime-fold',
    keys: ['Ctrl', 'Shift', '['],
    description: '折叠代码',
    category: '代码折叠',
    platform: 'win'
  },
  {
    id: 'sublime-fold-mac',
    keys: ['Cmd', 'Option', '['],
    description: '折叠代码',
    category: '代码折叠',
    platform: 'mac'
  },
  {
    id: 'sublime-fold-linux',
    keys: ['Ctrl', 'Shift', '['],
    description: '折叠代码',
    category: '代码折叠',
    platform: 'linux'
  },
  {
    id: 'sublime-unfold',
    keys: ['Ctrl', 'Shift', ']'],
    description: '展开代码',
    category: '代码折叠',
    platform: 'win'
  },
  {
    id: 'sublime-unfold-mac',
    keys: ['Cmd', 'Option', ']'],
    description: '展开代码',
    category: '代码折叠',
    platform: 'mac'
  },
  {
    id: 'sublime-unfold-linux',
    keys: ['Ctrl', 'Shift', ']'],
    description: '展开代码',
    category: '代码折叠',
    platform: 'linux'
  },
  {
    id: 'sublime-fold-all',
    keys: ['Ctrl', 'K', 'Ctrl', '1'],
    description: '折叠全部',
    category: '代码折叠',
    platform: 'win'
  },
  {
    id: 'sublime-fold-all-mac',
    keys: ['Cmd', 'K', 'Cmd', '1'],
    description: '折叠全部',
    category: '代码折叠',
    platform: 'mac'
  },
  {
    id: 'sublime-fold-all-linux',
    keys: ['Ctrl', 'K', 'Ctrl', '1'],
    description: '折叠全部',
    category: '代码折叠',
    platform: 'linux'
  },
  
  // 构建和运行
  {
    id: 'sublime-build',
    keys: ['Ctrl', 'B'],
    description: '构建',
    category: '构建',
    platform: 'win'
  },
  {
    id: 'sublime-build-mac',
    keys: ['Cmd', 'B'],
    description: '构建',
    category: '构建',
    platform: 'mac'
  },
  {
    id: 'sublime-build-linux',
    keys: ['Ctrl', 'B'],
    description: '构建',
    category: '构建',
    platform: 'linux'
  },
  {
    id: 'sublime-build-with',
    keys: ['Ctrl', 'Shift', 'B'],
    description: '选择构建系统',
    category: '构建',
    platform: 'win'
  },
  {
    id: 'sublime-build-with-mac',
    keys: ['Cmd', 'Shift', 'B'],
    description: '选择构建系统',
    category: '构建',
    platform: 'mac'
  },
  {
    id: 'sublime-build-with-linux',
    keys: ['Ctrl', 'Shift', 'B'],
    description: '选择构建系统',
    category: '构建',
    platform: 'linux'
  },
  
  // 书签
  {
    id: 'sublime-toggle-bookmark',
    keys: ['Ctrl', 'F2'],
    description: '切换书签',
    category: '书签',
    platform: 'win'
  },
  {
    id: 'sublime-toggle-bookmark-mac',
    keys: ['Cmd', 'F2'],
    description: '切换书签',
    category: '书签',
    platform: 'mac'
  },
  {
    id: 'sublime-toggle-bookmark-linux',
    keys: ['Ctrl', 'F2'],
    description: '切换书签',
    category: '书签',
    platform: 'linux'
  },
  {
    id: 'sublime-next-bookmark',
    keys: ['F2'],
    description: '下一个书签',
    category: '书签',
    platform: 'win'
  },
  {
    id: 'sublime-next-bookmark-mac',
    keys: ['F2'],
    description: '下一个书签',
    category: '书签',
    platform: 'mac'
  },
  {
    id: 'sublime-next-bookmark-linux',
    keys: ['F2'],
    description: '下一个书签',
    category: '书签',
    platform: 'linux'
  },
  {
    id: 'sublime-prev-bookmark',
    keys: ['Shift', 'F2'],
    description: '上一个书签',
    category: '书签',
    platform: 'win'
  },
  {
    id: 'sublime-prev-bookmark-mac',
    keys: ['Shift', 'F2'],
    description: '上一个书签',
    category: '书签',
    platform: 'mac'
  },
  {
    id: 'sublime-prev-bookmark-linux',
    keys: ['Shift', 'F2'],
    description: '上一个书签',
    category: '书签',
    platform: 'linux'
  },
  
  // 插件和配置
  {
    id: 'sublime-install-package',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '安装包',
    category: '插件',
    platform: 'win'
  },
  {
    id: 'sublime-install-package-mac',
    keys: ['Cmd', 'Shift', 'P'],
    description: '安装包',
    category: '插件',
    platform: 'mac'
  },
  {
    id: 'sublime-install-package-linux',
    keys: ['Ctrl', 'Shift', 'P'],
    description: '安装包',
    category: '插件',
    platform: 'linux'
  },
  {
    id: 'sublime-preferences',
    keys: ['Ctrl', ','],
    description: '首选项',
    category: '设置',
    platform: 'win'
  },
  {
    id: 'sublime-preferences-mac',
    keys: ['Cmd', ','],
    description: '首选项',
    category: '设置',
    platform: 'mac'
  },
  {
    id: 'sublime-preferences-linux',
    keys: ['Ctrl', ','],
    description: '首选项',
    category: '设置',
    platform: 'linux'
  }
]