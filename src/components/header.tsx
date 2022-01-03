import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const HeaderComponent = styled.header`
  backdrop-filter: saturate(180%) blur(11px);
  background-color: rgba(255, 255, 255, 0.72);
  border-bottom: solid 1px #eee;
  color: #000;
  position: fixed;
  padding: 0.75rem 1rem;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-direction: row;
    li:not(:first-of-type) {
      margin: 0 0 0 1rem;
    }
  }

  a {
    color: inherit;
    transition: opacity ease 0.1s;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderComponent>
        <Link to="/">
          <h1>Novalumo Blog</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">Latest</Link>
          </li>
          <li>
            <Link to="/">Categories</Link>
          </li>
          <li>
            <Link to="/">Tags</Link>
          </li>
        </ul>
      </HeaderComponent>
      <div></div>
    </>
  );
};

export default Header;
