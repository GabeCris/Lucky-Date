import styled from "styled-components"
import { theme } from "@src/styles/theme"

const { spacing, colors } = theme

interface GridProps {
    col?: number
}

export const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`}; /* Duas colunas de largura automática */
    grid-gap: ${spacing.small}; 
    width: 100%;

    &::-webkit-scrollbar{
        width: 3px;
        height: 3px;
    }
    
    &::-webkit-scrollbar-track{
        background-color: ${colors.dark_blue_2};
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${colors.light_blue_1};
        border-radius: 6px;
    }
    
`
