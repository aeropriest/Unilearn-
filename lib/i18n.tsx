import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en';
import ja from './locales/ja';
import zhCN from './locales/zh-cn';
import tccn from './locales/tc-cn';

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;

i18n
  .use(initReactI18next)
  .init({
    lng: savedLang || 'en', // ✅ Load from localStorage or default to 'en'
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources: {
      en,
      ja,
      zhCN,
      tccn,
    },
  });

export default i18n;
