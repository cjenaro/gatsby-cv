/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Failed to create posts', result.errors)
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node }) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: require.resolve('./src/templates/post.jsx'),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
