import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { MainLayout } from '@/components/main-layout'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="keyflow-ui-theme">
      <MainLayout />
      <Toaster />
    </ThemeProvider>
  )
}

export default App