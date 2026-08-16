# Verificación de challenges

Para los challenge caches (caches que exigen haber encontrado antes ciertos otros caches),
GCMystSolver calcula automáticamente una **evaluación por semáforo**: ¿cumples ya el requisito con
tus hallazgos existentes?

## ¿Cuándo se comprueba?

En **cada importación** — no solo cuando abres el caché. Así ves de inmediato en tu lista de
caches qué challenges ya cumples.

## Tipos de challenge reconocidos

- **Challenges de matriz D/T** (p. ej. "las 81 combinaciones de Difficulty/Terrain")
- **Challenges de países** ("mini vuelta al mundo" — hallazgos físicos en países concretos)
- **Challenges de región**
- **Challenges de condado/provincia** *(actualmente solo comprueba el número de
  condados/provincias distintos, no una lista concreta predefinida)*
- **Challenges de altitud** (hallazgos por encima/debajo de una altitud determinada)
- **Challenges de número de hallazgos** (p. ej. "al menos 500 hallazgos")
- **Challenge Jasmer** (un hallazgo por mes calendario desde mayo de 2000)
- **Challenge 365/366 días** (un hallazgo por día calendario del año, a través de los años)
- **Challenge streak** (la racha más larga de días consecutivos con hallazgo)

## Colores del semáforo

- 🔴 **Rojo**: requisito actualmente no cumplido.
- 🟡 **Amarillo**: incierto — p. ej. porque la detección en el texto libre del listado no fue
  inequívoca.
- 🟢 **Verde**: requisito cumplido según los datos actuales.

## Lista de evidencias

Para cada requisito cumplido, la app muestra la **evidencia mínima necesaria** — es decir,
exactamente los hallazgos que cumplen el requisito (p. ej. un hallazgo por mes), no todos tus
hallazgos en total. Cuando se necesita mucha evidencia, la lista se muestra automáticamente de
forma más compacta (solo fecha y código GC en lugar del título completo), o, para cantidades
extremadamente grandes, solo se resume como texto, para que la página de detalle siga siendo
legible.

## Transparencia en la detección de texto libre

Los requisitos que deben extraerse del texto libre de un listado (p. ej. un número mínimo de
hallazgos mencionado en el texto) siempre se muestran junto con el **valor concretamente
detectado** — así notas de inmediato una mala interpretación, en lugar de tener que confiar en
una caja negra silenciosa.

## Caches encontrados

Un caché ya encontrado siempre se muestra en verde, independientemente de su requisito de
challenge.

!!! tip "Después de una actualización"
    Si se corrigió una verificación de challenge, puedes ir a *Setup* y usar **"Clear stored
    solutions"** para eliminar específicamente todas las evaluaciones guardadas de un tipo y
    hacer que se recalculen, para que no queden evaluaciones erróneas obsoletas.
