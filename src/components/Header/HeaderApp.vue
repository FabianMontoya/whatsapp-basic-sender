<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LanguageSelect from './LanguageSelect.vue';
</script>
<template>
  <header class="relative flex flex-row justify-center items-center w-full h-16 bg-white drop-shadow">
    <div class="w-page mx-auto flex flex-row justify-between">
      <nav>
        <RouterLink to="/">{{ $t('pages.sender') }}</RouterLink>
        <RouterLink to="/about" class="ml-4">{{ $t('pages.about') }}</RouterLink>
      </nav>
      <LanguageSelect />
    </div>
  </header>
</template>
