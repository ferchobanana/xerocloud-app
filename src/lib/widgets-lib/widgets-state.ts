export type Widget = {
    label: string;
    id: string;
    html: string;
    groups: VariablesGroup[];
    variables: Variable[];
}

type Variable = {
    variable: string;
    label: string;
    content: string;
    type: string;
    options?: string[]
    group: string;
}

type VariablesGroup = {
    id: string;
    label: string;
}

export type HTMLWidget = {
    id: string;
    html: string;
}

export const emptyWidget: Widget = {
    label: "",
    id: "",
    html: "",
    groups: [],
    variables: []
}

export class WidgetsState {
    public widgets: Widget[] = []
    public HTMLWidgets: HTMLWidget[] = []

    constructor(widgets?: Widget[]) {

        if (widgets) {
            this.widgets = widgets
            this.widgetsToHTMLWidgets()
        }
    }

    // ==========================
    // ==== METODOS PRIVADOS ====
    // ==========================

    // Reemplazamos las variables del Template por los valores de las variables
    private replaceContentVariables(widget: Widget): string {

        const HTMLTemplate = widget.html
        const variables = widget.variables
        let resultHTML = HTMLTemplate

        // Reemplazamos todas las variables del HTML template
        variables.forEach((variable) => {
            const variableName = variable.variable
            const content = variable.content
            const reg_exp = new RegExp(`{{${variableName}}}`, "g")
            resultHTML = resultHTML.replace(reg_exp, content)
        })

        // Reemplazamos el ID del HTML template para que cada widget tenga un ID unico con el que se pueda identificar en el DOM
        const id_reg_exp = new RegExp(`{{ID}}`, "g")
        resultHTML = resultHTML.replace(id_reg_exp, widget.id)

        return resultHTML
    }

    // Renderizamos un Widget en un HTMLWidget. Retorna un HTMLWidget
    private widgetToHTMLWidget(widget: Widget): HTMLWidget {
        const HTMLWidget: HTMLWidget = {
            id: widget.id,
            html: this.replaceContentVariables(widget)
        }
        return HTMLWidget
    }

    // Renderizamos todos los widgets a HTMLWidgets.
    private widgetsToHTMLWidgets() {

        let HTMLWidgets: HTMLWidget[] = []

        this.widgets.forEach((widget) => {
            let HTMLWidget: HTMLWidget = {
                id: widget.id,
                html: this.replaceContentVariables(widget)
            }

            HTMLWidgets.push(HTMLWidget)
        })

        this.HTMLWidgets = HTMLWidgets
    }

    // ==========================
    // ==== MÉTODOS PUBLICOS ====
    // ==========================

    editWidget(widget: Widget, position: number) {

        this.widgets[position] = widget
        this.HTMLWidgets[position] = this.widgetToHTMLWidget(widget)

    }

    addWidget(widget: Widget, position?: number) {

        const newWidget: Widget = {
            label: widget.label,
            id: widget.id,
            html: widget.html,
            groups: widget.groups,
            variables: widget.variables
        }

        const newHTMLWidget = this.widgetToHTMLWidget(newWidget)
        const finalPosition = this.widgets.length

        this.widgets.splice(position || finalPosition, 0, newWidget)
        this.HTMLWidgets.splice(position || finalPosition, 0, newHTMLWidget)

    }

    deleteWidget(index: number) {
        this.widgets.splice(index, 1)
        this.HTMLWidgets.splice(index, 1)
    }

}