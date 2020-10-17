import React from "react";

const Form = ({ handleOnChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Country"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Form;
