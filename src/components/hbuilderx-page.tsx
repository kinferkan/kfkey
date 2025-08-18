import { useEffect } from 'react'
import { SEOHead } from '@/components/seo-head'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { SEO_CONFIG } from '@/config/seo-config'
import { useTranslation } from 'react-i18next'

export function HbuilderxPage() {
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
        title={SEO_CONFIG.tools.hbuilderx.title}
        description={SEO_CONFIG.tools.hbuilderx.description}
        keywords={SEO_CONFIG.tools.hbuilderx.keywords}
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
                <h1 className="text-2xl font-bold">{t('hbuilderxPage.pageTitle')}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* 主要内容 */}
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <div className="markdown-content">
            <h1>{t('hbuilderxPage.mainTitle')}</h1>
            
            <p>
              {t('hbuilderxPage.introText')}
            </p>
            
            <h2>{t('hbuilderxPage.whyUseShortcutsTitle')}</h2>
            
            <p>{t('hbuilderxPage.benefitsText')}</p>
            
            <ul>
              <li><strong>{t('hbuilderxPage.benefit1')}</strong></li>
              <li><strong>{t('hbuilderxPage.benefit2')}</strong></li>
              <li><strong>{t('hbuilderxPage.benefit3')}</strong></li>
              <li><strong>{t('hbuilderxPage.benefit4')}</strong></li>
            </ul>
            
            <h2>{t('hbuilderxPage.usageTipsTitle')}</h2>
            
            <p>{t('hbuilderxPage.tipsText')}</p>
            
            <ol>
              <li><strong>{t('hbuilderxPage.tip1')}</strong></li>
              <li><strong>{t('hbuilderxPage.tip2')}</strong></li>
              <li><strong>{t('hbuilderxPage.tip3')}</strong></li>
              <li><strong>{t('hbuilderxPage.tip4')}</strong></li>
              <li><strong>{t('hbuilderxPage.tip5')}</strong></li>
            </ol>
            
            <h2>{t('hbuilderxPage.platformDifferencesTitle')}</h2>
            
            <p>
              {t('hbuilderxPage.platformDifferencesText')}
            </p>
            
            <h2>{t('hbuilderxPage.commonShortcutsTitle')}</h2>
            
            <h3>{t('hbuilderxPage.generalCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+R</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.runCurrentPage')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+D</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.debugCurrentPage')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+W</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.closeCurrentFile')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+W</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.closeAllWindows')}</p>
            </div>
            
            <h3>{t('hbuilderxPage.editingCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+D</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.duplicateLine')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+K</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.deleteLine')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+Down</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.copyLineDown')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+Up</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.copyLineUp')}</p>
            </div>
            
            <h3>{t('hbuilderxPage.navigationCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+O</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.quickOpenFile')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+F</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.findInFiles')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+G</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.findSymbol')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">F12</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.goToDefinition')}</p>
            </div>
            
            <h3>{t('hbuilderxPage.refactoringCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Alt+R</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.renameSymbol')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">F2</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.gotoNextError')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Shift+F2</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.gotoPrevError')}</p>
            </div>
            
            <h3>{t('hbuilderxPage.columnEditingCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Alt+鼠标拖拽</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.columnSelection')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Alt+Down</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.insertCursorBelow')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Alt+Up</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('hbuilderxPage.insertCursorAbove')}</p>
            </div>
            
            <h2>{t('hbuilderxPage.bestPracticesTitle')}</h2>
            
            <p>{t('hbuilderxPage.bestPracticesText')}</p>
            
            <ol>
              <li><strong>{t('hbuilderxPage.practice1')}</strong></li>
              <li><strong>{t('hbuilderxPage.practice2')}</strong></li>
              <li><strong>{t('hbuilderxPage.practice3')}</strong></li>
              <li><strong>{t('hbuilderxPage.practice4')}</strong></li>
              <li><strong>{t('hbuilderxPage.practice5')}</strong></li>
            </ol>
            
            <h2>{t('hbuilderxPage.conclusionTitle')}</h2>
            
            <p>
              {t('hbuilderxPage.conclusionText')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}