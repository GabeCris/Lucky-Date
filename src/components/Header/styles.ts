import { theme } from "@src/styles/theme"
import styled from "styled-components"

const { spacing } = theme

export const Header = styled.header`
    width: 100%;
    height: 64px;
    background-color: ${(props) => props.theme.colors.dark_blue_2};

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-inline: 20px;
`

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${spacing.extra_small}
`