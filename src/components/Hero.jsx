import * as React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import styled from "styled-components"
import { Col } from "react-bootstrap"

const BackgroundText = styled.h1`
  position: absolute;
  right: 0;
  top: 0;
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
`

export default class Hero extends React.Component {
  render() {
    return (
      <HeroContainer>
        <Col lg="6">
          <p>
            <FormattedMessage id="intro"></FormattedMessage>
          </p>
        </Col>
        <BackgroundText>
          <BigFont>Front</BigFont>
          <BigFont>Dev</BigFont>
        </BackgroundText>
      </HeroContainer>
    )
  }
}
