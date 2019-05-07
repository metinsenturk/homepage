import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Anchor, ResponsiveContext, Menu, Button } from 'grommet'
import { Actions, Action } from 'grommet-icons';

const Header2 = (props) => {
  let theme = props.theme
  let items = [
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
                {items.map(item => (
                  <Anchor to={item.path} as={Link}>
                    {item.label}
                  </Anchor>
                ))}

                <Button onClick={theme.onClick}>
                  <Box>
                    {theme.status ? <Action size="medium" /> : <Actions size="medium" />}
                  </Box>
                </Button>
              </Box>)
          } else {
            return (
              <Box>
                <Menu
                  label="Menu"
                  size="large"
                  dropProps={{ align: { top: "bottom", left: "left" } }}
                  items={[{ label: "Blog", onClick: () => (alert("sfs")) }]}
                />
              </Box>)
          }
        }}
      </ResponsiveContext.Consumer>
    </Box>
  )
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
