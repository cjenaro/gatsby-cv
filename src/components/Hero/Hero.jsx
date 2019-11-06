import * as React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import styled from "styled-components"
import { Container } from "react-bootstrap"

let rightValue = -50

const BackgroundText = styled.div`
  position: absolute;
  bottom: 3em;
  z-index: -1;
  right: ${rightValue}%;
`

const BigFont = styled.p`
  text-transform: uppercase;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 900;
  font-size: 300px;
  line-height: 102.1%;
  color: #ff3f2c;
  margin-bottom: -80px;
`

const HeroContainer = styled.div`
  position: relative;
  min-height: 50vh;
  overflow: hidden;
`

const WelcomeMessage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 50%;
  z-index: 1;
`

export default class Hero extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    this.rightValue = window.scrollY
  }

  render() {
    return (
      <HeroContainer>
        <Container className="position-relative">
          <WelcomeMessage>
            <p>
              <FormattedMessage id="intro"></FormattedMessage>
            </p>
          </WelcomeMessage>
        </Container>
        <BackgroundText>
          <BigFont>Front</BigFont>
          <BigFont>Dev</BigFont>
        </BackgroundText>
      </HeroContainer>
    )
  }
}
