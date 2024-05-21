<script lang="ts">

    export let variable: string
    export let label: string
    export let content: string

</script>

<div class="color-picker">
    <label class="text-label" for={variable}>{label}</label>
    <input type="color" bind:value={content} id={variable} name="">

    <label for={variable}>
        <div class="color-preview-container">
            <input class="hex-color" type="text" bind:value={content}>
            <!-- <p class="hex-color">{ content }</p> -->
            <div class="color-preview" style={"background-color:" + content}></div>
        </div>
    </label>
</div>

<style>
    .color-picker {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }
    .text-label {
        font-weight: 500;
        color: var(--font-light-color);
        margin-bottom: 5px;
    }
    input[type="color"] {
        opacity: 0;
        position: absolute;
    }
    .color-preview-container {
        height: 45px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 10px;
        padding: 10px;
        border-radius: 6px;
        border: 1px solid var(--font-light-color);
    }
    .hex-color {
        grid-column: span 1;
        text-align: center;
        font-size: 16px;
        letter-spacing: .5px;
        font-weight: 500;
        color: var(--font-light-color);
        background: none;
        border: none;
        outline: none;
    }
    .color-preview {
        height: 100%;
        border-radius: 4px;
        cursor: pointer;
    }
</style>