export type Colors = {
    background_dark_color: string
    background_light_color: string
    title_dark_color: string
    title_light_color: string
    text_light_color: string
    text_dark_color: string
    text_info_color: string
    button_background_color: string
    button_font_color: string
}

export type ColorPalette = {
    name: string;
    colors: Colors
}

export type Font = {
    name: string
    css_string: string
}

export type Corner = {
    name: string
    container_css_string: string
    button_css_string: string
}