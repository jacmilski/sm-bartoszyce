// @ts-nocheck
import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
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

    @media screen and (max-width: 585px) {
        display: none;
    }
`;

export const Logo = styled.span`
    font-weight: 700;
    font-size: 20px;
    margin-left: 30px;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }
`;

export const NavigationList = styled.ul`
    list-style: none;
    display: flex;
`;

export const NavigationListItem = styled.li`
    font-weight: 600;
    font-size: 15px;
    margin-left: 32px;
    border-left: 2px solid #ddd;
    padding: 0 3px;

    :first-child {
        margin-left: -12px;
        border: none;
    }

    @media screen and (max-width: 768px) {
        margin-left: 20px;
        font-size: 13px;
    }
`;