import { Title } from "@src/components/Title";
import Container from "@src/components/Utils/Container";
import { useParams } from "react-router-dom"
import { categories, participants } from "./data";
import { Input } from "@src/components/Input";
import Grid from "@src/components/Utils/Grid";
import Fixed from "@src/components/Utils/Fixed";
import { Button } from "@src/components/Button";
import { Icon } from "@src/components/Icons/types";

const Category = () => {

    const { game } = useParams();

    return (
        <Container>
            <Title.Root>
                <Title.Main text={game as string} />
                <Title.Subtitle text="Selecione uma categoria" />
            </Title.Root>
            <Grid>
                {categories.map(({ text, icon }) => (
                    <Input.Root>
                        <Input.Radio value={text} name={"categories"} />
                        <Input.Icon icon={icon} />
                    </Input.Root>
                ))}
            </Grid>
            <Title.Root>
                <Title.Subtitle text="Selecione os participantes" />
            </Title.Root>
            <Grid columns={3}>
                {participants.map(({ text, icon }) => (
                    <Input.Root>
                        <Input.Radio value={text} name={"categories"} />
                        <Input.Icon icon={icon} />
                    </Input.Root>
                ))}
            </Grid>
        </Container>
    )
}

export default Category
