import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Anchor, ResponsiveContext, Text, Button, Layer } from 'grommet'
import { Actions, Action, Apps } from 'grommet-icons';

const ITEMS = [
  {
    active: true,
    label: "/",
    path: "/"
  },
  {
    active: true,
    label: "Blog",
    path: "/blog"
  },
  {
    active: false,
    label: "Gallery",
    path: "/album"
  },
  {
    active: false,
    label: "Contact",
    path: "/contact"
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
          <Anchor key={index} to={item.path} as={Link} onClick={props.onClick}>
            <Box pad={{ horizontal: 'medium', vertical: 'large' }}>
              <Text size='large'>{item.label}</Text>
            </Box>
          </Anchor>
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
        background="brand"
        gap="medium"
        align="center"
        justify="around"
      >
        <Anchor to="/" style={{ textDecoration: 'none', boxShadow: 'none' }} as={Link}>
          <Heading level="1"> MS</Heading>
        </Anchor>

        <ResponsiveContext.Consumer>
          {size => {
            if (size !== "xsmall" && size !== "small") {
              return (
                <Box as="nav" gap="medium" direction="row" align="center">
                  {ITEMS.map((item, index) => (
                    <Anchor key={index} to={item.path} as={Link}>
                      {item.label}
                    </Anchor>
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
                    <MobileHeader onClick={this.onClick}/>
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

// eslint-disable-next-line 
const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        alignItems: 'left'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header2
