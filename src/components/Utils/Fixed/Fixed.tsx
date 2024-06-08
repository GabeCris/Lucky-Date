import * as S from './styles.ts'
import { FixedProps } from './types.ts'

const Fixed = ({ position = 'center', children, type = "button" }: FixedProps) => {
    return (
        <S.Fixed position={position} position-type={type}>
            {children}
        </S.Fixed>
    )
}

export default Fixed
