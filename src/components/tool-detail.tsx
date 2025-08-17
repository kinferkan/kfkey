import { useState, useEffect } from 'react'
import { ArrowLeft, Heart, Share2, Download, Filter, Search, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { KeyboardHeatmap } from '@/components/keyboard-heatmap'
import { ShortcutList } from '@/components/shortcut-list'
import { Tool, Platform } from '@/types'
import { useTranslation } from 'react-i18next'
import { i18nTools } from '@/utils/i18n-tools'

// 检测用户操作系统
const detectUserPlatform = (): Platform => {
  const userAgent = navigator.userAgent.toLowerCase()
  const platform = navigator.platform.toLowerCase()
  
  if (userAgent.includes('mac') || platform.includes('mac')) {
    return 'mac'
  } else if (userAgent.includes('linux') || platform.includes('linux')) {
    return 'linux'
  } else if (userAgent.includes('win') || platform.includes('win')) {
    return 'win'
  }
  
  // 默认返回Windows
  return 'win'
}

// 获取平台显示名称
const getPlatformDisplayName = (platform: Platform, t: any): string => {
  switch (platform) {
    case 'mac': return t('toolDetail.platforms.mac')
    case 'win': return t('toolDetail.platforms.win')
    case 'linux': return t('toolDetail.platforms.linux')
    case 'all': return t('toolDetail.allPlatforms')
    default: return t('toolDetail.platforms.win')
  }
}

interface ToolDetailProps {
  tool: Tool
  onBack: () => void
}

export function ToolDetail({ tool, onBack }: ToolDetailProps) {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [detectedPlatform, setDetectedPlatform] = useState<Platform>('win')
  // 智能平台选择：Xcode强制macOS，其他工具使用检测到的系统
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(
    tool.id === 'xcode' ? 'mac' : 'win'
  )
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // 检测用户系统并设置默认平台
  useEffect(() => {
    const userPlatform = detectUserPlatform()
    setDetectedPlatform(userPlatform)
    
    // Xcode强制使用macOS平台，其他工具使用检测到的平台
    if (tool.id === 'xcode') {
      setSelectedPlatform('mac')
    } else {
      setSelectedPlatform(userPlatform)
    }
  }, [tool.id])

  const filteredShortcuts = tool.shortcuts.filter(shortcut => {
    const matchesSearch = searchQuery === '' || 
      shortcut.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shortcut.keys.some(key => key.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesPlatform = selectedPlatform === 'all' || 
      shortcut.platform === 'all' || 
      shortcut.platform === selectedPlatform
    
    const matchesCategory = selectedCategory === 'all' || 
      shortcut.category === selectedCategory

    return matchesSearch && matchesPlatform && matchesCategory
  })

  const categories = Array.from(new Set(tool.shortcuts.map(s => s.category)))

  return (
    <div className="min-h-screen bg-background">
      {/* 工具头部信息 */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                  <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{tool.name}</h1>
                  <p className="text-muted-foreground">{i18nTools.getToolDescription(t, tool.id, tool.description)}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">
                {t('toolGrid.shortcuts', { count: tool.shortcuts.length })}
              </Badge>
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="w-4 h-4" />
              </Button>
              <Button 
                variant={tool.isFavorite ? "default" : "outline"}
                size="icon"
              >
                <Heart className={`w-4 h-4 ${tool.isFavorite ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 筛选和搜索栏 */}
      <div className="container mx-auto px-6 py-4 border-b bg-muted/30">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('toolDetail.searchShortcuts')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Select 
              value={selectedPlatform} 
              onValueChange={(value: Platform) => setSelectedPlatform(value)}
              disabled={tool.id === 'xcode'}
            >
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('toolDetail.allPlatforms')}</SelectItem>
                <SelectItem value="win">{t('toolDetail.platforms.win')}</SelectItem>
                <SelectItem value="mac">{t('toolDetail.platforms.mac')}</SelectItem>
                <SelectItem value="linux">{t('toolDetail.platforms.linux')}</SelectItem>
              </SelectContent>
            </Select>
            {tool.id === 'xcode' && (
              <Badge variant="outline" className="text-xs">
                {t('toolDetail.macOSOnly')}
              </Badge>
            )}
            {tool.id !== 'xcode' && (
              <div className="flex items-center space-x-2">
                <Monitor className="w-4 h-4 text-muted-foreground" />
                <Badge variant="secondary" className="text-xs">
                  {t('toolDetail.detected')}: {getPlatformDisplayName(detectedPlatform, t)}
                </Badge>
              </div>
            )}
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('toolDetail.allCategories')}</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mt-3 text-sm text-muted-foreground">
          {t('toolDetail.showing', { filtered: filteredShortcuts.length, total: tool.shortcuts.length })}
        </div>
      </div>

      {/* 主要内容 */}
      <div className="container mx-auto px-6 py-6">
        <Tabs defaultValue="heatmap" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-96">
            <TabsTrigger value="heatmap">{t('toolDetail.keyboardHeatmap')}</TabsTrigger>
            <TabsTrigger value="list">{t('toolDetail.shortcutList')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="heatmap" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('toolDetail.interactiveKeyboardHeatmap')}</CardTitle>
                <CardDescription>
                  {t('toolDetail.heatmapDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <KeyboardHeatmap 
                  shortcuts={filteredShortcuts}
                  platform={selectedPlatform}
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="list" className="space-y-6">
            <ShortcutList 
              shortcuts={filteredShortcuts}
              searchQuery={searchQuery}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}