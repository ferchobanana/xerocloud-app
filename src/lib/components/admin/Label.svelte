<script lang="ts">
    export let isFor: string = ""
    export let label: string = ""
    export let labelNote: string = ""
</script>

<div>
    <label for={isFor}>{ label }</label>
    <p class="label-note">{ labelNote }</p>
</div>

<style>
    div {
        margin-bottom: 10px;
    }
    label {
        font-size: 18px;
        font-weight: 600;
    }
    .label-note {
        font-size: 14px;
        color: var(--font-info-color);
    }
</style>