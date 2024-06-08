import { HTMLAttributes, ReactNode, forwardRef } from 'react'
import * as S from "./styles.ts"

interface ListProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    isDraggable?: boolean
}

const List = forwardRef<HTMLDivElement, ListProps>(({ children, isDraggable, ...props }, ref) => {
    return (
        <S.List {...props} isDraggable={isDraggable} ref={ref}>
            {children}
        </S.List>
    )
})

export default List
