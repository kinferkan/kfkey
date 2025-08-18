import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { MainLayout } from '@/components/main-layout'
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
import { useState, useEffect } from 'react'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // 检查是否是工具页面
  const isToolPage = currentPath.startsWith('/tools/')

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
        {isToolPage ? (
          <>
            {currentPath === '/tools/vscode' && <VSCodePage />}
            {currentPath === '/tools/sublime' && <SublimePage />}
            {currentPath === '/tools/intellij-java' && <IntelliJPage />}
            {currentPath === '/tools/eclipse' && <EclipsePage />}
            {currentPath === '/tools/webstorm' && <WebStormPage />}
            {currentPath === '/tools/pycharm' && <PyCharmPage />}
            {currentPath === '/tools/goland' && <GoLandPage />}
            {currentPath === '/tools/clion' && <CLionPage />}
            {currentPath === '/tools/android-studio' && <AndroidStudioPage />}
            {currentPath === '/tools/xcode' && <XcodePage />}
            {currentPath === '/tools/hbuilderx' && <HbuilderxPage />}
            {currentPath === '/tools/atom' && <AtomPage />}
            {currentPath === '/tools/photoshop' && <PhotoshopPage />}
            {currentPath === '/tools/figma' && <FigmaPage />}
            {currentPath === '/tools/chrome-devtools' && <ChromeDevtoolsPage />}
            {currentPath === '/tools/firefox-devtools' && <FirefoxDevtoolsPage />}
          </>
        ) : (
          <>
            <SEOHead />
            <MainLayout />
            <Toaster />
          </>
        )}
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App