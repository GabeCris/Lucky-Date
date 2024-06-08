import { Draggable } from '@hello-pangea/dnd';
import { Input } from '.';
import { Icon } from "@src/components/Icons/types";
import Grid from '../Utils/Grid';
import * as S from './styles'

interface InputProps {
    data: any;
    index: number
    onClick?: () => void
}

const InputDraggable = ({ data, index, onClick }: InputProps) => {
    return (
        <Draggable draggableId={data.id} index={index}>
            {(provided) => (
                <Grid
                    isDraggable
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <S.Index>{String(index + 1).padStart(2, '0')}</S.Index>
                    <Input.Root isDraggable data-drag={data.id}>
                        <Input.Icon icon={Icon.DRAG} />
                        <Input.Text value={data.name} />
                        <Input.Icon icon={Icon.TRASH} action={onClick} />
                    </Input.Root>
                </Grid>
            )}
        </Draggable>
    )
}

export default InputDraggable
