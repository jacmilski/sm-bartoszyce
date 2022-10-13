// @ts-nocheck
import React from 'react';
import Navigation2 from '../Navigation2/Navigation2';
import { AsideContainer, Godlo, CeaLogo, Border } from './aside-css';
import { Link } from 'gatsby';

const AsidePanel = () => {

    return (
        <AsideContainer>
            <Godlo src="/static/godlo_polski.svg_-255x300.png" alt="polskie godło"/>
            <Border />
            <Navigation2 />
            <Border />
            <a href="https://www.gov.pl/web/cea/">
                <CeaLogo src="/static/Logo-CEA-kolorowe.png" alt="CEA-logo" /> {/* Logo-CEA-kolorowe.png */}
            </a>
            <Border />
        </AsideContainer>
    )
}

export default AsidePanel;