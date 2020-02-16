import { graphql, useStaticQuery } from 'gatsby'

export const useExperience = () => {
  const { data } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/experience/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              dates
              position
            }
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    description: node.frontmatter.description,
    dates: node.frontmatter.dates,
    position: node.frontmatter.position,
  }))
}
