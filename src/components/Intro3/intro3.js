// @ts-nocheck
import React from 'react';
import { Container, RightBox } from './intro3-css';
import { graphql, useStaticQuery } from 'gatsby';

const Intro3 = () => {

    const data = useStaticQuery(query);

    const rightUrl = data.allFile.edges.find(({node}) => node.name.includes('logo_transparent'));

    return (
        <Container>
            <RightBox url={rightUrl.node.publicURL}></RightBox>
        </Container>
    )
}

export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    publicURL
                    name
                }
            }
        }
    }
`
export default Intro3;