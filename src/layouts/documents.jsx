// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { DocumentsWrapper } from './documents-css';
import { Link, graphql } from 'gatsby';

const DocumentsWrapperLayout = styled(DocumentsWrapper)`

`;

const DocumentsLayout = ({data}) => {

    return(
        <DocumentsWrapperLayout>
          <Link to="/documents">wróć</Link>
          <h2>{data.datoCmsDocument.title}</h2>
          <div style={{width: '100%', overflowX: 'scroll'}}>
            <p style={{width: '100%', whiteSpace: 'pre'}}>
            {data.datoCmsDocument.paragraph}
            </p>
          </div>
        </DocumentsWrapperLayout>
    )
}

/* nie nazywać query! */
export const query = graphql`
    query ($id: String!) {
    datoCmsDocument(id: {eq: $id}) {
      title
      paragraph
      id
    }
  }
`;

export default DocumentsLayout;
