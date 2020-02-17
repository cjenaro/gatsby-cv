import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { StyledSection } from '../../common-styles/styles'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const services = [
  {
    title: 'UX_UI_DESIGN',
    description: 'UX_UI_DESIGN_DESCRIPTION',
    img: '',
  },
  {
    title: 'FRONT_END',
    description: 'FRONT_END_DESCRIPTION',
    img: '',
  },
  {
    title: 'BACK_END',
    description: 'BACK_END_DESCRIPTION',
    img: '',
  },
]

const ServicesContent = styled.div`
  width: 80%;
  margin: 50px auto;
  padding: 20px;
  border-radius: 50px;

  .services {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      border-radius: 50px;
    }
  }
`

const Services = () => {
  const img = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "../images/ux-ui.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  console.log(img)

  return (
    <StyledSection>
      <h2 className="title">
        <FormattedMessage id="SERVICES"></FormattedMessage>
      </h2>
      <ServicesContent className="neumorph">
        <Img fluid={img.childImageSharp.fluid} />
        <ul className="services">
          {services.map(service => (
            <li>
              <div className="service neumorph">
                <img src={service.img} alt="service" />
                <h5 className="service__title">
                  <FormattedMessage id={service.title}></FormattedMessage>
                </h5>
                <p className="service_description">
                  <FormattedMessage id={service.description}></FormattedMessage>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </ServicesContent>
    </StyledSection>
  )
}

export default Services
