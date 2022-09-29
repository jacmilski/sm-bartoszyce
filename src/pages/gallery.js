// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const GalleryContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const Header = styled.header`
    width: 100%;

    h1 {
        font-size: 36px;
        text-align: center;
        font-family: 'Open Sans';
    }
`;

const GalleryBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 20px;
`;

const GalleryItem = styled(GatsbyImage)`
    width: 300px;
    height: 170px;
    margin: 30px;
`;

const header = {
    title: `Galeria zdjęć`,
    description: `...ostatnie wydarzenia`
}


const Gallery = ({ data }) => {

    return (
        <GalleryContainer>
            <Header>
                <h1>{header.title}</h1>
            </Header>
            <p>{header.description}</p>
            <GalleryBox>
                {data.allFile.edges.map(({ node }) => (
                    <GalleryItem
                        key={node.id}
                        image={node.childImageSharp.gatsbyImageData}
                    />
                ))}
            </GalleryBox>
        </GalleryContainer>
    )
}

export const query = graphql`
  query {
    allFile(filter: {name: {regex: "/gallery/"}}) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: TRACED_SVG, quality: 80, formats: JPG)
          }
        }
      }
    }
  }
`

export default Gallery;