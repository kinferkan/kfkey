import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { SEO_CONFIG, getToolSEO, getCategorySEO } from '@/config/seo-config'

interface SEOHeadProps {
  title?: string | Record<string, string>
  description?: string | Record<string, string>
  keywords?: string | Record<string, string>
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
  const { i18n } = useTranslation()
  
  // 根据当前语言获取SEO信息
  const currentLanguage = i18n.language
  
  // 处理title，确保是字符串类型
  const getTitle = (): string => {
    if (typeof title === 'string') return title;
    if (typeof title === 'object' && title !== null) {
      return title[currentLanguage as keyof typeof title] || title['en'] || 'KeyFlow';
    }
    
    if (toolId) {
      const toolSEO = getToolSEO(toolId, currentLanguage);
      return toolSEO.title;
    }
    
    if (categoryId) {
      const categorySEO = getCategorySEO(categoryId, currentLanguage);
      return categorySEO.title;
    }
    
    return typeof SEO_CONFIG.defaultTitle === 'string'
      ? SEO_CONFIG.defaultTitle
      : SEO_CONFIG.defaultTitle[currentLanguage as keyof typeof SEO_CONFIG.defaultTitle] || SEO_CONFIG.defaultTitle['en'];
  };
  
  // 处理description，确保是字符串类型
  const getDescription = (): string => {
    if (typeof description === 'string') return description;
    if (typeof description === 'object' && description !== null) {
      return description[currentLanguage as keyof typeof description] || description['en'] || '';
    }
    
    if (toolId) {
      const toolSEO = getToolSEO(toolId, currentLanguage);
      return toolSEO.description;
    }
    
    if (categoryId) {
      const categorySEO = getCategorySEO(categoryId, currentLanguage);
      return categorySEO.description;
    }
    
    return typeof SEO_CONFIG.defaultDescription === 'string'
      ? SEO_CONFIG.defaultDescription
      : SEO_CONFIG.defaultDescription[currentLanguage as keyof typeof SEO_CONFIG.defaultDescription] || SEO_CONFIG.defaultDescription['en'];
  };
  
  // 处理keywords，确保是字符串类型
  const getKeywords = (): string => {
    if (typeof keywords === 'string') return keywords;
    if (typeof keywords === 'object' && keywords !== null) {
      return keywords[currentLanguage as keyof typeof keywords] || keywords['en'] || '';
    }
    
    if (toolId) {
      const toolSEO = getToolSEO(toolId, currentLanguage);
      return toolSEO.keywords;
    }
    
    if (categoryId) {
      const categorySEO = getCategorySEO(categoryId, currentLanguage);
      return categorySEO.keywords;
    }
    
    return (SEO_CONFIG.keywords.primary[currentLanguage as keyof typeof SEO_CONFIG.keywords.primary] || SEO_CONFIG.keywords.primary['en']).join(', ');
  };
  
  const defaultTitle = getTitle();
  const defaultDescription = getDescription();
  const defaultKeywords = getKeywords();
  
  // 确保标题包含品牌名
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