import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout/layout'

class Album extends Component {
  render() {
    let albums = this.props.data.albums.edges
    return (
      <Layout>
        {albums.map(({ node }, index) => (
          <div key={index}>
            <Link to={`album${node.slug}`}>
              <h3>{node.title}</h3>
            </Link>
            <p>{node.description}</p>
          </div>
        ))}
      </Layout>
    )
  }
}

export default Album

export const query = graphql`
  query {
    albums: allAlbumsJson {
      edges {
        node {
          title
          description
          slug
        }
      }
    }
  }
`
