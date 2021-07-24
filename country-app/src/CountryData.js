import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryData = () => {
  const [countryList, setCountryList] = useState([]);
//axios kullanarak datayı alma işlemi
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountryList(response.data);
      });
  }, []);

  return {countryList};
};

export default CountryData;