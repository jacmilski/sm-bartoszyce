// @ts-nocheck
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavigationWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Sansita', sans-serif;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

    a {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        color: #90261f;
    }
`;

const Logo = styled.span`
    font-weight: 700;
    font-size: 20px;
    margin-left: 30px;

    img {
        display: block;
        height: 100%;
    }
`;

const NavigationList = styled.ul`
    list-style: none;
    display: flex;
`;

const NavigationListItem = styled.li`
    font-weight: 600;
    font-size: 15px;
    margin-left: 32px;

    :first-child {
        margin-left: -12px;
    }
`;


const Navigation = () => (
    <NavigationWrapper>
        <Logo><Link to="/">
            <img  src="/static/logo_cut_x80.png" alt="logo"/>
        </Link></Logo>
        <NavigationList>
            <NavigationListItem>
                <Link to="/">Tablica</Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to="/team">Kadra</Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to="/documents">Dokumenty</Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to="/plans">Plany zajęć</Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to="/gallery">Galeria</Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to="/contact">Kontakt</Link>
            </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
);

export default Navigation;