import * as React from "react";
import { Link, graphql } from "gatsby";
import DefaultLayout from "../layouts/default";

const TagPage = () => {
  return (
    <>
      <DefaultLayout>
        <h1>Tag</h1>
      </DefaultLayout>
    </>
  );
};

export default TagPage;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
