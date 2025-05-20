# Servicios NLP en la interfaz

## Servicios

A continuación se detallan los servicios de NLP, dando una introducción sobre por qué pueden ser útiles, indicando cómo podrían aparecer en la interfaz y detallando el contexto del chatbot, es decir, la información a la que tendría acceso y las modificaciones que puede hacer.

### Chatbot documentación

##### Introducción

Una posible buena feature sería que los usuarios tuvieran una sección en la UI en la que puedan informarse de la documentación y legislación relativa a la cumplimentación de la Solicitud Única de la PAC. Esta vista ya está incluída en la UI, según la siguiente imagen tomada el 19-05-25:
![Vista documentación a 19-05-25](docs/donde_usar_nlp/img/vista_documentacion.png)
Sería interesante que los usuarios pudieran informarse sobre esta documentación de dos formas:

- Seleccionando un documento manualmente y buscando la información relevante
- Mediante preguntas a un chatbot

##### Lugar en la UI

En la vista de documentación.

##### Contexto del chatbot

Hay dos posibilidades. O bien el chatbot sólo tendrá acceso a la documentación subida por lo usuarios a la plataforma, o bien tendrá acceso a la misma más toda la legislación relativa a la PAC.

### Chatbot general

##### Introducción

Puede tener sentido tener un chatbot general accesible desde cualquier lugar.

##### Lugar en la UI

Ya hay una vista accesible desde la barra de navegación lateral que lleva a un chatbot general. También puede tener sentido tener el típico botón de chatbot en la esquina inferior derecha. Este botón abriría el típico modal en miniatura. Quizá tendría sentido que desde este pequeño elemento se pueda abrir ese mismo chat en la vista de chatbot ya incluída en la UI (imagen).

![Vista chatbot a 19-05-25](docs/donde_usar_nlp/img/vista_chatbot.png)

##### Contexto del chatbot

Una idea es que el usuario pueda elegir el contexto. Si no lo elige, que lo haga la IA. Los posibles contextos podrían ser todos los que están localizados en vistas:

- Documentación
- Edición de solicitudes (requeriría seleccionar a un cliente y/o solicitud)
- Preguntas sobre clientes

### Chatbot en edición de solicitudes

##### Introducción

Tiene sentido que puedan introducir cambios a través de un chatbot. Las modificaciones quizá no deben solo ser a partir de documentos de comunicaciones de clientes, si no que tiene sentido que puedan comunicarlas en lenguaje natural. También podrían adjuntar documentos desde el chatbot.

##### Lugar en la UI

Igual que el chatbot general, pero que al hacer click esté seleccionado el contexto de modificación de solicitud.

##### Contexto

En este caso no será púramente un chatbot de NLP, si no que habrá también reglas de cumplimentación codificadas.

El chatbot tendrá acceso a:

- La solicitud
- Los documentos
- La legislación, con pipelines especificas.

### Botón IA

##### Introducción

El botón IA recogerá distintas modificaciones automáticas, seleccionables por el usuario, pero que también puede no seleccionar, en cuyo caso se elegirán las mejores opciones. Algunas opciones serían, por ejemplo:

- Seleccionar ayudas a partir de tabla de recintos
- Seleccionar qué ayudas se aplican a cada recinto
- Rellenar partes que sean necesarias como

##### Lugar

Ya hay un botón en la UI en la vista de la Solicitud Única.

##### Contexto

Se hará una implementación híbrida entre NLP y reglas de completado de solicitudes.
