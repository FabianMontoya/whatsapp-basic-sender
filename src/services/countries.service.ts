import axios from 'axios';

export default {};

export const getCountriesInfo = () => {
  return axios.get('https://simple-sender-api-countries.herokuapp.com/api/v1/countries');
};
