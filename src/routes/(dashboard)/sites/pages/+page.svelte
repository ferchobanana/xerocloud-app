<script lang="ts">
    import * as Admin from "$lib/components/admin"
    import Labels from "./Labels.svelte"

    let domain: string = "afaminds.com"
</script>

<div>

    <Admin.PageHeader
    title={`Páginas: ${domain}`}
    pageDescription={`Edita las paginas individuales de tu sitio web ${domain}`}
    />

    <div class="new-page-container">
        <Admin.Button href="/sites/create-new-page" type="a" padding="15px 30px">
            + Nueva página
        </Admin.Button>
    </div>

    <Labels></Labels>

    <div class="pages-container">

        <Admin.Card>
            <div class="page">
                <p class="slug">/contacto</p>

                <div class="page-data">
                    <p class="status">
                        <span class="circle-indicator"></span>Activa
                    </p>
                    <p class="visits">1000</p>
                    <p class="last-update">15 May. 2024</p>
                </div>

                <div class="buttons">
                    <a class="ver" href="/">Ver página</a>
                    <Admin.Button type="a" href="/builder" fontWeight="400" padding="5px 12px">
                        Editar
                    </Admin.Button>
                </div>
            </div>
        </Admin.Card>

    </div>

</div>

<style>
    /* New page */
    .new-page-container {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
    }
    /* Pages */
    .pages-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .page {
        height: 60px;
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        align-items: center;
        padding: 10px 40px;
    }
    .slug {
        grid-column: span 2;
        font-weight: 500;
    }
    .page-data {
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
    .ver {
        color: var(--primary-color);
        text-decoration: none;
    }

</style>