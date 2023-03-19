import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    //background: teal;
    font-family: 'Josefin Sans', sans-serif;
    }

    a {
        text-decoration: none;
        font-size:18px;
    }
`;

export default GlobalStyle;
