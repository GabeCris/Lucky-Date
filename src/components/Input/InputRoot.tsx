import { HTMLAttributes, ReactNode } from 'react'
import * as S from "./styles.ts"

interface InputProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode,
    isDraggable?: boolean
}

const InputRoot = ({ children, isDraggable, ...props }: InputProps) => {
    return (
        <S.Label isDraggable={isDraggable} {...props}>
            {children}
        </S.Label>
    )
}

export default InputRoot
