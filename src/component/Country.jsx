import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Summary from "./Summary";
import { withRouter } from "react-router-dom";
//import Card from './Card'
const Country = ({ match, history }) => {
  const [country, setCountry] = useState([]);
  console.log(history);

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${match.params.country}`;

    fetch(url)
      .then((res) => res.json())
      .then((datas) => {
        setCountry(datas);
        console.log(datas);
      });
  }, [match.params.country]);
  return (
    <>
      <StyledHeader>
        <div className="header">
          <div className="text">Where in the World?</div>
          <div className="mode">Dark mode</div>
        </div>
      </StyledHeader>
      {/* {JSON.stringify(country)} */}
      <StyledCountry>
        <div className="back btn" onClick={() => history.push("/")}>
          <i class="fas fa-long-arrow-alt-left"></i> Back{" "}
        </div>
        <div className="body-children">
          {country.map(
            (
              {
                flag,
                name,
                nativeName,
                population,
                region,
                capital,
                subregion,
                topLevelDomain,
                currencies,
                languages,
                borders,
              },
              key
            ) => (
              <Summary
                key={key}
                flag={flag}
                name={name}
                nativeName={nativeName}
                population={population}
                subregion={subregion}
                region={region}
                capital={capital}
                topLevelDomain={topLevelDomain[0]}
                currencies={currencies.map((currency) => ` ${currency.name} `)}
                languages={languages.map((language) => ` ${language.name}, `)}
                borders={borders.map((border) => (
                  <div key={border}>{border}</div>
                ))}
              />
            )
          )}
        </div>
      </StyledCountry>
    </>
  );
};
const StyledCountry = styled.div`
  margin: 5rem;
`;
const StyledHeader = styled.div`
  box-shadow: 4px 6px 6px 5px var(--dark-gray);
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 3rem;
    background: var(--white-color);
    align-items: center;
    margin: auto;
    .text {
      margin: 0 5rem;
    }
    .mode {
      margin-right: 5rem;
    }
  }
`;

export default withRouter(Country);
