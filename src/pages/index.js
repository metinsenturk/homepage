import React from 'react'
import { Heading, Box } from 'grommet'

import Layout from '../components/layout/layout'
import Profile from '../components/profile/profile'
const IndexPage = () => {
  return (
    <Layout>
      <Box>
        <Heading level="3">Hi there.</Heading>
        <Profile />
      </Box>
    </Layout>
  )
}

export default IndexPage
