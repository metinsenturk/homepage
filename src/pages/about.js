import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Heading, Box, Text, Markdown, Paragraph } from 'grommet'
import { Image } from 'grommet'
import SEO from '../components/seo/seo';

export default ({ data }) => {
  const about = data.about.edges[0].node
  //console.log(about)

  const overrides = {
    img: { component: Image, props: { fit: "cover" } },
    pre: { props: { size: "large" } },
    p: { component: Paragraph, props: { size: "medium" } }
  }

  return (
    <>
      <SEO
        pathname="/about/"
        title="About myself."
        desc=""
      />
      <Box basis="large">
        <Box pad={{ horizontal: "xsmall" }}>
          <Img fluid={about.frontmatter.cover.childImageSharp.fluid} />
        </Box>
        <Box as="article" gap="medium" elevation="xsmall" pad={{ horizontal: "medium", vertical: "xsmall" }}>
          <Heading> {about.frontmatter.title}</Heading>
          <Text>{about.frontmatter.description}</Text>
          <Markdown components={overrides}>
            {about.html}
          </Markdown>
        </Box>
      </Box>
    </>
  )
}

export const query = graphql`
query {
    about: allMarkdownRemark(filter: {fields: {slug: {eq: "/about-me/"}}}) {
        edges {
          node {
            html
            rawMarkdownBody
            frontmatter {
              title
              description
              date
              cover {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
  }
`