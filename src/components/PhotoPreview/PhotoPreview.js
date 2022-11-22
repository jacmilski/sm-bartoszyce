// @ts-nocheck
import React from 'react';
import {StyledImage, PreviewWrapper, PreviewInfoLabel } from './photoPreview-css';

const PhotoPreview = ({ title, description, image, date }) => {
  
  return (
    <>
      <PreviewWrapper>
        <StyledImage image={image} alt="" />
        <PreviewInfoLabel>
          <h2><span>{date}</span>{title}</h2>
          <p>{description}</p>
        </PreviewInfoLabel>
      </PreviewWrapper>
    </>
)};

export default PhotoPreview;
