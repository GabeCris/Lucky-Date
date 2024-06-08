import styled from "styled-components"
import { theme } from "@src/styles/theme"

const { spacing, colors } = theme

interface ListProps {
    isDraggable?: boolean
}

export const List = styled.div<ListProps>`
    display: flex;
    flex-direction: column;
    row-gap: ${spacing.extra_small}; 
    overflow: hidden auto;
    width: 100%;

    ${(props: ListProps) => props.isDraggable && `
       max-height: 40vh;
       gap: 0;
    `}

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
