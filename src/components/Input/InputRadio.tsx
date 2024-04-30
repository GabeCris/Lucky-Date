import { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string,
}

const InputRadio = ({ value, ...props }: InputProps) => {
    return (
        <>
            <S.Input type='radio' {...props} />
            {value}
        </>
    )
}

export default InputRadio
