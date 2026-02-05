export interface Product {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  amazonLink: string;
}

export interface Niche {
  slug: string;
  title: string;
  description: string;
  content?: string;
  products: Product[];
}

export const NICHE_DATA: Niche[] = [
  {
    slug: "arquitectos",
    title: "Los Mejores Regalos para Arquitectos",
    description: "Descubre las mejores ideas de regalos para arquitectos. Herramientas profesionales, maquetas, libros de diseño y accesorios.",
    content: "Los arquitectos viven en el cruce entre el arte y la ingeniería, y sus regalos deben reflejar esa dualidad. No se trata solo de regalar 'cosas de oficina', sino de encontrar herramientas que respeten su obsesión por la estética, la precisión y el diseño. Un buen regalo para un arquitecto suele caer en tres categorías: **productividad**, **inspiración** o **confort**. Olvida los regalos genéricos; busca materiales premium, acabados mate y diseño minimalista.",
    products: [
      { id: "1", title: "Bolígrafo digital Metapen", price: "32,99 €", imageUrl: "https://m.media-amazon.com/images/I/41yUOq1wFtL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09ZTXVNVD" },
      { id: "2", title: "Libro: El Arquitecto Emprendedor", price: "15,36 €", imageUrl: "https://m.media-amazon.com/images/I/61EuFK10IAL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DR6MB9DQ" },
      { id: "3", title: "Escala de Arquitecto Triangular", price: "9,99 €", imageUrl: "https://m.media-amazon.com/images/I/61jxy0HdWWL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07WWTDCHQ" },
      { id: "4", title: "Tubo portaplanos", price: "13,99 €", imageUrl: "https://m.media-amazon.com/images/I/61Gv54Z5vRL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09SZ9SWRC" },
      { id: "5", title: "Alfombrilla de corte A3 con cuchillos para manualidades", price: "19,99 €", imageUrl: "https://m.media-amazon.com/images/I/91mRRoUIWrL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08L3LFZZW" },
      { id: "6", title: "Winsor & Newton Promarker Arquitectura Set de 24", price: "60,89 €", imageUrl: "https://m.media-amazon.com/images/I/61+nTQraHsL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B089CQRLLM" },
      { id: "7", title: "Apple iPad Pro M4", price: "1031,53 €", imageUrl: "https://m.media-amazon.com/images/I/6198CBucttL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0D3J9P7RK" },
      { id: "8", title: "Portaminas Mecánicos Artísticos", price: "18,99 €", imageUrl: "https://m.media-amazon.com/images/I/81YgWF-jpTL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BCQ65PCQ" },
      { id: "9", title: "LLavero de arquitecto", price: "9,99 €", imageUrl: "https://m.media-amazon.com/images/I/61hMTPgo-rL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08241S43M" },
      { id: "10", title: "Plantillas para planos casa diseño interiores", price: "16,00 €", imageUrl: "https://m.media-amazon.com/images/I/71n8N4DI-aL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07F1TQRYK" },
      { id: "11", title: "Medidor láser portátil", price: "19,99 €", imageUrl: "https://m.media-amazon.com/images/I/61xUc34WUoL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DJ7JKWRZ" },
      { id: "12", title: "Taza arquitecto koalificado", price: "12,95 €", imageUrl: "https://m.media-amazon.com/images/I/617cxgmz7NL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0C211QJKW" },
    ],
  },
  {
    slug: "gamers",
    title: "Los Mejores Regalos para Gamers",
    description: "Periféricos de alto rendimiento, decoración RGB y accesorios virales para el setup perfecto.",
    content: "El setup de un gamer es su templo. Regalar a un apasionado de los videojuegos no es comprar el primer juego que veas. Se trata de entender su ecosistema: ¿PC o consola? ¿Competitivo o historia? Los mejores regalos para gamers en 2024 se centran en la **atmósfera y el rendimiento**. Desde iluminación RGB que se sincroniza con la pantalla, hasta periféricos que dan esa milésima de segundo de ventaja.",
    products: [
      { id: "1", title: "KDD Soporte Auriculares Gaming LED con Carga Inalámbrica", price: "27,95 €", imageUrl: "https://m.media-amazon.com/images/I/61JI6UgtcJL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DGGNPHP8" },
      { id: "2", title: "Alfombrilla Ratón Personalizada con Foto para Gamers", price: "12,90 €", imageUrl: "https://m.media-amazon.com/images/I/71CH4+tl-DL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DK213H68" },
      { id: "3", title: "Kit Limpiador Monitor Gamer 200ML + Spray + Microfibra", price: "14,45 €", imageUrl: "https://m.media-amazon.com/images/I/61HKZx64DkL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DCCD7FFX" },
      { id: "4", title: "Ratón Gaming RGB con cable", price: "13,99 €", imageUrl: "https://m.media-amazon.com/images/I/61pVBqHabaL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07F9S3P3D" },
      { id: "5", title: "BISOUSOX Calcetines Gamer Do Not Disturb I'm Gaming", price: "7,99 €", imageUrl: "https://m.media-amazon.com/images/I/71DbBE2+WfL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08HS67FYQ" },
      { id: "6", title: "Alyvisun Kit Limpieza Teclado PC 11 en 1 Multifuncional", price: "10,69 €", imageUrl: "https://m.media-amazon.com/images/I/61PRCP-+vEL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BZCTRKNK" },
      { id: "7", title: "Webcam Full HD 1080P 30FPS USB UGREEN", price: "27,99 €", imageUrl: "https://m.media-amazon.com/images/I/61LPTw0M-qL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0C76ZD7KV" },
      { id: "8", title: "Auriculares Gaming con Micrófono Rotatorio RGB PS5 Xbox PC", price: "29,99 €", imageUrl: "https://m.media-amazon.com/images/I/61jmLD3hYaL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09DPR2LZW" },
      { id: "9", title: "Teclado Mecánico Gaming RGB Dierya", price: "39,99 €", imageUrl: "https://m.media-amazon.com/images/I/610Wsop5scL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0FFMRQNLW/" },
      { id: "10", title: "Taza Gameboy que Cambia con Calor Oficial Gamers Retro", price: "11,99 €", imageUrl: "https://m.media-amazon.com/images/I/71alMT8fYrL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B06WRVFRJV" },
      { id: "11", title: "8 Piezas Hexágonos Luminosos RGB Sincronización Música Gaming", price: "25,72 €", imageUrl: "https://m.media-amazon.com/images/I/61-3jrmXtzL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0D91YRTVY" },
      { id: "12", title: "Portavasos Escritorio Antiderrames Giratorio para Gaming", price: "15,69 €", imageUrl: "https://m.media-amazon.com/images/I/61wSbS6zXlL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DSJ8SGFH" },
    ],
  },
  {
    slug: "enfermeros",
    title: "Los Mejores Regalos para Enfermeros",
    description: "Olvídate de las tazas genéricas. Aquí encontrarás herramientas clínicas y accesorios que realmente mejoran el turno de un enfermero.",
    content: "La enfermería no es una profesión, es un estilo de vida de turnos de 12 horas. Si buscas el regalo perfecto, la clave es: **Utilidad Real**. Sus bolsillos son su oficina y sus pies su transporte. Nuestra selección prioriza herramientas profesionales específicas (fonendoscopios, tijeras), organización para el uniforme y detalles exclusivos del gremio que un simple aficionado no entendería.",
    products: [
      { id: "1", title: "Organizador de Bolsillo (Salva-bolsillos)", price: "12,99 €", imageUrl: "https://m.media-amazon.com/images/I/71u+Dk-N+mL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08X4W3P4L" },
      { id: "2", title: "Fonendoscopio 3M Littmann Classic III", price: "115,00 €", imageUrl: "https://m.media-amazon.com/images/I/61N+V+J1JBL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B00QESFO80" },
      { id: "3", title: "Reloj de Enfermería de Silicona", price: "9,99 €", imageUrl: "https://m.media-amazon.com/images/I/61S-tVCO+OL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B075F6H8F5" },
      { id: "4", title: "Zuecos Sanitarios Calzuro (Esterilizables)", price: "46,50 €", imageUrl: "https://m.media-amazon.com/images/I/51e2pY-jEBL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B00J2Y4M3A" },
      { id: "5", title: "Tijeras de Enfermería (Pico de Pato)", price: "8,50 €", imageUrl: "https://m.media-amazon.com/images/I/61Yh-A+TqXL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07MK2XG7N" },
      { id: "6", title: "Calcetines de Compresión (Diseño Médico)", price: "18,90 €", imageUrl: "https://m.media-amazon.com/images/I/71qZ6+1M+XL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B085DP3N5R" },
      { id: "7", title: "Linterna de Diagnóstico Pupilar (LED)", price: "14,99 €", imageUrl: "https://m.media-amazon.com/images/I/61I0+Jg+gDL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07RF8J9H2" },
      { id: "8", title: "Gorro de Quirófano Estampado", price: "13,95 €", imageUrl: "https://m.media-amazon.com/images/I/71F7+s+TqXL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08L6G3N4R" },
      { id: "9", title: "Abre-ampollas de Seguridad", price: "6,99 €", imageUrl: "https://m.media-amazon.com/images/I/51+tq+TqXL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09X4W3P4L" },
      { id: "10", title: "Estuche Rígido para Fonendoscopio", price: "16,99 €", imageUrl: "https://m.media-amazon.com/images/I/71K+tq+TqXL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B01N2W3P4L" },
      { id: "11", title: "Porta-tijeras Retráctil (Yoyó)", price: "10,50 €", imageUrl: "https://m.media-amazon.com/images/I/61Z+tq+TqXL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08Y4W3P4L" },
      { id: "12", title: "Bolígrafos con forma de Jeringuilla", price: "7,99 €", imageUrl: "https://m.media-amazon.com/images/I/71M+tq+TqXL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07Z4W3P4L" },
    ],
  },
  {
    slug: "programadores",
    title: "Los Mejores Regalos para Programadores",
    description: "Ideas de regalos para desarrolladores. Teclados, libros técnicos, gadgets y accesorios.",
    content: "Regalar a un programador es más sencillo de lo que parece: buscan optimizar su entorno y su cerebro. Valoran la eficiencia, la ergonomía y el humor 'geek'. Aquí encontrarás desde hardware que cuida su salud (teclados mecánicos, sillas) hasta gadgets que les ayudan a concentrarse o simplemente les sacan una sonrisa mientras depuran código.",
    products: [
      { id: "1", title: "Teclado Ergonómico Split", price: "129,99 €", imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=500&q=80", amazonLink: "#" },
      { id: "2", title: "Monitor 4K USB-C", price: "299,00 €", imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80", amazonLink: "#" },
      { id: "3", title: "Libro: Clean Code", price: "42,95 €", imageUrl: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500&q=80", amazonLink: "#" },
      { id: "4", title: "Soporte Laptop Aluminio", price: "34,99 €", imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80", amazonLink: "#" },
      { id: "5", title: 'Taza "Hello World"', price: "14,99 €", imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80", amazonLink: "#" },
      { id: "6", title: "Dock Station USB-C", price: "49,99 €", imageUrl: "https://images.unsplash.com/photo-1628126781211-1a3eb64f7836?w=500&q=80", amazonLink: "#" },
      { id: "7", title: "Auriculares Noise Cancelling", price: "89,00 €", imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80", amazonLink: "#" },
      { id: "8", title: "Ratón Vertical Ergonómico", price: "59,99 €", imageUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80", amazonLink: "#" },
      { id: "9", title: "SSD Externo 1TB", price: "79,99 €", imageUrl: "https://images.unsplash.com/photo-1597872252165-230dd99d5079?w=500&q=80", amazonLink: "#" },
      { id: "10", title: "Gafas Luz Azul", price: "25,00 €", imageUrl: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&q=80", amazonLink: "#" },
      { id: "11", title: "Webcam HD Pro", price: "99,99 €", imageUrl: "https://images.unsplash.com/photo-1596564239327-1c667e45668d?w=500&q=80", amazonLink: "#" },
      { id: "12", title: "Tira LED Escritorio", price: "39,90 €", imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80", amazonLink: "#" },
    ],
  },
  {
    slug: "profesores",
    title: "Los Mejores Regalos para Profesores",
    description: "Regalos ideales para maestros y profesores. Material educativo, accesorios de escritorio y detalles de agradecimiento.",
    content: "Los profesores desgastan la voz y la energía a diario. El mejor regalo no es otra taza genérica, sino algo que **les facilite la vida en el aula** o les ayude a desconectar. Hemos seleccionado artículos que resuelven problemas reales: desde proteger su voz y organizar el caos de papeles, hasta detalles que les recuerdan el impacto positivo que tienen en sus alumnos.",
    products: [
      { id: "1", title: "Bolígrafo Estilográfica Premium", price: "29,99 €", imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&q=80", amazonLink: "#" },
      { id: "2", title: "Agenda Docente Año Completo", price: "24,90 €", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", amazonLink: "#" },
      { id: "3", title: "Taza Profesor con Frase Motivadora", price: "12,99 €", imageUrl: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&q=80", amazonLink: "#" },
      { id: "4", title: "Set de Marcadores para Pizarra", price: "18,50 €", imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&q=80", amazonLink: "#" },
      { id: "5", title: "Organizador de Escritorio", price: "34,99 €", imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&q=80", amazonLink: "#" },
      { id: "6", title: "Libro: Pedagogía Moderna", price: "28,00 €", imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80", amazonLink: "#" },
      { id: "7", title: "Laminador Térmico Portátil", price: "42,00 €", imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80", amazonLink: "#" },
      { id: "8", title: "Bolsa Térmica para Almuerzo", price: "22,99 €", imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80", amazonLink: "#" },
      { id: "9", title: "Timer de Clase Visual", price: "19,90 €", imageUrl: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80", amazonLink: "#" },
      { id: "10", title: "Paquete de Stickers Educativos", price: "9,99 €", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", amazonLink: "#" },
      { id: "11", title: "Cuaderno Profesional A4", price: "14,50 €", imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&q=80", amazonLink: "#" },
      { id: "12", title: "Silla Ergonómica para Docentes", price: "189,99 €", imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", amazonLink: "#" },
    ],
  },
];

export function getNicheBySlug(slug: string): Niche | undefined {
  return NICHE_DATA.find((n) => n.slug === slug);
}

export function getAllSlugs(): string[] {
  return NICHE_DATA.map((n) => n.slug);
}
