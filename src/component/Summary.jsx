import React from "react";
import styled from "styled-components";
function Summary({
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
}) {
  return (
    <StyledCard>
      <div className="details">
        <div className="flag">
          <img src={flag} alt={name} className="image" />
        </div>
        <div className="summary-details">
          <div className="container">
            <div className="info">
              <div className="name">
                <p> {name}</p>
              </div>
              <div className="native-name">
                <p>Native name: {nativeName}</p>
              </div>
              <p>Population: {population}</p>
              <div className="region">
                <p>Region: {region}</p>
              </div>
              <div className="subregion">
                <p>Subregion: {subregion}</p>
              </div>
              <p>
                <b>Capital: </b> {capital}
              </p>
            </div>
            <div className="summary">
              <p>
                {" "}
                <b>Top Level Domain :</b> {topLevelDomain}
              </p>
              <p>
                {" "}
                <b>Currency: </b> {currencies}
              </p>
              <p>
                {" "}
                <b>Languages:</b>
                {languages}
              </p>
            </div>
          </div>

          <div className="borders">
            <b>Border Countries:</b>
            {borders}
          </div>
        </div>
      </div>
    </StyledCard>
  );
}
const StyledCard = styled.div`
  .details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    margin-top: 5rem;
    .flag {
      img {
        box-shadow: 4px 4px 4px 5px var(--dark-gray);
        width: 500px;
        height: 400px;
      }
    }
    .summary-details {
      display: flex;
      flex-direction: column;
      .container {
        display: grid;
        grid-template-columns: auto auto;
        margin-top: 1rem;
        .info {
          margin: 0 2rem 1rem;
          font-size: 1.2rem;
          .name {
            font-size: 2.5rem;
            margin: 1rem 0 1rem 0;
          }
          .native-name {
            padding: 1rem 0 1rem 0;
          }
          .region {
            padding: 1rem 0 1rem 0;
          }
          .subregion {
            padding-bottom: 1rem;
          }
        }
        .summary {
          margin: 4.5rem 2rem 1rem;
          font-size: 1.2rem;
          p {
            margin-top: 1rem;
          }
        }
      }
      .borders {
        margin: 2rem 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        /* column-gap: 5px; */
        div {
          /* padding: 1.5rem 1.5rem 1.5rem 1.5rem; */
          box-shadow: 4px 4px 3px 3px var(--dark-gray);
          border-radius: 0.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 5px;
          width: 4rem;
          height: 2.5rem;
          background-color: #fff;
        }
      }
    }
  }
`;
export default Summary;
