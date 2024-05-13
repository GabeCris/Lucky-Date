import * as S from './styles.ts'
import { FixedProps } from './types.ts'

const Fixed = ({ position = 'center', children }: FixedProps) => {
    return (
        <S.Fixed position={position}>
            {children}
        </S.Fixed>
    )
}

export default Fixed
