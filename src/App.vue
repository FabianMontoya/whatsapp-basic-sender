<script setup lang="ts">
import esES from 'ant-design-vue/es/locale/es_ES';
import enUS from 'ant-design-vue/es/locale/en_US';
import { RouterView } from 'vue-router';
import HeaderApp from './components/Header/HeaderApp.vue';
import FooterApp from './components/Footer/FooterApp.vue';

const antLanguages = {
  es: esES,
  en: enUS
};
</script>

<template>
  <a-config-provider :locale="antLanguages[$i18n.locale]">
    <div class="flex flex-col h-screen justify-between">
      <HeaderApp />
      <main class="max-w-page mx-auto mb-auto antialiased">
        <RouterView />
      </main>
      <FooterApp />
    </div>
  </a-config-provider>
</template>
