// @ts-nocheck
import React from 'react';
import { NewsWrapper } from './news-css';
import { Link, graphql } from 'gatsby';

const NewsLayout = ({ data }) => {

  console.log(data.datoCmsNews.newsBlocks[0].newsContentPicture.url
    )

  const image = data.datoCmsNews.newsBlocks[0].newsContentPicture.url;

    return(
        <NewsWrapper>
          <Link to="/">wróć</Link>
          <h2>{data.datoCmsNews.newsTitle}</h2>
          <p>{data.datoCmsNews.newsDate}</p>
          {/* <GatsbyImage image={image} /> */}
          <p>{data.datoCmsNews.newsParagraph}</p>
          <img src={image} alt="" width="450"/>
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
      newsBlocks {
        id
        newsContentPicture {
          url
        }
      }
    }
  }
`

export default NewsLayout;
