// @ts-nocheck
import styled from 'styled-components';
import { Link } from 'gatsby';

export const PreviewWrapper = styled.div`
    width: 350px;
    min-height: 50px;
    margin: 20px;
    box-shadow: 7px -7px 2px 0 #90261f;

    @media screen and (max-width: 768px) {
        max-width: 210px;
        margin: 15px;
    }

    @media screen and (max-width: 480px) {
        max-width: 200px;
    }
`;

export const PreviewInfoLabel = styled(Link)`
    display: block;
    width: 350px;
    min-height: 50px;
    background-color: #444;
    color: #ccc;
    padding: 5px 15px;
    font-family: 'sansita', sans-serif;


    h2, p {
        margin: 5px;
    }

    h2 {
        color: #ccc;
        font-size: 18px;
    }

    @media screen and (max-width: 768px) {
        max-width: 100%;

        h2 {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 480px) {
        max-width: 200px;

        h2 {
            font-size: 16px;
        }

        p {
            font-size: 14px;
        }
    }
`;