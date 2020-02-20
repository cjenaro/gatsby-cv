import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'

import { StyledSection } from '../../common-styles/styles'
import styled from 'styled-components'

const StyledContact = styled.div`
  border-radius: 15px;
  max-width: 520px;
  margin: 0 auto;

  h4 {
    text-align: center;
    padding: 15px;
    color: ${props => props.theme.hl};
  }
`

const Contact = () => {
  return (
    <StyledSection>
      <h2 className="title">
        <FormattedMessage id="CONTACT"></FormattedMessage>
      </h2>
      <h3 className="description">
        <FormattedMessage id="CONTACT_DESCRIPTION"></FormattedMessage>
      </h3>
      <StyledContact className="neumorph">
        <h4>jen.calvineo@gmail.com</h4>
      </StyledContact>
    </StyledSection>
  )
}

export default Contact
