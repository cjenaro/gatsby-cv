import { changeLocale } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"

let isEnSelected = true
let isEsSelected = false
let menuOpen = false

class Header extends React.Component {
  render() {
    return (
      <header>
        <Container className="h-100">
          <Row className="h-100">
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h5 className="m-0">Jenaro</h5>
              <h5 className="m-0">Calvino</h5>
            </Col>

            <Col>
              <Row className="justify-content-center align-items-center h-100">
                <button
                  id="es"
                  className={isEsSelected ? "font-weight-bold text-dark" : ""}
                  onClick={() => setLocale("es")}
                >
                  ESP
                </button>
                <span className="separator">|</span>
                <button
                  id="en"
                  className={isEnSelected ? "font-weight-bold text-dark" : ""}
                  onClick={() => setLocale("en")}
                >
                  ENG
                </button>
              </Row>
            </Col>

            <Col className="d-flex flex-column justify-content-center align-items-center">
              <button onClick={openMenu}>
                <svg
                  width="34"
                  height="14"
                  viewBox="0 0 34 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className={menuOpen ? "transformIntoXTop" : ""}
                    width="34"
                    height="3"
                    fill="#222222"
                  />
                  <rect
                    className={menuOpen ? "transformIntoXBottom" : ""}
                    x="16"
                    y="11"
                    width="18"
                    height="3"
                    fill="#222222"
                  />
                </svg>
              </button>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

const openMenu = () => {
  menuOpen = !menuOpen
  console.log(menuOpen)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const setLocale = locale => {
  changeLocale(locale, null)
  isEnSelected = locale === "en"
  isEsSelected = locale === "es"
}

export default Header
