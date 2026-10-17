// components/ui/responsive.js
// Helpers de responsive simples: se evalúan al renderizar cada vista.
// El reflow fino (columnas que se apilan) lo resuelve el propio CSS con
// `flexWrap: 'wrap'` + `flex: '1 1 <ancho>'`, así que estos helpers solo
// deciden detalles de contenido (tamaños de texto, textos compactos, etc.).

export const viewportWidth = () =>
  typeof window !== 'undefined' ? window.innerWidth : 1280;

export const isMobile = () => viewportWidth() < 768;
export const isTablet = () => viewportWidth() < 1024;

/** Escala un tamaño de fuente según el ancho de pantalla. */
export const fluid = (mobile, desktop) => (isMobile() ? mobile : desktop);

/** Ancho máximo cómodo de lectura. */
export const CONTENT_MAX = 1120;

export default { isMobile, isTablet, viewportWidth, fluid, CONTENT_MAX };
