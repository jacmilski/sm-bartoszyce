const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/news.jsx`);
  const documentsTemplate = path.resolve(`src/layouts/documents.jsx`);


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

  result.data.allMdx.nodes.forEach(item => {

    if (item.frontmatter.slug.includes('info')) {
      createPage({
        path: `news/${item.frontmatter.slug}`,
        component: `${blogPostTemplate}?__contentFilePath=${item.internal.contentFilePath}`,
        context: {
          slug: item.frontmatter.slug
        },
      })
    } else {
      createPage({
        path: `document/${item.frontmatter.slug}`,
        component: `${documentsTemplate}?__contentFilePath=${item.internal.contentFilePath}`,
        context: {
          slug: item.frontmatter.slug
        },
      })
    }

  });
}