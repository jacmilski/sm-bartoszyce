// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import PageInfo from '../components/PageInfo/PageInfo';
import { NewsPreview as DocumentsPreview } from '../components/NewsPreview/NewsPreview';
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

    const { allMdx: { nodes } } = data;

    const infoData = {
        title: `Dokumenty szkolne`,
    }

    return (
        <>
            <DocumentPageInfo title={infoData.title} paragraph={''} />
            <DocumentsWrapper>
                {nodes.map(({
                    id,
                    excerpt,
                    frontmatter: {
                    title,
                    slug
                }}) => (
                    <DocumentElementWrapper>
                        <DocumentsPreview
                            key={id}
                            title={title}
                            excerpt={excerpt}
                            slug={slug}
                            path={'document'}
                        />
                        <a href={slug === 'document-status' ? '/static/statut.docx' : '/static/wso.docx'} download key={id} title="pobierz"><FaFileDownload className="icon" />{/* pobierz */}</a>
                    </DocumentElementWrapper>
                ))}
            </DocumentsWrapper>
        </>
    )
}

export const query = graphql`
    query {
        allMdx(filter: {frontmatter: {slug: {regex: "/document/"}}}) {
            nodes {
                id
                frontmatter {
                    title
                    slug
                }
                internal {
                    contentFilePath
                }
            }
        }
    }
`;

export default Documents;