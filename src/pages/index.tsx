import * as React from "react";
import { graphql, Link } from "gatsby";
import DefaultLayout from "../layouts/default";
import styled from "@emotion/styled";
import SEO from "../components/seo";

const List = styled.li`
  a {
    color: inherit;
  }
`;

const Article = styled.article`
  background: #fff;
  border: solid 1px #eee;
  padding: 1rem;
  margin: 0 0 1rem 0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: opacity ease 0.1s;

  &:hover {
    opacity: 0.75;
  }

  div {
    width: 50%;
    img {
      width: 100%;
      padding: 0 1rem 0 0;
    }
  }

  h1 {
    color: inherit;
    font-size: 1.75rem;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
  }

  @media screen and (max-width: 680px) {
    display: flex;
    flex-direction: column;
    div {
      width: 100%;

      img {
        padding: 0 0 1rem 0;
      }
    }
  }
`;

const DateAuthor = styled.p`
  color: #555;
  font-weight: bold;
  margin: 0 0 0.75rem 0;
`;

const Excerpt = styled.div`
  width: 100% !important;
  p {
    color: #777;
    line-height: 1.25;
    margin: 0;
  }
`;

const Heading = styled.div`
  font-weight: bold;
  margin: 0 0 2rem 0.5rem;
  h1 {
    font-size: 2.5rem;
    margin: 0 0 0.25rem 0;
  }
  p {
    font-size: 1.25rem;
    margin: 0;
  }
`;

const getEnglishMonth = (month) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[month - 1];
};

const IndexPage = ({ data }) => {
  const articles = data.allWpPost.edges;
  return (
    <>
      <SEO></SEO>
      <DefaultLayout>
        <Heading>
          <h1>Latest Post</h1>
          <p>最新の記事</p>
        </Heading>
        <ul>
          {articles.map(({ node }) => {
            return (
              <List key={node.id}>
                <Link to={`/${node.dateYear}/${node.dateMonth}/${node.slug}`}>
                  <Article>
                    <div>
                      <img
                        src="https://www.novalumo.llc/img/backgrounds/bg.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h1>{node.title}</h1>
                      <DateAuthor>
                        {node.author.node.name} |{" "}
                        {`${getEnglishMonth(node.month)} ${node.day}, ${
                          node.year
                        }`}
                      </DateAuthor>

                      <Excerpt
                        dangerouslySetInnerHTML={{ __html: node.excerpt }}
                      />
                    </div>
                  </Article>
                </Link>
              </List>
            );
          })}
        </ul>
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
          year: date(formatString: "YYYY")
          month: date(formatString: "M")
          day: date(formatString: "D")
          slug
          status
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              id
              name
            }
          }
          tags {
            nodes {
              id
              name
              slug
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
