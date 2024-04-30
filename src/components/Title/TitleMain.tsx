import * as S from "./styles.ts"

interface TitleProps {
    text: string
}

const TitleMain = ({ text }: TitleProps) => {
    return (
        <S.Title>
            {text}
        </S.Title>
    )
}

export default TitleMain
