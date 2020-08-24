## Requerimientos
Utilizar la [pokéapi](https://pokeapi.co/docs/v2.html) para mostrar un listado de pokémons
   - no se permiten usar librerías que encapsulen la pokeapi
   - paginar de a 5 pokémons, el listado.
   - permitir hacer click y ver detalle del pokémon
   - en los detalles, mostrar sus habilidades, descripciones e imágenes del pokémon.
   - debe estar disponible en al menos dos idiomas.
   - enviar el código mediante algún repositorio git

## Criterios de evaluación
A la hora de evaluar las pruebas tendremos en cuenta:
   - Cumplimiento del objetivo
   - Pruebas unitarias y/o funcionales
   - Buenas prácticas de desarrollo y react
   - Adaptabilidad del código
   - Estilos responsive
   - Wow effect, a todos nos gusta ver cosas bonitas ¡Sorprendenos!

## Desarrollo

Para el ejemplo se utilizó la herramienta create-react-app para la generación del proyecto.

El proyecto se puede ejecutar con

### `npm start`

Y correrá la aplicación en modo desarrollo.<br />
Abriendo el navegador en  [http://localhost:3000](http://localhost:3000) se puede ver el proyecto.

También se puede acceder al proyecto ya deployado con Github Pages en [https://andrescenci.github.io/pokedex/](https://andrescenci.github.io/pokedex/).

## TO DO

**Soporte de idiomas**

El soporte de idiomas de la pokeapi es bastante deficiente, hay que llamar muchos endpoints extras para obtener las traducciones para una sola temática.  Además de que por cada llamado vienen las traducciones de todos los idiomas sin distinción.

En la misma sección de issues recomiendan bajar los archivos csv que tienen en el proyecto y armar una base de datos para obtener más rápido las traducciones.

Pensé en armar unos json con las traducciones para utilizar con intl, pero requiere de mucho esfuerzo. Así que sólo se da soporte al idioma inglés. 

Sin embargo, se deja el componente toggle para switchear de idioma y retomarlo en el futuro.

---

**Testing**

Queda pendiente realizar tests unitarios tanto para la api como para los distintos componentes.

---

**Features**

Agregar un componente de paginación para agilizar el pasaje de páginas. Saltar de a 5 pokemones para llegar a un punto avanzado se hace una eternidad.

Agregar un input de búsqueda.

Entender mejor de qué demonios se trata el mundo Pokémon para saber cuáles datos son importantes y cuáles no para mostrarlos de manera adecuada.
