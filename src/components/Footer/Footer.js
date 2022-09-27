// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

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

    p {
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
    height: 170px;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top: 1px solid #ddd;
`;

const LeftSide = styled.div`
    width: 30%;
    height: 90%;
    background-color: #fff;
 /*    box-shadow: inset 56px 8px 24px -69px rgba(66, 68, 90, 1); */
    border-right: 2px solid #ddd;
    border-bottom-right-radius: 10px;
`;

const RightSide = styled(LeftSide)`
    border-right: none;
`;

const MiddleSide = styled(LeftSide)`
`;

const Footer = () => {

    return (
        <FooterContainer>
            <FooterDiv>
                <LeftSide>left side</LeftSide>
                <MiddleSide>middle-side</MiddleSide>
                <RightSide>right side</RightSide>
            </FooterDiv>
            <Author>
                <p>Wykonał <span>Jacek Michalski,</span> 2022</p>
            </Author>
        </FooterContainer>
    )
}

export default Footer;