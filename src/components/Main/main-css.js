// @ts-nocheck
import styled from 'styled-components';
import AsidePanel from '../Aside/Aside';

export const MainContainer = styled.section`
    width: 100%;
    min-height: 200px;
    display: flex;
`;

export const Aside = styled(AsidePanel)`
  
`;

export const Main = styled.main`
    width: 80%;
    background-color: #e7e7e7;
    min-height: 250px;

    @media screen and (max-width: 992px) {
        min-width: 280px;
    }

    @media screen and (max-width: 480px) {
        min-width: 340px;
    }
`;