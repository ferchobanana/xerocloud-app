<script>

</script>

<div class="color-selector">

    <h2>Puedes editar los colores individualmente</h2>
    <p class="info">Puedes editarlos o dejar los colores por defecto de la paleta.</p>

    <div class="colores">

        <div class="color">
            <p>Color de titulos</p>
            <input type="color">
        </div>

    </div>

</div>

<style>
    .color-selector {
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

    /* Color */
    .color {
        display: flex;
        gap: 10px;
    }
    input[type="color"] {
        cursor: pointer;
    }
</style>