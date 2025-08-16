import { useState, useMemo } from 'react'
import { Heart, Star, Clock, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { toolsData, favoriteService, popularTools } from '@/data/tools'
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

  // popularTools 已经从 '@/data/tools' 导入，无需重新声明

  return (
    <div className="p-6 space-y-6">
      {/* 页面标题和排序 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
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

      {/* 热门工具推荐 */}
      {selectedCategory === 'all' && !showFavorites && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <h2 className="text-xl font-semibold">{t('toolGrid.hotRecommendations')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTools.slice(0, 3).map((tool) => (
              <Card 
                key={tool.id} 
                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-2 border-primary/20"
                onClick={() => onToolSelect(tool)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                    <img src={tool.icon} alt={tool.name} className="w-6 h-6 object-contain" />
                  </div>
                      <div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {t('toolGrid.hot')}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={(e) => handleToggleFavorite(e, tool.id)}
                    >
                      <Heart className={cn(
                        "w-5 h-5 transition-colors",
                        tool.isFavorite 
                          ? "text-red-500 fill-current" 
                          : "text-muted-foreground hover:text-red-500"
                      )} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3">
                    {i18nTools.getToolDescription(t, tool.id, tool.description)}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{t('toolGrid.shortcuts', { count: tool.shortcuts.length })}</span>
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

      {/* 工具网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <Card 
            key={tool.id} 
            className={cn(
              "cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1",
              tool.isFavorite && "ring-2 ring-red-200 dark:ring-red-800"
            )}
            onClick={() => onToolSelect(tool)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                  <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
                </div>
                  <div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <Badge variant="outline" className="text-xs mt-1">
                      {tool.category}
                    </Badge>
                  </div>
                </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={(e) => handleToggleFavorite(e, tool.id)}
                    >
                      <Heart className={cn(
                        "w-5 h-5 transition-colors",
                        tool.isFavorite 
                          ? "text-red-500 fill-current" 
                          : "text-muted-foreground hover:text-red-500"
                      )} />
                    </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 line-clamp-2">
                {i18nTools.getToolDescription(t, tool.id, tool.description)}
              </CardDescription>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{t('toolGrid.shortcuts', { count: tool.shortcuts.length })}</span>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>{tool.popularity}%</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t">
                <div className="text-xs text-muted-foreground">
                  {t('toolGrid.updatedOn', { date: tool.lastUpdated.toLocaleDateString() })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 空状态 */}
      {tools.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <Heart className="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            {showFavorites ? t('toolGrid.noFavoriteTools') : t('toolGrid.noTools')}
          </h3>
          <p className="text-muted-foreground">
            {showFavorites ? t('toolGrid.clickHeartToFavorite') : t('toolGrid.noCategoryTools')}
          </p>
        </div>
      )}
    </div>
  )
}