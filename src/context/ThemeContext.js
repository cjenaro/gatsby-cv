import React, { createContext, useState } from "react"

const ThemeContext = createContext("")
const LocalStateProvider = ThemeContext.Provider

function ThemeStateProvider(props) {
  const [theme, setTheme] = useState("normal")

  return (
    <LocalStateProvider value={[theme, setTheme]}>
      {props.children}
    </LocalStateProvider>
  )
}

export { ThemeStateProvider, ThemeContext }
