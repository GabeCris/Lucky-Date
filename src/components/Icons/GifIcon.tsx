import React from 'react'
import * as S from './styles'

const GifIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <S.Icon width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="37" cy="37" r="36" fill="#1C2033" stroke="#4D5B97" stroke-width="2" />
            <circle cx="37" cy="37" r="30" stroke="#4D5B97" stroke-width="2" stroke-dasharray="15 15" />
            <path d="M30.4258 50.1535C30.0229 50.1527 29.627 50.0471 29.2772 49.847C28.4896 49.4007 28 48.5343 28 47.5938V28.5598C28 27.6167 28.4896 26.7529 29.2772 26.3066C29.6353 26.1008 30.0422 25.995 30.4551 26.0002C30.8681 26.0054 31.2722 26.1214 31.625 26.3362L47.8924 36.0736C48.2314 36.2862 48.5109 36.5814 48.7046 36.9316C48.8984 37.2817 49 37.6753 49 38.0755C49 38.4756 48.8984 38.8693 48.7046 39.2194C48.5109 39.5695 48.2314 39.8647 47.8924 40.0773L31.6223 49.8174C31.2613 50.0357 30.8477 50.1519 30.4258 50.1535Z" fill="#666E97" />
        </S.Icon>
    )
}

export default GifIcon
