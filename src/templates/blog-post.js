import React from 'react'
import { graphql, Link } from 'gatsby'
import { Box, Markdown, Heading, Text, Anchor } from "grommet"
import { Previous } from "grommet-icons"
import Layout from '../components/layout/layout'
import ShareVia from '../components/share/share'

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Box basis="large">
        <Box pad="xsmall" justify="between" align="end" direction="row">
          <ShareVia />
          <Anchor as={Link} to='blog/'>
            <Box direction="row" gap="xsmall">
              <Previous />
              <Text>Back</Text>
            </Box>
          </Anchor>
        </Box>
        <Box as="article" elevation="xsmall" pad={{ horizontal: "medium", vertical: "xsmall" }}>
          <Heading>{frontmatter.title}</Heading>
          <Text>{frontmatter.date}</Text>
          <Markdown components={{
            "p": {
              "component": "Paragraph",
              "props": { "size": "large", "wrap": "true" }
            },
            "pre": {
              "props": { "size": "large", "wrap": "true" }
            }
          }}>
            {html}
          </Markdown>
        </Box>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query BlogDatabySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
    }
  }
`
