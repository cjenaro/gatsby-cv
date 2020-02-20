import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'

const StyledFooter = styled.footer`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 350px;
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
`

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <Logo />
      <button>Back to top</button>
      <div className="date">Jenaro©{new Date().getFullYear()}</div>
    </StyledFooter>
  )
}

export default Footer
