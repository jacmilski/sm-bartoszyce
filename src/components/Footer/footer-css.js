// @ts-nocheck
import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ddd;
    width: 100%;
`;

export const Author = styled.div`
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

export const FooterDiv = styled.div`
    width: 100%;
    min-height: 170px;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    border-top: 1px solid #ddd;
    padding-bottom: 15px;
    font-family: 'Sansita', sans-serif;
`;

export const LeftSide = styled.div`
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

    .director {
        font-size: 24px;
        margin-right: 5px;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    .regon {
        margin-right: 3px;
        font-weight: 700;
    }

`;

export const RightSide = styled(LeftSide)`
    border-right: none;
`;

export const MiddleSide = styled(LeftSide)`
    .contact-item:nth-of-type(2) .icon-item {
        color:  #0172BE;
    }
`;

export const Border = styled.div`
    width: 1px;
    min-height: 170px;
    background-color: #0172BE;
    align-self: center;
`;