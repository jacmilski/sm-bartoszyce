import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    body {
        background-image: url('/bg.gif');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        margin: 0;
        padding: 0 0 0 0;
        font-family: 'Sansita', sans-serif;
        color: #333;
    }
    p {
        font-size: 16px;
    }
    ul {
    padding: 0;
    margin: 0;
    }
`;

export default GlobalStyle;