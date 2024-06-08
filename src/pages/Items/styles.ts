import styled from "styled-components"
import { theme } from "@src/styles/theme"

const { font, colors } = theme;

export const Index = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    background-color: ${colors.dark_blue_2};
    height: 46px;
    width: 46px;
    border-radius: 10px;
    color: ${colors.white};
    font-size: ${font.small};
`
