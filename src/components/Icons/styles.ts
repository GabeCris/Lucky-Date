import styled from "styled-components"
import { theme } from "@src/styles/theme"

export const Icon = styled.svg`
    &, path{
        fill: ${props => props.color};
    }
`
