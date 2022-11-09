// @ts-nocheck
import React from 'react';
import { Container, CenterBox, RightBox } from './intro2-css';
import { graphql, useStaticQuery } from 'gatsby';

const Intro2 = () => {

    const data = useStaticQuery(query);

    const rightUrl = data.allFile.edges.find(({node}) => node.name.includes('logo_transparent'));
    const centerUrl = data.allFile.edges.find(({node}) => node.name.includes('tlo'));
    const herbUrl = data.allFile.edges.find(({node}) => node.name.includes('herb_black'));

    return (
        <Container>
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
export default Intro2;