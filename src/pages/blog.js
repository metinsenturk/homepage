import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components';
import { Heading, Box, Anchor, Text } from 'grommet'
import Layout from '../components/layout/layout'

const CardLink = styled(Link)`
      text-decoration: none;
      color: inherit;
      :hover {
        opacity: 0.3;
        text-decoration: none;
      }
`;

class Blog extends Component {
  render() {
    let posts = this.props.data.posts.edges

    return (
      <Layout>
        {posts.map(({ node }, index) => (
          <Box as="article" key={index} margin="small" border={{ color: "#a7a7a7" }} elevation="small">
            {node.frontmatter.cover !== null ? (
              <Box pad="medium" border={{ color: "blue" }} height="small" >
                <Img fluid={node.frontmatter.cover.childImageSharp.fluid} />
              </Box>
            ) : (
                <></>
              )}
            <Box pad="medium">
              <Box direction="row" justify="between" align="center">
                <Anchor as={CardLink} to={`blog${node.fields.slug}`}>
                  <Heading level="5">{node.frontmatter.title}</Heading>
                </Anchor>
                <Text as="span">{node.frontmatter.date}</Text>
              </Box>
              <Text>{node.frontmatter.description}</Text>

            </Box>
          </Box>
        ))}
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
