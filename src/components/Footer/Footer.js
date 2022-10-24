// @ts-nocheck
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
    FooterContainer,
    Author,
    FooterDiv,
    LeftSide,
    RightSide,
    MiddleSide,
    Border1,
    Border2
} from './footer-css';
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import { FaHotel } from "@react-icons/all-files/fa/FaHotel";
import { FcManager } from "@react-icons/all-files/fc/FcManager";
import { FcBusinesswoman } from "@react-icons/all-files/fc/FcBusinesswoman";

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    address,
                    phoneSecretary,
                    phoneDirector,
                    emailSecretary,
                    emailDirector,
                    directorName,
                    secretaryName,
                    regon,
                }
            }
        }
    `)

    const address = data.site.siteMetadata.address;
    const phone_secretary = data.site.siteMetadata.phoneSecretary;
    const email_secretary = data.site.siteMetadata.emailSecretary;
    const name_director = data.site.siteMetadata.directorName;
    const name_secretary = data.site.siteMetadata.secretaryName;
    const email_director = data.site.siteMetadata.emailDirector;
    const phone_director = data.site.siteMetadata.phoneDirector;
    const regon = data.site.siteMetadata.regon

    return (
        <FooterContainer>
            <FooterDiv>
                <LeftSide>
                    <h3>Dane kontaktowe:</h3>
                    <ul className="contact-list">
                        <li className="contact-item"><FaHotel id="address" className="icon-item" /><span>{address}</span></li>
                        <li className="contact-item"><span id="regon">REGON:</span><span>{regon}</span></li>
                        <li className="contact-item"><FaEnvelope id="email-secretary" className="icon-item" /><span>{email_secretary}</span></li>
                        {/* <li className="contact-item"><FaWhatsappSquare className="icon-item" /><span>...WhatsUp number</span></li> */}
                        <li className="contact-item"><FaPhoneSquareAlt id="phone-secretary" className="icon-item" /><span>{phone_secretary}</span></li>
                    </ul>
                </LeftSide>
                <Border1 />
                <Border2 />
                <MiddleSide>
                    <h3>Dyrekcja:</h3>
                    <ul className="contact-list">
                        <li className="contact-item"><FcManager id="director" className="icon-item" /><span>{name_director}</span></li>
                        <li className="contact-item"><FaEnvelope id="email-director" className="icon-item" /><span>{email_director}</span></li>
                        <li className="contact-item"><FaPhoneSquareAlt id="phone-director" className="icon-item" /><span>{phone_director}</span></li>
                    </ul>
                </MiddleSide>
                <Border2 />
                <Border1 />
                <RightSide>
                <h3>Sekretariat:</h3>
                    <ul className="contact-list">
                        <li className="contact-item"><FcBusinesswoman className="icon-item"  /><span>{name_secretary}</span></li>
                        <li className="contact-item"><FaEnvelope id="email-secretary" className="icon-item" /><span>{email_secretary}</span></li>
                    </ul>
                    <p><span>Sekretariat czynny:</span></p>
                    <p>wtorek, środa, piątek - godz. 15:30 - 19:30</p>
                </RightSide>
            </FooterDiv>
            <Author>
                <p>wykonał <span>Jacek Michalski,</span> 2022</p>
            </Author>
        </FooterContainer>
    )
}

export default Footer;
