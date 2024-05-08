import IconComponents from '@src/components/Icons/types'; // Importe o mapeamento de ícones
import { Icon } from "@src/components/Icons/types";


interface InputProps {
    icon: Icon;
    action?: () => void;
}

const InputIcon = ({ icon, action }: InputProps) => {

    const IconComponent = IconComponents[icon]

    return (
        <IconComponent onClick={action} />
    )
}

export default InputIcon
