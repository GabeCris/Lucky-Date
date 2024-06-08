import { HTMLAttributes, ReactNode, forwardRef } from 'react'
import * as S from "./styles.ts"

interface ListProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
}

const List = forwardRef<HTMLDivElement, ListProps>(({ children, ...props }, ref) => {
    return (
        <S.List {...props} ref={ref}>
            {children}
        </S.List>
    )
})

export default List
