import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { StyledHero } from './styles'

import entryway from '../../images/entryway-monochrome-800px.svg'
import { NewmorphButton } from '../../common-styles/styles'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Hero = () => {
  return (
    <StyledHero id="home" className="home">
      <div className="home__text">
        <h3 className="hl">
          <strong>
            <FormattedMessage id="GREETING"></FormattedMessage>
          </strong>
        </h3>
        <h1>
          <FormattedMessage id="I_AM"></FormattedMessage>{' '}
          <strong>Jenaro Calvino</strong>
        </h1>
        <h3 className="job-title">
          <FormattedMessage id="JOB_TITLE"></FormattedMessage>
        </h3>
        <p>
          <FormattedMessage id="PERSONAL_DESCRIPTION"></FormattedMessage>
        </p>
        <NewmorphButton onClick={() => scrollTo('#contact')}>
          <FormattedMessage id="CONTACT_ME"></FormattedMessage>
        </NewmorphButton>
      </div>
      <div className="home__img">
        <img src={entryway} alt="hero" />
      </div>
    </StyledHero>
  )
}

export default Hero
