// @ts-nocheck
import React from 'react';
import { NewsWrapper } from './news-css';
//import { MDXProvider } from '@mdx-js/react';
import { Link, graphql } from 'gatsby';

const NewsLayout = ({data, children}) => {

  //const shortcodes = { Link };

  console.log(data.datoCmsNews.id)

    return(
        <NewsWrapper>
          <Link to="/">wróć</Link>
          <h2>{data.datoCmsNews.newsTitle}</h2>
          <p>{data.datoCmsNews.newsDate}</p>
          <p>{data.datoCmsNews.newsParagraph}</p>
          {/* <MDXProvider components={shortcodes}>
            {children}
          </MDXProvider> */}
        </NewsWrapper>
    )
}

/* nie nazywać query! */
export const query = graphql`
  query ($id: String!) {
    datoCmsNews(id: {eq: $id}) {
      id
      newsTitle
      newsDate(formatString: "DD-MM-YYYY")
      newsParagraph
    }
  }
`

export default NewsLayout;
