import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import { Box, Anchor, Heading, Text } from 'grommet'
import Layout from '../components/layout/layout'
import PhotoGrid from '../components/photo-grid/photo-grid'
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
                <PhotoGrid imagesList={album_images} />
                <Box pad="medium">
                  <Box direction="row" justify="between" align="center">
                    <Anchor as={Link} to={`album${album.node.slug}`}>
                      <Heading level="4" margin={{ vertical: "small" }}>{album.node.title}</Heading>
                    </Anchor>
                    <Text>{album.node.created}</Text>
                  </Box>
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
          created
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
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
