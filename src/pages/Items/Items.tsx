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
import * as S from './styles'
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

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="items" type="list" direction="vertical">
                    {(provided) => (
                        <Grid style={{ gridTemplateColumns: '46px 1fr' }}>
                            <List
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {itemsList.map((_, index) => (
                                    <S.Index>{String(index + 1).padStart(2, '0')}</S.Index>
                                ))}
                                {provided.placeholder}
                            </List>
                            <List
                                ref={provided.innerRef}
                                {...provided.droppableProps}

                            >
                                {itemsList.map((item, index) => (
                                    <Input.Draggable key={item.id} data={item} index={index} />
                                ))}
                                {provided.placeholder}
                            </List>
                        </Grid>
                    )
                    }
                </Droppable>
            </DragDropContext>
        </Container>
    )
}

export default Items
