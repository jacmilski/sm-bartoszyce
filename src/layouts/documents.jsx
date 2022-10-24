// @ts-nocheck
import React from 'react';
import { DocumentsWrapper } from './documents-css';
import { Link, graphql } from 'gatsby';

const DocumentsLayout = ({data}) => {

  console.log(data)

    return(
        <DocumentsWrapper>
          <Link to="/documents">wróć</Link>
          <h2>{data.datoCmsDocument.title}</h2>
          <div style={{width: '90%'}}>
            <p style={{width: '100%', whiteSpace: 'pre', overflowWrap: 'enywhere'}}>
            {data.datoCmsDocument.paragraph}
            </p>
          </div>
        </DocumentsWrapper>
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
