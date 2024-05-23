<script lang="ts">
    import type { ColorPalette, Font, Corner } from "$lib/components/magic-edition/magic-edition";
    
    import * as Admin from "$lib/components/admin"
    import ColorPaletteSelector from "$lib/components/magic-edition/ColorPaletteSelector.svelte";
    import FontSelector from "$lib/components/magic-edition/FontSelector.svelte";
    import CornerSelector from "$lib/components/magic-edition/CornerSelector.svelte";
    import MagicWidget from "$lib/components/magic-edition/MagicWidget.svelte"


    let palettes: ColorPalette[] = [
        {
            name: 'Azul Xero',
            colors: {
                background_dark_color: '#111827',
                background_light_color: '#F3F4F6',
                title_dark_color: '#000000',
                title_light_color: '#FFFFFF',
                text_light_color: '#AEB5C5',
                text_dark_color: '#000000',
                text_info_color: '#8D8F95',
                button_background_color: '#4B9CFF',
                button_font_color: '#FFFFFF', 
            }
        },
        {
            name: 'Verde',
            colors: {
                background_dark_color: '#262626',
                background_light_color: '#F6FEFF',
                title_dark_color: '#000000',
                title_light_color: '#FFFFFF',
                text_light_color: '#AEB5C5',
                text_dark_color: '#262626',
                text_info_color: '#8D8F95',
                button_background_color: '#28BF79',
                button_font_color: '#FFFFFF', 
            }
        },
        {
            name: 'Rosa',
            colors: {
                background_dark_color: '#1F173B',
                background_light_color: '#F9F9F9',
                title_dark_color: '#000000',
                title_light_color: '#FFFFFF',
                text_light_color: '#AEB5C5',
                text_dark_color: '#000000',
                text_info_color: '#8D8F95',
                button_background_color: '#F04EAF',
                button_font_color: '#FFFFFF', 
            }
        },
    ]

    let fonts: Font[] = [
        {
            name: 'Geist',
            css_string: "'Geist', sans-serif"
        }
    ]

    let corners: Corner[] = [
        {
            name: 'Redondeado',
            container_css_string: "15px",
            button_css_string: "50px"
        },
        {
            name: 'Semi-redondeado',
            container_css_string: "10px",
            button_css_string: "4px"
        },
        {
            name: 'Cuadrado',
            container_css_string: "none",
            button_css_string: "none"
        } 
    ]

    let selectedPallete: ColorPalette = palettes[0]
    let selectedFont: Font = fonts[0]
    let selectedCorner: Corner = corners[0]

</script>

<div>

    <Admin.PageHeader 
    title="Edición mágica"
    pageDescription="En este lugar comienza lo grandioso. Por favor sigue las intrucciones para que puedas crear tu sitio web facilmente." />

    <ColorPaletteSelector {palettes} bind:selectedPallete />

    <div class="corner-font-container">
        <FontSelector {fonts} bind:selectedFont/>
        <CornerSelector {corners} bind:selectedCorner/>
    </div>

    <MagicWidget {selectedPallete} {selectedFont} {selectedCorner} />

</div>

<style>
    .corner-font-container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        max-width: 1200px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>