import React from 'react'
import { cn } from '@/lib/utils'

interface FontAwesomeIconProps {
  icon: string
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2x' | '3x' | '4x' | '5x'
  className?: string
  color?: string
}

export function FontAwesomeIcon({ 
  icon, 
  size, 
  className,
  color 
}: FontAwesomeIconProps) {
  const sizeClass = size ? `fa-${size}` : ''
  const colorStyle = color ? { color } : {}
  
  return (
    <i 
      className={cn(icon, sizeClass, className)} 
      style={colorStyle}
      aria-hidden="true"
    />
  )
}

// 预定义的工具图标组件
export function ToolIcon({ 
  toolId, 
  size = 'lg', 
  className 
}: { 
  toolId: string
  size?: FontAwesomeIconProps['size']
  className?: string 
}) {
  const iconMap: Record<string, string> = {
    vscode: 'fas fa-code',
    sublime: 'fas fa-file-code',
    intellij: 'fas fa-laptop-code',
    eclipse: 'fas fa-circle',
    'android-studio': 'fab fa-android',
    xcode: 'fab fa-apple',
    hbuilderx: 'fas fa-cube',
    photoshop: 'fas fa-image',
    figma: 'fas fa-pen-nib',
    sketch: 'fas fa-vector-square',
    illustrator: 'fas fa-bezier-curve',
    aftereffects: 'fas fa-film'
  }
  
  const icon = iconMap[toolId] || 'fas fa-tools'
  
  return (
    <FontAwesomeIcon 
      icon={icon} 
      size={size} 
      className={className}
    />
  )
}