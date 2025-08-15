import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
}

export function SEOHead({ 
  title = "KeyFlow - 开发工具快捷键导航平台",
  description = "专业的开发工具快捷键导航平台，提供VSCode、IntelliJ IDEA、WebStorm等主流IDE和编辑器的快捷键大全。",
  keywords = "快捷键,开发工具,VSCode快捷键,IntelliJ IDEA快捷键,程序员工具",
  canonical,
  ogImage = "/og-image.png"
}: SEOHeadProps) {
  const fullTitle = title.includes('KeyFlow') ? title : `${title} - KeyFlow`
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}