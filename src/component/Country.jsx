import React, {useState, useEffect} from 'react'
import style from 'styled-components'
import Summary from './Summary';
//import Card from './Card'
const Country = ({match, history}) => {
    const [country, setCountry] = useState([]);
    console.log(match.params);
    
    useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${match.params.country}`;

      fetch(url)
      .then((res) => res.json())
      .then((datas) => {
          setCountry(datas)
          console.log(datas)
      });
    }, [match.params.country]);
    return (
        <StyledCountry>
        <div className="body-children">
            {country.map(({ flag, name, population, region, capital, subregion,topLevelDomain,currencies,languages, borders}, key) => (
            <Summary
              key={key}
              flag={flag}
              name={name}
              population={population}
              subregion={subregion}
              region={region}
              capital={capital}
              topLevelDomain={topLevelDomain[0]}
              currencies={currencies.map(currency => (` ${currency.name} `))}
              languages = {languages.map(language => (` ${language.name}, `))}
              borders={borders.map(border => (<div key={border} >{border}</div>),)}
              />
          ))}
        </div>
      </StyledCountry>
    )
}
const StyledCountry = style.div`

`

export default Country;
