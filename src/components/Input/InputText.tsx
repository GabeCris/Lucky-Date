import { InputHTMLAttributes } from 'react';
import * as S from './styles';

const InputText = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {

    return (
        <S.Input type='text' maxLength={20} minLength={3} {...props} />
    )
}

export default InputText
