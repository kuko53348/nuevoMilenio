// ============================================================================
//  database/themes.js
//  Identidad visual de Propiedades Nuevo Milenio (azul marino + dorado).
//
//  `brand`  → paleta propia de la marca, para usar directo en los componentes.
//  `applyBrandTheme()` → pinta el objeto global de colores de Flet-Box para que
//  los widgets (AppBar, Card, Button, Tabs…) usen los colores de la marca.
// ============================================================================
import { colors as fxColors } from 'flet-box';

export const brand = {
  navy: '#0B2545', // Azul marino principal
  navyDark: '#071730',
  navyLight: '#16375F',
  navySoft: '#E7EDF5',
  gold: '#C9A227', // Dorado de acento
  goldDark: '#A8871B',
  goldLight: '#E3C766',
  goldSoft: '#FBF4DF',
  cream: '#F7F8FA',
  white: '#FFFFFF',
  ink: '#0B2545',
  inkSoft: '#4A5B75',
  border: '#E2E7EF',
  whatsapp: '#25D366',
  whatsappDark: '#128C7E',
  overlay: 'rgba(7, 23, 48, 0.72)',
  shadow: 'rgba(11, 37, 69, 0.10)',
  shadowStrong: 'rgba(11, 37, 69, 0.18)',
};

export const gradients = {
  hero: `linear-gradient(135deg, ${brand.navyDark} 0%, ${brand.navy} 55%, ${brand.navyLight} 100%)`,
  // Velo azul marino que se superpone al banner del hero para que el texto
  // blanco siga siendo legible sobre la foto. Va de opaco a translúcido en el
  // sentido de lectura: el texto vive a la izquierda (velo cerrado) y la foto
  // respira a la derecha. Con un velo parejo y denso el banner no se veía.
  heroVeil: `linear-gradient(100deg, rgba(7, 23, 48, 0.97) 0%, rgba(11, 37, 69, 0.90) 42%, rgba(11, 37, 69, 0.60) 100%)`,
  // Bandas interiores (Info / Acerca de / Dev): misma técnica, pero la foto
  // solo se insinúa, porque la franja es baja y el texto ocupa casi todo.
  heroVeilSoft: `linear-gradient(100deg, rgba(7, 23, 48, 0.97) 0%, rgba(11, 37, 69, 0.94) 55%, rgba(11, 37, 69, 0.82) 100%)`,
  gold: `linear-gradient(135deg, ${brand.goldDark} 0%, ${brand.gold} 60%, ${brand.goldLight} 100%)`,
  soft: `linear-gradient(180deg, ${brand.white} 0%, ${brand.cream} 100%)`,
};

/**
 * Aplica la paleta de la marca al objeto de colores de Flet-Box.
 * Debe llamarse una sola vez, antes de renderizar la app.
 */
export const applyBrandTheme = () => {
  Object.assign(fxColors, {
    primary: brand.navy,
    secondary: brand.gold,
    background: brand.white,
    surface: brand.cream,
    card: brand.white,
    text: brand.ink,
    textSecondary: brand.inkSoft,
    textDisabled: '#94A3B8',
    border: brand.border,
    divider: brand.border,
    gray50: '#F8FAFC',
    gray100: '#F1F5F9',
    gray200: brand.border,
    gray300: '#CBD5E1',
    gray400: '#94A3B8',
    gray500: '#64748B',
    gray600: '#475569',
    gray700: brand.inkSoft,
    gray800: brand.navyLight,
    gray900: brand.navy,
    overlay: brand.overlay,
    shadow: brand.shadow,
  });
  return fxColors;
};

export const colors = brand;

export default brand;
