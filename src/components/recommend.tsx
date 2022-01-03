import * as React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";

const Card = styled.div`
  background: #fafafa;
  border: solid 1px #eaeaea;
  color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.85rem;
  padding: 1rem;
  /* margin: 0 1rem 0 1rem; */
  width: 50%;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Recommend = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(filter: { status: { eq: "publish" } }) {
        edges {
          previous {
            title
            slug
          }
          next {
            title
            slug
          }
        }
      }
    }
  `);
  const fetchedData = data.allWpPost.edges;
  return (
    <>
      <p>Recommendation</p>
      <FlexBox>
        <Card>＜ {fetchedData}</Card>
        <Card>Article ＞</Card>
      </FlexBox>
    </>
  );
};

export default Recommend;
