<script lang="ts">
    export let name: string = ""
    export let value: string = ""
    export let width: string = "400px"
</script>

<select style={`width: ${width};`} {name} id={name} bind:value>
    <slot></slot>
</select>

<style>
    select {
        background: none;
        padding: 10px 15px;
        font-size: 16px;
        border: 1px solid var(--border-light-color);
        border-radius: 6px;
        outline: none;
    }
</style>