import React from "react"
import { changeLocale } from "gatsby-plugin-intl"
import { StyledHeader } from "./styles"
import Logo from "../Logo"
import ThemePicker from "../ThemePicker"
import LanguagePicker from "../LanguagePicker"

const Header = ({ changeTheme }) => {
  // const handleLocaleChange = async e => {
  //   changeLocale(e.currentTarget.dataset.locale)
  // }

  return (
    <StyledHeader>
      <Logo />
      <nav>
        <ul className="theme-and-lang">
          <li>
            <ThemePicker changeTheme={changeTheme} />
          </li>
          <li>
            <LanguagePicker />
          </li>
        </ul>
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>About Me</span>
          </li>
          <li>
            <span>Portfolio</span>
          </li>
          <li>
            <span>Services</span>
          </li>
          <li>
            <span>Blog</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header
