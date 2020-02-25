import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import Header from '../Header'
import Footer from '../Footer'
import '../layout.css'
import { LocaleStateProvider } from '../../context/LocaleContext'
import { StyledLayout } from './styles'

const main = {
  bg: '#f2f2f2',
  hl: '#fead2a',
  btnLightShadow: '#ffffffd6',
  btnDarkShadow: '#d7d7d7',
  color: '#636363',
}

const dark = {
  bg: '#222222',
  hl: '#fead2a',
  btnLightShadow: '#323232',
  btnDarkShadow: '#1c1c1c',
  color: '#f0f0f0',
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
          <Footer />
        </StyledLayout>
      </ThemeProvider>
    </LocaleStateProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
