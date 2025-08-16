import { useMemo } from 'react'
import { Search, X, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { toolService } from '@/data/tools'
import { Tool } from '@/types'
import { useTranslation } from 'react-i18next'
import { i18nTools } from '@/utils/i18n-tools'

interface SearchResultsProps {
  query: string
  onToolSelect: (tool: Tool) => void
  onClearSearch: () => void
}

export function SearchResults({ query, onToolSelect, onClearSearch }: SearchResultsProps) {
  const { t } = useTranslation()
  const searchResults = useMemo(() => {
    if (!query.trim()) return { tools: [], shortcuts: [] }
    
  const allTools = toolService.getAllTools()
    const lowerQuery = query.toLowerCase()
    
    // 搜索工具
    const matchedTools = allTools.filter(tool => 
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description?.toLowerCase().includes(lowerQuery) ||
      tool.category.toLowerCase().includes(lowerQuery)
    )
    
    // 搜索快捷键
    const matchedShortcuts: Array<{
      tool: Tool
      shortcut: any
      matchType: 'description' | 'keys'
    }> = []
    
    allTools.forEach(tool => {
      if (tool.shortcuts && Array.isArray(tool.shortcuts)) {
        tool.shortcuts.forEach(shortcut => {
          // 确保shortcut和shortcut.description存在
          if (shortcut && typeof shortcut.description === 'string') {
            const matchesDescription = shortcut.description.toLowerCase().includes(lowerQuery)
            
            // 改进快捷键搜索逻辑
            let matchesKeys = false
            if (Array.isArray(shortcut.keys)) {
              // 1. 检查单个按键是否匹配
              const singleKeyMatch = shortcut.keys.some(key => 
                typeof key === 'string' && key.toLowerCase().includes(lowerQuery)
              )
              
              // 2. 检查组合键是否匹配（支持多种分隔符）
              const keysCombination = shortcut.keys.join(' + ').toLowerCase()
              const keysWithSpace = shortcut.keys.join(' ').toLowerCase()
              const keysWithoutSpace = shortcut.keys.join('').toLowerCase()
              
              const combinationMatch = keysCombination.includes(lowerQuery) ||
                                    keysWithSpace.includes(lowerQuery) ||
                                    keysWithoutSpace.includes(lowerQuery)
              
              matchesKeys = singleKeyMatch || combinationMatch
            }
            
            if (matchesDescription || matchesKeys) {
              matchedShortcuts.push({
                tool,
                shortcut,
                matchType: matchesDescription ? 'description' : 'keys'
              })
            }
          }
        })
      }
    })
    
    return {
      tools: matchedTools,
      shortcuts: matchedShortcuts
    }
  }, [query])

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

  const totalResults = searchResults.tools.length + searchResults.shortcuts.length

  return (
    <div className="p-6 space-y-6">
      {/* 搜索头部 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center space-x-2">
            <Search className="w-8 h-8" />
            <span>{t('searchResults.searchResults')}</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            {t('searchResults.foundResults', { count: totalResults, query })}
          </p>
        </div>
        <Button variant="outline" onClick={onClearSearch}>
          <X className="w-4 h-4 mr-2" />
          {t('searchResults.clearSearch')}
        </Button>
      </div>

      {totalResults === 0 ? (
        // 空状态
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <Search className="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{t('searchResults.noResultsFound')}</h3>
          <p className="text-muted-foreground mb-4">
            {t('searchResults.tryDifferentKeywords')}
          </p>
          <Button variant="outline" onClick={onClearSearch}>
            {t('searchResults.backToBrowse')}
          </Button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* 工具结果 */}
          {searchResults.tools.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-semibold">{t('searchResults.tools')}</h2>
                <Badge variant="secondary">{searchResults.tools.length} 个</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.tools.map((tool) => (
                  <Card 
                    key={tool.id}
                    className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                    onClick={() => onToolSelect(tool)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                          <img src={tool.icon} alt={tool.name} className="w-6 h-6 object-contain" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">
                            {highlightText(tool.name, query)}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs mt-1">
                            {highlightText(tool.category, query)}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-3">
                        {highlightText(i18nTools.getToolDescription(t, tool.id, tool.description || ''), query)}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{tool.shortcuts.length} 个快捷键</span>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>{tool.popularity}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* 分隔线 */}
          {searchResults.tools.length > 0 && searchResults.shortcuts.length > 0 && (
            <Separator />
          )}

          {/* 快捷键结果 */}
          {searchResults.shortcuts.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-semibold">{t('searchResults.shortcuts')}</h2>
                <Badge variant="secondary">{searchResults.shortcuts.length} 个</Badge>
              </div>
              
              <div className="space-y-3">
                {searchResults.shortcuts.map((result, index) => (
                  <Card 
                    key={index}
                    className="cursor-pointer hover:shadow-md transition-all duration-200"
                    onClick={() => onToolSelect(result.tool)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center overflow-hidden">
                              <img src={result.tool.icon} alt={result.tool.name} className="w-4 h-4 object-contain" />
                            </div>
                            <span className="font-medium text-sm text-muted-foreground">
                              {result.tool.name}
                            </span>
                          </div>
                          
                          <div className="font-medium mb-2">
                            {highlightText(i18nTools.getShortcutDescription(t, result.shortcut.description), query)}
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            {result.shortcut.keys.map((key: string, keyIndex: number) => (
                              <div key={keyIndex} className="flex items-center">
                                <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                  {result.matchType === 'keys' ? highlightText(key, query) : key}
                                </kbd>
                                {keyIndex < result.shortcut.keys.length - 1 && (
                                  <span className="mx-1 text-muted-foreground">+</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end space-y-1 ml-4">
                          <Badge variant="outline" className="text-xs">
                            {i18nTools.getShortcutCategory(t, result.shortcut.category)}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {result.shortcut.platform === 'all' ? '全平台' : result.shortcut.platform.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}