<script lang="ts">
    export let title
    export let pageDescription
</script>

<h1>{ title }</h1>
<p class="page-description">{ pageDescription }</p>

<style>
    h1 {
        font-size: 50px;
        color: var(--background-dark-color)
    }
    .page-description {
        font-size: 16px;
        color: var(--font-info-color);
        margin-bottom: 50px;
    }
</style>