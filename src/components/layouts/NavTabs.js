// components/layouts/NavTabs.js
// Barra de pestañas superior con las secciones del sitio.
// - variant "inline": fila compacta para la barra superior (escritorio).
// - variant "bar":    fila con fondo propio, scrollable (móvil).
import { Container, Row, Column, Text, Icon, colors, goTo, getCurrentPath } from 'flet-box';
import { brand } from '../../database/themes.js';
import { NAV_ITEMS } from '../../database/company.js';

/** Normaliza la ruta actual para poder marcar la pestaña activa. */
const normalize = (path) => {
  let p = (path || '/').split('?')[0];
  if (p === '' || p === '/home' || p === '/index.html') p = '/';
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p;
};

const isActiveRoute = (itemRoute, current) => {
  const item = normalize(itemRoute);
  if (item === '/') return current === '/';
  return current === item || current.startsWith(`${item}/`);
};

/**
 * @param {Object}   props
 * @param {Array}    [props.items]    Pestañas (label, route, icon).
 * @param {string}   [props.variant]  "inline" | "bar".
 * @param {string}   [props.current]  Ruta actual (por defecto, la del router).
 */
export const NavTabs = ({ items = NAV_ITEMS, variant = 'inline', current = null }) => {
  const currentPath = normalize(current || getCurrentPath());
  const isBar = variant === 'bar';

  const tabs = items.map((item) => {
    const active = isActiveRoute(item.route, currentPath);

    const tab = Container({
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      paddingVertical: isBar ? 8 : 10,
      paddingHorizontal: isBar ? 16 : 14,
      borderRadius: isBar ? 0 : 10,
      cursor: 'pointer',
      flexShrink: 0,
      overflow: 'visible',
      bgColor: active && !isBar ? 'rgba(201, 162, 39, 0.14)' : 'transparent',
      borderBottom: isBar
        ? `3px solid ${active ? brand.gold : 'transparent'}`
        : 'none',
      transition: 'background-color 0.2s ease, color 0.2s ease',
      child: Row({
        width: 'auto',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        children: [
          Icon({
            name: item.icon,
            size: 18,
            color: active ? (isBar ? brand.gold : brand.goldLight) : 'rgba(255,255,255,0.72)',
          }),
          Text({
            text: item.label,
            size: isBar ? 13 : 14,
            weight: active ? '700' : '500',
            color: active ? brand.white : 'rgba(255,255,255,0.78)',
            whiteSpace: 'nowrap',
          }),
        ],
      }),
    });

    tab.onclick = () => {
      if (!active) goTo(item.route);
    };
    tab.onmouseenter = () => {
      if (!active) tab.style.backgroundColor = 'rgba(255,255,255,0.08)';
    };
    tab.onmouseleave = () => {
      if (!active) tab.style.backgroundColor = 'transparent';
    };

    return tab;
  });

  if (!isBar) {
    return Row({
      width: 'auto',
      gap: 4,
      alignItems: 'center',
      justifyContent: 'flex-end',
      overflow: 'visible',
      children: tabs,
    });
  }

  return Container({
    width: '100%',
    flexShrink: 0,
    bgColor: brand.navyDark,
    flexDirection: 'row',
    justifyContent: 'center',
    overflowX: 'auto',
    overflowY: 'hidden',
    paddingHorizontal: 8,
    borderTop: `1px solid rgba(255,255,255,0.08)`,
    child: Row({
      width: 'auto',
      gap: 0,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'visible',
      children: tabs,
    }),
  });
};

export default NavTabs;
