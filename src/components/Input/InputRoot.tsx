import { ReactNode } from 'react'
import * as S from "./styles.ts"

interface InputProps {
    children?: ReactNode,
    isDraggable?: boolean
}

const InputRoot = ({ children, isDraggable, ...props }: InputProps) => {
    return (
        <S.Label isDraggable {...props}>
            {children}
        </S.Label>
    )
}

export default InputRoot
