import React from 'react'
import * as S from './styles'

const SportIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <S.Icon width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M8.20163 8.59248C8.17673 7.41286 7.92675 6.24885 7.46512 5.16302C4.51909 6.53869 2.35499 9.13432 1.61524 12.1972C2.04816 13.1891 2.67596 14.0839 3.46138 14.8285C4.20828 12.2313 5.899 10.0071 8.20163 8.59248ZM7.0044 4.23184C6.51094 3.37208 5.88208 2.59752 5.14204 1.93796C2.18952 3.55373 0.443965 6.89884 1.08638 10.4451C2.17005 7.7489 4.279 5.51342 7.0044 4.23184ZM13.0911 9.58855C13.3702 6.35051 12.2054 3.18061 9.92772 1.01002C9.45077 0.954864 8.25354 0.831572 6.71888 1.28581C8.59653 3.2315 9.67862 5.80908 9.75251 8.51202C10.7865 9.0806 11.9198 9.44602 13.0911 9.58855ZM9.04521 9.89678C8.03604 10.5095 7.15291 11.3089 6.4431 12.2523C9.10361 14.1114 12.4292 14.6889 15.4467 13.8032C16.0957 12.9336 16.5615 11.9413 16.8158 10.8864C15.9579 11.105 15.0764 11.2183 14.191 11.2238C12.4195 11.2205 10.6577 10.7663 9.04521 9.89678ZM5.85584 13.1316C5.36267 13.9752 5.02199 14.8966 4.81434 15.8635C6.2536 16.7468 7.93506 17.1531 9.61888 17.0244C11.3027 16.8956 12.9028 16.2384 14.191 15.1464C10.528 15.6688 7.5949 14.3418 5.85584 13.1316ZM11.7057 1.43181C13.4999 3.71596 14.3825 6.66199 14.1261 9.65993C15.1146 9.66202 16.097 9.50649 17.0365 9.19921C17.0365 9.13432 17.0462 9.06943 17.0462 9.00453C17.0462 5.50694 14.8172 2.54468 11.7057 1.43181Z" fill="#4D5B97" />
        </S.Icon>
    )
}

export default SportIcon
