const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      //basePath: 'src/blog/',
    })

    createNodeField({
      node,
      name: `slug`,
      value: relativeFilePath,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const albumPostTemplate = path.resolve('./src/templates/album-post.js')

  return graphql(`
  {
    posts: allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
    albums: allAlbumsJson {
      edges {
        node {
          slug
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // creating dynamic pages for blog posts
    const posts = result.data.posts.edges
    posts.forEach(({ node }) => {
      createPage({
        path: `blog${node.fields.slug}`,
        component: blogPostTemplate,
        context: { slug: node.fields.slug },
      })
    })

    // creating dynamic pages for album posts
    const albums = result.data.albums.edges
    albums.forEach(({ node }) => {
      createPage({
        path: `album${node.slug}`,
        component: albumPostTemplate,
        context: { slug: node.slug, relativeDirectory: node.slug.replace(/[/]/g, '') },
      })
    })
  })
}