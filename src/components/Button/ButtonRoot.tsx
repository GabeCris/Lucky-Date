import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from "./styles"
import { useNavigate } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    color?: 'primary' | 'secondary' | 'tertiary',
    isCard?: boolean,
    navigateTo?: string
    action?: () => void
}

const ButtonRoot = ({ children, color = 'primary', isCard, action, navigateTo, ...props }: ButtonProps) => {
    const navigate = useNavigate();

    const handleClick = () => navigateTo ? navigate(navigateTo) : action?.();

    return (
        <S.Button color={color} isCard={isCard} onClick={handleClick} {...props}>
            {children}
        </S.Button>
    )
}

export default ButtonRoot
