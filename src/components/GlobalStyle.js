import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        padding:0;
        margin:0;
    }
    :root{
        --primary-background:#ddd;
    }
`;

export default GlobalStyle;