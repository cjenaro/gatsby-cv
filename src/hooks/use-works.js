import { graphql, useStaticQuery } from 'gatsby'

export const useWorks = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/work/" } }) {
        edges {
          node {
            frontmatter {
              title
              description
              link
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
      }
    }
  `)

  return data.allMarkdownRemark.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    description: node.frontmatter.description,
    link: node.frontmatter.link,
    image: node.frontmatter.image.childImageSharp.fluid,
    html: node.html,
  }))
}
