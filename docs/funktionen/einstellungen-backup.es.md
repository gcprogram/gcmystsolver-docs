# Ajustes y copia de seguridad

## Conexión IA

En *Setup* guardas tu propia clave API de un proveedor de IA compatible, además de una lista de
modelos. Esta lista sirve también como orden de reserva automático (ver
[Resolución con IA](ki-solver.md)) — ya no existe un ajuste separado para un "modelo de respaldo".
En **"Test models"** puedes probar cada modelo guardado individualmente.

Para conseguir gratis tu primera clave API, ver la
[recomendación NVIDIA/Google Gemini](ki-solver.md#recomendacion-empezar-gratis-con-nvidia-o-google-gemini).

## what3words

Para el reconocimiento de coordenadas what3words puedes guardar opcionalmente tu propia clave API
de what3words.

## Copia de seguridad y restauración

GCMystSolver puede hacer una copia de seguridad de toda tu base de datos más los ajustes. Hay dos
niveles de protección a la vez:

- **Copia de seguridad vinculada al dispositivo**: automática, sin contraseña — funciona de forma
  fiable siempre que restaures en **el mismo dispositivo** (el caso más habitual, p. ej. tras una
  reinstalación).
- **Copia de seguridad protegida con contraseña** *(opcional)*: necesaria si quieres restaurar una
  copia de seguridad en **otro** dispositivo — solo así se pueden llevar las claves API entre
  dispositivos.

Si restauras una copia de seguridad puramente vinculada al dispositivo en un dispositivo ajeno, tu
base de datos y todos los ajustes no secretos se restauran igualmente por completo — solo tus
claves API quedan vacías y deben volver a introducirse una vez (la app te lo indica claramente).

## Restablecer soluciones guardadas

**"Clear stored solutions"** elimina específicamente todas las soluciones guardadas de un tipo de
solucionador determinado y recalcula las notas afectadas — útil tras una actualización de la app
que corrigió un solucionador, para que no queden soluciones erróneas obsoletas en tu base de
datos.
