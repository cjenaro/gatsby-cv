import React, { useEffect, useState } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { StyledHero } from "./styles"

const Hero = () => {
  const [right, setRight] = useState(0)

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    }

    const handleObserved = entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio < 1) {
          setRight(-66)
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleObserved, options)
    observer.observe(document.querySelector('#hero'))
  }, [])

  return (
    <StyledHero id="hero">
      <p>
        <FormattedMessage id="intro"></FormattedMessage>
      </p>

      <h1 style={{ transform: `translateX(${right}vw)` }}>
        Front
        <br />
        Dev
      </h1>
    </StyledHero>
  )
}

export default Hero
