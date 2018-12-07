/* eslint-disable */ 
import React from 'react'
import { graphql, Link } from 'gatsby'
import Gallery from 'react-photo-gallery'

export default ({ data }) => {
  console.log(data)
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
    <div>
      <div>
        <Link to={'album/'}>Back</Link>
        <h1>{title}</h1>
        <h3>{created}</h3>
        <h5>{author}</h5>
        <p>{description}</p>
        <div style={{ alignItems: "center" }}>
        <Gallery photos={photos} direction="column" />
        </div>
      </div>
    </div>
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
