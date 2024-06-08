import { Title } from "@src/components/Title";
import Container from "@src/components/Utils/Container";
import { useParams } from "react-router-dom"
import { Categories, categories, participants } from "./data";
import ScoreBoard from "@src/components/ScoreBoard";

const GifGame = () => {

    const { game, category } = useParams();

    console.log(useParams())

    return (
        <Container>
            <Title.Root>
                <Title.Main text={game as string} />
                <Title.Subtitle text={category as string} />
            </Title.Root>

            <ScoreBoard items={categories}/>
        </Container>
    )
}

export default GifGame
