## Descarga, instalación y ejecución de producto

Es una aplicación responsiva, mobile first, se accede por medio del link: 
ameyallibg/mex007-hackathon-interna

### Herramientas usadas
La aplicación está estructurada utilizando:
 - Un editor de texto (Visual Code) 
 - Vanilla JS
 - HTML 5
 - CSS
 - GitHub 
 - GitHub Pages 
 - Git Bash 
 - Node.js
 - Jest
 - Marvel

### Scripts / Archivos
- README.md: explica cómo descargar, instalar y ejecutar la aplicación así como una introducción a la aplicación, su funcionalidad y decisiones de diseño tomadas.
- data.js: contiene las funciones que manipulan la data (procesar y filtrar).
Funciones implementadas:
* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
 data, y nos retornaría aquellos datos que sí cumplan con la condición.
- main.js: set de datos que muestra la lista de películas.
- data.js: es donde se implementan los eventos del DOM para permitir interacción con el usuario al mostrar y ordenar la data, el cual debe estar exportado en el objeto global (window).
- html/index: tiene la estructura de la página.
- CSS: permite dar el diseño a la interfaz en elementos como la tipografía, color, imagen de fondo, acomodar los elementos como textos, imágenes, botones, lista desplegable, encabezado, contenido y pie de página.
- Carpeta de imágenes: galería con los prototipos de baja y alta fidelidad, así como la evidencia de las encuestas realizadas.

## Ejecución de pruebas
El boilerplate contiene la configuración necesaria para ejecutar los tests, en este caso las pruebas unitarias.
Se ejecutan eslint y htmlhint para verificar el HTML y JavaScript con respecto a una guías de estilos. Ambas tareas se ejecutan automáticamente antes de ejecutar las pruebas cuando se escribe el comando npm run test. 
Finalmente, está el code coverage para ver el nivel de cobertura de los tests también utilizando el comando npm run test.

## Definición del producto
**Cinema ** es una app diseñada para aquellas personas que están adentrándose en el cine de arte (también conocido como cine independiente o cine de autor) y, por tal motivo, buscan qué películas pueden ver. 
 
## Historias de usuario
1. Yo, como usuario, quiero encontrar las películas por su nombre porque así es más fácil reconocerlas.

2. Yo, como usuario, quiero encontrar películas a partir de determinados directores porque al ya haber visto una quiero conocer más sobre el mismo director.

3. Yo, como usuario, quiero saber lo más relevante de una película por medio de una  sinopsis para saber si quiero o no ver dicha película.
 
## Diseño de experiencia de usuario (User Experience Design):
**Ideación**
El objetivo es lograr que la interacción sea intuitiva, fácil de usar. La interacción ocurre en una sola pantalla en la que el usuario realiza una búsqueda por título de película o director en el campo de búsqueda. Como resultado, la página filtrará el resultado.
Debajo del buscador hay un menú en el que el usuario puede hacer búsqueda de películas por género, director o por premiaciones y finalmente está la opciónd de "acerca de" en donde se despliega información sobre el objetigo de la página, que es brindar información y recomendación de películas para que la gente pueda tomar decisión para ver o no una cinta, así como también una aclaración sobre la definición de cine de arte.

##Fotos de los bocetos hechos en hoja con bolígrafo
![GitHub Boceto](src/prototipos/boceto1.jpg)
![GitHub Boceto](src/prototipos/boceto2.jpg)
![GitHub Boceto](src/prototipos/boceto3.jpg)

##Prototipo de alta fidelidad (User Testing)
Imágenes editadas en Marvel
![GitHub BocetoAltaFidelidad](src/prototipos/altafidelidad1.png)
![GitHub BocetoAltaFidelidad](src/prototipos/altafidelidad2.jpg)
![GitHub BocetoAltaFidelidad](src/prototipos/altafidelidad3.jpg)
![GitHub BocetoAltaFidelidad](src/prototipos/altafidelidad4.jpg)

##Encuesta
Evidencia de la encuesta inicial, realizada a 25 personas, donde sus respuestas confirmaron que sí son usuarias de páginas para consultar información sobre películas, asimismo brindaron una orientación para realizar el diseño en mobile first.

![GitHub Encuesta](src/prototipos/p1.png)
![GitHub Encuesta](src/prototipos/p2.jpg)
![GitHub Encuesta](src/prototipos/p3.jpg)
![GitHub Encuesta](src/prototipos/p4.jpg)
![GitHub Encuesta](src/prototipos/p5.jpg)
![GitHub Encuesta](src/prototipos/p6.jpg)
![GitHub Encuesta](src/prototipos/p7.jpg)

##Pruebas de usabilidad
**Problemas de usabilidad detectados a través de los tests**
Después de una encuesta sobre el diseño de lo que sería la app, se encontró que no se entendía cómo funcionaba la búsqueda o el menú de búsqueda. Asimismo, se sugirió que se realizara cambio de colores y que se cambiara la forma en que funcionaría el "carrusel". Por otro lado, se pidió que se agregara un breve texto informativo indicando qué se encontraría en esa app.

![GitHub Encuesta de diseño](src/encuestadiseño/pm1.png)
![GitHub Encuesta de diseño](src/encuestadiseño/pm2.jpg)
![GitHub Encuesta de diseño](src/encuestadiseño/pm3.jpg)
![GitHub Encuesta de diseño](src/encuestadiseño/pm4.jpg)
![GitHub Encuesta de diseño](src/encuestadiseño/muestra.jpg)

## Implementación de la Interfaz de Usuario (HTML/CSS/JS)
Se muestra la data en una interfaz: un "carrusel" con las imágenes que contienen el poster, el título y el director de cada película. Al dar click a cada imagen, se desplegará una ficha que mostrará más datos de la película seleccionado.
La aplicación permite al usuario realizar búsqueda por letra, es decir, se puede colocar la inicial y se muestran las películas o directores que coincidan con dicha inicial.
La aplicación permite al usuario filtrar la data: ya sea por título, género y/o director. 

La información se visualiza sin problemas desde distintos tamaños de pantallas: móviles, tablets y desktops.

## Autores
* Ameyalli Brito
* Maritza Díaz 
* Jazmín Domínguez
* Katya Rodríguez

## División de tareas
**Primer Sprint:**
* Todas: definir qué tipo de app se desarrollaría y la información a mostrar, delimitación del target.
* Ameyalli y Jazmín: extraer el código a usar desde la API, entender y manipular la data.Escribir código, crear función de filtrar.
* Katya y Maritza: Historias de usuario, prototipo de baja y alta fidelidad, elaboración y aplicación de encuestas para saber qué información mostrar. Escribir parte del maquetado en HTML y CSS (barra de navegación, pie de página, lista desplegable). Redacción del ReadMe.

**Segundo Sprint**
* Todas: definir qué se haría para el entregable final, qué se agregaría y qué se modificaría con base en el feedback de la primera demo.
* Ameyalli: escritura de código para implementar el carrusel.
* Jaz: escritura de código para tener la función de filtro e impresión por género.
* Katya y Maritza: modificación de producto a presentar, tener una definición más certera sobre "cine de arte", agregar las evidencias de la primera encuesta al ReadMe, redacción y elaboración para la encuesta de usabilidad. Discusión entre squad para considerar el feedback y realizar los cambios pertinentes.

##Fuentes consultadas
* http://capitaljovenisic.org.mx/blog/post/
* las-10-mejores-pel%C3%ADculas-de-cine-de-arte-que-no-te-puedes-perder-/252
* https://culturacolectiva.com/cine/por-que-es-cine-de-arte
* http://cinemania.elmundo.es/especiales/las-100-mejores-webs-de-cine/
* https://encuadres.com.mx/ 

* Trello: https://trello.com/b/jPFaVEDo/hackatoncito 