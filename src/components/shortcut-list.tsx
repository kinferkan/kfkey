import { useState } from 'react'
import { Copy, Check, Filter } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Shortcut } from '@/types'
import { useTranslation } from 'react-i18next'
import { i18nTools } from '@/utils/i18n-tools'

interface ShortcutListProps {
  shortcuts: Shortcut[]
  searchQuery: string
}

export function ShortcutList({ shortcuts, searchQuery }: ShortcutListProps) {
  const { t } = useTranslation()
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<'category' | 'description'>('category')

  const copyToClipboard = async (shortcut: Shortcut) => {
    try {
      await navigator.clipboard.writeText(shortcut.keys.join(' + '))
      setCopiedId(shortcut.id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  // 按分类分组快捷键
  const groupedShortcuts = shortcuts.reduce((acc, shortcut) => {
    const category = shortcut.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(shortcut)
    return acc
  }, {} as Record<string, Shortcut[]>)

  // 排序分类
  const sortedCategories = Object.keys(groupedShortcuts).sort()

  // 高亮搜索关键词
  const highlightText = (text: string, query: string) => {
    if (!query) return text
    
    const regex = new RegExp(`(${query})`, 'gi')
    const parts = text.split(regex)
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">
          {part}
        </mark>
      ) : part
    )
  }

  if (shortcuts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          <Filter className="w-12 h-12 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{t('shortcutList.noShortcutsFound')}</h3>
        <p className="text-muted-foreground">
          {t('shortcutList.adjustFilters')}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* 统计信息 */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {t('shortcutList.totalShortcuts', { count: shortcuts.length, categories: sortedCategories.length })}
        </div>
        <Select value={sortBy} onValueChange={(value: 'category' | 'description') => setSortBy(value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="category">{t('shortcutList.byCategory')}</SelectItem>
            <SelectItem value="description">{t('shortcutList.byDescription')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 快捷键列表 */}
      {sortBy === 'category' ? (
        // 按分类显示
        <div className="space-y-6">
          {sortedCategories.map((category) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {i18nTools.getShortcutCategory(t, category)}
                  <Badge variant="secondary">
                    {groupedShortcuts[category].length} {t('shortcutList.items')}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {groupedShortcuts[category].map((shortcut) => (
                    <div
                      key={shortcut.id}
                      className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex-1">
                      <div className="font-medium mb-2">
                        {highlightText(i18nTools.getShortcutDescription(t, shortcut.description), searchQuery)}
                      </div>
                        <div className="flex items-center space-x-2">
                          {shortcut.keys.map((key, index) => (
                            <div key={index} className="flex items-center">
                              <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                {key}
                              </kbd>
                              {index < shortcut.keys.length - 1 && (
                                <span className="mx-1 text-muted-foreground">+</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <Badge variant="outline" className="text-xs">
                          {shortcut.platform === 'all' ? t('shortcutList.allPlatforms') : shortcut.platform.toUpperCase()}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => copyToClipboard(shortcut)}
                          className="h-8 w-8"
                        >
                          {copiedId === shortcut.id ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        // 按描述显示（平铺列表）
        <div className="space-y-3">
          {shortcuts
            .sort((a, b) => a.description.localeCompare(b.description))
            .map((shortcut) => (
              <div
                key={shortcut.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="font-medium mb-2">
                    {highlightText(i18nTools.getShortcutDescription(t, shortcut.description), searchQuery)}
                  </div>
                  <div className="flex items-center space-x-2">
                    {shortcut.keys.map((key, index) => (
                      <div key={index} className="flex items-center">
                        <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                          {key}
                        </kbd>
                        {index < shortcut.keys.length - 1 && (
                          <span className="mx-1 text-muted-foreground">+</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <Badge variant="outline" className="text-xs">
                    {i18nTools.getShortcutCategory(t, shortcut.category)}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {shortcut.platform === 'all' ? t('shortcutList.allPlatforms') : shortcut.platform.toUpperCase()}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(shortcut)}
                    className="h-8 w-8"
                  >
                    {copiedId === shortcut.id ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}