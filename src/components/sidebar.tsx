import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Code, Palette, Terminal, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { toolsData, favoriteService } from '@/data/tools'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import { ToolCategory } from '@/types'

interface SidebarProps {
  selectedCategory: string
  onCategorySelect: (category: string) => void
  showFavorites: boolean
  onToggleFavorites: (show: boolean) => void
  onToolSelect?: (toolId: string) => void
  currentToolId?: string
}

const categoryIcons = {
  'ide-editors': Code,
  'design-tools': Palette,
  'browser-tools': Terminal,
}

export function Sidebar({ selectedCategory, onCategorySelect, showFavorites, onToggleFavorites, onToolSelect, currentToolId }: SidebarProps) {
  const { t } = useTranslation()
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['ide'])
  const favoriteTools = favoriteService.getFavoriteTools()

  // 当currentToolId变化时，自动展开对应的分类
  useEffect(() => {
    if (currentToolId) {
      const toolCategory = toolsData.find((category: ToolCategory) => 
        category.tools.some(tool => tool.id === currentToolId)
      )
      
      if (toolCategory && !expandedCategories.includes(toolCategory.id)) {
        setExpandedCategories(prev => [...prev, toolCategory.id])
      }
    }
  }, [currentToolId])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg mb-3">{t('navigation.categories')}</h2>
        
        {/* 收藏夹 */}
        <Button
          variant={showFavorites ? "default" : "ghost"}
          className="w-full justify-start mb-2"
          onClick={() => onToggleFavorites(!showFavorites)}
        >
          <Heart className={`mr-2 h-4 w-4 ${showFavorites ? 'fill-current' : ''}`} />
          {t('common.favorites')}
          <Badge variant="secondary" className="ml-auto">
            {favoriteTools.length}
          </Badge>
        </Button>
      </div>

      <ScrollArea className="flex-1 px-4">
        <div className="space-y-2 py-4">
          {toolsData.map((category: ToolCategory) => {
            const Icon = categoryIcons[category.id as keyof typeof categoryIcons] || Code
            const isExpanded = expandedCategories.includes(category.id)
            const isSelected = selectedCategory === category.id

            return (
              <div key={category.id} className="space-y-1">
                <Button
                  variant={isSelected && !showFavorites ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    onCategorySelect(category.id)
                    onToggleFavorites(false)
                    if (!isExpanded) {
                      toggleCategory(category.id)
                    }
                  }}
                >
                  {isExpanded ? (
                    <ChevronDown className="mr-2 h-4 w-4" />
                  ) : (
                    <ChevronRight className="mr-2 h-4 w-4" />
                  )}
                  <Icon className="mr-2 h-4 w-4" />
                  {t(category.name)} {/* 确保分类名称正确显示 */}
                  <Badge variant="secondary" className="ml-auto">
                    {category.tools.length}
                  </Badge>
                </Button>

                {isExpanded && (
                  <div className="ml-6 space-y-1">
                    {category.tools.map((tool) => (
                      <Button
                        key={tool.id}
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "w-full justify-start text-sm",
                          currentToolId === tool.id && "bg-accent text-accent-foreground",
                          tool.isFavorite && "text-red-500"
                        )}
                        onClick={() => onToolSelect?.(tool.id)}
                      >
                        <div className="w-4 h-4 rounded bg-muted mr-2" />
                        {tool.name}
                        {tool.isFavorite && (
                          <Heart className="ml-auto h-3 w-3 fill-current" />
                        )}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}