// @ts-nocheck
import React from 'react';
import { NewsWrapper } from './news-css';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const NewsLayout = ({ data }) => {

  console.log(data.datoCmsNews.newsBlocks[0].newsContentPicture.gatsbyImageData
    )

  const image = data.datoCmsNews.newsBlocks[0].newsContentPicture.gatsbyImageData;

    return(
        <NewsWrapper>
          <Link to="/">wróć</Link>
          <h2>{data.datoCmsNews.newsTitle}</h2>
          <p>{data.datoCmsNews.newsDate}</p>
          <p>{data.datoCmsNews.newsParagraph}</p>
          {/* <img src={image} alt="" width="450"/> */}
          <GatsbyImage image={image} />
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
          gatsbyImageData(width: 450, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default NewsLayout;
