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
        background-image: url('static/bg.gif');
        margin: 0;
        padding: 0 0 0 0;
        font-family: 'Montserrat';
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