<script lang="ts">

    import type { Corner } from "./magic-edition";
    
    export let corners: Corner[]
    export let selectedCorner: Corner

</script>

<div class="container">
    <h2>Esquinas</h2>
    <p class="info">Escoge un tipo de esquina</p>

    <div class="corners">
        {#each corners as corner}
            <button 
                class="corner"
                class:selected={selectedCorner == corner}
                on:click={() => { selectedCorner = corner}}>

                { corner.name }
            </button>
        {/each}
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
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

    /* Corners */
    .corners {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    .corner {
        background: #f9f9f9;
        border: 1px solid var(--border-light-color);
        padding: 12px 25px;
        border-radius: 8px;
        font-size: 14px;
        color: var(--background-dark-color);
        font-weight: 500;
        cursor: pointer;
        transition: all ease .2s;
    }
    .corner:hover {
        box-shadow: 0px 0px 50px -15px rgba(0, 0, 0, 0.15);
    }
    .selected {
        border-color: var(--background-dark-color);
    }
</style>