import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Shortcut, Platform } from '@/types'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

interface KeyboardHeatmapProps {
  shortcuts: Shortcut[]
  platform: Platform
}

// Windows键盘布局定义（使用国际化键名）
const windowsKeyboardLayout = [
  ['esc', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12'],
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter'],
  ['shift-l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift-r'],
  ['ctrl-l', 'win-l', 'alt-l', 'space', 'alt-r', 'win-r', 'menu', 'ctrl-r']
]

// macOS键盘布局定义（使用国际化键名）
const macKeyboardLayout = [
  ['esc', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12'],
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'return'],
  ['shift-l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift-r'],
  ['fn', 'ctrl-l', 'option-l', 'cmd-l', 'space', 'cmd-r', 'option-r', 'ctrl-r']
]

// 获取对应平台的键盘布局
const getKeyboardLayout = (platform: Platform) => {
  if (platform === 'mac') {
    return macKeyboardLayout
  }
  return windowsKeyboardLayout
}

export function KeyboardHeatmap({ shortcuts, platform }: KeyboardHeatmapProps) {
  const { t } = useTranslation()
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)

  // 获取当前平台的键盘布局
  const keyboardLayout = getKeyboardLayout(platform)

  // 计算每个按键的使用频率
  const keyFrequency = useMemo(() => {
    const frequency: Record<string, number> = {}
    
    shortcuts.forEach(shortcut => {
      if (platform !== 'all' && shortcut.platform !== 'all' && shortcut.platform !== platform) {
        return
      }
      
      shortcut.keys.forEach(key => {
        const normalizedKey = key.toLowerCase()
        
        // 将快捷键中的按键映射到键盘布局中的按键
        if (platform === 'mac') {
          // macOS按键映射
          if (normalizedKey.includes('cmd') || normalizedKey.includes('command') || normalizedKey.includes('⌘')) {
            frequency['cmd-l'] = (frequency['cmd-l'] || 0) + 1
            frequency['cmd-r'] = (frequency['cmd-r'] || 0) + 1
          }
          if (normalizedKey.includes('option') || normalizedKey.includes('opt') || normalizedKey.includes('alt') || normalizedKey.includes('⌥')) {
            frequency['option-l'] = (frequency['option-l'] || 0) + 1
            frequency['option-r'] = (frequency['option-r'] || 0) + 1
          }
          if (normalizedKey.includes('ctrl') || normalizedKey.includes('control') || normalizedKey.includes('^')) {
            frequency['ctrl-l'] = (frequency['ctrl-l'] || 0) + 1
            frequency['ctrl-r'] = (frequency['ctrl-r'] || 0) + 1
          }
          if (normalizedKey.includes('shift') || normalizedKey.includes('⇧')) {
            frequency['shift-l'] = (frequency['shift-l'] || 0) + 1
            frequency['shift-r'] = (frequency['shift-r'] || 0) + 1
          }
          if (normalizedKey.includes('delete') || normalizedKey.includes('backspace')) {
            frequency['delete'] = (frequency['delete'] || 0) + 1
          }
          if (normalizedKey.includes('return') || normalizedKey.includes('enter')) {
            frequency['return'] = (frequency['return'] || 0) + 1
          }
        } else {
          // Windows/Linux按键映射
          if (normalizedKey.includes('ctrl') || normalizedKey.includes('control')) {
            frequency['ctrl-l'] = (frequency['ctrl-l'] || 0) + 1
            frequency['ctrl-r'] = (frequency['ctrl-r'] || 0) + 1
          }
          if (normalizedKey.includes('alt')) {
            frequency['alt-l'] = (frequency['alt-l'] || 0) + 1
            frequency['alt-r'] = (frequency['alt-r'] || 0) + 1
          }
          if (normalizedKey.includes('shift')) {
            frequency['shift-l'] = (frequency['shift-l'] || 0) + 1
            frequency['shift-r'] = (frequency['shift-r'] || 0) + 1
          }
          if (normalizedKey.includes('win') || normalizedKey.includes('windows') || normalizedKey.includes('meta')) {
            frequency['win-l'] = (frequency['win-l'] || 0) + 1
            frequency['win-r'] = (frequency['win-r'] || 0) + 1
          }
          if (normalizedKey.includes('backspace')) {
            frequency['backspace'] = (frequency['backspace'] || 0) + 1
          }
          if (normalizedKey.includes('enter') || normalizedKey.includes('return')) {
            frequency['enter'] = (frequency['enter'] || 0) + 1
          }
        }
        
        // 处理字母和数字键
        const singleKey = normalizedKey.replace(/.*\+/, '').trim()
        if (singleKey.length === 1 && /[a-z0-9]/.test(singleKey)) {
          frequency[singleKey] = (frequency[singleKey] || 0) + 1
        }
        
        // 处理功能键
        if (singleKey.startsWith('f') && /^f\d+$/.test(singleKey)) {
          frequency[singleKey] = (frequency[singleKey] || 0) + 1
        }
        
        // 处理特殊键
        const specialKeys = ['space', 'tab', 'esc', 'caps', 'fn']
        if (specialKeys.includes(singleKey)) {
          frequency[singleKey] = (frequency[singleKey] || 0) + 1
        }
      })
    })
    
    return frequency
  }, [shortcuts, platform])

  // 获取与特定按键相关的快捷键
  const getShortcutsForKey = (key: string) => {
    // 处理带后缀的按键名称（如 Shift-L -> Shift, Cmd-L -> Cmd）
    const normalizedKey = key.replace(/-[LR]$/, '')
    
    // macOS按键映射 - 更完整的映射关系
    const macKeyMap: Record<string, string[]> = {
      'cmd': ['cmd', 'command', '⌘'],
      'option': ['option', 'opt', 'alt', '⌥'],
      'ctrl': ['ctrl', 'control', '^'],
      'shift': ['shift', '⇧'],
      'delete': ['delete', 'backspace'],
      'return': ['return', 'enter'],
      'fn': ['fn', 'function'],
      'space': ['space', ' '],
      'tab': ['tab'],
      'esc': ['esc', 'escape'],
      'caps': ['caps', 'capslock']
    }
    
    // Windows按键映射
    const winKeyMap: Record<string, string[]> = {
      'ctrl': ['ctrl', 'control'],
      'alt': ['alt'],
      'shift': ['shift'],
      'win': ['win', 'windows', 'meta'],
      'backspace': ['backspace'],
      'enter': ['enter', 'return'],
      'space': ['space', ' '],
      'tab': ['tab'],
      'esc': ['esc', 'escape'],
      'caps': ['caps', 'capslock']
    }
    
    return shortcuts.filter(shortcut => {
      if (platform !== 'all' && shortcut.platform !== 'all' && shortcut.platform !== platform) {
        return false
      }
      return shortcut.keys.some(k => {
        const shortcutKey = k.toLowerCase()
        const searchKey = normalizedKey.toLowerCase()
        
        // 直接匹配
        if (shortcutKey === searchKey || shortcutKey === key.toLowerCase()) {
          return true
        }
        
        // 平台特定按键别名匹配
        const keyMap = platform === 'mac' ? macKeyMap : winKeyMap
        const aliases = keyMap[searchKey] || []
        return aliases.some(alias => shortcutKey === alias || shortcutKey.includes(alias))
      })
    })
  }

  // 获取按键的热度等级
  const getHeatLevel = (key: string) => {
    const freq = keyFrequency[key.toLowerCase()] || 0
    const maxFreq = Math.max(...Object.values(keyFrequency))
    
    if (freq === 0) return 0
    if (freq === maxFreq) return 4
    if (freq >= maxFreq * 0.7) return 3
    if (freq >= maxFreq * 0.4) return 2
    return 1
  }

  // 获取按键样式
  const getKeyStyle = (key: string) => {
    const heatLevel = getHeatLevel(key)
    const isSelected = selectedKey === key
    const isHovered = hoveredKey === key
    
    let baseClasses = "relative flex items-center justify-center text-xs font-medium rounded-md border transition-all duration-200 cursor-pointer select-none"
    
    // 热度颜色
    if (heatLevel === 0) {
      baseClasses += " bg-muted text-muted-foreground border-border"
    } else if (heatLevel === 1) {
      baseClasses += " bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
    } else if (heatLevel === 2) {
      baseClasses += " bg-blue-200 text-blue-900 border-blue-300 dark:bg-blue-800/40 dark:text-blue-200 dark:border-blue-700"
    } else if (heatLevel === 3) {
      baseClasses += " bg-blue-400 text-white border-blue-500 dark:bg-blue-600 dark:border-blue-500"
    } else {
      baseClasses += " bg-blue-600 text-white border-blue-700 dark:bg-blue-500 dark:border-blue-400"
    }
    
    // 选中和悬浮状态
    if (isSelected) {
      baseClasses += " ring-2 ring-primary ring-offset-2 scale-105"
    } else if (isHovered) {
      baseClasses += " scale-105 shadow-lg"
    }
    
    return baseClasses
  }

  // 获取按键尺寸
  const getKeySize = (key: string) => {
    const normalizedKey = key.replace(/-[lr]$/, '').toLowerCase();
    switch (normalizedKey) {
      case 'backspace':
      case 'delete':
      case 'enter':
      case 'return':
      case 'shift':
        return 'h-10 px-4 min-w-16'
      case 'tab':
      case 'caps':
        return 'h-10 px-3 min-w-14'
      case 'space':
        return 'h-10 px-8 min-w-32'
      case 'ctrl':
      case 'alt':
      case 'win':
      case 'option':
      case 'cmd':
        return 'h-10 px-2 min-w-12'
      case 'fn':
        return 'h-10 px-1 min-w-8'
      default:
        return 'h-10 w-10'
    }
  }

  const relatedShortcuts = selectedKey ? getShortcutsForKey(selectedKey) : []

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* 键盘 */}
        <div className="bg-muted/30 p-6 rounded-lg">
          <div className="space-y-2">
            {keyboardLayout.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-1">
                {row.map((key) => {
                  const keyShortcuts = getShortcutsForKey(key)
                  const heatLevel = getHeatLevel(key)
                  // 获取显示的按键文本
                  const displayKey = t(`heatmap.keys.${key.toLowerCase()}`, key);
                  
                  return (
                    <Tooltip key={key}>
                      <TooltipTrigger
                        className={cn(getKeyStyle(key), getKeySize(key))}
                        onClick={() => setSelectedKey(selectedKey === key ? null : key)}
                        onMouseEnter={() => setHoveredKey(key)}
                        onMouseLeave={() => setHoveredKey(null)}
                      >
                        {displayKey}
                        {heatLevel > 0 && (
                          <Badge 
                            variant="secondary" 
                            className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs rounded-full"
                          >
                            {keyFrequency[key.toLowerCase()]}
                          </Badge>
                        )}
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="text-sm">
                          <div className="font-medium">{displayKey}</div>
                          {keyShortcuts.length > 0 ? (
                            <div className="mt-1">
                              {keyShortcuts.slice(0, 3).map((shortcut, index) => (
                                <div key={index} className="text-xs text-muted-foreground">
                                  {shortcut.keys.join(' + ')}: {shortcut.description}
                                </div>
                              ))}
                              {keyShortcuts.length > 3 && (
                                <div className="text-xs text-muted-foreground">
                                  {t('keyboardHeatmap.moreShortcuts', { count: keyShortcuts.length - 3 })}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="text-xs text-muted-foreground mt-1">
                              {t('keyboardHeatmap.noShortcuts')}
                            </div>
                          )}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* 热度图例 */}
        <div className="flex items-center justify-center space-x-4 text-sm">
          <span className="text-muted-foreground">{t('keyboardHeatmap.usageFrequency')}:</span>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-muted border"></div>
            <span>{t('keyboardHeatmap.none')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-blue-100 dark:bg-blue-900/30 border"></div>
            <span>{t('keyboardHeatmap.low')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-blue-200 dark:bg-blue-800/40 border"></div>
            <span>{t('keyboardHeatmap.medium')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-blue-400 dark:bg-blue-600 border"></div>
            <span>{t('keyboardHeatmap.high')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-blue-600 dark:bg-blue-500 border"></div>
            <span>{t('keyboardHeatmap.veryHigh')}</span>
          </div>
        </div>

        {/* 选中按键的相关快捷键 */}
        {selectedKey && relatedShortcuts.length > 0 && (
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">{t(`heatmap.keys.${selectedKey.toLowerCase()}`, selectedKey)}</Badge>
                <span className="font-medium">{t('keyboardHeatmap.relatedShortcuts')}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {relatedShortcuts.map((shortcut) => (
                  <div key={shortcut.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <div className="font-medium">{shortcut.description}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {shortcut.keys.join(' + ')}
                      </div>
                    </div>
                    <Badge variant="secondary">{shortcut.category}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </TooltipProvider>
  )
}