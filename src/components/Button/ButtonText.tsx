import * as S from './styles';

interface ButtonProps {
    text: string;
    size?: string
}

const ButtonText = ({ text = "Botão", size }: ButtonProps) => {
    return (
        <S.Text size={size}>
            {text}
        </S.Text>
    )
}

export default ButtonText
