import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { SEO_CONFIG, getToolSEO, getCategorySEO } from '@/config/seo-config'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  toolId?: string
  categoryId?: string
}

export function SEOHead({ 
  title,
  description,
  keywords,
  canonical,
  ogImage = "/og-image.png",
  toolId,
  categoryId
}: SEOHeadProps) {
  const { t, i18n } = useTranslation()
  
  // 根据当前语言获取SEO信息
  const currentLanguage = i18n.language
  
  let defaultTitle, defaultDescription, defaultKeywords
  
  if (toolId) {
    // 工具页面SEO
    const toolSEO = getToolSEO(toolId, currentLanguage)
    defaultTitle = title || toolSEO.title
    defaultDescription = description || toolSEO.description
    defaultKeywords = keywords || toolSEO.keywords
  } else if (categoryId) {
    // 分类页面SEO
    const categorySEO = getCategorySEO(categoryId, currentLanguage)
    defaultTitle = title || categorySEO.title
    defaultDescription = description || categorySEO.description
    defaultKeywords = keywords || categorySEO.keywords
  } else {
    // 默认页面SEO
    defaultTitle = title || (typeof SEO_CONFIG.defaultTitle === 'string' 
      ? SEO_CONFIG.defaultTitle 
      : SEO_CONFIG.defaultTitle[currentLanguage as keyof typeof SEO_CONFIG.defaultTitle] || SEO_CONFIG.defaultTitle['en'])
    
    defaultDescription = description || (typeof SEO_CONFIG.defaultDescription === 'string'
      ? SEO_CONFIG.defaultDescription
      : SEO_CONFIG.defaultDescription[currentLanguage as keyof typeof SEO_CONFIG.defaultDescription] || SEO_CONFIG.defaultDescription['en'])
    
    defaultKeywords = keywords || (SEO_CONFIG.keywords.primary[currentLanguage as keyof typeof SEO_CONFIG.keywords.primary] || SEO_CONFIG.keywords.primary['en']).join(', ')
  }
  
  const fullTitle = defaultTitle.includes('KeyFlow') ? defaultTitle : `${defaultTitle} - KeyFlow`
  
  // 根据语言设置OG locale
  const ogLocaleMap: Record<string, string> = {
    zh: 'zh_CN',
    en: 'en_US',
    de: 'de_DE'
  }
  
  const ogLocale = ogLocaleMap[currentLanguage] || 'en_US'
  
  return (
    <Helmet>
      <html lang={currentLanguage} />
      <title>{fullTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={defaultKeywords} />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={ogLocale} />
      
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}