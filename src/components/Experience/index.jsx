import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'

import { StyledSection } from '../../common-styles/styles'

function Experience() {
  return (
    <StyledSection>
      <h2 className="title">
        <FormattedMessage id="EXPERIENCE"></FormattedMessage>
      </h2>
      <div>timeline</div>
    </StyledSection>
  )
}

export default Experience
