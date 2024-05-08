import { Draggable } from '@hello-pangea/dnd';
import { Input } from '.';
import { Icon } from "@src/components/Icons/types";

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
                        <Input.Icon icon={Icon.DRAG} />
                        <Input.Text value={data.name} />
                        <Input.Icon icon={Icon.TRASH} action={onClick} />
                    </Input.Root>
                </div>
            )}
        </Draggable>
    )
}

export default InputDraggable
