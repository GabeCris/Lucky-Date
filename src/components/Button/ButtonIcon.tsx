import IconComponents from "@src/types/iconMapping";
import { IconType } from "@src/types/types";

interface ButtonProps {
    icon: IconType;
}

const ButtonIcon = ({ icon }: ButtonProps) => {
    const IconComponent = IconComponents[icon]

    return (
        <IconComponent />
    )
}

export default ButtonIcon
