const siteMetadataDefaults = {
  title: "",
  description: "",
  author: "",
}

const siteMetadata = Object.assign(
  siteMetadataDefaults,
  require("./src/core/metadata")
)

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Edu - Alex V. Nilsson`,
        short_name: `alexvnilsson-edu`,
        start_url: `/`,
        background_color: `#1A1A1A`,
        theme_color: `#1A1A1A`,
        display: `browser`,
        icon: `src/images/core/brand/brand-bookmark.png`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
