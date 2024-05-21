<script>
    import '../../styles.css'
    import LeftMenuDashboard from './LeftMenuDashboard.svelte';
</script>


<div class="app">

    <LeftMenuDashboard />

    <main>
        <slot/>
    </main>

</div>

<style>
    .app {
        width: 100%;
        display: flex;
        background-color: var(--background-light-color);
    }
    main {
        flex: 1;
        height: 100vh;
        padding: 35px 45px;
        overflow-y: scroll;
    }
</style>