// @ts-nocheck
const path = require(`path`);
const slugify = require('slugify');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false
      }
    }
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const newsTemplate = path.resolve(`src/layouts/news.jsx`);
  const documentsTemplate = path.resolve(`src/layouts/documents.jsx`);


  const documentsResult = await graphql(`
  query {
    allDatoCmsDocument {
      nodes {
        id
        title
      }
    }
  }
`);

  const newsResult = await graphql(`
  query {
    allDatoCmsNews {
      nodes {
        id
        newsTitle
      }
    }
  }
`);



  documentsResult.data.allDatoCmsDocument.nodes.forEach(item => {

    const slugifiedTitle = slugify(item.title, {
      lower: true
    });

    createPage({
      path: `document/${slugifiedTitle}`,
      component: documentsTemplate,//`${blogPostTemplate}?__contentFilePath=${item.internal.contentFilePath}`,
      context: {
        id: item.id,
      },
    })
  });

  newsResult.data.allDatoCmsNews.nodes.forEach(item => {

    const slugifiedTitle = slugify(item.newsTitle, {
      lower: true
    });

    createPage({
      path: `news/${slugifiedTitle}`,
      component: newsTemplate,//`${blogPostTemplate}?__contentFilePath=${item.internal.contentFilePath}`,
      context: {
        id: item.id,
      },
    })
  });
}