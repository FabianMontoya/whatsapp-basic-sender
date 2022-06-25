export interface CountryCurrencyV2 {
  code: string;
  name: string;
  symbol: string;
}

export interface CountryDataV2 {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital?: string;
  altSpellings?: string[];
  subregion?: string;
  region?: string;
  population: number;
  latlng?: number[];
  demonym?: string;
  area?: number;
  timezones?: string[];
  borders?: string[];
  nativeName?: string;
  numericCode?: string;
  currencies?: CountryCurrencyV2[];
  flag: string;
  cioc?: string;
  independent: boolean;
}

export interface UserLocation {
  countryCode: string;
  countryCallingCode: string;
}
