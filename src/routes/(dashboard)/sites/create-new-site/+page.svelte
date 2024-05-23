<script lang="ts">
    import * as Admin from "$lib/components/admin"
    import { enhance } from "$app/forms"
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
                            <input type="text" id="subdomain" name="subdomain" placeholder="subdominio">
                            <label for="subdomain">.xeroweb.net</label>
                        </div>
                        <p class="subdomain-message">Este subdominio ya está en uso, elige otro.</p>
                    </div>
                </div>

                <!-- CATEGORY SITE -->
                <div class="campo">
                    <Admin.Label 
                        label="Escoge una categoria"
                        labelNote="Podrás cambiar la categoria después." />
                    
                    <Admin.Select name="categoria" value="">
                        <option value="">Agencia</option>
                        <option value="">Despacho</option>
                        <option value="">Proveedor de servicios</option>
                        <option value="">Tienda en linea</option>
                        <option value="">Otro</option>
                    </Admin.Select>
                </div>

                <Admin.Button type="a" href="/sites/create-new-site/magic-edition" padding="10px 30px">
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