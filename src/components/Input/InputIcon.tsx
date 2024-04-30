import IconComponents from '@src/types/iconMapping'; // Importe o mapeamento de ícones
import { IconType } from "@src/types/types";


interface InputProps {
    icon: IconType;
    action?: () => void;
}

const InputIcon = ({ icon, action }: InputProps) => {

    const IconComponent = IconComponents[icon]

    return (
        <IconComponent onClick={action} />
    )
}

export default InputIcon
