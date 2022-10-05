// @ts-nocheck
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaWhatsappSquare } from "@react-icons/all-files/fa/FaWhatsappSquare";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import { FaHotel } from "@react-icons/all-files/fa/FaHotel";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ddd;
    width: 100%;
`;

const Author = styled.div`
    width: 100%;
    height: 35px;
    background-color: #444;
    color: #ddd;

    p {
        font-family: 'Sansita', sans-serif;
        font-size: 14px;
        height: 100%;
        font-weight: 400;
        line-height: .6;
        text-align: center;
    }

    span {
        font-weight: bold;
    }
`;

const FooterDiv = styled.div`
    width: 100%;
    min-height: 170px;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top: 1px solid #ddd;
    padding-bottom: 15px;
    font-family: 'Sansita', sans-serif;
`;

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 90%;
    background-color: #fff;

    h2 {
        margin-top: 0;
    }

    .contact-list {
        list-style: none;
        color: #333;
    }

    .contact-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 35px;
    }

    .icon-item {
        font-size: 24px;
        color: #0172BE;
        margin-right: 5px;
    }

    .contact-item:nth-of-type(1) .icon-item {
        color:  #90261f;
    }

    .contact-item:nth-of-type(2) .icon-item {
        color:  #27A219;
    }

    .email .contact-item .icon-item {
        color: #333;
    }

    a {
        text-decoration: none;
        color: #333;
    }

`;

const RightSide = styled(LeftSide)`
    border-right: none;
`;

const MiddleSide = styled(LeftSide)`
`;

const Border = styled.div`
    width: 1px;
    min-height: 170px;
    background-color: #0172BE;
`;

const Footer = () => {

    return (
        <FooterContainer>
            <FooterDiv>
                <LeftSide>
                    <h3>Dane kontaktowe:</h3>
                    <ul className="contact-list">
                        <li className="contact-item"><FaHotel className="icon-item"/><span>...adres szkoły</span></li>
                        <Link to="#" className="email"><li className="contact-item"><FaEnvelope className="icon-item" /><span>...email szkoły</span></li></Link>
                        <li className="contact-item"><FaWhatsappSquare className="icon-item" /><span>...WhatsUp number</span></li>
                        <li className="contact-item"><FaPhoneSquareAlt className="icon-item" /><span>798 527 256</span></li>
                    </ul>
                </LeftSide>
                <Border />
                <MiddleSide>middle-side</MiddleSide>
                <Border />
                <RightSide>right side</RightSide>
            </FooterDiv>
            <Author>
                <p>wykonał <span>Jacek Michalski,</span> 2022</p>
            </Author>
        </FooterContainer>
    )
}

export default Footer;
