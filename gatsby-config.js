module.exports = {
  siteMetadata: {
    title: 'MS',
    socialConfig: {
      facebook: "https://facebook.com/mtnSntrk",
      twitter: "https://twitter.com/machinmetosh",
      linkedin: "https://linkedin.com/in/metinsenturk",
      telegram: "@metinsenturk",
      email: "metinsenturk@me.com",
    }
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
