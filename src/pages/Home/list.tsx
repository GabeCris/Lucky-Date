import { IconType } from '@src/types/types';

interface Category {
    text: string;
    icon: IconType;
    id: string;
    selected?: boolean
}

export const categories: Category[] = [
    {
        text: "Filmes",
        icon: IconType.MOVIE,
        id: "movie"
    },
    {
        text: "Comidas",
        icon: IconType.FOOD,
        id: "food"
    },
    {
        text: "Restaurantes",
        icon: IconType.HELP,
        id: "restaurant"
    },
    {
        text: "Brincadeiras",
        icon: IconType.MOVIE,
        id: "brincadeiras"
    },
]