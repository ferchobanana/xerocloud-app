<script lang="ts">

    import * as Edition from "$lib/components/builder/index"
    import Logo from "$lib/imgs/logo-light.png"
    import Settings from "$lib/icons/settings.svg"
    import type { Widget } from "$lib/widgets-lib/widgets-state"

    export let inEditionWidget: Widget

</script>


<div class="left-menu">

    <a href="/" class="logo">
        <img src={Logo} alt="">
    </a>
    
    <div class="widget-edition">

        {#each inEditionWidget.groups as group}
            <div class="group">
                <p class="group-label">{group.label}</p>

                {#each inEditionWidget.variables as variable}

                    {#if variable.group === group.id}

                        <div class="variable">
                            {#if variable.type === "text"}

                                <Edition.InputText
                                    variable={variable.variable}
                                    label={variable.label}
                                    bind:content={variable.content} />

                            {:else if variable.type === "textarea"}
                            
                                <Edition.TextArea 
                                    variable={variable.variable}
                                    label={variable.label}
                                    bind:content={variable.content} />

                            {:else if variable.type === "color"}
                                
                                <Edition.ColorPicker 
                                    variable={variable.variable}
                                    label={variable.label}
                                    bind:content={variable.content} />

                            {:else if variable.type === "select"}

                                <Edition.Select
                                    variable={variable.variable}
                                    label={variable.label}
                                    bind:content={variable.content}
                                    options={variable.options} />

                            {/if}
                        </div>

                    {/if}

                {/each}
            </div>
        {/each}
    </div>

    <button class="guardar">Guardar cambios</button>

    <div class="page-options">
        <button class="settings-button">
            <img src={Settings} alt="">
        </button>
    </div>

</div>

<style>
    .left-menu {
       width: 380px;
       height: 100vh;
       display: flex;
       flex-direction: column;
       /* background-color: var(--background-dark-color); */
       background-color: #1f2633;
       padding: 25px 15px 20px 15px;
       overflow-y: auto;
    }
    .logo {
        display: grid;
        place-items: center;
        width: 100%;
        margin-bottom: 25px;
    }
    .logo img {
        width: 150px;
    }
    .group {
        margin-bottom: 20px;
        border: 1px solid #374050;
        border-radius: 8px;
        padding: 18px 15px;
    }
    .group:last-child {
        margin-bottom: 0px;
    }
    .group-label {
        font-size: 18px;
        font-weight: 800;
        color: var(--font-light-color);
        margin-bottom: 20px;
    }
    .variable {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 18px;
    }
    .guardar {
        margin-top: 20px;
        font-weight: 600;
        border: none;
        border-radius: 6px;
        padding: 15px;
        color: #fff;
        background-color: var(--primary-color);
        cursor: pointer;
    }
    .page-options {
        margin-top: 30px;
    }
    .settings-button {
        width: 20px;
        background: none;
        border: none;
        cursor: pointer;
    }
    .settings-button img {
        width: 100%;
    }

    /* Anchura de la barra de desplazamiento */
    .left-menu::-webkit-scrollbar {
        width: 6px;
    }

    /* Estilo de la barra de desplazamiento */
    .left-menu::-webkit-scrollbar-track {
        /* background-color: var(--background-dark-color); */
        background-color: #1f2633;
    }

    /* Estilo del pulgar de la barra de desplazamiento */
    ::-webkit-scrollbar-thumb {
        background-color: #353c49;
        border-radius: 20px;
    }

</style>