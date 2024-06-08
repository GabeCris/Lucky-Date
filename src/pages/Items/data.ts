import { Icon } from "@src/components/Icons/types";

export interface Categories {
    text: string;
    icon: Icon;
    id: string;
    name?: string;
}

export const categories: Categories[] = [
    {
        text: "Filmes",
        icon: Icon.MOVIE,
        id: "category__movie",
        name: "movie"
    },
    {
        text: "Comidas",
        icon: Icon.FOOD,
        id: "category__food",
        name: "food"
    },
    {
        text: "Restaurantes",
        icon: Icon.RESTAURANT,
        id: "category__restaurant",
        name: "restaurant"
    },
    {
        text: "Brincadeiras",
        icon: Icon.JOKE,
        id: "category__joke",
        name: "joke"
    },
    {
        text: "Esportes",
        icon: Icon.SPORT,
        id: "category__sport",
        name: "sport"
    },
    {
        text: "Jogos",
        icon: Icon.GAME,
        id: "category__game",
        name: "game"
    },
    {
        text: "Lazer",
        icon: Icon.HOME,
        id: "category__home",
        name: "home"
    },
    {
        text: "Personalizado",
        icon: Icon.CUSTOM,
        id: "category__custom",
        name: "custom"
    },
]

export const participants: Categories[] = [
    {
        text: "Casal",
        icon: Icon.COUPLE,
        id: "category__couple",
        name: "couple"
    },
    {
        text: "Amigos",
        icon: Icon.FRIEND,
        id: "category__friend",
        name: "friend"
    },
    {
        text: "Familia",
        icon: Icon.FAMILY,
        id: "category__familiy",
        name: "family"
    }
]