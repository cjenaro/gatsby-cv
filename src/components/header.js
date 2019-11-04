import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Container className="h-100">
      <Row className="h-100">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <h5 className="m-0">Jenaro</h5>
          <h5 className="m-0">Calvino</h5>
        </Col>

        <Col>
          <Row className="justify-content-center align-items-center h-100">
            <button onClick={changeLang}>ESP</button>
            <span className="separator">|</span>
            <button onClick={changeLang}>ENG</button>
          </Row>
        </Col>

        <Col className="d-flex flex-column justify-content-center align-items-center">
          <svg
            width="34"
            height="14"
            viewBox="0 0 34 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="34" height="3" fill="#222222" />
            <rect x="16" y="11" width="18" height="3" fill="#222222" />
          </svg>
        </Col>
      </Row>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const changeLang = () => {}

export default Header
