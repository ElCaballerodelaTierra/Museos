const NOCHE_MUSEOS_DATA = [
  {
    museumId: 'museo-telegrafo',
    event: {
      title: 'Reverdecer: un reencuentro con la música de grandes compositoras',
      image: 'data/noche-museos/museo-telegrafo.jpg',
      activities: 'Música de cámara y visita guiada por el museo.',
      schedule: 'Visita guiada 18:30; concierto 19:00.',
      admission: 'Entrada libre.',
      capacity: 'Aforo máximo de 70 personas.',
      registration: 'Sin registro previo.',
      contact: '55 5521 9351.',
      format: 'Modalidad híbrida.'
    }
  },
  {
    sicId: 2490,
    event: {
      title: 'Noche de Museos en el Claustro de Sor Juana',
      image: 'data/noche-museos/museo-sor-juana.jpg',
      activities: 'Concierto de Concertistas de Bellas Artes (INBAL); visitas al Museo de Sitio Sor Juana y exposiciones «Aquelarre» y «Entre trajes y canciones».',
      schedule: 'Visitas guiadas 17:00, 17:30, 18:00 y 18:30; concierto 19:00.',
      admission: 'Entrada libre.',
      capacity: 'Aforo máximo de 200 personas.',
      registration: 'Informes y registro: difusioncultural@elclaustro.edu.mx.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'casa-de-la-bola',
    event: {
      title: 'Listos para Navidad',
      image: 'data/noche-museos/casa-de-la-bola.jpg',
      activities: 'Concierto del Ensamble Alter Voce; taller «Esfera, esferita que adorna mi casita» y recorridos guiados.',
      schedule: 'Concierto 17:30; taller 19:00; recorridos 19:00 y 19:15.',
      admission: 'Entrada libre.',
      capacity: 'Taller: 17 personas. Recorridos: 15 personas por visita.',
      registration: 'El concierto no requiere registro. Taller: museoshaghenbeck@gmail.com. Registro para recorridos en el museo desde las 17:30.',
      contact: 'museoshaghenbeck@gmail.com.'
    }
  },
  {
    museumId: 'museo-cancilleria',
    event: {
      title: 'México y sus colores musicales',
      image: 'data/noche-museos/museo-cancilleria.jpg',
      activities: 'Recital didáctico de música regional mexicana a cargo del Ensamble Scherzo.',
      schedule: '19:00.',
      admission: 'Sin costo.',
      capacity: 'Aforo de 90 personas.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-la-nana',
    name: 'La Nana, Laboratorio Urbano de Arte Comprometido',
    category: 'Arte',
    alcaldia: 'Cuauhtémoc',
    address: '2.º Callejón de San Juan de Dios 25, colonia Guerrero, Cuauhtémoc.',
    coordinates: [19.4381241, -99.1428994],
    event: {
      title: 'Nocturnos',
      image: 'data/noche-museos/la-nana.jpg',
      activities: 'Espectáculo que fusiona tango, danza contemporánea y literatura argentina.',
      schedule: '19:00.',
      admission: '$100 MXN.',
      capacity: 'Cupo limitado a 100 personas.',
      registration: 'Reservaciones por teléfono.',
      contact: '55 5518 5424, extensión 112.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-fundacion-miguel-aleman',
    name: 'Fundación Miguel Alemán',
    category: 'Historia',
    alcaldia: 'Sede por confirmar',
    address: 'El cartel no indica dirección.',
    coordinates: null,
    event: {
      title: 'La señora en su balcón',
      image: 'data/noche-museos/fundacion-miguel-aleman.jpg',
      activities: 'Presentación de la Compañía Nacional de Ópera Mexicana; música de Luis Sandi y libreto de Elena Garro.',
      schedule: '18:00 a 20:00.',
      admission: 'Entrada libre.',
      capacity: 'Aforo máximo de 100 personas.',
      registration: 'Registro previo.',
      contact: 'eventos@fundacionmiguelaleman.org.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'museo-numismatico',
    event: {
      title: 'Mira lo que las monedas esconden',
      image: 'data/noche-museos/museo-numismatico.jpg',
      activities: 'Recorrido guiado nocturno por el Museo Numismático Nacional.',
      schedule: 'Miércoles 25 de noviembre; ingreso 17:00, recorrido 18:00.',
      admission: 'Entrada libre; se requiere identificación oficial.',
      capacity: 'Aforo de 60 personas.',
      registration: 'Registro en zcastro@cmm.gob.mx.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-hacienda-santa-monica',
    name: 'Museo Hacienda de Santa Mónica',
    category: 'Historia',
    alcaldia: 'Tlalnepantla de Baz, Estado de México',
    address: 'Ignacio Manuel Altamirano 3, Tlalnepantla, Estado de México.',
    coordinates: [19.5291258, -99.231587],
    event: {
      title: 'Tarde de bohemia',
      image: 'data/noche-museos/hacienda-santa-monica.jpg',
      activities: 'Concierto «Boleros de Oro»; conferencia «Los vitrales de Santa Mónica: fragmentos de luz y nostalgia» y recorridos guiados especiales.',
      schedule: 'Concierto 17:00; conferencia 18:00; recorridos 18:45 y 19:15.',
      admission: 'Entrada libre.',
      capacity: 'Recorridos: 15 personas por visita.',
      registration: 'Registro para recorridos en el museo el mismo día, a partir de las 16:30.',
      contact: 'museoshaghenbeck@gmail.com.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-mystika',
    name: 'MYSTIKA',
    category: 'Arte',
    alcaldia: 'Cuauhtémoc',
    address: 'Torre Cuarzo, Paseo de la Reforma 26, piso 25, colonia Juárez, Ciudad de México.',
    coordinates: [19.428, -99.1658],
    event: {
      title: 'El arte que habita en ti',
      image: 'data/noche-museos/mystika.jpg',
      activities: 'Experiencia sonora e inmersiva con Thea y Andrei Matorin; incluye recorrido por 10 salas.',
      schedule: '20:00; acceso desde las 18:30.',
      admission: '$399 MXN, sin comisión en línea.',
      capacity: 'Cupo máximo de 120 personas.',
      registration: 'Boletos en Ticketmaster y taquilla.',
      contact: 'ventas@mystika.mx. Estacionamiento: $26 MXN por hora.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'intervenciones',
    event: {
      title: 'Huapangótico',
      image: 'data/noche-museos/museo-nacional-intervenciones.jpg',
      activities: 'Concierto en el huerto del Museo Nacional de las Intervenciones.',
      schedule: '18:00.',
      admission: 'Entrada libre.',
      capacity: 'Cupo de 80 personas.',
      registration: 'Sin registro previo.',
      contact: '55 4166 0780, extensiones 413306 y 413303.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-futurama',
    name: 'Centro Cultural Futurama',
    category: 'Cultura Popular',
    alcaldia: 'Gustavo A. Madero',
    address: 'Otavalo 7, esquina con avenida IPN, colonia Lindavista, Gustavo A. Madero.',
    coordinates: [19.4935358, -99.1333492],
    event: {
      title: 'Hysterika: tributo a Depeche Mode',
      image: 'data/noche-museos/centro-cultural-futurama.jpg',
      activities: 'Concierto tributo a Depeche Mode.',
      schedule: '18:00.',
      admission: 'Entrada libre.',
      capacity: 'Aforo máximo de 150 personas.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'museo-constituciones',
    event: {
      title: 'La quimera del oro',
      image: 'data/noche-museos/museo-constituciones.jpg',
      activities: 'Proyección musicalizada en vivo de la película de Charles Chaplin (1925, EUA, 95 min).',
      schedule: 'Ingreso al recinto 18:30; proyección 19:00.',
      admission: 'Actividad sin costo.',
      capacity: 'Aforo máximo de 60 personas.',
      registration: 'Cupo limitado.',
      contact: 'difusion@muco.unam.mx.'
    }
  },
  {
    museumId: 'palacio-escuela-medicina',
    event: {
      title: 'Nocturno en el Palacio de la Escuela de Medicina',
      image: 'data/noche-museos/palacio-escuela-medicina.jpg',
      activities: 'Visita guiada y charla «Amor, poesía y cianuro: los últimos días de Manuel Acuña», impartida por Víctor Palomo.',
      schedule: 'Visita guiada 19:00; charla 20:30.',
      admission: 'Entrada libre.',
      capacity: 'Cupo limitado a 360 personas.',
      contact: '55 5623 3123.'
    }
  },
  {
    museumId: 'centro-comunitario-culhuacan',
    event: {
      title: 'Entre muros y misterios',
      image: 'data/noche-museos/centro-comunitario-culhuacan.jpg',
      activities: 'Leyendas y conjuros en Culhuacán.',
      schedule: '18:00.',
      admission: 'Entrada libre.',
      capacity: 'Cupo limitado a 80 personas.',
      contact: 'oscar_silva@inah.gob.mx.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-arbol-noche-victoriosa',
    name: 'Museo Árbol de la Noche Victoriosa',
    category: 'Historia',
    alcaldia: 'Miguel Hidalgo',
    address: 'Calzada México-Tacuba s/n, colonia Popotla, Miguel Hidalgo.',
    coordinates: [19.4545, -99.177],
    event: {
      title: 'Universos de papel',
      image: 'data/noche-museos/museo-arbol-noche-victoriosa.jpg',
      activities: 'Inauguración de exposición con Ana RB y Esther Sauco; ritual de apertura energética.',
      schedule: 'Exposición 17:00 a 22:00; rituales 19:00 a 20:00 y 20:30 a 21:30.',
      admission: 'Entrada libre. Ritual: $150 MXN por persona, incluye materiales.',
      capacity: 'Exposición: 30 personas. Ritual: 15 personas por sesión.',
      registration: 'Registro por WhatsApp.',
      contact: '55 7337 0251.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'museo-mujer',
    event: {
      title: 'Viaje a través de dos generaciones',
      image: 'data/noche-museos/museo-mujer.jpg',
      activities: 'Concierto de Korra Regina Morales Andrade y Gabriela Jaro. Presenta la Dra. Rocío García Rey (UNAM, FEMU).',
      schedule: '18:00.',
      admission: '$20 MXN general; $10 MXN estudiantes, profesores e INAPAM.',
      capacity: 'Aforo máximo de 50 personas.',
      registration: 'Informes y registro: recepcionmuseomujer@gmail.com.',
      format: 'Híbrido.'
    }
  },
  {
    museumId: 'museo-acuarela',
    event: {
      title: 'Acuarela in your area y Cántale a los 90s',
      image: 'data/noche-museos/museo-acuarela.jpg',
      activities: 'Taller de acuarela y karaoke conducido por Alejandro Félix.',
      schedule: 'Taller 17:00; karaoke 18:00.',
      admission: 'Taller con cuota de recuperación.',
      capacity: 'Taller: máximo 30 participantes.',
      registration: 'Registro previo para el taller.',
      contact: 'avisos@acuarela.org.mx.'
    }
  },
  {
    museumId: 'museo-pulque',
    event: {
      title: 'Gran Bailongo Pulquero',
      image: 'data/noche-museos/museo-pulque.jpg',
      activities: 'Baile con música en vivo.',
      schedule: '19:30.',
      admission: 'Entrada libre.',
      capacity: 'Aforo limitado a 100 personas.',
      registration: 'Registro previo por redes sociales.',
      format: 'Presencial.'
    }
  },
  {
    sicId: 2239,
    event: {
      title: 'Dioses del inframundo: deidades de nuestro pasado',
      image: 'data/noche-museos/museo-inquisicion.jpg',
      activities: 'Recorrido, experiencia inmersiva y espectáculo multidisciplinario; última temporada.',
      schedule: 'Funciones 19:00 y 20:30.',
      admission: '$410 MXN general; $380 MXN para adolescentes de 10 a 14 años, INAPAM, estudiantes y docentes.',
      capacity: 'Aforo máximo de 40 personas.',
      registration: 'Requiere reservación únicamente por WhatsApp.',
      contact: '55 5646 4359 y 55 6198 1223.'
    }
  },
  {
    museumId: 'panteon-san-fernando',
    event: {
      title: 'Presentación de recetario: Vidas, aromas e historias',
      image: 'data/noche-museos/panteon-san-fernando.jpg',
      activities: 'Presentación de un cuaderno para la redacción de un recetario, con Vianca Castillo Castro, Dhyana Angélica Rodríguez Vargas y Sandra Argüello.',
      schedule: '17:00 a 19:00.',
      admission: 'Entrada libre.',
      capacity: 'Cupo máximo de 80 personas.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-mumedi',
    name: 'MUMEDI, Museo Mexicano del Diseño',
    category: 'Arte',
    alcaldia: 'Cuauhtémoc',
    address: 'Avenida Bucareli 35, local 4 (entrada por Donato Guerra), colonia Juárez.',
    coordinates: [19.4348, -99.1476],
    event: {
      title: 'Cata de mezcal Destreza + Museo',
      image: 'data/noche-museos/mumedi.jpg',
      activities: 'Recorrido por la exposición retrospectiva del concurso internacional de carteles 2007–2020. Cata con maridaje, dos tipos de mezcal y crema de mezcal; también hay recorrido sin cata.',
      schedule: '17:00 a 22:00; cata cada hora y recorridos cada 20 minutos.',
      admission: 'Cata y recorrido: $700 MXN. Solo recorrido: $70 MXN.',
      capacity: 'Cata: máximo 20 personas por grupo. Recorrido: 15 personas por visita.',
      registration: 'Reserva obligatoria para la cata, con anticipo de $300 MXN. El recorrido no requiere reservación.',
      contact: 'WhatsApp 55 3244 7090; info@mumedi.mx.'
    }
  },
  {
    id: 'noche-casa-jaime-sabines',
    name: 'Casa Jaime Sabines',
    category: 'Arte',
    alcaldia: 'Álvaro Obregón',
    address: 'Avenida Revolución 1747, colonia San Ángel, Álvaro Obregón.',
    coordinates: [19.3448267, -99.1908681],
    event: {
      title: 'Lecturas, taller y conversatorio',
      image: 'data/noche-museos/casa-jaime-sabines.jpg',
      activities: 'Taller de creación de ex-libris; lectura de «Las luciérnagas», de Adalberto Ortiz Ávalos; conversatorio «Tetahuila: la semilla que nos mira y la reciprocidad de la tierra».',
      schedule: 'Taller 18:00 a 19:00; lectura 19:00; conversatorio 20:00.',
      admission: 'No se indica costo en el cartel.',
      capacity: 'Aforo general de 100 personas; taller limitado a 20.',
      registration: 'Registro del taller por Instagram; lectura y conversatorio sin registro previo.'
    }
  },
  {
    id: 'noche-casa-chiapas',
    name: 'Casa Chiapas CDMX',
    category: 'Cultura Popular',
    alcaldia: 'Cuauhtémoc',
    address: 'Toledo 22, colonia Juárez, Cuauhtémoc.',
    coordinates: [19.4233475, -99.1721209],
    event: {
      title: 'Noche de Museos en Casa Chiapas',
      image: 'data/noche-museos/casa-chiapas.jpg',
      activities: 'Expo-venta de ámbar; concierto «Balero Bolero»; ballet folclórico; degustación de café y maridaje a cargo de Caravana Café.',
      schedule: 'Expo-venta y café 17:00; maridaje 18:30; concierto 19:00; ballet 20:00.',
      admission: 'Entrada libre; maridaje de café: $300 MXN por pareja.',
      capacity: 'Aforo máximo de 100 personas.',
      registration: 'Registro para actividades en casachiapascdmx@gmail.com.'
    }
  },
  {
    museumId: 'museo-metro',
    event: {
      title: 'Presentación de libro y música en vivo',
      image: 'data/noche-museos/museo-metro.jpg',
      activities: 'Presentación del libro «Llanto de sirenas, el que susurra en la noche», de José Riaza, y presentación musical de José Riaza y Las Chicas del Penal.',
      schedule: '18:00.',
      admission: 'Entrada libre.',
      capacity: 'Aforo de 150 personas.',
      registration: 'Actividades sin registro previo.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-senado-xico',
    name: 'Xico, Senado es Cultura',
    category: 'Cultura Popular',
    alcaldia: 'Cuauhtémoc',
    address: 'Sede histórica del Senado, Xicoténcatl 9, Centro Histórico.',
    coordinates: [19.4358, -99.1394],
    event: {
      title: 'Concierto de Mex Kuri’s y Sayari',
      image: 'data/noche-museos/senado-xico.jpg',
      activities: 'Concierto con Mex Kuri’s y Sayari, agrupación de danza boliviana en México.',
      schedule: '19:00.',
      admission: 'Entrada libre.',
      capacity: 'Cupo limitado a 220 personas.',
      registration: 'No requiere reservación.',
      contact: 'unidad.eventos@senado.gob.mx; 55 5345 3000, extensiones 2181, 2129 y 2013.'
    }
  },
  {
    sicId: 1473,
    event: {
      title: 'Gran Posada Navideña',
      image: 'data/noche-museos/museo-tequila-mezcal.jpg',
      activities: 'Posada con letanía, piñatas, aguinaldo y ponche navideño.',
      schedule: '20:00.',
      admission: '$200 MXN.',
      capacity: 'Cupo limitado a 90 personas.',
      registration: 'Registro mediante el código QR del cartel.'
    }
  },
  {
    id: 'noche-faro-milpa-alta',
    name: 'FARO Milpa Alta - Miacatlán',
    category: 'Arte',
    alcaldia: 'Milpa Alta',
    address: 'Bolívar Poniente s/n, San Jerónimo Miacatlán, Milpa Alta.',
    coordinates: [19.177, -99.012],
    event: {
      title: 'Florecer sin miedo',
      image: 'data/noche-museos/faro-milpa-alta.jpg',
      activities: 'Presentación de Alejandra Itzel Solares.',
      schedule: '17:00.',
      admission: 'Entrada libre.',
      format: 'Presencial.'
    }
  }
];
