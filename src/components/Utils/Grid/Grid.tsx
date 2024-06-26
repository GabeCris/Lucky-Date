import { HTMLAttributes, ReactNode, forwardRef } from 'react'
import * as S from "./styles.ts"

interface GridProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode,
    columns?: number,
    isDraggable?: boolean
}

const Grid = forwardRef<HTMLDivElement, GridProps>(({ children, columns = 2, ...props }, ref) => {
    return (
        <S.Grid col={columns} ref={ref} {...props}>
            {children}
        </S.Grid>
    )
})

export default Grid
