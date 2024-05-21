<script lang="ts">
    import * as Admin from '$lib/components/admin'
</script>

<div class="sites">

    
    <Admin.PageHeader 
    title="Tus sitios web"
    pageDescription="Aquí se muestran tus sitios web y la información relevante de cada uno de ellos." />
    
    <div class="create-new-container">
        <Admin.Button href="/sites/create-new-site" type="a" padding="15px 30px">
            + Crear nuevo
        </Admin.Button>
    </div>

    <div class="labels-container">
        <div class="domain-label">
            <p>Dominio/subdominio</p>
        </div>
        <div class="data-labels">
            <p>Estado</p>
            <p>Visitas</p>
            <p>Ult. modificación</p>
        </div>
        <div class="button-labels"></div>
    </div>

    <div class="sites-container">

        <Admin.Card>
            <div class="site">
                <p class="domain">afaminds.com</p>

                <div class="site-data">
                    <p class="status">
                        <span class="circle-indicator"></span>Activa
                    </p>
                    <p class="visits">1000</p>
                    <p class="last-update">15 May. 2024</p>
                </div>

                <div class="buttons">
                    <a class="view" href="/">Ver sitio</a>
                    <a class="settings" href="/sites/site-settings">Configuración</a>
                    <Admin.Button type="a" href="/sites/pages/" padding="5px 12px" fontWeight="400">
                        Editar
                    </Admin.Button>
                </div>
            </div>
        </Admin.Card>

    </div>

</div>

<style>
    /* Page */

    /* Create New */
    .create-new-container {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
    }
    /* Labels */
    .labels-container {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        padding: 0 40px;
        margin-bottom: 10px;
        font-weight: 600;
    }
    .domain-label {
        grid-column: span 2;
    }
    .data-labels {
        grid-column: span 5;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
    }

    /* Sites */
    .sites-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .site {
        height: 60px;
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        align-items: center;
        padding: 10px 40px;
    }
    .domain {
        grid-column: span 2;
        font-weight: 500;
    }
    .site-data {
        grid-column: span 5;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
    }
    .status {
        display: flex;
        align-items: center;
        gap: 3px;
    }
    .circle-indicator {
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #43DB94;
    }
    .buttons {
        grid-column: span 2;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;
    }
    .view, .settings {
        color: var(--background-dark-color);
        text-decoration: none;
    }

</style>