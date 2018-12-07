import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout/layout'

class Blog extends Component {
  render() {
    let posts = this.props.data.posts.edges
    
    return (
      <Layout>
        {posts.map(({ node }, index) => (
          <div key={index}>
            <Link to={`blog/${node.fields.slug}`}><h3>{node.frontmatter.title}</h3></Link>
            <p>{node.frontmatter.description}</p>
          </div>
        ))}
      </Layout>
    )
  }
}

export default Blog

export const query = graphql`
query {
    posts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            ms_date
          }
          fields {
            slug
          }
        }
        
      }
    }
  }
`
