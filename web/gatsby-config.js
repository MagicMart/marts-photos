require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Mart's Photos`,
    description: `Martin Tudor's photography website`,
    author: `Martin Tudor`,
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
        watchMode: true,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}
