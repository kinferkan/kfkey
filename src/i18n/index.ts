import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入语言资源
import en from './locales/en.json';
import de from './locales/de.json';
import zh from './locales/zh.json';

const resources = {
  en: {
    translation: en
  },
  de: {
    translation: de
  },
  zh: {
    translation: zh
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // 默认语言设置为英语
    debug: process.env.NODE_ENV === 'development',
    
    detection: {
      // 语言检测配置
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'keyflow-language',
    },

    interpolation: {
      escapeValue: false, // React 已经默认转义
    },

    // 支持的语言列表
    supportedLngs: ['en', 'de', 'zh'],
    
    // 语言检测失败时的回退策略
    load: 'languageOnly',
    cleanCode: true,
  });

export default i18n;