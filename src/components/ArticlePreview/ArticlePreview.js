// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PreviewWrapper = styled(Link)`
  position: relative;
  width: 100%;
  height: 280px;
  background-color: hsl(0, 0%, 95%);
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 25px;
  width: 80%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;

  h2, p {
    margin: 5px;
  }
`;

const ArticlePreview = ({ title, excerpt, image, slug }) => {

  console.log(slug)
  
  return (
    <PreviewWrapper to={`/articles/${slug}`}>
      <StyledImage image={image} alt="" />
      <PreviewInfoLabel>
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </PreviewInfoLabel>
    </PreviewWrapper>
)};

export default ArticlePreview;
