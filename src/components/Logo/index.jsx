import React from "react"
import styled from "styled-components"

const StyledLogo = styled.div`
  svg {
    width: 150px;
    overflow: unset !important;
  }
`

const Logo = () => {
  return (
    <StyledLogo>
      <svg viewBox="0 0 145 56">
        <g transform="translate(-375 -190)" data-name="Group 23">
          <rect
            transform="translate(375 190)"
            width="41"
            height="41"
            fill="#fead2a"
            data-name="Rectangle 1"
          />
          <text
            transform="translate(389 236)"
            fontFamily="PlayfairDisplay-Bold, Playfair Display"
            fontSize="40"
            fontWeight="700"
          >
            <tspan x="0" y="0">
              Jenaro.
            </tspan>
          </text>
        </g>
      </svg>
    </StyledLogo>
  )
}

export default Logo
