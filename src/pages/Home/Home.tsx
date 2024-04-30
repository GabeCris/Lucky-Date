import { Button } from '@src/components/Button'
import Container from '@src/components/Container'
import { Input } from '@src/components/Input'
import { categories } from './list'
import { Title } from '@src/components/Title'
import { IconType } from '@src/types/types'

import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import { useState } from 'react'
import { useTour } from '@reactour/tour'

const Home = () => {
    const { setIsOpen } = useTour()

    const [tasks, setTasks] = useState([
        {
            id: "0",
            name: "Drama"
        },
        {
            id: "1",
            name: "Comédia"
        },
        {
            id: "2",
            name: "Documentário"
        },
        {
            id: "3",
            name: "Romance"
        },
        {
            id: "4",
            name: "Ação"
        },
        {
            id: "5",
            name: "Animação"
        },
    ])

    const reorder = <T,>(list: T[], startIndex: number, endIndex: number): T[] => {
        const result = Array.from(list);

        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const removeTask = (idToRemove: string) => {
        console.log(idToRemove.toString())
        // Filtrar o array de tasks para remover a task com o id fornecido
        const updatedTasks = tasks.filter(task => task.id !== idToRemove);
        // Atualizar o estado com o novo array de tasks
        setTasks(updatedTasks);

        console.log(updatedTasks)
    }

    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        const items = reorder(tasks, result.source.index, result.destination.index)

        setTasks(items)
        console.log(items)
    }


    return (
        <Container>

            <Title.Root>
                <Title.Main text='Roleta' />
                <Title.Subtitle text='Filmes' />
            </Title.Root>
            <Button.Root isPrimary navigateTo='teste'>
                <Button.Text text='Teste' />
                <Button.Icon icon={IconType.HELP} />
            </Button.Root>

            {/* <div style={{
                background: "rgba(19, 22, 32, 0.5)",
                width: "100vw",
                height: "100vh",
                position: 'absolute',
                top: 0,
                left: 0,
                backdropFilter: 'blur(1px)'
            }}>

            </div> */}


            <Button.Root action={() => setIsOpen(true)}>
                <Button.Text text='Iniciar Tuto' />
                <Button.Icon icon={IconType.HELP} />
            </Button.Root>

            <Button.Root navigateTo='/' data-joy="UM">
                <Button.Text text='Home' />
                <Button.Icon icon={IconType.HELP} />
            </Button.Root>

            <Button.Root isCard navigateTo='teste' data-joy="DOIS">
                <Button.Icon icon={IconType.DICE} />
                <Button.Text text='Dados' />
            </Button.Root>

            <div id='TRES' style={{
                "display": "grid",
                "gridTemplateColumns": "repeat(2, 1fr)",
                "gridGap": "20px",
            }}>
                <DragDropContext onDragEnd={onDragEnd}>

                    {categories.map((category) => (
                        <Input.Root>
                            <Input.Text value={"df,fsdkmfs"}></Input.Text>
                            <Input.Icon icon={category.icon} />
                        </Input.Root>
                    ))}
                </DragDropContext>
            </div>

            <Input.Root>
                <Input.Text value='KKKKKKKKKKKKK' />
                <Input.Icon icon={IconType.MOVIE} action={() => console.log("TESTE")} />
            </Input.Root>

            <Input.Root>
                <Input.Icon icon={IconType.FOOD} />
                <Input.Text placeholder='Teste' />
            </Input.Root>

            <Input.Root>
                <Input.Radio value={"sadmjksmdkamkdmsldalk"} />
                <Input.Icon icon={IconType.FOOD} />
            </Input.Root>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='tasks' direction='vertical'>
                    {(provided) => (
                        <section style={{
                            display: "grid",
                            gridTemplateColumns: "46px 1fr",
                            gridGap: "12px"
                        }} ref={provided.innerRef} {...provided.droppableProps} >
                            <div>
                                {tasks.map((_, index) => (<span style={{
                                    width: "46px",
                                    background: "red",
                                    height: "46px",
                                    display: "flex"
                                }}>{index}</span>))}
                            </div>
                            <div>
                                {tasks.map((task, index) => (<Input.Draggable key={task.id} data={task} index={index} onClick={() => removeTask(task.id)} />))}
                            </div>

                            {provided.placeholder}
                        </section>
                    )
                    }
                </Droppable>
            </DragDropContext>
        </Container >
    )
}

export default Home
