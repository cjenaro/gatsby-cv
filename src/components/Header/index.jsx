import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StyledHeader } from "./styles"
import Logo from "../Logo"
import ThemePicker from "../ThemePicker"
import LanguagePicker from "../LanguagePicker"

const Header = ({ changeTheme, selectedLanguage }) => {
  return (
    <StyledHeader>
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
            <button onClick={() => scrollTo("#home")}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollTo("#about-me")}>About Me</button>
          </li>
          <li>
            <button onClick={() => scrollTo("#portfolio")}>Portfolio</button>
          </li>
          <li>
            <button onClick={() => scrollTo("#services")}>Services</button>
          </li>
          <li>
            <button onClick={() => scrollTo("#blog")}>Blog</button>
          </li>
          <li>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header
