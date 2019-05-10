/* eslint-disable */ 
import React from 'react'
import { graphql, Link } from 'gatsby'
import Gallery from 'react-photo-gallery'
import { Box, Markdown, Heading, Text, Anchor } from "grommet"
import { Previous } from "grommet-icons"
import Layout from '../components/layout/layout'
import ShareVia from '../components/share/share'

export default ({ data }) => {
  const {
    id,
    title,
    description,
    author,
    slug,
    created,
    updated,
  } = data.album
  const images = data.images.edges

  const photos = []
  images.map(({ node }, index) => photos.push({
    src: node.childImageSharp.fluid.src,
    key: index,
    width: 4,
    height: 3,
  }))

  console.log(photos)
  return (
    <Layout>
      <Box basis="large">
        <Box pad="xsmall" justify="between" align="end" direction="row">
          <ShareVia />
          <Anchor as={Link} to='album/'>
            <Box direction="row" gap="xsmall">
              <Previous />
              <Text>Back</Text>
            </Box>
          </Anchor>
        </Box>
        <Box as="article" elevation="xsmall" pad={{ horizontal: "medium", vertical: "xsmall" }}>
          <Heading>{title}</Heading>
          <Text>{created}</Text>
          <Text>{author}</Text>
          <Text>{description}</Text>
          <Gallery photos={photos} direction="column" />
        </Box>
      </Box>
    </Layout>    
  )
}

export const query = graphql`
  query AlbumDatabySlug($slug: String!, $relativeDirectory: String!) {
    album: albumsJson(slug: { eq: $slug }) {
      id
      title
      description
      imagesPath
      author
      slug
      created
      updated
    }
    images: allFile(
      filter: {
        extension: { regex: "/(png|jpeg|jpg)/" }
        relativeDirectory: { eq: $relativeDirectory }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
