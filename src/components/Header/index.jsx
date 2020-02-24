import React, { useState } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { StyledHeader, StyledHamburguer } from './styles'
import Logo from '../Logo'
import ThemePicker from '../ThemePicker'
import LanguagePicker from '../LanguagePicker'
import { usePosts } from '../../hooks/use-posts'

const Header = ({ changeTheme, selectedLanguage }) => {
  const posts = usePosts()
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(true)
  }

  const closeAndScroll = whereTo => {
    setMenuOpen(false)
    scrollTo(whereTo)
  }

  return (
    <>
      <StyledHamburguer
        className={`open-btn ${menuOpen ? 'menu-open' : ''}`}
        onClick={openMenu}
      >
        <span role="img" aria-label="hamburguer.">
          🍔
        </span>
      </StyledHamburguer>
      <StyledHeader id="header" className={menuOpen ? 'open' : ''}>
        <button className="close" onClick={() => setMenuOpen(false)}>
          &times;
        </button>
        <Logo />
        <nav>
          <ul className="theme-and-lang">
            <li>
              <ThemePicker changeTheme={changeTheme} />
            </li>
            <li>
              <LanguagePicker selectedLanguage={selectedLanguage} />
            </li>
          </ul>
          <ul className="links">
            <li>
              <button onClick={() => closeAndScroll('#home')}>
                <FormattedMessage id="HOME"></FormattedMessage>
              </button>
            </li>
            <li>
              <button onClick={() => closeAndScroll('#about-me')}>
                <FormattedMessage id="ABOUT_ME"></FormattedMessage>
              </button>
            </li>
            <li>
              <button onClick={() => closeAndScroll('#experience')}>
                <FormattedMessage id="EXPERIENCE"></FormattedMessage>
              </button>
            </li>
            <li>
              <button onClick={() => closeAndScroll('#portfolio')}>
                <FormattedMessage id="PORTFOLIO"></FormattedMessage>
              </button>
            </li>
            <li>
              <button onClick={() => closeAndScroll('#services')}>
                <FormattedMessage id="SERVICES"></FormattedMessage>
              </button>
            </li>
            {posts.length && (
              <li>
                <button onClick={() => closeAndScroll('#blog')}>
                  <FormattedMessage id="BLOG"></FormattedMessage>
                </button>
              </li>
            )}
            <li>
              <button onClick={() => closeAndScroll('#contact')}>
                <FormattedMessage id="CONTACT"></FormattedMessage>
              </button>
            </li>
          </ul>
        </nav>
      </StyledHeader>
    </>
  )
}

export default Header
