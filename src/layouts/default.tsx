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
  align-items: start;
  margin: 5rem auto 0 auto;
  padding: 0 1rem 0 1rem;
  min-height: 80vh;
  max-width: 780px;

  /* @media screen and (max-width: 640px) {
    margin: 5rem 1rem 0 1rem;
  } */
`;

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          @import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Lato:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap);
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
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};

export default DefaultLayout;
