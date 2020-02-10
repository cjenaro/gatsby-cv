import React from "react"
import { changeLocale } from "gatsby-plugin-intl"
import { StyledLanguagePicker } from "./styles"

const LanguagePicker = ({ selectedLanguage }) => {
  const handleLocaleChange = async e => {
    changeLocale(e.currentTarget.dataset.locale)
  }

  return (
    <StyledLanguagePicker>
      <button
        className={selectedLanguage === "en" ? "selected" : ""}
        onClick={handleLocaleChange}
        data-locale="en"
      >
        EN
      </button>{" "}
      <span>|</span>{" "}
      <button
        className={selectedLanguage === "es" ? "selected" : ""}
        data-locale="es"
        onClick={handleLocaleChange}
      >
        ES
      </button>
    </StyledLanguagePicker>
  )
}

export default LanguagePicker
