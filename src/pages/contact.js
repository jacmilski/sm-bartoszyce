// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { PreviewWrapper, PreviewInfoLabel } from '../components/NewsPreview/newsPreview-css';
import { graphql, useStaticQuery } from 'gatsby';


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
const ContactWrapper = styled(PreviewWrapper)`
    width: 60%;
    height: 70%;
`;

const ContactInfoLabel = styled(PreviewInfoLabel)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .title {
        font-size: 23px;
        padding: 12px 0;
    }

    .item {
        font-size: 19px;
        padding: 4px 0;
    }

    .item span {
        margin-right: 5px;
    }

    ul {
        width: 70%;
    }
`;

const Contact = () => {

const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    address
                    phoneSecretary
                    title
                    emailSecretary
                    regon
                }
            }
        }
    `
);

const { site: {siteMetadata: {address, phoneSecretary, title, emailSecretary, regon}}} = data;

    return (
        <Wrapper>
            <ContactWrapper>
                <ContactInfoLabel>
                    <ul className="list">
                        <li className="title">{title}</li>
                        <li className="item">{address}</li>
                        <li className="item"><span>REGON:</span>{regon}</li>
                        <li className="item"><span>Telefon:</span>{phoneSecretary}</li>
                        <li className="item">Email:  {emailSecretary}</li>
                    </ul>
                </ContactInfoLabel>
            </ContactWrapper>
        </Wrapper>
    )
}

export default Contact;