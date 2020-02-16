/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "../Header"
import "../layout.css"
import { LocaleStateProvider } from "../../context/LocaleContext"
import { StyledLayout } from "./styles"

const main = {
  bg: "#f2f2f2",
  hl: "#fead2a",
  btnLightShadow: "#ffffffd6",
  btnDarkShadow: "#d7d7d7",
}

const dark = {
  bg: "#222222",
  hl: "#fead2a",
  btnLightShadow: "#323232",
  btnDarkShadow: "#1c1c1c",
}

const Layout = props => {
  const [themeDark, setThemeDark] = React.useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const changeTheme = () => {
    setThemeDark(!themeDark)
  }

  return (
    <LocaleStateProvider value="en">
      <ThemeProvider theme={themeDark ? dark : main}>
        <StyledLayout>
          <Header
            changeTheme={changeTheme}
            isDark={themeDark}
            siteTitle={data.site.siteMetadata.title}
            selectedLanguage={props.selectedLanguage}
          />
          <main>{props.children}</main>
          <footer id="footer">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </StyledLayout>
      </ThemeProvider>
    </LocaleStateProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
