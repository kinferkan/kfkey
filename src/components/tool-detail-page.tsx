import { ToolDetail } from '@/components/tool-detail'
import { toolsData } from '@/data/tools'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { favoriteService } from '@/data/tools'
import { Tool } from '@/types'

export function ToolDetailPage() {
  const { toolId } = useParams()
  const navigate = useNavigate()
  const [tool, setTool] = useState<Tool | null>(null)

  useEffect(() => {
    if (toolId) {
      const foundTool = toolsData.flatMap(category => category.tools).find(t => t.id === toolId)
      setTool(foundTool || null)
    }
  }, [toolId])

  const handleBack = () => {
    navigate(-1)
  }

  if (!tool) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Tool not found</h2>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      <ToolDetail tool={tool} onBack={handleBack} />
    </div>
  )
}