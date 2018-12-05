import React from 'react'
import { graphql, Link } from 'gatsby'

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.ms_date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Link to={'blog/'}>Back</Link>
      </div>
    </div>
  )
}

export const query = graphql`
  query BlogDatabySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        ms_date
      }
    }
  }
`
