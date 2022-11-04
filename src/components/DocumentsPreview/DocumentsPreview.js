// @ts-nocheck
import React from 'react';
import { PreviewWrapper, PreviewInfoLabel } from './documentsPreview-css';
import slugify from 'slugify';

export const DocumentsPreview = ({ title, dir }) => {

  return title ? (

    <PreviewWrapper>
      <PreviewInfoLabel to={`/${dir}/${slugify(title, {
        lower: true,
      })}`}>
        <h2>{title}</h2>
      </PreviewInfoLabel>
    </PreviewWrapper>
  ) : (
    <PreviewWrapper>
      <PreviewInfoLabel>
        <h2>Brak dokumentów</h2>
      </PreviewInfoLabel>
    </PreviewWrapper>
  )};

export default DocumentsPreview;
