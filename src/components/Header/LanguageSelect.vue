<script setup lang="ts">
// <a href="https://www.flaticon.com/free-icons/spain" title="spain icons">Spain icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/united-states" title="united states icons">United States icons created by Freepik - Flaticon</a>
import spainFlag from '../../assets/img/flags/spain-flag.png';
import usaFlag from '../../assets/img/flags/united-states-flag.png';

interface language {
  name: string;
  value: string;
  flag: string;
}

const langs: language[] = [
  { name: 'Español', value: 'es', flag: spainFlag },
  { name: 'English', value: 'en', flag: usaFlag }
];

const sortLangs = (a: language, b: language) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};
</script>
<template>
  <a-select v-model:value="$i18n.locale" class="min-w-[7.5rem]">
    <a-select-option v-for="(lang, i) in langs.sort(sortLangs)" :key="`Lang${i}`" :value="lang.value">
      <div class="flex flex-row w-full justify-center items-center">
        <img :src="lang.flag" width="20" :alt="lang.value + ' flag'" class="object-cover mr-1" />
        <span>{{ lang.name }}</span>
      </div>
    </a-select-option>
  </a-select>
</template>
