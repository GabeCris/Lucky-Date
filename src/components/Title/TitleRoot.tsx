import { ReactNode } from 'react'
import * as S from "./styles.ts"

interface TitleProps {
    children?: ReactNode
}

const TitleRoot = ({ children }: TitleProps) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}

export default TitleRoot
