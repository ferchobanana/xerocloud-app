<script>

</script>

<div class="color-selector">

    <h2>Color de elementos</h2>
    <p class="info">Editalos o dejalos por defecto.</p>

    <div class="colores">

        <div class="color">
            <p>Titulos</p>
            <input type="color">
        </div>

    </div>

</div>

<style>
    .color-selector {
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

    /* Color */
    .color {
        display: flex;
        gap: 10px;
    }
    input[type="color"] {
        cursor: pointer;
    }
</style>