##Hola































# "Hackathon" de final de _Common Core_, películas

# Indeci-issues

## Índice

- [Preámbulo](#preámbulo)
- [Definición del proyecto](#definición-del-proyecto)
- [Diseño de experiencia de usuario](#diseño-de-experiencia-de-usuario)
- [Historias de usuario](#historias-de-usuario)
- [Primera iteración](#primera-iteración)
- [Segunda iteración](#segunda-iteración)
- [Desarrollo Front-end](#desarrollo-front-end)
- [Herramientas](#herramientas)
- [Checklist](#checklist)
- [Consideraciones generales](#consideraciones-generales)
- [Colaboradores](#colaboradores)

## Preámbulo

Probablemente conozcas la sensación: tener ganas de ver una película pero no acabar de concretar exactamente ni el género que te apetece ni la película que quieres ver. Es, en realidad, una respuesta psicológica normal que ocurre cuando tenemos mucha oferta delante de nosotros, como sucede con Netflix.  

Esta plataforma que se ha convertido en la favorita de muchos para ver peliculas on line, ofrece a sus usuarios una extensa lista de recomendaciones que se adaptan a sus hábitos de visualización, y en la cual los usuarios pasan un promedio de 1,8 segundos considerando cada título que se les presenta de esa enorme lista de recomendaciones.

Este es precisamente nuestro reto, ayudar a las personas a decidir rápida y fácilmente qué película ver de entre un mar de opciones.

## Definición del proyecto

Con esta web app pretendemos ayudar a nuestros usuarios a reducir tiempo en la elección de una película en base a su estado de ánimo, sugiriéndoles qué películas pueden ver mediante una lista de 6 películas para que decidan cuál de ellas ver. 

## Diseño de experiencia de usuario 

### Metodologías usadas

- Scrum:
Trabajamos de manera adaptativa, iterativa y flexible.

- Metodología Kanban:
La utilizamos para la gestión de nuestro proyecto, usando tarjetas visuales para la organizacón de las tareas enfocadas en nuestra historia de usuario.

### Heurísticas de usabilidad

Para la realizacion de este proyecto, tomámos en cuenta lo siguente: 

- Visibilidad del estado del sistema:
Brindando al usuario una respuesta en el menor tiempo posible.

- Relación entre el sistema y el mundo real:
Usandoun lenguaje familiar para el usuario, con información en orden lógico y natural.

- Libertad y control por parte del usuario:
Dando la facilidad a nuestros usuarios de poder deshacer o repetir una acción realizada.

- Reconocer antes que recordar:
Haciendo visibles acciones y opciones para que el usuario no tenga que recordar, manteniéndo un estándar en el diseño visual para que los elementos de la interfaz sean consistentes en diferentes pantallas.

- Flexibilidad y eficiencia en el uso
Desarrollando una herramienta útil para usuarios básicos y avanzados.

- Diseño estético y minimalista
Incluyendo información relevante y estrictamente necesaria.

### Historias de usuario

Al realizar las historias de nuestros usuarios, encontramos lo siguiente:

- Usuario: Yo como usuario quiero decidir fácil y rápidamente qué película ver para ahorrar tiempo buscando opciones.

#### Prototipado de baja fidelidad

Nuestro primero sketch fue el siguiente:

[Prototipado de baja fidelidad](https://drive.google.com/drive/folders/1RxA25gX8C3Rk1bDvO8fNOb5MvuCEhVxc?usp=sharing)

#### Encuestas 

10 encuestados (formulario):
[Formulario](https://docs.google.com/forms/d/1WSfhLhB1_lwpoO8pb5ycFZwXzMlvPrQQs6iONzO8MGc/edit#responses)

5 entrevistados:

- Oswaldo, 22 años / Lead teacher en Ironhack
- Cristian, 30 años / Vendedor corporativo de Ocesa
- Mary, 26 años / Seguridad privada
- Jhon, 32 años / Coach en Laboratoria
- Joselyn, 25 años / Desarrolladora Web
[Fotos de entrevistados](https://docs.google.com/document/d/1JTsv02vSCNd5qnXdK68xRfG9vaU6fGGoJUuvmlkWtxE/edit)

### Primera iteración

#### Validamos nuestra hipótesis

Los usuarios encuestados respondieron que tardan de 10 a 20 minutos en decidir qúe película on line verán, consideran que es mucho tiempo para tomar una decisión, también les interesa usar una herramienta que les facilíte esta elección y que sea de uso rápido y fácil, sin mucho tiempo de carga. 

- Ubicamos a nuestros usuarios principales

### Segunda iteración

#### Prototipado de alta fidelidad

El prototipo de alta fidelidad responde a las primeras necesidades de nuestros usuarios verificadas en el primer testeo del producto, entre ellas: interfaz veloz, dispositivo mobile, pocos pasos (clicks), 6 estados de ánimo claros y en relación a su icono, lista de 6 a 8 películas, ficha téncina con portada, título, calificación y sinópsis.

[Prototipado de alta fidelidad](https://www.figma.com/proto/XkUJ9zPHCofieqMNYWMj9I3o/Movies?node-id=62%3A138&scaling=scale-down)

#### Testeos de usabilidad

[Testeo de usabilidad](https://docs.google.com/document/d/1Br_7VyrTDQdzYT3DARwK3-gyzWsoe0c5Fidn8ChKSUw/edit?usp=sharing)

Observaciones de los usuarios:

- Es simple en su uso
- La interfaz parece un juego, te invita a usarlo y probarlo.
- Los botones son claros excepto el de "aventura"
- Estaría padre que tuviera un playlist de películas (guardar mi lista)
- Al elegir la película, te direccione a un servicio de streaming (Netflix).

En esta segunda iteración recibimos comentarios positivos en cuanto al diseño e idea. Observamos que responde a las necesidasdes de nuestros usuarios al requerir pocos clicks en su navegación, los 6 botones para cada estado de ánimo son claros excepto el de "aventura", el número de películas mostradas es fácil de ver, junto con la ficha téncina con portada, título, calificación y sinópsis. En general esta web app les parece intuitiva y de fácil navegación, además cumple con los puntos de la heurística que determinamos al inicio del proyecto.

Concluimos que esta herramienta web reduce el tiempo que los usuarios invierten en elegir una película, facilitándole esta tarea mediante la elección de su estado de ánimo, Además en un segundo alcance, podría servir como apoyo para las plataformas que transmiten películas on line, resolviendo la problemática del tiempo e indecisión de los usarios. 

### Diseño de la Interfaz de Usuario

Con el objetivo de facilitar a los usuarios la búsqueda y elección de una película, diseñamos una interfaz gráfica simple e intuitiva, por medio de los siguientes elementos:

- Identificación: Botones para cada estado de ánimo, diferenciados por color e icono.

- Navegación: Agregamos en un menú principal por un icono para poder regresar en cualqier momento, 

- Interacción: Para provocar la interacción del usuario, ofrecemos la posibilidad de realizar acciones     específicas, para que elija el contenido de su interés.

- Color: Basada en los resultados de las encuestas, en la psicología del color, así como la invesitigación en las aplicaciones de cine, determinamos lo siguiente: 

1. Rojo: Valiente
2. Azul: Nostalgia
4. Naranja: Aventurero
5. Rosa: Romántico
6. Amarillo: Alegre
7. Azul: Futurista

- Tipografía: Roboto sans-serif para darle un aspecto fresco, simple y legible a la página web.

- Plecas: Se utilizaron para dividir visualmente cada sección de la página.  

## Desarrollo Front-end

### Herramientas

- Java Script Vanilla
- CSS con diseño responsivo
- HTML5

### Métodos y Funciones utilizadas

- Filter
- Funciones puras
- Fetch

Indeci-issues funciona gracias a Open Movie Data Base, con la propiedad **LocalStorage** almacenamos los datos de la API en el navegador del usuario para poder consumirlos.

Se implementó una **función** que usa el **método filter()** para clasificar y mostrar el contenido a partir de dos párametros: la categoría y la base de datos almacenada.  

## Herramientas

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Figma](https://www.figma.com/)
- [Realtime Board](https://realtimeboard.com/)

## Checklist

- [ ] Usa VanillaJS.
- [ ] No hace uso de `this`.
- [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
- [ ] Incluye historias de usuario en `README.md`.
- [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
      `README.md`.
- [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
      en `README.md`.
- [ ] Incluye el listado de problemas que detectaste a través de tests de
      usabilidad en el `README.md`.
- [ ] UI: Permite ordenar data por uno o más campos.
- [ ] UI: Permite filtrar data en base a una condición.

## Cómo empezar a trabajar en el proyecto

Para empezar se sugiere:
1. Realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu :fork_and_knife: a tu computadora (copia local).
3. 📦 Instalar las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. A codear se ha dicho! :rocket:

## Consideraciones generales

- Este proyecto fue desarrollado por un equipos de 5 personas.
- Usa la API de [OMDB](http://www.omdbapi.com/) (The Open Movie Database).
- Tiempo en que se completó el reto: 3 días.

## Colaboradores

- Lorena Bellacetín: Front-end development, implementación de funciones en js/ html
- Karen Martínez Front-end-development, implementación de funciones js/html
- Claudia Ramírez Front-end-development. implementación de funciones
- Diana Yoalli Peláez Gómez: UX Experience, encuestas a usuarios, testeo de usabilidad, flujo de información de la interfaz (prototipo de baja y alta fidelidad).
- Andrea Ramírez: UX Experiencie, encuestas y testeo de usabilidad, flujo de información de la interfaz (prototipo de baja y alta fidelidad).

* Cada una de las integrantes participó activamente en la ideación de este producto.