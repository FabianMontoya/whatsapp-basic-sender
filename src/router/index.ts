import { createRouter, createWebHistory } from 'vue-router';
import i18n from '../i18n';
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';
import SenderView from '../views/SenderView.vue';

const { t } = i18n.global;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hello-world',
      name: 'home',
      component: HomeView,
      meta: {
        titleKey: 'Hello World'
      }
    },
    {
      path: '/',
      name: 'sender',
      component: SenderView,
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

router.beforeEach((to, _from, next) => {
  // add _ to variable unused to not show error
  localStorage.setItem('language', i18n.global.locale);
  document.title = `${t(`pages.${to.meta.titleKey}`)} - Simple WhatsApp Sender App`;
  next();
});

export default router;
