// components/ui/Section.js
// Envoltorio estándar de sección: fondo a todo el ancho + contenido centrado
// con un ancho máximo. Mantiene el sitio ordenado y consistente.
import { Container, Column } from 'flet-box';
import { brand } from '../../database/themes.js';
import { CONTENT_MAX } from './responsive.js';

export const Section = ({
  children = [],
  bgColor = brand.white,
  gradient = null,
  paddingVertical = 64,
  paddingHorizontal = 20,
  maxWidth = CONTENT_MAX,
  gap = 28,
  alignItems = 'center',
  justifyContent = 'flex-start',
  borderTop = null,
  borderBottom = null,
  flex = null,
  id = null,
}) =>
  Container({
    id,
    width: '100%',
    flexShrink: 0,
    flex,
    bgColor,
    gradient,
    flexDirection: 'column',
    alignItems,
    justifyContent,
    overflow: 'visible',
    paddingVertical,
    paddingHorizontal,
    borderTop,
    borderBottom,
    child: Column({
      width: '100%',
      maxWidth,
      gap,
      alignItems,
      overflow: 'visible',
      children,
    }),
  });

export default Section;
