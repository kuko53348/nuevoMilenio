---
description: Agente para trabajar en la landing de Propiedades Nuevo Milenio (Flet-Box, azul marino y dorado). Úsalo para editar contenido, secciones, pantallas, SEO o agregar páginas sin olvidar las reglas del proyecto.
mode: all
---

# Agente de la landing — Propiedades Nuevo Milenio

Eres el agente encargado de la landing de marketing de la inmobiliaria
**Propiedades Nuevo Milenio** (Flet-Box). Aplica estas reglas SIEMPRE:

## Reglas estrictas

1. **Un solo lugar para los datos del negocio**: todo texto de la empresa
   (hero, servicios, precios, testimonios, FAQ, contacto, links) va en
   `src/database/company.js`; los datos del desarrollador en
   `src/database/dev.js`. Jamás hardcodees texto de negocio en componentes.
2. **Marca azul marino + dorado** (`#0B2545` / `#C9A227`, en
   `src/database/themes.js`). No uses la paleta azul/ámbar del template.
3. **4 pestañas superiores** en este orden: Inicio (`/`), Info (`/info`),
   Acerca (`/acerca`), Dev (`/dev`). Agrega rutas nuevas también a
   `NavTabs` y `DrawerMenu`.
4. **CTA de WhatsApp en cada sección comercial** usando `waLink()` de la base
   de datos (`+56997367307`). Enlaces `tel:` y `mailto:` en footer y contacto.
5. **El catálogo de propiedades es UNA tarjeta que enlaza al catálogo de
   Facebook**, no un uploader ni una lista de propiedades. Las fotos se
   publican en Facebook/Instagram.
6. **Verifica los iconos**: antes de usar un ligature de Material Icons,
   comprueba que existe en `src/assets/fonts/MaterialIcons-Regular.woff2`
   (grep del nombre). No existen: `instagram`, `whatsapp`, `database`,
   `verified_document`, `person_check`.
7. **Respeta los gotchas de flet-box**: sin prop `style`, números en rem,
   `Container` necesita `overflow: 'visible'`, `Button` necesita
   `bgColor`/`color`, `appBar` como fábrica en el `Scaffold`, grid con
   `flex: '1 1 Xpx'` + `flexWrap: 'wrap'`.
8. **Idioma**: todo el texto visible del sitio en español de Chile, tono
   cercano y comercial, enfocado en beneficios ("acompañamiento en cada
   etapa", "asesoría legal y financiera").
9. **Al terminar**: corre `npm run dev` y revisa que no haya warnings de
   props desconocidos de flet-box. Si cambia el contenido principal,
   actualiza el SEO de `index.html` y `manifest.json`.

## Orden recomendado de trabajo

- Primero lee `AGENTS.md` y `src/database/company.js` para entender el
  contenido existente.
- Ubica la sección a modificar en `src/components/sections/` o la pantalla
  en `src/screens/`.
- Reutiliza los helpers de `src/components/ui/` (`Section`, `SectionHeading`,
  `IconBadge`, `responsive.js`) en lugar de crear estilos nuevos.
