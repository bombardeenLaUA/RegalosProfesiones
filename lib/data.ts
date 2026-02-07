export interface Product {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  amazonLink: string;
  badges?: string[];
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
    title: "Regalos para Arquitectos",
    description: "Herramientas de precisión, libros de diseño y accesorios que un arquitecto usa de verdad.",
    content: "Los arquitectos valoran la estética y la precisión: nada de cosas de oficina genéricas. Un buen regalo cae en **productividad** (herramientas que usan a diario), **inspiración** (libros, maquetas) o **confort** (materiales premium, acabados mate). Hemos priorizado lo que realmente se usa en el día a día.",
    products: [
      { id: "1", title: "Bolígrafo Digital Metapen (Alta Precisión)", price: "32,99€", imageUrl: "https://m.media-amazon.com/images/I/41yUOq1wFtL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09ZTXVNVD?tag=giftgenius-21", badges: ["Top Ventas", "Calidad/Precio"] },      
      { id: "2", title: "Alfombrilla de Corte A3 (Autocicatrizante)", price: "7,39€", imageUrl: "https://m.media-amazon.com/images/I/61QsK82thtL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B07TT872BF?tag=giftgenius-21", badges: ["Mejor Valorado"] },
      { id: "3", title: "Libro: El Arquitecto Emprendedor", price: "15,36€", imageUrl: "https://m.media-amazon.com/images/I/61EuFK10IAL._SY466_.jpg", amazonLink: "https://www.amazon.es/dp/B0DR6MB9DQ?tag=giftgenius-21" },
      { id: "4", title: "Escalímetro Triangular de Aluminio", price: "4,99€", imageUrl: "https://m.media-amazon.com/images/I/71TkeOvf3HL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B079C1HKB8?tag=giftgenius-21" },
      { id: "5", title: "Tubo Portaplanos Extensible", price: "13,99 €", imageUrl: "https://m.media-amazon.com/images/I/61Gv54Z5vRL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09SZ9SWRC?tag=giftgenius-21&th=1" },
      { id: "6", title: "Set Rotuladores Winsor & Newton (Arquitectura)", price: "60,89€", imageUrl: "https://m.media-amazon.com/images/I/61+nTQraHsL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B089CQRLLM?tag=giftgenius-21" },
      { id: "7", title: "Apple iPad Pro M4 256GB (Para Diseño)", price: "1.028,00€", imageUrl: "https://m.media-amazon.com/images/I/6198CBucttL._AC_SX522_.jpg", amazonLink: "https://www.amazon.es/dp/B0D3J9P7RK?tag=giftgenius-21" },
      { id: "8", title: "Set de Portaminas Metálicos Profesionales", price: "13,99€", imageUrl: "https://m.media-amazon.com/images/I/71Hitb05k5L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B07KK8VT4S?tag=giftgenius-21" },
      { id: "9", title: "Llavero Temático 'Trust Me I'm an Architect'", price: "9,99 €", imageUrl: "https://m.media-amazon.com/images/I/61hMTPgo-rL._AC_SX569_.jpg", amazonLink: "https://www.amazon.es/dp/B08241S43M?tag=giftgenius-21" },
      { id: "10", title: "Cuaderno Leuchtturm1917 A5 (Tapa Dura)", price: "23,95€", imageUrl: "https://m.media-amazon.com/images/I/517Oz-MQuZL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B002TSIMW4?tag=giftgenius-21" },
      { id: "11", title: "Medidor Láser de Distancia (50m)", price: "25,99€", imageUrl: "https://m.media-amazon.com/images/I/61bOcqIpMZL._AC_SX425_.jpg", amazonLink: "https://www.amazon.es/dp/B0863RK1KX?tag=giftgenius-21" },
      { id: "12", title: "Taza 'Arquitecto Koalificado' (Humor)", price: "12,95 €", imageUrl: "https://m.media-amazon.com/images/I/617cxgmz7NL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0C212JYLJ?tag=giftgenius-21" }
    ]
  },
  {
    slug: "gamers",
    title: "Regalos para Gamers",
    description: "Periféricos que marcan la diferencia, luz RGB y accesorios que los gamers piden.",
    content: "Regalar a un gamer no es comprar el primer juego que veas. Hay que mirar su ecosistema: ¿PC o consola? ¿Competitivo o historia? Lo que mejor encaja suele ser **atmósfera** (luz RGB, decoración) o **rendimiento** (periféricos que dan ventaja real). Desde paneles que se sincronizan con la pantalla hasta teclados que responden al instante.",
    products: [
      { id: "1", title: "Taza Mágica Gameboy (Cambia con Calor)", price: "19,03 €", imageUrl: "https://m.media-amazon.com/images/I/71alMT8fYrL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B06WRVFRJV?tag=giftgenius-21", badges: ["Top Ventas", "Mejor Valorado"] },
      { id: "2", title: "Teclado Mecánico RGB Compacto (60%)", price: "39,99 €", imageUrl: "https://m.media-amazon.com/images/I/610Wsop5scL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0FFMRQNLW/?tag=giftgenius-21", badges: ["Calidad/Precio"] },
      { id: "3", title: "Webcam Streaming 1080P 60FPS", price: "27,99 €", imageUrl: "https://m.media-amazon.com/images/I/61LPTw0M-qL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0C76ZD7KV?tag=giftgenius-21" },
      { id: "4", title: "Soporte Auriculares RGB + Carga Inalámbrica", price: "27,95 €", imageUrl: "https://m.media-amazon.com/images/I/61JI6UgtcJL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DGGNPHP8?tag=giftgenius-21" },
      { id: "5", title: "Alfombrilla XXL Personalizable", price: "12,90 €", imageUrl: "https://m.media-amazon.com/images/I/71CH4+tl-DL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DK213H68?tag=giftgenius-21" },
      { id: "6", title: "Kit de Limpieza para Pantallas (Spray + Microfibra)", price: "14,45 €", imageUrl: "https://m.media-amazon.com/images/I/61HKZx64DkL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DCCD7FFX?tag=giftgenius-21" },
      { id: "7", title: "Ratón Gaming RGB Ultraligero", price: "13,99 €", imageUrl: "https://m.media-amazon.com/images/I/61pVBqHabaL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07F9S3P3D?tag=giftgenius-21" },
      { id: "8", title: "Calcetines Divertidos 'Do Not Disturb'", price: "7,99 €", imageUrl: "https://m.media-amazon.com/images/I/71DbBE2+WfL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08HS67FYQ?tag=giftgenius-21" },
      { id: "9", title: "Limpiador Multifunción Teclado y Auriculares", price: "10,69 €", imageUrl: "https://m.media-amazon.com/images/I/61PRCP-+vEL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BZCTRKNK?tag=giftgenius-21" },
      { id: "10", title: "Auriculares Gaming Multiplataforma (PC/Consola)", price: "29,99 €", imageUrl: "https://m.media-amazon.com/images/I/61jmLD3hYaL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09DPR2LZW?tag=giftgenius-21" },
      { id: "11", title: "Paneles de Luz Hexagonales RGB (Pack 8)", price: "25,72 €", imageUrl: "https://m.media-amazon.com/images/I/61-3jrmXtzL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0D91YRTVY?tag=giftgenius-21" },
      { id: "12", title: "Portavasos Giratorio para Escritorio", price: "15,69 €", imageUrl: "https://m.media-amazon.com/images/I/61wSbS6zXlL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DSJ8SGFH?tag=giftgenius-21" }
    ]
  },
  {
    slug: "enfermeros",
    title: "Regalos para Enfermeros",
    description: "Herramientas clínicas y accesorios que mejoran el turno. Nada de tazas genéricas.",
    content: "Los enfermeros pasan 12 horas de pie, con los bolsillos como oficina y los pies como transporte. La clave: **utilidad real**. Fonendoscopios, tijeras clínicas, organización para el uniforme, zuecos que aguantan el ritmo. Cosas que un enfermero reconoce al instante y que le facilitan el día.",
    products: [
      { id: "1", title: "Zuecos Sanitarios Calzuro (Esterilizables)", price: "73,36 €", imageUrl: "https://m.media-amazon.com/images/I/41JdoFGq0XL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BGCCQ57Z?tag=giftgenius-21", badges: ["Top Ventas"] },
      { id: "2", title: "Organizador de Bolsillo 'Salvabolsillos'", price: "12,99 €", imageUrl: "https://m.media-amazon.com/images/I/61kdXbdNZVL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0FHBC4N6Y?tag=giftgenius-21", badges: ["Calidad/Precio"] },
      { id: "3", title: "Fonendoscopio 3M Littmann Classic III", price: "63,49 €", imageUrl: "https://m.media-amazon.com/images/I/51uL7DduWkL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B000F4W1R6?tag=giftgenius-21", badges: ["Mejor Valorado"] },
      { id: "4", title: "Reloj de Enfermería Silicona (Pack 3)", price: "9,89 €", imageUrl: "https://m.media-amazon.com/images/I/71vqsdKV8IL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BLY9MTVV?tag=giftgenius-21" },
      { id: "5", title: "Crema de Manos Reparación Intensiva", price: "6,15 €", imageUrl: "https://m.media-amazon.com/images/I/61HHij2yPhL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07C5W53C3?tag=giftgenius-21" },
      { id: "6", title: "Calcetines Compresión Graduada (Estampados)", price: "19,78 €", imageUrl: "https://m.media-amazon.com/images/I/71PI6fHYcJL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B09DFLLLVK?tag=giftgenius-21" },
      { id: "7", title: "Linterna de Diagnóstico LED (Aluminio)", price: "10,99 €", imageUrl: "https://m.media-amazon.com/images/I/51qioE5DXcL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BVB4146F?tag=giftgenius-21" },
      { id: "8", title: "Gorro de Quirófano 'Signo Vital'", price: "10,99 €", imageUrl: "https://m.media-amazon.com/images/I/61RaSvTanGL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0FHV7Z913?tag=giftgenius-21" },
      { id: "9", title: "Abre-ampollas de Seguridad", price: "10,99 €", imageUrl: "https://m.media-amazon.com/images/I/71hZapHrysL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0GDWFJX6K?tag=giftgenius-21" },
      { id: "10", title: "Lanyard 'It's Fine' (Gracioso)", price: "8,99 €", imageUrl: "https://m.media-amazon.com/images/I/71NT65Dz-iL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DHZQ588T?tag=giftgenius-21" },
      { id: "11", title: "Forro Polar Sanitario Personalizado", price: "37,95 €", imageUrl: "https://m.media-amazon.com/images/I/41YoOGkxW+L._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DH8H6LJZ?tag=giftgenius-21" },
      { id: "12", title: "Bolígrafos Jeringuilla (Pack Divertido)", price: "4,41 €", imageUrl: "https://m.media-amazon.com/images/I/61swmr004EL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0CMC3QGR6?tag=giftgenius-21" }
    ]
  },
  {
    slug: "programadores",
    title: "Regalos para Programadores",
    description: "Teclados ergonómicos, libros de código y gadgets que un dev de verdad usa.",
    content: "Los programadores priorizan eficiencia, ergonomía y un toque de humor geek. Hardware que cuida la postura (teclados mecánicos, ratones verticales), gadgets que ayudan a concentrarse (auriculares, barras de luz) y algún detalle que les saca una sonrisa entre líneas de código. Nada que acabe en el cajón.",
    products: [
      { id: "1", title: "Webcam Logitech C920s HD Pro", price: "61,06€", imageUrl: "https://m.media-amazon.com/images/I/71eGb1FcyiL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B006A2Q81M?tag=giftgenius-21", badges: ["Top Ventas"] },
      { id: "2", title: "Auriculares Sony Noise Cancelling (WH-CH720N)", price: "79,00€", imageUrl: "https://m.media-amazon.com/images/I/71iWkjXCu9L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BTDX26B2?tag=giftgenius-21", badges: ["Calidad/Precio", "Mejor Valorado"] },
      { id: "3", title: "Ratón Vertical Ergonómico Logitech Lift", price: "81,99€", imageUrl: "https://m.media-amazon.com/images/I/61OkuiCWbDL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B07W4DGC27?tag=giftgenius-21" },
      { id: "4", title: "Libro: Clean Code (Ed. Español)", price: "57,19 €", imageUrl: "https://m.media-amazon.com/images/I/81Rnac2Fq+L._SY385_.jpg", amazonLink: "https://www.amazon.es/dp/0135398576?tag=giftgenius-21" },
      { id: "5", title: "Monitor UltraWide 34' USB-C", price: "438,99€", imageUrl: "https://m.media-amazon.com/images/I/61KUUMHO4KL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0FT3XYRTJ?tag=giftgenius-21" },
      { id: "6", title: "Elgato Stream Deck MK.2", price: "169,99€", imageUrl: "https://m.media-amazon.com/images/I/61gtdFnK+UL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09738CV2G?tag=giftgenius-21" },
      { id: "7", title: "Power Bank 65W (Carga Laptop)", price: "29,99 €", imageUrl: "https://m.media-amazon.com/images/I/61fS6kG8vxL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0F2MYWRR1?tag=giftgenius-21" },
      { id: "8", title: "Docking Station USB-C 10 en 1", price: "37,99€", imageUrl: "https://m.media-amazon.com/images/I/71gz1Ln4LYL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0CB5YW4SY?tag=giftgenius-21" },
      { id: "9", title: "Barra de Luz para Monitor (ScreenBar)", price: "49,99€", imageUrl: "https://m.media-amazon.com/images/I/51p1Ui5sa7L._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08DKQ3JG1?tag=giftgenius-21" },
      { id: "10", title: "Soporte Elevador de Portátil (Aluminio)", price: "26,99€", imageUrl: "https://m.media-amazon.com/images/I/61EMzItW34L._AC_SY879_.jpg", amazonLink: "https://www.amazon.es/dp/B0FX4LFBD8?tag=giftgenius-21" },
      { id: "11", title: "YubiKey 5 NFC (Llave de Seguridad)", price: "70,18€", imageUrl: "https://m.media-amazon.com/images/I/41DkFsG8yEL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B08DHL1YDL?tag=giftgenius-21" },
      { id: "12", title: "Taza 'My Code Doesn't Work'", price: "15,90€", imageUrl: "https://m.media-amazon.com/images/I/71c0pxuVxnL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0BKGMVZFG?tag=giftgenius-21" }
    ]
  },
  {
    slug: "profesores",
    title: "Regalos para Profesores y Maestros",
    description: "Papelería útil, organización para el aula y detalles que un profe valora.",
    content: "Los profesores corrigen hasta tarde y necesitan energía. Mezclamos utilidad (organizadores, plastificadoras, agendas) con caprichos que se agradecen (vasos térmicos, sellos de motivación). Cosas para el aula y para sus descansos. Nada genérico.",
    products: [
      { id: "1", title: "Plastificadora A4 Rápida (Kit Inicial)", price: "18,99€", imageUrl: "https://m.media-amazon.com/images/I/61MTGZ7GiWL._AC_UY218_.jpg", amazonLink: "https://www.amazon.es/dp/B0DFCG1PJL?tag=giftgenius-21", badges: ["Top Ventas", "Mejor Valorado"] },
      { id: "2", title: "Mini Impresora de Etiquetas Térmica", price: "24,99€", imageUrl: "https://m.media-amazon.com/images/I/61g8I1U4lDL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0CX8P66SM?tag=giftgenius-21", badges: ["Calidad/Precio"] },
      { id: "3", title: "Subrayadores Pastel Zebra Mildliner (Pack)", price: "5,24€", imageUrl: "https://m.media-amazon.com/images/I/61lBb-ebSmL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0DMZG9WWM?tag=giftgenius-21" },
      { id: "4", title: "Tote Bag Profesora (Diseño Libros)", price: "9,79 €", imageUrl: "https://m.media-amazon.com/images/I/51GtUjrZP2L._AC_SX522_.jpg", amazonLink: "https://www.amazon.es/dp/B071FK1P3J?tag=giftgenius-21" },
      { id: "5", title: "Vaso Térmico Antigoteo para Café", price: "9,99€", imageUrl: "https://m.media-amazon.com/images/I/71rWFGXUWxL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BR3V9KY1?tag=giftgenius-21" },
      { id: "6", title: "Estuche Escolar Telescópico (De Pie)", price: "19,99 €", imageUrl: "https://m.media-amazon.com/images/I/71pBuyHadGL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09MFJLLSY?tag=giftgenius-21" },
      { id: "7", title: "Sellos de Motivación para Corregir", price: "9,99€", imageUrl: "https://m.media-amazon.com/images/I/71IrcBoyMPL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0G1M917LM?tag=giftgenius-21" },
      { id: "8", title: "Agenda del Profesor (Semana Vista)", price: "24,50€", imageUrl: "https://m.media-amazon.com/images/I/71XHJhD4YYL._AC_SY879_.jpg", amazonLink: "https://www.amazon.es/dp/B0DV5SDK6X?tag=giftgenius-21" },
      { id: "9", title: "Organizador de Escritorio Bambú", price: "23,99€", imageUrl: "https://m.media-amazon.com/images/I/61mTsueYW7L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0F6TWMY12?tag=giftgenius-21" },
      { id: "10", title: "Bolígrafos Borrables Premium (Cuerpo Metal)", price: "9,59€", imageUrl: "https://m.media-amazon.com/images/I/71cHghYwl3L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0CNG2SWKK?tag=giftgenius-21" },
      { id: "11", title: "Fiambrera Bento Japonesa (Hermética)", price: "13,99€", imageUrl: "https://m.media-amazon.com/images/I/71hsAIJD3QL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BRN27Y2B?tag=giftgenius-21" },
      { id: "12", title: "Mando Presentador Inalámbrico (Puntero)", price: "12,99€", imageUrl: "https://m.media-amazon.com/images/I/41aOTTYrFvL._AC_UY218_.jpg  ", amazonLink: "https://www.amazon.es/dp/B0CW5VC6NN?tag=giftgenius-21" }
    ]
  },
  {
    slug: "cocineros",
    title: "Regalos para Cocineros y Chefs",
    description: "Utensilios que se usan de verdad en cocina. Nada que acabe en el cajón.",
    content: "Da igual si es chef profesional o aficionado que se cree de MasterChef: los utensilios que marcan la diferencia son los mismos. Cuchillos de verdad, piedras de afilar, termómetros y organización. Nada de gadgets de teletienda que acaban en el fondo del armario.",
    products: [
      { id: "1", title: "Cuchillo Santoku Arcos Riviera 18cm", price: "47,58€", imageUrl: "https://m.media-amazon.com/images/I/41fIPFqleyL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B005LR6C7C?tag=giftgenius-21", badges: ["Top Ventas", "Calidad/Precio"] },
      { id: "2", title: "Rallador Microplane Premium Zester", price: "23,95€", imageUrl: "https://m.media-amazon.com/images/I/51QX8v-PWkL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B00151WA06?tag=giftgenius-21", badges: ["Mejor Valorado"] },
      { id: "3", title: "Soplete de Cocina Profesional (Recargable)", price: "19,99€", imageUrl: "https://m.media-amazon.com/images/I/51Bu6ursJ0L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B08Y5M5V3X?tag=giftgenius-21" },
      { id: "4", title: "Piedra de Afilar Japonesa (Grano 1000/6000)", price: "15,23€", imageUrl: "https://m.media-amazon.com/images/I/71gS-NlrfIL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B089HXZVQS?tag=giftgenius-21" },
      { id: "5", title: "Termómetro de Cocina Instantáneo", price: "14,99€", imageUrl: "https://m.media-amazon.com/images/I/6145yilthgL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B01LXI5HYH?tag=giftgenius-21" },
      { id: "6", title: "Mandolina de Cocina Ajustable", price: "54,44€", imageUrl: "https://m.media-amazon.com/images/I/61tf4OhGIBL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B004E45NXC?tag=giftgenius-21" },
      { id: "7", title: "Delantal Chef Lona Encerada y Cuero", price: "25,00€", imageUrl: "https://m.media-amazon.com/images/I/61FO1Nvoy5L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B07FSHBC1T?tag=giftgenius-21" },
      { id: "8", title: "Kit Sushi Maker de Bambú", price: "25,99€", imageUrl: "https://m.media-amazon.com/images/I/91m8zzLKovL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0G233P492?tag=giftgenius-21" },
      { id: "9", title: "Báscula Digital Precisión 1g", price: "9,99€", imageUrl: "https://m.media-amazon.com/images/I/61wIruIxTVL._SX522_.jpg", amazonLink: "https://www.amazon.es/dp/B0C7VC6D92?tag=giftgenius-21" },
      { id: "10", title: "Molinillo Pimienta Eléctrico (Luz LED)", price: "39,99€", imageUrl: "https://m.media-amazon.com/images/I/81SVY8UPQPL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0DBSQ5GZC?tag=giftgenius-21" },
      { id: "11", title: "Máquina Pasta Fresca Acero Inoxidable", price: "189,00€", imageUrl: "https://m.media-amazon.com/images/I/810imIDIeCL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09LLH82R7?tag=giftgenius-21" },
      { id: "12", title: "Libro: La Cocina y los Alimentos (Harold McGee)", price: "44,90€", imageUrl: "https://m.media-amazon.com/images/I/A1tXTmvUh+L._SY466_.jpg", amazonLink: "https://www.amazon.es/dp/8483067447?tag=giftgenius-21" }
    ]
  },
  {
    slug: "opositores",
    title: "Regalos para Opositores y Estudiantes",
    description: "Lo que necesitan para estudiar horas: ergonomía, concentración y organización.",
    content: "Horas en la silla, cervicales cargadas y distracción constante. El opositor agradece todo lo que hace el estudio más cómodo o eficiente: soportes para la espalda, temporizadores Pomodoro, tapones para el ruido, agendas específicas. Pequeñas ayudas que suman cuando las horas se acumulan.",
    products: [
      { id: "1", title: "Pack Subrayadores Stabilo Boss Pastel (15 uds)", price: "22,58€", imageUrl: "https://m.media-amazon.com/images/I/7106mm4gx5L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B08S76ZLVJ?tag=giftgenius-21", badges: ["Top Ventas"] },
      { id: "2", title: "Temporizador Visual 60 Min (Pomodoro)", price: "12,99€", imageUrl: "https://m.media-amazon.com/images/I/6132ZKvgWXL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0CZZXXSCZ?tag=giftgenius-21", badges: ["Calidad/Precio"] },
      { id: "3", title: "Atril de Madera Regulable (Lectura)", price: "39,99€", imageUrl: "https://m.media-amazon.com/images/I/71I4KYkNgVL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0C3TSQ4VQ?tag=giftgenius-21", badges: ["Mejor Valorado"] },
      { id: "4", title: "Tapones Loop Quiet (Aislante Ruido)", price: "24,95€", imageUrl: "https://m.media-amazon.com/images/I/51vun8qtNlL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg", amazonLink: "https://www.amazon.es/dp/B0D3V61JC8?tag=giftgenius-21" },
      { id: "5", title: "Cojín Gel Ortopédico (Antiescaras)", price: "24,99€", imageUrl: "https://m.media-amazon.com/images/I/81Qk0lpQKGL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0D5YK2KFH?tag=giftgenius-21" },
      { id: "6", title: "Flexo LED Escritorio (Cuidado Visual)", price: "20,99€", imageUrl: "https://m.media-amazon.com/images/I/51qTF5fnhKL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0D8PY8CRD?tag=giftgenius-21" },
      { id: "7", title: "Reposapiés Ergonómico Ajustable", price: "36,99€", imageUrl: "https://m.media-amazon.com/images/I/71j3meHJQlL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0924JX1V7?tag=giftgenius-21" },
      { id: "8", title: "Botella Agua Motivacional 2L (Con Horas)", price: "9,59€", imageUrl: "https://m.media-amazon.com/images/I/61M0AXkvCWL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BNJ16R2S?tag=giftgenius-21" },
      { id: "9", title: "Opogenda: Agenda para Opositores", price: "15,95€", imageUrl: "https://m.media-amazon.com/images/I/61JhGWX1JHL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BYHTPSFK?tag=giftgenius-21" },
      { id: "10", title: "Pizarra de Cristal para Escritorio", price: "98,98€", imageUrl: "https://m.media-amazon.com/images/I/61vKZ+amu6L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BX2MPKTR?tag=giftgenius-21" },
      { id: "11", title: "Kit Supervivencia Opositor (Taza + Chuches)", price: "15,90€", imageUrl: "https://m.media-amazon.com/images/I/81tINEXro-L._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B07DNWZBDN?tag=giftgenius-21" },
      { id: "12", title: "Organizador Giratorio Material Oficina", price: "8,99€", imageUrl: "https://m.media-amazon.com/images/I/61Vs1Km3FRL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0D42322CV?tag=giftgenius-21" }
    ]
  },
  {
    slug: "abogados",
    title: "Regalos para Abogados y Juristas",
    description: "Accesorios de despacho con clase que transmiten profesionalidad.",
    content: "En derecho importan la imagen y la organización. Un regalo para abogado combina elegancia clásica con utilidad: maletines, portafolios, bolígrafos de firma, decoración de despacho (mazos, estatuas). Sirve para celebrar un primer caso o para un bufete ya consolidado.",
    products: [
      { id: "1", title: "Bolígrafo Parker Jotter (Acero Inox)", price: "7,10€", imageUrl: "https://m.media-amazon.com/images/I/51yQrjjPTaL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B07S2NFB17?tag=giftgenius-21", badges: ["Top Ventas", "Calidad/Precio"] },
      { id: "2", title: "Maletín de Piel Profesional (Slim)", price: "52,99€", imageUrl: "https://m.media-amazon.com/images/I/914hQfRF9+L._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B01N0INMFG?tag=giftgenius-21", badges: ["Mejor Valorado"] },
      { id: "3", title: "Mazo de Juez de Madera (Decoración)", price: "18,99€", imageUrl: "https://m.media-amazon.com/images/I/612tI++sfhL._AC_UY218_.jpg", amazonLink: "https://www.amazon.es/dp/B0DK5BN1PJ?tag=giftgenius-21" },
      { id: "4", title: "Portafolios A4 Piel Sintética Premium", price: "20,99€", imageUrl: "https://m.media-amazon.com/images/I/61-RVOUt9zL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B01MEBQ37R?tag=giftgenius-21" },
      { id: "5", title: "Estatua Dama de la Justicia (30cm)", price: "9,80€", imageUrl: "https://m.media-amazon.com/images/I/61FSiYvGCOL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0FXWQYBHW?tag=giftgenius-21" },
      { id: "6", title: "Organizador Escritorio Madera Multifunción", price: "32,39€", imageUrl: "https://m.media-amazon.com/images/I/71MG8f+lhqL._AC_SL1500_.jpg", amazonLink: "https://www.amazon.es/dp/B094QMRGWB?tag=giftgenius-21" },
      { id: "7", title: "Taza Abogado: 'No discuto, explico'", price: "12,95€", imageUrl: "https://m.media-amazon.com/images/I/614DSDv4N4L._AC_SL1350_.jpg", amazonLink: "https://www.amazon.es/dp/B0FQ8JDJW1?tag=giftgenius-21" },
      { id: "8", title: "Gemelos Camisa 'Balanza Justicia'", price: "22,50€", imageUrl: "https://m.media-amazon.com/images/I/61MuLo9mY5L._AC_SY695_.jpg", amazonLink: "https://www.amazon.es/dp/B07C3ZHN34?tag=giftgenius-21" },
      { id: "9", title: "Pisapapeles Cristal Grabado Láser", price: "13,99€", imageUrl: "https://m.media-amazon.com/images/I/71mYmxUUfzL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0DRWHLC4C?tag=giftgenius-21" },
      { id: "10", title: "Tarjetero de Escritorio Metálico", price: "8,99€", imageUrl: "https://m.media-amazon.com/images/I/81FY+tVcFWL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0CBJSFZKC?tag=giftgenius-21" },
      { id: "11", title: "Libro: Leyes de Murphy para Abogados", price: "16,99 €", imageUrl: "https://m.media-amazon.com/images/I/710exyUw9iL._SY522_.jpg", amazonLink: "https://www.amazon.es/dp/8484600505?tag=giftgenius-21" },
      { id: "12", title: "Lámpara Estilo Banquero (Cristal Verde)", price: "164,90€", imageUrl: "https://m.media-amazon.com/images/I/5148-RZE+KL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B01CT83UGG?tag=giftgenius-21" }
    ]
  },
  {
    slug: "fotografos",
    title: "Regalos para Fotógrafos",
    description: "Accesorios que protegen el equipo, limpian lentes y mejoran las fotos.",
    content: "Las cámaras son muy personales; mejor no meterse. Lo que sí agradecen todos: proteger el equipo, limpiar lentes, estabilizar la imagen y jugar con la luz. Tarjetas SD, trípodes, mochilas, reflectores. Funciona igual para profesionales que para aficionados.",
    products: [
      { id: "1", title: "Tarjeta SD SanDisk Extreme Pro (128GB)", price: "38,99€", imageUrl: "https://m.media-amazon.com/images/I/81wwLOgkLgL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09X7FXHVJ?tag=giftgenius-21", badges: ["Top Ventas"] },
      { id: "2", title: "Reflector de Luz 5 en 1 (Plegable)", price: "19,49€", imageUrl: "https://m.media-amazon.com/images/I/61zzFMdNi3S._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B002ZIVKAE?tag=giftgenius-21", badges: ["Calidad/Precio"] },
      { id: "3", title: "Cámara Instantánea Instax Mini Evo", price: "183,79€", imageUrl: "https://m.media-amazon.com/images/I/513tgZCijEL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0C8HD6F5W?tag=giftgenius-21", badges: ["Mejor Valorado"] },
      { id: "4", title: "Trípode Flexible GorillaPod (Para Reflex)", price: "69,99€", imageUrl: "https://m.media-amazon.com/images/I/51L3v-ExuOL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0C81TNMP4?tag=giftgenius-21" },
      { id: "5", title: "Mochila Fotográfica Impermeable Modular", price: "69,99€", imageUrl: "https://m.media-amazon.com/images/I/71NBojh9ODL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BX3X4B4P?tag=giftgenius-21" },
      { id: "6", title: "Clip de Cámara para Mochila (Aluminio)", price: "59,95€", imageUrl: "https://m.media-amazon.com/images/I/71wIBbgm-aL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0F1Y7FT92?tag=giftgenius-21" },
      { id: "7", title: "Disco Duro Rugerizado 2TB (Antigolpes)", price: "142,78€", imageUrl: "https://m.media-amazon.com/images/I/717QYwBEEIL._AC_SY300_SX300_QL70_ML2_.jpg", amazonLink: "https://www.amazon.es/dp/B08GTYFC37?tag=giftgenius-21" },
      { id: "8", title: "Kit de Limpieza Sensor y Lentes", price: "5,53€", imageUrl: "https://m.media-amazon.com/images/I/61k6tggXi3L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0CW522W9W?tag=giftgenius-21" },
      { id: "9", title: "Taza Termo Objetivo Cámara (Réplica)", price: "10,99€", imageUrl: "https://m.media-amazon.com/images/I/61LArg-KQjL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B00RD9L7R6?tag=giftgenius-21" },
      { id: "10", title: "Lensball: Bola de Cristal Fotografía", price: "18,29€", imageUrl: "https://m.media-amazon.com/images/I/81KbXVsZMtL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B01NCM3AH4?tag=giftgenius-21" },
      { id: "11", title: "Correa de Cámara Vintage (Universal)", price: "35,95€", imageUrl: "https://m.media-amazon.com/images/I/511Fk0JMR+L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0C2VHDN2K?tag=giftgenius-21" },
      { id: "12", title: "Caja de Luz Portátil (Fotografía Producto)", price: "42,99€", imageUrl: "https://m.media-amazon.com/images/I/71ZxMRHgVxL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0936VWSV7?tag=giftgenius-21" }
    ]
  },
  {
    slug: "viajeros",
    title: "Regalos para Viajeros",
    description: "Gadgets ligeros y prácticos para quien viaja a menudo.",
    content: "Quien viaja mucho prioriza espacio y comodidad. Regalos que resuelven problemas reales: meter más ropa en menos sitio, dormir en el avión sin dolor de cuello, cargar el móvil en cualquier enchufe. Ligero, resistente y útil. Lo que lleva en la mochila en el próximo viaje.",
    products: [
      { id: "1", title: "Mochila Cabina 40x20x25 (Ryanair/Vueling)", price: "29,99€", imageUrl: "https://m.media-amazon.com/images/I/718pNNcyJIL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0D59MW2N3?tag=giftgenius-21", badges: ["Top Ventas"] },
      { id: "2", title: "Organizadores de Equipaje (Set 8 Piezas)", price: "19,89€", imageUrl: "https://m.media-amazon.com/images/I/61NreUMk5GL._AC_SY450_.jpg", amazonLink: "https://www.amazon.es/dp/B09SHJHN42?tag=giftgenius-21", badges: ["Calidad/Precio"] },
      { id: "3", title: "Adaptador Enchufe Universal (150 Países)", price: "17,00€", imageUrl: "https://m.media-amazon.com/images/I/61jD5viM+AL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0D95S3MVQ?tag=giftgenius-21", badges: ["Mejor Valorado"] },
      { id: "4", title: "Almohada Viaje Viscoelástica (Funda Lavable)", price: "22,69€", imageUrl: "https://m.media-amazon.com/images/I/61rf3ZP9LcL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09ZHWMDCG?tag=giftgenius-21" },
      { id: "5", title: "Mapa Mundi para Rascar (Póster XXL)", price: "24,99€", imageUrl: "https://m.media-amazon.com/images/I/919B0BhkBuL._SY342_.jpg", amazonLink: "https://www.amazon.es/dp/B08DKNFSLV?tag=giftgenius-21" },
      { id: "6", title: "Báscula Digital de Mano para Maletas", price: "6,99€", imageUrl: "https://m.media-amazon.com/images/I/61oh-62mZiL._SX522_.jpg", amazonLink: "https://www.amazon.es/dp/B0DFGF6R1Y?tag=giftgenius-21" },
      { id: "7", title: "Power Bank Compacta 10000mAh", price: "12,99€", imageUrl: "https://m.media-amazon.com/images/I/61aOhG2hB5L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0DPSLQFDW?tag=giftgenius-21" },
      { id: "8", title: "Funda Pasaporte con Bloqueo RFID", price: "6,59€", imageUrl: "https://m.media-amazon.com/images/I/71EFi0kPlpL._AC_SX425_.jpg", amazonLink: "https://www.amazon.es/dp/B0FP54ZVYY?tag=giftgenius-21" },
      { id: "9", title: "Botella Filtro Agua LifeStraw (Potabilizadora)", price: "16,95€", imageUrl: "https://m.media-amazon.com/images/I/71nKg9SLuaL._SX522_.jpg", amazonLink: "https://www.amazon.es/dp/B0CT3R7RS5?tag=giftgenius-21" },
      { id: "10", title: "Neceser Colgante Impermeable (Gran Capacidad)", price: "34,99€", imageUrl: "https://m.media-amazon.com/images/I/8168EUT3y0L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0FL6Y2W24?tag=giftgenius-21" },
      { id: "11", title: "Diario de Viaje Estilo Vintage (Cuero)", price: "21,99€", imageUrl: "https://m.media-amazon.com/images/I/71gFfDo5F5L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B01N24BYQ7?tag=giftgenius-21" },
      { id: "12", title: "Hamaca Camping Ultraligera (Nylon)", price: "32,99€", imageUrl: "https://m.media-amazon.com/images/I/618pKE7G3TL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0B53JW8K6?tag=giftgenius-21" }
    ]
  },
];

export function getNicheBySlug(slug: string): Niche | undefined {
  return NICHE_DATA.find((n) => n.slug === slug);
}

export function getAllSlugs(): string[] {
  return NICHE_DATA.map((n) => n.slug);
}