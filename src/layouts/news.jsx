// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { Link, graphql } from 'gatsby';

const NewsWrapper = styled.div`
  width: 95%;
  margin: 20px auto;
  border-left: 1px solid #0172BE;
  padding: 10px;

  h2 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
  }
`;

const NewsLayout = ({data, children}) => {

  const shortcodes = { Link };

    return(
        <NewsWrapper>
          <Link to="/">wróć</Link>
          <h2>{data.mdx.frontmatter.title}</h2>
          <p>{data.mdx.frontmatter.date}</p>
          <MDXProvider components={shortcodes}>
            {children}
          </MDXProvider>
        </NewsWrapper>
    )
}

/* nie nazywać query! */
export const query = graphql`
    query ($slug: String!) { 
        mdx(frontmatter: {slug: {eq: $slug}}) {
            body
            frontmatter {
                title
                date
                slug
            }
        }
    }
`;

export default NewsLayout;
