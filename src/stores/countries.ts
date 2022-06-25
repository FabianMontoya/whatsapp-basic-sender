import { defineStore } from 'pinia';
import type { CountryDataV2, UserLocation } from '../types';

interface countriesStore {
  countries: CountryDataV2[];
  defaultUserLocation: UserLocation;
}

// eslint-disable-next-line import/prefer-default-export
export const useCountriesStore = defineStore({
  id: 'countries',
  state: (): countriesStore => ({
    countries: [],
    defaultUserLocation: {
      countryCode: 'US',
      countryCallingCode: '+1'
    }
  }),
  getters: {
    getInfoCountryByName: (state) => {
      return (countryName: string) =>
        state.countries.find((country: CountryDataV2) => country.name.toLowerCase() === countryName.toLowerCase());
    },
    getInfoCountryByCountryCode: (state) => {
      return (countryCode: string) =>
        state.countries.find((country: CountryDataV2) => country.alpha2Code.toLowerCase() === countryCode.toLowerCase());
    },
    getCountryCallingCodesByCountryCode: (state) => {
      return (countryCode: number) =>
        state.countries.find((country: CountryDataV2) => country.alpha2Code.toLowerCase() === countryCode.toString())?.callingCodes ?? [];
    },
    getInfoCountryByCallingCode: (state) => {
      return (callingCode: number) =>
        state.countries.find((country: CountryDataV2) => country.callingCodes.includes(callingCode.toString()));
    }
  },
  actions: {
    setCountries(payload: CountryDataV2[]) {
      this.countries = payload;
    },
    updateDefaultUserLocation(payload: UserLocation) {
      this.defaultUserLocation = payload;
    }
  }
});
