import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { SEOHead } from '@/components/seo-head'
import { HelmetProvider } from 'react-helmet-async'
import { VSCodePage } from '@/components/vscode-page'
import { SublimePage } from '@/components/sublime-page'
import { IntelliJPage } from '@/components/intellij-page'
import { EclipsePage } from '@/components/eclipse-page'
import { WebStormPage } from '@/components/webstorm-page'
import { PyCharmPage } from '@/components/pycharm-page'
import { GoLandPage } from '@/components/goland-page'
import { CLionPage } from '@/components/clion-page'
import { AndroidStudioPage } from '@/components/android-studio-page'
import { XcodePage } from '@/components/xcode-page'
import { HbuilderxPage } from '@/components/hbuilderx-page'
import { AtomPage } from '@/components/atom-page'
import { PhotoshopPage } from '@/components/photoshop-page'
import { FigmaPage } from '@/components/figma-page'
import { ChromeDevtoolsPage } from '@/components/chrome-devtools-page'
import { FirefoxDevtoolsPage } from '@/components/firefox-devtools-page'
import { ToolDetailPage } from './components/tool-detail-page'
import { CategoryPage } from './components/category-page'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { TopNavbar } from '@/components/top-navbar'
import { Sidebar } from '@/components/sidebar'
import { toolsData } from '@/data/tools'

import { ToolGrid } from '@/components/tool-grid'

// 创建一个包装组件来处理工具详情页的状态
function ToolDetailWrapper() {
  const { toolId } = useParams()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showFavorites, setShowFavorites] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // 初始化时设置正确的分类
  useEffect(() => {
    if (toolId) {
      const category = toolsData.find(cat => cat.tools.some(t => t.id === toolId))
      if (category) {
        setSelectedCategory(category.id)
      }
    }
  }, [toolId])

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
            onCategorySelect={setSelectedCategory}
            showFavorites={showFavorites}
            onToggleFavorites={setShowFavorites}
            onToolSelect={handleSidebarToolSelect}
            currentToolId={toolId}
          />
        </div>
        <main className="flex-1">
          <ToolDetailPage />
        </main>
      </div>
      <Toaster />
    </div>
  )
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showFavorites, setShowFavorites] = useState(false)

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

  return (
    <BrowserRouter>
      <Routes>
        {/* 独立工具页面路由 */}
        <Route path="/tools/vscode" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <VSCodePage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/sublime" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <SublimePage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/intellij-java" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <IntelliJPage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/eclipse" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <EclipsePage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/webstorm" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <WebStormPage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/pycharm" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <PyCharmPage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/goland" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <GoLandPage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/clion" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <CLionPage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/android-studio" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <AndroidStudioPage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/xcode" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <XcodePage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/hbuilderx" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <HbuilderxPage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/atom" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <AtomPage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/photoshop" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <PhotoshopPage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/figma" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <FigmaPage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/chrome-devtools" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <ChromeDevtoolsPage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        <Route path="/tools/firefox-devtools" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <FirefoxDevtoolsPage />
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
        {/* 工具详情页面路由 */}
        <Route path="/tool/:toolId" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
              <ToolDetailWrapper />
            </ThemeProvider>
          </HelmetProvider>
        } />
        
        {/* 分类页面路由 */}
        <Route path="/category/:categoryId" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
              <CategoryPage />
            </ThemeProvider>
          </HelmetProvider>
        } />
        {/* 主页路由 */}
        <Route path="/" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <SEOHead />
                    {/* 主页内容 - 展示所有工具 */}
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
            </ThemeProvider>
          </HelmetProvider>
        } />
        {/* 默认路由重定向到主页 */}
        <Route path="*" element={
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
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
                      onCategorySelect={setSelectedCategory}
                      showFavorites={showFavorites}
                      onToggleFavorites={setShowFavorites}
                      onToolSelect={handleSidebarToolSelect}
                    />
                  </div>
                  <main className="flex-1">
                    <SEOHead />
                    {/* 404 页面内容 */}
                    <div className="p-6">
                      <h1 className="text-2xl font-bold">页面未找到</h1>
                      <p>您访问的页面不存在</p>
                    </div>
                  </main>
                </div>
                <Toaster />
              </div>
            </ThemeProvider>
          </HelmetProvider>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
