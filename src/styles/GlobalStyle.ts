import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"

const { colors } = theme

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    p,
    span,
    h1, 
    h2, 
    label,
    input,
    div,
    button{
        text-transform: uppercase;
        font: 500 14px "Oswald", sans-serif;
    }

    body{
        background: ${colors.dark_blue_1};
    }
`

