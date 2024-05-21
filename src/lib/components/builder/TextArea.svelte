<script lang="ts">

    export let variable: string
    export let label: string
    export let content: string

</script>

<div class="text-area">
    <label for={variable}>{label}</label>
    <textarea name={variable} id={variable} bind:value={content} />
</div>

<style>
    .text-area {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    label {
        font-weight: 500;
        color: var(--font-light-color);
        margin-bottom: 5px;
    }
    textarea {
        font-size: 16px;
        padding: 10px 15px;
        background: none;
        color: var(--font-light-color);
        border: 1px solid var(--font-light-color);
        border-radius: 6px;
        outline: none;
        height: 200px;
    }
</style>