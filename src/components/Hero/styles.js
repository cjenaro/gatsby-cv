import styled from "styled-components"

export const StyledHero = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden;

  p {
    position: relative;
    z-index: 2;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 50px;
    letter-spacing: -1px;
    color: #222222;
    margin: 0;
    top: 280px;
    max-width: 700px;
    width: 100%;
    /* text-shadow: 1px 1px white, -1px -1px white, -1px 1px white, 1px -1px white; */
  }

  h1 {
    will-change: transform;
    transition: transform 0.5s cubic-bezier(.71,-0.13,.25,1.37);
    position: relative;
    z-index: 1;
    top: -160px;
    margin: 0;
    text-transform: uppercase;
    right: -65vw;
    white-space: nowrap;
    overflow: hidden;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 900;
    font-size: 300px;
    line-height: 75%;
    color: #ff3f2c;
  }
`
