// @ts-nocheck
import React from 'react';
import DocumentsPreview from '../components/DocumentsPreview/DocumentsPreview';
import DocumentsCss from '../CSS/documents-css';
import { graphql } from 'gatsby';
import { FaFileDownload } from '@react-icons/all-files/fa/FaFileDownload';
import Seo from '../components/seo';


const Documents = ({ data }) => {

    const { allDatoCmsDocument: { nodes } } = data;

    const infoData = {
        title: `Dokumenty szkolne`,
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
                            dir={'document'}
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

export const Head = () => <Seo title='Dokumenty' />

export const query = graphql`
    query {
        allDatoCmsDocument {
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

export default Documents;