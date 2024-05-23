<script lang="ts">
    
    import type { Font } from "./magic-edition";

    export let fonts: Font[]
    export let selectedFont: Font

</script>

<div class="container">
    <h2>Selecciona tu fuente preferida</h2>
    <p class="info">Puedes escoger la paleta que más te guste e incluso puedes editarla</p>

    <div class="fonts">
        {#each fonts as font}
            <button class="font"
                    class:selected={selectedFont == font}
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
        padding: 30px;
    }
    /* Texto */
    h2 {
        width: 100%;
        text-align: center;
    }
    .info {
        width: 100%;
        color: var(--font-info-color);
        margin-bottom: 10px;
        text-align: center;
    }

    /* Fonts */
    .fonts {
        display: flex;
        justify-content: center;
        gap: 8px;
    }
    .font {
        background: #fff;
        border: 1px solid var(--border-light-color);
        padding: 12px 25px;
        border-radius: 8px;
        font-size: 14px;
        color: var(--background-dark-color);
        font-weight: 500;
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