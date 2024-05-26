<script lang="ts">
    export let type: string = "button"
    export let href: string = ""
    export let padding: string = "10px 15px"
    export let fontSize: string = "16px"
    export let fontWeight: string = "500"
    export let disabled: boolean = false
</script>

{#if type === "button"}

    <button {disabled} style={`font-size: ${fontSize};
                font-weight: ${fontWeight};
                padding: ${padding};`}>
        <slot />
    </button>

{:else}

    <a href={href} style={`font-size: ${fontSize};
                font-weight: ${fontWeight};
                padding: ${padding};`}>
        <slot/>
    </a>

{/if}

<style>
    button, a {
        color: #fff;
        background-color: var(--primary-color);
        border-radius: 4px;
        text-decoration: none;
        border: none;
        cursor: pointer;
    }
    button:disabled {
        background-color: #799ece;
        cursor: auto;
    }
</style>