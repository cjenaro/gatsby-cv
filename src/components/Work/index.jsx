import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useWorks } from '../../hooks/use-works'
import { StyledSection } from '../../common-styles/styles'

const WorksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;

  .work {
    max-width: 350px;
    position: relative;

    &__content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      color: #222222;
      background-color: ${props => props.theme.hl}99;
      transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;
      display: grid;
      align-content: center;
      justify-items: center;
      row-gap: 10px;

      &:hover {
        opacity: 1;
      }

      @media (max-width: 768px) {
        opacity: 1;
      }
    }

    &__description {
      text-align: center;
      max-width: 80%;
      font-weight: 300;
    }

    &__link {
      color: #222222;
      font-weight: 300;
      text-decoration: underline;
    }

    &__title {
      font-size: 20px;
    }
  }
`

const Work = () => {
  const works = useWorks()

  return (
    <StyledSection id="portfolio">
      <h2 className="title">
        <FormattedMessage id="MY_PORTFOLIO"></FormattedMessage>
      </h2>
      <h3 className="description">
        <FormattedMessage id="MY_PORTFOLIO_DESCRIPTION"></FormattedMessage>
      </h3>
      <WorksContainer>
        {works.map(work => (
          <a
            key={work.title}
            rel="noopener noreferrer"
            href={work.link}
            target="_blank"
            className="work"
          >
            <Img className="work__image" fluid={work.image} />
            <div className="work__content">
              <h4 className="work__title">{work.title}</h4>
              <span className="work__link">
                <FormattedMessage id="VISIT_WEBSITE"></FormattedMessage> &rarr;
              </span>
              <p className="work__description">{work.description}</p>
            </div>
          </a>
        ))}
      </WorksContainer>
    </StyledSection>
  )
}

export default Work
