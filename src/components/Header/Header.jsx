import React from "react"
import { changeLocale } from "gatsby-plugin-intl"
import { StyledHeader } from "./styles"

const Header = ({ selectedLanguage }) => {
  
  const handleLocaleChange = async e => {
    changeLocale(e.currentTarget.dataset.locale)
  }

  return (
    <StyledHeader>
      <span className="name">
        Jenaro
        <br />
        Calvino
      </span>

      <span className="lang">
        <span data-locale="es" className={selectedLanguage === 'es' ? 'selected' : ''} onClick={handleLocaleChange}>
          ESP
        </span>
        |
        <span data-locale="en" className={selectedLanguage === 'en' ? 'selected' : ''} onClick={handleLocaleChange}>
          ENG
        </span>
      </span>

      <svg
        width="34"
        height="14"
        viewBox="0 0 34 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="34" height="3" fill="#222222" />
        <rect x="16" y="11" width="18" height="3" fill="#222222" />
      </svg>
    </StyledHeader>
  )
}

export default Header
