import React from 'react'
import * as S from './styles'

const PlusIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <S.Icon width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12.0714 7.42857H7.42857V12.0714C7.42857 12.5821 7.01071 13 6.5 13C5.98929 13 5.57143 12.5821 5.57143 12.0714V7.42857H0.928571C0.417857 7.42857 0 7.01071 0 6.5C0 5.98929 0.417857 5.57143 0.928571 5.57143H5.57143V0.928571C5.57143 0.417857 5.98929 0 6.5 0C7.01071 0 7.42857 0.417857 7.42857 0.928571V5.57143H12.0714C12.5821 5.57143 13 5.98929 13 6.5C13 7.01071 12.5821 7.42857 12.0714 7.42857Z" fill="#D7D6D4" />
        </S.Icon>

    )
}

export default PlusIcon
