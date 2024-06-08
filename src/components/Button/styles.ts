import styled from "styled-components"
import { theme } from "@src/styles/theme"

const { colors, spacing, radius, font } = theme

const backgroundColors = {
    primary: colors.yellow,
    secondary: colors.white,
    tertiary: colors.light_blue_2,
}
interface ButtonProps {
    color?: keyof typeof backgroundColors,
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
    background-color: ${(props: ButtonProps) => backgroundColors[props.color ?? 'primary']};
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

    
    span{
        color: ${(props: ButtonProps) => props.color == "tertiary" ? colors.white : colors.blue};
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
