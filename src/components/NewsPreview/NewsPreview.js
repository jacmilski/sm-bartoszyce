// @ts-nocheck
import React from 'react';
import { PreviewWrapper, PreviewInfoLabel } from './newsPreview-css';

const NewsPreview = ({ title, date, slug, excerpt }) => {

  console.log(title)
  
  return title ? (

    <PreviewWrapper>
      <PreviewInfoLabel to={`/news/${slug}`}>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{excerpt}</p>
      </PreviewInfoLabel>
    </PreviewWrapper>
  ) : (
    <PreviewWrapper>
      <PreviewInfoLabel>
        <h2>Brak wiadomości</h2>
      </PreviewInfoLabel>
    </PreviewWrapper>
  )};

export default NewsPreview;
