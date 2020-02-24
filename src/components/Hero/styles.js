import styled from 'styled-components'

export const StyledHero = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  position: relative;
  justify-items: center;
  grid-gap: 20px;
  align-items: center;

  h1,
  h2,
  h3,
  h4 {
    font-weight: 100;
  }

  img {
    max-height: 400px;
  }

  .home__text {
    max-width: 86%;
    justify-self: flex-start;
    .hl {
      color: ${props => props.theme.hl};
    }
  }

  .job-title {
    margin: 14px 0 30px;
  }

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`
