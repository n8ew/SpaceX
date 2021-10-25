import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    width: 100%;
    min-height: 100vh;
    // background-image: linear-gradient(to bottom right, ${({ theme }) => theme.colors.bgTop} 10% , ${({ theme }) => theme.colors.bgBottom });
    background-image: radial-gradient(circle at bottom right, ${({ theme }) => theme.colors.bgBottom} 10% , ${({ theme }) => theme.colors.bgTop });
    font-family: 'Roboto', sans-serif;
}

`