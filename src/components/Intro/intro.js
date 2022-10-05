// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Container = styled.div`
background-color: #fff;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 210px;
    text-align: center;
    line-height: 10;
    font-size: 32px;

    @media screen and (max-width: 576px) {
        width: 100%;
    }
`;

const LeftBox = styled.div`
    width: 380px;
    height: 100%;
    background-color: yellow;
    background-image: url(${({url}) => url});
    background-size: cover;
    background-position: center;
    text-align: center;
    line-height: 5;
    box-shadow:
        0 0 0 #fff inset,
        -40px 0 30px #fff inset,
        0 0 0 #fff inset,
        0 0 0 #fff inset;
`;

const CenterBox = styled.div`
    width: 380px;
    height: 100%;

    background-image: url(${({url}) => url});;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    h1 {
        position: absolute;
        top: 57%;
        left: 50%;
        transform: translate(-50% ,-40%);
        width: 100%;
        text-align: center;
        line-height: 1;
        font-size: 1.2em;
        letter-spacing: 2px;
        color: #90261f;
        opacity: 1;
    }

    img {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50% ,-50%);
        display: block;
        width: 60px;
        height: 70px;
    }

    @media screen and (max-width: 576px) {
        h1 {
            font-size: .9em !important;
        }
    }
    @media screen and (max-width: 768px) {

    }
    @media screen and (max-width: 992px) {
        h1 {
            font-size: 1em;
        }
    }
    @media screen and (max-width: 1200px) {
        background-size: contain;
    }

`;

const RightBox = styled(LeftBox)`
    background-color: blue;
    background-image: url(${({url}) => url});;
    box-shadow:
        0 0 0 #fff inset,
        40px 0 30px  #fff inset,
        0 0 0 #fff inset,
        0 0 0 #fff inset;
`;


const Intro = () => {

    const data = useStaticQuery(query);

    const leftUrl = data.allFile.edges.find(({node}) => node.name.includes('bartoszyce-1'));
    const rightUrl = data.allFile.edges.find(({node}) => node.name.includes('bartoszyce-2'));
    const centerUrl = data.allFile.edges.find(({node}) => node.name.includes('tlo'));
    const herbUrl = data.allFile.edges.find(({node}) => node.name.includes('herb'));

    return (
        <Container>
            <LeftBox url={leftUrl.node.publicURL}></LeftBox>
                <CenterBox url={centerUrl.node.publicURL}>
                    <img src={herbUrl.node.publicURL} alt="ikona" />
                    <h1>Szkoła Muzyczna w Bartoszycach</h1>
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