# Solucionadores automáticos

Antes de consultar siquiera a una IA, GCMystSolver intenta resolver tu enigma con una cadena de
solucionadores clásicos integrados. Eso es más rápido, gratis y funciona incluso sin ninguna IA
conectada.

Llegas a la pestaña *Solve* directamente a través de la navegación inferior (una sesión de
resolución sobre toda una lista), o mediante el botón Solve explícito en la página de detalle de
un solo caché (resuelve solo ese caché, sin importar el modo de resolución elegido).

<figure class="gcms-shot" markdown>
![Pestaña Solve con todos los chips de solucionadores](../assets/screenshots/solve-chips.png)
<figcaption>Modo de resolución, preset y chips de solucionadores activables individualmente</figcaption>
</figure>

## Qué se reconoce

| Solucionador | Reconoce |
|---|---|
| **what3words** | Coordenadas de tres palabras (`///palabra.palabra.palabra`) |
| **Vigenère** | Texto cifrado con Vigenère, incluida la detección de la clave |
| **ROT-N** | Desplazamientos César/ROT, incluso con N desconocido |
| **Cripto (multi-decodificador)** | Clásicos comunes como Base64, Morse, Atbash y otros, combinados |
| **Enigma** | Texto cifrado con Enigma |
| **Rumbo/proyección** | "Apunta a … grados, … metros" y la notación compacta de proyección N/E, en alemán/inglés/neerlandés/francés/checo |
| **Reverse Wherigo** | Cartuchos Wherigo evaluados a la inversa |
| **Dígitos/números en palabras ocultos en una historia** | Coordenadas ocultas como dígitos dispersos o números escritos en palabras dentro de un texto narrativo |
| **Detección one-stage** | Reconoce indicios explícitos de "una sola etapa"/"one-stage"; en letterbox, además una heurística indiciaria prudente |
| **Jigidi** | Reconoce un enlace de puzle Jigidi sin resolver y lo marca como "solo resoluble automáticamente en parte", en lugar de pasarlo silenciosamente a la IA (que no puede ver la imagen enlazada) |

Cada solucionador indica de forma transparente **qué se reconoció exactamente** (por ejemplo, el
número o texto detectado) — así una mala interpretación se nota de inmediato, en lugar de
disfrazarse de solución errónea silenciosa.

## Enigmas de campo vs. enigmas de sofá

GCMystSolver distingue si un enigma es en principio resoluble desde el sofá o si requiere
necesariamente una visita in situ (por ejemplo, un multi con varias etapas, un rumbo que solo se
puede medir en el primer punto de referencia). Ante indicios sólidos de un enigma de campo (por
ejemplo, numeración explícita de etapas en el listado o waypoints reales en el archivo GPX), no
se realiza ningún intento de resolución por IA — la app estaría adivinando.

## Modo de resolución

Al iniciar una sesión de resolución, eliges qué caches se incluyen:

- **Unsolved (por defecto)**: solo los caches realmente no resueltos (rojos); los enigmas de
  campo evidentes se omiten.
- **+ Partial**: además, las soluciones inciertas (amarillas); las soluciones fiables existentes
  (verdes) permanecen intactas.
- **Force (todos)**: realmente todos los caches, independientemente del color del semáforo o el
  estado de hallazgo — por ejemplo, para recalcular una solución tras una actualización de un
  solucionador.

Además eliges un **preset** (rápido/solo sin conexión hasta intensivo con IA), que determina
cuánto esfuerzo se dedica a buscar antes de consultar la IA.

## Caches encontrados

Los caches ya encontrados siempre se muestran como resueltos (verde), sin volver a comprobarse.
