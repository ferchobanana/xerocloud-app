<script lang="ts">
    export let value:string = ""
    export let name: string = ""
    export let width: string = "400px"
    export let height: string = "150px"
    export let placeholder = ""
</script>

<textarea bind:value {name} id={name} {placeholder} style={`width: ${width}; height: ${height}`} />

<style>
    textarea {
        font-size: 16px;
        padding: 10px 15px;
        border: 1px solid var(--border-light-color);
        border-radius: 6px;
    }
</style>