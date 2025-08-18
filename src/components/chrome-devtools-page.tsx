import { useEffect } from 'react'
import { SEOHead } from '@/components/seo-head'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { SEO_CONFIG } from '@/config/seo-config'
import { useTranslation } from 'react-i18next'

export function ChromeDevtoolsPage() {
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
        title={SEO_CONFIG.tools['chrome-devtools'].title}
        description={SEO_CONFIG.tools['chrome-devtools'].description}
        keywords={SEO_CONFIG.tools['chrome-devtools'].keywords}
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
                <h1 className="text-2xl font-bold">{t('chromeDevtoolsPage.pageTitle')}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* 主要内容 */}
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <div className="markdown-content">
            <h1>{t('chromeDevtoolsPage.mainTitle')}</h1>
            
            <p>
              {t('chromeDevtoolsPage.introText')}
            </p>
            
            <h2>{t('chromeDevtoolsPage.whyUseShortcutsTitle')}</h2>
            
            <p>{t('chromeDevtoolsPage.benefitsText')}</p>
            
            <ul>
              <li><strong>{t('chromeDevtoolsPage.benefit1')}</strong></li>
              <li><strong>{t('chromeDevtoolsPage.benefit2')}</strong></li>
              <li><strong>{t('chromeDevtoolsPage.benefit3')}</strong></li>
              <li><strong>{t('chromeDevtoolsPage.benefit4')}</strong></li>
            </ul>
            
            <h2>{t('chromeDevtoolsPage.usageTipsTitle')}</h2>
            
            <p>{t('chromeDevtoolsPage.tipsText')}</p>
            
            <ol>
              <li><strong>{t('chromeDevtoolsPage.tip1')}</strong></li>
              <li><strong>{t('chromeDevtoolsPage.tip2')}</strong></li>
              <li><strong>{t('chromeDevtoolsPage.tip3')}</strong></li>
              <li><strong>{t('chromeDevtoolsPage.tip4')}</strong></li>
              <li><strong>{t('chromeDevtoolsPage.tip5')}</strong></li>
            </ol>
            
            <h2>{t('chromeDevtoolsPage.platformDifferencesTitle')}</h2>
            
            <p>
              {t('chromeDevtoolsPage.platformDifferencesText')}
            </p>
            
            <h2>{t('chromeDevtoolsPage.commonShortcutsTitle')}</h2>
            
            <h3>{t('chromeDevtoolsPage.generalCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">F12</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.openDevtools')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+I</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.openDevtools')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+J</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.openConsole')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+C</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.inspectElement')}</p>
            </div>
            
            <h3>{t('chromeDevtoolsPage.navigationCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+R</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.reloadPage')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+R</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.hardReload')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+Delete</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.clearCacheAndReload')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+L</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.focusAddressBar')}</p>
            </div>
            
            <h3>{t('chromeDevtoolsPage.panelCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+M</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.toggleDeviceToolbar')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Esc</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.toggleConsole')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+P</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.commandMenu')}</p>
            </div>
            
            <h3>{t('chromeDevtoolsPage.debuggingCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">F8</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.resumeExecution')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">F10</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.stepOver')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">F11</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.stepInto')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Shift+F11</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.stepOut')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+\</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.toggleBreakpoint')}</p>
            </div>
            
            <h3>{t('chromeDevtoolsPage.elementsCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">H</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.hideElement')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Z</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.undoChange')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+Z</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.redoChange')}</p>
            </div>
            
            <h3>{t('chromeDevtoolsPage.consoleCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+L</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.clearConsole')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+L</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('chromeDevtoolsPage.clearConsole')}</p>
            </div>
            
            <h2>{t('chromeDevtoolsPage.bestPracticesTitle')}</h2>
            
            <p>{t('chromeDevtoolsPage.bestPracticesText')}</p>
            
            <ol>
              <li><strong>{t('chromeDevtoolsPage.practice1')}</strong></li>
              <li><strong>{t('chromeDevtoolsPage.practice2')}</strong></li>
              <li><strong>{t('chromeDevtoolsPage.practice3')}</strong></li>
              <li><strong>{t('chromeDevtoolsPage.practice4')}</strong></li>
              <li><strong>{t('chromeDevtoolsPage.practice5')}</strong></li>
            </ol>
            
            <h2>{t('chromeDevtoolsPage.conclusionTitle')}</h2>
            
            <p>
              {t('chromeDevtoolsPage.conclusionText')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}