import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #ffffff;
        font-family: 'Quicksand', normal;
        width: 100vw;
        height: 100vh;
    }
`;

export default GlobalStyle;
