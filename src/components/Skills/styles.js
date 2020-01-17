import styled from "styled-components"

export const StyledSkills = styled.section`
  max-width: 1200px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  margin: 0 auto;

  .skills {
    h5 {
      font-family: Titillium Web;
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 102.1%;
      letter-spacing: 0.07em;
      color: #070707;
      text-transform: uppercase;
    }

    .skills-list {
      li {
        span {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 40px;
          color: #222222;
        }
      }
    }

    .icons-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      
      li {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`
