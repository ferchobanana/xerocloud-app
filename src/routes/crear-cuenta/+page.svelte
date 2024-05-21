<script lang="ts">
    import { enhance } from "$app/forms"
    import type { ActionData } from "./$types"
    import Logo from "$lib/imgs/logo.png"

    export let form: ActionData

    let loading = false

    $: if(form?.message) {
        loading = false
    }
</script>

<div class="signup">

    {#if loading}
        <div class="page-loader">
            <p>cargando...</p>
        </div>
    {/if}

    <div class="logo">
        <img src={ Logo } alt="">
    </div>

    <div class="two-columns">
        <div class="beneficios">        
            <h2>Sitio Web Fácil, Rápido y Poderoso</h2>
            <!-- <p>El primer creador de sitios web enfocado en resultados.</p> -->
            <!-- <p>Obtén más ventas</p> -->
            <ul>
                <!-- <li>Crea un sitio en segundos con la Inteligencia Artificial</li> -->
                <li>Crea un sitio completo sin conocimientos técnicos</li>
                <li>Personaliza el diseño en pocos clics</li>
                <li>Utiliza plantillas para crear secciones y páginas en un clic</li>
                <li>Crea formularios de registro</li>
                <li>Crea formularios de pagos</li>
                <li>Configura una tienda en segundos</li>
                <li>Conectalo a facebook y google para correr camapañas exitosas</li>
                <li>Integra un montón de tus herramientas favoritas</li>
                <li>Impulsalo con poderosas herramientas de SEO</li>

            </ul>
        </div>
    
        <form method="post" class="signup-form" use:enhance on:submit={() => { loading = true }}>
            <h1>Crea una cuenta</h1>
            <label for="email">Correo electrónico</label>
            <input type="email" id="email" name="email">
    
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password">
    
            <button>Crear cuenta</button>
            <p class="form-message">{form?.message ?? ""}</p>
        </form>
    </div>


</div>

<style>
    .signup {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(243, 244, 246, 1);
    }

    /* Logo */
    .logo {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }
    img {
        width: 300px;
        margin-bottom: 40px;
    }

    /* Two columns grid */
    .two-columns {
        max-width: 1200px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0 50px
        /* align-items: center; */
    }

    /* Beneficios */
    .beneficios {
        padding: 20px;
    }
    h2 {
        font-size: 40px;
        font-weight: 800;
        line-height: 40px;
        margin-bottom: 20px;
    }
    ul {
        font-size: 20px;
        color: var(--font-info-color);
        list-style-type: disc;
    }

    /* Formulario */
    .signup-form {
        width: 400px;
        display: flex;
        flex-direction: column;
        color: #fff;
        background-color: rgba(17, 24, 39, 1);
        border-radius: 15px;
        padding: 60px 40px;
    }

    h1 {
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
    }
    label {
        margin-bottom: 5px;
        color: #8f9cb7;
    }
    input {
        padding: 15px;
        background: none;
        color: #fff;
        border: 1px solid #65718c;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    input:focus {
        outline: 1px solid #4b9cff;
    }

    button {
        margin-top: 25px;
        padding: 15px 20px;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
        background-color: #4b9cff;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }
    .form-message {
        text-align: center;
        margin-top: 15px;
    }

</style>