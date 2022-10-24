// @ts-nocheck
import React from 'react';
import { PreviewWrapper, PreviewInfoLabel } from './documentsPreview-css';

export const DocumentsPreview = ({ title }) => {

  return title ? (

    <PreviewWrapper>
      <PreviewInfoLabel to={`/document/${title.toLowerCase()}`}>
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
