import { useState, useEffect } from 'react'
import { Search, Menu, Heart, Settings, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTheme } from '@/components/theme-provider'
import { Sidebar } from '@/components/sidebar'
import { ToolGrid } from '@/components/tool-grid'
import { ToolDetail } from '@/components/tool-detail'
import { SearchResults } from '@/components/search-results'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tool } from '@/types'
import { useTranslation } from 'react-i18next'

export function MainLayout() {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showFavorites, setShowFavorites] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const [showSettings, setShowSettings] = useState(false)

  // 强制刷新函数，用于收藏状态变化时更新所有组件
  const forceRefresh = () => {
    setRefreshKey(prev => prev + 1)
  }

  const handleToolSelect = (tool: Tool) => {
    setSelectedTool(tool)
  }

  const handleBackToGrid = () => {
    setSelectedTool(null)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setSelectedTool(null)
  }
  
  // 添加键盘快捷键监听
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 检测 Ctrl+K 组合键
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault() // 阻止默认行为
        
        // 聚焦搜索框
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement
        if (searchInput) {
          searchInput.focus()
        }
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航栏 */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4 relative">
          {/* 移动端菜单按钮 */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden mr-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <Sidebar 
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
                showFavorites={showFavorites}
                onToggleFavorites={setShowFavorites}
                onToolSelect={(toolId) => {
                  // 根据toolId找到对应的工具对象
                  import('@/data/tools').then(({ toolsData }) => {
                    const tool = toolsData.flatMap(cat => cat.tools).find(t => t.id === toolId)
                    if (tool) handleToolSelect(tool)
                  })
                }}
              />
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">K</span>
            </div>
            <span className="font-bold text-xl">KeyFlow</span>
          </div>

          {/* 搜索框 */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('common.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setSearchQuery('')
                  }
                }}
                className="pl-10 pr-16"
              />
              <Badge variant="secondary" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs">
                Ctrl+K
              </Badge>
            </div>
          </div>

          {/* 右侧按钮组 */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowFavorites(!showFavorites)}
              className={showFavorites ? 'text-red-500' : ''}
            >
              <Heart className={`h-5 w-5 ${showFavorites ? 'fill-current' : ''}`} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSettings(!showSettings)}
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
          
          {/* 设置面板 */}
          {showSettings && (
            <div className="absolute top-12 right-0 bg-background border border-border rounded-lg shadow-lg p-4 w-64 z-50">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{t('common.settings')}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowSettings(false)}
                    className="h-6 w-6"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{t('common.theme')}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className="h-8 px-3"
                    >
                      {theme === 'dark' ? t('common.light') : t('common.dark')}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{t('common.language')}</span>
                    <LanguageSwitcher />
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <div className="text-xs text-muted-foreground text-center">
                      KeyFlow v1.0.0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="flex">
        {/* 桌面端侧边栏 */}
        <aside className="hidden md:block w-80 border-r bg-muted/10">
          <Sidebar 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            showFavorites={showFavorites}
            onToggleFavorites={setShowFavorites}
            onToolSelect={(toolId) => {
              // 根据toolId找到对应的工具对象
              import('@/data/tools').then(({ toolsData }) => {
                const tool = toolsData.flatMap(cat => cat.tools).find(t => t.id === toolId)
                if (tool) handleToolSelect(tool)
              })
            }}
          />
        </aside>

        {/* 主内容区 */}
        <main className="flex-1 overflow-hidden">
          {selectedTool ? (
            <ToolDetail tool={selectedTool} onBack={handleBackToGrid} />
          ) : searchQuery ? (
            <SearchResults 
              query={searchQuery} 
              onToolSelect={handleToolSelect}
              onClearSearch={() => setSearchQuery('')}
            />
          ) : (
            <ToolGrid 
              selectedCategory={selectedCategory}
              showFavorites={showFavorites}
              onToolSelect={handleToolSelect}
              onFavoriteChange={forceRefresh}
            />
          )}
        </main>
      </div>
    </div>
  )
}