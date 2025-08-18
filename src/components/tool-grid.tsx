import { useState, useMemo } from 'react'
import { Heart, Clock, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { toolsData, favoriteService } from '@/data/tools'
import { Tool } from '@/types'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import { i18nTools } from '@/utils/i18n-tools'

interface ToolGridProps {
  selectedCategory: string
  showFavorites: boolean
  onToolSelect: (tool: Tool) => void
  onFavoriteChange?: () => void
}

export function ToolGrid({ selectedCategory, showFavorites, onToolSelect, onFavoriteChange }: ToolGridProps) {
  const { t } = useTranslation()
  const [sortBy, setSortBy] = useState<'name' | 'popularity' | 'updated'>('popularity')
  const [refreshKey, setRefreshKey] = useState(0)

  const handleToggleFavorite = (e: React.MouseEvent, toolId: string) => {
    e.stopPropagation() // 阻止事件冒泡，避免触发工具选择
    favoriteService.toggleFavorite(toolId)
    setRefreshKey(prev => prev + 1) // 强制重新渲染
    onFavoriteChange?.() // 通知父组件收藏状态已变化
  }


  const tools = useMemo(() => {
    let filteredTools: Tool[] = []

    if (showFavorites) {
      filteredTools = favoriteService.getFavoriteTools()
    } else if (selectedCategory === 'all') {
      filteredTools = toolsData.flatMap(category => category.tools)
    } else {
      const category = toolsData.find(cat => cat.id === selectedCategory)
      filteredTools = category ? category.tools : []
    }

    // 排序
    return filteredTools.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'popularity':
          return b.popularity - a.popularity
        case 'updated':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
        default:
          return 0
      }
    })
  }, [selectedCategory, showFavorites, sortBy, refreshKey])

  return (
    <div className="space-y-6">
      {/* 工具筛选和排序 */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            {showFavorites ? t('toolGrid.myFavorites') : selectedCategory === 'all' ? t('toolGrid.allTools') : 
             toolsData.find(cat => cat.id === selectedCategory)?.name || t('toolGrid.tools')}
          </h1>
          <p className="text-muted-foreground mt-1">
            {t('toolGrid.foundTools', { count: tools.length })}
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={sortBy === 'popularity' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSortBy('popularity')}
          >
            <TrendingUp className="w-4 h-4 mr-1" />
            {t('toolGrid.popularity')}
          </Button>
          <Button
            variant={sortBy === 'name' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSortBy('name')}
          >
            {t('toolGrid.name')}
          </Button>
          <Button
            variant={sortBy === 'updated' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSortBy('updated')}
          >
            <Clock className="w-4 h-4 mr-1" />
            {t('toolGrid.updated')}
          </Button>
        </div>
      </div>

      {/* 工具网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(tool => (
          <Card 
            key={tool.id} 
            className="cursor-pointer hover:shadow-md transition-all group"
            onClick={() => onToolSelect(tool)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                    <img src={tool.icon} alt={tool.name} className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {tool.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {i18nTools.getToolDescription(t, tool.id, tool.description)}
                    </CardDescription>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={(e) => handleToggleFavorite(e, tool.id)}
                >
                  <Heart className={`h-4 w-4 ${favoriteService.isFavorite(tool.id) ? 'fill-current text-red-500' : ''}`} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {t('toolGrid.shortcuts', { count: tool.shortcuts.length })}
                </Badge>
                <div className="text-xs text-muted-foreground">
                  {t('toolGrid.popularityScore', { score: tool.popularity })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}