import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from "./styles"
import { useNavigate } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    isPrimary?: boolean,
    isCard?: boolean,
    navigateTo?: string
    action?: () => void
}

const ButtonRoot = ({ children, isPrimary, isCard, action, navigateTo, ...props }: ButtonProps) => {
    const navigate = useNavigate();

    const handleClick = () => navigateTo ? navigate(navigateTo) : action?.();

    return (
        <S.Button isPrimary={isPrimary} isCard={isCard} onClick={handleClick} {...props}>
            {children}
        </S.Button>
    )
}

export default ButtonRoot
