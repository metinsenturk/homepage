import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout/layout'

class Album extends Component {
  render() {
    const albums = this.props.data.albums.edges
    const images = this.props.data.images.edges

    return (
      <Layout>
        {albums.map(({ node }, index) => {
          const album = node
          const album_images = images.filter(
            ({ node }) =>
              album.slug.replace(/[/]/g, '') === node.relativeDirectory
          )

          return (
            <div key={index}>
              <Link to={`album${album.slug}`}>
                <h3>{album.title}</h3>
              </Link>
              <p>{album.description}</p>
              <ul style={{listStyle: "none"}}>
                {album_images.map(({ node }, index) => {
                  const image = node
                  return <li style={{display: "inline", padding: "5px"}}><Img key={index} fixed={image.childImageSharp.fixed} /></li>
                })}

              </ul>
            </div>
          )
        })}
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
    images: allFile(
      filter: {
        extension: { regex: "/(png|jpeg|jpg)/" }
        sourceInstanceName: { eq: "album" }
      }
    ) {
      edges {
        node {
          relativePath
          relativeDirectory
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
