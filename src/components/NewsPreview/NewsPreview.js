// @ts-nocheck
import React from 'react';
import { PreviewWrapper, PreviewInfoLabel } from './newsPreview-css';

export const NewsPreview = ({ title, date, paragraph, slug }) => {

 
  const excerpt = paragraph.split(' ').slice(0, 3).join(' ');

  return  (

    <PreviewWrapper>
      <PreviewInfoLabel to={`/news/${slug}`}>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{excerpt}...</p>
      </PreviewInfoLabel>
    </PreviewWrapper>
  )
};

export default NewsPreview;
