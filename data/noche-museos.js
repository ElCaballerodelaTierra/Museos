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
      admission: 'Karaoke de entrada libre; taller con cuota de recuperación.',
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
      admission: 'Entrada libre.',
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
  },
  {
    sicId: 975,
    event: {
      title: 'Debla: Guitarra y Baile Flamenco',
      image: 'data/noche-museos/museo-legislativo.jpg',
      activities: 'Baile con Gabriela Uribe «La Mora» y Oscar Cruz «El Moro»; guitarra con Francisco Villegas y Jesús Magro.',
      schedule: 'Miércoles 25 de noviembre de 2026, 17:00.',
      admission: 'Entrada libre.',
      capacity: 'Aforo máximo de 80 personas.',
      format: 'Presencial y transmisión en vivo.'
    }
  },
  {
    museumId: 'palacio-mineria',
    event: {
      title: 'Ellas escribieron la canción',
      image: 'data/noche-museos/palacio-mineria.jpg',
      activities: 'Concierto con ALTUM ensamble México, dedicado a compositoras iberoamericanas.',
      schedule: 'Miércoles 25 de noviembre de 2026, 19:00.',
      admission: 'Entrada libre.',
      capacity: 'Cupo máximo de 200 personas.',
      registration: 'Sin registro previo.',
      format: 'Presencial. Palacio de Minería, Tacuba 7, Centro Histórico.'
    }
  },
  {
    sicId: 811,
    event: {
      title: 'Tolsá y su tiempo',
      image: 'data/noche-museos/palacio-mineria.jpg',
      activities: 'Exposición temporal.',
      schedule: 'Miércoles 25 de noviembre de 2026; horario extendido hasta las 21:00.',
      admission: 'Entrada libre.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-casa-cultura-postal',
    name: 'Museo Casa de la Cultura Postal',
    category: 'Cultura Popular',
    alcaldia: 'Cuauhtémoc',
    address: 'Valentín Gómez Farías 52, colonia San Rafael, alcaldía Cuauhtémoc, Ciudad de México.',
    coordinates: [19.4370876, -99.1583423],
    event: {
      title: 'Marco Polo: rock, ska y cumbia',
      image: 'data/noche-museos/casa-cultura-postal.jpg',
      activities: 'Recorrido libre por el museo y concierto de Marco Polo Banda.',
      schedule: 'Miércoles 25 de noviembre de 2026: recorrido 17:00; concierto 18:00.',
      admission: 'Entrada libre.',
      capacity: 'Cupo máximo de 100 personas.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'museo-basilica-guadalupe',
    event: {
      title: 'Recital de piano',
      image: 'data/noche-museos/museo-basilica-guadalupe.jpg',
      activities: 'Recital de Santiago Said Domínguez Ortega. El cartel anuncia obras de Mozart, Bach, Debussy, Schubert, Liszt, Rajmáninov y Chopin.',
      schedule: 'Miércoles 25 de noviembre de 2026, 19:00.',
      format: 'Concierto virtual, transmisión por Facebook y YouTube.'
    }
  },
  {
    museumId: 'estudio-diego-frida',
    event: {
      title: 'La luz que habita',
      image: 'data/noche-museos/casa-estudio-diego-rivera-frida-kahlo.jpg',
      activities: 'Conversatorio: Pablo Álvarez conversa con María Fernanda Almela.',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:30.',
      admission: 'Entrada libre.',
      capacity: 'Cupo de 60 personas.',
      registration: 'Sin registro previo.',
      format: 'Presencial; público en general.',
      contact: 'medr.difusion@inba.gob.mx.'
    }
  },
  {
    museumId: 'ciudad-mexico',
    event: {
      title: 'El niño ajeno: ¿De dónde nace la mirada de un artista?',
      image: 'data/noche-museos/museo-ciudad-mexico.jpg',
      activities: 'Inauguración de la exposición de Juan Manuel Guillén Guillman.',
      schedule: 'Miércoles 25 de noviembre de 2026, 17:00.',
      admission: 'Entrada libre.',
      capacity: 'Cupo limitado a 150 personas.',
      format: 'Presencial. José María Pino Suárez 30, Centro Histórico.'
    }
  },
  {
    id: 'noche-faro-azcapotzalco',
    name: 'FARO Azcapotzalco Xochicalli',
    category: 'Cultura Popular',
    alcaldia: 'Azcapotzalco',
    address: 'Avenida Cultura Norte s/n, frente al Metrobús El Rosario, Azcapotzalco, Ciudad de México.',
    coordinates: [19.5072804, -99.2001501],
    event: {
      title: '25N: actividades por el Día Internacional de la Eliminación de la Violencia contra las Mujeres',
      image: 'data/noche-museos/faro-azcapotzalco.jpg',
      activities: 'Mercadita gráfica comunitaria; muestra gráfica y de resistencia; Princesas del Ghetto; conversatoria; galería plástica; coro para mujeres; intervención de grafiti en vivo; danzón de mujeres; Canto Xochicalli de Mujeres; Piel de resistencia (burlesque); y obra de teatro «Del Odio al Amor».',
      schedule: 'Miércoles 25 de noviembre de 2026, desde las 17:00.',
      admission: 'Entrada libre.',
      capacity: 'Aforo máximo de 200 personas.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-faro-tecomitl',
    name: 'FARO Tecómitl',
    category: 'Cultura Popular',
    alcaldia: 'Milpa Alta',
    address: 'Avenida Dr. Gastón Melo 40, planta alta, Tenantitla, San Antonio Tecómitl, Milpa Alta, Ciudad de México.',
    coordinates: [19.2217199, -98.9953331],
    event: {
      title: 'Raíces tejidas',
      image: 'data/noche-museos/faro-tecomitl.jpg',
      activities: 'Iniciativa cultural para rescatar, salvaguardar y difundir el patrimonio textil comunitario; promueve el reconocimiento de técnicas, herramientas y saberes heredados, así como el intercambio intergeneracional.',
      schedule: 'Miércoles 25 de noviembre de 2026, 17:00 a 18:00.',
      admission: 'Entrada libre.',
      capacity: 'Aforo de 40 personas.',
      registration: 'Sin registro.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'historia-natural',
    event: {
      title: '¡La magia regresa al museo!',
      image: 'data/noche-museos/museo-historia-natural.jpg',
      activities: 'Noche de hechizos y criaturas fantásticas. Actividades lúdicas: selección de casas, magia tenebrosa, creación de pociones, Patronus y prueba del hechicero. Talleres: mapa mágico, tu nombre en pársel y búsqueda de criaturas mágicas. Charla: «Animagos». Colabora Laurie Ann Snape. Actividades virtuales a las 18:00: «Las constelaciones» y «Bisonte americano», transmitidas por redes sociales.',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:00 a 20:30. Cierre de taquilla a las 20:00. Transmisiones virtuales a las 18:00.',
      admission: 'El cartel indica $39 MXN público general, $19 MXN menores de 12 años, maestros y estudiantes, y $16 MXN visitas guiadas con reservación previa. También muestra una leyenda de acceso libre, sin aclarar a qué aplica; confirma las condiciones con el museo.',
      capacity: 'Aforo máximo de 300 personas.',
      format: 'Presencial y actividades virtuales.'
    }
  },
  {
    sicId: 796,
    event: {
      title: 'Homenaje a René del Valle',
      image: 'data/noche-museos/museo-caricatura.jpg',
      activities: 'Exposición de obras originales en homenaje a René del Valle, dibujante del famoso Kalimán.',
      schedule: 'Miércoles 25 de noviembre de 2026, 19:00.',
      admission: 'Entrada libre.',
      capacity: 'Cupo máximo de 150 personas.',
      registration: 'Sin registro previo.',
      format: 'Presencial. Donceles 99, Centro Histórico.'
    }
  },
  {
    id: 'noche-centro-cultura-digital',
    name: 'Centro de Cultura Digital (CCD)',
    category: 'Arte',
    alcaldia: 'Cuauhtémoc',
    address: 'Paseo de la Reforma, esquina Lieja, colonia Juárez, Ciudad de México.',
    coordinates: [19.4230586, -99.1759093],
    event: {
      title: 'Sesiones audiovisuales: Desobediencia',
      image: 'data/noche-museos/centro-cultura-digital.jpg',
      activities: 'En el marco de la exposición colectiva «Deslenguadas: escuchar desde la desobediencia». 18:00–19:00, «El mensaje no existe», con Edith Heney y Emiliana Martínez. 19:00–20:00, «Desobediencia Sonora», con Erika Santos, TRS y Mónica Garrido.',
      schedule: 'Miércoles 25 de noviembre de 2026: «El mensaje no existe» 18:00–19:00; «Desobediencia Sonora» 19:00–20:00.',
      admission: 'Entrada libre.',
      capacity: 'Cupo limitado a 120 personas.',
      registration: 'Sin registro previo.',
      format: 'Presencial.'
    }
  },
  {
    sicId: 2385,
    event: {
      title: "No Man's Land: Tributo a Nirvana",
      image: 'data/noche-museos/museo-yancuic.jpg',
      activities: 'Concierto tributo a Nirvana a cargo de la banda No Man\'s Land en el marco del 17.° Aniversario de Noche de Museos.',
      schedule: 'Miércoles 25 de noviembre de 2026, 17:00 horas.',
      admission: 'Entrada libre.',
      capacity: 'Cupo: 280 personas.',
      registration: 'Sin registro previo.',
      contact: 'informacion.eventosyancuic@gmail.com',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-casa-tlaxcala',
    name: 'Casa Tlaxcala',
    category: 'Cultura Popular',
    alcaldia: 'Cuauhtémoc',
    address: 'San Ildefonso 40, Barrio Universitario, Centro Histórico, Cuauhtémoc, C.P. 06020, Ciudad de México.',
    coordinates: [19.435868, -99.130635],
    event: {
      title: 'Pastorela ¿Y si sí?',
      image: 'data/noche-museos/casa-tlaxcala.jpg',
      activities: 'Presentación teatral de la pastorela «¿Y si sí?» a cargo de Arteatro con dirección escénica de Rodolfo Palacios. Reparto: Esperanza Morett (Diablita), Enrique Cueva (Diablo), Salvador Medina (Dios), Alejandro Caballero (Melchor, Gaspar y Baltazar), Sergio Albarrán (Arcángel), Zuyva Eseverri (María) y Jaime Orozco (José). Actividad vinculada al acervo.',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:30 horas.',
      admission: 'Entrada libre.',
      capacity: 'Cupo máximo de 200 personas.',
      registration: 'Sin registro previo.',
      contact: 'reprecasatlaxcalacdmx@gmail.com | Tel. 55 5702 9620 / 55 5702 9686.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'el-carmen',
    sicId: 963,
    event: {
      title: 'Noche mística: poesía de Santa Teresa y San Juan de la Cruz',
      image: 'data/noche-museos/museo-el-carmen.jpg',
      activities: 'Declamación poética mística de Santa Teresa de Jesús y San Juan de la Cruz a través de la voz de la virreina María Luisa Gonzaga Manrique de Lara (interpretada por Fátima Corona Candia). Posteriormente, micrófono abierto para que el público comparta sus versos favoritos o poemas de autoría propia.',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:00 horas.',
      admission: 'Entrada libre (actividad sin costo).',
      capacity: 'Cupo máximo de 100 personas.',
      registration: 'Registro previo mediante código QR.',
      contact: 'museodelcarmen_difusion@inah.gob.mx',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-centro-cultural-xavier-villaurrutia',
    name: 'Centro Cultural Xavier Villaurrutia',
    category: 'Arte',
    alcaldia: 'Cuauhtémoc',
    address: 'Glorieta de los Insurgentes, local 25, Roma Norte, Cuauhtémoc, Ciudad de México.',
    coordinates: [19.423439, -99.163155],
    event: {
      title: 'Diarios de Habitación',
      image: 'data/noche-museos/centro-cultural-xavier-villaurrutia.jpg',
      activities: 'Puesta en escena con dirección de Nael de Anda que aborda la violencia intrafamiliar ejercida hacia una hija (Gris) y una madre sorda (Lucía), quienes buscan escapar de esa realidad a través de la música, el juego y la danza. La obra se desarrolla mediante Lengua de Señas Mexicana, danza, clown y teatro físico.',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:00 horas.',
      admission: 'Entrada libre.',
      capacity: 'Cupo limitado a 50 personas.',
      registration: 'Sin registro previo.',
      contact: 'culturacomunitaria.cdmx.gob.mx | Tel. 55 5533 5586.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-academia-arte-florencia',
    name: 'Academia de Arte de Florencia / Sociedad Dante Alighieri',
    category: 'Arte',
    alcaldia: 'Cuauhtémoc',
    address: 'Marsella 39, Col. Juárez, Cuauhtémoc, C.P. 06600, Ciudad de México.',
    coordinates: [19.426217, -99.157833],
    event: {
      title: '17.° Aniversario Noche de Museos: Arte, Música y Teatro',
      image: 'data/noche-museos/academia-arte-florencia.jpg',
      activities: 'Programa multidisciplinario en el Auditorio Aldo Cecchetti: 16:30 h, Exposición de Trabajos de Alumnos del Diplomado en Artes Visuales; 17:00 h, Clase Magistral «What Makes a Great Painting?» por Wade Schuman (New York Art Academy, requiere registro); 18:00 h, Conferencia de presentación de la nueva Licenciatura en Artes Visuales; 18:30 h, Experiencia escénica «El Peine» (laboratorio de poesía, música, filosofía y psicoanálisis; Dir. Mariana Villalobos); 19:30 h, Concierto coral «Fra Voci: Clásicos de la tradición coral».',
      schedule: 'Miércoles 25 de noviembre de 2026, 16:30 a 20:30 horas.',
      admission: 'Entrada libre (la clase magistral requiere registro previo obligatorio).',
      capacity: 'Aforo máximo de 60 personas por actividad.',
      registration: 'Registro previo obligatorio únicamente para la clase magistral.',
      contact: 'contacto@academiaarteflorencia.com | WhatsApp: 55 6978 6300.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'map',
    sicId: 1092,
    event: {
      title: 'GRACIAS - 20.° Aniversario del MAP',
      image: 'data/noche-museos/museo-arte-popular.jpg',
      activities: 'En el marco del 20.° aniversario del Museo de Arte Popular, visita guiada especial por la exposición temporal «GRACIAS» en compañía de reconocidos exponentes del arte popular mexicano: Adriana Villanueva, Amauri Sanabria, Emmanuel Bonilla e Irving Mondragón.',
      schedule: 'Miércoles 25 de noviembre de 2026: registro 18:00 horas, inicio 18:30 horas.',
      admission: 'Entrada libre.',
      capacity: 'Cupo para 60 personas.',
      registration: 'Registro en el recinto a las 18:00 horas.',
      contact: '55 5510 2201 | map.cdmx.gob.mx',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-el77-centro-cultural',
    name: 'El77 Centro Cultural Autogestivo',
    category: 'Arte',
    alcaldia: 'Cuauhtémoc',
    address: 'Abraham González 77, Col. Juárez, Cuauhtémoc, C.P. 06600, Ciudad de México.',
    coordinates: [19.428312, -99.153920],
    event: {
      title: 'Perritos en Resistencia & Flash Tatu',
      image: 'data/noche-museos/el77-centro-cultural.jpg',
      activities: 'Exposición de arte emergente «Perritos en Resistencia» y sesión de «Flash tatu x pajarotatu». Artistas participantes: Agueda Ponce, Artemis de plata, Clarividencia, Darel Didier, Juan0vich, Minna Blue, Nian, pajarotatu, perropsd, Tadeo Morales y Tlacui Ulle. Actividad vinculada al acervo.',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:00 horas.',
      admission: 'Entrada libre.',
      capacity: 'Cupo máximo de 50 personas.',
      registration: 'Sin registro previo.',
      contact: 'el77cultural@gmail.com | Tel. 55 5566 0102.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-lago-algo',
    name: 'LagoAlgo',
    category: 'Arte',
    alcaldia: 'Miguel Hidalgo',
    address: 'Lago Mayor, II Sección del Bosque de Chapultepec, Miguel Hidalgo, C.P. 11100, Ciudad de México.',
    coordinates: [19.414441, -99.198943],
    event: {
      title: 'Noche de Museos en LagoAlgo',
      image: 'data/noche-museos/lago-algo.jpg',
      activities: 'Recorridos guiados nocturnos por las exposiciones de arte contemporáneo y la icónica arquitectura de LagoAlgo en el Bosque de Chapultepec.',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:00 a 20:30 horas (recorridos a las 19:00 y 19:30 horas).',
      admission: 'Actividad presencial sin costo (entrada libre).',
      capacity: 'Aforo de 1,000 personas.',
      registration: 'Registro previo en lago-algo.as.me/nochedemuseos.',
      contact: 'info@lago-algo.mx',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-universidad-comunicacion',
    name: 'Foro UC - Universidad de la Comunicación',
    category: 'Arte',
    alcaldia: 'Cuauhtémoc',
    address: 'Calle Zacatecas 120, Col. Roma Norte, Cuauhtémoc, C.P. 06700, Ciudad de México.',
    coordinates: [19.416805, -99.161041],
    event: {
      title: 'Pinta tu Frecuencia',
      image: 'data/noche-museos/universidad-comunicacion.jpg',
      activities: 'Taller de creación visual con música electrónica e instalación colectiva temporal desarrollado por L&S Proyectos. Incluye set en vivo de música electrónica con Marash DJ, taller de pintura de mandalas y exploración del significado de los colores.',
      schedule: 'Miércoles 25 de noviembre de 2026, 19:00 a 21:00 horas.',
      admission: 'Entrada libre.',
      capacity: 'Aforo máximo de 200 personas.',
      registration: 'Registro previo al correo ucnochedemuseos@gmail.com.',
      contact: 'Informes por WhatsApp: 55 4913 5206.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'museo-historia-tlalpan',
    sicId: 546,
    event: {
      title: 'Chulas, Cholas y Chingonas',
      image: 'data/noche-museos/museo-historia-tlalpan.jpg',
      activities: 'Exhibición de motonetas clásicas Vespa y sesión de Vinyl Set con las DJs y selectores Karen (PizzaN\'roll) b2b Rita (Llamas Negras Discos), Cari flowers, Bunny Sue y Julissa Ellis.',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:30 horas.',
      admission: 'Entrada libre.',
      capacity: 'Aforo máximo de 200 personas.',
      registration: 'Sin registro previo.',
      contact: 'Tel. 55 5483 1500 ext. 7300 | tlalpan.cdmx.gob.mx.',
      format: 'Presencial.'
    }
  },
  {
    sicId: 2502,
    event: {
      title: 'Simi Christmas: Navidad en SimiCasa',
      image: 'data/noche-museos/simicasa-museo.jpg',
      activities: 'Celebración navideña en SimiCasa: encendido del árbol para inaugurar la temporada, buzón para Cartas a SimiClaus, villancicos clásicos interpretados desde el balcón, cuentos de Navidad y photo opportunity temático. ¡Ponte tu mejor outfit navideño!',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:00 a 23:00 horas.',
      admission: 'Entrada general: $130 MXN. Personas con discapacidad, adultos mayores, estudiantes y niños: $65 MXN.',
      capacity: 'Aforo: 350 personas por hora.',
      contact: 'contacto@simicasa.com | Tel. 56 5108 1402.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-quinta-colorada',
    name: 'Quinta Colorada',
    category: 'Historia',
    alcaldia: 'Miguel Hidalgo',
    address: 'Bosque de Chapultepec 1.ª Sección (Acceso peatonal 4, cerca del Mercado de Flores), San Miguel Chapultepec, Miguel Hidalgo, C.P. 11850, Ciudad de México.',
    coordinates: [19.418306, -99.186639],
    event: {
      title: 'Vasoterapia y Concierto de Omniblues',
      image: 'data/noche-museos/quinta-colorada.jpg',
      activities: 'Doble jornada cultural: a las 17:00 h en la Explanada, «Vasoterapia: Conversatorio, Juegos & Picnic» para interactuar y reflexionar de manera lúdica; a las 19:00 h en el Auditorio, concierto de blues mexicano «Al morir la tarde en Chapultepec» con la banda Omniblues.',
      schedule: 'Miércoles 25 de noviembre de 2026: Vasoterapia 17:00 h (Explanada); Omniblues 19:00 h (Auditorio).',
      admission: 'Entrada libre.',
      capacity: 'Cupo limitado a 200 personas.',
      registration: 'Sin registro previo.',
      contact: 'Informes: museodesitiobch@gmail.com',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'soumaya-carso',
    sicId: 1478,
    event: {
      title: 'Noche de Museos en Museo Soumaya Plaza Carso',
      image: 'data/noche-museos/museo-soumaya.jpg',
      activities: 'Horario extendido hasta las 22:00 h. Programa especial: 17:00 a 20:00 h, «Breves fueron mis palabras» (poesía, narrativa o ensayo con intercambio de libros); 17:00, 18:00 y 20:00 h, «Visita táctil» (percibe el arte a ojos cerrados con las manos, cupo 10 personas); 19:00 h, concierto «Alientos mexicanos» de música contemporánea a cargo de Ensamble Danaus (cupo 310 personas).',
      schedule: 'Miércoles 25 de noviembre de 2026, 17:00 a 22:00 horas.',
      admission: 'Entrada libre.',
      capacity: 'Concierto: 310 personas; Visita táctil: 10 personas por turno.',
      registration: 'Sin registro previo (cupo limitado por actividad).',
      contact: 'Tel. 55 1103 9800 | @ElMuseoSoumaya.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'tovar-teresa',
    sicId: 2069,
    event: {
      title: 'Noche de Museos en Casa Guillermo Tovar de Teresa',
      image: 'data/noche-museos/museo-soumaya.jpg',
      activities: 'A 11 años de su partida, recorre la residencia virreinal y porfiriana del Cronista Emérito de la Ciudad de México, hoy habitada por belleza y colecciones de arte novohispano.',
      schedule: 'Miércoles 25 de noviembre de 2026, horario extendido hasta las 22:00 horas.',
      admission: 'Entrada libre.',
      capacity: 'Aforo regular del recinto.',
      registration: 'Sin registro previo.',
      contact: 'Tel. 55 1103 9800 | @ElMuseoSoumaya.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-soumaya-atrio-san-francisco',
    name: 'Museo Soumaya - Atrio de San Francisco',
    category: 'Arte',
    alcaldia: 'Cuauhtémoc',
    address: 'Francisco I. Madero 7, Centro Histórico, Cuauhtémoc, C.P. 06000, Ciudad de México.',
    coordinates: [19.433917, -99.140222],
    event: {
      title: 'Noche de Museos en Atrio de San Francisco',
      image: 'data/noche-museos/museo-soumaya.jpg',
      activities: 'Horario extendido para disfrutar la naturaleza, jardines y contemplar la diversidad arquitectónica en el corazón del Centro Histórico.',
      schedule: 'Miércoles 25 de noviembre de 2026, horario extendido hasta las 22:00 horas.',
      admission: 'Entrada libre.',
      capacity: 'Aforo libre del espacio.',
      registration: 'Sin registro previo.',
      contact: 'Tel. 55 1103 9800 | @ElMuseoSoumaya.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-casul-unam',
    name: 'Casa Universitaria del Libro (CASUL - UNAM)',
    category: 'Cultura Popular',
    alcaldia: 'Cuauhtémoc',
    address: 'Orizaba 24, Roma Norte, Cuauhtémoc, C.P. 06700, Ciudad de México.',
    coordinates: [19.421522, -99.158739],
    event: {
      title: 'Cineclub CASUL: El Cadáver de la Novia',
      image: 'data/noche-museos/casul-unam.jpg',
      activities: 'Proyección cinematográfica de la aclamada película animada «El Cadáver de la Novia» (Dirs. Tim Burton y Mike Johnson, 2005) en colaboración con Filmoteca UNAM.',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:00 horas.',
      admission: 'Entrada libre con fines exclusivamente académicos.',
      capacity: 'Cupo: 40 personas.',
      registration: 'Sin registro previo.',
      contact: '55 5525 0550 ext. 103 y 104 | actividades.casul@gmail.com | www.casul.unam.mx.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'palacio-correos',
    sicId: 689,
    event: {
      title: 'JAZZBOOK 14 Mujeres: Jenny Beaujean y Nadia López',
      image: 'data/noche-museos/palacio-postal.jpg',
      activities: 'Concierto estelar del festival JAZZBOOK 14 Mujeres en el Palacio Postal: sesión de jazz a cargo de Jenny Beaujean fusionada con la poesía en voz de Nadia López.',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:00 horas.',
      admission: 'Entrada libre.',
      capacity: 'Aforo: 120 personas.',
      registration: 'Sin registro previo.',
      contact: 'palacio.postal.museo | elfondoonlinea.com | elconvite.com.mx.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'san-ildefonso',
    sicId: 768,
    event: {
      title: 'Proyecto de práctica social: REMIENDOS',
      image: 'data/noche-museos/colegio-san-ildefonso.jpg',
      activities: 'Proyecto de práctica social «REMIENDOS» con la participación de Lorena Wolffer y Erika Lozano (Kuru), incluyendo proyección sobre la calle peatonal de San Ildefonso.',
      schedule: 'Miércoles 25 de noviembre de 2026, 19:00 horas.',
      admission: 'Entrada libre.',
      capacity: 'Aforo: 90 personas.',
      registration: 'Sin registro previo.',
      contact: 'acsiedu@gmail.com | Tel. 55 3602 0028.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-instituto-cultural-tlalnepantla',
    name: 'Instituto Municipal de Cultura y Arte Comunitario (Tlalnepantla)',
    category: 'Arte',
    alcaldia: 'Tlalnepantla de Baz',
    address: 'Plaza Dr. Gustavo Baz Prada s/n, Centro, Tlalnepantla de Baz, C.P. 54000, Estado de México.',
    coordinates: [19.539650, -99.195033],
    event: {
      title: 'Taller de grabado sin prensa: Huella Mágica',
      image: 'data/noche-museos/instituto-cultural-tlalnepantla.jpg',
      activities: 'Taller práctico de grabado sin prensa «Huella Mágica» para crear arte con tus propias manos y llevarte tus obras a casa (incluye todo el material). Imparten la Mtra. Tania Mendoza Soto y el Mtro. José Antonio Cano Hernández (segundo piso del recinto).',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:30 horas.',
      admission: 'Sin costo (incluye todo el material).',
      capacity: 'Cupo limitado a 20 personas.',
      registration: 'Reserva vía WhatsApp: 55 4928 2993.',
      contact: 'WhatsApp: 55 4928 2993 | FB: Instituto Municipal Cultura y Arte Comunitario.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-centro-cultural-jaime-torres-bodet',
    name: 'Centro Cultural Jaime Torres Bodet (IPN Zacatenco)',
    category: 'Ciencia',
    alcaldia: 'Gustavo A. Madero',
    address: 'Av. Wilfrido Massieu s/n, esq. Av. IPN, Zacatenco, Gustavo A. Madero, C.P. 07738, Ciudad de México.',
    coordinates: [19.500344, -99.135211],
    event: {
      title: 'Ponencia: Violencias y resistencias de las mujeres musulmanas',
      image: 'data/noche-museos/centro-cultural-jaime-torres-bodet.jpg',
      activities: 'Ponencia a cargo de la Dra. Samantha Leyva Cortés en el marco de las actividades por los 16 días de activismo contra la violencia hacia la mujer (proyección en Pantalla LED del Auditorio Ing. Alejo Peralta).',
      schedule: 'Miércoles 25 de noviembre de 2026, 17:00 horas.',
      admission: 'Entrada libre.',
      capacity: 'Cupo máximo: 50 personas.',
      registration: 'No requiere registro.',
      contact: 'ddc@ipn.mx | Tel. 55 5729 6000 exts. 53675 / 53623 | ipn.mx/cultura/.',
      format: 'Presencial.'
    }
  },
  {
    id: 'noche-casa-primera-imprenta',
    name: 'Casa de la Primera Imprenta de América (UAM)',
    category: 'Historia',
    alcaldia: 'Cuauhtémoc',
    address: 'Lic. Primo de Verdad 10, Centro Histórico, Cuauhtémoc, C.P. 06060, Ciudad de México.',
    coordinates: [19.434444, -99.130389],
    event: {
      title: 'Colectivo Ajá (Agua): Memorial y Ritualidad (Ausencia/Presencia)',
      image: 'data/noche-museos/casa-primera-imprenta.jpg',
      activities: 'Presentación artística, ceremonial y de memoria comunitaria a cargo del Colectivo Ajá (Agua) explorando las nociones de ausencia y presencia.',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:00 horas.',
      admission: 'Entrada libre.',
      capacity: 'Aforo máximo: 45 personas.',
      registration: 'Sin registro previo.',
      contact: 'casapimprenta@correo.uam.mx | @casaprimeraimprenta.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'culturas-mundo',
    sicId: 802,
    event: {
      title: 'Generaciones Marcadas: Poesía, música y performance sobre Palestina',
      image: 'data/noche-museos/museo-culturas-del-mundo.jpg',
      activities: 'Ensamble de poesía, música y performance sobre la historia y lucha del pueblo palestino en la Sala Eusebio Dávalos, en el marco del Día Internacional de Solidaridad con el Pueblo Palestino.',
      schedule: 'Miércoles 25 de noviembre de 2026, 19:00 horas.',
      admission: 'Entrada libre.',
      capacity: 'Cupo: 100 personas.',
      registration: 'Sin registro previo.',
      contact: 'difusion.mnc@inah.gob.mx | @MuseoCulturasdelMundo.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'archivo-fotografia',
    sicId: 1109,
    event: {
      title: 'Charla: 25N Desbordar los márgenes',
      image: 'data/noche-museos/museo-archivo-fotografia.jpg',
      activities: 'Charla y conversatorio «25N Desbordar los márgenes: Mujeres, infancias y el arte como resistencia desde las prácticas artísticas». Participan: Valeria Castillón, Alejandra Ruiz Rincón, Michelle Ayala y Janet Gómez Valdés.',
      schedule: 'Miércoles 25 de noviembre de 2026, 18:30 horas.',
      admission: 'Entrada libre.',
      capacity: 'Aforo máximo: 70 personas.',
      registration: 'Sin registro previo.',
      contact: 'consulta.acervomaf@gmail.com | @mafmuseo.',
      format: 'Presencial.'
    }
  },
  {
    museumId: 'culturas-populares',
    sicId: 976,
    event: {
      title: 'Concierto: Orquesta Ensueño y parejas de charros y charras',
      image: 'data/noche-museos/museo-culturas-populares.jpg',
      activities: 'Gran concierto tradicional mexicano con la Orquesta Ensueño acompañada por parejas de baile folclórico de charros y charras.',
      schedule: 'Miércoles 25 de noviembre de 2026, 19:00 horas.',
      admission: 'Entrada libre.',
      capacity: 'Cupo: 200 personas.',
      registration: 'Sin registro previo.',
      contact: 'eacamarenag@cultura.gob.mx | mncp.cultura.gob.mx | @MuseoNacionaldeCulturasPopulares.',
      format: 'Presencial.'
    }
  },
  {
    sicId: 2526,
    event: {
      title: 'La noche sabe a chocolate: Choco-Story Zócalo',
      image: 'data/noche-museos/choco-story-zocalo.jpg',
      activities: 'Recorrido sensorial para conocer, aprender y disfrutar el fascinante mundo del cacao y el chocolate (incluye audioguía, degustación de chocolate y demostración de chocolate relleno). Además, actividades especiales con costo de $250 c/u: Catas de chocolate (17, 18, 19 y 20 h, cupo 25), Taller de chocolate con diseños navideños (17, 18, 19 y 20 h, cupo 20) y Taller artesanal en metate (17, 18, 19 y 20 h, cupo 6).',
      schedule: 'Miércoles 25 de noviembre de 2026, 17:00 a 21:00 horas.',
      admission: 'Entrada general: $90 MXN (incluye audioguía, degustación y demostración). Talleres y catas especiales: $250 MXN c/u.',
      capacity: 'Aforo general continuo; catas y talleres con cupo limitado de 6 a 25 personas por turno.',
      contact: '55 5518 8312 | www.choco-storymexico.com/zocalo | @chocostory.zocalo.',
      format: 'Presencial.'
    }
  }
];
