<script lang="ts">
    import Logo from "$lib/imgs/logo-light.png"
    import Websites from "$lib/icons/webs.svg"
    import Sales from "$lib/icons/sales.svg"
    import Clients from "$lib/icons/clients.svg"
    import Products from "$lib/icons/products.svg"
    import Visits from "$lib/icons/visits.svg"
    import Integrations from "$lib/icons/integrations.svg"
    import Metrics from "$lib/icons/metrics.svg"
    import User from "$lib/icons/user.svg"
    import Settings from "$lib/icons/settings.svg"

    import { enhance } from "$app/forms";
    import { page } from "$app/stores"
    import { afterUpdate } from "svelte";

    function changeSelectedOption(node: HTMLAnchorElement) {
        if(node.href.includes($page.url.pathname) && $page.url.pathname !== "/") {
            node.classList.add('selected-option')
        } else {
            node.classList.remove('selected-option')
        }
    }

    afterUpdate(() => {
        let navOptions = document.querySelectorAll('.option')
        navOptions.forEach((node) => changeSelectedOption(node))
    })

</script>

<div class="left-menu">

    <div class="logo-container">
        <img src={Logo} alt="">
    </div>

    <div class="options-container">
        <a href="/" class="home-button">
            <!-- <img class="option-icon" src={Websites} alt=""> -->
            <p>Inicio</p>
        </a>

        <a href="/sites" class="option">
            <img class="option-icon" src={Websites} alt="">
            <p>Sitios web</p>
        </a>

        <a href="/sales" class="option">
            <img class="option-icon" src={Sales} alt="">
            <p>Ventas</p>
        </a>

        <a href="/clients" class="option">
            <img class="option-icon" src={Clients} alt="">
            <p>Clientes y usuarios</p>
        </a>

        <a href="/products" class="option">
            <img class="option-icon" src={Products} alt="">
            <p>Productos</p>
        </a>

        <a href="/visits" class="option">
            <img class="option-icon" src={Visits} alt="">
            <p>Visitas</p>
        </a>

        <a href="/integrations" class="option">
            <img class="option-icon" src={Integrations} alt="">
            <p>Integraciones</p>
        </a>

        <a href="/metrics" class="option">
            <img class="option-icon" src={Metrics} alt="">
            <p>Otras métricas</p>
        </a>

        <a href="/my-account" class="option">
            <img class="option-icon" src={User} alt="">
            <p>Mi cuenta</p>
        </a>

        <a href="/settings" class="option">
            <img class="option-icon" src={Settings} alt="">
            <p>Configuración</p>
        </a>
    </div>

    <form class="cerrar-sesion" method="POST" action="/" use:enhance>
        <button>Cerrar sesión</button>
    </form>

</div>

<style>
    .left-menu {
        position: relative;
        width: 320px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: var(--background-dark-color);
        padding: 60px 20px;
    }
    .logo-container {
        width: 100%;
        padding: 0 20px;
        margin-bottom: 60px;
    }
    .logo-container img {
        width: 100%;
    }
    .options-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }   
    .home-button, .option {
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
        color: var(--font-light-color);
        text-decoration: none;
        padding: 10px 10px;
        gap: 10px;
    }
    :global(.selected-option) {
        outline: 1px solid var(--font-light-color);
        border-radius: 6px;
    }
    .option-icon {
        width: 24px;
        max-height: 28px;
    }
    .cerrar-sesion {
        position: absolute;
        bottom: 20px;
        left: 0;
        width: 100%;
        display: grid;
        place-items: center;
    }
    .cerrar-sesion button {
        background: var(--primary-color);
        color: #fff;
        padding: 10px 30px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>