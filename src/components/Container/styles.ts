import styled from "styled-components"
import { theme } from "@src/styles/theme"

const { spacing } = theme

export const Container = styled.main`
    padding: ${spacing.medium} 20px;
    height: 100vh;
    max-height: calc(100vh - 64px);
`
