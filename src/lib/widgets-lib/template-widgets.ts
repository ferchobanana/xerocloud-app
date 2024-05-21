import { DefaultWidgets } from "../utils/widgets";
import type { Widget } from "./widgets-state"

export type TemplateWidget = {
    label: string;
    id: string;
    html: string;
    groups: VariablesGroup[];
    variables: Variable[];
    author: string;
}

type Variable = {
    variable: string;
    label: string;
    content: string;
    type: string;
    options ?: string[]
    group: string;
}

type VariablesGroup = {
    id: string;
    label: string;
}

export function getTemplateWidget(name: string) {

    // console.log(DefaultWidgets)

    const matchingWidget = DefaultWidgets.find(widget => widget.label === name ) 

    if (matchingWidget) {
        return templateWidgetToWidget(structuredClone(matchingWidget))
    }

}

function generateRandomID(baseID: string) {
    const random = Math.floor(Math.random() * 90000) + 10000;
    return baseID + "-" + random
}

function templateWidgetToWidget(tw: TemplateWidget) {

    const newWidget: Widget = {
        label: tw.label,
        id: generateRandomID(tw.id),
        html: tw.html,
        groups: tw.groups,
        variables: tw.variables
    }

    return newWidget

}