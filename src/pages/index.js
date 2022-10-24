// @ts-nocheck
import React from 'react';
import PageInfo from '../components/PageInfo/PageInfo';
import NewsPreview from '../components/NewsPreview/NewsPreview';
import NewsWrapper from '../CSS/index-css';
import { graphql } from 'gatsby';
import slugify from 'slugify';

    const infoData = {
        title: `Aktualności`,
        paragraph: 'Wiadomości dla rodziców i uczniów'
    }


const MainPage = ({ data }) => {

    const { allDatoCmsNews: { nodes }} = data;

    console.log(Boolean(nodes.length))

  return Boolean(nodes.length) ? (
      <>
        <PageInfo title={infoData.title} paragraph={infoData.paragraph}/>
        <NewsWrapper>
              {nodes.map(({
                id,
                newsTitle,
                newsDate,
                newsParagraph
                }) => (
                  <NewsPreview
                      key={id}
                      title={newsTitle}
                      paragraph={newsParagraph}
                      slug={slugify(newsTitle, {
                        lower: true,
                      })}
                      date={newsDate}
                      isData={Boolean(nodes.length)}
                  />
              ))}
          </NewsWrapper>
      </>
  ) : (
    <PageInfo title="Brak wiadomości"/>
  )
}

/* nie nazywać query! */
export const query = graphql`
  query {
    allDatoCmsNews(sort: {order: DESC, fields: newsDate}) {
      nodes {
        id
        newsTitle
        newsDate(formatString: "DD-MM-YYYY")
        newsParagraph
      }
    }
  }
`

export default MainPage;