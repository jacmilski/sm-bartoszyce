// @ts-nocheck
import React from 'react';
import { Wrapper } from './pageInfo-css';

const PageInfo = ({ title, paragraph }) => (
  <Wrapper>
    <h1>{title}</h1>
    <p>{paragraph}</p>
  </Wrapper>
);

export default PageInfo;