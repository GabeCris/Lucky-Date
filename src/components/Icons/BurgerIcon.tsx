import React from 'react'
import * as S from './styles'

const BurgerIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <S.Icon width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1 1H18M1 6.165H18M1 11.33H18" stroke="#1C2033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </S.Icon>

    )
}

export default BurgerIcon
