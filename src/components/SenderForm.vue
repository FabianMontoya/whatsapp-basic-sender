<script setup lang="ts">
/* eslint-disable no-unneeded-ternary */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { ref, computed, onMounted } from 'vue';
import i18n from '../i18n';
import { openNotificationWithIcon } from '../helpers';
import { getCountriesInfo } from '../services/countries.service';
import { useCountriesStore } from '@/stores/countries';

const { t } = i18n.global;
const countriesStore = useCountriesStore();

const callingCode = ref('57');
const phone = ref('');
const message = ref('');

onMounted(async () => {
  try {
    const countriesInfo = await getCountriesInfo();

    countriesStore.setCountries(countriesInfo.data.countries);
    countriesStore.updateDefaultUserLocation({
      countryCode: countriesInfo.data.defaultCountryCode,
      countryCallingCode: countriesInfo.data.defaultCountryCallingCode
    });

    callingCode.value = countriesInfo.data.defaultCountryCallingCode;
  } catch (e) {
    console.error('Error get countries info: ', e);
  }
});

const defaultCountryCallingCodes = [
  { code: '93', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg' },
  { code: '57', flagUrl: 'https://flagcdn.com/co.svg' },
  { code: '51', flagUrl: 'https://flagcdn.com/pe.svg' },
  { code: '52', flagUrl: 'https://flagcdn.com/mx.svg' }
];

const sortCountriesArray = (countriesArray: any[]) => countriesArray.sort((a: any, b: any) => a.code - b.code);

const countryCallingCodes = computed(() =>
  countriesStore.countries.length === 0
    ? sortCountriesArray(defaultCountryCallingCodes)
    : sortCountriesArray(countriesStore.countries.map((country) => ({ code: country.callingCodes[0], flagUrl: country.flags.svg })))
);

const isValidForm = computed(() => {
  let isValid = false;
  if (callingCode.value.length > 0 && phone.value.length > 6) {
    isValid = true;
  }
  return isValid;
});

const isNumber = (evt: any) => {
  evt = evt ? evt : window.event;
  const charCode = evt.which ? evt.which : evt.keyCode;
  if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || charCode === 44) {
    evt.preventDefault();
    return;
  }
  return true;
};

const SendMessage = () => {
  if (!isValidForm.value) {
    openNotificationWithIcon('error', t('sender.msg_error_title'), t('sender.msg_error_message'));
    return;
  }

  const WS_API_URL = 'https://wa.me/';
  let finalUrl = `${WS_API_URL}${callingCode.value}${phone.value.trim()}`;
  if (message.value.length > 0) {
    finalUrl += `?text=${message.value}`;
  }
  window.open(finalUrl, '_blank');
  setTimeout(() => openNotificationWithIcon('success', t('sender.msg_success_title'), t('sender.msg_success_message')), 1000);
};
</script>

<template>
  <section>
    <header class="flex flex-col items-center">
      <div class="w-full text-center">
        <h1 class="text-3xl font-bold uppercase">{{ $t('sender.title') }}</h1>
      </div>
      <div class="w-full md:w-3/4 text-justify">
        <p class="md:text-base text-sm">
          {{ $t('sender.pharagraph_1') }}<br />
          {{ $t('sender.pharagraph_2') }}
        </p>
        <div class="text-center">
          <a-typography-text type="secondary"> {{ $t('note') }} {{ $t('sender.note') }} </a-typography-text>
        </div>
      </div>
    </header>
    <main class="mt-10 w-full flex justify-center">
      <form class="flex flex-col items-center w-full md:w-96">
        <div class="w-full">
          <a-input
            v-model:value="phone"
            type="tel"
            :maxlength="15"
            size="large"
            allow-clear
            :placeholder="$t('sender.input_phone_placeholder')"
            class="w-full flex items-center"
            @keypress="isNumber"
          >
            <template #addonBefore>
              <a-select v-model:value="callingCode" show-search class="w-28">
                <a-select-option v-for="(country, i) in countryCallingCodes" :key="i" :value="country.code">
                  <div class="flex flex-row w-full justify-center items-center">
                    <img :src="country.flagUrl" width="20" alt="country flag" class="mr-2" />
                    <span>+{{ country.code }}</span>
                  </div>
                </a-select-option>
              </a-select>
            </template>
          </a-input>
        </div>
        <div class="w-full flex justify-center mt-3">
          <a-textarea
            v-model:value="message"
            :rows="5"
            :maxlength="1000"
            show-count
            class="w-full"
            :placeholder="$t('sender.input_message_placeholder')"
          ></a-textarea>
        </div>
        <div class="w-full flex justify-center lg:justify-end mt-6">
          <a-button type="primary" class="w-full md:w-1/2" @click="SendMessage">{{ $t('sender.btn_send') }}</a-button>
        </div>
      </form>
    </main>
  </section>
</template>
