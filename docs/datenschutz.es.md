# Política de privacidad

!!! info "No sustituye el asesoramiento legal"
    Este texto describe con la mayor precisión posible qué datos procesa GCMystSolver y por qué.
    No sustituye un asesoramiento legal individual.

## Responsable del tratamiento

Desarrollador: **LoveCaching**
Correo: [LoveCaching@gcmystsolver.de](mailto:LoveCaching@gcmystsolver.de)

## ¿Qué datos procesa GCMystSolver?

- **Datos de geocaches** (título, coordenadas, texto del listado, estado de hallazgo, …) que
  importas tú mismo mediante GPX/PocketQuery. Permanecen locales en tu dispositivo (base de datos
  Room), a menos que uses una de las funciones de red opcionales que se indican a continuación.
- **Cálculo relacionado con la ubicación, sin conexión**: el país, la región y el condado/
  provincia se determinan a partir de las coordenadas importadas localmente en el dispositivo,
  sin acceso a la red.
- **Datos de altitud**: para los caches importados, las coordenadas se envían a
  [OpenTopoData](https://www.opentopodata.org/) (conjunto de datos SRTM30m) para determinar la
  altitud. Esto ocurre automáticamente en segundo plano, sin que necesites tu propia cuenta/clave.
  El motivo son los challenges de altitud, que exigen un hallazgo por encima/debajo de una
  determinada altitud sobre el nivel del mar (p. ej. "x caches por encima de 2.000 m") — sin
  datos de altitud, la app no podría evaluar estos challenges.
- **Peticiones a la IA (opcional, solo si tú lo activas)**: GCMystSolver en sí **no** incluye
  ningún proveedor de IA integrado de fábrica. En *Setup* eliges y configuras tú mismo qué
  servicio de IA quieres usar — presets ya preparados para, entre otros, Anthropic, OpenAI, Google
  Gemini, NVIDIA, DeepSeek y OpenRouter, o alternativamente cualquier dirección propia compatible
  con OpenAI (p. ej. un **Ollama** propio alojado en tu red local — en cuyo caso tus datos podrían
  no salir de tu propia red en absoluto). Solo cuando guardas tu propia clave API/endpoint se
  envían el texto del listado, la pista y las fotos que hayas subido exactamente al servicio que
  hayas elegido. Cómo procesa esos datos ese servicio se rige por **su propia** política de
  privacidad — comprueba las condiciones de un proveedor antes de usarlo. Como proveedor de la
  app, no tenemos ninguna influencia sobre ese procesamiento ni recibimos nosotros mismos copia
  alguna de tus peticiones o de tu clave API. (Para ayuda al elegir un proveedor, ver
  [Resolución con IA](funktionen/ki-solver.md).)
- **Peticiones a what3words (opcional)**: si hay una clave what3words guardada, se envían las
  peticiones correspondientes a what3words.
- **Claves API**: se guardan cifradas, vinculadas a tu dispositivo, opcionalmente protegidas
  además con contraseña para una copia de seguridad entre dispositivos (ver
  [Ajustes y copia de seguridad](funktionen/einstellungen-backup.md)). Se usan exclusivamente para
  autenticarte frente al proveedor de IA que configuraste — para nada más.
- **Tu apodo** (para el reconocimiento automático de tus propios hallazgos en los listados) nunca
  sale de tu dispositivo.
- **Home location**: el punto de referencia que introduces en *Setup* (código GC, coordenadas o
  dirección) permanece exclusivamente en tu dispositivo. Se usa para challenges que exigen una
  distancia mínima respecto a tu domicilio (p. ej. un challenge "360°" con hallazgos en cada
  dirección cardinal alrededor de tu ubicación).

## Qué no hace GCMystSolver

- Sin publicidad, sin SDK de seguimiento o analítica (p. ej. sin Firebase/Crashlytics) en el
  código.
- Sin compartir tus datos de caches con terceros, aparte de los servicios opcionales que tú mismo
  activaste arriba (obtención de altitud siempre, IA/what3words solo si está configurado).

## Copia de seguridad

Una copia de seguridad que crees solo sale de tu dispositivo si tú mismo la exportas o la
compartes.

## Tus derechos

En la medida en que se procesen datos personales, según el RGPD tienes en particular los
siguientes derechos frente al responsable del tratamiento: acceso (art. 15), rectificación
(art. 16), supresión (art. 17), limitación del tratamiento (art. 18), portabilidad de los datos
(art. 20) y oposición (art. 21). Además, tienes derecho a presentar una reclamación ante una
autoridad de control en materia de protección de datos, en particular en el Estado miembro de tu
residencia habitual.

En la práctica, sin embargo, según el estado actual, casi todo permanece completamente en tus
propias manos, en tu propio dispositivo: tu apodo nunca sale del dispositivo, y tus claves API se
guardan cifradas en el dispositivo y se usan exclusivamente para autenticarte frente al proveedor
de IA que elegiste.

## Contacto para consultas sobre privacidad

Para preguntas relacionadas con la privacidad, puedes contactarnos en
[data_privacy@gcmystsolver.de](mailto:data_privacy@gcmystsolver.de).
