<script lang="ts">

    export let variable: string
    export let label: string
    export let content: string

</script>

<div class="input-text">
    <label for={variable}>{label}</label>
    <input type="text" name={variable} id="" bind:value={content}>
</div>

<style>
    .input-text {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    label {
        font-weight: 500;
        color: var(--font-light-color);
        margin-bottom: 5px;
    }
    input[type="text"] {
        padding: 10px 15px;
        background: none;
        font-size: 16px;
        color: var(--font-light-color);
        border: 1px solid var(--font-light-color);
        border-radius: 6px;
        outline: none;
    }
</style>