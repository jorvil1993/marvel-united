// MARVEL UNITED: MAXIMUM MUTATION (SPIDER-VERSE & X-MEN)
// Base de Datos Maestra de la Campaña, Héroes, Villanos y Eventos

const CAMPAIGN_HEROES = {
  spider_man: {
    id: 'spider_man',
    name: 'Spider-Man',
    alterEgo: 'Peter Parker',
    originBox: 'Enter The Spider-Verse',
    initialUnlocked: true,
    avatar: './assets/heroes/spider_man.png',
    role: 'Ágil / Rescate y Balance',
    trait: 'Sentido Arácnido',
    description: 'Movilidad excepcional por la red y rescate veloz de civiles en peligro.',
    stats: { mov: 'Alto', atk: 'Medio', her: 'Alto', wild: 'Medio' }
  },
  miles_morales: {
    id: 'miles_morales',
    name: 'Miles Morales',
    alterEgo: 'Spider-Man de Brooklyn',
    originBox: 'Enter The Spider-Verse',
    initialUnlocked: true,
    avatar: './assets/heroes/miles_morales.png',
    role: 'Táctico / Descarga Venenosa',
    trait: 'Camuflaje y Bioelectricidad',
    description: 'Capacidad de aturdir enemigos y golpear sin ser detectado.',
    stats: { mov: 'Alto', atk: 'Alto', her: 'Medio', wild: 'Medio' }
  },
  wolverine: {
    id: 'wolverine',
    name: 'Lobezno (Wolverine)',
    alterEgo: 'Logan',
    originBox: 'X-Men Core Box',
    initialUnlocked: true,
    avatar: './assets/heroes/wolverine.png',
    role: 'Combatiente / Regeneración',
    trait: 'Factor Curativo y Garras de Adamantium',
    description: 'Daño cuerpo a cuerpo letal y resistencia superior ante heridas graves.',
    stats: { mov: 'Medio', atk: 'Muy Alto', her: 'Bajo', wild: 'Medio' }
  },
  cyclops: {
    id: 'cyclops',
    name: 'Cíclope (Cyclops)',
    alterEgo: 'Scott Summers',
    originBox: 'X-Men Core Box',
    initialUnlocked: true,
    avatar: './assets/heroes/cyclops.png',
    role: 'Líder / Ataque a Distancia',
    trait: 'Liderazgo Táctico y Rayos Ópticos',
    description: 'Permite coordinar y potenciar las acciones de otros héroes en el Storyline.',
    stats: { mov: 'Medio', atk: 'Alto', her: 'Alto', wild: 'Medio' }
  },
  black_cat: {
    id: 'black_cat',
    name: 'Gata Negra (Black Cat)',
    alterEgo: 'Felicia Hardy',
    originBox: 'Enter The Spider-Verse',
    initialUnlocked: false,
    unlockCondition: 'Rescátala en los laboratorios de Oscorp (Victoria en Capítulo 1)',
    avatar: './assets/heroes/black_cat.png',
    role: 'Infiltración / Mala Suerte',
    trait: 'Manipulación de Probabilidad',
    description: 'Robo de fichas a villanos y alteración de los planes enemigos.',
    stats: { mov: 'Muy Alto', atk: 'Medio', her: 'Alto', wild: 'Alto' }
  },
  beast: {
    id: 'beast',
    name: 'Bestia (Beast)',
    alterEgo: 'Dr. Hank McCoy',
    originBox: 'X-Men Core Box',
    initialUnlocked: false,
    unlockCondition: 'Completa la investigación biológica (Victoria en Capítulo 2)',
    avatar: './assets/heroes/beast.png',
    role: 'Científico / Apoyo de Misiones',
    trait: 'Intelecto Superior y Fisiología Feral',
    description: 'Resuelve misiones de amenaza y rescates científicos con el doble de efectividad.',
    stats: { mov: 'Alto', atk: 'Medio', her: 'Muy Alto', wild: 'Medio' }
  },
  ghost_spider: {
    id: 'ghost_spider',
    name: 'Ghost-Spider',
    alterEgo: 'Gwen Stacy',
    originBox: 'Enter The Spider-Verse',
    initialUnlocked: false,
    unlockCondition: 'Intercépctala en la redacción del Daily Bugle (Victoria en Capítulo 3)',
    avatar: './assets/heroes/ghost_spider.png',
    role: 'Acróbata / Evasión Dimensional',
    trait: 'Piruetas Interdimensionales',
    description: 'Redistribuye héroes y se desplaza sorteando cualquier trampa enemiga.',
    stats: { mov: 'Muy Alto', atk: 'Medio', her: 'Alto', wild: 'Medio' }
  },
  jean_grey: {
    id: 'jean_grey',
    name: 'Jean Grey',
    alterEgo: 'Marvel Girl',
    originBox: 'X-Men Core Box',
    initialUnlocked: false,
    unlockCondition: 'Libera su mente tras sofocar el terror del Duende Verde (Victoria en Capítulo 4)',
    avatar: './assets/heroes/jean_grey.png',
    role: 'Psiónica / Manipulación Mental',
    trait: 'Telequinesis y Telepatía',
    description: 'Mueve civiles, matones y héroes entre ubicaciones sin necesidad de viajar a pie.',
    stats: { mov: 'Medio', atk: 'Medio', her: 'Muy Alto', wild: 'Alto' }
  },
  storm: {
    id: 'storm',
    name: 'Tormenta (Storm)',
    alterEgo: 'Ororo Munroe',
    originBox: 'X-Men Core Box',
    initialUnlocked: false,
    unlockCondition: 'Refuerzo aéreo durante el Asedio a la Mansión X (Victoria en Capítulo 5)',
    avatar: './assets/heroes/storm.png',
    role: 'Control de Masas / Vuelo',
    trait: 'Furia de los Elementos',
    description: 'Vientos huracanados que barren con grupos enteros de matones a su paso.',
    stats: { mov: 'Muy Alto', atk: 'Alto', her: 'Alto', wild: 'Medio' }
  },
  spider_woman: {
    id: 'spider_woman',
    name: 'Spider-Woman',
    alterEgo: 'Jessica Drew',
    originBox: 'Enter The Spider-Verse',
    initialUnlocked: false,
    unlockCondition: 'Agente encubierta desbloqueada tras defender la Mansión X (Capítulo 5)',
    avatar: './assets/heroes/spider_woman.png',
    role: 'Veneno Bioeléctrico / Vuelo',
    trait: 'Rayos Venenosos y Planeo',
    description: 'Ataques que atraviesan escudos y eliminación certera de amenazas.',
    stats: { mov: 'Alto', atk: 'Alto', her: 'Alto', wild: 'Medio' }
  },
  venom_hero: {
    id: 'venom_hero',
    name: 'Venom (Héroe)',
    alterEgo: 'Eddie Brock (Anti-Héroe)',
    originBox: 'Enter The Spider-Verse',
    initialUnlocked: false,
    isAntiHero: true,
    unlockCondition: 'Logra la Redención Simbiótica completando las 3 misiones en el Capítulo 6',
    avatar: './assets/heroes/venom_hero.png',
    role: 'Protector Letal / Bestia Simbiótica',
    trait: 'Fuerza Monstruosa y Resistencia',
    description: 'El simbionte se une al bando heroico con daño masivo y zarcillos protectores.',
    stats: { mov: 'Medio', atk: 'Muy Alto', her: 'Medio', wild: 'Alto' }
  },
  spider_2099: {
    id: 'spider_2099',
    name: 'Spider-Man 2099',
    alterEgo: 'Miguel O\'Hara',
    originBox: 'Enter The Spider-Verse',
    initialUnlocked: false,
    unlockCondition: 'Llega desde el futuro para impedir la crisis mutante (Victoria en Capítulo 7)',
    avatar: './assets/heroes/spider_2099.png',
    role: 'Tecnológico / Garras y Visión Lyla',
    trait: 'Garras de Aceleración y Traje de Moléculas Inestables',
    description: 'Combate frontal feroz con visión anticipada del mazo de plan maestro.',
    stats: { mov: 'Alto', atk: 'Muy Alto', her: 'Medio', wild: 'Medio' }
  },
  magneto_hero: {
    id: 'magneto_hero',
    name: 'Magneto (Héroe)',
    alterEgo: 'Erik Lehnsherr (Anti-Héroe)',
    originBox: 'X-Men Core Box',
    initialUnlocked: false,
    isAntiHero: true,
    unlockCondition: 'Pacta una tregua por el bien mutante (Victoria en Capítulo 7)',
    avatar: './assets/heroes/magneto_hero.png',
    role: 'Amo del Magnetismo / Escudos de Fuerza',
    trait: 'Control Ferroso y Campo Electromagnético',
    description: 'Manipulación masiva de fichas y escudos infranqueables para proteger al equipo.',
    stats: { mov: 'Medio', atk: 'Muy Alto', her: 'Muy Alto', wild: 'Alto' }
  },
  spider_ham: {
    id: 'spider_ham',
    name: 'Spider-Ham',
    alterEgo: 'Peter Porker',
    originBox: 'Enter The Spider-Verse',
    initialUnlocked: false,
    unlockCondition: 'Aparece por un portal dimensional cómico (Victoria en Capítulo 8)',
    avatar: './assets/heroes/spider_ham.png',
    role: 'Toon Force / Humor Desconcertante',
    trait: 'Leyes de Caricatura y Martillo Gigante',
    description: 'Rompe las reglas convencionales del juego y desconcierta a villanos siniestros.',
    stats: { mov: 'Medio', atk: 'Alto', her: 'Medio', wild: 'Muy Alto' }
  },
  mystique_hero: {
    id: 'mystique_hero',
    name: 'Mística (Héroe)',
    alterEgo: 'Raven Darkhölme (Anti-Héroe)',
    originBox: 'X-Men Core Box',
    initialUnlocked: false,
    isAntiHero: true,
    unlockCondition: 'Descubre su plan de doble juego y sella el pacto secreto (Capítulo 8)',
    avatar: './assets/heroes/mystique_hero.png',
    role: 'Infiltrada / Metamorfa Camaleónica',
    trait: 'Cambio de Forma y Sabotaje Encubierto',
    description: 'Copia las mejores habilidades de sus compañeros y desactiva trampas enemigas.',
    stats: { mov: 'Alto', atk: 'Alto', her: 'Alto', wild: 'Muy Alto' }
  }
};

const CAMPAIGN_VILLAINS = {
  rhino: {
    id: 'rhino',
    name: 'Rhino',
    subtitle: 'El Imparable Ariete Rinoceronte',
    originBox: 'Enter The Spider-Verse',
    avatar: './assets/villains/rhino.png',
    baseHp: 9,
    perHeroHp: 3,
    threatStyle: 'Destrucción física directa y embestidas devastadoras.'
  },
  sabretooth: {
    id: 'sabretooth',
    name: 'Dientes de Sable (Sabretooth)',
    subtitle: 'El Depredador Sádico de Mutantes',
    originBox: 'X-Men Core Box',
    avatar: './assets/villains/sabretooth.png',
    baseHp: 8,
    perHeroHp: 3,
    threatStyle: 'Caza implacable, acecho al héroe más débil y regeneración salvaje.'
  },
  mystique_villain: {
    id: 'mystique_villain',
    name: 'Mística (Villana)',
    subtitle: 'La Sombra de la Hermandad',
    originBox: 'X-Men Core Box',
    avatar: './assets/villains/mystique_villain.png',
    baseHp: 6,
    perHeroHp: 2,
    threatStyle: 'Manipulación de la prensa, trampas encubiertas y engaños mortales.'
  },
  green_goblin: {
    id: 'green_goblin',
    name: 'Duende Verde (Green Goblin)',
    subtitle: 'El Genio Psicópata de Oscorp',
    originBox: 'Enter The Spider-Verse',
    avatar: './assets/villains/green_goblin.png',
    baseHp: 10,
    perHeroHp: 3,
    threatStyle: 'Bombas calabaza en racimo, fuego sobre Nueva York y caos aéreo.'
  },
  juggernaut: {
    id: 'juggernaut',
    name: 'Juggernaut (Cain Marko)',
    subtitle: 'La Fuerza Arrasadora de Cyttorak',
    originBox: 'X-Men Core Box',
    avatar: './assets/villains/juggernaut.png',
    baseHp: 12,
    perHeroHp: 4,
    threatStyle: 'Inmune al freno; derriba edificios y arrasa con todo héroe que se interponga.'
  },
  venom_villain: {
    id: 'venom_villain',
    name: 'Venom (Villano)',
    subtitle: 'El Terror Negro Fuera de Control',
    originBox: 'Enter The Spider-Verse',
    avatar: './assets/villains/venom_villain.png',
    baseHp: 10,
    perHeroHp: 3,
    threatStyle: 'Agresión simbiótica voraz, zarcillos estranguladores e infección.'
  },
  magneto_villain: {
    id: 'magneto_villain',
    name: 'Magneto (Villano)',
    subtitle: 'El Caudillo de la Supremacía Mutante',
    originBox: 'X-Men Core Box',
    avatar: './assets/villains/magneto_villain.png',
    baseHp: 12,
    perHeroHp: 3,
    threatStyle: 'Campos electromagnéticos que bloquean ubicaciones y lanzas de metal.'
  },
  carnage: {
    id: 'carnage',
    name: 'Carnage (Matanza)',
    subtitle: 'El Heraldo del Caos Simbiótico Absoluto',
    originBox: 'Enter The Spider-Verse',
    avatar: './assets/villains/carnage.png',
    baseHp: 14,
    perHeroHp: 4,
    threatStyle: 'Letalidad desmedida, infección mutante masiva y exterminio desenfrenado.'
  }
};

const CAMPAIGN_PERKS = {
  perk_oscorp_intel: {
    id: 'perk_oscorp_intel',
    name: 'Datos Secretos de Oscorp',
    sourceChapter: 1,
    icon: '💾',
    description: 'Al inicio de la partida, entrega 1 Ficha Comodín a cualquier héroe.',
    effect: 'Recurso inicial flexible para resolver la primera crisis.'
  },
  perk_beast_serum: {
    id: 'perk_beast_serum',
    name: 'Suero Regenerador de Bestia',
    sourceChapter: 2,
    icon: '🧪',
    description: 'Una vez por partida, un héroe puede descartar este perk para curar 2 cartas de daño de su descarte a su mano.',
    effect: 'Cura de emergencia ante golpes críticos.'
  },
  perk_gwen_lens: {
    id: 'perk_gwen_lens',
    name: 'Cámara Antiespía de Gwen',
    sourceChapter: 3,
    icon: '📸',
    description: 'Ignora la primera Ficha de Exposición obtenida en la partida.',
    effect: 'Evita que el Daily Bugle difame a los héroes.'
  },
  perk_telekinetic_shield: {
    id: 'perk_telekinetic_shield',
    name: 'Escudo Psiónico de Jean',
    sourceChapter: 4,
    icon: '🧠',
    description: 'Los civiles en la ubicación del héroe líder no pueden ser eliminados por ataques de área del villano.',
    effect: 'Protección absoluta para misiones de rescate.'
  },
  perk_blackbird_hanger: {
    id: 'perk_blackbird_hanger',
    name: 'Despliegue Rápido del Blackbird',
    sourceChapter: 5,
    icon: '✈️',
    description: 'Una vez por partida, cualquier héroe puede moverse a cualquier ubicación del tablero sin gastar acciones de movimiento.',
    effect: 'Respuesta inmediata en el otro extremo de la ciudad.'
  },
  perk_symbiote_tendril: {
    id: 'perk_symbiote_tendril',
    name: 'Zarcillo Simbiótico Aliado',
    sourceChapter: 6,
    icon: '🖤',
    description: 'Cuando un héroe sufra daño letal, puede reducir el daño a 0 sufriendo 1 ficha de Crisis.',
    effect: 'Segunda oportunidad gracias al simbionte.'
  },
  perk_magnetic_pulse: {
    id: 'perk_magnetic_pulse',
    name: 'Pulso Magnético Táctico',
    sourceChapter: 7,
    icon: '🧲',
    description: 'Al activarse la 2ª misión completada, aturde al villano impidiendo que realice su siguiente efecto BAM.',
    effect: 'Freno temporal crucial contra el jefe.'
  },
  perk_cartoon_mallet: {
    id: 'perk_cartoon_mallet',
    name: 'Martillo Toon de Spider-Ham',
    sourceChapter: 8,
    icon: '🔨',
    description: 'Inflige 2 de daño directo a cualquier esbirro o amenaza sin importar las reglas de protección.',
    effect: 'Ataque cómico demoledor.'
  }
};

const CAMPAIGN_CHAPTERS = [
  {
    id: 1,
    act: 1,
    actTitle: 'ACTO I: LA SOMBRA EN MANHATTAN',
    title: 'Capítulo 1: Asalto a Medianoche en Oscorp',
    villainId: 'rhino',
    synopsis: 'Una violenta explosión sacude la torre de laboratorios de Oscorp en Midtown. Alguien ha contratado a Rhino como fuerza de ariete para quebrar las cámaras acorazadas criogénicas donde Norman Osborn almacenaba bio-muestras de mutantes y parásitos simbióticos desconocidos. Spider-Man acude al lugar y se topa con Wolverine y Cíclope, quienes seguían la pista de mutantes secuestrados. ¡Deben frenar la embestida antes de que Manhattan sea contaminada!',
    locations: [
      { name: 'Oscorp Tower', img: './assets/locations/oscorp.jpg' },
      { name: 'Midtown High School', img: './assets/locations/midtown_high.jpg' },
      { name: 'Central Park', img: './assets/locations/central_park.jpg' },
      { name: 'Daily Bugle', img: './assets/locations/daily_bugle.jpg' },
      { name: 'Brooklyn Bridge', img: './assets/locations/brooklyn_bridge.jpg' },
      { name: 'Sims Tower', img: './assets/locations/sims_tower.jpg' }
    ],
    setupNotes: [
      'Coloca al Villano Rhino en la Oscorp Tower.',
      'Distribuye 1 Matón y 1 Civil en cada ubicación.',
      'Usa las cartas de amenaza de Rhino con normalidad.',
      'Reserva especial: Ten listas 3 Fichas de Exposición físicas en la reserva de juego.'
    ],
    specialRules: 'Muros de Refuerzo: Rhino derriba la arquitectura de Oscorp. Cada vez que Rhino active un BAM, añade 1 Matón a su ubicación.',
    events: {
      initial: {
        title: '¡BRECHA EN LA BÓVEDA!',
        type: 'Evento de Inicio',
        badge: 'Alarma de Emergencia',
        text: 'Rhino ha destruido la primera compuerta. Coloca 1 Matón adicional en la Oscorp Tower y en Midtown High.',
        flavor: '"¡Fuera de mi camino, bichitos con disfraz! ¡Esta noche me pagan el triple!" — Rhino'
      },
      underPressure: {
        title: '¡FUGA DE GAS EXPERIMENTAL!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Giro de Trama',
        text: 'La contención se rompe. Cada héroe en Oscorp Tower debe descartar 1 carta de su mano o sufrir 1 herida. Rhino avanza 1 espacio en el sentido de las agujas del reloj.',
        flavor: 'Vapores verdes y violetas escapan de los tanques destrozados.'
      },
      accelerated: {
        title: '¡CARGA DESESPERADA!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Contraataque',
        text: 'Rhino embiste con furia ciega. Mueve a Rhino a la ubicación con más Civiles. Si hay 2 o más Civiles en esa ubicación, elimina 1 Civil.',
        flavor: '"¡Nadie detiene al Rinoceronte!"'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: LA BÓVEDA ASEGURADA!',
      epilogue: 'Con un esfuerzo combinado de redes arácnidas y garras de adamantium, lográis derribar a Rhino contra el pavimento reforzado. Entre los escombros de la bóveda, una silueta ágil salta desde las sombras: ¡Gata Negra (Felicia Hardy) estaba infiltrada robando los discos duros de Osborn! Felicia entrega los datos al equipo a cambio de protección.',
      unlockedHeroes: ['black_cat'],
      unlockedPerks: ['perk_oscorp_intel'],
      nextChapter: 2,
      bonusText: 'Gata Negra se une al equipo. Obtienes el Perk "Datos Secretos de Oscorp".'
    },
    lossOutcome: {
      title: 'DERROTA: RHINO ESCAPA CON LAS MUESTRAS',
      epilogue: 'Rhino arrolla la línea de héroes y salta a un helicóptero blindado sin distintivos que desaparece en la niebla de Nueva York. Las muestras simbióticas y los informes genéticos han caído en manos de sus contratistas. El rastro conduce directamente a Central Park, donde un olor a sangre despierta los peores instintos salvajes.',
      nextChapter: 2,
      penalties: 'En el Capítulo 2, Dientes de Sable comenzará con +1 Matón en su ubicación inicial por las muestras robadas.',
      bonusText: 'La misión fracasó, pero la pista de sangre los guía a la siguiente zona.'
    }
  },
  {
    id: 2,
    act: 1,
    actTitle: 'ACTO I: LA SOMBRA EN MANHATTAN',
    title: 'Capítulo 2: Cacería Sangrienta en Central Park',
    villainId: 'sabretooth',
    synopsis: 'Las pistas del asalto llevan a Central Park. Pero no están solos: Victor Creed (Dientes de Sable) ha sido enviado para emboscar a los mutantes de Xavier y a los arácnidos. Creed ha olido a Logan a kilómetros de distancia y se deleita acechando a los civiles en los senderos arbolados. Además, Hank McCoy (Bestia) se encuentra atrapado en el laboratorio móvil analizando los restos de las muestras.',
    locations: [
      { name: 'Central Park', img: './assets/locations/central_park.jpg' },
      { name: 'Daily Bugle', img: './assets/locations/daily_bugle.jpg' },
      { name: 'Midtown High School', img: './assets/locations/midtown_high.jpg' },
      { name: 'Brooklyn Bridge', img: './assets/locations/brooklyn_bridge.jpg' },
      { name: 'Morlock Tunnels', img: './assets/locations/morlock_tunnels.jpg' },
      { name: 'Oscorp Tower', img: './assets/locations/oscorp.jpg' }
    ],
    setupNotes: [
      'Coloca a Dientes de Sable en Central Park.',
      'Coloca 1 Civil en cada ubicación que tenga menos de 2 civiles.',
      'Si perdiste el Capítulo 1, añade 1 Matón a Central Park.'
    ],
    specialRules: 'Rastreo de Presa: Dientes de Sable siempre prioriza atacar al Héroe con menos cartas en su mano.',
    events: {
      initial: {
        title: '¡OLOR A SANGRE!',
        type: 'Evento de Inicio',
        badge: 'Depredador',
        text: 'Dientes de Sable aúlla en la noche. Coloca 1 Matón en Central Park y 1 en Morlock Tunnels.',
        flavor: '"¿Creías que podías esconderte de mí, enano? ¡Voy a arrancarte la carne de los huesos!" — Dientes de Sable'
      },
      underPressure: {
        title: '¡EMBOSCADA DE ENTRE LOS ÁRBOLES!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Giro de Trama',
        text: 'Creed salta desde la espesura. Dientes de Sable se mueve 2 espacios en dirección al Héroe con menos cartas en mano e inflige 1 daño inmediato.',
        flavor: 'Un destello de garras y colmillos corta la oscuridad del parque.'
      },
      accelerated: {
        title: '¡FRENESÍ ASESINO!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Furia Feral',
        text: 'Creed entra en berserk. Cada Matón en la ubicación de Dientes de Sable inflige 1 daño adicional en el próximo turno del Villano.',
        flavor: '"¡Ningún mutante saldrá vivo de esta noche!"'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: EL DEPREDADOR ENJAULADO!',
      epilogue: 'Wolverine clava sus garras en el hombro de Creed mientras Spider-Man lo inmoviliza con toneladas de telaraña reforzada. Bestia sale del laboratorio móvil con un vial estabilizado: ha descubierto que las muestras contienen un retrovirus simbiótico diseñado para infectar portadores del Gen-X. ¡Hank McCoy se une oficialmente a la patrulla de campo!',
      unlockedHeroes: ['beast'],
      unlockedPerks: ['perk_beast_serum'],
      nextChapter: 3,
      bonusText: 'Bestia desbloqueado. Perk "Suero Regenerador de Bestia" añadido al arsenal.'
    },
    lossOutcome: {
      title: 'DERROTA: CREED DEJA UNA HERIDA ABIERTA',
      epilogue: 'Creed logra zafarse tras herir de gravedad a uno de vuestros héroes y huye por las alcantarillas de Nueva York. Aunque no lograron capturarlo, Bestia logra rescatar los datos genéticos preliminares, advirtiendo que alguien de alto nivel está suplantando identidades en los medios de comunicación.',
      nextChapter: 3,
      penalties: 'Uno de tus héroes de esta partida queda "Herido": iniciará el Capítulo 3 con 1 carta menos en mano.',
      bonusText: 'La cacería continúa hacia las oficinas del Daily Bugle.'
    }
  },
  {
    id: 3,
    act: 1,
    actTitle: 'ACTO I: LA SOMBRA EN MANHATTAN',
    title: 'Capítulo 3: Sombras y Mentiras en el Daily Bugle',
    villainId: 'mystique_villain',
    synopsis: '¡Titulares de portada acusan a los X-Men y a Spider-Man de terrorismo mutante y sabotaje biológico en Oscorp! Tras la campaña de desprestigio se esconde Raven Darkhölme (Mística), operando como infiltrada de la Hermandad. Mística utiliza a los periodistas y fotógrafos del Daily Bugle como escudos humanos y testigos para arruinar a los héroes.',
    locations: [
      { name: 'Daily Bugle', img: './assets/locations/daily_bugle.jpg' },
      { name: 'Midtown High School', img: './assets/locations/midtown_high.jpg' },
      { name: 'Central Park', img: './assets/locations/central_park.jpg' },
      { name: 'Brooklyn Bridge', img: './assets/locations/brooklyn_bridge.jpg' },
      { name: 'Oscorp Tower', img: './assets/locations/oscorp.jpg' },
      { name: 'Xavier Institute', img: './assets/locations/xavier_institute.jpg' }
    ],
    setupNotes: [
      'Coloca a Mística en el Daily Bugle.',
      'REGLA DE TOKENS FÍSICOS: Coloca 1 Ficha de Periodista en el Daily Bugle.',
      'Ten listas las Fichas de Exposición (celulares) en la mesa.',
      'Cada vez que un héroe ataque en la ubicación donde se encuentre la ficha de Periodista, gana 1 Ficha de Exposición.'
    ],
    specialRules: 'Marrullería Periodística: Si los héroes acumulan 3 o más Fichas de Exposición, las acciones heroicas cuestan +1 acción debido al acoso de los flashes y las cámaras.',
    events: {
      initial: {
        title: '¡CÁMARAS, FLASH Y DIFAMACIÓN!',
        type: 'Evento de Inicio',
        badge: 'Prensa Hostil',
        text: 'J. Jonah Jameson transmite en vivo. Coloca 1 Ficha de Periodista en Daily Bugle y añade 1 Matón disfrazado de guardia.',
        flavor: '"¡Los tengo en la mira! ¡El bicho y los mutantes son una amenaza pública!"'
      },
      underPressure: {
        title: '¡CAMBIO DE ROSTRO!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Metamorfosis',
        text: 'Mística cambia de aspecto y se confunde entre la multitud. Intercambia la posición de Mística con el Héroe más alejado de ella.',
        flavor: 'Una secretaria del periódico sonríe con ojos amarillos antes de desvanecerse en el pasillo.'
      },
      accelerated: {
        title: '¡EDICIÓN EXTRA: TRAICIÓN!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Complot Mediático',
        text: 'La prensa publica fotos incriminatorias. Si tienes al menos 1 Ficha de Exposición, retira 1 Civil de la partida por pánico.',
        flavor: '"¡Miren lo que hacen cuando nadie los vigila!"'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: LA FARSA AL DESCUBIERTO!',
      epilogue: 'Lográis arrancar la máscara a los impostores frente a las cámaras en directo. Gwen Stacy (Ghost-Spider), quien estaba patrullando los tejados adyacentes, interviene con una ráfaga de telaraña sónica que desactiva los transmisores de Mística. Con la reputación a salvo, Ghost-Spider se incorpora de lleno a la misión.',
      unlockedHeroes: ['ghost_spider'],
      unlockedPerks: ['perk_gwen_lens'],
      nextChapter: 4,
      bonusText: 'Ghost-Spider desbloqueada. Perk "Cámara Antiespía de Gwen" añadido al inventario.'
    },
    lossOutcome: {
      title: 'DERROTA: LA CIUDAD EN CONTRA',
      epilogue: 'Mística escapa sonriendo tras dejar una bomba de humo. Al día siguiente, Nueva York amanece empapelada con titulares condenatorios. La policía y los cazadores de mutantes vigilan cada esquina con hostilidad.',
      nextChapter: 4,
      penalties: 'En el Capítulo 4, las ubicaciones comenzarán con 1 Matón adicional por la paranoia social.',
      bonusText: 'La opinión pública arde mientras el verdadero titiritero desciende del cielo.'
    }
  },
  {
    id: 4,
    act: 2,
    actTitle: 'ACTO II: EL ALZAMIENTO DE LA HERMANDAD',
    title: 'Capítulo 4: Terror Ardiente desde las Alturas',
    villainId: 'green_goblin',
    synopsis: 'Norman Osborn finalmente se quita la corbata y se calza la máscara del Duende Verde. Sobrevolando Manhattan en su planeador a reacción, desata un bombardeo incendiario masivo sobre los puentes y rascacielos. Osborn revela que estaba financiando a la Hermandad para distraer a los X-Men mientras él perfeccionaba una cepa del suero Goblin fusionado con parásitos extraterrestres.',
    locations: [
      { name: 'Brooklyn Bridge', img: './assets/locations/brooklyn_bridge.jpg' },
      { name: 'Daily Bugle', img: './assets/locations/daily_bugle.jpg' },
      { name: 'Oscorp Tower', img: './assets/locations/oscorp.jpg' },
      { name: 'Sims Tower', img: './assets/locations/sims_tower.jpg' },
      { name: 'Central Park', img: './assets/locations/central_park.jpg' },
      { name: 'Midtown High School', img: './assets/locations/midtown_high.jpg' }
    ],
    setupNotes: [
      'Coloca al Duende Verde en el Brooklyn Bridge.',
      'Coloca 1 Civil y 1 Matón en cada ubicación.',
      'Si perdiste el Capítulo 3, coloca 1 Matón extra en Brooklyn Bridge y en Oscorp Tower.'
    ],
    specialRules: 'Bombardeo Aéreo: El Duende Verde vuela impunemente. Siempre que el Duende Verde se mueva, inflige 1 daño a 1 Civil en la ubicación que abandona.',
    events: {
      initial: {
        title: '¡RISA MACABRA EN EL PUENTE!',
        type: 'Evento de Inicio',
        badge: 'Fuego Aéreo',
        text: 'Bombas calabaza caen en racimo. Coloca 1 ficha de Crisis en el Brooklyn Bridge.',
        flavor: '"¡JAJAJAJA! ¿Creían que los mutantes eran su único problema, héroes de pacotilla?" — Duende Verde'
      },
      underPressure: {
        title: '¡LLUVIA DE CALABAZAS ARDIENTES!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Devastación',
        text: 'Todas las ubicaciones adyacentes al Duende Verde sufren 1 herida (héroes o civiles a elección de los jugadores).',
        flavor: 'Ráfagas de fuego y metralla envuelven los cables del puente colgante.'
      },
      accelerated: {
        title: '¡FÓRMULA GOBLIN SOBRECARGADA!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Regeneración',
        text: 'El Duende Verde se inyecta un suero brillante. Recupera 2 puntos de vida y coloca 2 Matones en su ubicación.',
        flavor: '"¡Siento el poder cósmico en mis venas!"'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: EL DUENDE DERRIBADO!',
      epilogue: 'Cíclope descarga un rayo óptico colosal que parte el planeador del Duende en dos, haciéndolo estrellarse contra las aguas del East River. Jean Grey desciende flotando con su halo psíquico tras salvar a una decena de autobuses escolares que caían al vacío. Con su poder mental despierto, Jean se une al equipo.',
      unlockedHeroes: ['jean_grey'],
      unlockedPerks: ['perk_telekinetic_shield'],
      nextChapter: 5,
      bonusText: 'Jean Grey desbloqueada. Perk "Escudo Psiónico de Jean" listo para equiparse.'
    },
    lossOutcome: {
      title: 'DERROTA: MANHATTAN EN LLAMAS',
      epilogue: 'El Duende destruye los generadores eléctricos de media ciudad y escapa riendo triunfal. Las sirenas aúllan en una noche de fuego y confusión. Pero mientras la ciudad arde, una amenaza aún más colosal avanza rumbo al norte del estado.',
      nextChapter: 5,
      penalties: 'En el Capítulo 5, la Mansión X inicia con 2 fichas de daño en sus defensas perimetrales.',
      bonusText: 'La onda expansiva de la derrota atrae al ariete imparable de Cyttorak.'
    }
  },
  {
    id: 5,
    act: 2,
    actTitle: 'ACTO II: EL ALZAMIENTO DE LA HERMANDAD',
    title: 'Capítulo 5: El Asedio a la Mansión X',
    villainId: 'juggernaut',
    synopsis: '¡Cain Marko (Juggernaut) marcha imparable por los jardines del Instituto Xavier en Westchester! Su misión es demoler la escuela de jóvenes talentos y secuestrar a Cerebro para entregárselo a los científicos de la Hermandad. Ni las puertas de titanio ni los campos de fuerza pueden detener su masa mística. ¡La Spider-Family y los X-Men deben formar una línea inquebrantable!',
    locations: [
      { name: 'Xavier Institute', img: './assets/locations/xavier_institute.jpg' },
      { name: 'The Danger Room', img: './assets/locations/danger_room.jpg' },
      { name: 'Hangar Bay', img: './assets/locations/hangar_bay.jpg' },
      { name: 'Central Park', img: './assets/locations/central_park.jpg' },
      { name: 'Morlock Tunnels', img: './assets/locations/morlock_tunnels.jpg' },
      { name: 'Midtown High School', img: './assets/locations/midtown_high.jpg' }
    ],
    setupNotes: [
      'Coloca a Juggernaut en los jardines exteriores de Xavier Institute.',
      'Coloca 2 Civiles (estudiantes mutantes) en Xavier Institute y 1 en The Danger Room.',
      'Si perdiste el Capítulo 4, coloca 1 ficha de Crisis en Xavier Institute.'
    ],
    specialRules: 'Masa Imparable: Juggernaut NO se detiene ante héroes. Si Juggernaut se mueve a una ubicación con héroes, los empuja al espacio siguiente e inflige 1 daño a cada uno.',
    events: {
      initial: {
        title: '¡TEMBLOR EN EL INSTITUTO!',
        type: 'Evento de Inicio',
        badge: 'Fuerza Bruta',
        text: 'La tierra se sacude. Juggernaut derriba las verjas perimetrales. Coloca 2 Matones en el Xavier Institute.',
        flavor: '"¡Abran paso a Cain Marko! ¡Hoy convertiré esta escuelita en polvo!" — Juggernaut'
      },
      underPressure: {
        title: '¡AVALANCHA DE ESCOMBROS!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Impacto',
        text: 'Juggernaut embiste un muro de contención. La ubicación Xavier Institute queda bloqueada para acciones de movimiento voluntario durante esta ronda.',
        flavor: 'Columnas de mármol se vienen abajo sepultando las defensas.'
      },
      accelerated: {
        title: '¡EL PODER DE CYTTORAK!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Imparable',
        text: 'Juggernaut se mueve 2 espacios completos arrasando con Civiles y Héroes. Si derriba a algún héroe, recupera 1 de salud.',
        flavor: '"¡NADA PUEDE DETENER AL JUGGERNAUT!"'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: EL GIGANTE DERRUMBADO!',
      epilogue: 'Combinando telarañas gigantescas para formar una red de frenado con rayos cinéticos de Cíclope, lográis despojar a Juggernaut de su casco y noquearlo. En ese instante, los cielos truenan: Tormenta (Storm) y Spider-Woman descienden en formación cerrada, habiendo asegurado el espacio aéreo del Hangar Blackbird. ¡Dos nuevas heroínas legendarias se suman al combate!',
      unlockedHeroes: ['storm', 'spider_woman'],
      unlockedPerks: ['perk_blackbird_hanger'],
      nextChapter: 6,
      bonusText: 'Tormenta y Spider-Woman desbloqueadas. Perk "Despliegue Rápido del Blackbird" añadido.'
    },
    lossOutcome: {
      title: 'DERROTA: LA MANSIÓN EN RUINAS',
      epilogue: 'Juggernaut arrasa con el ala este del edificio antes de que logréis desviar su trayectoria hacia el lago. Los laboratorios de Cerebro sufren averías críticas y los sistemas de alerta temprana quedan temporalmente desconectados.',
      nextChapter: 6,
      penalties: 'En el Capítulo 6, no podrás utilizar la ubicación The Danger Room ni perks de escaneo.',
      bonusText: 'La escuela resiste a duras penas, pero la verdadera plaga negra acaba de despertar.'
    }
  },
  {
    id: 6,
    act: 2,
    actTitle: 'ACTO II: EL ALZAMIENTO DE LA HERMANDAD',
    title: 'Capítulo 6: La Hora del Simbionte — ¿Monstruo o Aliado?',
    villainId: 'venom_villain',
    synopsis: '¡Alerta máxima en las profundidades de Nueva York! Un ser negro y colosal con una araña blanca en el pecho devora patrullas armadas en los Túneles Morlock. Es Venom (Eddie Brock), quien enloquecido por la presencia de una cepa mutante sintética, cree que tanto héroes como villanos son sus enemigos mortales. Sin embargo, Peter Parker sabe que en el fondo Eddie no es un asesino despiadado como Carnage. ¿Podréis hacerle entrar en razón antes de que el simbionte consuma su alma?',
    locations: [
      { name: 'Morlock Tunnels', img: './assets/locations/morlock_tunnels.jpg' },
      { name: 'Midtown High School', img: './assets/locations/midtown_high.jpg' },
      { name: 'Daily Bugle', img: './assets/locations/daily_bugle.jpg' },
      { name: 'Central Park', img: './assets/locations/central_park.jpg' },
      { name: 'Oscorp Tower', img: './assets/locations/oscorp.jpg' },
      { name: 'Brooklyn Bridge', img: './assets/locations/brooklyn_bridge.jpg' }
    ],
    setupNotes: [
      'Coloca a Venom en los Morlock Tunnels.',
      'Coloca 1 Civil y 1 Matón en cada ubicación.',
      'CONDICIÓN DE REDENCIÓN ESPECIAL: Si los héroes completan las 3 Misiones de Héroe (Civiles, Matones y Amenazas) ANTES de asestar el golpe final a Venom, ¡Venom será REDIMIDO!'
    ],
    specialRules: 'Frenesí de Zarcillos: Venom ataca con zarcillos oscuros a todos los personajes en su ubicación cada vez que se active su carta de Master Plan con BAM.',
    events: {
      initial: {
        title: '¡SOMBRAS EN LAS ALCANTARILLAS!',
        type: 'Evento de Inicio',
        badge: 'Grito Simbiótico',
        text: 'Un rugido hace vibrar las tuberías de la ciudad. Venom aparece con zarcillos descontrolados. Coloca 1 Matón en cada túnel adyacente.',
        flavor: '"¡TODOS SON CULPABLES! ¡NOSOTROS NOS ALIMENTAREMOS DE SUS MIEDOS!" — Venom'
      },
      underPressure: {
        title: '¡CONFUSIÓN Y FURIA!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Dilema',
        text: 'Eddie Brock forcejea con el simbionte. Cada héroe en la ubicación de Venom puede elegir entre sufrir 1 daño o gastar 1 Ficha Heroica para calmar a la bestia.',
        flavor: '"¡Parker... aléjate... hay algo en nuestra sangre que no podemos frenar!"'
      },
      accelerated: {
        title: '¡ADVERTENCIA SOBRE CLETUS KASADY!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Revelación',
        text: 'Venom ruge con dolor: "¡Carnage... Cletus ha absorbido el virus mutante en Ravencroft!" Todos los Héroes obtienen 1 Ficha de Ataque gratis.',
        flavor: 'La verdadera amenaza sale a la luz.'
      }
    },
    winOutcome: {
      title: '¡VICTORIA ÉPICA: LA REDENCIÓN DE VENOM!',
      epilogue: 'Con campanas sónicas y la persuasión de Spider-Man y Logan, Venom se detiene jadeante. Eddie Brock recupera el control de su mente y extiende su garra: "¡Ese monstruo rojo de Kasady quiere exterminar a toda la ciudad... lucharemos a vuestro lado!". ¡VENOM SE UNE COMO HÉROE JUGABLE!',
      unlockedHeroes: ['venom_hero'],
      unlockedPerks: ['perk_symbiote_tendril'],
      nextChapter: 7,
      bonusText: '¡VENOM (ANTI-HÉROE) DESBLOQUEADO COMO HÉROE! Perk "Zarcillo Simbiótico Aliado" obtenido.'
    },
    lossOutcome: {
      title: 'DERROTA: LA BESTIA ESCAPA A LA OSCURIDAD',
      epilogue: 'Venom noquea a los héroes y desaparece por las tuberías maestras hacia los bajos fondos. La oportunidad de sumar un aliado formidable se ha perdido por ahora, y el rastro magnético de Genosha parpadea en los monitores.',
      nextChapter: 7,
      penalties: 'Venom no estará disponible como héroe en los siguientes capítulos y aparecerá como distracción en el Clímax.',
      bonusText: 'El tiempo se agota: Magneto ha tomado cartas en el asunto.'
    }
  },
  {
    id: 7,
    act: 3,
    actTitle: 'ACTO III: GUERRA TOTAL Y CRISIS OMEGA',
    title: 'Capítulo 7: La Ley del Más Fuerte en Genosha',
    villainId: 'magneto_villain',
    synopsis: 'Harto de las conspiraciones humanas y del uso indebido de sangre mutante, Erik Lehnsherr (Magneto) se atrinchera en la isla de Genosha. Magneto ha reunido armamento ferroso masivo y amenaza con lanzar un pulso electromagnético global que devolverá a la humanidad a la edad de piedra si no le entregan a los responsables de Oscorp. Los héroes deben viajar a Genosha para frenar su ira y convencerlo de que la plaga de Carnage extinguirá a humanos y mutantes por igual.',
    locations: [
      { name: 'Genosha', img: './assets/locations/genosha.jpg' },
      { name: 'Xavier Institute', img: './assets/locations/xavier_institute.jpg' },
      { name: 'Brooklyn Bridge', img: './assets/locations/brooklyn_bridge.jpg' },
      { name: 'Sims Tower', img: './assets/locations/sims_tower.jpg' },
      { name: 'Daily Bugle', img: './assets/locations/daily_bugle.jpg' },
      { name: 'Hangar Bay', img: './assets/locations/hangar_bay.jpg' }
    ],
    setupNotes: [
      'Coloca a Magneto en Genosha.',
      'Coloca 1 Civil y 1 Matón en cada ubicación de la isla.',
      'Si tienes a Tormenta o Cíclope en tu equipo, su presencia facilita el diálogo mutante.'
    ],
    specialRules: 'Muro Magnético: Magneto levanta barreras de metal retorcido. Los héroes deben gastar 1 acción adicional de Movimiento para entrar en Genosha.',
    events: {
      initial: {
        title: '¡CAMPO DE FUERZA ELECTROMAGNÉTICO!',
        type: 'Evento de Inicio',
        badge: 'Poder Mutante',
        text: 'Vigas de acero y chatarra blindada flotan en círculos sobre la isla. Coloca 1 ficha de Crisis en Genosha.',
        flavor: '"Charles siempre fue un soñador ingenuo. ¡Yo soy la espada que protegerá el futuro de nuestra especie!" — Magneto'
      },
      underPressure: {
        title: '¡PULSO ELECTROMAGNÉTICO (EMP)!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Apagón',
        text: 'Un pulso magnético anula la tecnología. Los héroes no pueden usar cartas de equipo ni perks hasta el final de la siguiente ronda.',
        flavor: 'Los visores y lanzatelarañas chisporrotean y se apagan.'
      },
      accelerated: {
        title: '¡LLAMADO A LA RAZÓN!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Tregua Armada',
        text: 'Los héroes muestran a Magneto las muestras de bio-infección de Carnage. Magneto comprende la magnitud de la catástrofe.',
        flavor: '"¿Un parásito capaz de esclavizar el Gen-X? ¡Esa aberración no sobrevivirá!"'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: EL PACTO DE GENOSHA!',
      epilogue: 'Magneto baja sus manos y desciende solemnemente: "Si esa criatura demente amenaza a mis hermanos mutantes, lucharemos juntos bajo el estandarte de Xavier". En ese instante, un vórtice temporal se rasga en el cielo: ¡Spider-Man 2099 (Miguel O\'Hara) aterriza desde el futuro, confirmando que la tregua de Magneto es la única esperanza de salvar la línea temporal!',
      unlockedHeroes: ['magneto_hero', 'spider_2099'],
      unlockedPerks: ['perk_magnetic_pulse'],
      nextChapter: 8,
      bonusText: '¡MAGNETO (MODO HÉROE) Y SPIDER-MAN 2099 DESBLOQUEADOS! Perk "Pulso Magnético Táctico" listo.'
    },
    lossOutcome: {
      title: 'DERROTA: MAGNETO SE AISLA DEL MUNDO',
      epilogue: 'Magneto expulsa a los héroes de Genosha mediante un huracán magnético y levanta una cúpula impenetrable sobre la isla, negándose a colaborar. De regreso a Manhattan, el silencio presagia la tormenta.',
      nextChapter: 8,
      penalties: 'Magneto no estará disponible como héroe aliado en el desenlace final.',
      bonusText: 'Solos y sin el apoyo de Genosha, deberán enfrentar la crisis.'
    }
  },
  {
    id: 8,
    act: 3,
    actTitle: 'ACTO III: GUERRA TOTAL Y CRISIS OMEGA',
    title: 'Capítulo 8: Pacto en las Sombras e Infiltración Dimensional',
    villainId: 'mystique_villain',
    synopsis: 'Antes de lanzar la ofensiva final sobre Ravencroft, los héroes descubren que Mística ha estado jugando una partida a tres bandas: infiltrada en Oscorp, vigilando a Magneto y buscando una forma de salvar a los jóvenes mutantes de la plaga de Kasady. Para comprobar si se puede confiar en ella, la someterán a una prueba definitiva de lealtad en los muelles de Brooklyn, mientras un curioso cerdo con traje de Spidey atraviesa una brecha dimensional...',
    locations: [
      { name: 'Brooklyn Bridge', img: './assets/locations/brooklyn_bridge.jpg' },
      { name: 'Daily Bugle', img: './assets/locations/daily_bugle.jpg' },
      { name: 'Morlock Tunnels', img: './assets/locations/morlock_tunnels.jpg' },
      { name: 'Midtown High School', img: './assets/locations/midtown_high.jpg' },
      { name: 'Central Park', img: './assets/locations/central_park.jpg' },
      { name: 'Hangar Bay', img: './assets/locations/hangar_bay.jpg' }
    ],
    setupNotes: [
      'Coloca a Mística en el Brooklyn Bridge.',
      'Coloca 1 Civil y 1 Matón en cada ubicación.',
      'Usa las Fichas de Exposición para representar los dispositivos de espionaje encubierto.'
    ],
    specialRules: 'Prueba de Espejos: Mística no ataca para matar; ataca para probar los reflejos y la moral del equipo. Si completas la misión de Amenazas primero, Mística capitula inmediatamente.',
    events: {
      initial: {
        title: '¡ENCUENTRO A MEDIANOCHE!',
        type: 'Evento de Inicio',
        badge: 'Espionaje',
        text: 'Niebla espesa en los muelles. Coloca 1 Matón en Brooklyn Bridge y 1 en Morlock Tunnels.',
        flavor: '"Si quieren derrotar a Kasady, necesitarán a alguien que conozca las alcantarillas de Oscorp mejor que nadie." — Mística'
      },
      underPressure: {
        title: '¡LLEGA EL HÉROE DE LOS DIBUJOS!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Toon Portal',
        text: '¡PLOP! Spider-Ham cae de cabeza sobre un contenedor de chatarra con un martillo gigante. Cada héroe roba 1 carta de su mazo.',
        flavor: '"¡Tranquilos todos, el jamón de la justicia ha llegado para salvar el día!" — Spider-Ham'
      },
      accelerated: {
        title: '¡EL MAPA DE LA ZONA CERO!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Información Vital',
        text: 'Mística entrega los planos de seguridad del nido de Carnage. Todos los Héroes ganan 1 Ficha Comodín.',
        flavor: 'La redención de la espía sella la alianza definitiva.'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: ALIANZA DE ESPÍAS Y DIBUJOS!',
      epilogue: 'Mística guarda sus armas y sonríe: "Veo que aún tienen agallas. Cuenten conmigo para infiltrarnos en el nido de Kasady". Y con el ingenio surrealista de Spider-Ham y su martillo de caricatura, el equipo cuenta con la fuerza más versátil del multiverso.',
      unlockedHeroes: ['mystique_hero', 'spider_ham'],
      unlockedPerks: ['perk_cartoon_mallet'],
      nextChapter: 9,
      bonusText: '¡MÍSTICA (MODO HÉROE) Y SPIDER-HAM DESBLOQUEADOS! Perk "Martillo Toon de Spider-Ham" obtenido.'
    },
    lossOutcome: {
      title: 'DERROTA: DESCONFIANZA Y FRACTURA',
      epilogue: 'La misión se complica y Mística se desvanece entre las sombras desconfiando de la capacidad del grupo. Spider-Ham se suma al equipo de todos modos entre quejas cómicas.',
      unlockedHeroes: ['spider_ham'],
      unlockedPerks: ['perk_cartoon_mallet'],
      nextChapter: 9,
      penalties: 'Mística no estará disponible como héroe para el asalto final.',
      bonusText: 'Spider-Ham desbloqueado de todas formas por amor al arte.'
    }
  },
  {
    id: 9,
    act: 3,
    actTitle: 'ACTO III: GUERRA TOTAL Y CRISIS OMEGA',
    title: 'Capítulo 9: El Frente Unido en Manhattan',
    villainId: 'rhino',
    synopsis: '¡La víspera del juicio final! Los remanentes de las fuerzas de choque del Duende Verde y Rhino intentan aislar Manhattan cortando las líneas de suministro de la ciudad antes de que Carnage desate el Protocolo de Mutación Máxima. Los héroes deben limpiar el perímetro exterior para permitir que la fuerza de asalto penetre en el epicentro de la pesadilla.',
    locations: [
      { name: 'Central Park', img: './assets/locations/central_park.jpg' },
      { name: 'Daily Bugle', img: './assets/locations/daily_bugle.jpg' },
      { name: 'Brooklyn Bridge', img: './assets/locations/brooklyn_bridge.jpg' },
      { name: 'Oscorp Tower', img: './assets/locations/oscorp.jpg' },
      { name: 'Midtown High School', img: './assets/locations/midtown_high.jpg' },
      { name: 'The Danger Room', img: './assets/locations/danger_room.jpg' }
    ],
    setupNotes: [
      'Coloca a Rhino en Central Park.',
      'Coloca 2 Matones en cada ubicación adyacente a Rhino.',
      'Esta es la batalla preparatoria: puedes equipar hasta 3 Perks de Campaña en lugar de 2 para esta misión.'
    ],
    specialRules: 'Limpieza de Perímetro: Cada vez que un héroe complete una Misión, todos los héroes en esa ubicación se curan 1 punto de daño.',
    events: {
      initial: {
        title: '¡BARRICADAS DE CHOQUE!',
        type: 'Evento de Inicio',
        badge: 'Frente de Guerra',
        text: 'Rhino y sus matones han levantado barricadas blindadas. Coloca 1 ficha de Crisis en cada ubicación sin civiles.',
        flavor: '"¡Esta ciudad no aguantará hasta el amanecer!"'
      },
      underPressure: {
        title: '¡COORDINACIÓN TOTAL!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Sinergia',
        text: 'La cooperación entre mutantes y arácnidos alcanza su punto máximo. Cada héroe puede intercambiar su posición con otro héroe aliado en el tablero.',
        flavor: 'Telarañas y rayos canalizados en perfecta armonía táctica.'
      },
      accelerated: {
        title: '¡RUMBO A LA ZONA CERO!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Carga Final',
        text: 'Las barricadas caen. El camino hacia el nido de Carnage está despejado. Todos los Héroes roban 2 cartas de su mazo.',
        flavor: '"¡Es la hora de acabar con esto para siempre!"'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: EL PERÍMETRO ESTÁ LIMPIO!',
      epilogue: 'Rhino es finalmente sometido y enviado a contención criogénica. Con la ciudad asegurada a sus espaldas, la alianza completa de 15 héroes divisa el cielo tiñéndose de un rojo carmesí enfermizo sobre Central Park: Carnage ha abierto los tanques. ¡Es hora del clímax definitivo!',
      nextChapter: 10,
      bonusText: '¡Todos los héroes desbloqueados están disponibles con la moral al máximo para el Capítulo 10!'
    },
    lossOutcome: {
      title: 'DERROTA: ASALTO A LA DESESPERADA',
      epilogue: 'La batalla se alarga más de lo debido y los héroes llegan exhaustos al perímetro de Central Park. El cielo ya es completamente rojo carmesí.',
      nextChapter: 10,
      penalties: 'En el Capítulo 10, cada héroe comenzará con 1 carta menos en mano por el cansancio acumulado.',
      bonusText: 'No hay marcha atrás: la batalla final comienza de todos modos.'
    }
  },
  {
    id: 10,
    act: 3,
    actTitle: 'ACTO III: GUERRA TOTAL Y CRISIS OMEGA',
    title: 'Capítulo 10: GRAN FINAL — MAXIMA MATANZA (MAXIMUM CARNAGE)',
    villainId: 'carnage',
    synopsis: '¡EL CLÍMAX DE LA CAMPAÑA! Cletus Kasady ha absorbido el tejido simbiótico potenciado con el Gen-X en el corazón de Manhattan. Ahora, como una hidra demente de zarcillos carmesí y bio-energía psíquica, Carnage planea desatar una ola de infección que convertirá a toda la población de la Tierra en monstruos simbióticos bajo su mando. Los X-Men, la Spider-Family y sus aliados más improbables se alzan como la última línea de defensa entre la luz y el caos absoluto.',
    locations: [
      { name: 'Central Park', img: './assets/locations/central_park.jpg' },
      { name: 'Daily Bugle', img: './assets/locations/daily_bugle.jpg' },
      { name: 'Oscorp Tower', img: './assets/locations/oscorp.jpg' },
      { name: 'Brooklyn Bridge', img: './assets/locations/brooklyn_bridge.jpg' },
      { name: 'Xavier Institute', img: './assets/locations/xavier_institute.jpg' },
      { name: 'The Danger Room', img: './assets/locations/danger_room.jpg' }
    ],
    setupNotes: [
      'JEFE FINAL: Coloca a Carnage en Central Park.',
      'SALUD OMEGA: Carnage posee 14 de salud base + 4 por cada Héroe en la partida.',
      'Coloca 1 Civil y 1 Matón en cada una de las 6 ubicaciones.',
      'EQUIPO TOTAL: Puedes seleccionar 4 Héroes de entre todo tu catálogo de héroes desbloqueados.',
      'EQUIPA HASTA 3 PERKS DE CAMPAÑA DE TU ARSENAL.'
    ],
    specialRules: 'Infección Simbiótica Masiva: Cada vez que un Civil sea eliminado por un efecto de Carnage, se transforma inmediatamente en 1 Matón Simbiótico en esa misma ubicación.',
    events: {
      initial: {
        title: '¡MAREA ROJA SOBRE NUEVA YORK!',
        type: 'Evento de Inicio',
        badge: 'Pesadilla Carmesí',
        text: 'Zarcillos gigantescos emergen de las alcantarillas y trepan por los edificios. Coloca 1 Matón en cada ubicación adyacente a Carnage.',
        flavor: '"¡JAJAJAJAJA! ¡NO HAY LEYES! ¡NO HAY CURA! ¡SÓLO HAY MATANZA!" — Carnage'
      },
      underPressure: {
        title: '¡ZARCILLOS VORACES!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Ataque Omega',
        text: 'Carnage lanza látigos simbióticos a través de la ciudad. Todos los Héroes que no estén en la ubicación de Carnage sufren 1 herida a menos que descarten 1 Ficha de Movimiento.',
        flavor: 'Espinas de biomasa carmesí desgarran el aire a kilómetros de distancia.'
      },
      accelerated: {
        title: '¡EL RUGIDO DEL FRENTE UNIDO!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Momento Heroico Definitivo',
        text: '¡La unión hace la fuerza! Todos los Héroes en el tablero obtienen 1 Ficha Heroica y 1 Ficha Comodín. Carnage pierde su inmunidad temporal.',
        flavor: '"¡Por los mutantes, por Nueva York, por la vida!"'
      }
    },
    winOutcome: {
      title: '¡VICTORIA ABSOLUTA: EL TRIUNFO DE LA ALIANZA!',
      epilogue: '¡LO HAN LOGRADO! Combinando una jaula magnética forjada por Magneto, descargas venenosas bioeléctricas de Miles y Spider-Woman, rayos devastadores de Cíclope y Tormenta, y el asalto frontal de Wolverine, Spider-Man y Venom, el simbionte rojo es arrancado del cuerpo de Cletus Kasady y sellado en una cápsula criogénica de vacío absoluto en la Sala de Peligro. Manhattan vuelve a respirar en paz. Los mutantes y los vigilantes arácnidos forjan una hermandad inmortal de respeto mutuo.',
      isCampaignWon: true,
      bonusText: '¡FELICITACIONES! Has completado con éxito la campaña narrativa "MARVEL UNITED: MAXIMUM MUTATION". ¡Una victoria histórica grabada para siempre en los anales de Marvel!'
    },
    lossOutcome: {
      title: 'DERROTA: LA CAÍDA DE LOS HÉROES',
      epilogue: 'Los zarcillos de Carnage sobrepasan las defensas de la alianza. Agotados y superados en número, los héroes deben replegarse a la Mansión X mientras Manhattan queda sumergida bajo una noche de zarcillos rojos. La guerra no ha terminado, pero hoy el caos se ha cobrado su más amargo tributo.',
      isCampaignWon: false,
      bonusText: 'Has luchado hasta el último aliento. Puedes reorganizar tu estrategia y volver a desafiar el Capítulo 10 cuando estés listo.'
    }
  }
];
