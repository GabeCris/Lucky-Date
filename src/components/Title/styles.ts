import styled from "styled-components"
import { theme } from "@src/styles/theme"

const { colors, font, spacing } = theme

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${spacing.extra_small};
    width: 100%;
`

export const Title = styled.h1`
    color: ${colors.white};
    font-size: ${font.large};
    line-height: ${font.large};
    font-weight: 500;
    `

export const Subtitle = styled.h2`
    color: ${colors.light_blue_1};
    font-size: ${font.medium};
    line-height: ${font.medium};
    font-weight: 400;
`
