import { Draggable } from '@hello-pangea/dnd';
import { Input } from '.';
import { IconType } from '@src/types/types';

interface InputProps {
    data: any;
    index: number
    onClick?: () => void
}

const InputDraggable = ({ data, index, onClick }: InputProps) => {
    return (
        <Draggable draggableId={data.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Input.Root isDraggable>
                        <Input.Icon icon={IconType.DRAG} />
                        <Input.Text value={data.name} />
                        <Input.Icon icon={IconType.TRASH} action={onClick} />
                    </Input.Root>
                </div>
            )}
        </Draggable>
    )
}

export default InputDraggable
