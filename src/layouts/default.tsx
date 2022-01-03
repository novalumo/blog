import * as React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import Header from "../components/header";
import Footer from "../components/footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 5rem 0 0 0;
  min-height: 80vh;

  @media screen and (max-width: 640px) {
    margin: 5rem 1rem 0 1rem;
  }
`;

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          * {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
          body {
            background: #fafafa;
            font-family: Lato, "Noto Sans JP", "ヒラギノ角ゴ ProN",
              "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;
          }
          a {
            text-decoration: none;
          }
        `}
      />
      <Header />
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
      <Footer />
    </>
  );
};

export default DefaultLayout;
