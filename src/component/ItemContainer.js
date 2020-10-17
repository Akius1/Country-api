import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../component/Card";
import Form from "./Form";
import DropDownForm from "../component/DropDownForm";
const ItemContainer = () => {
  let [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  function handleChange(e) {
    return setSearch(e.target.value);
  }

  const url = "https://restcountries.eu/rest/v2/all";

  useEffect(() => {
    window
      .fetch(url)
      .then((res) => res.json())
      .then((datas) => {
        setCountries(datas);
      });
  }, []);

  countries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <StyledAll>
      <div>
        <Form handleOnChange={handleChange} />
        <DropDownForm />
      </div>

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
