import React from 'react'
import * as S from './styles'

const TrashIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <S.Icon width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M11 0.785714H8.25L7.46429 0H3.53571L2.75 0.785714H0V2.35714H11M0.785714 12.5714C0.785714 12.9882 0.951275 13.3879 1.24597 13.6826C1.54067 13.9773 1.94037 14.1429 2.35714 14.1429H8.64286C9.05963 14.1429 9.45932 13.9773 9.75402 13.6826C10.0487 13.3879 10.2143 12.9882 10.2143 12.5714V3.14286H0.785714V12.5714Z" fill="#666E97" />
        </S.Icon>

    )
}

export default TrashIcon
