import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { MainLayout } from '@/components/main-layout'
import { SEOHead } from '@/components/seo-head'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
        <SEOHead />
        <MainLayout />
        <Toaster />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
