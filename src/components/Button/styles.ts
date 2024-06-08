import styled from "styled-components"
import { theme } from "@src/styles/theme"

const { colors, spacing, radius, font } = theme

interface ButtonProps {
    isPrimary?: boolean
    isCard?: boolean
}

interface TextProps {
    size?: string
}

export const Button = styled.button<ButtonProps>`
    border: none;
    outline: none;
    margin: 0;
    transition: all .4s;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${spacing.extra_small};
    border-radius: ${radius};
    background-color: ${(props: ButtonProps) => props.isPrimary ? colors.yellow : colors.white};
    padding: ${spacing.extra_small} ${spacing.medium};
    min-width: 132px;
    cursor: pointer;
        
    &:active{
        filter: brightness(0.7);
    }

    &:not(:has(span)){
        padding: 4px 6px;
        min-width: 28px;
        min-height: 24px;
        border-radius: 2px;
    }

    ${(props: ButtonProps) => props.isCard && `

        flex-direction: column;
        background-color: ${colors.blue};
        min-width: 150px;
        min-height: 150px;

        span{
            color: ${colors.white};
        }
    `}
`

export const Text = styled.span<TextProps>`
    font-size: ${(props: TextProps) => font[props.size ?? 'small']};
    font-weight: 500;
    color: ${colors.blue};
`
