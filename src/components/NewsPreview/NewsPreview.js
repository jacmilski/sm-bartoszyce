// @ts-nocheck
import React from 'react';
import { PreviewWrapper, PreviewInfoLabel } from './newsPreview-css';

export const NewsPreview = ({ title, date, slug, excerpt, path }) => {

  return title ? (

    <PreviewWrapper>
      <PreviewInfoLabel to={`/${path}/${slug}`}>
        <h2>{title}</h2>
        { slug.includes('info') && <p>{date}</p>}
        <p>{excerpt}</p>
      </PreviewInfoLabel>
    </PreviewWrapper>
  ) : (
    <PreviewWrapper>
      <PreviewInfoLabel>
        <h2>{slug.includes('info') ? 'Brak wiadomości' : 'Brak dokumentów'}</h2>
      </PreviewInfoLabel>
    </PreviewWrapper>
  )};

export default NewsPreview;
