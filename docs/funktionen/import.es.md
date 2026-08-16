# Import y export (GPX / PocketQuery)

<figure class="gcms-shot" markdown>
![Pantalla Import con el botón "Choose GPX / ZIP"](../assets/screenshots/import-screen.png)
<figcaption>Pestaña Import</figcaption>
</figure>

## Archivos compatibles

- **Archivos GPX** individuales, tal como los exporta geocaching.com o c:geo para un caché o una
  lista.
- **PocketQueries** (también en formato GPX) con hasta varios cientos de caches a la vez.

Los caches ya existentes se **actualizan** al reimportar, no se duplican — así que puedes
reimportar la misma lista tantas veces como quieras, por ejemplo para recoger tu estado de
hallazgo actual.

## Nombre de la lista

Antes de importar introduces un **nombre de lista libre** (prerrellenado con el nombre del
archivo; si lo dejas vacío, la lista se llama "import"). Dos casos:

- **Nombre nuevo**: se crea una nueva lista con ese nombre.
- **Nombre de una lista existente**: los caches importados se añaden a esa lista — no se crea
  ninguna lista duplicada ni caches duplicados.

También existe la opción **"Rename list by region (from cache locations)"** — tras la importación,
la app determina automáticamente un nombre a partir de las coordenadas de los caches (detección
de clúster + búsqueda del lugar), p. ej. "Kerpen, Nordrhein-Westfalen, DE".

!!! warning "No para consultas MyFinds"
    En una PocketQuery MyFinds, tus hallazgos están repartidos por todo el mundo — un
    renombrado automático por región no produce aquí un nombre útil. Para ese tipo de listas,
    ponle el nombre tú mismo (p. ej. "MyFinds").

## Qué ocurre automáticamente al importar

1. **Detección del estado de hallazgo**: una PocketQuery cuyo nombre empieza por "my finds" se
   reconoce automáticamente — todos los caches que contiene se marcan como encontrados (mensaje:
   *"Recognised as a My Finds query — all of them marked found."*). En PQ/archivos GPX normales,
   la app además reconoce tus propias entradas de log "Found it"/"Attended"/"Webcam Photo Taken"
   comparándolas con el **username** de geocaching.com guardado en *Setup*. Una vez que un caché
   se reconoce como encontrado, sigue siéndolo en cada importación posterior.
2. **Resolución de región** (sin conexión, sin acceso a internet): el país, la región y el
   condado/provincia se determinan a partir de las coordenadas del caché.
3. **Prechequeo de challenges**: para todos los caches reconocidos como challenge, la evaluación
   por semáforo se calcula de inmediato (ver [Verificación de challenges](challenges.md)) — no
   solo al abrir el caché.
4. **Resolución de altitud en segundo plano**: los valores de altitud se obtienen sin bloquear la
   app. En importaciones muy grandes, esto puede seguir ejecutándose en segundo plano durante un
   rato.

!!! tip "PQ MyFinds para una evaluación correcta de challenges"
    La verificación de challenges solo cuenta hallazgos que ya están en tu base de datos local —
    no hay comparación en línea con tu historial real de hallazgos. Para obtener resultados
    fiables en challenges de número de hallazgos/Jasmer/365 días/streak, importa por tanto una vez
    tu **PocketQuery MyFinds** completa (ver [Verificación de challenges](challenges.md)).

## Soluciones y notas existentes

- **Las soluciones nunca se sobrescriben**: una solución ya guardada sobrevive a una
  reimportación. Solo si el GPX importado contiene él mismo un bloque `[GCMystSolver]` más
  reciente (p. ej. porque estás releyendo un archivo que GCMystSolver ya exportó), la app adopta
  esa solución más reciente.
- **Las notas personales se combinan, no se sustituyen**: tu propio texto libre de la nota
  personal del GPX se conserva y se añade debajo del bloque `[GCMystSolver]` generado
  automáticamente — no se pierde nada, y las importaciones/exportaciones repetidas no apilan el
  bloque varias veces.

## Principio básico: sin conexión antes que red

Siempre que es posible, GCMystSolver usa **datos locales y referencias sin conexión** para la
importación y para la resolución de región/altitud, antes de cualquier acceso a la red. Eso hace
que la importación sea fiable y rápida incluso con listas grandes.

## La forma más rápida desde c:geo

1. En c:geo, en la vista de detalle de la lista, abre el menú → **"Exportar/Subir"** →
   **"Exportar GPX"**.
2. En GCMystSolver, ve a *Import* y, en el selector de archivos, navega hasta la carpeta de
   exportación de c:geo (normalmente `\cgeo\gpx`).
3. En el menú de tres puntos del selector de archivos, elige **"Ordenar por"** →
   **"Fecha de modificación (más reciente primero)"**.
4. Carga el archivo GPX que aparece arriba del todo (el más reciente).

Con más de 100 archivos GPX en la carpeta de exportación de c:geo, es difícil encontrar el
correcto de otra manera.

## Export

A través de **"Export GPX"** (en *Lists*, en una lista de caches, o en la lista "Solved") vuelves
a escribir tus caches, incluidos los resultados de GCMystSolver, en un archivo GPX — p. ej. para
usarlos en c:geo u otra app.

- **Coordenada resuelta**: si un caché está resuelto, la coordenada del waypoint exportado se
  ajusta directamente a la posición resuelta (sin waypoint "Final" separado — el propio caché se
  "traslada" a la solución en la exportación).
- **Solución en la nota personal**: la solución (coordenada original, coordenada resuelta,
  confianza, solve type, enlace al checker) termina como bloque `[GCMystSolver]` en la nota
  personal del caché exportado — inmediatamente seguido de tu propio texto de nota.

En *Setup → Export privacy* puedes reducir dos detalles de esto:

- **"Show AI model in export"**: desactivado, para que una solución de IA aparezca solo como "AI"
  en lugar de p. ej. "AI (gemini-2.5-flash)".
- **"Show [GCMystSolver] tag in export"**: desactivado, para que en la exportación quede
  **solo tu propio texto de nota** — sin confianza, solve type ni texto de solución. La
  coordenada resuelta en sí siempre se exporta, independientemente de esto.
