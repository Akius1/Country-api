import React from "react";
import styled from "styled-components";
//import { withRouter } from "react-router-dom";

function Card({ flag, name, population, region, capital }) {
  return (
    <StyledCard>
      <div className="details">
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
          <p>Capital: {capital}</p>
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
export default Card;
