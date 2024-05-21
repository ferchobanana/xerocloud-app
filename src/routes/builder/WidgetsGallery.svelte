<script lang="ts">

    export let isOpen = false
    
    function show(node: HTMLDivElement) {

    }

</script>

<div class="widgets-gallery-overlay">

    <div use:show class="widgets-gallery">
        <h3>Galeria de Widgets</h3>
    </div>

</div>

<style>
    .widgets-gallery-overlay {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Color de fondo transparente */
        backdrop-filter: blur(5px); /* Desenfoque del fondo */
        z-index: 999; /* Asegura que el div esté por encima de otros elementos */
    }
    .widgets-gallery {
        width: 1000px;
        height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        background-color: #fff;
        padding: 40px;
    } 
    h3 {
        font-size: 40px;
    }
</style>