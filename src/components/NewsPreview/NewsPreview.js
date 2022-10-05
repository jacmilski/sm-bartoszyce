// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';



const PreviewWrapper = styled.div`
  width: 350px;
  min-height: 50px;
  margin: 20px;
  box-shadow: 7px -7px 2px 0 #90261f;
`;

const PreviewInfoLabel = styled(Link)`
  display: block;
  width: 350px;
  min-height: 50px;
  background-color: #444;
  color: #ccc;
  padding: 5px 15px;
  font-family: 'sansita', sans-serif;


  h2, p {
    margin: 5px;
  }

  h2 {
    font-size: 18px;
  }
`;

const NewsPreview = ({ title, date, slug, excerpt }) => {
  
  return (
    <>
    <PreviewWrapper>
      <PreviewInfoLabel to={`/news/${slug}`}>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{excerpt}</p>
      </PreviewInfoLabel>
    </PreviewWrapper>
    </>
)};

export default NewsPreview;
