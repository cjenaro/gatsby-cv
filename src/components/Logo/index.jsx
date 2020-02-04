import React from "react"
import styled from "styled-components"

const StyledLogo = styled.div`
  position: relative;

  .square {
    position: absolute;
    z-index: 1;
    background-color: #fead2a;
    height: 50px;
    width: 50px;
    top: -6px;
    left: -6px;
  }

  h3 {
    position: relative;
    z-index: 2;
    font-size: 50px;
  }
`

const Logo = () => {
  return (
    <StyledLogo>
      <div className="square"></div>
      <h3>Jenaro.</h3>
    </StyledLogo>
  )
}

export default Logo
