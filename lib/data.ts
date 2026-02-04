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
  products: Product[];
}

export const NICHE_DATA: Niche[] = [
  {
    slug: "arquitectos",
    title: "Los Mejores Regalos para Arquitectos",
    description: "Descubre las mejores ideas de regalos para arquitectos. Herramientas profesionales, maquetas, libros de diseño y accesorios.",
    products: [
      { id: "1", title: "Bolígrafo digital Metapen", price: "20,89 €", imageUrl: "https://m.media-amazon.com/images/I/41yUOq1wFtL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09ZTXVNVD" },
      { id: "2", title: "Libro: El Arquitecto Emprendedor", price: "14,69 €", imageUrl: "https://m.media-amazon.com/images/I/61EuFK10IAL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DR6MB9DQ" },
      { id: "3", title: "Escala de Arquitecto Triangular", price: "9,99 €", imageUrl: "https://m.media-amazon.com/images/I/61jxy0HdWWL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07WWTDCHQ" },
      { id: "4", title: "Tubo portaplanos", price: "13,99 €", imageUrl: "https://m.media-amazon.com/images/I/61Gv54Z5vRL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09SZ9SWRC" },
      { id: "5", title: "Alfombrilla de corte A3 con cuchillos para manualidades", price: "19,99 €", imageUrl: "https://m.media-amazon.com/images/I/91mRRoUIWrL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08L3LFZZW" },
      { id: "6", title: "Winsor & Newton Promarker Arquitectura Set de 24", price: "60,89 €", imageUrl: "https://m.media-amazon.com/images/I/61+nTQraHsL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B089CQRLLM" },
      { id: "7", title: "Apple iPad Pro M4", price: "1025,00 €", imageUrl: "https://m.media-amazon.com/images/I/6198CBucttL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0D3J9P7RK" },
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
    products: [
      { id: "1", title: "KDD Soporte Auriculares Gaming LED con Carga Inalámbrica", price: "26,55 €", imageUrl: "https://m.media-amazon.com/images/I/61JI6UgtcJL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DGGNPHP8" },
      { id: "2", title: "Alfombrilla Ratón Personalizada con Foto para Gamers", price: "12,90 €", imageUrl: "https://m.media-amazon.com/images/I/71CH4+tl-DL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DK213H68" },
      { id: "3", title: "Kit Limpiador Monitor Gamer 200ML + Spray + Microfibra", price: "14,45 €", imageUrl: "https://m.media-amazon.com/images/I/61HKZx64DkL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DCCD7FFX" },
      { id: "4", title: "Calcetines Divertidos Antideslizantes Regalo Gamer", price: "12,99 €", imageUrl: "https://m.media-amazon.com/images/I/81Rxe9vhbuL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0D3XBL5Q6" },
      { id: "5", title: "Froster Taza Mando Game Over 350ml Regalo Gamer", price: "16,99 €", imageUrl: "https://m.media-amazon.com/images/I/71iGlHbALHL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0D2NZRPW1" },
      { id: "6", title: "Mando de Videojuegos de Chocolate con Caja Regalo 70g", price: "9,99 €", imageUrl: "https://m.media-amazon.com/images/I/61L6lPZt12L._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B00JWNOR0K" },
      { id: "7", title: "BISOUSOX Calcetines Gamer Do Not Disturb I'm Gaming", price: "6,39 €", imageUrl: "https://m.media-amazon.com/images/I/71DbBE2+WfL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08HS67FYQ" },
      { id: "8", title: "Alyvisun Kit Limpieza Teclado PC 11 en 1 Multifuncional", price: "10,69 €", imageUrl: "https://m.media-amazon.com/images/I/61PRCP-+vEL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BZCTRKNK" },
      { id: "9", title: "KDD Soporte Auriculares con Cajón y Organizador Cables", price: "15,92 €", imageUrl: "https://m.media-amazon.com/images/I/718xFKKTpaL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DCN9QPCV" },
      { id: "10", title: "Camiseta No Cumplo Años Subo De Nivel Gamer", price: "14,39 €", imageUrl: "https://m.media-amazon.com/images/I/61g0l+AptfL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08YY8MNWF" },
      { id: "11", title: "Auriculares Gaming con Micrófono Rotatorio RGB PS5 Xbox PC", price: "23,46 €", imageUrl: "https://m.media-amazon.com/images/I/61jmLD3hYaL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09DPR2LZW" },
      { id: "12", title: "Veddelholzer Limpiador Pantallas 250ml con Microfibra", price: "11,00 €", imageUrl: "https://m.media-amazon.com/images/I/81qowVSu0VL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0FGPYMFDG" },
      { id: "13", title: "Taza Gameboy que Cambia con Calor Oficial Gamers Retro", price: "9,99 €", imageUrl: "https://m.media-amazon.com/images/I/71alMT8fYrL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B06WRVFRJV" },
      { id: "14", title: "8 Piezas Hexágonos Luminosos RGB Sincronización Música Gaming", price: "23,21 €", imageUrl: "https://m.media-amazon.com/images/I/61-3jrmXtzL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0D91YRTVY" },
      { id: "15", title: "Portavasos Escritorio Antiderrames Giratorio para Gaming", price: "15,69 €", imageUrl: "https://m.media-amazon.com/images/I/61wSbS6zXlL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DSJ8SGFH" },
    ],
  },
  {
    slug: "enfermeros",
    title: "Los Mejores Regalos para Enfermeros",
    description: "Regalos pensados para enfermeros y enfermeras. Productos para bienestar y comodidad en el trabajo.",
    products: [
      { id: "1", title: "Zapatillas Cómodas Trabajo", price: "45,99 €", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", amazonLink: "#" },
      { id: "2", title: "Reloj de Enfermería", price: "32,00 €", imageUrl: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80", amazonLink: "#" },
      { id: "3", title: "Botella Agua Térmica 1L", price: "22,50 €", imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80", amazonLink: "#" },
      { id: "4", title: "Almohada Cervical Viaje", price: "28,99 €", imageUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&q=80", amazonLink: "#" },
      { id: "5", title: "Libro: Anatomía Humana", price: "18,90 €", imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80", amazonLink: "#" },
      { id: "6", title: "Linterna Médica Diagnóstico", price: "24,50 €", imageUrl: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=500&q=80", amazonLink: "#" },
      { id: "7", title: "Plantillas Gel Confort", price: "35,99 €", imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80", amazonLink: "#" },
      { id: "8", title: "Mochila Sanitaria", price: "52,00 €", imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80", amazonLink: "#" },
      { id: "9", title: "Crema de Manos Reparadora", price: "16,90 €", imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80", amazonLink: "#" },
      { id: "10", title: "Taza Café Enfermera", price: "14,99 €", imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80", amazonLink: "#" },
      { id: "11", title: "Masajeador Cuello Portátil", price: "49,99 €", imageUrl: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=500&q=80", amazonLink: "#" },
      { id: "12", title: "Zuecos Sanitarios Blancos", price: "19,50 €", imageUrl: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=500&q=80", amazonLink: "#" },
    ],
  },
  {
    slug: "programadores",
    title: "Los Mejores Regalos para Programadores",
    description: "Ideas de regalos para desarrolladores. Teclados, libros técnicos, gadgets y accesorios.",
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
