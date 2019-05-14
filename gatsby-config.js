module.exports = {
  siteMetadata: {
    // basic
    pathPrefix: '/',
    siteUrl: 'http://localhost:8000', 
    siteLanguage: 'en',
    author: 'Metin Senturk',
    title: "MS",
    metaDefault: {
      title: 'MS',
      description: '',
      banner: 'gatsby-icon.png',
    },
    metaBlog: {
      title: 'My Blog',
      description: '',
      banner: 'gatsby-icon.png',
    },
    metaAlbum: {
      title: 'Albums',
      description: '',
      banner: 'gatsby-icon.png',
    },
    // jsonld
    titleAlt: '',
    headline: '',
    favicon: '', 
    shortName: '', // shortname for manifest. MUST be shorter than 12 characters
    author: 'Metin Senturk', // Author for schemaORGJSONLD
    themeColor: '#3D63AE',
    backgroundColor: '#EBEDF2',
    
    // fb
    ogLanguage: 'en_US',
    
    // other
    social: {
      facebook: "mtnSntrk",
      twitter: "@machinmetosh",
      linkedin: "metinsenturk",
      telegram: "@metinsenturk",
      email: "metinsenturk@me.com",
    },
    googleAnalyticsId: ''
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `album`,
        path: `${__dirname}/src/album`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'metinsenturk.github.io',
        short_name: `Metin's Personal Blog` ,
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', 
      },
    },
  ],
}
