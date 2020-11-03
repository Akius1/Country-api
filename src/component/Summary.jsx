import React from "react";
import styled from "styled-components";

function Summary({ flag, name, population, region, capital, subregion,topLevelDomain,currencies,languages, borders}) {
  return (
    <StyledCard>
      <div className="details" >
        <div className="flag">
          <img src={flag} alt={name} className="image" />
        </div>
        <div className="info">
          <div className="name">
            <p>{name}</p>
          </div>
          <p>Population: {population}</p>
          <div className="region">
            <p>Region: {region}</p>
          </div>
        <div className="subregion">
            <p>Subregion: {subregion}</p>
          </div>
          <p>Capital: {capital}</p>
        </div>
        <div className="summary">
        <p>
            {" "}
            <b>Top Level Domain :</b> {topLevelDomain}
        </p>
        <p>
            {" "}
            <b>Currency:</b> {currencies}
        </p>
        <p>
            {" "}
            <b>Languages:</b>{languages}
        </p>
        </div>
        <div className="borders">
            <b>Border Countries:</b>{borders}    
        </div>      
      </div>
    </StyledCard>
  );
}
const StyledCard = styled.div`
  .details {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin: 1rem 1rem;
    .flag {
      height: 200px;
      width: 300px;
      .image {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      background: var(--white-color);
      padding: 2rem;
      .name {
        margin-bottom: 2rem;
      }
      .region {
        margin: 1rem 0 1rem 0;
      }
    }
  }
`;
export default Summary;
