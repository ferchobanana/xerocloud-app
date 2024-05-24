<script lang="ts">

    import type { ColorPalette, Colors, Font, Corner } from "./magic-edition";

    import * as Admin from '$lib/components/admin'

    export let selectedPallete: ColorPalette
    export let selectedFont: Font
    export let selectedCorner: Corner

    let colors: Colors 
    $: colors = selectedPallete.colors

</script>

<div class="widget-container">

    <Admin.Card>
        <div class="widget-wrapper">
            <h2 class="titulo">Widget de ejemplo</h2>

            <div class="widget" style={`
                                        background-color: ${colors.background_light_color};
                                        border-radius: ${selectedCorner.container_css_string};
                                    `}>
                                    
                <div class="column-1">
                    <h2 style={`
                                color: ${colors.title_dark_color};
                                font-family: ${selectedFont.css_string};
                            `}>
                            Un gran titulo
                        </h2>
                    <p style={`color: ${colors.text_info_color}; font-family: ${selectedFont.css_string};`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et elit in sapien gravida eleifend et a massa. Nam congue ante in turpis maximus pellentesque. In hac habitasse platea dictumst.
                    </p>
                    <button style={`
                                    background-color: ${colors.button_background_color};
                                    color: ${colors.button_font_color};
                                    border-radius: ${selectedCorner.button_css_string};
                                    font-family: ${selectedFont.css_string};
                                `}>
                        Soy un botón
                    </button>
                </div>

                <div class="column-2" style={`background-color: ${colors.background_dark_color}; border-radius: ${selectedCorner.container_css_string}`}>
                    <h2 style={`color: ${colors.title_light_color}; font-family: ${selectedFont.css_string};`}>Un subtitulo</h2>
                    <p style={`color: ${colors.text_light_color}; font-family: ${selectedFont.css_string};`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et elit in sapien gravida eleifend et a massa.
                    </p>
                    <button style={`
                                    border-color: ${colors.button_background_color};
                                    color: ${colors.button_background_color};
                                    border-radius: ${selectedCorner.button_css_string};
                                    font-family: ${selectedFont.css_string};
                                `}>
                        Soy otro botón
                    </button>
                </div>
            </div>
        </div>
    </Admin.Card>

</div>


<style>

    .widget-container {
        width: 100%;
        max-width: 1200px;
        margin: auto;
    }
    .widget-wrapper {
        padding: 40px 60px;
    }
    .titulo {
        font-size: 40px;
        text-align: center;
        margin-bottom: 20px;
    }

    /* Widget */
    .widget {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        padding: 40px;
        transition: all ease .3s;
    }
    /* Columnas */
    .column-1 {
        padding: 20px;
    }
    .column-2 {
        padding: 30px;
        transition: all ease .3s;
    }

    /* Titulos */
    .column-1 h2 {
        font-size: 30px;
        margin-bottom: 5px;
    }
    .column-2 h2 {
        margin-bottom: 5px;
    }

    /* Parrafos */
    .column-1 p {
        margin-bottom: 10px;
    }
    .column-2 p {
        font-size: 14px;
        margin-bottom: 15px;
    }

    /* Botones */
    .column-1 button {
        font-weight: 500;
        border: none;
        padding: 15px 30px;
        cursor: pointer;
        transition: all ease .3s;
    }

    .column-2 button {
        font-weight: 500;
        background: none;
        border-width: 1px;
        border-style: solid;
        padding: 15px 30px;
        cursor: pointer;
        transition: all ease .3s;
    }

</style>