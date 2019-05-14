import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Grommet, ResponsiveContext, Box } from 'grommet'
import { base, dark, grommet } from 'grommet/themes';
import { createGlobalStyle } from 'styled-components'

import Header from '../header/header'
import Profile from '../profile/profile'

const GlobalSyle = createGlobalStyle`
  body {
    margin: 0
  }
`
const GrommetThemes = {
  grommet,
  base,
  dark,
};

// eslint-disable-next-line 
const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '24px',
      height: '20px',
    },
  },
};

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: true };
  }

  onThemeChange = () => {
    this.setState(prevState => ({ theme: !prevState.theme }))
  }

  render() {
    return (
      <StaticQuery
        query={query}
        render={(data) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              htmlAttributes={{ lang: data.site.siteMetadata.siteLanguage }}            
            />
            <Grommet theme={this.state.theme ? GrommetThemes.grommet : GrommetThemes.dark} full={true}>
              <GlobalSyle />
              <Header theme={{ status: this.state.theme, onClick: this.onThemeChange }} />
              <ResponsiveContext.Consumer>
                {(size) => {
                  if (size === 'small' || size === 'xsmall')
                    return (
                      <Box
                        direction="row"
                        pad="medium"
                        gap="small"
                        align="start"
                        alignSelf="center"
                        justify="center"
                      //background="light-2"
                      >
                        {this.props.children}
                      </Box>
                    )
                  else
                    return (
                      <Box
                        direction="row"
                        pad="medium"
                        gap="small"
                        align="start"
                        alignSelf="center"
                        justify="center"
                      //background="light-2"
                      >
                        <Box as="main" basis="large" direction="row">
                          {this.props.children}
                        </Box>
                        <Box as="aside" basis="medium">
                          <Profile />
                        </Box>
                      </Box>
                    )
                }}
              </ResponsiveContext.Consumer>
            </Grommet>
          </>
        )}
      />
    )
  }
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const query = graphql`
query SiteTitleQuery {
  site {
    siteMetadata {
      title
      siteLanguage
      metaDefault {
        title
        description
        banner
      }
    }
  }
}
`
