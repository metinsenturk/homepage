import React from 'react'
import { Heading, Box, Anchor, Image, Text, Stack, Paragraph } from 'grommet'
import { InternalLink } from '../components/internal/internal'

import SEO from '../components/seo/seo';
const IndexPage = () => {
  return (
    <>
      <SEO />
      <Box elevation="small" overflow="hidden" >
        <Stack>
          <Box><Image fit="cover" src="//source.unsplash.com/random" /></Box>
          <Box pad="large" justify="between" fill="vertical">
            <Box>
              <Heading level="1">Hi there.</Heading>
              <Paragraph>
                Cras nec lectus nulla. Morbi vel venenatis lorem, vitae faucibus mi. Vivamus est mi, faucibus ut nibh ut, pharetra volutpat risus. Quisque auctor mi eu semper aliquam. Maecenas pretium libero enim, eu suscipit massa sollicitudin ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Find out about my <InternalLink to="/blog/"><Anchor label="blog"/></InternalLink> and <InternalLink to="/album/"><Anchor label="photographs"/></InternalLink>.
            </Paragraph>
            </Box>
            <Box>
              <Text size="xsmall">Courtesy of Unsplash.</Text>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default IndexPage
