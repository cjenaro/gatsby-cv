import React, { createContext, useState } from "react"

const LocaleContext = createContext("")
const LocalStateProvider = LocaleContext.Provider

function LocaleStateProvider(props) {
  const [locale, setLocale] = useState("en")

  return (
    <LocalStateProvider value={[locale, setLocale]}>
      {props.children}
    </LocalStateProvider>
  )
}

export { LocaleStateProvider, LocaleContext }
