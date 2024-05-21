<script lang="ts">

    import { WidgetsState, type Widget } from "$lib/widgets-lib/widgets-state"
    import { getTemplateWidget } from "$lib/widgets-lib/template-widgets"
    import BuildingPage from "./BuildingPage.svelte"
    import LeftMenu from "./LeftMenu.svelte"
    import WidgetsGallery from "./WidgetsGallery.svelte";

    const defaultWidget = getTemplateWidget("Titulo 1")
    const defaultWidgetDos = getTemplateWidget("Titulo 2")
    const defaultWidgetTres = getTemplateWidget("Titulo 1")

    let state = new WidgetsState()
    state.addWidget(structuredClone(defaultWidget))
    state.addWidget(structuredClone(defaultWidgetDos))
    state.addWidget(structuredClone(defaultWidgetTres))

    let HTMLWidgets = state.HTMLWidgets

    let editionIndex: number = 0
    let inEditionWidget: Widget = state.widgets[0]

    let eliminateWidgetIndex: number | null

    // Esta funcion es un wrapper para que se ejecute solo cuando el widget en edicion cambié
    function editingWidget(widget: Widget) {
        state.editWidget(widget, editionIndex)
        HTMLWidgets = state.HTMLWidgets
    }

    // Esta funcion es un wrapper para que se ejecute solo cuando cambie el index del Widget
    function changeEditionWidget(index: number) {
        inEditionWidget = state.widgets[index]
    }

    $: editingWidget(inEditionWidget)

    $: changeEditionWidget(editionIndex)

    $: if(eliminateWidgetIndex != null) {
        state.deleteWidget(eliminateWidgetIndex)
        inEditionWidget = state.widgets[editionIndex]
        eliminateWidgetIndex = null
    }

    let openWidgetsGallery = false

</script>

<div class="builder">

    <LeftMenu bind:inEditionWidget />

    <BuildingPage 
        {HTMLWidgets}
        bind:editionIndex
        bind:eliminateWidgetIndex
        bind:openWidgetsGallery
    />

    {#if openWidgetsGallery}
        <WidgetsGallery />
    {/if}

</div>

<style>

    .builder {
        width: 100%;
        display: flex;
    }

</style>