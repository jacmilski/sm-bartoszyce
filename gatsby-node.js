/* const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)

  const result = await  graphql(`
  query queryArticles {
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 50)
          frontmatter {
            title
            slug
            author
            featuredImage {
              id
              childImageSharp {
                gatsbyImageData(width: 1200, height: 700, quality: 80)
              }
            }
          }
        }
      }
    }
  }
  `);

  console.log(result.data.allMdx.edges.node)

    // Create blog post pages.
    result.data.allMdx.edges.forEach(post => {
      console.log(post.node)
      createPage({
        // Path for this page — required
        path: `${post.node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
        },
      })
    });
} */
