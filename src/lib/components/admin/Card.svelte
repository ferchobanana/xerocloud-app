<script lang="ts">
    export let width: string = "100%"
</script>

<div class="card" style={`width:${width};`}>
    <slot></slot>
</div>

<style>
    .card {
        background-color: #fff;
        border: 1px solid var(--border-light-color);
        border-radius: 8px; 
    }
</style>