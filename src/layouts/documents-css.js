// @ts-nocheck
import styled from 'styled-components';

export const DocumentsWrapper = styled.div`
    width: 95%;
    margin: 20px auto;
    border-left: 1px solid #0172BE;
    padding: 10px;

    h2 {
        margin-bottom: 0;
    }

    p {
        margin-top: 0;
    }

    @media screen and (max-width: 480px) {
        iframe {
            display: none;
        }
    }
    @media screen and (min-width: 481px) {
        iframe {
            max-width: 250px;
        }
    }
    @media screen and (min-width: 768px) {
        iframe {
            max-width: 530px;
        }
    }
    @media screen and (min-width: 1200px) {
        iframe {
            max-width: 700px;
        }
    }
`;