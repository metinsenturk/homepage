import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Box, Heading, Text } from 'grommet'
import SEO from '../components/seo/seo';
import PhotoGrid from '../components/photo-grid/photo-grid'
import { CardLink } from '../components/internal/internal'
// TODO: check this library again.
// eslint-disable-next-line
import ReactPhotoGrid from 'react-photo-grid'

export default class Album extends Component {
  render() {
    const meta = this.props.data.site.siteMetadata.metaAlbum
    const albums = this.props.data.albums.edges
    const images = this.props.data.images.edges

    return (
      <>
       <SEO
          pathname="/album/"
          title={meta.title}
          desc={meta.description}
        />
        <Box gap="medium" wrap={false} fill={true}>
          {albums.map((album, index) => {
            const album_images = images.filter(image => album.node.slug.replace(/[/]/g, '') === image.node.relativeDirectory
            )
            return (
              <CardLink key={index} to={`/album${album.node.slug}`}>
                <Box elevation="small">
                  <PhotoGrid imagesList={album_images} />
                  <Box pad="medium">
                    <Box direction="row" justify="between" align="center">
                      <Heading level="3" margin={{ vertical: "small" }}>{album.node.title}</Heading>
                      <Text>{album.node.created}</Text>
                    </Box>
                    <Text>{album.node.description}</Text>
                  </Box>
                </Box>
              </CardLink>
            )
          })}
        </Box>
      </>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        metaAlbum {
          title
          description
          banner
        }
      }
    }
    albums: allAlbumsJson (sort: { fields: [created], order: DESC}) {
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
