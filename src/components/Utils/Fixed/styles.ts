import styled from "styled-components";
import { FixedProps } from "./types";
import { theme } from "@src/styles/theme";

const { spacing } = theme

export const Fixed = styled.div<FixedProps>`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${spacing.small};

    ${(props: FixedProps) => {
        switch (props.position) {
            case 'bottom':
                return `bottom: 0; transform: translateX(-50%); left: 50%`;
            case 'top':
                return 'top: 60px; transform: translateX(-50%); left: 50%';
            case 'left':
                return `left: 0; transform: translateY(-50%); top: 50%`;
            case 'right':
                return `right: 0; transform: translateY(-50%); top: 50%`;
            case 'center':
                return 'left: 50%; top: 50%; transform: translate(-50%, -50%);';
            default:
                return '';
        }
    }}
`;
