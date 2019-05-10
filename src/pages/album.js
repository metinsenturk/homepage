import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Box, Anchor, Heading, Text } from 'grommet'
import Layout from '../components/layout/layout'

// TODO: check this library again.
// eslint-disable-next-line
import ReactPhotoGrid from 'react-photo-grid'

export default class Album extends Component {
  render() {
    const albums = this.props.data.albums.edges
    const images = this.props.data.images.edges

    return (
      <Layout>
        <Box gap="medium" wrap={false} fill={true}>
          {albums.map((album, index) => {
            const album_images = images.filter(image => album.node.slug.replace(/[/]/g, '') === image.node.relativeDirectory
            )

            return (
              <Box key={index} elevation="small">
                <Box direction="row" overflow="hidden">
                  {album_images.map(({ node }, index) => {
                    return <Box><Img fixed={node.childImageSharp.fixed}></Img></Box>
                  })}
                </Box>
                <Box pad="medium">
                  <Anchor as={Link} to={`album${album.node.slug}`}>
                    <Heading level="4" margin={{ vertical: "small" }}>{album.node.title}</Heading>
                  </Anchor>
                  <Text>{album.node.description}</Text>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Layout>
    )
  }
}

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
            fixed(height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
