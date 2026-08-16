# Import (GPX / PocketQuery)

## Archivos compatibles

- **Archivos GPX** individuales, tal como los exporta geocaching.com o c:geo para un caché o una
  lista.
- **PocketQueries** (también en formato GPX) con hasta varios cientos de caches a la vez.

Los caches ya existentes se **actualizan** al reimportar, no se duplican — así que puedes
reimportar la misma lista tantas veces como quieras, por ejemplo para recoger tu estado de
hallazgo actual.

## Qué ocurre automáticamente al importar

1. **Resolución de región** (sin conexión, sin acceso a internet): el país, la región y el
   condado/provincia se determinan a partir de las coordenadas del caché.
2. **Prechequeo de challenges**: para todos los caches reconocidos como challenge, la evaluación
   por semáforo se calcula de inmediato (ver [Verificación de challenges](challenges.md)) — no
   solo al abrir el caché.
3. **Resolución de altitud en segundo plano**: los valores de altitud se obtienen sin bloquear la
   app. En importaciones muy grandes, esto puede seguir ejecutándose en segundo plano durante un
   rato.

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
