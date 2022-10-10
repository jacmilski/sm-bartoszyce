// @ts-nocheck
import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
    font-family: 'Sansita', sans-serif;
    width: 100%;
    height: 240px;
    background-color: #fff;

    a {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        color: #90261f;
    }

    @media screen and (max-width: 586px) {
        display: block;

        a {
            font-size: 18px;
        }
    }

    @media screen and (min-width: 585px) {
        display: none;
    }
`;

export const Logo = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin: 10px 0;

    img {
        display: block;
        height: 80%;
    }
`;

export const NavigationList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 20px;
`;

export const NavigationListItem = styled.li`
    font-weight: 600;
    font-size: 15px;
    padding: 5px 5px;
`;