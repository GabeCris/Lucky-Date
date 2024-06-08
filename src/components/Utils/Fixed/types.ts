import { ReactNode } from "react";

type PositionValue = 'top' | 'left' | 'right' | 'bottom' | 'center';

export interface FixedProps {
    position?: PositionValue;
    type?: "button" | "modal";
    children: ReactNode;
}