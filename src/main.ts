import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';

import App from './App.vue';
import router from './router';
import languages from './i18n';

const i18n = createI18n({
  locale: 'es', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: languages // set locale messages
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount('#app');
