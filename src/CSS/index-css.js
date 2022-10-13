// @ts-nocheck
import styled from 'styled-components';

export const NewsWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 30px 30px;

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`;

export default NewsWrapper;