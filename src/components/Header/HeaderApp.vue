<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LanguageSelect from './LanguageSelect.vue';
</script>
<template>
  <header class="relative flex flex-row justify-center items-center w-full min-h-[4rem] bg-white drop-shadow">
    <div class="w-page mx-auto px-3 md:px-5 lg:px-0 flex flex-row justify-between items-center">
      <nav>
        <RouterLink to="/">{{ $t('pages.sender') }}</RouterLink>
        <RouterLink to="/about" class="ml-4">{{ $t('pages.about') }}</RouterLink>
      </nav>
      <LanguageSelect />
    </div>
  </header>
</template>
