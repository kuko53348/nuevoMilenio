// ============================================================================
//  database/company.js
//  FUENTE ÚNICA DE VERDAD de Propiedades Nuevo Milenio.
//
//  Todo el contenido que se ve en el sitio (inicio, info, acerca de, dev)
//  sale de este archivo. Editar aquí = editar el sitio completo.
//
//  ⚠️  BUSCA LA PALABRA "EDITAR" para encontrar los datos que debes cambiar
//      por los reales (redes sociales, testimonios, cifras, etc.).
// ============================================================================

// ---------------------------------------------------------------------------
// CONTACTO OFICIAL
// ---------------------------------------------------------------------------
export const CONTACT = {
  person: 'Moises Araya Carmona',
  role: 'Corredor de propiedades y gestor de trámites',
  email: 'propiedadesnuevomilenio@gmail.com',
  phone: '+56997367307',
  phoneDisplay: '+56 9 9736 7307',
  // Número solo dígitos para el enlace de WhatsApp (código país + número).
  whatsapp: '56997367307',
  whatsappDisplay: '+56 9 9736 7307',
  hours: 'Lunes a viernes 9:00 – 19:00 hrs · Sábado 10:00 – 14:00 hrs',
  timezone: 'Chile (GMT-4 / GMT-3 en horario de verano)',
  // Mensaje que llega pre-escrito cuando alguien te escribe por WhatsApp.
  whatsappMessage:
    'Hola Propiedades Nuevo Milenio 👋, vengo del sitio web y necesito asesoría sobre una propiedad.',
};

// ---------------------------------------------------------------------------
// REDES SOCIALES  ⚠️ EDITAR: reemplaza por tus enlaces reales
// ---------------------------------------------------------------------------
export const SOCIAL = {
  facebook: 'https://www.facebook.com/', // ← EDITAR (aquí subes el catálogo de propiedades)
  instagram: 'https://www.instagram.com/', // ← EDITAR
  facebookHandle: 'Propiedades Nuevo Milenio',
  instagramHandle: '@propiedadesnuevomilenio',
};

// ---------------------------------------------------------------------------
// ENLACES LISTOS PARA USAR
// ---------------------------------------------------------------------------
/** Construye un enlace de WhatsApp con mensaje pre-escrito. */
export const waLink = (message = CONTACT.whatsappMessage) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

/** Enlace de correo con asunto y cuerpo pre-escritos. */
export const mailLink = (
  subject = 'Consulta desde el sitio web',
  body = 'Hola, quiero información sobre:',
) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const telLink = `tel:${CONTACT.phone}`;

export const LINKS = {
  whatsapp: waLink(),
  email: mailLink(),
  phone: telLink,
  facebook: SOCIAL.facebook,
  instagram: SOCIAL.instagram,
};

// ---------------------------------------------------------------------------
// IDENTIDAD DE LA EMPRESA
// ---------------------------------------------------------------------------
export const COMPANY = {
  name: 'Propiedades Nuevo Milenio',
  shortName: 'Nuevo Milenio',
  monogram: 'NM',
  tagline: 'Más de 25 años gestionando tu patrimonio',
  claim: 'Vendemos, arrendamos y ordenamos tu documentación sin que tengas que preocuparte por nada.',

  // --- Hero (portada del inicio) ---
  hero: {
    eyebrow: 'Servicios inmobiliarios con experiencia real',
    title: 'Tu próxima propiedad, con quien lleva más de 25 años en esto',
    highlight: 'No estás solo en el trámite',
    subtitle:
      'En Propiedades Nuevo Milenio nos encargamos de todo: la venta, el arriendo, los papeles, las notarías y el conservador. Tú solo firmas y recibes.',
    chips: [
      '+25 años de experiencia',
      'Atención directa con el gestor',
      'Trámites completos, de inicio a fin',
      'Clientes y familias en todo Chile',
    ],
    primaryCta: 'Hablar por WhatsApp',
    secondaryCta: 'Ver servicios',
  },

  // --- Quiénes somos ---
  about: {
    intro:
      'Somos una empresa familiar chilena dedicada a la intermediación de propiedades y a la gestión total de trámites inmobiliarios.',
    story:
      'Nacimos hace más de 25 años ayudando a familias a comprar, vender y arrendar con tranquilidad. En ese tiempo aprendimos algo simple: el negocio inmobiliario no se cae por la propiedad, se cae por los papeles. Por eso nos especializamos en el acompañamiento completo: revisamos, ordenamos y tramitamos todo lo que la operación necesita, para que el cliente nunca tenga que perseguir documentos ni notarías.',
    mission:
      'Que cada persona venda, compre o arriende con la seguridad de que todos los papeles están correctos y en el plazo prometido.',
    vision:
      'Ser la inmobiliaria de confianza de las familias chilenas: pocas propiedades, bien atendidas y con una gestión impecable.',
    values: [
      {
        icon: 'handshake',
        title: 'Trato directo y humano',
        text: 'Hablas siempre con la misma persona: quien gestiona tu operación te conoce por nombre.',
      },
      {
        icon: 'verified',
        title: 'Cero letra chica',
        text: 'Te explicamos cada documento en palabras simples, antes de que firmes.',
      },
      {
        icon: 'schedule',
        title: 'Plazos que se cumplen',
        text: 'Entregamos un calendario de gestión y te avisamos en cada avance.',
      },
      {
        icon: 'shield',
        title: 'Respaldo y experiencia',
        text: 'Más de dos décadas de operaciones cerradas y clientes que vuelven.',
      },
    ],
  },

  // --- Cifras / confianza (datos de referencia, ajusta a tu realidad) ---
  stats: [
    { value: '+25', label: 'Años de experiencia', icon: 'workspace_premium', detail: 'En el mercado inmobiliario chileno' },
    { value: '+1.500', label: 'Trámites gestionados', icon: 'fact_check', detail: 'Escrituras, notarías y conservador' },
    { value: '+600', label: 'Familias acompañadas', icon: 'family_restroom', detail: 'Ventas y arriendos cerrados' },
    { value: '100%', label: 'Gestión completa', icon: 'support_agent', detail: 'Nosotros nos encargamos de todo' },
  ],

  // --- Servicios principales ---
  services: [
    {
      id: 'ventas',
      icon: 'sell',
      title: 'Venta de propiedades',
      short: 'Casas, departamentos, terrenos y locales publicados con precio real de mercado.',
      bullets: [
        'Tasación referencial y sugerencia de precio',
        'Publicación en nuestras redes y red de contactos',
        'Filtro de interesados y visitas coordinadas',
        'Negociación y redacción de promesa',
      ],
      badge: 'Servicio destacado',
    },
    {
      id: 'rentas',
      icon: 'key',
      title: 'Arriendos y rentas',
      short: 'Arrendamos tu propiedad y seleccionamos arrendatarios con respaldo.',
      bullets: [
        'Estudio comercial del arrendatario',
        'Contrato de arriendo y firma ante notario',
        'Entrega con inventario y acta fotográfica',
        'Renovaciones y reajustes en fecha',
      ],
      badge: null,
    },
    {
      id: 'tramites',
      icon: 'description',
      title: 'Trámites y documentación',
      short: 'El corazón de la empresa: obtenemos y ordenamos todos los documentos de la operación.',
      bullets: [
        'Certificados de dominio, hipotecas y gravámenes',
        'Copia de inscripción en el Conservador de Bienes Raíces',
        'Informe de deuda y certificados municipales',
        'Escritura, firma y archivo del expediente',
      ],
      badge: 'Nuestra especialidad',
    },
    {
      id: 'credito',
      icon: 'request_quote',
      title: 'Asesoría de crédito hipotecario',
      short: 'Preparamos tu carpeta y te acompañamos en la evaluación bancaria.',
      bullets: [
        'Revisión de tu situación financiera',
        'Orden de la carpeta de antecedentes',
        'Comparación de condiciones entre bancos',
        'Seguimiento hasta la inscripción',
      ],
      badge: null,
    },
    {
      id: 'avaluos',
      icon: 'calculate',
      title: 'Tasaciones y avalúos',
      short: 'Sabemos cuánto vale realmente tu propiedad antes de ponerla en venta.',
      bullets: [
        'Análisis comparativo de mercado',
        'Informe de valor referencial',
        'Recomendación de mejoras que suben el precio',
        'Coordinación de tasaciones bancarias',
      ],
      badge: null,
    },
    {
      id: 'administracion',
      icon: 'apartment',
      title: 'Administración de propiedades',
      short: 'Cuidamos tu inversión mientras tú te dedicas a otra cosa.',
      bullets: [
        'Cobro de rentas y control de pagos',
        'Coordinación de reparaciones y mantenciones',
        'Rendición mensual clara',
        'Cierre de arriendo y restitución',
      ],
      badge: null,
    },
  ],

  // --- Cómo trabajamos (pasos) ---
  process: [
    {
      step: '01',
      icon: 'chat',
      title: 'Conversamos',
      text: 'Nos cuentas qué necesitas por WhatsApp, correo o teléfono. Sin costo y sin compromiso.',
    },
    {
      step: '02',
      icon: 'search',
      title: 'Evaluamos',
      text: 'Revisamos la propiedad y los documentos, y te damos un valor y un plazo realistas.',
    },
    {
      step: '03',
      icon: 'task_alt',
      title: 'Gestionamos',
      text: 'Nos hacemos cargo de certificados, notaría, conservador y todo lo que la operación requiera.',
    },
    {
      step: '04',
      icon: 'celebration',
      title: 'Cerramos',
      text: 'Firmas tranquilo, te entregamos tu carpeta completa y quedamos disponibles para lo que venga.',
    },
  ],

  // --- Perfil del vendedor / gestor (usado en "Acerca de") ---
  profile: {
    headline:
      'Más de dos décadas en el rubro inmobiliario, del lado de la operación y del lado del cliente.',
    bio: 'Moises Araya Carmona lleva más de 25 años en el mundo de las propiedades: ventas, arriendos, sucesiones y, sobre todo, trámites. Empezó resolviendo casos familiares y de ahí nació Propiedades Nuevo Milenio, una manera de atender de forma personal, con plazos claros y con todo el expediente ordenado. Hoy atiende personalmente a cada cliente: no hay call center, no hay intermediarios y no hay "te devuelvo la llamada".',
    specialties: [
      'Venta de casas, departamentos, terrenos y locales',
      'Arriendos con contrato y respaldo del arrendatario',
      'Trámites ante notaría, conservador de bienes raíces y municipios',
      'Orden de expedientes, sucesiones y documentos perdidos',
      'Asesoría de crédito hipotecario y bancario',
    ],
    timeline: [
      {
        period: 'Inicio',
        title: 'Primeras operaciones',
        text: 'Comienza gestionando ventas y arriendos para familias y conocidos, resolviendo cada trámite de principio a fin.',
      },
      {
        period: 'Años de oficio',
        title: 'Especialización en documentación',
        text: 'Suma certificados, escrituras, notarías y conservador a su rutina: ahí descubre que el papeleo es lo que frena a la mayoría.',
      },
      {
        period: 'Hoy',
        title: 'Propiedades Nuevo Milenio',
        text: 'Formaliza la empresa para ofrecer un servicio completo: intermediación inmobiliaria más gestión total de trámites.',
      },
      {
        period: 'Presente',
        title: 'Atención directa y digital',
        text: 'Publica el catálogo en redes sociales y atiende por WhatsApp, para que el cliente pueda consultar y agendar desde el celular.',
      },
    ],
    promise:
      'Mi compromiso es simple: si acepto tu operación, la gestiono de principio a fin y te informo en cada paso. Nunca vas a quedar esperando un papel.',
  },

  // --- ¿Por qué elegirnos? ---
  differentiators: [
    {
      icon: 'handshake',
      title: 'Un solo interlocutor',
      text: 'No te pasan de oficina en oficina: tu gestor es siempre la misma persona y responde directo.',
    },
    {
      icon: 'folder_shared',
      title: 'Carpeta completa',
      text: 'Los documentos llegan ordenados y digitalizados, listos para el banco, la notaría o el tribunal.',
    },
    {
      icon: 'trending_up',
      title: 'Precio bien puesto',
      text: 'Publicar al valor correcto es lo que hace que una propiedad se venda rápido y sin regalarla.',
    },
    {
      icon: 'lock',
      title: 'Confidencialidad',
      text: 'Manejamos datos sensibles, y lo hacemos con reserva, formalidad y respeto por tu privacidad.',
    },
  ],

  // --- Cómo trabajamos contigo (página Info) ---
  workingWithUs: {
    eyebrow: 'Forma de trabajo',
    title: 'Atención personal, cobertura nacional y papeles en regla',
    subtitle:
      'No importa si estás en Santiago, en el sur o en el extranjero: la gestión se coordina por WhatsApp, correo y notarías locales.',
    items: [
      {
        icon: 'person',
        title: 'Atención 1 a 1',
        text: 'Hablas siempre con quien gestiona tu operación. Sin centros de atención ni cadenas de mensajes perdidos.',
      },
      {
        icon: 'place',
        title: 'Presencial y online',
        text: 'Reuniones presenciales en Santiago y operación remota para el resto del país, con digitalización de documentos.',
      },
      {
        icon: 'payments',
        title: 'Sin sorpresas',
        text: 'Te informamos el costo de cada trámite y la comisión antes de empezar. Si no estás de acuerdo, no avanzamos.',
      },
      {
        icon: 'folder_shared',
        title: 'Entrega ordenada',
        text: 'Recibes tu expediente completo en físico y en digital: certificados, contratos, escrituras e inscripciones.',
      },
      {
        icon: 'lock',
        title: 'Confidencialidad',
        text: 'Tus antecedentes financieros y familiares se manejan con reserva y se usan solo para tu operación.',
      },
      {
        icon: 'support_agent',
        title: 'Seguimiento post venta',
        text: 'Después de la firma seguimos disponibles para renovaciones, sucesiones, impuestos y lo que surja.',
      },
    ],
    note:
      '¿Tienes una situación especial (sucesión, hipoteca, documentos extraviados, copropiedad)? Es lo nuestro: escríbenos y evaluamos el caso sin costo.',
  },

  // --- Catálogo / redes (la galería vive en Facebook) ---
  catalog: {
    eyebrow: 'Nuestro catálogo',
    title: 'Propiedades en venta, arriendo y terrenos',
    description:
      'Publicamos cada propiedad con fotos, precio, metros, comuna y documentos al día en nuestras redes sociales. El catálogo se actualiza constantemente, así que síguenos para ver lo último que entró.',
    categories: ['Casas', 'Departamentos', 'Terrenos', 'Parcelas', 'Locales y oficinas'],
    facebookCta: 'Ver catálogo en Facebook',
    instagramCta: 'Seguir en Instagram',
    // Nota visible bajo los botones (déjala si el catálogo aún no está publicado).
    note:
      'Estamos cargando el catálogo completo. Escríbenos por WhatsApp y te enviamos las propiedades disponibles hoy, con fotos y precios.',
    steps: [
      'Entra a nuestro Facebook o Instagram',
      'Elige la propiedad que te interesa',
      'Escríbenos con el nombre de la publicación',
      'Coordinamos la visita y la visita técnica',
    ],
  },

  // --- Testimonios (⚠️ EDITAR: reemplaza por clientes reales) ---
  testimonials: [
    {
      quote:
        'Compramos nuestra primera casa con don Moises. Nos explicó cada papel y él hizo todos los trámites del banco y la notaría. Cero estrés.',
      name: 'Carolina M.',
      role: 'Compra de casa · 2023',
      rating: 5,
      tag: 'Venta',
    },
    {
      quote:
        'Arrendó mi departamento en menos de dos semanas, con contrato firmado ante notario y un arrendatario impecable. Ya llevo tres años con él.',
      name: 'Rodrigo P.',
      role: 'Propietario · Arriendo',
      rating: 5,
      tag: 'Arriendo',
    },
    {
      quote:
        'Llegué con una sucesión enredada y escrituras antiguas. Lo ordenó todo y pude vender el terreno. Se nota la experiencia.',
      name: 'Ana María S.',
      role: 'Venta de terreno · 2024',
      rating: 5,
      tag: 'Trámites',
    },
  ],

  // --- Preguntas frecuentes ---
  faq: [
    {
      q: '¿Cuánto cobran por vender o arrendar mi propiedad?',
      a: 'Trabajamos con una comisión de corretaje estándar de mercado, que se descuenta al cerrar la operación. En trámites puntuales (certificados, escrituras, orden de carpeta) te entregamos un valor fijo por escrito antes de comenzar. Nunca hay costos sorpresa.',
    },
    {
      q: '¿Qué significa que ustedes hacen "todo el trámite"?',
      a: 'Significa que pedimos y pagamos en tu nombre lo necesario: certificados del Conservador de Bienes Raíces, informes de deuda, certificados municipales, redacción de promesa, coordinación de notaría, escritura y su inscripción. Tú recibes tu carpeta completa y firmas donde corresponde.',
    },
    {
      q: '¿Atienden fuera de Santiago?',
      a: 'Sí. Trabajamos de forma presencial y remota con clientes de distintas regiones de Chile, coordinando notarías y conservadores locales. Escríbenos y te confirmamos la factibilidad para tu comuna.',
    },
    {
      q: '¿Me pueden ayudar si mi propiedad tiene hipoteca o deuda?',
      a: 'Sí, es un caso muy habitual. Revisamos el saldo, gestionamos el alzamiento de la hipoteca y coordinamos con el banco para que la venta se cierre sin problemas.',
    },
    {
      q: '¿Cuánto demora una venta?',
      a: 'Depende del precio, la comuna y los documentos. Si la propiedad está bien valorada y la documentación al día, hay ventas que se cierran en 30 días; con sucesiones o hipotecas puede tomar más. Te damos un plazo estimado desde la primera reunión.',
    },
    {
      q: '¿Cómo empiezo?',
      a: 'Escríbenos por WhatsApp o correo, cuéntanos qué necesitas y te agendamos una conversación. La primera evaluación no tiene costo.',
    },
  ],

  // --- Formulario de contacto ---
  contact: {
    eyebrow: 'Contáctanos',
    title: 'Conversemos tu operación',
    subtitle:
      'Cuéntanos qué necesitas y te respondemos con un plan concreto. La primera asesoría no tiene costo.',
    subjects: [
      'Quiero vender mi propiedad',
      'Quiero arrendar mi propiedad',
      'Busco una propiedad para comprar',
      'Busco una propiedad para arrendar',
      'Necesito trámites y documentación',
      'Asesoría de crédito hipotecario',
      'Administración de propiedades',
      'Otra consulta',
    ],
    formNote:
      'Al enviar, se abrirá WhatsApp con tu mensaje listo para enviar. Así la respuesta es inmediata.',
  },

  // --- SEO / metadatos ---
  seo: {
    title: 'Propiedades Nuevo Milenio | Venta, arriendos y trámites con +25 años',
    description:
      'Propiedades Nuevo Milenio: más de 25 años en venta, arriendo y gestión completa de trámites inmobiliarios en Chile. Casas, departamentos, terrenos y documentación al día. Atención directa con Moises Araya Carmona.',
    keywords:
      'inmobiliaria Chile, venta de propiedades, arriendo de casas, terrenos en venta, trámites inmobiliarios, conservador de bienes raíces, asesoría hipotecaria',
    themeColor: '#0B2545',
  },
};

// ---------------------------------------------------------------------------
// DATOS DERIVADOS (no necesitas editarlos)
// ---------------------------------------------------------------------------
export const YEARS_EXPERIENCE = 25;

// Alias corto para escribir menos en los componentes.
export const NAV_ITEMS = [
  { label: 'Inicio', route: '/', icon: 'home' },
  { label: 'Info', route: '/info', icon: 'info' },
  { label: 'Acerca de', route: '/acerca', icon: 'person' },
  { label: 'Dev', route: '/dev', icon: 'code' },
];

export default COMPANY;
