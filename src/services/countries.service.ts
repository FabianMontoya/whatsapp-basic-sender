import axios from 'axios';

const DEFAULT_ENDPOINT = 'https://fmontoya-api-countries.onrender.com/api/v1';

export default {};

export const getCountriesInfo = () => {
  return axios.get(`${DEFAULT_ENDPOINT}/countries`);
};
