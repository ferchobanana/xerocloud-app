<div class="labels-container">
    <div class="slug-label">
        <p>Slug</p>
    </div>
    <div class="data-labels">
        <p>Estado</p>
        <p>Visitas</p>
        <p>Ult. modificación</p>
    </div>
    <div class="button-labels"></div>
</div>

<style>
    /* Labels */
    .labels-container {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        padding: 0 40px;
        margin-bottom: 10px;
        font-weight: 600;
    }
    .slug-label {
        grid-column: span 2;
    }
    .data-labels {
        grid-column: span 5;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
    }
</style>