import React from 'react'
import * as S from './styles'

const WheelIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <S.Icon width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="39.4179" cy="39.5822" r="37.5608" stroke="#4D5B97" stroke-width="2.28571" />
            <mask id="mask0_10_286" maskUnits="userSpaceOnUse" x="3" y="3" width="73" height="73">
                <circle cx="39.4179" cy="39.5822" r="36.4179" fill="white" />
            </mask>
            <g mask="url(#mask0_10_286)">
                <g opacity="0.2">
                    <path d="M39.4181 40.1792L57.9255 71.6739L39.4181 81.9703L20.9106 71.6739L39.4181 40.1792Z" fill="#666E97" />
                    <path d="M38.7824 39.4469L21.427 7.30298L3.03357 17.8017L2.25549 38.9662L38.7824 39.4469Z" fill="#666E97" />
                    <path d="M40.1022 39.5349L56.9741 7.13457L75.5228 17.3566L76.6178 38.507L40.1022 39.5349Z" fill="#666E97" />
                </g>
            </g>
            <path d="M45 39.5C45 42.5376 42.5376 45 39.5 45C36.4624 45 34 42.5376 34 39.5C34 36.4624 36.4624 34 39.5 34C42.5376 34 45 36.4624 45 39.5Z" fill="#4D5B97" />
            <path d="M39.6453 27.0625L34.7732 36.6104L44.2989 36.7187L39.6453 27.0625Z" fill="#4D5B97" />
        </S.Icon>
    )
}

export default WheelIcon
