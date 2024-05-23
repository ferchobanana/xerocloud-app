<script lang="ts">

    import type { ColorPalette } from "./magic-edition";

    export let palettes: ColorPalette[]
    export let selectedPallete: ColorPalette = palettes[0]

</script>

<div class="container">

    <h2>Selecciona tu paleta favorita</h2>
    <p class="info">Puedes escoger la paleta que más te guste e incluso puedes editarla</p>

    <div class="palettes-container">
        {#each palettes as palette (palette.name)}
            <button class="palette"
                    class:selected={selectedPallete == palette}
                    on:click={() => { selectedPallete = palette }}>

                <p>{ palette.name }</p>
    
                <div class="colors-container">
                    {#each Object.values(palette.colors) as color}
                        <span class="color" style={`background-color: ${color}`} ></span>
                    {/each}
                </div>
            </button>
        {/each}
    </div>

</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-bottom: 40px;
    }
    /* Texto */
    h2 {
        width: 100%;
        text-align: center;
    }
    .info {
        width: 100%;
        text-align: center;
        color: var(--font-info-color);
        margin-bottom: 10px;
    }

    /* Palettes container */
    .palettes-container {
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    /* Each Palette */
    .palette {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        background: #fff;
        border: 1px solid var(--border-light-color);
        padding: 15px 30px;
        border-radius: 10px;
        font-size: 14px;
        color: var(--background-dark-color);
        font-weight: 500;
        cursor: pointer;
        transition: all ease .2s;
    }
    .palette:hover {
        box-shadow: 0px 0px 50px -15px rgba(0, 0, 0, 0.15);
    }
    .selected {
        border-color: var(--background-dark-color);
    }
    .colors-container {
        display: flex;
        gap: 3px;
    }
    .color {
        display: block;
        width: 18px;
        height: 18px;
        border-radius: 3px;
        border: .5px solid var(--border-light-color)
    }
</style>