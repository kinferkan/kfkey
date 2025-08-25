import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TopNavbar } from '@/components/top-navbar'
import { Sidebar } from '@/components/sidebar'
import { ToolGrid } from '@/components/tool-grid'
import { toolsData } from '@/data/tools'
import { Toaster } from '@/components/ui/sonner'
import { SEOHead } from '@/components/seo-head'

export function CategoryPage() {
  const { categoryId } = useParams()
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryId || 'all')
  const [showFavorites, setShowFavorites] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // 当路由参数变化时更新选中的分类
  useEffect(() => {
    if (categoryId) {
      setSelectedCategory(categoryId)
    }
  }, [categoryId])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  // 处理侧边栏工具选择
  const handleSidebarToolSelect = (toolId: string) => {
    // 根据toolId找到对应的工具对象
    const tool = toolsData.flatMap(cat => cat.tools).find(t => t.id === toolId)
    if (tool) {
      window.location.href = `/tool/${tool.id}`
    }
  }

  // 处理侧边栏分类选择
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    // 更新URL但不刷新页面
    window.history.pushState({}, '', `/category/${category}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopNavbar 
        showFavorites={showFavorites}
        onToggleFavorites={() => setShowFavorites(!showFavorites)}
        searchQuery={searchQuery}
        onSearchChange={handleSearch}
      />
      <div className="flex flex-1">
        <div className="hidden md:block w-80 border-r bg-muted/10">
          <Sidebar 
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            showFavorites={showFavorites}
            onToggleFavorites={setShowFavorites}
            onToolSelect={handleSidebarToolSelect}
            // 在分类页面中，确保当前分类是展开的
            currentToolId={undefined}
          />
        </div>
        <main className="flex-1">
          <SEOHead />
          {/* 分类内容 - 展示该分类下的所有工具 */}
          <div className="container mx-auto py-6">
            <ToolGrid 
              selectedCategory={selectedCategory}
              showFavorites={showFavorites}
              onToolSelect={(tool) => {
                window.location.href = `/tool/${tool.id}`;
              }}
              onFavoriteChange={() => {}}
            />
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  )
}