import { theme } from "@src/styles/theme";
import { styled } from "styled-components";

const { colors, spacing, radius, font } = theme;

interface ItemProps {
    excluded?: boolean
}

export const Board = styled.div`
    background-color: ${colors.blue};
    padding: ${spacing.extra_small};
    border-radius: ${radius};
`

export const Item = styled.li<ItemProps>`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;

    ${props => props.excluded && `
        opacity: .5;
        
        :not(span){
            text-decoration: line-through;
        }
    `}
`

export const Text = styled.p`
font-size: ${font.extra_small};
    color: ${colors.white};
    font-weight: 400;
`

export const Index = styled.span`
    font-size: ${font.extra_small};
    color: ${colors.light_blue_2};
    margin-right: 5px;
`