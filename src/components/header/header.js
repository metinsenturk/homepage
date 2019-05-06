import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Anchor, ResponsiveContext, Menu } from 'grommet'


const Header2 = (props) => {
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
      pad={{ left: "large", right: "large" }}
      gap="medium"
      align="center"
      justify="between"
      flex={false}
    >
      <Anchor to="/" style={{ textDecoration: 'none', boxShadow: 'none' }} as={Link}>
        <Heading level="1"> MS</Heading>
      </Anchor>

      <ResponsiveContext>
        {size => {
          if (size !== "xsmall" && size !== "small") {
            return (
              <Box as="nav" gap="medium" direction="row">
                {items.map(item => (
                  <Anchor to={item.path} as={Link}>
                    <Heading level="3">{item.label}</Heading>
                  </Anchor>
                ))}
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
      </ResponsiveContext>
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
