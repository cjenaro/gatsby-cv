import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { StyledSection } from '../../common-styles/styles'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ServicesContent = styled.div`
  width: 80%;
  margin: 50px auto;
  padding: 20px;
  border-radius: 50px;

  .big-img {
    display: none;

    @media(min-width: 768px) {
      display: block;
    }
  }

  .services {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

    li {
      width: 30%;
      min-width: 230px;
      margin-bottom: 25px;
    }

    .service {
      text-align: center;
      border-radius: 50px;
      height: 360px;

      &__img {
        max-height: 235px;
      }

      &__title {
        margin-bottom: 12px;
      }
    }
  }
`

const Services = () => {
  const img = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "frontBackUXUI@2x.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      front: file(relativePath: { eq: "front-end.png" }) {
        childImageSharp {
          fluid(maxHeight: 210) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      back: file(relativePath: { eq: "back-end.png" }) {
        childImageSharp {
          fluid(maxHeight: 210) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      design: file(relativePath: { eq: "design.png" }) {
        childImageSharp {
          fluid(maxHeight: 210) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const services = [
    {
      title: 'FRONT_END',
      description: 'FRONT_END_DESCRIPTION',
      img: img.front.childImageSharp.fluid,
    },
    {
      title: 'BACK_END',
      description: 'BACK_END_DESCRIPTION',
      img: img.back.childImageSharp.fluid,
    },
    {
      title: 'UX_UI_DESIGN',
      description: 'UX_UI_DESIGN_DESCRIPTION',
      img: img.design.childImageSharp.fluid,
    },
  ]

  return (
    <StyledSection id="services">
      <h2 className="title">
        <FormattedMessage id="SERVICES"></FormattedMessage>
      </h2>
      <ServicesContent className="neumorph">
        <Img className="big-img" fluid={img.image.childImageSharp.fluid} alt="UX." />
        <ul className="services">
          {services.map(service => (
            <li key={service.title}>
              <div className="service neumorph">
                <Img
                  className="service__img"
                  fluid={service.img}
                  alt={service.title}
                />
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
