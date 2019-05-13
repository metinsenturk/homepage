import React from 'react'
import { Box, Heading, Anchor, ResponsiveContext, Text, Button, Layer } from 'grommet'
import { Actions, Action, Apps } from 'grommet-icons';
import { InternalLink } from '../internal/internal'

const ITEMS = [
  {
    active: true,
    label: "Home",
    path: "/"
  },
  {
    active: true,
    label: "Blog",
    path: "/blog/"
  },
  {
    active: false,
    label: "Gallery",
    path: "/album/"
  },
  {
    active: false,
    label: "Contact",
    path: "/contact/"
  },
]

const MobileHeader = (props) => {
  return (
    <Layer position="top" full="vertical" modal={true} plain={true}>
      <Box background="brand" fill="vertical" align="center" gap="large" pad="large">
        <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
          <Heading size='large'>Menu</Heading>
        </Box>
        {ITEMS.map((item, index) => (
          <InternalLink key={index} to={item.path} onClick={props.onClick}>
            <Anchor as="span">
              <Box pad={{ horizontal: 'medium', vertical: 'large' }}>
                <Text size='large'>{item.label}</Text>
              </Box>
            </Anchor>

          </InternalLink>

        ))}

      </Box>
    </Layer>
  )
}

class Header2 extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { mobileMenu: false };
  }

  onClick() {
    this.setState(prevState => ({ mobileMenu: !prevState.mobileMenu }))
  }

  render() {
    return (
      <Box
        as="header"
        direction="row"
        background="neutral-3"
        gap="medium"
        align="center"
        justify="around"
      >
        <InternalLink to="/">
          <Anchor as="span" style={{ textDecoration: 'none', boxShadow: 'none' }}>
            <Heading level="2"> MS</Heading>
          </Anchor>
        </InternalLink>

        <ResponsiveContext.Consumer>
          {size => {
            if (size !== "xsmall" && size !== "small") {
              return (
                <Box as="nav" gap="medium" direction="row" align="center">
                  {ITEMS.map((item, index) => (
                    <InternalLink key={index} to={item.path}>
                      <Anchor as="span" label={item.label}>
                      </Anchor>
                    </InternalLink>

                  ))}

                  <Button onClick={this.props.theme.onClick}>
                    <Box>
                      {this.props.theme.status ? <Action size="medium" /> : <Actions size="medium" />}
                    </Box>
                  </Button>
                </Box>)
            } else {
              return (
                <Box>
                  {/*<Menu
                    label="Menu"
                    size="large"
                    dropProps={{ align: { top: "bottom", left: "left" } }}
                    items={[{ label: "Blog", onClick: () => (alert("sfs")) }]}
                  />*/}
                  {this.state.mobileMenu ? (
                    <MobileHeader onClick={this.onClick} />
                  ) : (
                      <Button onClick={this.onClick}>
                        <Apps />
                      </Button>
                    )}
                </Box>)
            }
          }}
        </ResponsiveContext.Consumer>
      </Box>
    )
  }
}

export default Header2
