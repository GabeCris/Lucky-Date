import { ReactNode } from 'react'
import * as S from "./styles.ts"

interface GridProps {
    children: ReactNode,
    columns?: number
}

const Grid = ({ children, columns = 2 }: GridProps) => {
    return (
        <S.Grid col={columns}>
            {children}
        </S.Grid>
    )
}

export default Grid
