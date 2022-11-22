// @ts-nocheck
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image";

export const StyledImage = styled(GatsbyImage)`
    width: 100%;
    object-fit: cover;
`;

export const PreviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 350px;
    min-height: 220px;
    margin: 20px;

    @media screen and (max-width: 480px) {
        max-width: 220px;
        margin: 0;
    }
`;

export const PreviewInfoLabel = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #444;
    color: #ccc;
    padding: 5px 15px;
    font-family: 'sansita', sans-serif;

    h2, p {
        margin: 5px;
    }

    h2 {
        font-size: 18px;
        span {
            margin-right: 5px;
        }
    }

    @media screen and (max-width: 992px) {
        h2 {
            font-size: 16px;
        }
        p {
            font-size: 10px;
        }
    }
`;