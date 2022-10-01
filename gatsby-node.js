/* const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/gallery.js`);

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(post => {

    createPage({
      path: `gallery/${post.node.frontmatter.slug}`,
      component: `${blogPostTemplate}?__contentFilePath=${post.node.internal.contentFilePath}`,
      context: {
        slug: post.node.frontmatter.slug,
      },
    })
  });
} */