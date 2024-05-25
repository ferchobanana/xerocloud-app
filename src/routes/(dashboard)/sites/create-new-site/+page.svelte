<script lang="ts">
    import type { ActionData } from "./$types"

    import * as Admin from "$lib/components/admin"
    import { enhance } from "$app/forms"

    // export let form: ActionData

    let subdomain: string = ""
    let category: string = "agencia"

    let subdomain_available: null|boolean

    async function checkSubdmainAvailability() {

        const response = await fetch("/api/check-subdomain", {
            method: "POST",
            body: JSON.stringify({ subdomain }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const { available } = await response.json()
        subdomain_available = available

    }

</script>

<div>

    <Admin.PageHeader 
    title="Crea un nuevo sitio web"
    pageDescription="Establece la configuración inicial de tu nuevo sitio web." />

    <div class="site-setup">
        <Admin.Card>
            <form class="setup-column" method="POST" use:enhance>

                <!-- SUBDOMAIN -->
                <div class="campo">
                    <Admin.Label
                        isFor="subdominio" 
                        label="Escoge un subominio para tu sitio"
                        labelNote="Podrás vincular un dominio mas adelante." />

                    <div class="subdomain">
                        <div class="subdomain-input">
                            <input type="text"
                                    id="subdomain"
                                    name="subdomain"
                                    placeholder="subdominio"
                                    bind:value={subdomain}
                                    on:input={checkSubdmainAvailability}>

                            <label for="subdomain">.xeroweb.net</label>
                        </div>

                        <!-- Mensaje de validacion para el subdominio -->
                        {#if subdomain_available === true}
                            <p class="subdomain-message" style="color: green">Subdominio disponible</p>
                        {:else if subdomain_available === false && subdomain_available !== null}
                            <p class="subdomain-message" style="color: red">Subdominio no disponible</p>
                        {/if}
                    </div>
                </div>

                <!-- SITE CATEGORY -->
                <div class="campo">
                    <Admin.Label 
                        label="Escoge una categoria"
                        labelNote="Podrás cambiar la categoria después." />
                    
                    <Admin.Select name="category" bind:value={category}>
                        <option value="agencia">Agencia</option>
                        <option value="despacho">Despacho</option>
                        <option value="proveedor de servicios">Proveedor de servicios</option>
                        <option value="tienda en linea">Tienda en linea</option>
                        <option value="otro">Otro</option>
                    </Admin.Select>
                </div>

                <!-- Button -->
                <Admin.Button padding="10px 30px">
                    Crear nuevo sitio web
                </Admin.Button>
            </form>
        </Admin.Card>
    </div>


</div>

<style>
    .site-setup {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }
    .setup-column {
        padding: 30px;
    }
    .campo {
        margin-bottom: 20px;
    }
    .subdomain {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        font-size: 18px;
    }
    .subdomain-input {
        width: 400px;
        display: flex;
        padding: 10px 15px;
        border: 1px solid var(--border-light-color);
        border-radius: 6px;
    }
    .subdomain-input input {
        border: none;
        outline: none;
        font-size: 18px;
        text-align: right;
    }
    .subdomain-message {
        width: 100%;
        font-size: 13px;
        color: red;
    }
</style>