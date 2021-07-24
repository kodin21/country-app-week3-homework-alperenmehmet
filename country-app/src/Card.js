import { useState, useMemo } from 'react';
import countryData from './CountryData';

const Card = () => {
  const [showList, setShowList] = useState(true);
  const { countryList } = countryData();
//ülkeleri ekrana bastırma işlemi
  const showCountries = useMemo(() => (
    <div>
      {countryList.map(({
        name, capital, flag, languages,
      }) => (
        <div key={name}>
          <h2>{name}</h2>
          <h3>{capital}</h3>
          <img src={flag} />
          {languages.map((language, index) => (
            <h3 key={index}>{language.name}</h3>
          ))}
        </div>
      ))}
    </div>
  ), [countryList]);
//konuşulan dil istatistikleri
  const showLanguages = useMemo(() => {
    const spokenLang = countryList.map(({ languages }) => (
      languages.map((language) => language.name)
    )).join(',').split(',').reduce((obj, lang) => {
      obj[lang] = (obj[lang] || 0) + 1; 
      return obj;
    }, {});
    return;
  }, [countryList]);
// buttonlar
  return (
    <div>
      <div>
        <button onClick={() => { 
            setShowList(true); 
            }}>
                Country List
        </button>
        <button onClick={() => {
            setShowList(false); 
            }}>
                Statistic
        </button>
      </div>
      {showList ? showCountries : showLanguages}
    </div>
  );
};

export default Card;