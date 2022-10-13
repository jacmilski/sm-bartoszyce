// @ts-nocheck
import styled from 'styled-components';

const ContactCss = {
    Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    `,

    InsideWrapper: styled.div`
    width: 70%;
    height: 70%;
    box-shadow: 7px -7px 2px 0 #90261f;

    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 310px;
    }

    @media screen and (max-width: 480px) {
        width: 95%;
        max-width: 295px;
    }
    `,

    InfoLabel: styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #444;
    color: #ccc;
    width: 100%;
    height: 100%;

    .title {
        font-size: 28px;
        padding: 12px 0;

        @media screen and (max-width: 1200px) {
            font-size: 23px;
        }

        @media screen and (max-width: 992px) {
            font-size: 23px;
        }

        @media screen and (max-width: 768px) {
            font-size: 21px;
        }

        @media screen and (max-width: 480px) {
            font-size: 19px;
        }
    }

    .item {
        font-size: 19px;
        padding: 4px 0;

        @media screen and (max-width: 1200px) {
            font-size: 17px;
            padding: 3px 0;
        }
        @media screen and (max-width: 992px) {
            font-size: 18px;
            padding: 3px 0;
        }

        @media screen and (max-width: 768px) {
            font-size: 17px;
            padding: 2px 0;
        }

        @media screen and (max-width: 480px) {
            font-size: 16px;
        }
    }

    .item span {
        margin-right: 5px;
    }

    ul {
        width: 70%;
    }
    `,
}

export default ContactCss;

