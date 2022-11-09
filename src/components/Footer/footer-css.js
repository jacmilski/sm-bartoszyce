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
    position: relative;
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

    .admin {
        position: absolute;
        right: 10px;
        top: 7px;
        color: #66ADB4;
        font-weight: normal;

        a {
            text-decoration: none;
            color: #66ADB4;
        }

        a:visited, a:unvisited, a:active {
            color: #66ADB4;
        }
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

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 90%;
    background-color: #fff;

    @media screen and (max-width: 992px) {
        font-size: 90%;
    }
    @media screen and (max-width: 768px) {
        font-size: 100%;
        width: 100%;
    }

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
        margin-right: 5px;

        @media screen and (max-width: 992px) {
            font-size: 90%;
        }
        @media screen and (max-width: 768px) {
            font-size: 85%;
        }
    }

    #regon {
        margin-right: 3px;
        font-weight: 700;
    }

    #address {
        color: #90261F;
    }

    #email-secretary {
        color: #444444;
    }

    #phone-secretary {
        color: #0172BE;
    }

`;

export const RightSide = styled(LeftSide)`
    border-right: none;

    #email-secretary {
        color: #444;
    }

    p {
        margin: 3px 0;

        @media screen and (max-width: 992px) {
            font-size: 95%;
        }
        @media screen and (max-width: 768px) {
            font-size: 100%;
        }
    }

    p span {
        font-weight: 700;

        @media screen and (max-width: 992px) {
            font-size: 100%;
        }
        @media screen and (max-width: 768px) {
            font-size: 100%;
        }
    }
`;

export const MiddleSide = styled(LeftSide)`
    #email-director {
        color: #444;
    }

    #phone-director {
        color: #0172BE;
    }
`;

export const Border1 = styled.div`
    width: 2px;
    min-height: 170px;
    background-color: #0172BE;
    align-self: center;



    @media screen and (min-width: 992px) {
        display: block;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Border2 = styled.div`
    width: 85%;
    height: 1px;
    background-color: #0172BE;
    align-self: center;

    @media screen and (min-width: 992px) {
        display: none;
    }
    @media screen and (max-width: 992px) {
        display: none;
    }
    @media screen and (max-width: 768px) {
        display: block;
    }
`;