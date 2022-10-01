// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image";

const StyledImage = styled(GatsbyImage)`
  width: 100%;

  object-fit: cover;
`;

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  min-height: 220px;
  background-color: hsl(0, 0%, 95%);
  margin: 20px;
`;

const PreviewInfoLabel = styled.div`
  width: 100%;
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

const PhotoPreview = ({ title, description, image }) => {
  
  return (
    <>
      <PreviewWrapper>
        <StyledImage image={image} alt="" />
        <PreviewInfoLabel>
          <h2>{title}</h2>
          <p>{description}</p>
        </PreviewInfoLabel>
      </PreviewWrapper>
    </>
)};

export default PhotoPreview;
