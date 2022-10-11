// @ts-nocheck
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
    FooterContainer,
    Author,
    FooterDiv,
    LeftSide,
    RightSide,
    MiddleSide,
    Border
} from './footer-css';
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
//import { FaWhatsappSquare } from "@react-icons/all-files/fa/FaWhatsappSquare";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import { FaHotel } from "@react-icons/all-files/fa/FaHotel";
import { FcManager } from "@react-icons/all-files/fc/FcManager";
import { FcBusinesswoman } from "@react-icons/all-files/fc/FcBusinesswoman";
//import { GrUserManager } from "@react-icons/all-files/gr/GrUserManager";

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
                        <li className="contact-item"><FaHotel className="icon-item"/><span>{address}</span></li>
                        <li className="contact-item"><span className="regon">REGON:</span><span>{regon}</span></li>
                        <Link to="#" className="email"><li className="contact-item"><FaEnvelope className="icon-item" /><span>{email_secretary}</span></li></Link>
                        {/* <li className="contact-item"><FaWhatsappSquare className="icon-item" /><span>...WhatsUp number</span></li> */}
                        <li className="contact-item"><FaPhoneSquareAlt className="icon-item" /><span>{phone_secretary}</span></li>
                    </ul>
                </LeftSide>
                <Border />
                <MiddleSide>
                    <h3>Dyrekcja:</h3>
                    <ul className="contact-list">
                        <li className="contact-item"><FcManager className="director" /><span>{name_director}</span></li>
                        <Link to="#" className="email"><li className="contact-item"><FaEnvelope className="icon-item" /><span>{email_director}</span></li></Link>
                        {/* <li className="contact-item"><FaWhatsappSquare className="icon-item" /><span>...WhatsUp number</span></li> */}
                        <li className="contact-item"><FaPhoneSquareAlt className="icon-item" /><span>{phone_director}</span></li>
                    </ul>
                </MiddleSide>
                <Border />
                <RightSide>
                <h3>Sekretariat:</h3>
                    <ul className="contact-list">
                        <li className="contact-item"><FcBusinesswoman className="director" /><span>{name_secretary}</span></li>
                        <Link to="#" className="email"><li className="contact-item"><FaEnvelope className="icon-item" /><span>{email_secretary}</span></li></Link>
                        {/* <li className="contact-item"><FaWhatsappSquare className="icon-item" /><span>...WhatsUp number</span></li> */}
                        {/* <li className="contact-item"><FaPhoneSquareAlt className="icon-item" /><span>{phone_director}</span></li> */}
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
