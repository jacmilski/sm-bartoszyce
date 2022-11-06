// @ts-nocheck
import React from 'react';
import Navigation2 from '../Navigation2/Navigation2';
import { AsideContainer, Godlo, CeaLogo, Border } from './aside-css';

const AsidePanel = () => {

    return (
        <AsideContainer>
            <Godlo src="/godlo_polski.svg_-255x300.png" alt="polskie godło" />
            <Border />
            <Navigation2 />
            <Border />
            <a href="https://www.gov.pl/web/cea/">
                <CeaLogo src="/Logo-CEA-kolorowe.png" alt="CEA-logo" /> {/* Logo-CEA-kolorowe.png */}
            </a>
            <Border />
        </AsideContainer>
    )
}

export default AsidePanel;