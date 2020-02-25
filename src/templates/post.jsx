import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      html
    }
  }
`

const StyledPost = styled.div`
  background-color: #f2f2f2;
  min-height: 100vh;

  .post {
    width: 100%;
    padding: 20px;
    max-width: 350px;
    margin: 0 auto;
    color: #222222;

    @media (min-width: 768px) {
      max-width: 590px;
    }

    .title {
      font-size: 80px;
    }

    .subtitle {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .image {
      margin: 10px -89px;
    }
  }
`

const PostTemplate = ({ data: { markdownRemark } }) => {
  const post = {
    html: markdownRemark.html,
    title: markdownRemark.frontmatter.title,
    description: markdownRemark.frontmatter.description,
    date: markdownRemark.frontmatter.date,
    image: markdownRemark.frontmatter.image.childImageSharp.fluid,
  }

  return (
    <StyledPost>
      <div className="post">
        <h1 className="title">{post.title}</h1>
        <div className="subtitle">
          <p className="description">
            <em>{post.description}</em>
          </p>
          <p className="dates">
            <em>{post.date}</em>
          </p>
        </div>
        <Img className="image" fluid={post.image} alt={post.title} />
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </StyledPost>
  )
}

export default PostTemplate
