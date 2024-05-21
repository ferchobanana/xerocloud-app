export const DefaultWidgets = [
    {
        id: "widget-1",
        author: "Widgy",
        label: "Titulo 1",
        html: `     <div id="{{ID}}">
                        <{{nivel_titulo}} class="titulo">{{titulo}}</{{nivel_titulo}}>
                        <p>{{texto_parrafo}}</p>
                        <button>{{texto_boton}}</button>
                    <div>
                    <style>
                        #{{ID}} {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            background-color: {{color_fondo}};
                            padding: 80px 20px;
                        }
                        #{{ID}} .titulo {
                            color: {{color_titulo}};
                            margin-bottom: 15px;
                        }
                        #{{ID}} p {
                            max-width: 600px;
                            color: {{color_parrafo}};
                            text-align: center;
                            margin-bottom: 20px;
                        }
                        #{{ID}} button {
                            background: {{color_boton}};
                            color: {{color_texto_boton}};
                            font-weight: 600;
                            font-size: 16px;
                            border: none;
                            padding: 20px 80px;
                            border-radius: 3px;
                            cursor: pointer;
                        }
                    </style>
                    `,
        groups: [
            {
                id: "contenedor",
                label: "Opciones del contenedor"
            },
            {
                id: "titulo",
                label: "Opciones del título"
            },
            {
                id: "parrafo",
                label: "Opciones del párrafo"
            },
            {
                id: "boton",
                label: "Opciones del botón"
            }
        ],
        variables: [
            {
                variable: "color_fondo",
                label: "Color del fondo:",
                content: "#000000",
                type: "color",
                group: "contenedor"
            },
            {
                variable: "titulo",
                label: "Texto del titulo",
                content: "Un Gran Titulo",
                type: "text",
                group: "titulo"
            },
            {
                variable: "color_titulo",
                label: "Color del titulo:",
                content: "#ffffff",
                type: "color",
                group: "titulo"
            },
            {
                variable: "nivel_titulo",
                label: "Nivel de titulo",
                content: "h1",
                type: "select",
                options: [
                    "h1",
                    "h2",
                    "h3",
                    "h4"
                ],
                group: "titulo"
            },
            {
                variable: "texto_parrafo",
                label: "Parrafo",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sodales ante, nec imperdiet metus sagittis vel. Fusce cursus quis nulla id ultricies. Vivamus mattis auctor dolor ac viverra. Ut facilisis rhoncus accumsan.",
                type: "textarea",
                group: "parrafo"
            },
            {
                variable: "color_parrafo",
                label: "Color del parrafo:",
                content: "#ffffff",
                type: "color",
                group: "parrafo"
            },
            {
                variable: "texto_boton",
                label: "Texto del botón",
                content: "Contactanos",
                type: "text",
                group: "boton"
            },
            {
                variable: "color_boton",
                label: "Color fondo boton:",
                content: "#3466B7",
                type: "color",
                group: "boton"
            },
            {
                variable: "color_texto_boton",
                label: "Color texto boton:",
                content: "#ffffff",
                type: "color",
                group: "boton"
            }
        ]
    },
    {
        id: "widget-2",
        author: "Widgy",
        label: "Titulo 2",
        html: `     <div id="{{ID}}">
                        <{{nivel_titulo}} class="titulo">{{titulo}}</{{nivel_titulo}}>
                        <p>{{texto_parrafo}}</p>
                        <button>{{texto_boton}}</button>
                    <div>
                    <style>
                        #{{ID}} {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            background-color: {{color_fondo}};
                            padding: 80px 20px;
                        }
                        #{{ID}} .titulo {
                            color: {{color_titulo}};
                            margin-bottom: 15px;
                        }
                        #{{ID}} p {
                            max-width: 600px;
                            color: {{color_parrafo}};
                            text-align: center;
                            margin-bottom: 20px;
                        }
                        #{{ID}} button {
                            background: {{color_boton}};
                            color: {{color_texto_boton}};
                            font-weight: 600;
                            font-size: 16px;
                            border: none;
                            padding: 20px 80px;
                            border-radius: 3px;
                            cursor: pointer;
                        }
                    </style>
                    `,
        groups: [
            {
                id: "contenedor",
                label: "Opciones del contenedor"
            },
            {
                id: "titulo",
                label: "Opciones del título"
            },
            {
                id: "parrafo",
                label: "Opciones del párrafo"
            },
            {
                id: "boton",
                label: "Opciones del botón"
            }
        ],
        variables: [
            {
                variable: "color_fondo",
                label: "Color del fondo:",
                content: "#000000",
                type: "color",
                group: "contenedor"
            },
            {
                variable: "titulo",
                label: "Texto del titulo",
                content: "Otro Titulo",
                type: "text",
                group: "titulo"
            },
            {
                variable: "color_titulo",
                label: "Color del titulo:",
                content: "#ffffff",
                type: "color",
                group: "titulo"
            },
            {
                variable: "nivel_titulo",
                label: "Nivel de titulo",
                content: "h1",
                type: "select",
                options: [
                    "h1",
                    "h2",
                    "h3",
                    "h4"
                ],
                group: "titulo"
            },
            {
                variable: "texto_parrafo",
                label: "Parrafo",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sodales ante, nec imperdiet metus sagittis vel. Fusce cursus quis nulla id ultricies. Vivamus mattis auctor dolor ac viverra. Ut facilisis rhoncus accumsan.",
                type: "textarea",
                group: "parrafo"
            },
            {
                variable: "color_parrafo",
                label: "Color del parrafo:",
                content: "#ffffff",
                type: "color",
                group: "parrafo"
            },
            {
                variable: "texto_boton",
                label: "Texto del botón",
                content: "Contactanos",
                type: "text",
                group: "boton"
            },
            {
                variable: "color_boton",
                label: "Color fondo boton:",
                content: "#3466B7",
                type: "color",
                group: "boton"
            },
            {
                variable: "color_texto_boton",
                label: "Color texto boton:",
                content: "#ffffff",
                type: "color",
                group: "boton"
            }
        ]
    }
]