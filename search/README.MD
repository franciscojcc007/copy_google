Tu sitio web debe cumplir con los siguientes requisitos:

1.Su sitio web debe tener al menos tres páginas: una para la Búsqueda regular de Google (que debe llamarse), una para la Búsqueda de imágenes de Google y otra para la Búsqueda avanzada de Google. index.html

2.En la página de búsqueda de Google, debe haber enlaces en la parte superior derecha de la página para ir a la búsqueda de imágenes o a la búsqueda avanzada. En cada una de las otras dos páginas, debe haber un enlace en la parte superior derecha para volver a la Búsqueda de Google.

3.En la página de búsqueda de Google, el usuario debe poder escribir una consulta, hacer clic en "Búsqueda de Google" y ser llevado a los resultados de búsqueda de Google para esa página.

4.Al igual que la de Google, su barra de búsqueda debe estar centrada con esquinas redondeadas. El botón de búsqueda también debe estar centrado y debe estar debajo de la barra de búsqueda.

3.En la página de búsqueda de imágenes de Google, el usuario debe poder escribir una consulta, hacer clic en un botón de búsqueda y acceder a los resultados de búsqueda de imágenes de Google para esa página.

4.En la página de búsqueda avanzada de Google, el usuario debe poder proporcionar información para los siguientes cuatro campos (tomados de las propias opciones de búsqueda avanzada de Google):
Buscar páginas con... "Todas estas palabras:"
Buscar páginas con... "Esta palabra o frase exacta:"
Buscar páginas con... "Cualquiera de estas palabras:"
Buscar páginas con... "Ninguna de estas palabras:"

5.Al igual que la propia página de búsqueda avanzada de Google, las cuatro opciones deben apilarse verticalmente y todos los campos de texto deben estar alineados a la izquierda.

6.De acuerdo con el propio CSS de Google, el botón "Búsqueda avanzada" debe ser azul con texto blanco.

7.Cuando se hace clic en el botón "Búsqueda avanzada", el usuario debe ser llevado a la página de resultados de búsqueda para su consulta dada.

8.Añade el botón "Me siento afortunado" en la página principal de búsqueda de Google. De acuerdo con el propio comportamiento de Google, hacer clic en este enlace debería llevar a los usuarios directamente al primer resultado de búsqueda de Google para la consulta, sin pasar por la página de resultados normal.
Es posible que encuentres un aviso de redireccionamiento al usar el botón "Me siento afortunado". ¡No te preocupes! Esta es una consecuencia esperada de una función de seguridad implementada por Google.

9.El CSS que escribas debe parecerse a la estética de Google.

Consejos
Para determinar cuáles deben ser los nombres de los parámetros, puedes experimentar con las búsquedas de Google y observar la URL resultante. También puede ser útil abrir el inspector de "Red" (al que se puede acceder en Google Chrome eligiendo Ver -> Desarrollador -> Herramientas de Desarrollo) para ver detalles sobre las solicitudes que su navegador hace a Google.
Cualquier elemento (ya sea , , , o algo completamente diferente) puede tener atributos y que se convertirán en parámetros GET cuando se envíe un formulario.

<input>typetextsubmitnumbernamevalue

También puede resultarle útil consultar el propio HTML de Google para responder a estas preguntas. En la mayoría de los navegadores, puede hacer clic con la tecla Control pulsada o hacer clic con el botón derecho del ratón en una página y elegir "Ver código fuente de la página" para ver el HTML subyacente de la página.
Para incluir un campo de entrada en un formulario que los usuarios no pueden ver ni modificar, puede utilizar un campo de entrada "oculto".
