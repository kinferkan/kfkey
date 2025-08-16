import { ToolCategory } from '../types'

// 导入所有快捷键数据
import { vscodeShortcuts } from './shortcuts/vscode-shortcuts'
import { sublimeShortcuts } from './shortcuts/sublime-shortcuts'
import { eclipseShortcuts } from './shortcuts/eclipse-shortcuts'
import { androidStudioShortcuts } from './shortcuts/android-studio-shortcuts'
import { photoshopShortcuts } from './shortcuts/photoshop-shortcuts'
import { figmaShortcuts } from './shortcuts/figma-shortcuts'
import { xcodeShortcuts } from './shortcuts/xcode-shortcuts'
import { hbuilderXShortcuts } from './hbuilderx-shortcuts'
import { webstormShortcuts } from './shortcuts/webstorm-shortcuts'
import { atomShortcuts } from './shortcuts/atom-shortcuts'
import { chromeDevtoolsShortcuts } from './shortcuts/chrome-devtools-shortcuts'
import { firefoxDevtoolsShortcuts } from './shortcuts/firefox-devtools-shortcuts'
import { intellijJavaShortcuts } from './shortcuts/intellij-java-shortcuts'
import { golandShortcuts } from './shortcuts/goland-shortcuts'
import { pycharmShortcuts } from './shortcuts/pycharm-shortcuts'
import { clionShortcuts } from './shortcuts/clion-shortcuts'

// 工具图标映射
export const TOOL_ICONS = {
  vscode: '/icons/vscode.png',
  sublime: '/icons/sublime.png',
  eclipse: '/icons/eclipse.png',
  'android-studio': '/icons/android-studio.svg',
  xcode: '/icons/xcode.png',
  hbuilderx: '/icons/hbuilderx.png',
  photoshop: '/icons/photoshop.png',
  figma: '/icons/figma.png',
  sketch: '/icons/sketch.png',
  illustrator: '/icons/illustrator.png',
  aftereffects: '/icons/aftereffects.png',
  webstorm: '/icons/webstorm.png',
  atom: '/icons/atom.png',
  'chrome-devtools': '/icons/chrome-devtools.png',
  'firefox-devtools': '/icons/firefox-devtools.png',
  vim: '/icons/vim.png',
  emacs: '/icons/emacs.png',
  brackets: '/icons/brackets.png',
  notepadpp: '/icons/notepadpp.png',
  dreamweaver: '/icons/dreamweaver.png',
  codepen: '/icons/codepen.png',
  'intellij-java': '/icons/intellij-java.png',
  goland: '/icons/goland.png',
  pycharm: '/icons/pycharm.png',
  clion: '/icons/clion.png'
} as const

/**
 * 工具注册表
 * 集中管理所有工具的配置信息
 */
export const toolsRegistry: ToolCategory[] = [
  {
    id: 'ide-editors',
    name: 'categories.ide',
    tools: [
      {
        id: 'vscode',
        name: 'Visual Studio Code',
        category: 'categories.ide',
        icon: TOOL_ICONS.vscode,
        shortcuts: vscodeShortcuts,
        popularity: 95,
        lastUpdated: new Date('2024-01-15'),
        description: '微软开发的轻量级代码编辑器，支持多种编程语言和丰富的插件生态系统。'
      },
      {
        id: 'sublime',
        name: 'Sublime Text',
        category: 'categories.ide',
        icon: TOOL_ICONS.sublime,
        shortcuts: sublimeShortcuts,
        popularity: 88,
        lastUpdated: new Date('2024-01-15'),
        description: '高性能的文本编辑器，以其快速响应和强大的多光标编辑功能而闻名。'
      },
      {
        id: 'intellij-java',
        name: 'IntelliJ IDEA',
        category: 'categories.ide',
        icon: TOOL_ICONS['intellij-java'],
        shortcuts: intellijJavaShortcuts,
        popularity: 92,
        lastUpdated: new Date('2024-01-15'),
        description: 'JetBrains开发的Java IDE，提供强大的代码分析、重构和调试功能，是Java开发的首选工具。'
      },
      {
        id: 'eclipse',
        name: 'Eclipse IDE',
        category: 'categories.ide',
        icon: TOOL_ICONS.eclipse,
        shortcuts: eclipseShortcuts,
        popularity: 75,
        lastUpdated: new Date('2024-01-15'),
        description: '开源的集成开发环境，主要用于Java开发，支持多种编程语言。'
      },
      {
        id: 'android-studio',
        name: 'Android Studio',
        category: 'categories.ide',
        icon: TOOL_ICONS['android-studio'],
        shortcuts: androidStudioShortcuts,
        popularity: 85,
        lastUpdated: new Date('2024-01-15'),
        description: 'Google官方的Android应用开发IDE，基于IntelliJ IDEA构建。'
      },
      {
        id: 'xcode',
        name: 'Xcode',
        category: 'categories.ide',
        icon: TOOL_ICONS.xcode,
        shortcuts: xcodeShortcuts,
        popularity: 82,
        lastUpdated: new Date('2024-01-15'),
        description: 'Apple官方的iOS和macOS应用开发IDE，仅在macOS上运行。'
      },
      {
        id: 'hbuilderx',
        name: 'HBuilder X',
        category: 'categories.ide',
        icon: TOOL_ICONS.hbuilderx,
        shortcuts: hbuilderXShortcuts,
        popularity: 75,
        lastUpdated: new Date('2024-01-15'),
        description: 'DCloud开发的专业前端IDE，专为uni-app和5+App开发优化。'
      },
      {
        id: 'webstorm',
        name: 'WebStorm',
        category: 'categories.ide',
        icon: TOOL_ICONS.webstorm,
        shortcuts: webstormShortcuts,
        popularity: 87,
        lastUpdated: new Date('2024-01-15'),
        description: 'JetBrains开发的专业Web前端IDE，为JavaScript和相关技术提供强大支持。'
      },
      {
        id: 'goland',
        name: 'GoLand',
        category: 'categories.ide',
        icon: TOOL_ICONS.goland,
        shortcuts: golandShortcuts,
        popularity: 86,
        lastUpdated: new Date('2024-01-15'),
        description: 'JetBrains开发的Go语言IDE，为Go开发提供智能代码辅助、调试和测试工具。'
      },
      {
        id: 'pycharm',
        name: 'PyCharm',
        category: 'categories.ide',
        icon: TOOL_ICONS.pycharm,
        shortcuts: pycharmShortcuts,
        popularity: 89,
        lastUpdated: new Date('2024-01-15'),
        description: 'JetBrains开发的Python IDE，提供智能代码补全、检查、调试和重构功能。'
      },
      {
        id: 'clion',
        name: 'CLion',
        category: 'categories.ide',
        icon: TOOL_ICONS.clion,
        shortcuts: clionShortcuts,
        popularity: 84,
        lastUpdated: new Date('2024-01-15'),
        description: 'JetBrains开发的C/C++开发环境，提供智能代码辅助和强大的调试功能。'
      },
      {
        id: 'atom',
        name: 'Atom',
        category: 'categories.ide',
        icon: TOOL_ICONS.atom,
        shortcuts: atomShortcuts,
        popularity: 70,
        lastUpdated: new Date('2024-01-15'),
        description: 'GitHub开发的开源文本编辑器，高度可定制，虽已停止更新但仍有大量用户。'
      }
    ]
  },
  {
    id: 'design-tools',
    name: 'categories.design',
    tools: [
      {
        id: 'photoshop',
        name: 'Adobe Photoshop',
        category: 'categories.design',
        icon: TOOL_ICONS.photoshop,
        shortcuts: photoshopShortcuts,
        popularity: 92,
        lastUpdated: new Date('2024-01-15'),
        description: 'Adobe公司的专业图像编辑软件，是数字图像处理的行业标准。'
      },
      {
        id: 'figma',
        name: 'Figma',
        category: 'categories.design',
        icon: TOOL_ICONS.figma,
        shortcuts: figmaShortcuts,
        popularity: 89,
        lastUpdated: new Date('2024-01-15'),
        description: '现代化的协作式UI设计工具，支持实时协作和原型制作。'
      }
    ]
  },
  {
    id: 'browser-tools',
    name: 'categories.browser',
    tools: [
      {
        id: 'chrome-devtools',
        name: 'Chrome DevTools',
        category: 'categories.browser',
        icon: TOOL_ICONS['chrome-devtools'],
        shortcuts: chromeDevtoolsShortcuts,
        popularity: 93,
        lastUpdated: new Date('2024-01-15'),
        description: '谷歌Chrome浏览器内置的开发者工具，用于网页调试和性能分析。'
      },
      {
        id: 'firefox-devtools',
        name: 'Firefox DevTools',
        category: 'categories.browser',
        icon: TOOL_ICONS['firefox-devtools'],
        shortcuts: firefoxDevtoolsShortcuts,
        popularity: 88,
        lastUpdated: new Date('2024-01-15'),
        description: 'Mozilla Firefox浏览器内置的开发者工具，提供强大的网页调试和分析功能。'
      }
    ]
  }
]

/**
 * 工具配置常量
 */
export const TOOL_CONFIG = {
  // 默认图标
  DEFAULT_ICON: 'fas fa-tools',
  
  // 热度等级
  POPULARITY_LEVELS: {
    LOW: { min: 0, max: 60, label: '较低', color: '#ef4444' },
    MEDIUM: { min: 61, max: 80, label: '中等', color: '#f59e0b' },
    HIGH: { min: 81, max: 90, label: '较高', color: '#10b981' },
    VERY_HIGH: { min: 91, max: 100, label: '很高', color: '#3b82f6' }
  },
  
  // 支持的平台
  SUPPORTED_PLATFORMS: ['win', 'mac', 'linux'] as const,
  
  // 平台显示名称
  PLATFORM_NAMES: {
    win: 'Windows',
    mac: 'macOS',
    linux: 'Linux'
  } as const
} as const

/**
 * 获取工具热度等级
 * @param popularity 热度值
 * @returns 热度等级信息
 */
export function getPopularityLevel(popularity: number) {
  const levels = TOOL_CONFIG.POPULARITY_LEVELS
  
  if (popularity >= levels.VERY_HIGH.min) return levels.VERY_HIGH
  if (popularity >= levels.HIGH.min) return levels.HIGH
  if (popularity >= levels.MEDIUM.min) return levels.MEDIUM
  return levels.LOW
}

/**
 * 验证工具数据完整性
 * @param tools 工具数据
 * @returns 验证结果
 */
export function validateToolsData(tools: ToolCategory[]): {
  isValid: boolean
  errors: string[]
} {
  const errors: string[] = []
  
  tools.forEach((category, categoryIndex) => {
    if (!category.name) {
      errors.push(`Category ${categoryIndex}: Missing name`)
    }
    
    if (!Array.isArray(category.tools)) {
      errors.push(`Category ${categoryIndex}: Tools must be an array`)
      return
    }
    
    category.tools.forEach((tool, toolIndex) => {
      if (!tool.id) {
        errors.push(`Category ${categoryIndex}, Tool ${toolIndex}: Missing id`)
      }
      
      if (!tool.name) {
        errors.push(`Category ${categoryIndex}, Tool ${toolIndex}: Missing name`)
      }
      
      if (!Array.isArray(tool.shortcuts)) {
        errors.push(`Category ${categoryIndex}, Tool ${toolIndex}: Shortcuts must be an array`)
      }
      
      if (typeof tool.popularity !== 'number' || tool.popularity < 0 || tool.popularity > 100) {
        errors.push(`Category ${categoryIndex}, Tool ${toolIndex}: Invalid popularity value`)
      }
    })
  })
  
  return {
    isValid: errors.length === 0,
    errors
  }
}