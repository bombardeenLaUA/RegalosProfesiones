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
      { id: "1", title: "Bolígrafo Digital Metapen", price: "32,99 €", imageUrl: "https://m.media-amazon.com/images/I/41yUOq1wFtL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09ZTXVNVD" },
      { id: "2", title: "Libro: El Arquitecto Emprendedor", price: "15,36 €", imageUrl: "https://m.media-amazon.com/images/I/61EuFK10IAL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DR6MB9DQ" },
      { id: "3", title: "Escala de Arquitecto Triangular", price: "9,99 €", imageUrl: "https://m.media-amazon.com/images/I/61jxy0HdWWL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07WWTDCHQ" },
      { id: "4", title: "Tubo Portaplanos", price: "13,99 €", imageUrl: "https://m.media-amazon.com/images/I/61Gv54Z5vRL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09SZ9SWRC" },
      { id: "5", title: "Alfombrilla de Corte A3 con Cuchillos para Manualidades", price: "19,99 €", imageUrl: "https://m.media-amazon.com/images/I/91mRRoUIWrL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08L3LFZZW" },
      { id: "6", title: "Winsor & Newton Promarker Arquitectura Set de 24", price: "60,89 €", imageUrl: "https://m.media-amazon.com/images/I/61+nTQraHsL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B089CQRLLM" },
      { id: "7", title: "Apple iPad Pro M4", price: "1031,53 €", imageUrl: "https://m.media-amazon.com/images/I/6198CBucttL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0D3J9P7RK" },
      { id: "8", title: "Portaminas Mecánicos Artísticos", price: "18,99 €", imageUrl: "https://m.media-amazon.com/images/I/81YgWF-jpTL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BCQ65PCQ" },
      { id: "9", title: "LLavero de Arquitecto", price: "9,99 €", imageUrl: "https://m.media-amazon.com/images/I/61hMTPgo-rL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08241S43M" },
      { id: "10", title: "Plantillas para Planos Casa Diseño Interiores", price: "16,00 €", imageUrl: "https://m.media-amazon.com/images/I/71n8N4DI-aL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07F1TQRYK" },
      { id: "11", title: "Medidor Láser Portátil", price: "19,99 €", imageUrl: "https://m.media-amazon.com/images/I/61xUc34WUoL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DJ7JKWRZ" },
      { id: "12", title: "Taza Arquitecto Koalificado", price: "12,95 €", imageUrl: "https://m.media-amazon.com/images/I/617cxgmz7NL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0C211QJKW" },
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
      { id: "4", title: "Ratón Gaming RGB con Cable", price: "13,99 €", imageUrl: "https://m.media-amazon.com/images/I/61pVBqHabaL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07F9S3P3D" },
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
      { id: "1", title: "Organizador de Bolsillo (Salva-bolsillos)", price: "12,99 €", imageUrl: "https://m.media-amazon.com/images/I/61kdXbdNZVL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0FHBC4N6Y" },
      { id: "2", title: "Fonendoscopio 3M Littmann Gama Alta", price: "63,49 €", imageUrl: "https://m.media-amazon.com/images/I/51uL7DduWkL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B000F4W1R6" },
      { id: "3", title: "Reloj de Enfermería de Silicona (3 unidades)", price: "9,89 €", imageUrl: "https://m.media-amazon.com/images/I/71vqsdKV8IL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BLY9MTVV" },
      { id: "4", title: "Zuecos Sanitarios Calzuro (Esterilizables)", price: "73,36 €", imageUrl: "https://m.media-amazon.com/images/I/41JdoFGq0XL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BGCCQ57Z" },
      { id: "5", title: "Crema de Manos Reparadora", price: "6,15 €", imageUrl: "https://m.media-amazon.com/images/I/61HHij2yPhL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07C5W53C3" },
      { id: "6", title: "Calcetines de Compresión (Diseño Médico)", price: "19,78 €", imageUrl: "https://m.media-amazon.com/images/I/71PI6fHYcJL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09DFLLLVK" },
      { id: "7", title: "Linterna de Diagnóstico", price: "10,99 €", imageUrl: "https://m.media-amazon.com/images/I/51qioE5DXcL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BVB4146F" },
      { id: "8", title: "Gorro de Quirófano Signo Vital", price: "10,99 €", imageUrl: "https://m.media-amazon.com/images/I/61RaSvTanGL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0FHV7Z913" },
      { id: "9", title: "Rompeampollas Jeringuilla y Conejito", price: "10,99 €", imageUrl: "https://m.media-amazon.com/images/I/71hZapHrysL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0GDWFJX6K" },
      { id: "10", title: "Collar Identificación It's Fine", price: "8,99 €", imageUrl: "https://m.media-amazon.com/images/I/71NT65Dz-iL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DHZQ588T" },
      { id: "11", title: "Forro Polar Personalizado Enfermeria", price: "37,95 €", imageUrl: "https://m.media-amazon.com/images/I/41YoOGkxW+L._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DH8H6LJZ" },
      { id: "12", title: "Bolígrafos con forma de Jeringuilla", price: "4,41 €", imageUrl: "https://m.media-amazon.com/images/I/61swmr004EL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0CMC3QGR6" },
    ],
  },
  {
    slug: "programadores",
    title: "Los Mejores Regalos para Programadores",
    description: "Ideas de regalos para desarrolladores. Teclados, libros técnicos, gadgets y accesorios.",
    content: "Regalar a un programador es más sencillo de lo que parece: buscan optimizar su entorno y su cerebro. Valoran la eficiencia, la ergonomía y el humor 'geek'. Aquí encontrarás desde hardware que cuida su salud (teclados mecánicos, sillas) hasta gadgets que les ayudan a concentrarse o simplemente les sacan una sonrisa mientras depuran código.",
    products: [
      { id: "1", title: "Power Bank 65W USB-C Cargador Portátil", price: "29,99 €", imageUrl: "https://m.media-amazon.com/images/I/61fS6kG8vxL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0F2MYWRR1" },
      { id: "2", title: "Monitor 4K USB-C (UltraWide)", price: "438,99€", imageUrl: "https://m.media-amazon.com/images/I/61KUUMHO4KL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0FT3XYRTJ" },
      { id: "3", title: "Libro: Clean Code", price: "57,19 €", imageUrl: "https://m.media-amazon.com/images/I/81Rnac2Fq+L._SY385_.jpg", amazonLink: "https://www.amazon.es/dp/0135398576" },
      { id: "4", title: "Soporte Laptop Aluminio", price: "26,99€", imageUrl: "https://m.media-amazon.com/images/I/61EMzItW34L._AC_SY879_.jpg", amazonLink: "https://www.amazon.es/dp/B0FX4LFBD8" },
      { id: "5", title: "Taza de Programador Code Doesn't Work", price: "15,90€", imageUrl: "https://m.media-amazon.com/images/I/71c0pxuVxnL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BKGMVZFG" },
      { id: "6", title: "Dock Station USB-C", price: "37,99€", imageUrl: "https://m.media-amazon.com/images/I/71gz1Ln4LYL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0CB5YW4SY" },
      { id: "7", title: "Auriculares Noise Cancelling Sony", price: "79,00€", imageUrl: "https://m.media-amazon.com/images/I/71iWkjXCu9L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BTDX26B2" },
      { id: "8", title: "Ratón Vertical Ergonómico Logitech", price: "81,99€", imageUrl: "https://m.media-amazon.com/images/I/61OkuiCWbDL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B07W4DGC27" },
      { id: "9", title: "Elgato Stream Deck (Para Macros)", price: "169,99€", imageUrl: "https://m.media-amazon.com/images/I/61gtdFnK+UL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09738CV2G" },
      { id: "10", title: "YubiKey 5 NFC (Llave Seguridad)", price: "70,18€", imageUrl: "https://m.media-amazon.com/images/I/41DkFsG8yEL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B08DHL1YDL" },
      { id: "11", title: "Webcam HD Pro Logitech", price: "61,06€", imageUrl: "https://m.media-amazon.com/images/I/71eGb1FcyiL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B006A2Q81M" },
      { id: "12", title: "Lámpara de Monitor", price: "49,99€", imageUrl: "https://m.media-amazon.com/images/I/51p1Ui5sa7L._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08DKQ3JG1" },
    ],
  },
  {
    slug: "profesores",
    title: "Los Mejores Regalos para Profesores y Maestros",
    description: "Ideas prácticas y bonitas para profes. Papelería, organización y detalles para agradecer su labor.",
    content: "Los profesores no solo enseñan, inspiran. Pero también corrigen exámenes hasta tarde y necesitan mucha energía. Para ellos, hemos seleccionado regalos que mezclan utilidad y cariño: desde organización para su caos creativo hasta pequeños caprichos para sus merecidos descansos. Aquí tienes la lista definitiva para sacar un sobresaliente en tu regalo.",
    products: [
      { id: "1", title: "Tote Bag de Tela Resistente (Diseño Libros)", price: "9,79 €", imageUrl: "https://m.media-amazon.com/images/I/51GtUjrZP2L._AC_SX522_.jpg", amazonLink: "https://www.amazon.es/dp/B071FK1P3J" },
      { id: "2", title: "Vaso Térmico Café para Llevar (Estanco)", price: "9,99€", imageUrl: "https://m.media-amazon.com/images/I/71rWFGXUWxL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BR3V9KY1" },
      { id: "3", title: "Estuche de Pie (Tipo Telescópico)", price: "19,99 €", imageUrl: "https://m.media-amazon.com/images/I/71pBuyHadGL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09MFJLLSY" },
      { id: "4", title: "Set Subrayadores Pastel (Zebra Mildliner)", price: "5,24€", imageUrl: "https://m.media-amazon.com/images/I/61lBb-ebSmL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0DMZG9WWM" },
      { id: "5", title: "Sellos de Evaluación con Mensajes Positivos", price: "9,99€", imageUrl: "https://m.media-amazon.com/images/I/71IrcBoyMPL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0G1M917LM" },
      { id: "6", title: "Agenda del Profesor (Diseño Floral/Minimal)", price: "24,50€", imageUrl: "https://m.media-amazon.com/images/I/71XHJhD4YYL._AC_SY879_.jpg", amazonLink: "https://www.amazon.es/dp/B0DV5SDK6X" },
      { id: "7", title: "Organizador de Escritorio de Bambú", price: "23,99€", imageUrl: "https://m.media-amazon.com/images/I/61mTsueYW7L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0F6TWMY12" },
      { id: "8", title: "Bolígrafo Borrable Premium (Cuerpo Metal)", price: "9,59€", imageUrl: "https://m.media-amazon.com/images/I/71cHghYwl3L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0CNG2SWKK" },
      { id: "9", title: "Fiambrera Bento Box (Estilo Japonés)", price: "13,99€", imageUrl: "https://m.media-amazon.com/images/I/71hsAIJD3QL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BRN27Y2B" },
      { id: "10", title: "Mando Presentador Diapositivas Inalámbrico", price: "12,99€", imageUrl: "https://m.media-amazon.com/images/I/41aOTTYrFvL._AC_UY218_.jpg  ", amazonLink: "https://www.amazon.es/dp/B0CW5VC6NN" },
      { id: "11", title: "Impresora de Etiquetas Bluetooth", price: "24,99€", imageUrl: "https://m.media-amazon.com/images/I/61g8I1U4lDL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0CX8P66SM" },
      { id: "12", title: "Máquina Plastificadora Hojas A4", price: "18,99€", imageUrl: "https://m.media-amazon.com/images/I/61MTGZ7GiWL._AC_UY218_.jpg", amazonLink: "https://www.amazon.es/dp/B0DFCG1PJL" },
    ],
  }
];

export function getNicheBySlug(slug: string): Niche | undefined {
  return NICHE_DATA.find((n) => n.slug === slug);
}

export function getAllSlugs(): string[] {
  return NICHE_DATA.map((n) => n.slug);
}
