import React from 'react'
import { graphql, Link } from 'gatsby'

export default ({ data }) => {
    const { id, title, description, author, slug, created, updated } = data.albumsJson
    return (
      <div>
        <div>
          <h1>{title}</h1>
          <h3>{created}</h3>
          <h5>{author}</h5>
          <p>{description}</p>
          <Link to={'album/'}>Back</Link>
        </div>
      </div>
    )
}

export const query = graphql`
    query AlbumDatabySlug($slug: String!) {
        albumsJson(slug: { eq: $slug }) {
        id
        title
        description
        imagesPath
        author
        slug
        created
        updated
        }
    }
`