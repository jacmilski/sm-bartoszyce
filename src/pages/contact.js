// @ts-nocheck
import React from 'react';
import ContactCss from '../CSS/contact-css';
import { graphql, useStaticQuery } from 'gatsby';

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
        <ContactCss.Wrapper>
            <ContactCss.InsideWrapper>
                <ContactCss.InfoLabel>
                    <ul className="list">
                        <li className="title">{title}</li>
                        <li className="item">{address}</li>
                        <li className="item"><span>REGON:</span>{regon}</li>
                        <li className="item"><span>Telefon:</span>{phoneSecretary}</li>
                        <li className="item">Email:  {emailSecretary}</li>
                    </ul>
                </ContactCss.InfoLabel>
            </ContactCss.InsideWrapper>
        </ContactCss.Wrapper>
    )
}

export default Contact;