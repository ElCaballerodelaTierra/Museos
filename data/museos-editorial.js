const SIC_MUSEUM_EDITORIAL = Object.fromEntries(Object.entries({
  15: {
    destacado: "Más de 14 salas reúnen objetos extraordinarios de la colección de Robert Ripley.",
    descripcion: "El recorrido presenta rarezas, curiosidades y figuras sorprendentes reunidas por el explorador y caricaturista Robert Ripley."
  },
  396: {
    destacado: "Esqueletos, órganos y preparaciones anatómicas de distintas especies animales.",
    descripcion: "Esta colección docente conserva piezas reunidas por el patólogo Manuel H. Sarvide y muestra la anatomía patológica veterinaria."
  },
  459: {
    destacado: "Más de 1,900 obras en el antiguo convento de Santa Inés.",
    descripcion: "La colección donada por José Luis Cuevas reúne arte moderno y contemporáneo de México, América Latina, Europa y Norteamérica."
  },
  502: {
    destacado: "Más de 1,600 biblias en idiomas como arameo, mixe, zapoteco y maya.",
    descripcion: "Su acervo explora la historia y diversidad de la Biblia mediante ediciones en distintas lenguas, materiales de estudio y recursos audiovisuales."
  },
  503: {
    destacado: "Un herbario dedicado al conocimiento tradicional de las plantas medicinales mexicanas.",
    descripcion: "Resguarda registros y ejemplares relacionados con la herbolaria medicinal de México, uniendo saberes tradicionales e investigación sobre plantas."
  },
  507: {
    destacado: "Exposiciones de arte moderno y contemporáneo, del video y el performance al arte digital.",
    descripcion: "El MUCA presenta exposiciones multidisciplinarias y actividades académicas y de divulgación dentro de la comunidad universitaria."
  },
  531: {
    destacado: "Piezas prehispánicas halladas por habitantes de San Miguel Teotongo.",
    descripcion: "Fundado a partir del hallazgo de un entierro ritual, el museo reúne objetos arqueológicos y testimonios aportados por vecinos de la colonia."
  },
  547: {
    destacado: "Un monumento de integración plástica con obra mural de Luis Arenal.",
    descripcion: "El conjunto combina arquitectura, escultura y pintura con una exposición sobre Benito Juárez y episodios de la historia nacional."
  },
  707: {
    destacado: "Una casona histórica con vestigios arqueológicos y piezas de talavera.",
    descripcion: "El museo ocupa un inmueble con varios usos a lo largo del tiempo; sus colecciones incluyen objetos de cerámica y hallazgos del antiguo asentamiento."
  },
  708: {
    destacado: "Un museo en un edificio del siglo XVII ligado a la historia de México e Israel.",
    descripcion: "El Instituto Cultural México-Israel ocupa una antigua construcción restaurada en el Centro Histórico y mantiene un espacio dedicado al intercambio cultural."
  },
  710: {
    destacado: "El estudio y la recámara recrean el ambiente de la casa del poeta Ramón López Velarde.",
    descripcion: "Este museo de sitio recuerda al poeta mexicano en la casa porfiriana que hoy alberga también la Fundación Casa del Poeta."
  },
  711: {
    destacado: "Instrumental dental y cráneos prehispánicos con tratamientos dentales.",
    descripcion: "La colección de Samuel Fastlicht recorre la historia de la odontología mediante herramientas, materiales y evidencias de prácticas dentales antiguas."
  },
  716: {
    destacado: "Más de 160 exposiciones sobre arquitectura moderna, urbanismo y patrimonio.",
    descripcion: "Ubicado en el Palacio de Bellas Artes, el MUNARQ difunde la arquitectura y promueve la reflexión sobre la conservación del patrimonio construido."
  },
  732: {
    destacado: "Figuras hiperrealistas elaboradas a mano con la técnica tradicional de cera.",
    descripcion: "Abierto desde 1957, este museo de la Villa muestra personajes y escenas realizados en cera, con una tradición artesanal familiar."
  },
  757: {
    destacado: "Más de 450 pinturas novohispanas distribuidas en cuatro salas.",
    descripcion: "La pinacoteca reúne pintura religiosa de los siglos XVII al XIX en el templo de La Profesa. El recinto permanece cerrado hasta nuevo aviso."
  },
  759: {
    destacado: "La historia de la policía capitalina en una antigua construcción porfiriana.",
    descripcion: "El museo ocupa un inmueble diseñado por Federico Mariscal y presenta la evolución de la policía de la Ciudad de México."
  },
  796: {
    destacado: "Caricatura mexicana en el antiguo Real Colegio de Cristo.",
    descripcion: "Conserva y difunde obras de caricaturistas mexicanos junto con información biográfica, en un edificio colonial con vestigios de distintas épocas."
  },
  811: {
    destacado: "La obra de Manuel Tolsá y la historia del Palacio de Minería.",
    descripcion: "El museo reconoce al arquitecto y escultor valenciano Manuel Tolsá y presenta el legado artístico y arquitectónico asociado con su trabajo."
  },
  854: {
    destacado: "Un palacio barroco del siglo XVIII que fue residencia de Agustín de Iturbide.",
    descripcion: "El Palacio de Iturbide, hoy Palacio de Cultura Banamex, es sede de exposiciones de arte y patrimonio en un edificio de Francisco Guerrero y Torres."
  },
  883: {
    destacado: "Trajes, monturas y objetos que cuentan la historia de la charrería.",
    descripcion: "Instalado en el antiguo convento de Monserrat, el museo recorre la evolución de la tradición charra y su indumentaria."
  },
  906: {
    destacado: "Pinturas, fotografías, maquetas y fauna del antiguo convento y su entorno natural.",
    descripcion: "Este museo presenta exposiciones sobre el Ex Convento del Desierto de los Leones y la historia natural y cultural del parque."
  },
  911: {
    destacado: "Mapas históricos y documentos cartográficos, incluida la colección de Manuel Orozco y Berra.",
    descripcion: "La Mapoteca conserva materiales reunidos desde el siglo XIX para estudiar y representar el territorio, sus recursos y la propiedad de la tierra."
  },
  969: {
    destacado: "Dos mil zapatos y quince mil miniaturas en un museo único en América Latina.",
    descripcion: "Su recorrido reúne calzado histórico, deportivo y de personajes célebres, además de miniaturas hechas con materiales diversos."
  },
  972: {
    destacado: "Un antiguo edificio bethlemita que también alojó al Colegio Militar.",
    descripcion: "El museo ocupa una construcción barroca de 1675 y expone objetos y documentos relacionados con la historia del Ejército y la Fuerza Aérea Mexicanos."
  },
  974: {
    destacado: "Las habitaciones que Benito Juárez ocupó en Palacio Nacional.",
    descripcion: "Creado en 1957, el recinto conserva objetos y documentos vinculados con Juárez y la historia política de México en el siglo XIX."
  },
  975: {
    destacado: "Un recorrido por las ideas y procesos que dieron forma a las leyes mexicanas.",
    descripcion: "El museo de la Cámara de Diputados explica la historia del Poder Legislativo y la construcción de las normas que rigen al país."
  },
  1045: {
    destacado: "Piezas arqueológicas del Posclásico tardío reunidas por habitantes de San Juan.",
    descripcion: "La colección incluye vasijas, figurillas, sellos, malacates y objetos de obsidiana donados por Tomás Medina Villarruel y la comunidad."
  },
  1078: {
    destacado: "279 piezas arqueológicas de barro y piedra halladas en la región.",
    descripcion: "La colección, donada por Socorro Bernal Roque, reúne objetos de tradición tolteca y teotihuacana, entre ellos un Chac Mool."
  },
  1079: {
    destacado: "Un salón semicircular neoclásico donde sesionó la Cámara de Diputados.",
    descripcion: "El Recinto Parlamentario recuerda la vida legislativa del siglo XIX en un espacio reconstruido después del incendio de 1872."
  },
  1114: {
    destacado: "Seis salas dedicadas a la historia y las aportaciones de los ferrocarrileros.",
    descripcion: "Este museo sindical presenta la trayectoria del ferrocarril en México y el trabajo de quienes contribuyeron a su desarrollo."
  },
  1232: {
    destacado: "La evolución de la caballería mexicana en un antiguo edificio militar.",
    descripcion: "El museo recorre la historia de los cuerpos de caballería y conserva objetos y documentos relacionados con su formación y servicio."
  },
  1245: {
    destacado: "Más de un millón de negativos del fotógrafo Héctor García y obra de María García.",
    descripcion: "El acervo fotográfico retrata personajes y escenas de la vida mexicana a lo largo de más de seis décadas de trabajo."
  },
  1335: {
    destacado: "Objetos personales, fotografías y documentos de la activista Benita Galeana.",
    descripcion: "La casa museo honra a la luchadora social y ofrece exposiciones, biblioteca y materiales sobre movimientos sociales y derechos de las mujeres."
  },
  1464: {
    destacado: "Vaciados de esculturas clásicas y obras de la antigua Academia de San Carlos.",
    descripcion: "En un edificio de fachada renacentista italiana, las galerías muestran parte del acervo y la historia de la institución artística."
  },
  1473: {
    destacado: "Una colección de tequilas y mezcales junto a la tradición del mariachi.",
    descripcion: "El MUTEM explica la elaboración de ambas bebidas y comparte el espacio cultural de la Plaza Garibaldi con la música de mariachi."
  },
  1476: {
    destacado: "La historia de las Fuerzas Armadas en una antigua subestación eléctrica.",
    descripcion: "Inaugurado en 2010, el museo presenta momentos clave de la historia nacional en los que participaron el Ejército y la Fuerza Aérea."
  },
  1518: {
    destacado: "Un acervo de más de 15 mil piezas de arte de pueblos originarios.",
    descripcion: "Xaltilolli explora las memorias y resistencias de Tlatelolco y resguarda colecciones del Fondo Universitario de Artes de los Pueblos Originarios."
  },
  1523: {
    destacado: "Vestigios del Calmécac, escuela mexica para hijos de la nobleza.",
    descripcion: "El museo de sitio conserva restos arqueológicos y objetos de épocas prehispánica, colonial y moderna en el Centro Histórico."
  },
  1550: {
    destacado: "Murales de Siqueiros y piezas ligadas a la historia de Tlatelolco.",
    descripcion: "El Tecpan fue un recinto relevante en distintas etapas históricas; hoy presenta obras de David Alfaro Siqueiros y Luis Arenal, además de hallazgos del sitio."
  },
  1560: {
    destacado: "Un antiguo edificio aduanal convertido en espacio de cultura indígena.",
    descripcion: "El museo difunde las artes y culturas de los pueblos indígenas de México en la histórica ex Aduana del Pulque."
  },
  1617: {
    destacado: "Un recorrido interactivo por la historia de la cocina y la alimentación en México.",
    descripcion: "Sus salas combinan juegos, videos y recursos multimedia para explorar tradiciones, ingredientes y cambios en la cultura alimentaria."
  },
  1627: {
    destacado: "Relojes mecánicos antiguos y aparatos sonoros de los siglos XVIII al XX.",
    descripcion: "La colección muestra cómo relojes e inventos transformaron la vida cotidiana. El museo está cerrado temporalmente."
  },
  1653: {
    destacado: "Cerca de cien piezas artísticas elaboradas en azúcar por Marithé de Alvarado.",
    descripcion: "El museo presenta figuras, conjuntos y alegorías creados para decorar pasteles, junto con fotografías de la colección familiar."
  },
  1706: {
    destacado: "Un recorrido histórico sobre el mormonismo en México desde 1991.",
    descripcion: "El museo presenta la historia de la Iglesia de Jesucristo de los Santos de los Últimos Días en México y organiza actividades culturales."
  },
  1728: {
    destacado: "Más de 200 objetos donados por figuras del deporte y el espectáculo mexicanos.",
    descripcion: "El museo reúne recuerdos de deportistas, actores y actrices para acercar al público a distintas figuras populares de México."
  },
  1776: {
    destacado: "Astronomía y observación del cielo en el Parque de los Venados.",
    descripcion: "El planetario ofrece actividades para acercar la astronomía y la ciencia a niñas, niños y personas interesadas en el universo."
  },
  1780: {
    destacado: "Documentos y objetos sobre el primer siglo de México independiente.",
    descripcion: "El recorrido aborda el tránsito de la Nueva España a la Independencia y la Revolución mediante mapas, fotografías y documentos."
  },
  1811: {
    destacado: "La trayectoria del Heroico Colegio Militar desde su fundación en 1823.",
    descripcion: "El museo muestra la evolución del plantel y sus valores de lealtad, patriotismo y honor mediante objetos y exposiciones."
  },
  1820: {
    destacado: "Vestuario original y objetos personales de Pedro Infante.",
    descripcion: "El museo celebra al actor y cantante mexicano con piezas familiares, fotografías y vestuario de algunas de sus películas más conocidas."
  },
  1867: {
    destacado: "Reliquias del Padre Pro, incluido el atuendo que llevaba al ser fusilado.",
    descripcion: "El museo conserva objetos personales y religiosos vinculados con la vida del sacerdote jesuita Miguel Agustín Pro."
  },
  1874: {
    destacado: "Un recorrido por la historia militar desde la época prehispánica hasta hoy.",
    descripcion: "Su colección combina piezas arqueológicas, armas y uniformes para presentar distintos periodos de la historia del Ejército Mexicano."
  },
  1893: {
    destacado: "La vida universitaria de la UNAM en la antigua Real y Pontificia Universidad.",
    descripcion: "Una ventana arqueológica, recursos interactivos y piezas históricas cuentan la trayectoria y las comunidades de la Universidad Nacional."
  },
  1907: {
    destacado: "Equipo médico, botica histórica y archivos de un antiguo hospital.",
    descripcion: "El museo conserva instrumental de los siglos XIX y XX, fotografías, expedientes y libros relacionados con el Hospital Concepción Béistegui."
  },
  1992: {
    destacado: "La historia de la Torre Latinoamericana y los cambios del Centro Histórico.",
    descripcion: "La exposición permanente explica la historia del sitio y de edificios emblemáticos de la ciudad a través del tiempo."
  },
  2000: {
    destacado: "Juguetes artísticos creados por artistas como Leonora Carrington y Francisco Toledo.",
    descripcion: "La colección reúne piezas de las bienales internacionales de Juguete Arte-Objeto celebradas en la Ciudad de México."
  },
  2008: {
    destacado: "Pinacoteca virreinal, cinco retablos originales y más de 3,000 textiles.",
    descripcion: "El museo conserva el patrimonio del Colegio de San Ignacio de Loyola, con arte novohispano y objetos sobre educación y vida cotidiana femenina."
  },
  2029: {
    destacado: "Módulos interactivos para conocer la historia de la Bolsa y las finanzas en México.",
    descripcion: "El museo explica el desarrollo de la cultura bursátil y acerca conceptos financieros al público mediante recursos participativos."
  },
  2064: {
    destacado: "Un antiguo acceso del Colegio Militar dedicado a la historia de Chapultepec.",
    descripcion: "Grabados, fotografías, planos y documentos muestran la riqueza histórica, biológica y cultural del Bosque de Chapultepec."
  },
  2067: {
    destacado: "Un salón histórico del Ayuntamiento vinculado con la vida política de la ciudad.",
    descripcion: "Ubicado en el antiguo Palacio del Ayuntamiento, el salón conserva la memoria de las decisiones y ceremonias del gobierno capitalino."
  },
  2161: {
    destacado: "Más de 6,000 piezas de Star Wars organizadas en más de 40 colecciones.",
    descripcion: "El museo reúne figuras, objetos y recuerdos de distintas etapas de la saga, desde sus primeras piezas vintage hasta entregas posteriores."
  },
  2168: {
    destacado: "Emprendimiento e innovación en un palacio histórico del Centro.",
    descripcion: "Foro Valparaíso combina exposiciones sobre innovación y cultura con la historia de un inmueble asociado a la familia del Marqués de Valparaíso."
  },
  2173: {
    destacado: "Murales de la SEP en salones históricos, incluido el de Diego Rivera.",
    descripcion: "El museo permite conocer el muralismo mexicano dentro del edificio de la Secretaría de Educación Pública, con obras y espacios restaurados."
  },
  2180: {
    destacado: "Un proyecto de divulgación científica y educación sobre energía y tecnología.",
    descripcion: "El MUNET busca acercar la ciencia y la tecnología al público mediante actividades educativas y contenidos sobre energía."
  },
  2181: {
    destacado: "La vida y el legado presidencial de Lázaro Cárdenas en Los Pinos.",
    descripcion: "La casa museo presenta una síntesis de la trayectoria del presidente y forma parte del Complejo Cultural Los Pinos."
  },
  2192: {
    destacado: "Flora y fauna de Xochimilco en un espacio del Parque Ecológico.",
    descripcion: "El museo forma parte de un parque con ecosistemas acuáticos y de bosque templado, y presenta la biodiversidad y el paisaje chinampero."
  },
  2216: {
    destacado: "Una residencia de Antonio Rivas Mercado restaurada como casa histórica.",
    descripcion: "La casa permite acercarse a la arquitectura doméstica de finales del siglo XIX y a la historia de la familia Rivas Mercado."
  },
  2234: {
    destacado: "Más de 80 años de historia de los Diablos Rojos del México.",
    descripcion: "El museo cuenta la trayectoria del equipo de béisbol mediante objetos, imágenes y recursos museográficos dedicados a su legado deportivo."
  },
  2236: {
    destacado: "Más de 700 juguetes de diseñador y piezas de la cultura pop.",
    descripcion: "La colección reúne figuras y objetos de los universos de Marvel y DC Comics, además de películas y personajes populares."
  },
  2238: {
    destacado: "Un museo especializado en patología dentro del Hospital General de México.",
    descripcion: "Este recinto conserva la memoria del área de patología del Hospital General de México Eduardo Liceaga, institución con la que está vinculado desde 1953."
  },
  2239: {
    destacado: "Una exposición sobre la Inquisición, sus procesos y sus instrumentos de tortura.",
    descripcion: "El recorrido explica los orígenes y figuras de la Inquisición y presenta los mecanismos que se emplearon para perseguir y obtener confesiones."
  },
  2284: {
    destacado: "Un recorrido interactivo por el hundimiento, las fracturas y el subsuelo de la ciudad.",
    descripcion: "El observatorio explora la historia de los lagos y volcanes de la región, el origen del agua y los cambios del terreno."
  },
  2360: {
    destacado: "Murales de Diego Rivera y el Recinto de Homenaje a Benito Juárez.",
    descripcion: "Palacio Nacional reúne espacios históricos y artísticos que permiten recorrer distintas etapas de la historia política de México."
  },
  2402: {
    destacado: "La historia de Quirino Mendoza, compositor de Cielito Lindo, y de Tulyehualco.",
    descripcion: "El museo relaciona el legado musical del compositor con objetos sobre el amaranto y la nieve, actividades emblemáticas de su pueblo natal."
  },
  2417: {
    destacado: "La colección Rosana Duffour, con muñecas nacionales e internacionales.",
    descripcion: "El museo recorre la historia de las muñecas y del juego, y aborda su relación con la infancia y el papel de las mujeres."
  },
  2423: {
    destacado: "Un oratorio del siglo XVI ligado a la historia del pueblo de Santa Fe.",
    descripcion: "La antigua ermita recuperada forma parte del proyecto Chapultepec y hoy recibe actividades culturales, talleres y encuentros comunitarios."
  },
  2428: {
    destacado: "Una galería de arte popular activa desde 1951 en el barrio de Tepito.",
    descripcion: "La Galería José María Velasco impulsa y difunde las artes visuales con exposiciones vinculadas a la vida cultural de la ciudad."
  },
  2452: {
    destacado: "Un museo dedicado a la historia y el patrimonio de Tláhuac.",
    descripcion: "Inaugurado en 2018 en el barrio de San Miguel, el museo regional acerca al público a la memoria cultural de la alcaldía."
  },
  2490: {
    destacado: "Objetos y documentos sobre Sor Juana en el antiguo templo de San Jerónimo.",
    descripcion: "En el sotocoro del extemplo se exhiben objetos relacionados con la vida conventual y la memoria de Sor Juana Inés de la Cruz."
  },
  2502: {
    destacado: "La historia del Dr. Simi en una casa ecléctica construida en 1910.",
    descripcion: "SimiCasa cuenta la trayectoria de Víctor González y del personaje del Dr. Simi dentro de un inmueble histórico restaurado."
  },
  2507: {
    destacado: "Códices, mapas e instrumentos que muestran la cartografía de México.",
    descripcion: "Sus diez áreas recorren la historia de la cartografía desde los códices y mapas novohispanos hasta las instituciones y técnicas modernas."
  },
  2510: {
    destacado: "Una plataforma dedicada al arte contemporáneo y las prácticas de mujeres trans.",
    descripcion: "El MAT impulsa investigación, curaduría y difusión de prácticas artístico-culturales de mujeres trans en México y Latinoamérica."
  },
  2512: {
    destacado: "Cinco salas sobre los orígenes, la misión humanitaria y los símbolos de la ayuda.",
    descripcion: "El museo conserva la memoria histórica de la Cruz Roja Mexicana mediante objetos, archivos y actividades de educación humanitaria."
  },
  2518: {
    destacado: "Una estación de bomberos de 1935 en un antiguo inmueble religioso.",
    descripcion: "El museo comparte espacio con la Estación Tacubaya y conserva elementos arquitectónicos de un conjunto histórico del siglo XVI."
  },
  2526: {
    destacado: "La historia del cacao y el chocolate desde sus usos prehispánicos.",
    descripcion: "El recorrido explica la transformación del cacao, sus tradiciones y su llegada a la producción moderna dentro de un edificio colonial restaurado."
  },
  2551: {
    destacado: "La transformación de Lecumberri, de prisión panóptica a sede del Archivo General.",
    descripcion: "La sala permanente presenta la historia del Palacio Negro y explica por qué preservar los documentos es fundamental para la memoria del país."
  },
  2552: {
    destacado: "Obras de 200 caricaturistas mexicanos en los pasillos de la estación Zapata.",
    descripcion: "La exposición integra caricatura y muralismo en el Metro, con obras sobre la historia, la crítica social y la vida cotidiana."
  },
  2565: {
    destacado: "La historia comunitaria, los carnavales y la tradición del tezontle.",
    descripcion: "El museo reúne fotografías, documentos y objetos de Santiago Acahualtepec, además de relatos sobre danzas, festividades y vida cotidiana."
  },
  2566: {
    destacado: "Mapas, códices y objetos donados por habitantes de San Lorenzo Tezonco.",
    descripcion: "El museo comunitario preserva la historia del pueblo, sus celebraciones y el culto al Señor de la Salud mediante testimonios locales."
  },
  2567: {
    destacado: "Una maqueta del pueblo y objetos aportados por la comunidad de Santa Martha Acatitla.",
    descripcion: "El museo conserva la memoria del pueblo originario mediante exposiciones, talleres y objetos vinculados con su historia y tradiciones."
  },
  2571: {
    destacado: "La historia musical de Iztapalapa, de las orquestas y sonideros a Los Ángeles Azules.",
    descripcion: "Este museo comunitario difunde las tradiciones de los ocho barrios de Ixtapalapa con fotografías, objetos y recuerdos musicales."
  },
  2572: {
    destacado: "Once zonas interactivas sobre panadería, innovación y la historia de Bimbo.",
    descripcion: "El recorrido presenta la evolución de la empresa desde 1945 y aborda la producción, el campo, la tecnología y la electromovilidad."
  },
  2581: {
    destacado: "Objetos, fotografías y relatos reunidos junto con los habitantes del pueblo.",
    descripcion: "El museo comunitario de San Sebastián Tecoloxtitlan construye su narrativa con materiales familiares aportados por la propia comunidad."
  },
  2582: {
    destacado: "Vestigios arquitectónicos de los siglos XVII y XIX en una casa universitaria.",
    descripcion: "El recinto difunde manifestaciones artísticas y académicas y conserva elementos arquitectónicos de distintas etapas históricas."
  },
  2596: {
    destacado: "210 piezas textiles de pueblos indígenas y afromexicanos.",
    descripcion: "El MUT presenta técnicas y tradiciones textiles junto con la participación de artesanas y artesanos, en el histórico Palacio del Marqués del Apartado."
  },
  2613: {
    destacado: "Cocina, maíz nativo y productos de Milpa Alta en una casa centenaria.",
    descripcion: "La Casona explora la cocina como patrimonio vivo, conectado con la agricultura, los ingredientes locales y los saberes comunitarios."
  },
  2617: {
    destacado: "Una experiencia inmersiva sobre la evolución de los gatos y su relación con las personas.",
    descripcion: "Dioramas y proyecciones narran la historia de los felinos y el vínculo que han construido con las sociedades humanas."
  },
  2625: {
    destacado: "Más de 400 piezas originales sobre la vida y carrera de Mario Moreno Cantinflas.",
    descripcion: "Vestuario, fotografías, guiones, cartas y premios recorren la trayectoria del actor, desde sus inicios en las carpas hasta su proyección internacional."
  }
}).map(([sicId, editorial]) => [
  sicId,
  {
    ...editorial,
    fuente: `https://sic.cultura.gob.mx/ficha.php?table=museo&table_id=${sicId}`
  }
]));
