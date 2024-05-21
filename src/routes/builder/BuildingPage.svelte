<script lang="ts">

    import type { HTMLWidget } from "$lib/widgets-lib/widgets-state"
    import { afterUpdate } from "svelte";
    import Ceja from "$lib/components/builder/ceja.svelte"

    export let HTMLWidgets: HTMLWidget[]
    export let editionIndex: number
    export let eliminateWidgetIndex: number | null
    export let openWidgetsGallery: boolean

    afterUpdate(() => {
        console.log("Se actualizo la informacion del componente")
    })

    function checkSelected(index: number) {
        if(index == editionIndex) {
            return "selected"
        }
    }

</script>

<div class="building-page">

    {#each HTMLWidgets as widget, i (widget.id)}
         <div class="widget-wrapper">

             <div class="widget-edition">
                <Ceja />
                <div class="edition-buttons-wrapper">
                    <button class="edition-button"
                        on:click={() => { editionIndex = i }}>
                        Editar
                    </button>
                    <div class="vertical-line"></div>
                    <button class="edition-button"
                        on:click={() => { eliminateWidgetIndex = i }}>
                        Eliminar
                    </button>
                </div>
            </div>

            {@html widget.html}
         </div>
    {/each}

    <div class="add-widget-container">
        <button class="add-widget" on:click={() => {openWidgetsGallery = true}}>
            <p>Agregar widget +</p>
        </button>
    </div>

</div>

<style>
    .building-page {
        flex-grow: 1;
        height: 100vh;
        overflow-y: auto;
    }
    .widget-wrapper {
        width: 100%;
        position: relative;
    }

    .widget-wrapper:hover .widget-edition {
        opacity: 100;
    }
    
    .widget-edition {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        display: flex;
        justify-content: center;
        opacity: 0;
        transition: all ease .2s;
    }

    .edition-buttons-wrapper {
        display: flex;
        justify-content: center;
        width: 200px;
        padding: 8px 0 10px 0;
    }

    .vertical-line {
        height: 100%;
        border-left: 1px solid #fff;
    }

    .edition-button {
        width: 50%;
        text-align: center;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        background: none;
        border: none;
        cursor: pointer;
    }

    .add-widget-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
    }
    .add-widget {
        width: 600px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f3f3;
        border: 3px dashed #8c8c8c;
        border-radius: 10px;
        cursor: pointer;
    }
    .add-widget p {
        font-size: 16px;
        color: #8c8c8c;
    }

    /* Anchura de la barra de desplazamiento */
    .building-page::-webkit-scrollbar {
        width: 12px;
    }

    /* Estilo de la barra de desplazamiento */
    .building-page::-webkit-scrollbar-track {
        background-color: #1f1f28;
    }

    /* Estilo del pulgar de la barra de desplazamiento */
    .building-page::-webkit-scrollbar-thumb {
        background-color: #494949;
        border-radius: 20px;
    }
</style>