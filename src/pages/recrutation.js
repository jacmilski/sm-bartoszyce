// @ts-nocheck
import React from 'react';
import DocumentsPreview from '../components/DocumentsPreview/DocumentsPreview';
import DocumentsCss from '../CSS/documents-css';
import { graphql } from 'gatsby';
import { FaFileDownload } from "@react-icons/all-files/fa/FaFileDownload";
import Seo from '../components/seo';


const Recrutation = ({ data }) => {

    const { allDatoCmsRecrutation: { nodes } } = data;

    const infoData = {
        title: `Dokumenty rekrutacyjne`,
    }

    return (
        <>
            <DocumentsCss.DocumentPageInfo title={infoData.title} paragraph={''} />
            <DocumentsCss.DocumentsWrapper>
                {nodes.map(({
                    id,
                    title,
                    documentFile: {
                        url
                    }
                }) => (
                    <DocumentsCss.DocumentElementWrapper key={id}>
                        <DocumentsPreview
                            title={title}
                            id={id}
                            dir={'recrutation'}
                        />
                        <a
                            href={`${url}`}
                            download
                            title="pobierz"
                        >
                            <FaFileDownload className="icon" />
                        </a>
                    </DocumentsCss.DocumentElementWrapper>
                ))}
            </DocumentsCss.DocumentsWrapper>
        </>
    )
}

export const query = graphql`
    query {
        allDatoCmsRecrutation {
            nodes {
                id
                title
                documentFile {
                    url
                }
            }
        }
    }
`;

export const Head = () => <Seo title='Rekrutacja do szkoły muzycznej' />

export default Recrutation;