import styled from "styled-components"
import { theme } from "@src/styles/theme"

const { spacing, colors } = theme

export const List = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${spacing.extra_small}; 
    overflow-y: auto;
    margin-inline: -5px;
    width: 100%;

    &::-webkit-scrollbar{
        width: 3px;
    }
    
    &::-webkit-scrollbar-track{
        background-color: ${colors.dark_blue_2};
    }
    
    &::-webkit-scrollbar-thumb {
        height: 10px;
        background-color: ${colors.light_blue_1};
        border-radius: 6px;
    }
    
`
