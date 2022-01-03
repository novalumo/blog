import * as React from "react";
import styled from "@emotion/styled";

const FooterComponent = styled.footer`
  background: #fafafa;
  border-top: solid 1px #eaeaea;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.85rem;
  padding: 1rem;
  margin: 3rem 0 0 0;

  a {
    color: inherit;
    transition: opacity ease 0.1s;
    &:hover {
      opacity: 0.5;
    }
  }

  small {
    color: #333;
    font-size: 0.75rem;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterComponent>
        <small>
          <a href="#">Corporate Website</a>
        </small>
        <small>&copy; 2022 Novalumo Japan G.K.</small>
      </FooterComponent>
      <div></div>
    </>
  );
};

export default Footer;
