import styled from "styled-components"
import { theme } from "@src/styles/theme"

const { colors, spacing, radius } = theme

interface InputProps {
    isDraggable?: boolean
}

export const Input = styled.input`
    border: none;
    outline: none;
    margin: 0;
    height: 100%;
    width: 100%;
    background: transparent;
    color: ${colors.white};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;
    
    &:focus{
        pointer-events: all;
    }
`

export const Label = styled.label<InputProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    
    border: none;
    outline: none;
    margin: 0;
    border-radius: ${radius};
    background: ${colors.blue};
    padding: ${spacing.extra_small} ${spacing.small};
    width: 100%;
    height: 46px;
    cursor: pointer;

    input[type="radio"]{
        display: none;
    }
    
    svg{
        min-width: 20px;

        +input{
            text-align: right;
        }
    }

    &:has(input:checked),
    &:has(input:focus)
    {
        background: ${colors.light_blue_1};
        color: ${colors.dark_blue_2};

        svg{
            path{
                fill: ${colors.dark_blue_2};
            }
        }
    }

    ${(props: InputProps) => props.isDraggable && `
        gap: 24px;
    
        svg{
            +input{
                text-align: left;
            }
        }
    `}
`

export const Index = styled.aside`
    background-color: ${colors.dark_blue_2};
    width: 46px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
`