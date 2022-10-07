// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { graphql} from 'gatsby';
import PhotoPreview from '../components/PhotoPreview/PhotoPreview';
import PageInfo from '../components/PageInfo/PageInfo';


const GalleryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 20px;
`;

const GalleryPage = ({ data }) => {
    
    const { allMdx: { nodes }} = data;

    const infoData = {
      title: `Galeria zdjęć`,
      paragraph: `Ostatnie wydarzenia z życia szkoły...`
    }

    return (
        <>
          <PageInfo title={infoData.title} paragraph={infoData.paragraph}/>
          <GalleryWrapper>
              {nodes.map(node => {
                  return(
                  <PhotoPreview
                      key={node.id}
                      title={node.frontmatter?.title}
                      description={node.frontmatter?.description}
                      image={node.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData}
                      slug={node.frontmatter?.slug}
                  />
              )})}
          </GalleryWrapper>
        </>
)}

export const query = graphql`
    query {
    allMdx(filter: {frontmatter: {featuredImage: {absolutePath: {regex: "/gallery/"}}}}
  ) {
      nodes {
        id
        frontmatter {
          description
          slug
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: TRACED_SVG, quality: 80)
            }
          }
        }
      }
    }
  }
`

export default GalleryPage;