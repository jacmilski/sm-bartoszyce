// @ts-nocheck
import React from 'react';
import GalleryWrapper from '../CSS/gallery-css';
import { graphql} from 'gatsby';
import PhotoPreview from '../components/PhotoPreview/PhotoPreview';
import PageInfo from '../components/PageInfo/PageInfo';
import slugify from 'slugify';
import Seo from '../components/seo';

const GalleryPage = ({ data }) => {

    const { allDatoCmsGallery: { nodes }} = data;

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
                      title={node?.heading}
                      description={node?.paragraph}
                      image={node?.picture?.gatsbyImageData}
                      slug={slugify(node.heading, {
                        lower: true,
                      })}
                  />
              )})}
          </GalleryWrapper>
        </>
)}

export const query = (graphql`
  query {
    allDatoCmsGallery {
      nodes {
        heading
        id
        paragraph
        picture {
          gatsbyImageData(placeholder: TRACED_SVG, width: 300)
        }
      }
    }
  }
`);

export const Head = () => <Seo title='Galeria' />

export default GalleryPage;