import { createI18n } from 'vue-i18n';

import languages from './languages';

const BROWSER_LANGUAGE = localStorage.getItem('language') || navigator.language.split('-')[0];

const i18n = createI18n({
  locale: BROWSER_LANGUAGE, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: languages // set locale messages
});

export default i18n;
