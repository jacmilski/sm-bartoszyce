// @ts-nocheck
import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 210px;
    text-align: center;
    line-height: 10;
    font-size: 32px;

    @media screen and (max-width: 576px) {
        width: 100%;
    }
`;

export const CenterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 100%;

    background-image: url(${({url}) => url});;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    h1 {
        position: absolute;
        top: 57%;
        left: 50%;
        transform: translate(-50% ,-40%);
        width: 100%;
        text-align: center;
        line-height: 1;
        font-size: 1.2em;
        letter-spacing: 2px;
        color: #90261f;
        opacity: 1;
    }

    img {
        display: block;
        width: 110px;
    }

    @media screen and (max-width: 576px) {
        h1 {
            font-size: .9em !important;
        }
    }
    @media screen and (max-width: 640px) {
        width: 400px;
    }
    @media screen and (max-width: 992px) {
        h1 {
            font-size: 1em;
        }
    }
    @media screen and (max-width: 1200px) {
        background-size: contain;
    }

`;

/* tu dać logo transparent przeskalowane i dodać gradient */
export const RightBox = styled.div`
    width: 600px;
    height: 100%;
    text-align: center;
    line-height: 5;
    background-image: url(${({url}) => url}), radial-gradient( #86cace, #519ba4);
    background-position: center;
    background-repeat: no-repeat;
    box-shadow:
        0 0 0 #fff inset,
        40px 0 30px  #fff inset,
        0 0 0 #fff inset,
        0 0 0 #fff inset;

    @media screen and (max-width: 768px) {
        width: 700px;
    }
`;