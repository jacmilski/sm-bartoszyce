// @ts-nocheck
import styled from 'styled-components';

const ContactCss = {
    Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 110%;
    `,

    InsideWrapper: styled.div`
    width: 70%;
    height: 70%;
    box-shadow: 7px -7px 2px 0 #90261f;

    @media screen and (max-width: 768px) {
        width: 90%;
        max-width: 310px;
        height: 65%;
    }

    @media screen and (max-width: 480px) {
        width: 85%;
        max-width: 295px;
        height: 55%;
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

        @media screen and (max-width: 768px) {
            font-size: 21px;
        }

        @media screen and (max-width: 480px) {
            font-size: 19px;
        }
    }

    .item {
        font-size: 16px;
        padding: 2px 0;

        @media screen and (max-width: 480px) {
            font-size: 16px;
            padding: 2px 0;
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

