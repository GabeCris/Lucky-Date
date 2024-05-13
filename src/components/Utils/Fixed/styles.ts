import styled from "styled-components";
import { FixedProps } from "./types";

const spacing = "20px";

export const Fixed = styled.div<FixedProps>`
    color: red;
    position: fixed;
    ${(props: FixedProps) => {
        switch (props.position) {
            case 'bottom':
                return `bottom: ${spacing}; transform: translateX(-50%); left: 50%`;
            case 'top':
                return 'top: 80px; transform: translateX(-50%); left: 50%';
            case 'left':
                return `left: ${spacing}; transform: translateY(-50%); top: 50%`;
            case 'right':
                return `right: ${spacing}; transform: translateY(-50%); top: 50%`;
            case 'center':
                return 'left: 50%; top: 50%; transform: translate(-50%, -50%);';
            default:
                return '';
        }
    }}
`;
