import React from "react";
import styled from "styled-components";

const DropDownForm = ({ handleOnClick }) => {
  return (
    <StyledDropdown>
      <div className="drop-down">
        <select
          name="Filter By region"
          id="region"
          className="items"
          onChange={handleOnClick}
        >
          <option value="">Filter By all</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="America">America</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </StyledDropdown>
  );
};
const StyledDropdown = styled.div`
  margin: 1rem 1rem;
  .items {
    display: inline;
    border: 1px solid #bbb;
    border-radius: 3px;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 5px 8px;
    cursor: pointer;
    text-decoration: none;
  }
  .items:hover {
    background-color: #f1f1f1;
  }
`;

export default DropDownForm;
