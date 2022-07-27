<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup() {
    const langs = [
      { name: 'Español', value: 'es' },
      { name: 'English', value: 'en' }
    ];

    const selectedOption = ref('Fabian');

    return {
      langs,
      selectedOption
    };
  }
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> + <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
    <span>{{ $t('hello_world') }}</span>
    <br />

    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.value">
        {{ lang.name }}
      </option>
    </select>

    <br />

    <div>
      <span class="font-bold text-2xl">asdasd</span>
      <a-select v-model:value="selectedOption" show-search class="w-32">
        <a-select-option value="1">asdasd</a-select-option>
        <a-select-option value="2">basdasd</a-select-option>
        <a-select-option value="3">casdasdasdas</a-select-option>
        <a-select-option value="Fabian">Fabian</a-select-option>
      </a-select>
      <code>Selected: {{ selectedOption }}</code>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
