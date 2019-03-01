# "Hackathon" de final de _Common Core_, películas

## Índice

- [Preámbulo](#preámbulo)
- [Resumen del proyecto](#resumen-del-proyecto)
- [Historias de usuario](#consideraciones-generales)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [Parte obligatoria](#parte-obligatoria)
- [Consideraciones técnicas](#consideraciones-técnicas)


## Preámbulo

Probablemente conozcas la sensación: tener ganas de ver una película pero no acabar de concretar exactamente ni el género que te apetece ni la película que quieres ver. Es, en realidad, una respuesta psicológica normal que ocurre cuando tenemos mucha oferta delante de nosotros, como sucede con Netflix.  

Esta plataforma que se ha convertido en la favorita de muchos para ver peliculas on line, ofrece a sus usuarios una extensa lista de recomendaciones que se adaptan a sus hábitos de visualización, y en la cual los usuarios pasan un promedio de 1,8 segundos considerando cada título que se les presenta de esa enorme lista de recomendaciones.

Este es precisamente nuestro reto, ayudar a las personas a decidir rápida y fácilmente qué película ver de entre un mar de opciones.

## Definición del proyecto

Con esta web app pretendemos ayudar a nuestros usuarios a reducir tiempo en la elección de una película en base a su estado de ánimo, sugiriéndoles qué películas pueden ver mediante una lista de 6 películas para que decidan cuál de ellas ver. 

### Historia de usuario

Al realizar las historias de nuestros usuarios, encontramos que:

- Usuario 1: Yo como usuario quiero decidir fácil y rápidamente qué película ver para no pasar tanto tiempo buscando opciones.

### Diseño de la Interfaz de Usuario

Con el objetivo de facilitar a los usuarios la búsqueda y elección de una película, diseñamos una interfaz gráfica simple e intuitiva, por medio de los siguientes elementos:

- Identificación: Botones para cada estado de ánimo, diferenciados por color e icono.

- Navegación: Agregamos en un menú principal por un icono para poder regresar en cualqier momento, 

- Interacción: Para provocar la interacción del usuario, ofrecemos la posibilidad de realizar acciones     específicas, para que elija el contenido de su interés.

- Color: Basada en los resultados de las encuestas, en la psicología del color, así como la invesitigación en las aplicaciones de cine, determinamos lo siguiente: 

1. Rojo: Mood Valiente
2. Azul: Nostalgia
4. Naranja: Aventurero
5. Rosa: Romántico
6. Amarillo: Alegre
7. Azul: Futurista

- Tipografía: Roboto sans-serif para darle un aspecto fresco, simple y legible a la página web.

- Plecas: Se utilizaron para dividir visualmente cada sección de la página.  

#### Prototipo de baja fidelidad
Para iniciar nuestro diseño partimos desde un dispositivo mobile. Nuestros primeros sketch son los siguientes:

![Pantalla inicio](./src/assets/images/imagen_sket3.jpg)
![Pantalla 1](./src/assets/images/imagen_sket1.jpg)
![Pantalla 2](./src/assets/images/imagen_sket2.jpg)
![Pantalla 3](./src/assets/images/imagen_sket4.jpg)

#### Prototipo de alta fidelidad
El prototipo de alta fidelidad sufrió cambios a lo largo de las iteraciones del producto, con base a los resultados obtenidos en las encuestas.

![Prototipo 1](./src/assets/images/PrototypeAlta_01.jpg)
![Prototipo 2](./src/assets/images/PrototypeAlta_02.jpg)

#### Testeos de usabilidad

Se realizaron encuestas principalmente a profesionales y voluntarios que trabajan en asociaciones no lucrativas. Con el objetivo de conocer su principal impresión del producto.

Los principales problemas que se detectaron en las pruebas de usabilidad fueron:

-Páginas muy complejas de manejar.

-Páginas con diseño poco atractivo.

-Páginas con mucha información.

-Páginas con información no jerarquizada.

![Encuesta 1](./src/assets/images/usabilidad_1.png)
![Encuesta 2](./src/assets/images/usabilidad_2.png)
![Encuesta 3](./src/assets/images/usabilidad_3.png)
![Encuesta 4](./src/assets/images/usabilidad_4.png)
![Encuesta 5](./src/assets/images/usabilidad_5.png)

## Segunda iteración 

### Historia de mi Proto Persona

Datos personales:

Nombre: Gabriela Rocha
Edad: 35 años
Ciudad de México
Estudios: Psicología, Maestría en Administración Pública
Empresa y Cargo: Laboratoria / Partner & COO  (Socia y Directora de Operaciones)
Labor en la empresa: Dirigir los equipos de Operaciones de Laboratoria en América Latina, identificar y lanzar nuevas ubicaciones para el crecimiento y fortalecer la cultura de la organización en todos los equipos.
Medio de transporte al trabajo: Coche
Dispositivos tecnológicos usa regularmente: Móvil, Laptop (apple)
Dispositivo tecnológico que usa principalmente para obtener información: Móvil, Laptop

### Historias de usuario

- Yo como usuario necesito conocer los niveles en educación de las mujeres en América Latina para identificar zonas de mayor necesidad, y así, proponer y lanzar nuevas ubicaciones para la expansión de la organización a la que pertenezco.  

#### Testeos de usabilidad

Se realizaron test con usuarios de escolaridad mínima de licenciatura, en actividad laboral, viviendo en la Ciudad de México, en edades de los 30 a los 35 años de edad.

La prueba se realizó con el uso de la web app versión desktop, teniendo 10 minutos para navegar en la página web.

Los comentarios de los usuarios despúes de la prueba, fueron:

- El logo parece arbolito de navidad.
- Para el botón de estadísticas hace falta un texto que haga referencia al contenido que va a mostrar.
- Botón de estadísticas, la transparencia del hover no es legible.
- Radios: Incluir que se ordenan los porcentajes (%).
- Hacer tablas o gráficas para mayor comprensión de los datos.
- Botones de cada país con hover o encendido-on, una ves que se selecciona uno de ellos.
- Texto descriptivo que haga referencia al indicador que se despliega. 
- Selector de indicadores con texto previa (placeholder). 
- En la tabla resaltar los porcentajes (%).
- Resumir sección “nosotros”.
- Contacto: Quitar telefonos, sobran.

#### Prototipo de alta fidelidad
El prototipo de alta fidelidad sufrió cambios a lo largo de las iteraciones del producto, con base a los resultados obtenidos en las encuestas.

![Prototipo de Testeo](./src/index.html)
![Prototipo Iterado](https://marvelapp.com/b2abb6e/screen/53746532)

### Pruebas unitarias

## Consideraciones técnicas

La lógica del proyecto está implementada completamente en JavaScript
(ES6), HTML y CSS. 

Se implementaron pruebas unitarias para validar las funciones encargadas de procesar, filtrar y ordenar la data. Estos test se realizaron con [Jest](https://jestjs.io/).

Como gestor de proyecto de utilizó NPM (Node Package Manager).

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── package.json
├── README.md
├── src
│   ├── data
│   │   ├── injuries
│   │   │   ├── injuries.js
│   │   │   └── injuries.json
│   │   ├── lol
│   │   │   ├── lol.js
│   │   │   └── lol.json
│   │   ├── pokemon
│   │   │   ├── pokemon.js
│   │   │   └── pokemon.json
│   │   ├── steam
│   │   │   ├── steam.js
│   │   │   └── steam.json
│   │   └── worldbank
│   │       ├── worldbank.js
│   │       └── worldbank.json
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    └── data.spec.js

8 directories, 17 files
```

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


## Contenido de referencia

### Diseño de experiencia de usuario (User Experience Design)

- Investigación con usuarios / entrevistas, encuestas, testeo de interfaz
- Principios de diseño visual

### Desarrollo Front-end

- xxxxx

### Herramientas

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Figma](https://www.figma.com/)
- [Realtime Board](https://realtimeboard.com/)
- [GitHub Pages](https://pages.github.com/)
- [Node.js](https://nodejs.org/)


## Checklist

- [ ] Usa VanillaJS.
- [ ] No hace uso de `this`.
- [ ] Pasa linter (`npm pretest`)
- [ ] Pasa tests (`npm test`)
- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
      lines y branches.
- [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
- [ ] Incluye historias de usuario en `README.md`.
- [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
      `README.md`.
- [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
      en `README.md`.
- [ ] Incluye el listado de problemas que detectaste a través de tests de
      usabilidad en el `README.md`.
- [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
- [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
- [ ] UI: Permite filtrar data en base a una condición.

## Checklist (Opcional)

- [ ] Escribir nuestro checklist.


## Consideraciones generales

- Este proyecto fue desarrollado por un equipos de 5 personas.
- Usa la API de [OMDB](http://www.omdbapi.com/) (The Open Movie Database).
- Tiempo en que se completó el reto: 3 días.

## Parte Obligatoria

- Todo el planeamiento del trabajo deberá ser detallado en un repositorio único
  por _squad_ en el que se presente el _planning_, el _research_, los _sketches_
  y las inspiraciones utilizadas para definir el producto.
- Además, deberás detallar en el archivo _readme_, qué hizo cada una en el
  proyecto.
- El producto deberá presentarse publicado en github pages.

## Consideraciones técnicas

- El diseño visual de los componentes es de libre elección.
- Pueden usar algún framework de css si así lo deciden.