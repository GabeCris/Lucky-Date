import { ReactNode } from 'react'
import * as S from "./styles.ts"

interface ListProps {
    children: ReactNode
}

const List = ({ children }: ListProps) => {
    return (
        <S.List>
            {children}
        </S.List>
    )
}

export default List
