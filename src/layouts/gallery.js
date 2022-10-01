// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXProvider } from '@mdx-js/react';
import { Link, graphql } from 'gatsby';

const ImageWraper = styled(GatsbyImage)`
    max-width: 600px;
    max-height: 400px;
`;

/* nie nazywać query! */

const GalleryLayout = ({ data }) => {
    const shortcodes = { Link };

    return(
        <div>
            {/* <h1>{data.mdx.frontmatter.title}</h1>
            <p>{data.mdx.frontmatter.description}</p>
            <ImageWraper image={data.mdx.frontmatter.featuredImage.childImageSharp.gatsbyImageData} alt="" /> */}
            {/* <MDXProvider components={shortcodes}>
                {children}
            </MDXProvider> */}
        </div>
    )
}

export default GalleryLayout;