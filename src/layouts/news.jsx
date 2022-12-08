// @ts-nocheck
import React from 'react';
import { NewsWrapper } from './news-css';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

const NewsLayout = ({ data }) => {

  const image = data.datoCmsNews.newsPicture.gatsbyImageData;

    return(
        <NewsWrapper>
          <Link to="/">wróć</Link>
          <p>{data.datoCmsNews.newsDate}</p>
          <h2>{data.datoCmsNews.newsTitle}</h2>
          <p>{data.datoCmsNews.newsParagraph}</p>
          <GatsbyImage image={image} />
        </NewsWrapper>
    )
}

/* nie nazywać query! */
export const query = graphql`
  query ($id: String!) {
    datoCmsNews(id: {eq: $id}) {
      id
      newsDate(formatString: "DD-MM-YYYY")
      newsTitle
      newsParagraph
      newsPicture {
        gatsbyImageData(placeholder: TRACED_SVG, width: 450)
      }
      newsVideo {
        url
      }
    }
  }
`

export default NewsLayout;
