import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
}

export function SEOHead({ 
  title,
  description,
  keywords,
  canonical,
  ogImage = "/og-image.png"
}: SEOHeadProps) {
  const { t, i18n } = useTranslation()
  
  const defaultTitle = title || t('meta.title')
  const defaultDescription = description || t('meta.description')
  const defaultKeywords = keywords || t('meta.keywords')
  
  const fullTitle = defaultTitle.includes('KeyFlow') ? defaultTitle : `${defaultTitle} - KeyFlow`
  
  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{fullTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={defaultKeywords} />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={i18n.language === 'zh' ? 'zh_CN' : i18n.language === 'de' ? 'de_DE' : 'en_US'} />
      
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
