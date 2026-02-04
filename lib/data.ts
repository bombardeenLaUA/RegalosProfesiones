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
      { id: "1", title: "Escuadra de Carpintería Métrica", price: "8,99 €", imageUrl: "https://m.media-amazon.com/images/I/71nDkWNcalL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/Escuadra-Carpinter%C3%ADa-Triangular-Herramienta-Carpintero/dp/B08VD1XJVT/ref=sr_1_38?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1T0QWYYYCF94I&dib=eyJ2IjoiMSJ9.pRr3AViuYxKute9i1wg4_5IzeYlq3GEmfoCAxTAH_luMV0Vimvg8Kr8QsP3Hl21eqcMZN_6Oy6lQA9kR4Z-fa1O-RjNQmQO6xrfq6rwTXzXRdK5jNdVEv1pONaCNddjjVk5WKRrPev_zOhmVde_3adZuOfXTobGk5F7TjeTENsbNaqJO_yWn-tU-k-69ZDTPZiKb9RAL4ZKrPRFgUm2apYFQsKD_A2oQIbwqGZXQ0013UBjW9lZS2WjV7XqdEmEn4insPrWGqWE6tALY_KLrdD2oXLtGZwKZF5sgNTCVIuI.lvoxctmzymKJ5nHqhQV_DsbC3VBWtD9z-uf6CZhuII0&dib_tag=se&keywords=escuadra%2Barquitecto%2Bpremium%2B45%2F90&qid=1770219627&sprefix=escuadra%2Barquitecto%2Bpremium%2B45%2F9%2Caps%2C227&sr=8-38&th=1" },
      { id: "2", title: "Libro: El Arquitecto Emprendedor", price: "14,69 €", imageUrl: "https://m.media-amazon.com/images/I/61EuFK10IAL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/El-Arquitecto-Emprendedor-Destacar-Competitivo/dp/B0DR6MB9DQ/ref=sr_1_8?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=39TQRSYUAXSG3&dib=eyJ2IjoiMSJ9.osbWjtcjmX50MESTPPy_FaD6Kp5DU7xTZSXzxyuyH1mAj5eskcXg4gU_hr3NvNV3pkq7ZF6Dh3I3D8nHA2cMYClAvYN_pNPjbQCr3en13om4rJj1aciBAPrx8-OJBnn4lguItXK2mbeiiYRX8-P4WCOwDoV8o2hAp8UAwFKT2y-lOablCNKapMhEcGGZpBWErl8LNbqOQx6Tmzzvy9CHeCPMqzX3CqR0X_svrRkPQ8MHWo_g9-teTOD3t4HwaDJxAHCPQgCqLGvtC5utGJB_W-53FJxS_edbcAPtzL8o3FY.X30yyVmQvYnJCYPUz-tBIHB_ofrieZ1nEh1w5nOHJCA&dib_tag=se&keywords=libro+arquitecto&qid=1770219792&sprefix=libro+arquitecto%2Caps%2C241&sr=8-8" },
      { id: "3", title: "Escala de Arquitecto Triangular", price: "9,99 €", imageUrl: "https://m.media-amazon.com/images/I/61jxy0HdWWL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/escala-arquitect%C3%B3nica-triangular-aluminio-m%C3%A9trica/dp/B07WWTDCHQ/ref=sr_1_9?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2ITF4K6R294RS&dib=eyJ2IjoiMSJ9.gKzzg5KkWR2BGxL6pBx8mtlsKGhlNcPfy2zHnXBYg00jhRTxM9uJre-aOh9VBSnqZXrQX6m_HuTOPHx_NvyV8lX-vzK41NzkW8Gle9EclS_oTUfsLojacMrVYJjSp1wqd-kKAzrBeDHpDV8toCKo6Kz1TpQU9HFJSq13Wi4tlyqiGNCzuj_L4gqskr3gUVtLfCb41kZwvgZHBYcTZvD9ckVYdSNSk0laDNsjlm-QSLxqw2wg6A39FvCdiaxaOVpkcWWGcZRvdcLLwfYYoj6MHHpp6KjjWYqRWiLzs12WoYE.BNmjorPhQZ05MUtsPDnnbOjiNJg34irkXkDRQVLTIqk&dib_tag=se&keywords=escala%2Btriangular%2Barquitecto&qid=1770219951&sprefix=escala%2Btriangul%2Barquitecto%2Caps%2C232&sr=8-9&th=1" },
      { id: "4", title: "Tubo portaplanos", price: "13,99 €", imageUrl: "https://m.media-amazon.com/images/I/61Gv54Z5vRL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/Raylu-Paper%C2%AE-portaplanos-Documentos-Extensible/dp/B09SZ9SWRC/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=NERASM92TFBN&dib=eyJ2IjoiMSJ9.G9cXykt-88HVPlgf64psmzQaaqUgMk5Zy6Z6uAhpuJ5ZT_mpmwnXKxe1c4ewIo7acMMijGOquG2BnvRfoSGtTfg2e_NVdKe9WugA1WGlM-3AFICCZtOTaC339ZMoHv2ncqTqT9ttAYmk5twL0krlQzhX7HGX9gozhrlOEugdg7AkmPrZqei5vBQlBY20hAXL592DUKRxZbS_V1OKO7pMd9OyNi4IKg6UE71Ak2acigOH0YaNdbtavILaNsKZYTtXLWPf5TcHxXS_MQuacXjnad3PDgu_kcJ97nB7saNNKtQ.NA9q_r5Cnb1bMJK2KPH4LUW3MQ4fIDjVrlnXjcUWWpA&dib_tag=se&keywords=portaplanos%2Ba2&qid=1770220178&sprefix=portaplanos%2Ba%2Caps%2C232&sr=8-4&th=1" },
      { id: "5", title: "Miuzei Alfombrilla de corte A3 con 55 cuchillos para manualidades", price: "19,99 €", imageUrl: "https://m.media-amazon.com/images/I/91mRRoUIWrL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08L3LFZZW" },
      { id: "6", title: "Raylu Paper® Escalímetro triangular para estudiantes y arquitectos", price: "7,99 €", imageUrl: "https://m.media-amazon.com/images/I/61T-d-RDo2L._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09TTK1GDQ" },
      { id: "7", title: "Escalímetro Triangular Profesional 30cm Aluminio para Arquitectos", price: "11,89 €", imageUrl: "https://m.media-amazon.com/images/I/6186JtwIsUL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0FGN67QGV" },
      { id: "8", title: "30 cm escalímetro de precisión aluminio triangular arquitectos", price: "10,99 €", imageUrl: "https://m.media-amazon.com/images/I/61KigLsPjdL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09HSZ7CC6" },
      { id: "9", title: "Winsor & Newton Promarker Arquitectura Set de 24", price: "59,99 €", imageUrl: "https://m.media-amazon.com/images/I/61+nTQraHsL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B089CQRLLM" },
      { id: "10", title: "Cooja Set de Lápices de Dibujo con Grafito y Carboncillo para Bosquejo", price: "17,09 €", imageUrl: "https://m.media-amazon.com/images/I/81xOGz-17ML._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07KLX1XPJ" },
      { id: "11", title: "Nicpro 6 Piezas Lápices Mecánicos Artísticos Portaminas 0.3-2mm", price: "18,99 €", imageUrl: "https://m.media-amazon.com/images/I/81YgWF-jpTL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BCQ65PCQ" },
      { id: "12", title: "HIFORNY Set de Dibujo 100 Piezas Materiales Arte Profesionales", price: "39,99 €", imageUrl: "https://m.media-amazon.com/images/I/91GRYrW+RXL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0D8DK3JY6" },
      { id: "13", title: "Mr. Pen Plantillas para planos casa diseño interiores arquitectura", price: "16,00 €", imageUrl: "https://m.media-amazon.com/images/I/71n8N4DI-aL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07F1TQRYK" },
      { id: "14", title: "KALOUR PDAS Set Carboncillo 22 piezas para Artistas Principiantes", price: "16,99 €", imageUrl: "https://m.media-amazon.com/images/I/8180T-1vkqL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0D9XJ46R2" },
      { id: "15", title: "KALOUR PDAS Juego 58 piezas dibujo cuaderno bocetos A5 profesional", price: "26,99 €", imageUrl: "https://m.media-amazon.com/images/I/91ARuPYsx4L._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0CKQR9VMN" },
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
