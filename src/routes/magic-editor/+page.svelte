<script lang="ts">
    import type { ColorPalette, Font, Corner } from "$lib/components/magic-editor/magic-edition";
    
    import * as Admin from "$lib/components/admin"
    import Logo from '$lib/imgs/logo-light.png'
    import ColorPaletteSelector from "$lib/components/magic-editor/ColorPaletteSelector.svelte";
    import ElementsColorSelector from "$lib/components/magic-editor/ElementsColorSelector.svelte"
    import FontSelector from "$lib/components/magic-editor/FontSelector.svelte";
    import CornerSelector from "$lib/components/magic-editor/CornerSelector.svelte";
    import MagicWidget from "$lib/components/magic-editor/MagicWidget.svelte"


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
        {
            name: 'Rojo',
            colors: {
                background_dark_color: '#262626',
                background_light_color: '#F9F9F9',
                title_dark_color: '#000000',
                title_light_color: '#FFFFFF',
                text_light_color: '#AEB5C5',
                text_dark_color: '#000000',
                text_info_color: '#8D8F95',
                button_background_color: '#D65B5B',
                button_font_color: '#FFFFFF', 
            }
        },
    ]

    let fonts: Font[] = [
        {
            name: 'Geist',
            css_string: "'Geist', sans-serif"
        },
        {
            name: 'Merriweather',
            css_string: "'Merriweather', serif"
        },
        {
            name: 'Poppins',
            css_string: "'Poppins', sans-serif"
        },
        {
            name: 'Poetsen One',
            css_string: "'Poetsen One', sans-serif"
        },
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

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Poetsen+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
</svelte:head>

<div class="magic-editor">

    <div class="edition-column">

        <a href="/" class="logo-container">
            <img src={Logo} alt="">
        </a>

        <div class="scroll-container">
            <div class="edition-group">
                <ColorPaletteSelector {palettes} bind:selectedPallete />
            </div>
            <div class="edition-group">
                <ElementsColorSelector />
            </div>
            <div class="edition-group">
                <FontSelector {fonts} bind:selectedFont/>
            </div>
            <div class="edition-group">
                <CornerSelector {corners} bind:selectedCorner/>
            </div>
        </div>

    </div>

    <div class="magic-widget">

        <div class="texto">
            <h1>Editor mágico</h1>
            <p class="descripcion">El editor magico te ayuda a establecer los estilos generales de tu sitio de manera rapida y sencilla. De esta froma, tu sitio y todas las plantillas que insertes tendrán estilos similares para que puedas hacer importaciones de un solo clic.</p>
        </div>

        <MagicWidget {selectedPallete} {selectedFont} {selectedCorner} />

        <div class="save">
            <p>Tienes cambios sin guardar</p>
            <Admin.Button padding="15px 60px">
                Guardar cambios
            </Admin.Button>
        </div>

    </div>

</div>

<style>
    .magic-editor {
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px 60px;
        padding: 40px 40px;
        background-color: var(--background-light-color);
    }

    /* Edition column */
    .edition-column {
        grid-column: span 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .logo-container {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: var(--background-dark-color);
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px;
    }

    /* Logo */
    .logo-container img {
        height: 30px;
    }
    .scroll-container {
        width: 100%;
        padding-right: 10px;
        overflow-y: auto;
    }

    /* Edition group */
    .edition-group {
        background-color: #fff;
        border: 1px solid var(--border-light-color);
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px;
    }

    /* Barra de desplazamiento */
    .scroll-container::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #d7d7d7;
        border-radius: 20px;
    }

    /* Magic widget */
    .magic-widget {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        grid-column: span 2;
    }

    /* Texto */
    .texto {
        grid-column: span 3;
        background-color: #fff;
        border: 1px solid var(--border-light-color);
        border-radius: 15px;
        padding:40px;
    }
    h1 {
        font-size: 50px;
    }
    .descripcion {
        width: 100%;
        font-size: 18px;
        text-align: justify;
        color: var(--font-info-color);
    }

    /* Save */
    .save {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        border: 1px solid var(--border-light-color);
        border-radius: 15px;
        padding: 20px 40px;
    }
    .save {
        font-weight: 500;
        font-size: 18px;
    }
</style>