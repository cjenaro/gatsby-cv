import { graphql, useStaticQuery } from 'gatsby'

export const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
        edges {
          node {
            frontmatter {
              title
              description
              slug
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
      }
    }
  `)

  return data.allMarkdownRemark.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    description: node.frontmatter.description,
    slug: node.frontmatter.slug,
    date: node.frontmatter.date,
    html: node.html,
    image: node.frontmatter.image.childImageSharp.fluid,
  }))
}
