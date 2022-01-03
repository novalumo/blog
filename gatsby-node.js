const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allWpPost(filter: { status: { eq: "publish" } }) {
        edges {
          node {
            title
            excerpt
            slug
            date(formatString: "MM-DD-YYYY")
            dateYear: date(formatString: "YYYY")
            dateMonth: date(formatString: "MM")
            author {
              node {
                name
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allWpPost.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.dateYear}/${node.dateMonth}/${node.slug}`,
        component: path.resolve(`./src/templates/blog.tsx`),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
