// @ts-nocheck
import React from 'react';
import { DocumentsWrapper } from './documents-css';
import { MDXProvider } from '@mdx-js/react';
import { Link, graphql } from 'gatsby';

const DocumentsLayout = ({data, children}) => {

  const shortcodes = { Link };

    return(
        <DocumentsWrapper>
          <Link to="/documents">wróć</Link>
          <h2>{data.mdx.frontmatter.title}</h2>
          <p>{data.mdx.frontmatter.date}</p>
          <MDXProvider components={shortcodes}>
            {children}
          </MDXProvider>
        </DocumentsWrapper>
    )
}

/* nie nazywać query! */
export const query = graphql`
    query ($slug: String!) { 
        mdx(frontmatter: {slug: {eq: $slug}}) {
            body
            frontmatter {
                title
                slug
            }
        }
    }
`;

export default DocumentsLayout;
