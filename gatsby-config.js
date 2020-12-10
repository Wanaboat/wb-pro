require('dotenv').config({
  path: `.env`,
})

const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer')
const website = require('./config/website')
const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    // {
    //   resolve: "gatsby-plugin-chakra-ui",
    //   options: {
    //     isResettingCSS: true,
    //     isUsingColorMode: false,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro\:300,400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'sailfast',
        // repositoryName: `${process.env.PRISMIC_REPOSITORY_NAME}`,
        // accessToken: `${process.env.API_KEY}`,
        // Get the correct URLs in blog posts
        // linkResolver: () => (post) => `/${post.uid}`,
        // PrismJS highlighting for labels and slices
        htmlSerializer: () => prismicHtmlSerializer,
        // Remove this config option if you only have one language in your Prismic repository
        lang: 'fr-fr',
        schemas: {
          // homepage: require('./src/schemas/homepage.json'),
          page: require('./src/schemas/page.json'),
          // product: require('./src/schemas/product.json'),
          // post: require('./src/schemas/post.json'),
          nav: require('./src/schemas/nav.json'),
          settings: require('./src/schemas/settings.json'),
          equipementsSheet: require('./src/schemas/equipements_sheet.json'),
        },
      },
    },
    'gatsby-plugin-lodash',
    'gatsby-transformer-sharp',
    {
      resolve:'gatsby-plugin-sharp',
      options: {
        icon: website.favicon
      }
    },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: website.googleAnalyticsID,
    //   },
    // },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon,
        start_url: '/'
      },
    },
    // Must be placed at the end
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
