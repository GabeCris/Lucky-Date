interface FontType {
    [key: string]: string;
}

export const theme = {
    colors: {
        blue: "#1C2033",
        white: "#D7D6D4",
        yellow: "#FFC701",
        dark_blue_1: "#181A27",
        dark_blue_2: "#131620",
        light_blue_1: "#666E97",
        light_blue_2: "#4D5B97",
    },

    spacing: {
        extra_small: '12px',
        small: '16px',
        medium: '24px',
        large: '32px',
    },

    font: {
        extra_small: '12px',
        small: '14px',
        medium: '16px',
        large: '24px',
    } as FontType,

    radius: '10px',
    opacity: "0.5",

}