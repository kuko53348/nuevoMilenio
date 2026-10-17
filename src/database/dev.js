// ============================================================================
//  database/dev.js
//  Datos de la sección DEV (acerca del desarrollador del sitio).
//
//  ⚠️  Este archivo es 100% editable: busca "EDITAR" y completa tus datos.
//      Mientras no lo hagas, la página muestra los marcadores tal cual.
// ============================================================================

export const DEV = {
  // --- Perfil -------------------------------------------------------------
  name: 'Nombre del desarrollador', // ← EDITAR
  handle: '@tu-usuario', // ← EDITAR
  role: 'Desarrollo web, PWA y apps móviles', // ← EDITAR
  initials: 'DV', // ← EDITAR (se muestran si no hay foto)
  location: 'Chile', // ← EDITAR
  bio:
    'Desarrollador independiente enfocado en sitios y aplicaciones ligeras: landing pages, PWAs y apps móviles publicadas desde una misma base de código. Me gusta trabajar sin dependencias innecesarias, con interfaces rápidas y contenido que se edita en un solo archivo.',
  // Si algún día agregas una foto, ponla en src/assets/ y escribe aquí la ruta.
  photo: null, // ← EDITAR, ej: './src/assets/dev-foto.png'

  // --- Enlaces ------------------------------------------------------------
  links: {
    github: 'https://github.com/tu-usuario', // ← EDITAR
    site: 'https://tu-sitio.cl', // ← EDITAR
    email: 'tu-correo@ejemplo.cl', // ← EDITAR
    linkedin: 'https://www.linkedin.com/in/tu-usuario', // ← EDITAR
  },

  // --- Repositorios destacados -------------------------------------------
  repos: [
    {
      name: 'nuevomilenio-landing', // ← EDITAR
      description: 'Sitio web de Propiedades Nuevo Milenio construido con Flet-Box.',
      url: 'https://github.com/tu-usuario/nuevomilenio-landing', // ← EDITAR
      language: 'JavaScript',
      stars: 0,
    },
    {
      name: 'flet-box', // Repositorio del framework (no es tuyo: es la dependencia).
      description: 'Framework UI declarativo en JavaScript vanilla usado en este sitio.',
      url: 'https://github.com/kuko53348/flet-box',
      language: 'JavaScript',
      stars: null,
      external: true,
    },
  ],

  // --- Stack del proyecto -------------------------------------------------
  stack: [
    {
      icon: 'widgets',
      name: 'Flet-Box',
      detail: 'Framework UI declarativo en JavaScript vanilla, sin Virtual DOM.',
    },
    {
      icon: 'code',
      name: 'JavaScript ES Modules',
      detail: 'Sin build step: el navegador carga los módulos directamente.',
    },
    {
      icon: 'phone_iphone',
      name: 'Capacitor',
      detail: 'La misma base de código lista para Android e iOS.',
    },
    {
      icon: 'install_mobile',
      name: 'PWA',
      detail: 'Instalable, con service worker y manifest propio.',
    },
  ],

  // --- Cómo está construido el sitio -------------------------------------
  architecture: [
    {
      icon: 'storage',
      title: 'Contenido centralizado',
      text: 'src/database/company.js guarda el 100% del contenido: contacto, servicios, cifras, FAQ y catálogo.',
    },
    {
      icon: 'view_quilt',
      title: 'Componentes reutilizables',
      text: 'Cada sección del sitio (hero, servicios, trámites, contacto) es un componente independiente.',
    },
    {
      icon: 'alt_route',
      title: 'Navegación por rutas',
      text: 'Cuatro vistas (Inicio, Info, Acerca de, Dev) con historial del navegador y enlaces directos.',
    },
    {
      icon: 'touch_app',
      title: 'Diseño responsive',
      text: 'Una sola maqueta que se adapta a celular, tablet y escritorio.',
    },
  ],

  // --- Notas --------------------------------------------------------------
  credits:
    'Este sitio fue diseñado y desarrollado como pieza de portafolio para un cliente real del rubro inmobiliario.',
  disclaimer:
    'Espacio reservado para el desarrollador: reemplaza los datos de este archivo por los reales.',
};

export default DEV;
