import * as React from "react";
import { Link, graphql } from "gatsby";
import DefaultLayout from "../layouts/default";

const CategoryPage = () => {
  return (
    <>
      <DefaultLayout>
        <h1>Category</h1>
      </DefaultLayout>
    </>
  );
};

export default CategoryPage;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
