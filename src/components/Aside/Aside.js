// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const AsideContainer = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 20%;
    min-width: 200px;
    min-height: 250px;
    background-color: #fff;
    border-right: 2px solid #eee;

    a {
        width: 90%;
        text-align: center;
    }
`;

const ImageBox = styled.img`
    background-image: url(${({ url }) => url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 70%;
    margin-top: 15px;
`;

const Border = styled.div`
    width: 75%;
    height: 1px;
    margin: 15px 0 0;
    background-color: #ddd;
`;

const Godlo = styled(ImageBox)`
`;

const CeaLogo = styled(ImageBox)`
`;

const AsidePanel = () => {

    return (
        <AsideContainer>
            <Godlo src="/static/godlo_polski.svg_-255x300.png" alt="polskie godło"/>
            <Border />
            <Link to="https://www.gov.pl/web/cea/">
                <CeaLogo src="/static/Logo-CEA-kolorowe.png" alt="CEA-logo" /> {/* Logo-CEA-kolorowe.png */}
            </Link>
            <Border />
            
        </AsideContainer>
    )
}

export default AsidePanel;