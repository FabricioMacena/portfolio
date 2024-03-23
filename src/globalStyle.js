import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        color: #FFFFFF;
        font-family: 'Jura', sans-serif;
        user-select: none;
    }

    body{
        background-color: #0A0A0A;
    }
`;
