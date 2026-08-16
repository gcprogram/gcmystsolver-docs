# Base de datos, listas y estadísticas

## Lists

La pestaña de inicio muestra todas tus listas importadas más dos entradas fijas: **"All caches"**
(todos los caches juntos) y **"Solved"** (todos los caches resueltos alrededor de un punto central
que tú eliges).

<figure class="gcms-shot" markdown>
![Lists: pantalla de inicio con todas las listas importadas](../assets/screenshots/lists-home.png)
<figcaption>Lists — pantalla de inicio</figcaption>
</figure>

## Lista de caches

Al tocar una lista se abre una lista de caches buscable y filtrable — por color de semáforo, tipo
de caché y más. Desde ahí abres la página de detalle de un caché.

<figure class="gcms-shot" markdown>
![Lista de caches con un semáforo en el borde izquierdo y una barra de filtros arriba](../assets/screenshots/list-detail-arrows.png)
<figcaption>Izquierda: semáforo por caché. Arriba: filtro por tipo de caché, filtro por color, filtro por solucionador</figcaption>
</figure>

- La **flecha roja superior** señala la barra de filtros: iconos de tipo de caché, los tres
  colores de semáforo (verde/amarillo/rojo) para mostrar/ocultar, y un menú desplegable
  **"Solver"** para filtrar por solucionadores concretos.
- La **flecha roja inferior izquierda** señala el pequeño **semáforo de tres puntos en el borde
  izquierdo de cada caché** — el color actual aparece sólido, los otros dos puntos quedan pálidos.
  El mismo código rojo/amarillo/verde que en el resto de la app.

### Dos semáforos independientes: estado de resolución y estado de challenge

En los challenge caches pueden verse **dos** semáforos a la vez — uno a la izquierda, otro a la
derecha del borde de la fila:

<figure class="gcms-shot" markdown>
![Dos semáforos: estado de resolución a la izquierda, cumplimiento del challenge a la derecha](../assets/screenshots/ampel-legend.png)
<figcaption>Izquierda: estado de resolución (aquí verde). Derecha: cumplimiento del challenge (aquí amarillo/parcial)</figcaption>
</figure>

- **Izquierda = estado de resolución**: ¿se reconoció el requisito del caché (p. ej. el texto del
  challenge) y es fiable la solución/evaluación?
- **Derecha = cumplimiento del challenge**: ¿cumples ya con tus hallazgos existentes el requisito
  reconocido? (Ver [Verificación de challenges](challenges.md) para más detalles sobre esta
  segunda evaluación, independiente.)

## Detalle del caché

En la página de detalle de un caché encuentras el listado, la pista, la solución actual, el color
del semáforo y — todos juntos en **una sola tarjeta "Solver results"** — los botones adicionales
relevantes para ese caché: p. ej. un enlace a un Geochecker, a gc-project (si el listado lo
enlaza), o a una página de grabación de webcam en caches de tipo webcam.

## Map

La pestaña de mapa muestra la lista seleccionada actualmente como marcadores en un mapa de
OpenStreetMap. Cada marcador combina dos informaciones:

- **El símbolo del tipo de caché** en el centro (p. ej. "?" para Mystery, un icono de libro para
  Traditional).
- **Un anillo de color** alrededor del símbolo en cuanto existe un estado de resolución: **verde**
  = solución fiable (confianza ≥ 90 %), **amarillo/ámbar** = solución incierta/parcial. Sin anillo
  significa: todavía sin resolver.

<figure class="gcms-shot" markdown>
![Mapa con varios mystery caches resueltos, con anillo verde](../assets/screenshots/map-solved-marker.png)
<figcaption>Los marcadores "?" con anillo verde son mystery caches resueltos</figcaption>
</figure>

En los challenge caches se añade además una pequeña **insignia en la esquina inferior derecha del
marcador** — es el cumplimiento del challenge (el mismo segundo semáforo que en la lista, ver
arriba), independiente del estado de resolución del anillo. Con muchos marcadores muy juntos, la
app cambia automáticamente a un modo de puntos más compacto, donde el color del tipo de caché
rellena la superficie y el estado de resolución aparece como un anillo fino alrededor.

### Mapas sin conexión

El icono de capas arriba a la derecha te permite cambiar entre el mapa en línea (OpenStreetMap) y
un **mapa sin conexión (archivo .map)** cargado por ti mismo — práctico para usar sin conexión a
internet. Esos archivos `.map` se pueden descargar p. ej. con **c:geo**, y luego también están
disponibles aquí para seleccionarlos.

<figure class="gcms-shot" markdown>
![Selector de capa de mapa: Online (OSM), Offline (.map), Select Offline Map](../assets/screenshots/map-offline-selector.png)
<figcaption>Selección de mapa en línea/sin conexión</figcaption>
</figure>

## Estadísticas

La pantalla de estadísticas te muestra, por tipo de caché, cuántos caches están resueltos,
parcialmente resueltos y reconocidos como enigmas de campo en total — así ves de un vistazo dónde
queda trabajo por hacer y dónde una visita in situ es de todos modos inevitable.

<figure class="gcms-shot" markdown>
![Tabla de estadísticas por tipo de caché](../assets/screenshots/statistics.png)
<figcaption>Estadísticas por tipo de caché, con un desglose "By solver" debajo</figcaption>
</figure>

!!! tip "Directo a la lista filtrada"
    Tocar una fila de tipo de caché en la tabla de estadísticas (p. ej. "Mystery") te lleva
    directamente a la lista de caches, ya filtrada exactamente por ese tipo.

## Copia de seguridad y restauración

En *Setup* puedes hacer una copia de seguridad de toda tu base de datos (incluidos todos los
ajustes) y restaurarla en otro dispositivo. Detalles: [Ajustes y copia de seguridad](einstellungen-backup.md).
