import React from "react";
import DefaultLayout from "../layouts/default";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import SEO from "../components/seo";
import Recommend from "../components/recommend";

const Article = styled.article`
  h1 {
    margin: 1rem 0 1rem 0;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.15;
  }
  .category {
    background: #0099ff;
    color: #fff;
    padding: 0.25rem 0.5rem;
    margin: 0 0.5rem 0 0;
    border-radius: 1.5rem;
    font-size: 0.75rem;
    font-weight: bold;
    display: inline-block;
  }
  .tags {
    display: block;

    .tag {
      background: #505050;
      color: #fff;
      padding: 0.25rem 0.5rem;
      margin: 0 0.25rem 0 0;
      border-radius: 1.5rem;
      font-size: 0.85rem;
      font-weight: bold;
      display: inline-block;
    }
  }
`;

const Author = styled.p`
  display: inline-block;
  line-height: 1;
  font-weight: bold;
  color: #555;
  margin: 0 0.5rem 0 0;
`;

const PublishDate = styled.p`
  display: inline-block;
  line-height: 1;
  color: #555;
`;

const HeaderDiv = styled.hr`
  border: solid 1px #ccc;
  margin: 1rem 0 1rem 0;
`;

const ContentBody = styled.div`
  margin: 1rem 0 1rem 0;
  width: 100%;
  max-width: 720px;
  box-sizing: border-box;
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.25;
    margin: 0 0 1rem 0;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  p {
    font-size: 1.05rem;
    line-height: 1.5;
    margin: 0 0 1rem 0;
  }
  pre {
    background: #353535;
    color: #fff;
    margin: 0 0 1rem 0;
    max-width: 100%;
    display: block;
    overflow-x: scroll;
  }
  code {
    font-family: monospace;
    font-size: 1rem;
    display: block;
    padding: 0.5rem;
    max-width: 100%;
    overflow-x: scroll;
  }
  .wp-block-image {
    img {
      margin: 0 0 1rem 0;
      max-width: 100%;
      pointer-events: none;
    }
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

export default ({ data }) => {
  const post = data.allWpPost.edges[0].node;
  return (
    <>
      <SEO title={post.title}></SEO>
      <DefaultLayout>
        <Article>
          {post.categories.nodes.map((category) => {
            return (
              <span key={category.id} className="category">
                {category.name}
              </span>
            );
          })}
          <h1>{post.title}</h1>
          <Author>{post.author.node.name}</Author>
          <PublishDate>
            {`${getEnglishMonth(post.month)} ${post.day}, ${post.year}`}
          </PublishDate>
          <HeaderDiv />
          <ContentBody dangerouslySetInnerHTML={{ __html: post.content }} />
          <section className="tags">
            {post.tags.nodes.map((tag) => {
              return (
                <span key={tag.id} className="tag">
                  #{tag.name}
                </span>
              );
            })}
          </section>
        </Article>
        {/* <Recommend /> */}
      </DefaultLayout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          content
          slug
          year: date(formatString: "YYYY")
          month: date(formatString: "M")
          day: date(formatString: "D")
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
