import * as React from "react";
import { Link, graphql } from "gatsby";
import DefaultLayout from "../layouts/default";

const AuthorPage = () => {
  return (
    <>
      <DefaultLayout>
        <h1>Author</h1>
      </DefaultLayout>
    </>
  );
};

export default AuthorPage;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
