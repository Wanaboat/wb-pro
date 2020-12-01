module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: process.env.SITE_TITLE, // Navigation and Site Title
  titleAlt: process.env.SITE_SUB_TITLE, // Title for JSONLD
  description: 'Les sites des pros Wanaboat.fr',
  headline: 'Un site malin et performant pour les professionnels Wanaboat.fr', // Headline for schema.org JSONLD
  // url: process.env.SITE_URL, // Domain of your site. No trailing slash!
  url:'https://localhost:8000',
  siteLanguage: 'fr', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'fr_FR', // Facebook Language

  // JSONLD / Manifest
  favicon: `static/favicons/favicon-${process.env.FAVICON}.png`, // Used for manifest favicon generation
  shortName: process.env.SITE_SHORT_TITLE, // shortname for manifest. MUST be shorter than 12 characters
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@wanaboat', // Twitter Username
  facebook: 'wanaboat.fr', // Facebook Site Name
  googleAnalyticsID: '',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
