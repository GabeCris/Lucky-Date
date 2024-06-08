import styled from "styled-components"
import { theme } from "@src/styles/theme"

const { spacing, colors } = theme

const buttonHeight = "45px"

export const Container = styled.main`
    padding: ${spacing.small};
    max-height: calc(100vh - 64px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacing.medium};
    overflow: hidden auto;
    position: relative;

    &:has([position-type="button"]){
        padding-bottom: calc(${spacing.small} * 2 + ${buttonHeight});
    }

    &::-webkit-scrollbar{
        width: 3px;
        height: 3px;
    }
    
    &::-webkit-scrollbar-track{
        background-color: ${colors.dark_blue_2};
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${colors.light_blue_1};
        border-radius: 6px;
    }
`
