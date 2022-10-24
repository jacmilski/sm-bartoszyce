// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import PageInfo from '../components/PageInfo/PageInfo';
import DocumentsPreview from '../components/DocumentsPreview/DocumentsPreview';
import { NewsWrapper } from '../CSS/index-css';
import { graphql } from 'gatsby';
import { FaFileDownload } from "@react-icons/all-files/fa/FaFileDownload";

const DocumentsWrapper = styled(NewsWrapper)`
    margin: 0;
`;

const DocumentPageInfo = styled(PageInfo)`

`;

const DocumentElementWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        text-decoration: none;
        color: #444444;
    }

    a:hover {
        font-weight: bold;
    }

    .icon {
        color: #90261F;
        font-size: 28px;
    }
`;

const Documents = ({ data }) => {

    const { allDatoCmsDocument: { nodes } } = data;

    const infoData = {
        title: `Dokumenty szkolne`,
    }

    console.log(nodes[0].url)

    return (
        <>
            <DocumentPageInfo title={infoData.title} paragraph={''} />
            <DocumentsWrapper>
                {nodes.map(({
                    id,
                    title,
                    documentFile: {
                        url
                    }
                }) => (
                    <DocumentElementWrapper key={id}>
                        <DocumentsPreview
                            title={title}
                            id={id}
                        />
                        <a
                            href={`${url}`}
                            download
                            title="pobierz"
                        >
                            <FaFileDownload className="icon" />
                        </a>
                    </DocumentElementWrapper>
                ))}
            </DocumentsWrapper>
        </>
    )
}

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