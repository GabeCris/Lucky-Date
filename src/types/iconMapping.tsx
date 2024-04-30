import { IconType } from './types'; // Importe o enum IconType do arquivo de tipos
import { DiceIcon, DragIcon, FoodIcon, HelpIcon, MovieIcon, RandomIcon, TrashIcon } from "@src/components/Icons";

// Crie um objeto que mapeia os tipos de ícones para os componentes de ícone correspondentes
const IconComponents = {
    [IconType.MOVIE]: MovieIcon,
    [IconType.FOOD]: FoodIcon,
    [IconType.HELP]: HelpIcon,
    [IconType.DICE]: DiceIcon,
    [IconType.RANDOM]: RandomIcon,
    [IconType.DRAG]: DragIcon,
    [IconType.TRASH]: TrashIcon,
    // Adicione outros ícones conforme necessário
};

export default IconComponents;
