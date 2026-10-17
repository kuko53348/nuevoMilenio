// components/ScreenShell.js
// Estructura común de una pantalla: contenido + pie de página.
import { Column } from 'flet-box';
import { SiteFooter } from './layouts/SiteFooter.js';

export const ScreenShell = ({ children = [] }) =>
  Column({
    width: '100%',
    gap: 0,
    overflow: 'visible',
    children: [...children, SiteFooter()],
  });

export default ScreenShell;
