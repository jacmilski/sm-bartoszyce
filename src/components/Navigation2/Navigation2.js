// @ts-nocheck
import React from 'react';
import { Link } from 'gatsby';
import { NavigationWrapper, Logo, NavigationList, NavigationListItem } from './navigation2-css';

const Navigation2 = () => (
    <NavigationWrapper>
        <Link to="/">
            <Logo>
            <img  src="/logo_cut_x80.png" alt="logo"/>
            </Logo>
        </Link>
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
                <Link to="/parents-councel">Rada Rodziców</Link>
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
            <NavigationListItem>
                <Link to="/psycho-care">Opieka psycholog.</Link>
            </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
);

export default Navigation2;