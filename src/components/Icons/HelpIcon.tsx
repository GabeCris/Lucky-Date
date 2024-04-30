import React from 'react'
import * as S from './styles'

const HelpIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <S.Icon width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M3.01431 12.8108H5.27504V15.0715H3.01431V12.8108ZM4.52146 0C8.55309 0.165787 10.3089 4.2351 7.91255 7.28708C7.28708 8.04066 6.27729 8.53802 5.77993 9.17103C5.27504 9.79649 5.27504 10.5501 5.27504 11.3036H3.01431C3.01431 10.0452 3.01431 8.98263 3.5192 8.22906C4.01656 7.47548 5.02635 7.03087 5.65182 6.53351C7.47548 4.8455 7.02333 2.45666 4.52146 2.26073C3.92188 2.26073 3.34685 2.49891 2.92288 2.92288C2.49891 3.34685 2.26073 3.92188 2.26073 4.52146H0C0 3.32229 0.476367 2.17224 1.3243 1.3243C2.17224 0.476367 3.32229 0 4.52146 0Z" fill="#181A27" />
        </S.Icon>

    )
}

export default HelpIcon
