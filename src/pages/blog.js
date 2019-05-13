import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Heading, Box, Text } from 'grommet'
import Layout from '../components/layout/layout'
import { CardLink } from '../components/internal/internal'


class Blog extends Component {
  render() {
    let posts = this.props.data.posts.edges

    return (
      <Layout>
        <Box align="center" gap="medium" /*pad={{ horizontal: "xxsmall" }}*/>

          {posts.map(({ node }, index) => (
            <Box as="article" key={index} width="large" elevation="small">
              {node.frontmatter.cover !== null ? (
                <Box height="small" margin={{ horizontal: "xxsmall" }} border={{ side: "bottom", color: "gray" }}>
                  <Img fluid={node.frontmatter.cover.childImageSharp.fluid} />
                </Box>
              ) : (
                  <></>
                )}
              <Box pad="medium">
                <Box direction="row" justify="between" align="center">
                  <CardLink to={`/blog${node.fields.slug}`}>
                    <Heading level="5" margin={{ vertical: "xsmall" }}>{node.frontmatter.title}</Heading>
                  </CardLink>
                  <Text as="span">{node.frontmatter.date}</Text>
                </Box>
                <Text>{node.frontmatter.description}</Text>

              </Box>
            </Box>
          ))}
        </Box>
      </Layout>
    )
  }
}

export default Blog

export const query = graphql`
query {
    posts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            date
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
