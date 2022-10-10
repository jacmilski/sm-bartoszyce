// @ts-nocheck
import styled from 'styled-components';

export const AsideContainer = styled.aside`
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

    @media screen and (max-width: 480px) {
        min-width: 140px;
    }
`;

export const ImageBox = styled.img`
    background-image: url(${({ url }) => url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 70%;
    margin-top: 15px;
`;

export const Border = styled.div`
    width: 75%;
    height: 1px;
    margin: 15px 0 0;
    background-color: #ddd;
`;

export const Godlo = styled(ImageBox)`
`;

export const CeaLogo = styled(ImageBox)`
`;