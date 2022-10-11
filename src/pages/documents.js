// @ts-nocheck
import React from 'react';
import { graphql } from 'gatsby';

const Documents = ({ data }) => {

    //const { allFile: { nodes } } = data;

    return (
        <div>
            podstrona w trakcie realizacji
            <h1>Dokumenty</h1>
            <ul>
            {/* {nodes.map(document => (
                <li key={document.id}>
                    <a href="/static/static/" download>
                    {document.name}
                    </a>
                </li>
                ))} */}
                <li><a href="/static/statut.docx" open>Statut</a></li>
                <li><a href="/static/wso.docx" download>WSO</a></li>
            </ul>
        </div>
    )
}

export const query = graphql`
    query {
        allFile(filter: {absolutePath: {regex: "/documents/"}}) {
            nodes {
                id
                absolutePath
                name
            }
        }
    }
`

export default Documents;