// @ts-nocheck
import React from 'react';
import { MainContainer, Aside, Main } from './main-css';

const MainPanel = ({ children }) => {
    return (
        <MainContainer>
            <Aside></Aside>
            <Main>{children}</Main>
        </MainContainer>
    )
}

export default MainPanel;