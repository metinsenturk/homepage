import React from 'react'
import { graphql } from 'gatsby'
import { Box, Heading, Text, Anchor, ResponsiveContext, Paragraph } from "grommet"
import { Previous } from "grommet-icons"
import ShareVia from '../components/share/share'
import SEO from '../components/seo/seo';
import { InternalLink } from '../components/internal/internal'

export default ({ data }) => {
  // console.log(data)
  const { frontmatter, html, fields } = data.markdownRemark
  const url = data.site.siteMetadata.siteUrl + '/blog/' + fields.slug.split('/')[1] + '/'

  // eslint-disable-next-line 
  const overrides = {
    p: {
      // component: Paragraph,
      props: { size: "medium"} 
    },
    pre: {
      props: { size: "medium" }
    }
  }

  return (
    <>
      <SEO
        article={true}
        pathname="/blog/"
        title={frontmatter.title}
        desc={frontmatter.description}
        node={{
          url: url,
          title: frontmatter.title,
          created: frontmatter.created,
          updated: frontmatter.updated
        }} />
      <Box basis="large">
        <ResponsiveContext.Consumer>
          {(size) => {
            let pad = (size === 'small' || size === 'xsmall') ? "large" : "xsmall"
            return (
              <Box pad={{ vertical: pad, horizontal: "xsmall" }} justify="between" align="center" direction="row">
                <ShareVia />
                <InternalLink to='/blog/'>
                  <Anchor as="span" icon={<Previous />} label="Back" />
                </InternalLink>
              </Box>
            )
          }}
        </ResponsiveContext.Consumer>
        {/** TODO: temp solution to show footer, article does not fit its contents on mobile. */}
        <Box as="article" elevation="xsmall" overflow="auto" pad={{ horizontal: "medium", vertical: "xsmall" }}>
          <Heading>{frontmatter.title}</Heading>
          <Paragraph>{frontmatter.description}</Paragraph>
          <Text>{frontmatter.date}</Text>
          <br />
          <h1 id="test1">{frontmatter.title}</h1>
          <p id="test2">{frontmatter.description}</p>
          <span id="test3">{frontmatter.date}</span>
          <div
          style={{ maxWidth: 'auto' }}
                dangerouslySetInnerHTML={{
                  __html: html,
                }}
              />
          {/** <Markdown overrides /> does not align well the code. Temporarily setting html will do the work. */}
        </Box>
      </Box>
    </>
  )
}

export const query = graphql`
  query BlogDatabySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      rawMarkdownBody
      wordCount {
        paragraphs
        sentences
        words
      }
      timeToRead
      frontmatter {
        title
        description
        date
        created
        updated
      }
      fields {
        slug
      }
    }
  }
`
