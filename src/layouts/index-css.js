// @ts-nocheck
import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: 100vh - 50px;
    margin: 0 auto;

    @media screen and (max-width: 992px) {
        width: 100%;
    }
`;

export const Header = styled.header`
    display: block;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;

    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

export const Header2 = styled.header`
    display: none;
    position: relative;
    top: 0;
    left: 0;
    z-index: 100;

    @media screen and (max-width: 1200px) {
        display: block;
    }

    @media screen and (max-width: 640px) {
        display: none;
    }
`;

export const Header3 = styled.header`
    display: none;
    position: relative;
    top: 0;
    left: 0;
    z-index: 100;

    @media screen and (max-width: 640px) {
        display: block;
    }
`;