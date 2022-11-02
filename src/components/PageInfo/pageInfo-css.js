// @ts-nocheck
import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 50px 50px;
    max-width: 350px;
    font-family: 'Sansita', sans-serif;
    color: #333;

    h1 {
        font-size: 44px;
        margin: 0;

    }

    p {
        font-size: 18px;
        margin: 15px 0 0;
    }

    @media screen and (max-width: 768px) {
        margin: 20px 20px;
        max-width: 100%;

        text-align: center;
    }
    @media screen and (max-width: 480px) {
        margin: 20px 10px;
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 42px;
        }

        p {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 480px) {
        h1 {
            font-size: 36px;
        }

        p {
            font-size: 14px;
        }
    }
`;