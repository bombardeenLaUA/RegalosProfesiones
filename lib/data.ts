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
    title: "Los Mejores Regalos para Arquitectos",
    description: "Descubre las mejores ideas de regalos para arquitectos. Herramientas profesionales, maquetas, libros de diseño y accesorios.",
    content: "Los arquitectos viven en el cruce entre el arte y la ingeniería, y sus regalos deben reflejar esa dualidad. No se trata solo de regalar 'cosas de oficina', sino de encontrar herramientas que respeten su obsesión por la estética, la precisión y el diseño. Un buen regalo para un arquitecto suele caer en tres categorías: **productividad**, **inspiración** o **confort**. Olvida los regalos genéricos; busca materiales premium, acabados mate y diseño minimalista.",
    products: [
      { id: "1", title: "Bolígrafo Digital Metapen", price: "32,99€", imageUrl: "https://m.media-amazon.com/images/I/41yUOq1wFtL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09ZTXVNVD?tag=giftgenius-21", badges: ["🏆 Top Ventas","💎 Calidad/Precio"] },      
      { id: "2", title: "Libro: El Arquitecto Emprendedor", price: "15,36€", imageUrl: "https://m.media-amazon.com/images/I/61EuFK10IAL._SY466_.jpg", amazonLink: "https://www.amazon.es/dp/B0DR6MB9DQ?tag=giftgenius-21" },
      { id: "3", title: "Escala de Arquitecto Triangular", price: "11,99 €", imageUrl: "https://m.media-amazon.com/images/I/71TkeOvf3HL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B079C1HKB8?tag=giftgenius-21" },
      { id: "4", title: "Tubo Portaplanos Extensible", price: "22,99 €", imageUrl: "https://m.media-amazon.com/images/I/61PSNxirOoL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0F381KSTZ?tag=giftgenius-21" },
      { id: "5", title: "Alfombrilla de Corte A3", price: "6,31€", imageUrl: "https://m.media-amazon.com/images/I/61QsK82thtL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B07TT872BF?tag=giftgenius-21", badges: ["⭐ Mejor Valorado"] },
      { id: "6", title: "Winsor & Newton Promarker Arquitectura Set", price: "2,44€", imageUrl: "https://m.media-amazon.com/images/I/61+nTQraHsL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B089CQRLLM?tag=giftgenius-21" },
      { id: "7", title: "Apple iPad Pro M4", price: "89,89 €", imageUrl: "https://m.media-amazon.com/images/I/6198CBucttL._AC_SX522_.jpg", amazonLink: "https://www.amazon.es/dp/B0D3J9P7RK?tag=giftgenius-21" },
      { id: "8", title: "Portaminas Mecánicos Artísticos", price: "13,99€", imageUrl: "https://m.media-amazon.com/images/I/71Hitb05k5L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B07KK8VT4S?tag=giftgenius-21" },
      { id: "9", title: "Llavero de Arquitecto", price: "14,59 €", imageUrl: "https://m.media-amazon.com/images/I/61hMTPgo-rL._AC_SX569_.jpg", amazonLink: "https://www.amazon.es/dp/B08241S43M?tag=giftgenius-21" },
      { id: "10", title: "Plantillas Dibujo Técnico Arquitectura", price: "2,17 €", imageUrl: "https://m.media-amazon.com/images/I/719nwRZJhIL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B07T837682?tag=giftgenius-21" },
      { id: "11", title: "Medidor Láser Portátil", price: "25,99€", imageUrl: "https://m.media-amazon.com/images/I/61bOcqIpMZL._AC_SX425_.jpg", amazonLink: "https://www.amazon.es/dp/B0863RK1KX?tag=giftgenius-21" },
      { id: "12", title: "Taza Arquitecto Divertida", price: "€49,99", imageUrl: "https://m.media-amazon.com/images/I/6116yjZyotL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0CLBNM1MF?tag=giftgenius-21" }
    ]
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
      { id: "12", title: "Portavasos Escritorio Antiderrames Giratorio para Gaming", price: "15,69 €", imageUrl: "https://m.media-amazon.com/images/I/61wSbS6zXlL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0DSJ8SGFH" }
    ]
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
      { id: "12", title: "Bolígrafos con forma de Jeringuilla", price: "4,41 €", imageUrl: "https://m.media-amazon.com/images/I/61swmr004EL._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B0CMC3QGR6" }
    ]
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
      { id: "12", title: "Lámpara de Monitor", price: "49,99€", imageUrl: "https://m.media-amazon.com/images/I/51p1Ui5sa7L._AC_UL320_.jpg", amazonLink: "https://www.amazon.es/dp/B08DKQ3JG1" }
    ]
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
      { id: "12", title: "Máquina Plastificadora Hojas A4", price: "18,99€", imageUrl: "https://m.media-amazon.com/images/I/61MTGZ7GiWL._AC_UY218_.jpg", amazonLink: "https://www.amazon.es/dp/B0DFCG1PJL" }
    ]
  },
  {
    slug: "cocineros",
    title: "Los Mejores Regalos para Cocineros y Chefs",
    description: "Utensilios premium y gadgets gourmet para quienes disfrutan entre fogones.",
    content: "Cocinar es un arte, y todo artista necesita sus herramientas. Ya sea para un chef profesional o ese amigo que se cree concursante de MasterChef, hemos elegido los utensilios que marcan la diferencia. Nada de gadgets inútiles de teletienda: aquí hay cuchillos que cortan el aire, organización inteligente y caprichos gourmet que elevarán sus platos al siguiente nivel.",
    products: [
      { id: "1", title: "Cuchillo Santoku Arcos (Serie Riviera)", price: "29,68€", imageUrl: "https://m.media-amazon.com/images/I/41fIPFqleyL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B005LR6C7C", badges: ["Top Ventas", "Calidad/Precio"] },
      { id: "2", title: "Rallador Microplane Premium (El Original)", price: "19,96€", imageUrl: "https://m.media-amazon.com/images/I/51QX8v-PWkL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B00151WA06", badges: ["Mejor Valorados"] },
      { id: "3", title: "Soplete de Cocina Profesional Recargable", price: "19,99€", imageUrl: "https://m.media-amazon.com/images/I/51Bu6ursJ0L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B08Y5M5V3X" },
      { id: "4", title: "Piedra de Afilar Doble Grano (1000/6000)", price: "15,23€", imageUrl: "https://m.media-amazon.com/images/I/71gS-NlrfIL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B089HXZVQS" },
      { id: "5", title: "Termómetro Digital de Lectura Instantánea", price: "9,49€", imageUrl: "https://m.media-amazon.com/images/I/6145yilthgL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B01LXI5HYH" },
      { id: "6", title: "Mandolina Japonesa Ajustable", price: "54,44€", imageUrl: "https://m.media-amazon.com/images/I/61tf4OhGIBL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B004E45NXC" },
      { id: "7", title: "Delantal de Lona Encerada y Cuero (Pro)", price: "25,00€", imageUrl: "https://m.media-amazon.com/images/I/61FO1Nvoy5L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B07FSHBC1T" },
      { id: "8", title: "Kit para Hacer Sushi en Casa (Bambú)", price: "25,99€", imageUrl: "https://m.media-amazon.com/images/I/91m8zzLKovL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0G233P492" },
      { id: "9", title: "Báscula de Cocina Digital Alta Precisión", price: "9,99€", imageUrl: "https://m.media-amazon.com/images/I/61wIruIxTVL._SX522_.jpg", amazonLink: "https://www.amazon.es/dp/B0C7VC6D92" },
      { id: "10", title: "Molinillo de Pimienta Eléctrico (Gravedad)", price: "39,99€", imageUrl: "https://m.media-amazon.com/images/I/81SVY8UPQPL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0DBSQ5GZC" },
      { id: "11", title: "Máquina para Hacer Pasta Fresca (Acero)", price: "179,54€", imageUrl: "https://m.media-amazon.com/images/I/810imIDIeCL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09LLH82R7" },
      { id: "12", title: "Libro 'La Cocina y los Alimentos' (La Biblia)", price: "42,65€", imageUrl: "https://m.media-amazon.com/images/I/A1tXTmvUh+L._SY466_.jpg", amazonLink: "https://www.amazon.es/dp/8483067447" }
    ]
  },
  {
    slug: "opositores",
    title: "Regalos Útiles para Opositores y Estudiantes",
    description: "Ergonomía, concentración y motivación para quienes preparan un examen importante.",
    content: "La vida del opositor es una maratón mental y física. Horas interminables en la silla, dolores de espalda y batallas contra la distracción. Para ellos, el mejor regalo es aquel que les hace el estudio más cómodo o eficiente. Hemos seleccionado desde soportes que cuidan sus cervicales hasta herramientas de gestión del tiempo que valen su peso en oro (o en plazas).",
    products: [
      { id: "1", title: "Atril de Madera Regulable para Libros", price: "39,99€", imageUrl: "https://m.media-amazon.com/images/I/71I4KYkNgVL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0C3TSQ4VQ" },
      { id: "2", title: "Tapones para Oídos Loop Quiet (Reducción Ruido)", price: "24,95€", imageUrl: "https://m.media-amazon.com/images/I/51vun8qtNlL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg", amazonLink: "https://www.amazon.es/dp/B0D3V61JC8" },
      { id: "3", title: "Cojín de Asiento Gel Ortopédico (Ergonómico)", price: "24,99€", imageUrl: "https://m.media-amazon.com/images/I/81Qk0lpQKGL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0D5YK2KFH" },
      { id: "4", title: "Temporizador Visual 60 Minutos (Gestión Tiempo)", price: "12,24€", imageUrl: "https://m.media-amazon.com/images/I/6132ZKvgWXL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0CZZXXSCZ" },
      { id: "5", title: "Kit Subrayadores Pastel Stabilo Boss (15 uds)", price: "19,28€", imageUrl: "https://m.media-amazon.com/images/I/7106mm4gx5L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B08S76ZLVJ" },
      { id: "6", title: "Lámpara Flexo LED con Modos de Lectura", price: "20,99€", imageUrl: "https://m.media-amazon.com/images/I/51qTF5fnhKL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0D8PY8CRD" },
      { id: "7", title: "Reposapiés Ergonómico de Espuma", price: "36,99€", imageUrl: "https://m.media-amazon.com/images/I/71j3meHJQlL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0924JX1V7" },
      { id: "8", title: "Botella de Agua Motivacional 2L", price: "9,59€", imageUrl: "https://m.media-amazon.com/images/I/61M0AXkvCWL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BNJ16R2S" },
      { id: "9", title: "Opogenda (Agenda Especial Opositores)", price: "15,95€", imageUrl: "https://m.media-amazon.com/images/I/61JhGWX1JHL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BYHTPSFK" },
      { id: "10", title: "Pizarra Blanca Pequeña de Escritorio (Cristal)", price: "94,98€", imageUrl: "https://m.media-amazon.com/images/I/61vKZ+amu6L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BX2MPKTR" },
      { id: "11", title: "Taza Divertida 'Lágrimas de Opositor'", price: "16,90€", imageUrl: "https://m.media-amazon.com/images/I/61s7+p+0MQL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0GKPN86FW" },
      { id: "12", title: "Organizador Giratorio de Escritorio", price: "8,99€", imageUrl: "https://m.media-amazon.com/images/I/61Vs1Km3FRL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0D42322CV" }
    ]
  },
  {
    slug: "abogados",
    title: "Regalos Elegantes para Abogados y Juristas",
    description: "Detalles de clase, decoración de despacho y accesorios para profesionales del derecho.",
    content: "En el mundo del derecho, la imagen y la organización lo son todo. Un buen regalo para un abogado debe equilibrar la elegancia clásica con la utilidad moderna. Ya sea para celebrar un primer caso ganado o decorar un bufete consolidado, esta lista incluye desde símbolos icónicos de la justicia hasta accesorios de oficina que imponen respeto.",
    products: [
      { id: "1", title: "Mazo de Juez de Madera (Decorativo)", price: "18,99€", imageUrl: "https://m.media-amazon.com/images/I/81ykJGimnoL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BGSHC65Z" },
      { id: "2", title: "Estatua Dama de la Justicia (Bronceado)", price: "9,80€", imageUrl: "https://m.media-amazon.com/images/I/61FSiYvGCOL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0FXWQYBHW" },
      { id: "3", title: "Bolígrafo Parker Jotter (Acero Inoxidable)", price: "7,10€", imageUrl: "https://m.media-amazon.com/images/I/51yQrjjPTaL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B07S2NFB17" },
      { id: "4", title: "Portafolios de Cuero Sintético Premium", price: "20,99€", imageUrl: "https://m.media-amazon.com/images/I/61-RVOUt9zL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B01MEBQ37R" },
      { id: "5", title: "Gemelos de Camisa 'Balanza de la Justicia'", price: "16,90€", imageUrl: "https://m.media-amazon.com/images/I/61MuLo9mY5L._AC_SY695_.jpg", amazonLink: "https://www.amazon.es/dp/B07C3ZHN34" },
      { id: "6", title: "Lámpara de Banquero Clásica (Verde)", price: "164,90€", imageUrl: "https://m.media-amazon.com/images/I/5148-RZE+KL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B01CT83UGG" },
      { id: "7", title: "Pisapapeles de Cristal Grabado", price: "13,99€", imageUrl: "https://m.media-amazon.com/images/I/71mYmxUUfzL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0DRWHLC4C" },
      { id: "8", title: "Organizador de Escritorio de Madera", price: "33,29€", imageUrl: "https://m.media-amazon.com/images/I/81pfwgzl8vL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B08BHZNC2W" },
      { id: "9", title: "Taza 'No discuto, explico por qué tengo razón'", price: "16,90€", imageUrl: "https://m.media-amazon.com/images/I/61s7+p+0MQL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0GKPN86FW" },
      { id: "10", title: "Soporte para Tarjetas de Visita Metálico", price: "8,99€", imageUrl: "https://m.media-amazon.com/images/I/81FY+tVcFWL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0CBJSFZKC" },
      { id: "11", title: "Libro 'Leyes de Murphy para Abogados'", price: "14,54 €", imageUrl: "https://m.media-amazon.com/images/I/710exyUw9iL._SY522_.jpg", amazonLink: "https://www.amazon.es/dp/8484600505" },
      { id: "12", title: "Maletín para Portátil Fino y Elegante", price: "22,99€", imageUrl: "https://m.media-amazon.com/images/I/81UmyFpzOfL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09G71T638" }
    ]
  },
  {
    slug: "fotografos",
    title: "Regalos Originales para Fotógrafos",
    description: "Accesorios creativos, limpieza y gadgets para amantes de la fotografía.",
    content: "Regalar a un fotógrafo es difícil porque suelen ser muy técnicos, pero hay accesorios infalibles que todos agradecen. Hemos evitado las cámaras (eso es muy personal) y nos hemos centrado en lo que rodea la experiencia: mantener el equipo seguro, limpiar las lentes, estabilizar la imagen o jugar con la luz. Acierto seguro para profesionales y aficionados.",
    products: [
      { id: "1", title: "Cámara Instantánea Instax Mini 12", price: "79,90€", imageUrl: "https://m.media-amazon.com/images/I/513tgZCijEL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0C8HD6F5W" },
      { id: "2", title: "Trípode Flexible Joby GorillaPod", price: "67,89€", imageUrl: "https://m.media-amazon.com/images/I/51L3v-ExuOL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0C81TNMP4" },
      { id: "3", title: "Kit de Limpieza Profesional (Pera y Lápiz)", price: "5,53€", imageUrl: "https://m.media-amazon.com/images/I/61k6tggXi3L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0CW522W9W" },
      { id: "4", title: "Bola de Cristal para Fotografía (Lensball)", price: "16,79€", imageUrl: "https://m.media-amazon.com/images/I/81KbXVsZMtL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B01NCM3AH4" },
      { id: "5", title: "Correa de Cámara Vintage (Cuello/Hombro)", price: "30,55€", imageUrl: "https://m.media-amazon.com/images/I/511Fk0JMR+L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0C2VHDN2K" },
      { id: "6", title: "Tarjeta SD SanDisk Extreme Pro (Alta Velocidad)", price: "30,99€", imageUrl: "https://m.media-amazon.com/images/I/81wwLOgkLgL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09X7FXHVJ" },
      { id: "7", title: "Mochila para Cámara Impermeable y Modular", price: "45,99€", imageUrl: "https://m.media-amazon.com/images/I/71NBojh9ODL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0BX3X4B4P" },
      { id: "8", title: "Reflector de Luz 5 en 1 Plegable", price: "19,49€", imageUrl: "https://m.media-amazon.com/images/I/61zzFMdNi3S._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B002ZIVKAE" },
      { id: "9", title: "Caja de Luz Portátil para Fotografía Producto", price: "39,98€", imageUrl: "https://m.media-amazon.com/images/I/71ZxMRHgVxL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0936VWSV7" },
      { id: "10", title: "Disco Duro Externo Rugerizado (Antigolpes)", price: "142,78€", imageUrl: "https://m.media-amazon.com/images/I/717QYwBEEIL._AC_SY300_SX300_QL70_ML2_.jpg", amazonLink: "https://www.amazon.es/dp/B08GTYFC37" },
      { id: "11", title: "Clip de Captura para Mochila (Tipo Peak)", price: "49,96€", imageUrl: "https://m.media-amazon.com/images/I/71wIBbgm-aL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0F1Y7FT92" },
      { id: "12", title: "Taza Termo con Forma de Objetivo Cámara", price: "10,99€", imageUrl: "https://m.media-amazon.com/images/I/61LArg-KQjL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B00RD9L7R6" }
    ]
  },
  {
    slug: "viajeros",
    title: "Los Mejores Regalos para Viajeros",
    description: "Gadgets de viaje, organización y confort para recorrer el mundo.",
    content: "Para el que siempre tiene un billete de avión en la mano, lo más valioso es el espacio y la comodidad. Un buen regalo para viajeros debe ser ligero, resistente y resolver problemas en ruta. Desde cómo meter más ropa en menos espacio hasta cómo dormir en un avión sin romperse el cuello. Estos regalos serán sus compañeros inseparables en la próxima aventura.",
    products: [
      { id: "1", title: "Organizadores de Equipaje (Packing Cubes)", price: "18,90€", imageUrl: "https://m.media-amazon.com/images/I/61NreUMk5GL._AC_SY450_.jpg", amazonLink: "https://www.amazon.es/dp/B09SHJHN42" },
      { id: "2", title: "Almohada de Cuello Viscoelástica Premium", price: "22,69€", imageUrl: "https://m.media-amazon.com/images/I/61rf3ZP9LcL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B09ZHWMDCG" },
      { id: "3", title: "Adaptador de Enchufe Universal (Todo en 1)", price: "12,99€", imageUrl: "https://m.media-amazon.com/images/I/61jD5viM+AL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0D95S3MVQ" },
      { id: "4", title: "Mapa del Mundo para Rascar (Decoración)", price: "19,90€", imageUrl: "https://m.media-amazon.com/images/I/919B0BhkBuL._SY342_.jpg", amazonLink: "https://www.amazon.es/dp/B08DKNFSLV" },
      { id: "5", title: "Báscula Digital para Maletas", price: "6,99€", imageUrl: "https://m.media-amazon.com/images/I/61oh-62mZiL._SX522_.jpg", amazonLink: "https://www.amazon.es/dp/B0DFGF6R1Y" },
      { id: "6", title: "Power Bank Batería Externa (Carga Rápida)", price: "12,99€", imageUrl: "https://m.media-amazon.com/images/I/61aOhG2hB5L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0DPSLQFDW" },
      { id: "7", title: "Funda de Pasaporte con Bloqueo RFID", price: "5,60€", imageUrl: "https://m.media-amazon.com/images/I/71EFi0kPlpL._AC_SX425_.jpg", amazonLink: "https://www.amazon.es/dp/B0FP54ZVYY" },
      { id: "8", title: "Botella con Filtro de Agua (Lifestraw)", price: "13,90€", imageUrl: "https://m.media-amazon.com/images/I/71nKg9SLuaL._SX522_.jpg", amazonLink: "https://www.amazon.es/dp/B0CT3R7RS5" },
      { id: "9", title: "Mochila de Cabina (Apta Ryanair/Vueling)", price: "27,99€", imageUrl: "https://m.media-amazon.com/images/I/718pNNcyJIL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0D59MW2N3" },
      { id: "10", title: "Neceser de Viaje Colgante Impermeable", price: "31,49€", imageUrl: "https://m.media-amazon.com/images/I/8168EUT3y0L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0FL6Y2W24" },
      { id: "11", title: "Diario de Viaje de Cuero Recargable", price: "21,99€", imageUrl: "https://m.media-amazon.com/images/I/71gFfDo5F5L._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B01N24BYQ7" },
      { id: "12", title: "Hamaca Colgante de Camping Ultraligera", price: "29,99€", imageUrl: "https://m.media-amazon.com/images/I/618pKE7G3TL._AC_SX679_.jpg", amazonLink: "https://www.amazon.es/dp/B0B53JW8K6" }
    ]
  },
];

export function getNicheBySlug(slug: string): Niche | undefined {
  return NICHE_DATA.find((n) => n.slug === slug);
}

export function getAllSlugs(): string[] {
  return NICHE_DATA.map((n) => n.slug);
}
