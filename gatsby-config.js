module.exports = {
  siteMetadata: {
    // basic
    pathPrefix: '/',
    siteUrl: 'http://localhost:8000', 
    siteLanguage: 'en',
    author: 'Metin Senturk',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna 
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
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
      github: "metinsenturk"
    },
    googleAnalyticsId: '',
    sourceUrl: ''

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
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `album`,
        path: `${__dirname}/content/album`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
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
        icon: 'src/assets/gatsby-icon.png', 
      },
    },
  ],
}
