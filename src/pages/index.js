import React from 'react'
import { Heading, Box, Carousel, Image } from 'grommet'

import Layout from '../components/layout/layout'
import Profile from '../components/profile/profile'
import SEO from '../components/seo/seo';
const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Box gap="medium" fill={true}>
        <Box elevation="small">
          <Carousel play={10000} fill={true}>
            <Image src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
            <Image src='//v2.grommet.io/assets/IMG_4245.jpg' />
            <Image src='//v2.grommet.io/assets/IMG_4210.jpg' />
          </Carousel>
          <Box pad="medium">
            <Heading level="3">Hi there.</Heading>
            <Profile />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
