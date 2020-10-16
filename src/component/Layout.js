import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <StyledHeader>
        <div className="header">
          <div className="text">Where in the World</div>
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
  height: 3rem;
  margin: 1.5rem 0;
  background: var(--white-color);
  box-shadow: 3px 3px 5px 6px var(--dark-gray);
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const StyledBody = styled.div`
  background: var(--very-light-gray);
  height: 100%;
  width: 100%;
`;

export default Layout;
