import React from 'react'
import { graphql } from 'gatsby'
import { Box, Markdown, Heading, Text, Anchor, Paragraph } from "grommet"
import { Previous } from "grommet-icons"
import Layout from '../components/layout/layout'
import ShareVia from '../components/share/share'
import { InternalLink } from '../components/internal/internal'

export default ({ data }) => {  
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const overrides = {
    p: {
      component: Paragraph,
      props: { size: "medium", basis: "large" }
    },
    pre: {
      props: { size: "medium" }
    }
  }

  return (
    <Layout>
      <Box basis="large">
        <Box pad="xsmall" justify="between" align="center" direction="row">
          <ShareVia />
          <InternalLink to='/blog/'>
            <Anchor as="span" icon={<Previous />} label="Back" />
          </InternalLink>

        </Box>
        <Box as="article" elevation="xsmall" pad={{ horizontal: "medium", vertical: "xsmall" }}>
          <Heading>{frontmatter.title}</Heading>
          <Text>{frontmatter.date}</Text>
          <Markdown components={overrides}>
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
