require('dotenv').config()

module.exports = {
  siteMetadata: {
    defaultTitle: `Mart's Photos`,
    titleTemplate: `%s - Mart's Photos`,
    defaultDescription: `A demo photography portfolio`,
    siteUrl: `https://photos.martintudor.com`,
    defaultImage: `/martsphotos.jpg`,
    twitterUsername: `@martintudoruk`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ufj478tq',
        dataset: 'production',
        watchMode: process.env.NODE_ENV === 'development' ? true : false,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}
