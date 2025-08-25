import { useEffect } from 'react'
import { SEOHead } from '@/components/seo-head'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { SEO_CONFIG } from '@/config/seo-config'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export function VSCodePage() {
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
        title={SEO_CONFIG.tools.vscode.title}
        description={SEO_CONFIG.tools.vscode.description}
        keywords={SEO_CONFIG.tools.vscode.keywords}
      />
      
      <div className="min-h-screen bg-background">
        {/* 头部导航 */}
        <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                  <h1 className="text-2xl font-bold">{t('vscodePage.pageTitle')}</h1>
                </div>
            </div>
          </div>
        </div>

        {/* 主要内容 */}
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <div className="markdown-content">
            <h1>{t('vscodePage.mainTitle')}</h1>
            
            <p>
              {t('vscodePage.introText')}
            </p>
            
            <h2>{t('vscodePage.whyUseShortcutsTitle')}</h2>
            
            <p>{t('vscodePage.benefitsText')}</p>
            
            <ul>
              <li><strong>{t('vscodePage.benefit1')}</strong></li>
              <li><strong>{t('vscodePage.benefit2')}</strong></li>
              <li><strong>{t('vscodePage.benefit3')}</strong></li>
              <li><strong>{t('vscodePage.benefit4')}</strong></li>
            </ul>
            
            <h2>{t('vscodePage.usageTipsTitle')}</h2>
            
            <p>{t('vscodePage.tipsText')}</p>
            
            <ol>
              <li><strong>{t('vscodePage.tip1')}</strong></li>
              <li><strong>{t('vscodePage.tip2')}</strong></li>
              <li><strong>{t('vscodePage.tip3')}</strong></li>
              <li><strong>{t('vscodePage.tip4')}</strong></li>
              <li><strong>{t('vscodePage.tip5')}</strong></li>
            </ol>
            
            <h2>{t('vscodePage.platformDifferencesTitle')}</h2>
            
            <p>
              {t('vscodePage.platformDifferencesText')}
            </p>
            
            <h2>{t('vscodePage.commonShortcutsTitle')}</h2>
            
            <h3>{t('vscodePage.generalCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+P</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Shift+P</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.command_palette')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+P</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+P</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.quick_open')}</p>
            </div>
            
            <h3>{t('vscodePage.fileOperationsCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+N</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+N</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.new_file')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+S</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+S</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.save')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Shift+S</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Shift+S</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.save_as')}</p>
            </div>
            
            <h3>{t('vscodePage.editOperationsCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+X</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+X</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.cut')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+C</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+C</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.copy')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+V</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+V</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.paste')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Z</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Z</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.undo')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Y</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Shift+Z</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.redo')}</p>
            </div>
            
            <h3>{t('vscodePage.navigationCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+G</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+G</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.goto_line')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+F</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+F</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.find')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+H</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+H</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.replace')}</p>
            </div>
            
            <h3>{t('vscodePage.multiCursorCategory')}</h3>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Alt+↑</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Alt+↑</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.insert_cursor_above')}</p>
            </div>
            
            <div className="shortcut-card">
              <div className="flex items-center">
                <span className="shortcut-keys">Ctrl+Alt+↓</span>
                <span>(Windows/Linux) / </span>
                <span className="shortcut-keys">Cmd+Alt+↓</span>
                <span>(macOS)</span>
                <span className="platform-tag">{t('toolDetail.allPlatforms')}</span>
              </div>
              <p className="mt-2">{t('shortcutDescriptions.insert_cursor_below')}</p>
            </div>
            
            <h2>{t('vscodePage.bestPracticesTitle')}</h2>
            
            <p>{t('vscodePage.bestPracticesText')}</p>
            
            <ol>
              <li><strong>{t('vscodePage.practice1')}</strong></li>
              <li><strong>{t('vscodePage.practice2')}</strong></li>
              <li><strong>{t('vscodePage.practice3')}</strong></li>
              <li><strong>{t('vscodePage.practice4')}</strong></li>
              <li><strong>{t('vscodePage.practice5')}</strong></li>
            </ol>
            
            <h2>{t('vscodePage.conclusionTitle')}</h2>
            
            <p>
              {t('vscodePage.conclusionText')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}