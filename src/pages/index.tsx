import * as React from "react";
import { graphql, Link } from "gatsby";
import DefaultLayout from "../layouts/default";
import styled from "@emotion/styled";
import SEO from "../components/seo";

const Article = styled.article`
  background: #fff;
  border: solid 1px #ccc;
  padding: 1rem;
  margin: 0 0 1rem 0;

  h1 {
    font-size: 1.75rem;
  }
`;

const IndexPage = ({ data }) => {
  const articles = data.allWpPost.edges;
  return (
    <>
      <SEO></SEO>
      <DefaultLayout>
        {articles.map(({ node }) => {
          return (
            <Link
              to={`/${node.dateYear}/${node.dateMonth}/${node.slug}`}
              key={node.id}
            >
              <Article>
                <h1>{node.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </Article>
            </Link>
          );
        })}
      </DefaultLayout>
    </>
  );
};

export const query = graphql`
  {
    allWpPost(filter: { status: { eq: "publish" } }) {
      edges {
        node {
          id
          title
          content
          excerpt
          dateYear: date(formatString: "YYYY")
          dateMonth: date(formatString: "MM")
          slug
          status
        }
      }
    }
  }
`;

export default IndexPage;
