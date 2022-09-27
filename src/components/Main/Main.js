// @ts-nocheck
import React from 'react';
import AsidePanel from '../Aside/Aside';
import styled from 'styled-components';


const MainContainer = styled.section`
    width: 100%;
    min-height: 200px;
/*     background-color: #fff; */
    display: flex;
`;

const Aside = styled(AsidePanel)`
  
`;

const Main = styled.main`
    width: 80%;
    background-color: #e7e7e7;
    min-height: 250px;
`;

const MainPanel = ({ children }) => {

    return (
        <MainContainer>
            <Aside></Aside>
            <Main>{children}</Main>
        </MainContainer>
    )
}

export default MainPanel;