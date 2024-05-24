<script lang="ts">
    
    import type { Font } from "./magic-edition";

    export let fonts: Font[]
    export let selectedFont: Font

</script>

<div class="container">
    <h2>Selecciona tu fuente preferida</h2>
    <p class="info">Escoge la fuente que mas se adapte a tu marca</p>

    <div class="fonts">
        {#each fonts as font}
            <button class="font"
                    class:selected={selectedFont == font}
                    style={`font-family: ${font.css_string}`}
                    on:click={() => {selectedFont = font}}>
                {font.name}
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
    }
    .info {
        width: 100%;
        color: var(--font-info-color);
        margin-bottom: 20px;
    }

    /* Fonts */
    .fonts {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    .font {
        background: #f9f9f9;
        border: 1px solid var(--border-light-color);
        padding: 12px 25px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        color: var(--background-dark-color);
        cursor: pointer;
        transition: all ease .2s;
    }
    .font:hover {
        box-shadow: 0px 0px 50px -15px rgba(0, 0, 0, 0.15);
    }
    .selected {
        border-color: var(--background-dark-color);
    }
</style>