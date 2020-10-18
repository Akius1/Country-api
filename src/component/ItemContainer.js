import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../component/Card";
import Form from "./Form";
import DropDownForm from "../component/DropDownForm";

const ItemContainer = () => {
  let [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilter] = useState("");

  function handleChange(e) {
    return setSearch(e.target.value);
  }
  function handleOnClick(e) {
    console.log(e.target.value);
    return setFilter(e.target.value);
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
    countries = countries.filter((country) => {
        if (filters === "") {
            return country;
        } else {
           return country.region.includes(filters);
        }
        
    });
  return (
    <>
      <StyledSearch>
        <div className="searchIt">
          <Form handleOnChange={handleChange} />
          <DropDownForm handleOnClick={handleOnClick} />
        </div>
      </StyledSearch>

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
    </>
  );
};
const StyledSearch = styled.div`
  .searchIt {
    display: flex;
    width: 100%;
    height: 3rem;
    justify-content: space-between;
    align-items: center;
  }
`;
const StyledAll = styled.div`
  .body-children {
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between; 
    .search{
        display:flex;
        width: 100%;
        justify-content: space-evenly;
        flex-direction: row;
    }
  } 
    
  }
`;

export default ItemContainer;
