import { Button } from '@src/components/Button'
import Container from '@src/components/Utils/Container'
import { Title } from '@src/components/Title'
import { games } from './data'
import Grid from '@src/components/Utils/Grid';

const Home = () => {

    return (
        <Container>
            <Title.Root>
                <Title.Main text='Jogos' />
            </Title.Root>

            <Grid>
                {games.map(({ icon, text, route, id }) => (
                    <Button.Root isCard navigateTo={route} id={id}>
                        <Button.Icon icon={icon} />
                        <Button.Text text={text} />
                    </Button.Root>
                ))}
            </Grid>
        </Container >
    )
}

export default Home
