import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../component/Card";
const ItemContainer = () => {
  const [countries, setCountries] = useState([]);
  const url = "https://restcountries.eu/rest/v2/all";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas[0]);
        setCountries(datas);
      });
  }, []);
  return (
    <StyledAll>
      <div className="body-children">
        {countries.map(({ flag, name, population, region, capital }, key) => (
          <Card
            key={key}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        ))}
      </div>
    </StyledAll>
  );
};

const StyledAll = styled.div`
  .body-children {
     width: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between; 
  }
    
    
  }
`;

export default ItemContainer;
