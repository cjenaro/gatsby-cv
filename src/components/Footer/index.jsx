import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { FormattedMessage } from 'gatsby-plugin-intl'

const StyledFooter = styled.footer`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30vw;
  border-top: 2px solid #e7e7e7;

  > * {
    max-height: 54px;
  }

  button {
    border: 0;
    color: ${props => props.theme.hl};
    background: none;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height: unset;

    > * {
      margin: 10px 0;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <Logo />
      <button onClick={() => scrollTo('#home')}>
        <FormattedMessage id="BACK_TO_TOP"></FormattedMessage>
        &uarr;
      </button>
      <div className="date">Jenaro©{new Date().getFullYear()}</div>
    </StyledFooter>
  )
}

export default Footer
