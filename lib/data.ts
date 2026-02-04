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
      { id: "1", title: "Escuadra de Arquitecto Premium 45/90", price: "24,99 €", imageUrl: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=500&q=80", amazonLink: "#" },
      { id: "2", title: "Libro: Los 101 Detalles Constructivos", price: "35,00 €", imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80", amazonLink: "#" },
      { id: "3", title: "Escala de Arquitecto Triangular", price: "12,50 €", imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80", amazonLink: "#" },
      { id: "4", title: "Portaplanos Profesional A2", price: "18,90 €", imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80", amazonLink: "#" },
      { id: "5", title: "Lámpara de Escritorio LED Flexible", price: "29,99 €", imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80", amazonLink: "#" },
      { id: "6", title: "Compás de Precisión Profesional", price: "19,50 €", imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=500&q=80", amazonLink: "#" },
      { id: "7", title: "Set de Rotuladores para Bocetos", price: "34,99 €", imageUrl: "https://images.unsplash.com/photo-1515712952504-4b537d896588?w=500&q=80", amazonLink: "#" },
      { id: "8", title: "Regla T de Aluminio 60cm", price: "28,00 €", imageUrl: "https://images.unsplash.com/photo-1615822588102-140652875b1c?w=500&q=80", amazonLink: "#" },
      { id: "9", title: "Cuaderno de Bocetos Moleskine", price: "22,00 €", imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&q=80", amazonLink: "#" },
      { id: "10", title: "Maqueta de Edificio Recortable", price: "22,00 €", imageUrl: "https://images.unsplash.com/photo-1469957761306-556935073eba?w=500&q=80", amazonLink: "#" },
      { id: "11", title: "Tijeras de Precisión para Maquetas", price: "18,99 €", imageUrl: "https://images.unsplash.com/photo-1583947581924-860bda073c29?w=500&q=80", amazonLink: "#" },
      { id: "12", title: "Libro: Historia de la Arquitectura", price: "38,50 €", imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80", amazonLink: "#" },
    ],
  },
  {
    slug: "gamers",
    title: "Los Mejores Regalos para Gamers",
    description: "Ideas de regalos perfectas para gamers. Periféricos, merchandising, sillas gaming y accesorios.",
    products: [
      { id: "1", title: "Teclado Mecánico RGB Gaming", price: "89,99 €", imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80", amazonLink: "#" },
      { id: "2", title: "Auriculares Gaming Surround", price: "69,99 €", imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80", amazonLink: "#" },
      { id: "3", title: "Ratón Inalámbrico Ultra Ligero", price: "54,99 €", imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80", amazonLink: "#" },
      { id: "4", title: "Alfombrilla XL Gaming", price: "19,99 €", imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80", amazonLink: "#" },
      { id: "5", title: "Soporte para Auriculares RGB", price: "24,90 €", imageUrl: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=500&q=80", amazonLink: "#" },
      { id: "6", title: "Webcam 1080p Streaming", price: "79,00 €", imageUrl: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&q=80", amazonLink: "#" },
      { id: "7", title: "Silla Gamer Ergonómica", price: "249,99 €", imageUrl: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&q=80", amazonLink: "#" },
      { id: "8", title: "Monitores Gaming 144Hz", price: "329,00 €", imageUrl: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&q=80", amazonLink: "#" },
      { id: "9", title: "Controlador Pro Consola", price: "64,99 €", imageUrl: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=500&q=80", amazonLink: "#" },
      { id: "10", title: "Luces LED Ambientales", price: "29,99 €", imageUrl: "https://images.unsplash.com/photo-1563294326-78b174af9720?w=500&q=80", amazonLink: "#" },
      { id: "11", title: "Micrófono USB Streaming", price: "49,99 €", imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80", amazonLink: "#" },
      { id: "12", title: "Hub USB Periféricos", price: "34,90 €", imageUrl: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80", amazonLink: "#" },
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
