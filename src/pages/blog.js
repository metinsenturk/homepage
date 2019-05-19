import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Heading, Box, Text } from 'grommet'
import SEO from '../components/seo/seo';
import { CardLink } from '../components/internal/internal'

class Blog extends Component {
  render() {
    // console.log(this.props.data)
    let meta = this.props.data.site.siteMetadata.metaBlog
    let posts = this.props.data.allMarkdownRemark.edges

    return (
      <>
        <SEO
          pathname="/blog/"
          title={meta.title}
          desc={meta.description}
        />
        <Box align="center" gap="medium">

          {posts.map(({ node }, index) => (
            <Box as="article" key={index} width="large" elevation="small">
              <CardLink to={`/blog${node.fields.slug}`}>
                {node.frontmatter.cover !== null ? (
                  <Box height="small" margin={{ horizontal: "xxsmall" }} border={{ side: "bottom", color: "gray" }}>
                    <Img fluid={node.frontmatter.cover.childImageSharp.fluid} />
                  </Box>
                ) : (
                    <></>
                  )}
                <Box pad="medium">
                  <Box direction="row" justify="between" align="center">
                    <Heading level="5" margin={{ vertical: "xsmall" }}>{node.frontmatter.title}</Heading>
                    <Text as="span">{node.frontmatter.date}</Text>
                  </Box>
                  <Text>{node.frontmatter.description}</Text>
                </Box>
              </CardLink>
            </Box>
          ))}
        </Box>
      </>
    )
  }
}

export default Blog

export const query = graphql`
query {
  site {
    siteMetadata {
      metaBlog {
        title
        description
        banner
      }
    }
  }
  allMarkdownRemark(
    filter: {fields: {slug: {ne: "/about-me/"}}},
    sort: { fields: [frontmatter___date], order: DESC}
  ) {
    edges {
      node {
        frontmatter {
          title
          description
          date
          tags
          cover {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
}
`
