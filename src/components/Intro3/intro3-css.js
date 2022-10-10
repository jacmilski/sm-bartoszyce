// @ts-nocheck
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 210px;
`;

/* dodać logo transparenti gradient */
export const RightBox = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${({url}) => url}), radial-gradient( #86cace, #519ba4);
    background-position: center;
    background-repeat: no-repeat;
`;