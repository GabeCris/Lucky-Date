import React from 'react'
import * as S from './styles'

const DiceIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <S.Icon width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="1" y="1" width="66" height="66" rx="4.69231" stroke="#4D5B97" stroke-width="2" />
            <circle cx="14.3077" cy="14.3077" r="6.15385" fill="#666E97" />
            <circle cx="53.6924" cy="14.3077" r="6.15385" fill="#666E97" />
            <circle cx="14.3077" cy="53.6923" r="6.15385" fill="#666E97" />
            <circle cx="53.6924" cy="53.6923" r="6.15385" fill="#666E97" />
            <circle cx="34" cy="34" r="6.15385" fill="#666E97" />
        </S.Icon>
    )
}

export default DiceIcon
