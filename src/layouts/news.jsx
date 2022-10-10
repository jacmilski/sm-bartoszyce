// @ts-nocheck
import React from 'react';
import { NewsWrapper } from './news-css';
import { MDXProvider } from '@mdx-js/react';
import { Link, graphql } from 'gatsby';

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
