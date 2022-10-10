// @ts-nocheck
import React from 'react';
import { Container, LeftBox, CenterBox, RightBox } from './intro-css';
import { graphql, useStaticQuery } from 'gatsby';

const Intro = () => {

    const data = useStaticQuery(query);

    const leftUrl = data.allFile.edges.find(({node}) => node.name.includes('bartoszyce-1'));
    const rightUrl = data.allFile.edges.find(({node}) => node.name.includes('logo_transparent'));
    const centerUrl = data.allFile.edges.find(({node}) => node.name.includes('tlo'));
    const herbUrl = data.allFile.edges.find(({node}) => node.name.includes('herb'));

    return (
        <Container>
            <LeftBox url={leftUrl.node.publicURL}></LeftBox>
            <CenterBox url={centerUrl.node.publicURL}>
                <img src={herbUrl.node.publicURL} alt="ikona" />
                {/*   <h1>Szkoła Muzyczna I stopnia w Bartoszycach</h1> */}
            </CenterBox>
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
export default Intro;