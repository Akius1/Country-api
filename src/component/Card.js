import React from "react";
import styled from "styled-components";

function Card({ flag, name, population, region, capital }) {
  return (
    <StyledCard>
      <div className="details">
        <div className="flag">
          <img src={flag} className="image" />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </div>
    </StyledCard>
  );
}
const StyledCard = styled.div`
  .details {
    display: flex;
    justify-content: space-around;
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
    }
  }
`;
export default Card;
