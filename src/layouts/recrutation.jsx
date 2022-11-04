// @ts-nocheck
import React from 'react';
import { DocumentsWrapper } from './documents-css';
import { Link, graphql } from 'gatsby';

const RecrutationLayout = ({data}) => {

    return(
        <DocumentsWrapper>
          <Link to="/recrutation">wróć</Link>
          <h2>{data.datoCmsRecrutation.title}</h2>
          <div style={{width: '90%'}}>
            <p style={{width: '100%', whiteSpace: 'pre', overflowWrap: 'enywhere'}}>
            {data.datoCmsRecrutation.paragraph}
            </p>
          </div>
        </DocumentsWrapper>
    )
}

/* nie nazywać query! */
export const query = graphql`
  query ($id: String!) {
    datoCmsRecrutation(id: {eq: $id}) {
      id
      title
      paragraph
    }
  }
`;

export default RecrutationLayout;
