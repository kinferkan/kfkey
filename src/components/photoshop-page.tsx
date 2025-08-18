import { useEffect } from 'react'
import { SEOHead } from '@/components/seo-head'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { SEO_CONFIG } from '@/config/seo-config'
import { useTranslation } from 'react-i18next'

export function PhotoshopPage() {
  const { t } = useTranslation()
  
  useEffect(() => {
    // 添加样式到页面
    const style = document.createElement('style')
    style.innerHTML = `
      .markdown-content {
        line-height: 1.6;
        color: #333;
      }
      
      .markdown-content h1 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #1e40af;
        border-bottom: 2px solid #e5e7eb;
        padding-bottom: 0.5rem;
      }
      
      .markdown-content h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #1e3a8a;
      }
      
      .markdown-content h3 {
        font-size: 1.25rem;
        font-weight: bold;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        color: #1e3a8a;
      }
      
      .markdown-content p {
        margin-bottom: 1rem;
      }
      
      .markdown-content ul, .markdown-content ol {
        margin-bottom: 1rem;
        padding-left: 2rem;
      }
      
      .markdown-content li {
        margin-bottom: 0.5rem;
      }
      
      .markdown-content strong {
        font-weight: 600;
      }
      
      .markdown-content a {
        color: #3b82f6;
        text-decoration: underline;
      }
      
      .markdown-content a:hover {
        color: #1d4ed8;
      }
      
      .shortcut-card {
        background-color: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        padding: 1rem;
        margin-bottom: 1rem;
      }
      
      .shortcut-keys {
        display: inline-block;
        background-color: #e5e7eb;
        border-radius: 0.25rem;
        padding: 0.125rem 0.5rem;
        font-family: monospace;
        font-weight: 600;
        margin-right: 0.5rem;
      }
      
      .platform-tag {
        display: inline-block;
        background-color: #dbeafe;
        color: #1e40af;
        border-radius: 0.25rem;
        padding: 0.125rem 0.5rem;
        font-size: 0.875rem;
        margin-left: 0.5rem;
      }
      
      /* 暗色主题支持 */
      .dark .markdown-content {
        color: #d1d5db;
      }
      
      .dark .markdown-content h1 {
        color: #60a5fa;
        border-bottom: 2px solid #374151;
      }
      
      .dark .markdown-content h2,
      .dark .markdown-content h3 {
        color: #93c5fd;
      }
      
      .dark .shortcut-card {
        background-color: #1f2937;
        border: 1px solid #4b5563;
      }
      
      .dark .shortcut-keys {
        background-color: #374151;
      }
      
      .dark .platform-tag {
        background-color: #1e3a8a;
        color: #bfdbfe;
      }
    `
    document.head.appendChild(style)
    
    // 清理样式
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>
      <SEOHead 
        title={SEO_CONFIG.tools.photoshop.title}
        description={SEO_CONFIG.tools.photoshop.description}
        keywords={SEO_CONFIG.tools.photoshop.keywords}
      />
      
      <div className="min-h-screen bg-background">
        {/* 头部导航 */}
        <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={() => window.close()}>
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <h1 className="text-2xl font-bold">{t('photoshopPage.pageTitle')}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* 主要内容 */}
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <div className="markdown-content">
            <h1>{t('photoshopPage.mainTitle')}</h1>
            
            <p>
              {t('photoshopPage.introText')}
            </p>
            
            <h2>{t('photoshopPage.whyUseShortcutsTitle')}</h2>
            
            <p>{t('photoshopPage.benefitsText')}</p>
            
            <ul>
              <li><strong>{t('photoshopPage.benefit1')}</strong></li>
              <li><strong>{t('photoshopPage.benefit2')}</strong></li>
              <li><strong>{t('photoshopPage.benefit3')}</strong></li>
              <li><strong>{t('photoshopPage.benefit4')}</strong></li>
            </ul>
            
            <h2>{t('photoshopPage.usageTipsTitle')}</h2>
            
            <p>{t('photoshopPage.tipsText')}</p>
            
            <ol>
              <li><strong>{t('photoshopPage.tip1')}</strong></li>
              <li><strong>{t('photoshopPage.tip2')}</strong></li>
              <li><strong>{t('photoshopPage.tip3')}</strong></li>
              <li><strong>{t('photoshopPage.tip4')}</strong></li>
              <li><strong>{t('photoshopPage.tip5')}</strong></li>
            </ol>
            
            <h2>{t('photoshopPage.platformDifferencesTitle')}</h2>
            
            <p>
              {t('photoshopPage.platformDifferencesText')}
            </p>
            
            <h2>{t('photoshopPage.commonShortcutsTitle')}</h2>
            
            <h3>{t('photoshopPage.generalCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+O</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+O</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.openFile')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+S</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+S</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.saveFile')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+W</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+W</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.closeFile')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Q</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Q</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.quitApplication')}</p>
            </div>
            
            <h3>{t('photoshopPage.editingCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Z</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Z</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.undo')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+Z</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Shift+Z</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.redo')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+J</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+J</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.duplicateLayer')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+N</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Shift+N</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.newLayer')}</p>
            </div>
            
            <h3>{t('photoshopPage.navigationCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+0</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+0</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.fitToScreen')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+1</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+1</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.actualPixels')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Space+Drag</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.panTool')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Plus</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Plus</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.zoomIn')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Minus</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Minus</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.zoomOut')}</p>
            </div>
            
            <h3>{t('photoshopPage.layerManagementCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">F7</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.toggleLayersPanel')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+E</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+E</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.mergeLayers')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+G</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+G</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.groupLayers')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+G</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Shift+G</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.ungroupLayers')}</p>
            </div>
            
            <h3>{t('photoshopPage.selectionCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+A</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+A</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.selectAll')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+D</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+D</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.deselect')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+I</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Shift+I</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.invertSelection')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+C</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+C</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.copy')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+V</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+V</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.paste')}</p>
            </div>
            
            <h3>{t('photoshopPage.toolsCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">V</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.moveTool')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">M</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.rectangleTool')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">L</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.lassoTool')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">W</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.magicWandTool')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">B</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.brushTool')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">E</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('photoshopPage.eraserTool')}</p>
            </div>
            
            <h2>{t('photoshopPage.bestPracticesTitle')}</h2>
            
            <p>{t('photoshopPage.bestPracticesText')}</p>
            
            <ol>
              <li><strong>{t('photoshopPage.practice1')}</strong></li>
              <li><strong>{t('photoshopPage.practice2')}</strong></li>
              <li><strong>{t('photoshopPage.practice3')}</strong></li>
              <li><strong>{t('photoshopPage.practice4')}</strong></li>
              <li><strong>{t('photoshopPage.practice5')}</strong></li>
            </ol>
            
            <h2>{t('photoshopPage.conclusionTitle')}</h2>
            
            <p>
              {t('photoshopPage.conclusionText')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}