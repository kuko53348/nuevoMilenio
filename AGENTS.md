# Reglas del proyecto — Landing Propiedades Nuevo Milenio

Este es un sitio de marketing (NO una plataforma) para la inmobiliaria
**Propiedades Nuevo Milenio**. Cumple estas reglas en cada cambio, sin excepción.

## 1. Todo el contenido del negocio vive en la base de datos

- Textos, servicios, precios, testimonios, FAQ, links, teléfono y correo:
  **solo** en `src/database/company.js`.
- Datos del desarrollador: **solo** en `src/database/dev.js`.
- **Prohibido** hardcodear texto de negocio dentro de componentes o pantallas.
  Si falta contenido, se agrega a la base de datos y se importa.
- Los placeholders pendientes están marcados con `// EDITAR:` en el código y en
  la base de datos. No los inventes ni los borres sin reemplazarlos con datos
  reales del usuario.

## 2. Paleta de marca: azul marino + dorado

- Azul marino `#0B2545` (primario), dorado `#C9A227` (acento).
- Definidas en `src/database/themes.js` y aplicadas con `applyBrandTheme()`.
- No usar otros colores de marca (el template usaba `#1E3A8A`/`#F59E0B`;
  ya fueron reemplazados).

## 3. Estructura de la landing

- Barra de pestañas superior (desktop) + menú de botón (móvil), con marca a la
  izquierda y WhatsApp a la derecha (`AppBarComponent` + `NavTabs` + `DrawerMenu`).
- 4 rutas en `src/app.js`: `/` (Inicio), `/info`, `/acerca`, `/dev`.
- Pantallas en `src/screens/`; secciones en `src/components/sections/`;
  layouts en `src/components/layouts/`.
- CTA de WhatsApp directo en el hero, el catálogo, el contacto y el footer.
- El formulario de contacto arma un mensaje y abre `wa.me/56997367307`.

## 4. Catálogo de propiedades

- NO es una plataforma de subida de archivos: es **una sola tarjeta** que
  enlaza al catálogo de Facebook (link en `COMPANY.catalog.facebookUrl`).
- Las fotos de propiedades (venta, arriendo, terrenos) se publican en
  Facebook/Instagram, no en la app.

## 5. Antes de terminar cualquier tarea

1. Correr `npm run dev` y revisar la consola: no debe haber warnings de
   flet-box por props desconocidos.
2. Los iconos Material Icons deben existir como ligature en
   `src/assets/fonts/MaterialIcons-Regular.woff2` (verificar con un grep del
   nombre). `instagram`, `whatsapp`, `database`, `verified_document` y
   `person_check` NO existen; usar equivalentes (`photo_camera`, `chat`,
   `storage`, `verified`, `handshake`).
3. Actualizar el SEO de `index.html` / `manifest.json` si cambia el contenido
   principal.

## Gotchas de flet-box (ya descubiertos)

- No existe prop `style`: solo props planas (`bg`, `padding`, `borderRadius`,
  `boxShadow`, …). Un `style:{}` produce warning en consola.
- Los números se convierten a rem (valor / 16).
- `Container` viene con `overflow: 'auto'` por defecto: pasar
  `overflow: 'visible'` cuando se necesite.
- `Row`/`Column` tienen `width: 100%` por defecto.
- `Button` necesita `bgColor` y `color` explícitos.
- La navegación (`goTo`) y el estado global (`state`) se importan desde
  `flet-box`.
- El `appBar` del `Scaffold` debe pasar como **fábrica** (`AppBarComponent`,
  sin ejecutar) para que se recree en cada navegación y resalte la pestaña
  activa.
- Grid responsive: `flex: '1 1 300px'` + `flexWrap: 'wrap'` en un `Row`
  (no existe Grid de flet-box).
