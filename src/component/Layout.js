import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <StyledHeader>
        <div className="header">
          <div className="text">Where in the World?</div>
          <div className="mode">Dark mode</div>
        </div>
      </StyledHeader>
      <StyledBody>
        <div className="body-children">{children}</div>
      </StyledBody>
    </>
  );
};
const StyledHeader = styled.div`
  box-shadow: 4px 6px 6px 5px var(--dark-gray);
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 3rem;
    background: var(--white-color);
    align-items: center;
    margin: auto;
    .text {
      margin: 0 5rem;
    }
    .mode {
      margin-right: 5rem;
    }
  }
`;

const StyledBody = styled.div`
  background: var(--very-light-gray);
  height: 100%;
  width: 100%;
`;

export default Layout;
