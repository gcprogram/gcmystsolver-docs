# Primeros pasos

## 1. Importar caches

GCMystSolver lee **archivos GPX** — ya sean caches individuales exportados desde geocaching.com/
c:geo, o una **PocketQuery** completa con cientos de caches a la vez. Abre la app, elige *Import*
y el archivo deseado. Los caches ya existentes se actualizan en lugar de duplicarse.

Al importar ocurre automáticamente más que la simple lectura:

- El país, la región y el condado/provincia se determinan a partir de las coordenadas (sin
  conexión, sin necesidad de internet).
- Para los caches relevantes para challenges, se comprueba de inmediato si tus hallazgos
  existentes cumplen el requisito (semáforo rojo/amarillo/verde).
- Los datos de altitud se cargan en segundo plano (esto puede tardar un poco en PocketQueries
  grandes, pero se ejecuta discretamente mientras ya usas la app).

## 2. (Opcional) Activar la IA

Los solucionadores integrados ya resuelven muchos tipos de enigmas sin ninguna IA. Para todo lo
demás, puedes conectar una IA en *Setup* (tu propia clave API de un proveedor compatible). Setup
muestra una estimación aproximada del presupuesto de tokens, para que te hagas una idea del coste
esperado de una PocketQuery completa.

Más información: [Resolución con IA](funktionen/ki-solver.md), [Ajustes y copia de seguridad](funktionen/einstellungen-backup.md).

## 3. Dejar que lo resuelva

En la pestaña *Solve* inicias una sesión de resolución sobre tus caches importados. Eliges:

- **Cuán exhaustivo** (preset desde rápido/solo sin conexión hasta intensivo con IA),
- **Qué caches** se incluyen (solo no resueltos, no resueltos+inciertos, o realmente todos — ver
  [Solucionadores automáticos](funktionen/solver.md#modo-de-resolucion)).

Al final ves para cada cache un color de semáforo y, si se encontró algo, la solución propuesta
con su justificación.

## 4. Seguir trabajando en un cache concreto

En la página de detalle de un cache puedes aceptar la solución, corregirla, o abrir el
[chat con IA](funktionen/ai-chat.md) para discutir ese cache concreto con la IA.
