import { useEffect } from 'react'
import { SEOHead } from '@/components/seo-head'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { SEO_CONFIG } from '@/config/seo-config'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export function FirefoxDevtoolsPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
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
        title={SEO_CONFIG.tools['firefox-devtools'].title}
        description={SEO_CONFIG.tools['firefox-devtools'].description}
        keywords={SEO_CONFIG.tools['firefox-devtools'].keywords}
      />
      
      <div className="min-h-screen bg-background">
        {/* 头部导航 */}
        <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <h1 className="text-2xl font-bold">{t('firefoxDevtoolsPage.pageTitle')}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* 主要内容 */}
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <div className="markdown-content">
            <h1>{t('firefoxDevtoolsPage.mainTitle')}</h1>
            
            <p>
              {t('firefoxDevtoolsPage.introText')}
            </p>
            
            <h2>{t('firefoxDevtoolsPage.whyUseShortcutsTitle')}</h2>
            
            <p>{t('firefoxDevtoolsPage.benefitsText')}</p>
            
            <ul>
              <li><strong>{t('firefoxDevtoolsPage.benefit1')}</strong></li>
              <li><strong>{t('firefoxDevtoolsPage.benefit2')}</strong></li>
              <li><strong>{t('firefoxDevtoolsPage.benefit3')}</strong></li>
              <li><strong>{t('firefoxDevtoolsPage.benefit4')}</strong></li>
            </ul>
            
            <h2>{t('firefoxDevtoolsPage.usageTipsTitle')}</h2>
            
            <p>{t('firefoxDevtoolsPage.tipsText')}</p>
            
            <ol>
              <li><strong>{t('firefoxDevtoolsPage.tip1')}</strong></li>
              <li><strong>{t('firefoxDevtoolsPage.tip2')}</strong></li>
              <li><strong>{t('firefoxDevtoolsPage.tip3')}</strong></li>
              <li><strong>{t('firefoxDevtoolsPage.tip4')}</strong></li>
              <li><strong>{t('firefoxDevtoolsPage.tip5')}</strong></li>
            </ol>
            
            <h2>{t('firefoxDevtoolsPage.platformDifferencesTitle')}</h2>
            
            <p>
              {t('firefoxDevtoolsPage.platformDifferencesText')}
            </p>
            
            <h2>{t('firefoxDevtoolsPage.commonShortcutsTitle')}</h2>
            
            <h3>{t('firefoxDevtoolsPage.generalCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">F12</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.openDevtools')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+I</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.openDevtools')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+K</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.openConsole')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+U</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.viewPageSource')}</p>
            </div>
            
            <h3>{t('firefoxDevtoolsPage.navigationCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+C</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.inspectElement')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+R</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.reloadPage')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+R</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.hardReload')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+L</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.focusAddressBar')}</p>
            </div>
            
            <h3>{t('firefoxDevtoolsPage.panelCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+M</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.responsiveDesignMode')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Esc</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.toggleConsole')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+P</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.commandMenu')}</p>
            </div>
            
            <h3>{t('firefoxDevtoolsPage.debuggingCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">F8</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.resumeExecution')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">F10</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.stepOver')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">F11</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.stepInto')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Shift+F11</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.stepOut')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+B</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.toggleBreakpoint')}</p>
            </div>
            
            <h3>{t('firefoxDevtoolsPage.elementsCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">H</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.hideElement')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Z</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.undoChange')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+Z</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.redoChange')}</p>
            </div>
            
            <h3>{t('firefoxDevtoolsPage.consoleCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+L</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.clearConsole')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+L</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('firefoxDevtoolsPage.clearConsole')}</p>
            </div>
            
            <h2>{t('firefoxDevtoolsPage.bestPracticesTitle')}</h2>
            
            <p>{t('firefoxDevtoolsPage.bestPracticesText')}</p>
            
            <ol>
              <li><strong>{t('firefoxDevtoolsPage.practice1')}</strong></li>
              <li><strong>{t('firefoxDevtoolsPage.practice2')}</strong></li>
              <li><strong>{t('firefoxDevtoolsPage.practice3')}</strong></li>
              <li><strong>{t('firefoxDevtoolsPage.practice4')}</strong></li>
              <li><strong>{t('firefoxDevtoolsPage.practice5')}</strong></li>
            </ol>
            
            <h2>{t('firefoxDevtoolsPage.conclusionTitle')}</h2>
            
            <p>
              {t('firefoxDevtoolsPage.conclusionText')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}