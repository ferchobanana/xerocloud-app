<script lang="ts">
    import * as Admin from "$lib/components/admin"
    import { enhance } from "$app/forms"

    let domain = "afaminds.com"
</script>

<div>
    <Admin.PageHeader 
        title={`Nueva pagina para: ${domain}`}
        pageDescription="Crea una nueva página para tu sitio web." />


        <div class="page-setup">
            <Admin.Card>
                <form method="POST" use:enhance>

                    <!-- SLUG -->
                    <div class="campo">
                        <Admin.Label
                            isFor="page-slug" 
                            label="Escoge un slug para tu página"
                            labelNote="El Slug es el indicador de tu página en la URL. No puedes usar espacios." />

                        <div class="slug">
                            <div class="slug-input">
                                <label for="page-slug">{ domain }/</label>
                                <input type="text" id="slug" name="page-slug" placeholder="slug">
                            </div>
                            <p class="slug-message">Este slug ya existe en tu sitio, intenta con otro.</p>
                        </div>
                    </div>

                    <!-- PAGE TYPE -->
                    <div class="campo">
                        <Admin.Label
                            isFor="page-name" 
                            label="Escoge el tipo de página"
                            labelNote="El tipo de página define que tipo de widgets podrás insertar en tu página." />
                        
                        <Admin.Select name="page-type" value="static">
                            <option value="static">Página estática</option>
                            <option value="landing">Página de aterrizaje</option>
                            <option value="thankyou">Página de gracias</option>
                            <option value="cart">Carrito</option>
                            <option value="myaccount">Página de mi cuenta</option>
                        </Admin.Select>
                    </div>

                    <!-- PAGE NAME -->
                    <div class="campo">
                        <Admin.Label
                            isFor="page-name" 
                            label="Escoge un nombre para tu página"
                            labelNote="Este nombre te servirá de referencia para ubicar tu página." />
                        
                        <Admin.TextInput name="page-name" placeholder="Nombre" value="" />
                    </div>

                    <!-- PAGE TITLE -->
                    <div class="campo">
                        <Admin.Label
                            isFor="page-title" 
                            label="Escoge un titulo para tu página"
                            labelNote="El titulo aparecerá en el nombre de la pestaña en el navegador y en la previsualización que cargan las aplicaciones al enviar un link de la página." />
                        
                        <Admin.TextInput name="page-title" placeholder="Titulo" value="" />
                    </div>

                    <!-- PAGE DESCRIPTION -->
                    <div class="campo">
                        <Admin.Label
                            isFor="page-description" 
                            label="Agrega una descripción de tu página (opcional)"
                            labelNote="A pesar de que es opcional, te sugerimos agregar una descripción a tu página, pues esto ayudará a que los motores de búsqueda entiendan de que trata tu sitio." />
                        
                        <Admin.TextArea name="page-description" placeholder="Descripción" value="" />
                    </div>

                    <Admin.Button padding="10px 30px">
                        Crear nueva página
                    </Admin.Button>
                </form>
            </Admin.Card>
        </div>

</div>

<style>
    .page-setup {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }
    form {
        padding: 30px;
    }
    .campo {
        margin-bottom: 20px;
    }
    .slug {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        font-size: 18px;
    }
    .slug-input {
        display: flex;
        padding: 10px 15px;
        border: 1px solid var(--border-light-color);
        border-radius: 6px;
    }
    .slug-input input {
        border: none;
        outline: none;
        font-size: 18px;
    }
    .slug-input input::placeholder {
        color: var(--font-info-color)
    }
    .slug-message {
        width: 100%;
        font-size: 13px;
        color: red;
    }
</style>
