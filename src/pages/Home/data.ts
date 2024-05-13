import { Icon } from "@src/components/Icons/types";

export interface Games {
    text: string;
    icon: Icon;
    id: string;
    route?: string;
}

export const games: Games[] = [
    {
        text: "Dado",
        icon: Icon.DICE,
        id: "game__dice",
        route: "/dado/categoria"
    },
    {
        text: "Roleta",
        icon: Icon.WHEEL,
        id: "game__wheel",
        route: "/roleta/categoria"
    },
    {
        text: "Cartas",
        icon: Icon.CARDS,
        id: "game__cards",
        route: "/cartas/categoria"
    },
    {
        text: "Corrida",
        icon: Icon.ROCKET,
        id: "game__rocket",
        route: "/corrida/categoria"
    },
    {
        text: "Gif",
        icon: Icon.GIF,
        id: "game__gif",
        route: "/gif/categoria"
    },
    {
        text: "Raspadinha",
        icon: Icon.SCRATCH,
        id: "game__scratch",
        route: "/raspadinha/categoria"
    }
]