import React, { useContext } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import { FormattedMessage } from "gatsby-plugin-intl"
import { ThemeStyles } from "./styles"
import { ThemeContext } from "styled-components"
import { useRef } from "react"

const ThemePicker = ({ changeTheme }) => {
  const themeContext = useContext(ThemeContext)
  const faMoon = useRef()
  const faSun = useRef()

  const toggle = e => {
    const dark = e.currentTarget.dataset.dark === "dark"
    console.log(dark, faMoon.current, faSun.current)
    if (dark) {
      faMoon.current.classList.remove("hidden")
      faSun.current.classList.add("hidden")
    } else {
      faMoon.current.classList.add("hidden")
      faSun.current.classList.remove("hidden")
    }
    changeTheme()
  }

  return (
    <ThemeStyles
      data-dark={themeContext.bg !== "#f2f2f2" && "dark"}
      onClick={toggle}
    >
      <div className="icon">
        <div ref={faMoon} className="icon-container moon">
          <FaMoon />
        </div>
        <div ref={faSun} className="icon-container sun hidden">
          <FaSun />
        </div>
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
