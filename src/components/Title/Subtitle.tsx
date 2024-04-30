import * as S from "./styles.ts"

interface SubtitleProps {
    text: string
}

const Subtitle = ({ text }: SubtitleProps) => {
    return (
        <S.Subtitle>
            {text}
        </S.Subtitle>
    )
}

export default Subtitle
