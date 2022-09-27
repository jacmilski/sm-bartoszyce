// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

const AsideContainer = styled.aside`
    width: 20%;
    min-width: 200px;
    min-height: 250px;
    background-color: #fff;
    border-right: 2px solid #eee;
`;

const AsidePanel = () => {

    return (
        <AsideContainer>
            Aside panel
        </AsideContainer>
    )
}

export default AsidePanel;