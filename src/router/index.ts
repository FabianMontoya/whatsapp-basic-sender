import { createRouter, createWebHistory } from 'vue-router';
import i18n from '../i18n';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const { t } = i18n.global;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        titleKey: 'sender'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        titleKey: 'about'
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  localStorage.setItem('language', i18n.global.locale);
  document.title = `${t(`pages.${to.meta.titleKey}`)} - Simple WhatsApp Sender App`;
  next();
});

export default router;
