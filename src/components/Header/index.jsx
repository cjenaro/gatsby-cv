import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { StyledHeader } from './styles'
import Logo from '../Logo'
import ThemePicker from '../ThemePicker'
import LanguagePicker from '../LanguagePicker'
import { usePosts } from '../../hooks/use-posts'

const Header = ({ changeTheme, selectedLanguage }) => {
  const posts = usePosts()

  return (
    <StyledHeader id="header">
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
        <ul>
          <li>
            <button onClick={() => scrollTo('#home')}>
              <FormattedMessage id="HOME"></FormattedMessage>
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('#about-me')}>
              <FormattedMessage id="ABOUT_ME"></FormattedMessage>
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('#experience')}>
              <FormattedMessage id="EXPERIENCE"></FormattedMessage>
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('#portfolio')}>
              <FormattedMessage id="PORTFOLIO"></FormattedMessage>
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('#services')}>
              <FormattedMessage id="SERVICES"></FormattedMessage>
            </button>
          </li>
          {posts.length && (
            <li>
              <button onClick={() => scrollTo('#blog')}>
                <FormattedMessage id="BLOG"></FormattedMessage>
              </button>
            </li>
          )}
          <li>
            <button onClick={() => scrollTo('#contact')}>
              <FormattedMessage id="CONTACT"></FormattedMessage>
            </button>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header
