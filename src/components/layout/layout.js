import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Grommet } from 'grommet'
import { base, dark, grommet } from 'grommet/themes';
import { createGlobalStyle } from 'styled-components'

import Header from '../header/header'

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
    super();
    this.onThemeChange = this.onThemeChange.bind(this);
    this.state = { theme: true };
  }

  onThemeChange() {
    this.setState(prevState => ({ theme: !prevState.theme }))
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              htmlAttributes={{ lang: data.site.siteMetadata.lang }}
              meta={[
                { name: 'description', content: data.site.siteMetadata.description },
                { name: 'keywords', content: data.site.siteMetadata.keywords },
              ]}

            />
            <Grommet theme={this.state.theme ? theme : GrommetThemes.dark}>
              <GlobalSyle />
              <Header theme={{ status: this.state.theme, onClick: this.onThemeChange }} />
              {this.props.children}
            </Grommet>
          </>
        )}
      />
    )
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
