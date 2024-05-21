<script lang="ts">

    export let variable: string
    export let label: string
    export let content: string
    export let options: string[] = []

</script>

<div class="select">
    <label for={variable}>{label}</label>
    <select name={variable} id={variable} bind:value={content}>
        {#each options as option}
            <option value={option}>{option}</option>
        {/each}
    </select>
</div>

<style>
    .select {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    label {
        font-weight: 500;
        color: var(--font-light-color);
        margin-bottom: 5px;
    }
    select {
        padding: 10px 15px;
        background: none;
        font-size: 16px;
        color: var(--font-light-color);
        border: 1px solid var(--font-light-color);
        border-radius: 6px;
        outline: none;
    }
</style>