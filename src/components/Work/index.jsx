import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Work = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(pageQuery)
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        {edges.map(({ node: { frontmatter, html } }) => {
          return (
            <div key={frontmatter.title} className="work-item">
              <h1>{frontmatter.title}</h1>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            link
          }
          html
        }
      }
    }
  }
`
