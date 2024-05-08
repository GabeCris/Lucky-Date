import IconComponents from "@src/components/Icons/types";
import { Icon } from "@src/components/Icons/types";

interface ButtonProps {
    icon: Icon;
}

const ButtonIcon = ({ icon }: ButtonProps) => {
    const IconComponent = IconComponents[icon]

    return (
        <IconComponent />
    )
}

export default ButtonIcon
