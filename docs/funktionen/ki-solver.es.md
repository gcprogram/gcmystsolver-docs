# Resolución con IA

Si ninguno de los [solucionadores automáticos](solver.md) encuentra nada adecuado y el enigma no
es un enigma de campo reconocido, GCMystSolver puede consultar opcionalmente una IA conectada.

## Requisito

Necesitas tu propia clave API de un proveedor de IA compatible, que guardas en *Setup*. Sin una
clave guardada, la app sigue funcionando — solo que sin el componente de IA, únicamente con los
solucionadores automáticos.

## Recomendación: empezar gratis con NVIDIA o Google Gemini

GCMystSolver no incluye ningún acceso a IA propio — necesitas tu propia clave API. Dos
proveedores son especialmente adecuados para empezar, porque ofrecen una **cuota de uso gratuita
sin tarjeta de crédito**:

- **[Google Gemini](https://aistudio.google.com/)** (Google AI Studio): genera una clave API
  gratuita en pocos clics con una cuenta de Google ("Get API key"). El nivel gratuito es más que
  suficiente para el uso normal de la app.
- **[NVIDIA](https://build.nvidia.com/)** (catálogo API de NVIDIA): con una cuenta gratuita
  obtienes acceso a numerosos modelos alojados a través de una interfaz compatible con OpenAI —
  también utilizable sin tarjeta de crédito.

Ambos ya están configurados como **presets** listos para usar en GCMystSolver (ver la guía paso a
paso más abajo) — así que no tienes que buscar manualmente una URL base.

!!! tip "Añade más de un modelo"
    Como la app pasa automáticamente al siguiente modelo guardado en caso de fallo (ver
    [Rotación de modelos](#rotacion-de-modelos-en-lugar-de-un-modelo-de-respaldo-fijo) más
    abajo), vale la pena añadir tanto un modelo de Gemini como uno de NVIDIA, por ejemplo — así,
    si se agota la cuota de uno, el otro proveedor toma el relevo automáticamente.

### Paso a paso

1. Genera y copia una clave API gratuita en [aistudio.google.com](https://aistudio.google.com/) o
   [build.nvidia.com](https://build.nvidia.com/).
2. En GCMystSolver, ve a **Setup** y activa el interruptor **"AI solver"**.
3. En la sección **"Add model"**:
      - En **"Provider"**, selecciona *Google Gemini* o *NVIDIA* (la URL base se rellena
        automáticamente).
      - Pega la clave copiada en el campo **"API key"**.
      - Toca **"Fetch available models"** — la app carga la lista de modelos disponibles.
      - Elige un modelo en **"Model"**.
      - Guarda con **"Save model"**.
4. El modelo guardado aparece ahora en **"Saved models"** y se usa automáticamente como
   **"Main model"**, siempre que no hubiera ninguno configurado.
5. Opcional: repite el paso 3 para un segundo proveedor — ambos quedarán entonces en el orden de
   reserva.

<figure class="gcms-shot" markdown>
![Setup: activar AI solver y añadir un modelo](../assets/screenshots/setup-ai-solver.png)
<figcaption>Activar AI solver, modelos y límites</figcaption>
</figure>

<figure class="gcms-shot" markdown>
![Setup: selección de proveedor con presets NVIDIA/Google Gemini](../assets/screenshots/setup-add-model.png)
<figcaption>Selección de proveedor en el diálogo "Add model"</figcaption>
</figure>

## Rotación de modelos en lugar de un modelo de respaldo fijo

Guardas una lista de tus propios modelos en *Setup*. Si una petición falla (por ejemplo, porque
un proveedor está sobrecargado), la app prueba automáticamente el siguiente modelo de tu lista,
sin preguntar. Solo cuando **toda la lista** se ha probado sin éxito para una sola petición
aparece un aviso con las opciones *Cancel* o *Continue*.

En *Setup → Test models* puedes probar cada modelo guardado individualmente.

## Estimar el coste de forma aproximada

El asistente de configuración muestra una estimación aproximada del presupuesto de tokens:
alrededor de 900–1.000 tokens por cada caché que la IA realmente intenta; para una PocketQuery
completa de ~1.000 caches, típicamente entre varias decenas de miles y unos 200.000 tokens —
dependiendo de cuántos caches lleguen realmente hasta la etapa de IA (los solucionadores
automáticos interceptan la mayoría antes).

## Transparencia de la solución

Una solución propuesta por la IA siempre se muestra junto con su justificación y se marca como
**incierta (amarilla)** hasta que la confirmas o la corriges — nunca sobrescribe automáticamente
una solución ya marcada como fiable.
