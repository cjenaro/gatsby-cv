import React, { useContext } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import { FormattedMessage } from "gatsby-plugin-intl"
import { ThemeStyles } from "./styles"
import { ThemeContext } from "styled-components"

const ThemePicker = ({ changeTheme }) => {
  const themeContext = useContext(ThemeContext)

  return (
    <ThemeStyles onClick={changeTheme}>
      <div className="icon">
        {themeContext.bg === "#f2f2f2" ? <FaMoon /> : <FaSun />}
      </div>
      <span>
        <FormattedMessage
          id={`${themeContext.bg === "#f2f2f2" ? "DARK_MODE" : "LIGHT_MODE"}`}
        ></FormattedMessage>
      </span>
    </ThemeStyles>
  )
}

export default ThemePicker
