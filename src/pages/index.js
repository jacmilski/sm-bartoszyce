// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import PageInfo from '../components/PageInfo/PageInfo';
import NewsPreview from '../components/NewsPreview/NewsPreview';
import { graphql } from 'gatsby';

const NewsWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 30px 30px;
  `;

    const infoData = {
        title: `Aktualności`,
        paragraph: 'Wiadomości dla rodziców i uczniów'
    }


const MainPage = ({ data }) => {

  console.log('index', data)

    const { allMdx: { nodes }} = data;

  return (
      <>
        <PageInfo title={infoData.title} paragraph={infoData.paragraph}/>
        <NewsWrapper>
              {nodes.map(({
                id,
                excerpt,
                frontmatter: {
                  title,
                  date,
                  slug
                }}) => (
                  <NewsPreview
                      key={id}
                      title={title}
                      excerpt={excerpt}
                      slug={slug}
                      date={date}
                  />
              ))}
          </NewsWrapper>
      </>
  )
}

/* nie nazywać query! */
export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {slug: {regex: "/info/"}}}
      ) {
      nodes {
        id
        body
        frontmatter {
          title
          date
          slug
        }
        internal {
          contentFilePath
        }
        excerpt(pruneLength: 20)
      }
    }
  }
`;

export default MainPage;