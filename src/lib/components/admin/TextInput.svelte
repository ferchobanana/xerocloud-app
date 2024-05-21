<script lang="ts">
    export let name: string = ""
    export let value: string = ""
    export let placeholder: string = ""
    export let width: string = "400px"
    export let padding: string = "10px 15px"
    export let textAlign: string = "left"
</script>

<input type="text" id={name} {name} {placeholder} bind:value required 
    style={`width: ${width}; padding: ${padding}; text-align: ${textAlign};`} >

<style>
    input {
        background: none;
        font-size: 16px;
        border: 1px solid var(--border-light-color);
        border-radius: 6px;
        outline: none;
    }
</style>