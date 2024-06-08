import { Title } from "@src/components/Title";
import Container from "@src/components/Utils/Container";
import { useParams } from "react-router-dom"
import { Categories, categories, participants } from "./data";
import { Input } from "@src/components/Input";
import Grid from "@src/components/Utils/Grid";
import Fixed from "@src/components/Utils/Fixed";
import { Button } from "@src/components/Button";
import { Icon } from "@src/components/Icons/types";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import List from "@src/components/Utils/List";
import { useState } from "react";

const Items = () => {

    const { game, category } = useParams();

    const [itemsList, setItemsList] = useState(categories)

    const reorder = (list: Categories[], startIndex: number, endIndex: number): Categories[] => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1); // Remover um elemento da posição startIndex
        result.splice(endIndex, 0, removed); // Inserir o elemento removido na posição endIndex
        return result;
    };

    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        const reordenedItems = reorder(itemsList, result.source.index, result.destination.index)
        setItemsList(reordenedItems)
    }


    return (
        <Container>
            <Title.Root>
                <Title.Main text={game as string} />
                <Title.Subtitle text={category as string} />
            </Title.Root>

            <List>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="items" type="list" direction="vertical">
                        {(provided) => (
                            <List
                                isDraggable
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {itemsList.map((item, index) => (
                                    <Input.Draggable key={item.id} data={item} index={index} />
                                ))}
                                {provided.placeholder}
                            </List>
                        )
                        }
                    </Droppable>
                </DragDropContext>

                <Button.Root color="tertiary" onClick={() => console.log("ADICIONOU")}>
                    <Button.Text text="Adicionar" />
                    <Button.Icon icon={Icon.PLUS} />
                </Button.Root>
            </List>

            <Fixed position={"bottom"}>
                <Button.Root color="secondary" navigateTo={`/${game}/categoria`}>
                    <Button.Icon icon={Icon.ARROW_LEFT} />
                    <Button.Text text="Categorias" />
                </Button.Root>

                <Button.Root navigateTo={`/${game}/${category?.toLowerCase()}/jogar`}>
                    <Button.Text text={game ?? 'jogar'} />
                    <Button.Icon icon={Icon.ARROW_RIGHT} />
                </Button.Root>
            </Fixed>
        </Container>
    )
}

export default Items
