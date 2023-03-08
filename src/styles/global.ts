import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --header-height: 3rem;
        --nav-width: 68px;
    
        --first-color: #32A287;
        --first-color-alt: #A9FDAC;
        --white-color: #F1FFE7;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f6f6f6;
        font-family: 'Quicksand', normal;
        width: 100%;
        height: 100%;
        max-width: 100%;
    }
`;

export default GlobalStyle;
