const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/news.jsx`);

  const result = await graphql(`
  query {
    allMdx {
      nodes {
        frontmatter {
          slug
        }
        internal {
          contentFilePath
        }
      }
    }
  }
  `)

  result.data.allMdx.nodes.forEach(news => {

    createPage({
      path: `news/${news.frontmatter.slug}`,
      component: `${blogPostTemplate}?__contentFilePath=${news.internal.contentFilePath}`,
      context: {
        slug: news.frontmatter.slug
      },
    })
  });
}