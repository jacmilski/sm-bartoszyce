// @ts-nocheck
import React from 'react';
import { PreviewWrapper, PreviewInfoLabel } from './newsPreview-css';

export const NewsPreview = ({ title, date, paragraph, slug }) => {

 
  const excerpt = paragraph.split(' ').slice(0, 3).join(' ');

  return  (

    <PreviewWrapper>
      <PreviewInfoLabel to={`/news/${slug}`}>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{excerpt}...</p>
      </PreviewInfoLabel>
    </PreviewWrapper>
  )/*  : (
    <PreviewWrapper>
      <PreviewInfoLabel>
        <h2>Brak wiadomości</h2>
      </PreviewInfoLabel>
    </PreviewWrapper>
  ) */};

export default NewsPreview;
