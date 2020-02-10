import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { StyledHero } from "./styles"

const Hero = () => {
  return (
    <StyledHero id="hero">
      <p>
        <FormattedMessage id="intro"></FormattedMessage>
      </p>

      <h1>
        Front
        <br />
        Dev
      </h1>
    </StyledHero>
  )
}

export default Hero
