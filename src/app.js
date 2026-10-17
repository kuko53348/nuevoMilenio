// ═══════════════════════════════════════════════════════════════
//  Propiedades Nuevo Milenio — Landing de la inmobiliaria
//  Router + SEO + tema de marca (azul marino + dorado)
// ═══════════════════════════════════════════════════════════════
import { runApp, Scaffold, subscribe } from 'flet-box';

import { applyBrandTheme } from './database/themes.js';
import { COMPANY } from './database/company.js';

import { AppBarComponent } from './components/layouts/AppBarComponent.js';
import { DrawerMenu } from './components/layouts/DrawerMenu.js';

import InicioScreen from './screens/InicioScreen.js';
import InfoScreen from './screens/InfoScreen.js';
import AcercaScreen from './screens/AcercaScreen.js';
import DevScreen from './screens/DevScreen.js';

// ── Tema de marca (ejecutar antes de construir cualquier widget) ──
applyBrandTheme();

// ── SEO del documento (index.html) ──
if (typeof document !== 'undefined') {
  document.title = COMPANY.seo.title;
  const setMeta = (name, content, attr = 'name') => {
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };
  setMeta('description', COMPANY.seo.description);
  setMeta('og:title', COMPANY.seo.title, 'property');
  setMeta('og:description', COMPANY.seo.description, 'property');
  setMeta('theme-color', '#0B2545');
}

const routes = {
  '/': InicioScreen,
  '/home': InicioScreen, // alias
  '/info': InfoScreen,
  '/acerca': AcercaScreen,
  '/dev': DevScreen,
};

function App() {
  return Scaffold({
    appBar: AppBarComponent, // fábrica: el Scaffold la recrea en cada navegación
    drawer: DrawerMenu,
    routes,
    closeDrawerOnNavigate: true,
  });
}

// Cada cambio de ruta debe abrir la página desde arriba: el cuerpo del
// Scaffold conserva su scrollTop entre vistas si no lo reseteamos aquí.
subscribe(() => {
  requestAnimationFrame(() => {
    document.querySelectorAll('#root *').forEach((el) => {
      if (el.scrollTop > 0) el.scrollTop = 0;
    });
    window.scrollTo(0, 0);
  });
});

runApp(App);
