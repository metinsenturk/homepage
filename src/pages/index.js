import React from 'react'
import { Heading, Box, Carousel, Image, Text, Stack, Paragraph } from 'grommet'
import { InternalLink } from '../components/internal/internal'

import SEO from '../components/seo/seo';
const IndexPage = () => {
  return (
    <>
      <SEO />
      <Box gap="medium" fill={true}>
        <Box elevation="small" overflow="hidden">
          <Carousel play={10000} fill={true}>
            <InternalLink to="/contact/">
              <Stack anchor="bottom-left">
                <Box>
                  <Image fit="cover" src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
                </Box>
                <Box align="start" pad="large" color="light-1">
                  <Heading>Lorem ipsum</Heading>
                  <Text>Cras nec lectus nulla. Morbi vel venenatis lorem.</Text>
                </Box>
              </Stack>
            </InternalLink>
            <Stack anchor="bottom-left">
              <Box>
                <Image fit="cover" src='//v2.grommet.io/assets/IMG_4245.jpg' />
              </Box>
              <Box align="start" pad="large" >
                <Heading>Lorem ipsum</Heading>
                <Text >Cras nec lectus nulla. Morbi vel venenatis lorem.</Text>
              </Box>
            </Stack>
            <Stack anchor="bottom-left">
              <Box>
                <Image fit="cover" src='//v2.grommet.io/assets/IMG_4210.jpg' />
              </Box>
              <Box align="start" pad="large">
                <Heading>Lorem ipsum</Heading>
                <Text>Cras nec lectus nulla. Morbi vel venenatis lorem.</Text>
              </Box>
            </Stack>

          </Carousel>
          <Box pad="medium">
            <Heading level="3">Hi there.</Heading>
              <Paragraph>
                Cras nec lectus nulla. Morbi vel venenatis lorem, vitae faucibus mi. Vivamus est mi, faucibus ut nibh ut, pharetra volutpat risus. Quisque auctor mi eu semper aliquam. Maecenas pretium libero enim, eu suscipit massa sollicitudin ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

                Aliquam a metus bibendum, ultrices nibh sed, porttitor mauris. Suspendisse vel mi viverra, vulputate lorem at, auctor neque. In hac habitasse platea dictumst. Sed egestas faucibus sem, sit amet luctus sem semper a. Maecenas lobortis, velit nec sollicitudin convallis, turpis lorem dignissim elit, quis finibus felis nisl id orci. Etiam aliquet lectus velit, ut vestibulum nibh tincidunt eu. Nulla tortor lorem, aliquet a ipsum nec, vehicula maximus urna. Integer vitae justo vestibulum, aliquet libero ac, lacinia mi. Aenean sed neque vel enim laoreet placerat.
            </Paragraph>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default IndexPage
