// Contenido extraído del CV (texto + capa de anotaciones URI) y de los flujos n8n exportados.
// Los flujos se describen a nivel funcional: no se publican credenciales, tokens, URLs internas ni correos.

export const profile = {
  name: 'Christian Paul Manco Malasquez',
  short: 'Christian Manco',
  role: 'Analista Funcional & Soporte N3',
  location: 'Lima, Perú',
  email: 'christian.manco3@gmail.com',
  linkedin: 'https://www.linkedin.com/in/christianpmanco/',
  github: 'https://github.com/ZerPm',
  githubUser: 'ZerPm',
  summary:
    'Profesional en Ingeniería de Sistemas orientado al análisis funcional y al diseño de soluciones TI. Traduzco requerimientos de negocio en especificaciones funcionales (DEF, historias de usuario), integro sistemas mediante APIs REST y OCR, y diseño arquitectura escalable sobre AWS y Azure.',
  summary2:
    'Gestiono proyectos y entregables bajo Scrum y Kanban, articulo la comunicación entre stakeholders y equipos de desarrollo, y garantizo la trazabilidad end-to-end: desde el requerimiento hasta el pase a producción y la atención de incidentes de nivel 3. Uso IA y n8n para automatizar operaciones.'
};

export const rotatingRoles = [
  'Analista Funcional',
  'Soporte N3',
  'Automatización con n8n',
  'Integración de APIs',
  'Trazabilidad end-to-end'
];

export const stats = [
  { value: 8, suffix: '', label: 'organizaciones atendidas' },
  { value: 18, suffix: '', label: 'certificaciones' },
  { value: 8, suffix: '', label: 'flujos n8n en producción' },
  { value: 3, suffix: '+', label: 'años en proyectos TI' }
];

export const experience = [
  {
    role: 'Function Analyst',
    company: 'Alicorp',
    via: 'Por SOEN',
    period: 'Agosto 2026 · Actualidad',
    current: true,
    tasks: [
      'Diseño de diagramas de secuencia y flujos de arquitectura funcional.',
      'Especificación técnico-funcional para escenarios de integración.',
      'Control de cambios, trazabilidad de requerimientos y validación de entregables.'
    ]
  },
  {
    role: 'Function Analyst',
    company: 'Artesco',
    via: 'Por SOEN',
    period: 'Agosto 2026 · Actualidad',
    current: true,
    tasks: [
      'Relevamiento y análisis de requerimientos con usuarios de negocio y TI.',
      'Elaboración de DEF, historias de usuario, wireframes y flujos de solución.',
      'Definición de criterios de aceptación, casos de prueba y soporte en despliegue.'
    ]
  },
  {
    role: 'Function Analyst',
    company: 'Primax',
    via: 'Por SOEN',
    period: 'Agosto 2026 · Actualidad',
    current: true,
    tasks: [
      'Modelado funcional de procesos, reglas de negocio e integraciones OCR / WhatsApp.',
      'Documentación técnica y validación de servicios API de integración.',
      'Apoyo operativo en la adopción y monitoreo de herramientas digitales.'
    ]
  },
  {
    role: 'Software Analyst',
    company: 'Prestamype',
    via: '',
    period: 'Diciembre 2025 · Agosto 2026',
    tasks: [
      'Levantamiento de necesidades y diseño de procesos para servicios de crédito y finanzas.',
      'Documentación técnica y funcional, y soporte en pases a producción.',
      'Coordinación técnica con desarrollo para implementar mejoras operativas.'
    ]
  },
  {
    role: 'Software Analyst',
    company: 'Cambio Seguro',
    via: '',
    period: 'Diciembre 2025 · Agosto 2026',
    tasks: [
      'Levantamiento de requerimientos y optimización de flujos transaccionales de divisas.',
      'Elaboración de historias de usuario, criterios de aceptación y especificaciones.',
      'Coordinación continua con equipos de desarrollo y aseguramiento de calidad (QA).'
    ]
  },
  {
    role: 'Fullstack Java & APX',
    company: 'BBVA',
    via: 'Por Stefanini',
    period: 'Junio 2025 · Noviembre 2025',
    tasks: [
      'Relevamiento de requerimientos y diseño de soluciones para banca digital.',
      'Elaboración de especificaciones funcionales e interfaces de integración.',
      'Soporte en pruebas funcionales, pruebas de usuario (UAT) y atención de incidentes.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'TRManagement SAC',
    via: '',
    period: 'Marzo 2024 · Abril 2025',
    tasks: [
      'Mapeo, rediseño y documentación de procesos internos y flujos de trabajo.',
      'Elaboración de requerimientos funcionales para sistemas de gestión interna.',
      'Diseño y ejecución de casos de prueba funcional para control de calidad (QA).'
    ]
  },
  {
    role: 'Fullstack Jr',
    company: 'IDELCOM',
    via: '',
    period: 'Octubre 2023 · Marzo 2024',
    tasks: [
      'Análisis y optimización de procesos de atención al cliente y telecomunicaciones.',
      'Definición de requerimientos, matrices de pruebas y seguimiento de entregables.',
      'Coordinación directa entre áreas operativas y proveedores tecnológicos.'
    ]
  }
];

export const skills = [
  {
    icon: 'file-text',
    title: 'Análisis funcional',
    items: ['DEF / especificaciones', 'Historias de usuario', 'Criterios de aceptación', 'Wireframes', 'Diagramas de secuencia', 'Modelado de procesos', 'Reglas de negocio']
  },
  {
    icon: 'life-buoy',
    title: 'Soporte N3 & QA',
    items: ['Pases a producción', 'Atención de incidentes', 'Pruebas funcionales', 'UAT', 'Casos y matrices de prueba', 'Control de cambios', 'Trazabilidad end-to-end']
  },
  {
    icon: 'network',
    title: 'Integración',
    items: ['APIs REST', 'Webhooks', 'OAuth 2.0 / SSO', 'OCR', 'WhatsApp', 'Jira & Confluence API', 'Google Workspace API']
  },
  {
    icon: 'cloud',
    title: 'Cloud & datos',
    items: ['AWS', 'Azure', 'Supabase (PostgreSQL)', 'SQL', 'Ingeniería de datos', 'Políticas de retención']
  },
  {
    icon: 'bot',
    title: 'IA & automatización',
    items: ['n8n', 'Google Gemini', 'Prompt engineering', 'Extracción estructurada (JSON)', 'Desarrollo asistido por IA', 'JavaScript']
  },
  {
    icon: 'layers',
    title: 'Agilidad & desarrollo',
    items: ['Scrum (PSM I)', 'Kanban', 'Jira', 'Java', '.NET', 'Full-Stack (Front / Back)']
  }
];

// node kinds -> icono y color en la UI
export const nodeKinds = {
  schedule: { icon: 'calendar-clock', label: 'Programado', tone: 'trigger' },
  webhook: { icon: 'webhook', label: 'Webhook', tone: 'trigger' },
  drive: { icon: 'hard-drive', label: 'Google Drive', tone: 'io' },
  docs: { icon: 'file-text', label: 'Google Docs', tone: 'io' },
  rss: { icon: 'rss', label: 'RSS', tone: 'io' },
  merge: { icon: 'merge', label: 'Merge', tone: 'logic' },
  filter: { icon: 'filter', label: 'Filtro', tone: 'logic' },
  branch: { icon: 'split', label: 'Condición', tone: 'logic' },
  code: { icon: 'code-xml', label: 'Código JS', tone: 'logic' },
  ai: { icon: 'sparkles', label: 'Gemini 2.5 Flash', tone: 'ai' },
  db: { icon: 'database', label: 'Supabase', tone: 'data' },
  http: { icon: 'globe', label: 'HTTP Request', tone: 'io' },
  auth: { icon: 'shield-check', label: 'OAuth 2.0', tone: 'auth' },
  jira: { icon: 'ticket', label: 'Jira', tone: 'io' },
  confluence: { icon: 'book-open', label: 'Confluence', tone: 'io' },
  mail: { icon: 'mail', label: 'Gmail', tone: 'out' },
  chat: { icon: 'message-square', label: 'Google Chat', tone: 'out' },
  form: { icon: 'list-checks', label: 'Tally', tone: 'io' },
  respond: { icon: 'send', label: 'Respuesta HTTP', tone: 'out' }
};

export const flows = [
  {
    id: 'reporte-produccion',
    icon: 'rocket',
    title: 'Reporte diario de pases a producción',
    category: 'Soporte N3',
    trigger: { kind: 'schedule', text: 'Todos los días · 09:00' },
    value:
      'Elimina el reporte manual de despliegues: cada mañana notifica por proyecto qué tickets pasaron a producción, detecta el cierre del sprint y sella los tickets en Jira para no notificarlos dos veces.',
    impact: ['Release notes automáticos', 'Visibilidad cross-company', 'Cero duplicados'],
    nodes: [
      { kind: 'schedule', name: 'Reloj trigger', desc: 'Inicia el pipeline a hora fija para entregar el reporte puntualmente.' },
      { kind: 'jira', name: 'Trae tickets', desc: 'Consulta JQL de tickets en estado LISTO dentro de sprints abiertos que aún no tienen la etiqueta de enviado.' },
      { kind: 'code', name: 'Divide proyectos', desc: 'Agrupa los tickets por prefijo de proyecto para procesarlos en lotes independientes.' },
      { kind: 'db', name: 'Trae destinatarios', desc: 'Recupera la lista de distribución autorizada para cada proyecto.' },
      { kind: 'code', name: 'Encadena datos', desc: 'Cruza proyectos, tickets y destinatarios en un paquete por proyecto.' },
      { kind: 'jira', name: 'Radar de cierre', desc: 'Verifica si quedan tickets pendientes para anunciar el fin del sprint.' },
      { kind: 'code', name: 'Arma correo', desc: 'Renderiza un HTML con colores por marca, tabla de tickets y vínculos de negocio (P2P).' },
      { kind: 'mail', name: 'Envía correo', desc: 'Despacha el reporte a cada lista de distribución.' },
      { kind: 'code', name: 'Prepara etiquetas', desc: 'Construye el payload de etiquetas para cada ticket notificado.' },
      { kind: 'jira', name: 'Sella etiquetas', desc: 'Write-back en Jira: marca los tickets como notificados para garantizar idempotencia.' }
    ]
  },
  {
    id: 'dailys',
    icon: 'scan-text',
    title: 'Transcripción inteligente de dailys',
    category: 'IA aplicada',
    trigger: { kind: 'schedule', text: 'Todos los días · 11:30' },
    value:
      'Convierte la transcripción de cada daily en datos estructurados por persona (qué hizo, qué hará, bloqueantes y tickets Jira). Los bloqueantes se separan en una tabla propia para que los líderes los vean de inmediato.',
    impact: ['Bloqueantes visibles al instante', 'Historial consultable', 'Autolimpieza 14 / 28 días'],
    nodes: [
      { kind: 'schedule', name: 'Daily trigger', desc: 'Ejecución diaria automática después de las reuniones.' },
      { kind: 'drive', name: 'Buscar dailys', desc: 'Busca en Drive los documentos de transcripción del día.' },
      { kind: 'filter', name: 'Filtro por fecha', desc: 'Conserva solo los archivos de la fecha actual (zona horaria Lima).' },
      { kind: 'docs', name: 'Leer contenido', desc: 'Recupera el cuerpo completo del documento.' },
      { kind: 'code', name: 'Juntar texto', desc: 'Consolida los fragmentos en un solo bloque para optimizar tokens.' },
      { kind: 'ai', name: 'Análisis semántico', desc: 'Extrae por desarrollador: avances, plan, bloqueantes y URLs de tickets, con reglas para distinguir identidades.' },
      { kind: 'code', name: 'JSON a filas', desc: 'Normaliza la respuesta del modelo a columnas de base de datos.' },
      { kind: 'branch', name: '¿Tiene bloqueante?', desc: 'Si el analista reportó un bloqueo, activa la rama de alerta.' },
      { kind: 'db', name: 'Registro general y de bloqueantes', desc: 'Inserta el 100 % en la tabla maestra y los bloqueos en la tabla de stoppers.' },
      { kind: 'http', name: 'Retención automática', desc: 'DELETE programado: 14 días para el histórico y 28 días para bloqueantes.' }
    ]
  },
  {
    id: 'capacitaciones',
    icon: 'book-open',
    title: 'Documentación automática de capacitaciones',
    category: 'IA aplicada',
    trigger: { kind: 'drive', text: 'Nueva transcripción en Drive' },
    value:
      'Cada capacitación grabada en Meet se convierte en una página de documentación técnica en Confluence: objetivo, conceptos, endpoints, acuerdos y dudas abiertas, sin que nadie tenga que redactarla.',
    impact: ['Base de conocimiento viva', 'Horas de redacción ahorradas', 'Formato estándar'],
    nodes: [
      { kind: 'drive', name: 'Drive trigger', desc: 'Escucha la carpeta de grabaciones y dispara al crearse un archivo.' },
      { kind: 'branch', name: 'Filtro inteligente', desc: 'Acepta solo documentos cuyo nombre empieza con [CAP]; descarta videos.' },
      { kind: 'drive', name: 'Descarga', desc: 'Obtiene el documento original de la transcripción.' },
      { kind: 'code', name: 'Extrae texto', desc: 'Convierte el binario en texto legible para la IA.' },
      { kind: 'ai', name: 'Documentador técnico', desc: 'Genera documentación HTML estructurada con tablas de definiciones y próximos pasos.' },
      { kind: 'confluence', name: 'Publica en Confluence', desc: 'Crea la página como borrador en el espacio de documentación vía API REST.' }
    ]
  },
  {
    id: 'recien-documentado',
    icon: 'megaphone',
    title: 'Aviso de “recién documentado”',
    category: 'Comunicación',
    trigger: { kind: 'webhook', text: 'Página publicada en Confluence' },
    value:
      'Cierra el ciclo de la documentación: cuando una página se publica en la carpeta de arquitectura, la comunidad recibe al instante una tarjeta en Google Chat con título, resumen y enlace.',
    impact: ['Difusión en tiempo real', 'Más lectura de la documentación', 'Sin mensajes manuales'],
    nodes: [
      { kind: 'webhook', name: 'Webhook de Confluence', desc: 'Recibe el evento de publicación con el identificador de la página.' },
      { kind: 'confluence', name: 'Obtiene la página', desc: 'Lee contenido, ancestros e historial de la página.' },
      { kind: 'code', name: 'Filtra y resume', desc: 'Verifica que pertenezca a la carpeta objetivo y genera un resumen de 280 caracteres.' },
      { kind: 'chat', name: 'Publica tarjeta', desc: 'Envía una card v2 a Google Chat con botón para abrir el documento.' }
    ]
  },
  {
    id: 'tendencias',
    icon: 'radar',
    title: 'Radar semanal de tendencias tech',
    category: 'IA aplicada',
    trigger: { kind: 'schedule', text: 'Cada lunes · 09:00' },
    value:
      'Curaduría automática de noticias de IA, cloud y desarrollo: la IA selecciona las 3 o 4 más relevantes para un equipo fintech y explica por qué importan, publicadas en el espacio del equipo.',
    impact: ['Actualización continua del equipo', 'Filtro de ruido con IA', 'Cero esfuerzo manual'],
    nodes: [
      { kind: 'schedule', name: 'Cada lunes', desc: 'Disparo semanal al inicio de la jornada.' },
      { kind: 'rss', name: 'Fuentes RSS', desc: 'Lee los feeds de Google AI, AWS News y GitHub Blog.' },
      { kind: 'merge', name: 'Juntar fuentes', desc: 'Unifica los artículos en un solo flujo.' },
      { kind: 'code', name: 'Últimos 7 días', desc: 'Filtra por fecha, deduplica por enlace, toma 2 por fuente y arma el prompt.' },
      { kind: 'ai', name: 'Curador IA', desc: 'Elige las noticias con valor práctico y responde en JSON estricto.' },
      { kind: 'code', name: 'Armar tarjeta', desc: 'Construye la card con título, motivo y botón “Leer más”.' },
      { kind: 'chat', name: 'Postear en Chat', desc: 'Publica el radar en Google Chat.' }
    ]
  },
  {
    id: 'sprints',
    icon: 'zap',
    title: 'Anunciador de inicio de sprint',
    category: 'Comunicación',
    trigger: { kind: 'webhook', text: 'Evento de sprint iniciado en Jira' },
    value:
      'Al iniciar un sprint, los stakeholders reciben un correo oficial con fechas, tickets planificados, estados y vínculos a tickets de negocio, con la identidad visual de cada marca.',
    impact: ['Comunicación en segundos', 'Branding por marca', 'Destinatarios centralizados'],
    nodes: [
      { kind: 'webhook', name: 'Webhook de Jira', desc: 'Recibe el evento de inicio de sprint (event-driven).' },
      { kind: 'jira', name: 'Trae tickets', desc: 'Extrae historias y bugs planificados con JQL por sprint.' },
      { kind: 'code', name: 'Limpia datos', desc: 'Aísla ticket, requerimiento, estado y tipo.' },
      { kind: 'code', name: 'Extrae proyecto', desc: 'Mapea prefijos a proyectos, define colores, firma y estados estandarizados.' },
      { kind: 'db', name: 'Busca correos', desc: 'Obtiene la lista de distribución del tablero.' },
      { kind: 'code', name: 'Arma lista', desc: 'Consolida los destinatarios.' },
      { kind: 'mail', name: 'Envía correo', desc: 'Despacha el anuncio HTML vía Gmail.' }
    ]
  },
  {
    id: 'suscripciones',
    icon: 'bell',
    title: 'Portal de autoservicio de notificaciones',
    category: 'Seguridad',
    trigger: { kind: 'webhook', text: 'Clic desde el correo de sprint' },
    value:
      'Los usuarios gestionan por sí mismos su suscripción a los correos de sprint y producción. Un SSO con Google valida el dominio corporativo antes de permitir cambios, que se aplican sin duplicados.',
    impact: ['Autoatención sin tickets a TI', 'SSO corporativo', 'Datos consistentes'],
    nodes: [
      { kind: 'webhook', name: 'Portal sprint', desc: 'Puerta de acceso pública que intercepta la solicitud inicial.' },
      { kind: 'respond', name: 'Pantalla de login', desc: 'Responde con el botón “Iniciar sesión con Google”.' },
      { kind: 'auth', name: 'Callback OAuth', desc: 'Canjea el código de autorización por un access token (server-to-server).' },
      { kind: 'http', name: 'Identidad', desc: 'Consulta el perfil del usuario autenticado para obtener su correo.' },
      { kind: 'branch', name: 'Firewall lógico', desc: 'Valida que el correo pertenezca a los dominios corporativos.' },
      { kind: 'form', name: 'Formulario', desc: 'Redirige al formulario con el correo verificado como campo oculto.' },
      { kind: 'code', name: 'Extrae datos', desc: 'Interpreta la acción, proyectos y correos enviados.' },
      { kind: 'branch', name: 'Decide acción', desc: 'Bifurca entre agregar o eliminar destinatarios.' },
      { kind: 'code', name: 'Agregar / eliminar', desc: 'Fusiona sin duplicados o purga el correo de la lista actual.' },
      { kind: 'db', name: 'Aplicar en BD', desc: 'UPDATE transaccional sobre la fila exacta del proyecto.' }
    ]
  },
  {
    id: 'bloqueantes',
    icon: 'shield-check',
    title: 'Formulario seguro de bloqueantes',
    category: 'Seguridad',
    trigger: { kind: 'webhook', text: 'Acceso al formulario' },
    value:
      'Los analistas reportan impedimentos en cualquier momento, no solo en la daily. El acceso se valida con OAuth 2.0 contra una lista autorizada y cada reporte entra directo a la tabla de bloqueantes.',
    impact: ['Reporte asíncrono de impedimentos', 'Acceso solo autorizado', 'Ingesta directa a BD'],
    nodes: [
      { kind: 'webhook', name: 'Punto de entrada', desc: 'Genera la URL pública que recibe el clic inicial.' },
      { kind: 'respond', name: 'Redirección a Google', desc: 'Envía al usuario a la pasarela OAuth (302).' },
      { kind: 'auth', name: 'Canje de token', desc: 'Intercambia el código temporal por un token de acceso.' },
      { kind: 'http', name: 'User info', desc: 'Recupera el correo real del usuario autenticado.' },
      { kind: 'branch', name: 'Validador', desc: 'Compara el correo con la lista de analistas autorizados (regex).' },
      { kind: 'form', name: 'Formulario Tally', desc: 'Acceso concedido con el correo como variable oculta; si no, 403.' },
      { kind: 'webhook', name: 'Ingesta Tally', desc: 'Escucha el envío del formulario (POST).' },
      { kind: 'db', name: 'Crea registro', desc: 'Mapeo dinámico de campos e inserción en la tabla de bloqueantes.' }
    ]
  }
];

export const certifications = [
  { title: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org', cat: 'Agilidad', url: 'https://www.scrum.org/certificates/1339890' },
  { title: 'Scrum Fundamentals Certified (SFC)', issuer: 'SCRUMstudy', cat: 'Agilidad', url: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=1050782' },
  { title: 'Kanban Awareness', issuer: 'KanbanLearn', cat: 'Agilidad', url: '' },
  { title: 'Applied Skills: Accelerating AI-assisted development', issuer: 'Microsoft Learn', cat: 'IA', url: 'https://learn.microsoft.com/api/credentials/share/en-us/ChristianManco-5703/41C7304E321B09D8?sharingId=32FD1402396DC563' },
  { title: 'n8n Quickstart', issuer: 'n8n', cat: 'IA', url: '' },
  { title: 'Generative AI Fundamentals', issuer: 'Coursera', cat: 'IA', url: 'https://coursera.org/share/54dbdd59880d4b0329cb7e951ae3340b' },
  { title: 'Generative AI in Software Development', issuer: 'Coursera', cat: 'IA', url: 'https://coursera.org/share/3e3535200c2e27282d6df5f9c34b98dd' },
  { title: 'AWS Cloud Solutions Architect', issuer: 'AWS · Coursera', cat: 'Cloud & datos', url: 'https://coursera.org/share/d609bd79fc1f729d82088e5a3f602e4c' },
  { title: 'IBM Data Engineering', issuer: 'IBM · Coursera', cat: 'Cloud & datos', url: 'https://coursera.org/share/f0380112bb5c90a0fdd71eb6488ff433' },
  { title: 'Database Integration and Management', issuer: 'Coursera', cat: 'Cloud & datos', url: 'https://coursera.org/share/ecbc21d23a11d7049874e01a77795d98' },
  { title: 'Microsoft Front-End Developer', issuer: 'Microsoft · Coursera', cat: 'Desarrollo', url: 'https://coursera.org/share/37fd1d6da3fa8130db5835215b896692' },
  { title: 'Back-End Development with .NET', issuer: 'Microsoft · Coursera', cat: 'Desarrollo', url: 'https://coursera.org/share/603d6b3ca725c28026ec1541661e926f' },
  { title: 'IBM Full Stack Software Developer', issuer: 'IBM · Coursera', cat: 'Desarrollo', url: 'https://coursera.org/share/1741b4b7b6fc4101aaf238920a659844' },
  { title: 'Programming with Java', issuer: 'Amazon · Coursera', cat: 'Desarrollo', url: 'https://coursera.org/share/1759817348e45c73a41d55348b505433' },
  { title: 'Full-Stack Integration', issuer: 'Coursera', cat: 'Desarrollo', url: 'https://coursera.org/share/7785cbfb0a934212a4b30dfaf970975f' },
  { title: 'Application Development', issuer: 'Coursera', cat: 'Desarrollo', url: 'https://coursera.org/share/af80c69f5bd356f40f5e9a035e621acf' },
  { title: 'Security and Authentication', issuer: 'Coursera', cat: 'Desarrollo', url: 'https://coursera.org/share/6ff39a6c238555ff59f145036203015c' },
  { title: 'Data Structures and Algorithms', issuer: 'Coursera', cat: 'Desarrollo', url: 'https://coursera.org/share/5156e9b5a059320006f05cbe56bdeb41' }
];

export const education = [
  { title: 'Ingeniería de Sistemas de Información', place: 'UPC · Universidad Peruana de Ciencias Aplicadas', note: 'En curso' },
  { title: 'Educación secundaria', place: 'IE 7009 Federico Villarreal', note: 'Graduado con honores académicos' }
];

export const languages = [
  { name: 'Español', level: 'Nativo', pct: 100 },
  { name: 'Inglés', level: 'Intermedio', pct: 60 }
];
