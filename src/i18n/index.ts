import { createI18n } from 'vue-i18n';

import en from './english.json';
import es from './spanish.json';

const BROWSER_LANGUAGE = localStorage.getItem('language') || navigator.language.split('-')[0];

const i18n = createI18n({
  locale: BROWSER_LANGUAGE, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: { en, es } // set locale messages
});

export default i18n;
