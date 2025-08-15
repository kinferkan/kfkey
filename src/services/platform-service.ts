import { Shortcut } from '../types'

/**
 * 平台类型
 */
export type Platform = 'win' | 'mac' | 'linux'

/**
 * 平台信息接口
 */
export interface PlatformInfo {
  platform: Platform
  name: string
  icon: string
  keySymbols: Record<string, string>
}

/**
 * 平台服务类
 * 负责检测用户操作系统并提供平台相关的功能
 */
export class PlatformService {
  private static instance: PlatformService
  private currentPlatform: Platform
  private platformInfo: Record<Platform, PlatformInfo>

  private constructor() {
    this.platformInfo = {
      win: {
        platform: 'win',
        name: 'Windows',
        icon: '🪟',
        keySymbols: {
          'Ctrl': 'Ctrl',
          'Alt': 'Alt',
          'Shift': 'Shift',
          'Win': '⊞',
          'Enter': '↵',
          'Tab': '⇥',
          'Esc': 'Esc',
          'Space': '␣',
          'Backspace': '⌫',
          'Delete': 'Del'
        }
      },
      mac: {
        platform: 'mac',
        name: 'macOS',
        icon: '🍎',
        keySymbols: {
          'Cmd': '⌘',
          'Option': '⌥',
          'Shift': '⇧',
          'Ctrl': '⌃',
          'Enter': '↵',
          'Tab': '⇥',
          'Esc': '⎋',
          'Space': '␣',
          'Backspace': '⌫',
          'Delete': '⌦'
        }
      },
      linux: {
        platform: 'linux',
        name: 'Linux',
        icon: '🐧',
        keySymbols: {
          'Ctrl': 'Ctrl',
          'Alt': 'Alt',
          'Shift': 'Shift',
          'Super': '⊞',
          'Enter': '↵',
          'Tab': '⇥',
          'Esc': 'Esc',
          'Space': '␣',
          'Backspace': '⌫',
          'Delete': 'Del'
        }
      }
    }

    this.currentPlatform = this.detectPlatform()
  }

  /**
   * 获取单例实例
   */
  public static getInstance(): PlatformService {
    if (!PlatformService.instance) {
      PlatformService.instance = new PlatformService()
    }
    return PlatformService.instance
  }

  /**
   * 检测当前操作系统平台
   * @returns 平台类型
   */
  private detectPlatform(): Platform {
    if (typeof window === 'undefined') return 'win' // SSR 默认

    const userAgent = window.navigator.userAgent.toLowerCase()
    const platform = window.navigator.platform?.toLowerCase() || ''

    // 检测 macOS
    if (
      userAgent.includes('mac') ||
      platform.includes('mac') ||
      userAgent.includes('darwin')
    ) {
      return 'mac'
    }

    // 检测 Linux
    if (
      userAgent.includes('linux') ||
      platform.includes('linux') ||
      userAgent.includes('x11')
    ) {
      return 'linux'
    }

    // 默认为 Windows
    return 'win'
  }

  /**
   * 获取当前平台
   * @returns 当前平台类型
   */
  public getCurrentPlatform(): Platform {
    return this.currentPlatform
  }

  /**
   * 设置当前平台（用于用户手动切换）
   * @param platform 平台类型
   */
  public setCurrentPlatform(platform: Platform): void {
    this.currentPlatform = platform
    
    // 保存到本地存储
    try {
      localStorage.setItem('keyflow_selected_platform', platform)
    } catch (error) {
      console.warn('Failed to save platform preference:', error)
    }

    // 触发平台切换事件
    window.dispatchEvent(new CustomEvent('platformChanged', { 
      detail: { platform } 
    }))
  }

  /**
   * 从本地存储恢复平台设置
   */
  public restorePlatformPreference(): void {
    try {
      const savedPlatform = localStorage.getItem('keyflow_selected_platform') as Platform
      if (savedPlatform && this.platformInfo[savedPlatform]) {
        this.currentPlatform = savedPlatform
      }
    } catch (error) {
      console.warn('Failed to restore platform preference:', error)
    }
  }

  /**
   * 获取平台信息
   * @param platform 平台类型，默认为当前平台
   * @returns 平台信息
   */
  public getPlatformInfo(platform?: Platform): PlatformInfo {
    return this.platformInfo[platform || this.currentPlatform]
  }

  /**
   * 获取所有支持的平台
   * @returns 平台信息数组
   */
  public getAllPlatforms(): PlatformInfo[] {
    return Object.values(this.platformInfo)
  }

  /**
   * 格式化快捷键显示
   * @param keys 按键数组
   * @param platform 平台类型，默认为当前平台
   * @returns 格式化后的按键字符串
   */
  public formatShortcutKeys(keys: string[], platform?: Platform): string {
    const platformInfo = this.getPlatformInfo(platform)
    
    return keys.map(key => {
      return platformInfo.keySymbols[key] || key
    }).join(' + ')
  }

  /**
   * 过滤当前平台的快捷键
   * @param shortcuts 快捷键数组
   * @param platform 平台类型，默认为当前平台
   * @returns 过滤后的快捷键数组
   */
  public filterShortcutsByPlatform(
    shortcuts: Shortcut[], 
    platform?: Platform
  ): Shortcut[] {
    const targetPlatform = platform || this.currentPlatform
    return shortcuts.filter(shortcut => shortcut.platform === targetPlatform)
  }

  /**
   * 检查是否为特定平台专用工具
   * @param toolId 工具ID
   * @returns 是否为平台专用
   */
  public isPlatformSpecificTool(toolId: string): boolean {
    // Xcode 只在 macOS 上运行
    if (toolId === 'xcode') {
      return true
    }

    // 可以添加更多平台专用工具的判断
    return false
  }

  /**
   * 获取工具的推荐平台
   * @param toolId 工具ID
   * @returns 推荐的平台，如果没有特殊要求则返回 null
   */
  public getRecommendedPlatform(toolId: string): Platform | null {
    switch (toolId) {
      case 'xcode':
        return 'mac'
      default:
        return null
    }
  }

  /**
   * 检查工具是否在当前平台可用
   * @param toolId 工具ID
   * @returns 是否可用
   */
  public isToolAvailableOnCurrentPlatform(toolId: string): boolean {
    const recommendedPlatform = this.getRecommendedPlatform(toolId)
    
    if (!recommendedPlatform) {
      return true // 跨平台工具
    }
    
    return recommendedPlatform === this.currentPlatform
  }

  /**
   * 获取平台切换提示信息
   * @param toolId 工具ID
   * @returns 提示信息，如果不需要提示则返回 null
   */
  public getPlatformSwitchHint(toolId: string): string | null {
    const recommendedPlatform = this.getRecommendedPlatform(toolId)
    
    if (!recommendedPlatform || recommendedPlatform === this.currentPlatform) {
      return null
    }

    const platformInfo = this.getPlatformInfo(recommendedPlatform)
    return `此工具仅在 ${platformInfo.name} 上可用，建议切换到 ${platformInfo.name} 平台查看快捷键。`
  }
}

// 导出单例实例
export const platformService = PlatformService.getInstance()

// 在应用启动时恢复平台偏好设置
if (typeof window !== 'undefined') {
  platformService.restorePlatformPreference()
}