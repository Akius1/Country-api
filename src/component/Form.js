import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faSearch} />;

const Form = ({ handleOnChange }) => {
  return (
    <StyledInput>
      <div className="inputs">
        <div className="icon">{element}</div>
        <input
          type="text"
          placeholder="      Enter a Country"
          onChange={handleOnChange}
        />
      </div>
    </StyledInput>
  );
};
const StyledInput = styled.div`
  margin: 1rem 1rem;

  .inputs {
    display: flex;

    input {
      width: 300px;
      display: inline;
      border: 1px solid #bbb;
      border-radius: 3px;
      padding: 5px 8px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      text-decoration: none;
    }
    input:hover {
      background-color: #f1f1f1;
    }
    .icon {
      position: absolute;
      padding: 5px 8px;
      color: var(--dark-gray);
      opacity: 0.2;
      margin-right: -20px;
    }
  }
`;

export default Form;
