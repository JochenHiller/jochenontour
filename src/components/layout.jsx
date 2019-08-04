import React, { useState } from "react"
import PropTypes from "prop-types"
import { Grommet, Box, ResponsiveContext } from "grommet"
import "typeface-indie-flower"
import "typeface-lato"
import { createGlobalStyle } from "styled-components"
import config from "../config"

import { customTheme } from "../theme"
import Instafeed from "./instafeed"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

const FullGlobalStyle = createGlobalStyle`
  body { margin: 0; }
`

const App = ({ title, children }) => {
  const [showSidebar, setSidebar] = useState(false)
  return (
    <Grommet theme={customTheme}>
      <FullGlobalStyle />
      <Box full>
        <Header
          showSidebar={showSidebar}
          toggleSidebar={setSidebar}
          title={title}
        />
        {showSidebar && <Sidebar toggleSidebar={setSidebar} />}
        {children}
        <ResponsiveContext.Consumer>
          {size => size !== `small` && <Instafeed />}
        </ResponsiveContext.Consumer>
        <Footer />
      </Box>
    </Grommet>
  )
}

App.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

{/* FIXED: take title from config.js */}
App.defaultProps = {
  children: null,
  title: `${config.title}`,
}

export default App
