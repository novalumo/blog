module.exports = {
  siteMetadata: {
    siteUrl: "https://blog.novaalumo.llc",
    title: "Novalumo Blog",
    description: "Novalumo合同会社のブログ",
    social: {
      twitter: "novalumo",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://localhost:8888/wordpress/graphql",
      },
    },
    "gatsby-plugin-emotion",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
