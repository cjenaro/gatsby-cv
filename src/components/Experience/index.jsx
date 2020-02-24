import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { useExperience } from '../../hooks/use-experience'
import { StyledSection } from '../../common-styles/styles'
import styled from 'styled-components'

const ExperienceCard = styled.div`
  width: 250px;
  height: 250px;
  padding: 40px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.color};
  margin: 50px 30px;
  transform: scale(1);
  will-change: transform;
  transition: transform 0.2s ease-in-out;

  .experience {
    &__title {
      margin-bottom: 4px;
      text-align: left;
      font-size: 20px;
      text-align: center;
    }

    &__position {
      margin: 0 0 8px;
      font-size: 14px;
      text-align: center;
    }

    &__dates {
      margin: 0 0 4px;
      font-size: 14px;
      text-align: center;
    }

    &__description {
      font-size: 16px;
      margin: 0;
      text-align: center;
    }
  }

  &:hover {
    transform: scale(1.1);
    font-weight: 300;
  }
`

const Timeline = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Experience = () => {
  const experiences = useExperience()

  return (
    <StyledSection id="experience">
      <h2 className="title">
        <FormattedMessage id="EXPERIENCE"></FormattedMessage>
      </h2>
      <Timeline className="timeline">
        {experiences.map(experience => (
          <ExperienceCard className="neumorph inset" key={experience.title}>
            <h5 className="experience__title">{experience.title}</h5>
            <p className="experience__dates">
              <em>{experience.dates}</em>
            </p>
            <p className="experience__position">{experience.position}</p>
            <p className="experience__description">{experience.description}</p>
          </ExperienceCard>
        ))}
      </Timeline>
    </StyledSection>
  )
}

export default Experience
