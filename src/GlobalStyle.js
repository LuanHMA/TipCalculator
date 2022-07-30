import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        border: none;
    }
    body{
        font-size: 24px;
        background-color:hsl(185, 41%, 84%);
        font-family: 'Space Mono', monospace;
        font-weight: 700;
    }
`