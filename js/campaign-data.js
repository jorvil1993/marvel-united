// MARVEL UNITED: MAXIMUM MUTATION (SPIDER-VERSE & X-MEN)
// Base de Datos Equilibrada y Adaptada a 2 Jugadores (Jorge & Esposa) + 1 Apoyo Opcional

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
    role: 'Infiltración / Fortuna y Suerte',
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
    unlockCondition: 'Intercéptala en la redacción del Daily Bugle (Victoria en Capítulo 3)',
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
    unlockCondition: 'Despierta su mente tras sofocar al Duende Verde (Victoria en Capítulo 4)',
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
    hpByHeroes: { 2: 5, 3: 8, 4: 11 },
    threatStyle: 'Destrucción física directa y embestidas devastadoras.'
  },
  sabretooth: {
    id: 'sabretooth',
    name: 'Dientes de Sable (Sabretooth)',
    subtitle: 'El Depredador Sádico de Mutantes',
    originBox: 'X-Men Core Box',
    avatar: './assets/villains/sabretooth.png',
    hpByHeroes: { 2: 5, 3: 7, 4: 10 },
    threatStyle: 'Caza implacable, acecho al héroe más débil y regeneración salvaje.'
  },
  mystique_villain: {
    id: 'mystique_villain',
    name: 'Mística (Villana)',
    subtitle: 'La Sombra de la Hermandad',
    originBox: 'X-Men Core Box',
    avatar: './assets/villains/mystique_villain.png',
    hpByHeroes: { 2: 4, 3: 6, 4: 9 },
    threatStyle: 'Manipulación de la prensa, trampas encubiertas y engaños mortales.'
  },
  green_goblin: {
    id: 'green_goblin',
    name: 'Duende Verde (Green Goblin)',
    subtitle: 'El Genio Psicópata de Oscorp',
    originBox: 'Enter The Spider-Verse',
    avatar: './assets/villains/green_goblin.png',
    hpByHeroes: { 2: 5, 3: 7, 4: 10 },
    threatStyle: 'Bombas calabaza en racimo, fuego sobre Nueva York y caos aéreo.'
  },
  juggernaut: {
    id: 'juggernaut',
    name: 'Juggernaut (Cain Marko)',
    subtitle: 'La Fuerza Arrasadora de Cyttorak',
    originBox: 'X-Men Core Box',
    avatar: './assets/villains/juggernaut.png',
    hpByHeroes: { 2: 8, 3: 8, 4: 8 },
    threatStyle: 'Inmune al freno; derriba edificios y arrasa con todo héroe que se interponga.'
  },
  venom_villain: {
    id: 'venom_villain',
    name: 'Venom (Villano)',
    subtitle: 'El Terror Negro Fuera de Control',
    originBox: 'Enter The Spider-Verse',
    avatar: './assets/villains/venom_villain.png',
    hpByHeroes: { 2: 5, 3: 8, 4: 11 },
    threatStyle: 'Agresión simbiótica voraz, zarcillos estranguladores e infección.'
  },
  magneto_villain: {
    id: 'magneto_villain',
    name: 'Magneto (Villano)',
    subtitle: 'El Caudillo de la Supremacía Mutante',
    originBox: 'X-Men Core Box',
    avatar: './assets/villains/magneto_villain.png',
    hpByHeroes: { 2: 5, 3: 7, 4: 10 },
    threatStyle: 'Campos electromagnéticos que bloquean ubicaciones y lanzas de metal.'
  },
  carnage: {
    id: 'carnage',
    name: 'Carnage (Matanza)',
    subtitle: 'El Heraldo del Caos Simbiótico Absoluto',
    originBox: 'Enter The Spider-Verse',
    avatar: './assets/villains/carnage.png',
    hpByHeroes: { 2: 5, 3: 8, 4: 11 },
    threatStyle: 'Letalidad desmedida, infección mutante masiva y exterminio desenfrenado.'
  }
};

const CAMPAIGN_PERKS = {
  perk_oscorp_intel: {
    id: 'perk_oscorp_intel',
    name: 'Datos Secretos de Oscorp',
    sourceChapter: 1,
    icon: '💾',
    description: 'Al inicio de la partida, entrega 1 Ficha Comodín a cualquier héroe para ayudarlo en su primer turno.',
    effect: 'Recurso inicial flexible para resolver la primera crisis.'
  },
  perk_beast_serum: {
    id: 'perk_beast_serum',
    name: 'Suero Médico de Bestia',
    sourceChapter: 2,
    icon: '🧪',
    description: 'Una vez por partida, un héroe puede descartar esta ventaja para recuperar 2 cartas de su descarte a su mano.',
    effect: 'Cura de emergencia ante golpes críticos.'
  },
  perk_gwen_lens: {
    id: 'perk_gwen_lens',
    name: 'Cámara Antiespía de Gwen',
    sourceChapter: 3,
    icon: '📸',
    description: 'Ignora la primera Ficha de Exposición (celular) que obtengan los héroes en la partida.',
    effect: 'Evita que el Daily Bugle difame a los héroes.'
  },
  perk_telekinetic_shield: {
    id: 'perk_telekinetic_shield',
    name: 'Escudo Psiónico de Jean',
    sourceChapter: 4,
    icon: '🧠',
    description: 'Los civiles en la ubicación del héroe líder no pueden ser eliminados por ataques del villano.',
    effect: 'Protección absoluta para misiones de rescate.'
  },
  perk_blackbird_hanger: {
    id: 'perk_blackbird_hanger',
    name: 'Despliegue del Blackbird',
    sourceChapter: 5,
    icon: '✈️',
    description: 'Una vez por partida, cualquier héroe puede volar a cualquier ubicación del tablero sin gastar acciones de movimiento.',
    effect: 'Respuesta inmediata en el otro extremo de la ciudad.'
  },
  perk_symbiote_tendril: {
    id: 'perk_symbiote_tendril',
    name: 'Zarcillo Protector Aliado',
    sourceChapter: 6,
    icon: '🖤',
    description: 'Cuando un héroe reciba un golpe que lo dejaría sin cartas, reduce el daño recibido a la mitad (redondeado hacia abajo).',
    effect: 'Segunda oportunidad gracias a la ayuda de Venom.'
  },
  perk_magnetic_pulse: {
    id: 'perk_magnetic_pulse',
    name: 'Pulso Magnético Táctico',
    sourceChapter: 7,
    icon: '🧲',
    description: 'Al completarse la 2ª misión, aturde al villano impidiendo que active su siguiente efecto BAM.',
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
    synopsis: 'Una violenta explosión sacude los laboratorios de Oscorp en Midtown. Alguien ha contratado a Rhino para reventar las cámaras blindadas criogénicas donde Norman Osborn almacenaba bio-muestras mutantes y tejido simbiótico. Spider-Man acude al lugar y se topa con Wolverine y Cíclope, quienes investigaban el secuestro de jóvenes mutantes. ¡Deben frenar al bruto antes de que Manhattan sea contaminada!',
    locations: [
      { name: 'Oscorp Tower', img: './assets/locations/oscorp.jpg' },
      { name: 'Midtown High School', img: './assets/locations/midtown_high.jpg' },
      { name: 'Central Park', img: './assets/locations/central_park.jpg' },
      { name: 'Daily Bugle', img: './assets/locations/daily_bugle.jpg' },
      { name: 'Brooklyn Bridge', img: './assets/locations/brooklyn_bridge.jpg' },
      { name: 'Sims Tower', img: './assets/locations/sims_tower.jpg' }
    ],
    setupNotes: [
      'Coloca al Villano Rhino en Oscorp Tower.',
      'Distribuye 1 Matón y 1 Civil en cada ubicación.',
      'Usa las cartas de amenaza de Rhino con normalidad.',
      'REGLA DE ORO DE CAMPAÑA: Si un evento pide colocar un Matón o Civil, colócalo en una casilla con espacio libre. NUNCA provoca Desbordamiento (Overflow).'
    ],
    specialRules: 'Muros de Refuerzo: La estructura de Oscorp tiembla. Cada vez que Rhino active BAM, coloca 1 Matón en su ubicación SOLO SI hay espacio libre (sin Desbordamiento).',
    events: {
      initial: {
        title: '¡ALARMA DE CONTENCIÓN!',
        type: 'Evento de Inicio',
        badge: 'Comienzo Táctico',
        text: 'Los héroes sorprenden a Rhino al ingresar a la bóveda: <strong>Cada héroe roba 1 carta adicional al inicio de su primer turno.</strong> Rhino derriba una compuerta: coloca 1 Matón en Oscorp Tower (solo si hay espacio libre; sin Desbordamiento).',
        flavor: '"¡Fuera de mi camino, bichitos! ¡Esta noche me pagan el triple por romper cosas!" — Rhino'
      },
      underPressure: {
        title: '¡ABRIENDO BRECHA HEROICA!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Avance Heroico',
        text: '¡Los héroes dominan la primera fase de la batalla! <strong>Cada Héroe gana inmediatamente 1 Ficha de Acción de su elección (Movimiento, Ataque o Heroica).</strong> Rhino ruge desorientado: avanza 1 espacio en sentido horario.',
        flavor: 'Las redes y los golpes coordinados hacen retroceder la masa blindada de Rhino.'
      },
      accelerated: {
        title: '¡GOLPE COMBINADO DE PRECISIÓN!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Clímax del Combate',
        text: '¡Momento decisivo! <strong>Inflige 2 de daño directo a Rhino inmediatamente</strong>, ignorando cualquier escudo. Rhino embiste a ciegas: coloca 1 Matón en la ubicación adyacente que tenga más espacio libre (sin Desbordamiento).',
        flavor: '"¡No puedo ver nada con estas telarañas en los ojos!" — Rhino'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: LA BÓVEDA ASEGURADA!',
      epilogue: 'Con un trabajo en equipo impecable, lográis derribar a Rhino contra el suelo reforzado. Entre las sombras de la bóveda aparece Gata Negra (Felicia Hardy) con los discos duros de Osborn en la mano: "Buen golpe, chicos. Estos archivos contienen datos que querrán ver...". Felicia se une oficialmente a su equipo.',
      unlockedHeroes: ['black_cat'],
      unlockedPerks: ['perk_oscorp_intel'],
      nextChapter: 2,
      bonusText: 'Gata Negra desbloqueada. Ventaja "Datos Secretos de Oscorp" añadida a su arsenal.'
    },
    lossOutcome: {
      title: 'RETIRADA TÁCTICA: EL RASTRO DE SANGRE',
      epilogue: 'Rhino logra abrirse paso hacia un helicóptero blindado y escapa. Las muestras han salido de Oscorp, pero Bestia y Spider-Man logran triangular el rastro térmico: se dirigen directamente a Central Park, donde un cazador despiadado ya los espera.',
      nextChapter: 2,
      penalties: 'En el Capítulo 2, Dientes de Sable comenzará con 1 Matón extra en Central Park (con espacio libre).',
      bonusText: 'La misión se complicó, pero la historia continúa hacia Central Park.'
    }
  },
  {
    id: 2,
    act: 1,
    actTitle: 'ACTO I: LA SOMBRA EN MANHATTAN',
    title: 'Capítulo 2: Cacería Sangrienta en Central Park',
    villainId: 'sabretooth',
    synopsis: 'Las pistas del asalto llevan a los senderos boscosos de Central Park. Victor Creed (Dientes de Sable) ha sido enviado para emboscar a los mutantes y a los arácnidos en plena noche. Creed ha olido a Logan a kilómetros de distancia y se divierte asustando a los civiles en los senderos. Mientras tanto, Hank McCoy (Bestia) intenta rescatar las muestras en el laboratorio móvil.',
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
      'Coloca 1 Civil en cada ubicación con menos de 2 civiles.',
      'Si perdiste el Cap. 1, coloca 1 Matón adicional en Central Park (solo si hay espacio libre).'
    ],
    specialRules: 'Rastreo de Presa: Dientes de Sable acecha al Héroe con menos cartas en mano, pero los Héroes en Central Park pueden esconderse entre los árboles.',
    events: {
      initial: {
        title: '¡EMBOSCADA NOCTURNA!',
        type: 'Evento de Inicio',
        badge: 'Rastreadores',
        text: 'Logan y Spidey detectan el olor de Creed antes de que ataque: <strong>Cada héroe gana 1 Ficha de Movimiento gratuita al inicio de la partida.</strong> Dientes de Sable acecha desde la penumbra.',
        flavor: '"¿Creías que podías esconderte de mí, enano? ¡Huelo tu miedo a kilómetros!" — Dientes de Sable'
      },
      underPressure: {
        title: '¡REFLEJOS FERALES Y CONTRAATAQUE!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Respuesta Heroica',
        text: '¡Los héroes dan vuelta la cacería! <strong>El héroe objetivo puede infligir 2 de daño directo a Dientes de Sable inmediatamente.</strong> Dientes de Sable retrocede 1 espacio aturdido (no provoca Desbordamiento).',
        flavor: 'Un destello de garras corta la noche: esta vez el cazador se convierte en presa.'
      },
      accelerated: {
        title: '¡DARDO TRANQUILIZANTE DE BESTIA!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Ciencia al Rescate',
        text: 'Hank McCoy dispara un dardo bioestabilizador: <strong>Dientes de Sable no podrá regenerar salud ni usar BAM en su siguiente turno. Además, cada héroe se cura 1 carta de daño.</strong>',
        flavor: '"¡Una dosis precisa de neurotoxina para calmar sus instintos feroces!" — Bestia'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: EL DEPREDADOR ENJAULADO!',
      epilogue: 'Wolverine inmoviliza a Creed mientras Spider-Man lo envuelve en toneladas de telaraña de alta resistencia. Bestia sale del laboratorio móvil con un vial estabilizado: ha descubierto que las muestras de Oscorp contienen un virus sintético diseñado para manipular mutantes. ¡Hank McCoy se une a la patrulla de campo!',
      unlockedHeroes: ['beast'],
      unlockedPerks: ['perk_beast_serum'],
      nextChapter: 3,
      bonusText: 'Bestia desbloqueado. Ventaja "Suero Médico de Bestia" añadida a tu arsenal.'
    },
    lossOutcome: {
      title: 'RETIRADA: HERIDA EN LA MANADA',
      epilogue: 'Creed logra zafarse tras una feroz escaramuza y huye por las alcantarillas. Bestia logra rescatar los informes preliminares de todas formas, advirtiendo que alguien de alto nivel está suplantando identidades en la prensa.',
      nextChapter: 3,
      penalties: 'Uno de los héroes descansará recuperándose; iniciará el Cap. 3 con 1 carta menos en mano.',
      bonusText: 'La pista mediática los conduce directamente a las oficinas del Daily Bugle.'
    }
  },
  {
    id: 3,
    act: 1,
    actTitle: 'ACTO I: LA SOMBRA EN MANHATTAN',
    title: 'Capítulo 3: Sombras y Mentiras en el Daily Bugle',
    villainId: 'mystique_villain',
    synopsis: '¡Titulares de primera plana acusan a Spider-Man y a los X-Men de terroristas mutantes en Nueva York! Detrás de la difamación se esconde Raven Darkhölme (Mística), operando como infiltrada de la Hermandad. Mística utiliza a los fotógrafos y periodistas del Daily Bugle como escudos para culpar a los héroes.',
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
      'REGLA DE FICHAS FÍSICAS: Coloca 1 Ficha de Periodista en el Daily Bugle.',
      'Ten listas las Fichas de Exposición (celulares) en la mesa.',
      'Solo se gana 1 ficha de Exposición cuando un héroe ataca en la ubicación donde se encuentre la ficha de Periodista.'
    ],
    specialRules: 'Cámaras y Flashes: Los héroes pueden gastar 1 acción Heroica para alejar a los periodistas y evitar fotos.',
    events: {
      initial: {
        title: '¡TRANSMISIÓN EN VIVO!',
        type: 'Evento de Inicio',
        badge: 'Prensa en Alerta',
        text: 'J. Jonah Jameson grita por megafonía. Coloca 1 Ficha de Periodista en Daily Bugle. <strong>Cada Héroe recibe 1 Ficha Heroica gratis</strong> para calmar a los testigos y rescatar civiles.',
        flavor: '"¡Tomen fotos de todo! ¡Quiero a la araña y a los mutantes en la portada de mañana!" — J. Jonah Jameson'
      },
      underPressure: {
        title: '¡TESTIGOS A FAVOR DE LOS HÉROES!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'La Verdad Sale a la Luz',
        text: '¡Los civiles defienden a los héroes frente a las cámaras! <strong>Descarta 1 Ficha de Exposición que tengan acumulada y cada héroe gana 1 Ficha Comodín.</strong> Mística se desconcierta y no puede moverse este turno.',
        flavor: '"¡Ellos nos salvaron la vida, dejen de mentir en las noticias!"'
      },
      accelerated: {
        title: '¡FOTOGRAFÍA INCRIMINATORIA!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Desenmascarada',
        text: '¡Logran fotografiar la piel azul de Mística en vivo! <strong>Descarta todas las Fichas de Exposición restantes. Los héroes pueden realizar 1 ataque gratis sobre Mística.</strong>',
        flavor: 'El flash de la cámara revela los ojos amarillos de la impostora frente a toda la redacción.'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: LA FARSA AL DESCUBIERTO!',
      epilogue: 'Mística es desenmascarada frente a las cámaras de televisión en vivo. Gwen Stacy (Ghost-Spider), quien patrullaba los tejados cercanos, desciende con una ráfaga de telaraña sónica que desactiva los transmisores de escape. ¡Ghost-Spider se incorpora de lleno al equipo!',
      unlockedHeroes: ['ghost_spider'],
      unlockedPerks: ['perk_gwen_lens'],
      nextChapter: 4,
      bonusText: 'Ghost-Spider desbloqueada. Ventaja "Cámara Antiespía de Gwen" añadida a tu arsenal.'
    },
    lossOutcome: {
      title: 'RETIRADA: LA CIUDAD EN SOSPECHA',
      epilogue: 'Mística escapa entre una cortina de humo y la prensa difunde fotos dudosas. Aunque la opinión pública está alterada, los héroes descubren la firma química del verdadero financista: Norman Osborn.',
      nextChapter: 4,
      penalties: 'En el Cap. 4, los héroes deberán rescatar a 1 civil adicional para completar misiones.',
      bonusText: 'El verdadero titiritero desciende volando sobre Manhattan.'
    }
  },
  {
    id: 4,
    act: 2,
    actTitle: 'ACTO II: EL ALZAMIENTO DE LA HERMANDAD',
    title: 'Capítulo 4: Terror Ardiente desde las Alturas',
    villainId: 'green_goblin',
    synopsis: 'Norman Osborn finalmente se calza la máscara del Duende Verde. Sobrevolando Manhattan en su planeador a reacción, desata un bombardeo incendiario sobre puentes y rascacielos. Osborn revela que estaba financiando a la Hermandad para distraer a los X-Men mientras él perfeccionaba una cepa del suero Goblin fusionada con parásitos extraterrestres.',
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
      'Si perdiste el Cap. 3, coloca 1 Matón extra en Brooklyn Bridge (solo con espacio libre).'
    ],
    specialRules: 'Bombardeo Aéreo: El Duende vuela entre edificios. Los héroes pueden usar acciones Heroicas para apagar incendios y proteger civiles.',
    events: {
      initial: {
        title: '¡REDES DE RESCATE EN EL PUENTE!',
        type: 'Evento de Inicio',
        badge: 'Despliegue Rápido',
        text: 'Los héroes despliegan redes gigantes antes del primer bombardeo: <strong>Cada héroe rescata 1 Civil inmediatamente en su ubicación inicial.</strong>',
        flavor: '"¡JAJAJAJA! ¡Miren cómo bailan mis pequeñas arañitas bajo el fuego de mis calabazas!" — Duende Verde'
      },
      underPressure: {
        title: '¡ESCUDO TELEQUINÉTICO PROTECTOR!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Poder Psiónico',
        text: '¡Jean Grey proyecta una barrera mental! <strong>Ningún Civil o Héroe puede sufrir daño por efectos de área durante la siguiente ronda. Cada héroe roba 1 carta.</strong>',
        flavor: 'Una cúpula rosada de energía psiónica desvía la metralla de las bombas calabaza.'
      },
      accelerated: {
        title: '¡PROPULSOR DEL PLANEADOR AVERIADO!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Ataque Certero',
        text: '¡Un disparo certero inutiliza el motor del planeador! <strong>El Duende Verde recibe 2 de daño directo de impacto y queda inmovilizado en su ubicación hasta el final de la ronda.</strong>',
        flavor: 'El planeador humea y pierde altura dando giros descontrolados.'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: EL DUENDE DERRIBADO!',
      epilogue: 'Cíclope descarga un rayo óptico colosal que derriba el planeador del Duende contra las aguas del río. Jean Grey desciende flotando tras salvar varios autobuses escolares con su telequinesis. Con su mente despierta, Jean se une oficialmente a su equipo.',
      unlockedHeroes: ['jean_grey'],
      unlockedPerks: ['perk_telekinetic_shield'],
      nextChapter: 5,
      bonusText: 'Jean Grey desbloqueada. Ventaja "Escudo Psiónico de Jean" lista para equiparse.'
    },
    lossOutcome: {
      title: 'RETIRADA: NOCHE DE HUMO',
      epilogue: 'El Duende escapa en un planeador de reserva. Sin embargo, logran interceptar sus comunicaciones hacia el norte del estado: un asedio colosal se dirige hacia la Mansión X.',
      nextChapter: 5,
      penalties: 'En el Cap. 5, los héroes empezarán con 1 ficha de Amenaza extra en el Hangar Bay.',
      bonusText: 'La batalla se traslada a las puertas del Instituto Xavier.'
    }
  },
  {
    id: 5,
    act: 2,
    actTitle: 'ACTO II: EL ALZAMIENTO DE LA HERMANDAD',
    title: 'Capítulo 5: El Asedio a la Mansión X',
    villainId: 'juggernaut',
    synopsis: '¡Cain Marko (Juggernaut) marcha imparable por los jardines del Instituto Xavier en Westchester! Su objetivo es demoler la escuela y secuestrar la tecnología de Cerebro para Osborn. Ni los muros de titanio ni los campos de fuerza pueden detener su masa mística. ¡La Spider-Family y los X-Men deben formar una muralla infranqueable!',
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
      'Si perdiste el Cap. 4, coloca 1 ficha de Crisis en el Hangar Bay.'
    ],
    specialRules: 'Masa Imparable: Juggernaut empuja a los héroes si entra a su casilla, pero la tecnología de la Sala de Peligro puede tenderle trampas.',
    events: {
      initial: {
        title: '¡DEFENSAS PERIMETRALES ACTIVAS!',
        type: 'Evento de Inicio',
        badge: 'Alerta en la Escuela',
        text: 'Las puertas de titanio se cierran para proteger a los estudiantes: <strong>Cada héroe recibe 1 Ficha de Ataque y 1 Ficha Heroica al iniciar la partida.</strong>',
        flavor: '"¡Abran paso a Cain Marko! ¡Hoy convertiré esta escuelita en escombros!" — Juggernaut'
      },
      underPressure: {
        title: '¡GRAVEDAD ARTIFICIAL DE LA SALA DE PELIGRO!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Trampa Tecnológica',
        text: '¡Activáis los campos de gravedad inversa de la escuela! <strong>Juggernaut queda completamente inmovilizado durante su siguiente turno de villano (no se mueve ni empuja héroes).</strong>',
        flavor: 'Campos de fuerza electromagnéticos clavan los pies gigantescos de Juggernaut al suelo.'
      },
      accelerated: {
        title: '¡CASCO MÍSTICO DESPRENDIDO!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Vulnerabilidad',
        text: '¡Lográis desatornillar su casco blindado! <strong>Todos los ataques contra Juggernaut durante esta partida infligen +1 de daño adicional. Además, cada héroe roba 1 carta.</strong>',
        flavor: 'Sin su casco protector de Cyttorak, Cain Marko queda vulnerable a los impactos.'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: EL GIGANTE DERRUMBADO!',
      epilogue: 'Combinando telarañas gigantes de amortiguación con rayos cinéticos de Cíclope, lográis derribar a Juggernaut. En ese instante, los cielos truenan: Tormenta (Storm) y Spider-Woman aterrizan en formación cerrada tras despejar el espacio aéreo del Hangar Blackbird. ¡Dos nuevas heroínas legendarias se suman a la alianza!',
      unlockedHeroes: ['storm', 'spider_woman'],
      unlockedPerks: ['perk_blackbird_hanger'],
      nextChapter: 6,
      bonusText: 'Tormenta y Spider-Woman desbloqueadas. Ventaja "Despliegue del Blackbird" añadida.'
    },
    lossOutcome: {
      title: 'RETIRADA: EL ALA ESTE EN ESCOMBROS',
      epilogue: 'Juggernaut daña parte de las instalaciones antes de ser expulsado hacia el lago. Cerebro sufre daños leves, pero los sensores detectan una masa biológica negra despertando en los túneles subterráneos.',
      nextChapter: 6,
      penalties: 'En el Cap. 6, los héroes no podrán usar la Sala de Peligro.',
      bonusText: 'La verdadera plaga oscura emerge en las profundidades de la ciudad.'
    }
  },
  {
    id: 6,
    act: 2,
    actTitle: 'ACTO II: EL ALZAMIENTO DE LA HERMANDAD',
    title: 'Capítulo 6: La Hora del Simbionte — ¿Monstruo o Aliado?',
    villainId: 'venom_villain',
    synopsis: '¡Alerta máxima en las profundidades de Nueva York! Un ser negro y colosal con una araña blanca en el pecho devora patrullas armadas en los Túneles Morlock. Es Venom (Eddie Brock), quien enloquecido por la presencia de una cepa mutante sintética, cree que todos son sus enemigos. Sin embargo, Peter sabe que Eddie no es un asesino despiadado como Carnage. ¿Podréis hacerle entrar en razón antes de que el simbionte consuma su mente?',
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
      'CONDICIÓN DE REDENCIÓN: Si los héroes completan las 3 Misiones de Héroe antes de vencer a Venom, ¡Venom se une como HÉROE JUGABLE!'
    ],
    specialRules: 'Frenesí de Zarcillos: Las vibraciones sónicas calman al simbionte.',
    events: {
      initial: {
        title: '¡ECOS EN EL SUBTERRÁNEO!',
        type: 'Evento de Inicio',
        badge: 'Rastreo Subterráneo',
        text: 'Peter y Logan reconocen la frecuencia del simbionte: <strong>Cada héroe recibe 1 Ficha Comodín al inicio de la partida.</strong>',
        flavor: '"¡TODOS SON CULPABLES! ¡NOSOTROS NOS ALIMENTAREMOS DE SUS MIEDOS!" — Venom'
      },
      underPressure: {
        title: '¡ONDA SÓNICA SALVADORA!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Vibración Calmante',
        text: '¡Peter golpea una tubería de vapor creando una campana sónica! <strong>El simbionte se repliega aturdido: todos los Civiles en la ubicación de Venom son evacuados a salvo inmediatamente.</strong>',
        flavor: '"¡Aaargh! ¡Ese sonido... deténganlo... Parker, ayúdanos!"'
      },
      accelerated: {
        title: '¡LA ADVERTENCIA DE EDDIE BROCK!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Revelación Vital',
        text: '¡Eddie Brock retoma el control por un instante! <strong>Venom no realiza su efecto BAM este turno y entrega 1 Ficha de Ataque y 1 de Movimiento a cada héroe.</strong>',
        flavor: '"¡Escuchen... Cletus Kasady... Carnage ha robado el virus mutante en Ravencroft!"'
      }
    },
    winOutcome: {
      title: '¡VICTORIA ÉPICA: LA REDENCIÓN DE VENOM!',
      epilogue: 'Con campanas sónicas y palabras firmes, Venom se detiene jadeante. Eddie Brock extiende su garra simbiótica: "¡Ese monstruo rojo de Kasady quiere extinguirlos a todos... lucharemos a su lado!". ¡VENOM SE UNE OFICIALMENTE COMO HÉROE JUGABLE!',
      unlockedHeroes: ['venom_hero'],
      unlockedPerks: ['perk_symbiote_tendril'],
      nextChapter: 7,
      bonusText: '¡VENOM (ANTI-HÉROE) DESBLOQUEADO COMO HÉROE! Ventaja "Zarcillo Protector Aliado" obtenida.'
    },
    lossOutcome: {
      title: 'RETIRADA: LA BESTIA EN LAS SOMBRAS',
      epilogue: 'Venom escapa hacia los bajos fondos. La oportunidad de sumarlo como aliado se aplaza por ahora, mientras los radares alertan de que Magneto ha tomado posiciones en Genosha.',
      nextChapter: 7,
      penalties: 'Venom no estará disponible como héroe en los siguientes capítulos.',
      bonusText: 'El tiempo apremia: Magneto prepara su propia respuesta armada.'
    }
  },
  {
    id: 7,
    act: 3,
    actTitle: 'ACTO III: GUERRA TOTAL Y CRISIS OMEGA',
    title: 'Capítulo 7: La Ley del Más Fuerte en Genosha',
    villainId: 'magneto_villain',
    synopsis: 'Harto de las manipulaciones humanas y de los experimentos con sangre mutante, Erik Lehnsherr (Magneto) se atrinchera en la isla de Genosha. Magneto amenaza con lanzar un pulso electromagnético que inutilizará toda la tecnología humana si no le entregan a los culpables. Los héroes viajan a Genosha para frenar su cólera y convencerlo de que la plaga de Carnage extinguirá a humanos y mutantes por igual.',
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
      'Si tienes a Tormenta o Cíclope en el equipo, facilitan el diálogo mutante.'
    ],
    specialRules: 'Muro Magnético: El metal obedece a Erik, pero los héroes pueden canalizar energías elementales para neutralizar sus campos.',
    events: {
      initial: {
        title: '¡TREGUA TÁCTICA PREVIA!',
        type: 'Evento de Inicio',
        badge: 'Respeto Mutuo',
        text: 'Magneto escucha las advertencias iniciales de sus hermanos mutantes: <strong>Cada héroe recibe 1 Ficha Heroica al empezar.</strong>',
        flavor: '"Charles siempre fue un soñador ingenuo. Demuéstrenme que tienen la fuerza para proteger nuestro futuro." — Magneto'
      },
      underPressure: {
        title: '¡DISIPACIÓN DE LA TORMENTA MAGNÉTICA!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Canalización Heroica',
        text: '¡Los héroes estabilizan los campos de fuerza de la isla! <strong>Cada héroe recupera 1 carta de su pila de descarte a su mano. Magneto retira 1 amenaza de Genosha.</strong>',
        flavor: 'Cíclope y Tormenta disipan las cargas estáticas demostrando control absoluto.'
      },
      accelerated: {
        title: '¡RECONOCIMIENTO DEL PELIGRO COMÚN!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Pacto de Sangre',
        text: '¡Magneto observa las muestras de infección simbiótica traídas por los héroes! <strong>Magneto otorga un escudo magnético a los héroes que previene las siguientes 2 heridas que fueran a sufrir.</strong>',
        flavor: '"¿Un parásito capaz de esclavizar el Gen-X? ¡Esa aberración no tocará a mis mutantes!"'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: EL PACTO DE GENOSHA!',
      epilogue: 'Magneto desciende solemnemente: "Si esa criatura demente amenaza a mis hermanos mutantes, lucharé a vuestro lado bajo el estandarte de la supervivencia". En ese instante, un vórtice temporal se abre en el cielo: ¡Spider-Man 2099 (Miguel O\'Hara) aterriza desde el futuro, confirmando que la tregua de Magneto es la clave para salvar la línea temporal!',
      unlockedHeroes: ['magneto_hero', 'spider_2099'],
      unlockedPerks: ['perk_magnetic_pulse'],
      nextChapter: 8,
      bonusText: '¡MAGNETO (MODO HÉROE) Y SPIDER-MAN 2099 DESBLOQUEADOS! Ventaja "Pulso Magnético Táctico" lista.'
    },
    lossOutcome: {
      title: 'RETIRADA: AISLAMIENTO MUTANTE',
      epilogue: 'Magneto se aísla en Genosha bajo un escudo impenetrable. Los héroes deben regresar a Manhattan sabiendo que deberán enfrentar el apocalipsis simbiótico sin su ayuda.',
      nextChapter: 8,
      penalties: 'Magneto no estará disponible como héroe aliado en el desenlace.',
      bonusText: 'La alianza avanza decidida a buscar apoyo en las sombras.'
    }
  },
  {
    id: 8,
    act: 3,
    actTitle: 'ACTO III: GUERRA TOTAL Y CRISIS OMEGA',
    title: 'Capítulo 8: Pacto en las Sombras e Infiltración Dimensional',
    villainId: 'mystique_villain',
    synopsis: 'Antes de lanzar la ofensiva final, los héroes descubren que Mística ha estado jugando una partida a tres bandas para proteger a los suyos. Para comprobar su lealtad definitiva, pactan un encuentro en los muelles de Brooklyn, mientras un curioso cerdito arácnido con martillo de caricatura atraviesa un portal dimensional...',
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
      'Misión de prueba y lealtad.'
    ],
    specialRules: 'Prueba de Reflejos: Mística evalúa la coordinación de los héroes.',
    events: {
      initial: {
        title: '¡ENCUENTRO EN LOS MUELLES!',
        type: 'Evento de Inicio',
        badge: 'Prueba Táctica',
        text: 'La niebla cubre los almacenes. Mística observa la destreza del equipo: <strong>Cada héroe recibe 1 Ficha de Movimiento gratis.</strong>',
        flavor: '"Si quieren derribar a Kasady, necesitarán a alguien que sepa entrar sin ser visto." — Mística'
      },
      underPressure: {
        title: '¡LLEGA EL HÉROE DE LOS DIBUJOS!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Toon Force al Rescate',
        text: '¡PLOP! Spider-Ham cae de un portal con un martillo gigante de caricatura: <strong>Elimina a todos los matones en su ubicación inmediatamente (sin Desbordamiento) y cada héroe roba 1 carta.</strong>',
        flavor: '"¡Tranquilos todos, el jamón de la justicia ha llegado para arreglar esto a martillazos!" — Spider-Ham'
      },
      accelerated: {
        title: '¡LOS PLANOS DEL NIDO ROJO!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Información Clasificada',
        text: '¡Mística entrega los códigos de desactivación de las trampas de Carnage! <strong>Todos los Héroes ganan 1 Ficha Comodín y se curan 1 herida.</strong>',
        flavor: '"Tomen esto. Es el mapa de ventilación de la zona cero. Salven a esta ciudad."'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: ALIANZA DE ESPÍAS Y DIBUJOS!',
      epilogue: 'Mística sonríe y guarda sus armas: "Tienen valor. Cuenten con mis habilidades para infiltrarnos". Con el ingenio surrealista de Spider-Ham y su martillo toon, el equipo cuenta con la fuerza más impredecible del multiverso.',
      unlockedHeroes: ['mystique_hero', 'spider_ham'],
      unlockedPerks: ['perk_cartoon_mallet'],
      nextChapter: 9,
      bonusText: '¡MÍSTICA (MODO HÉROE) Y SPIDER-HAM DESBLOQUEADOS! Ventaja "Martillo Toon de Spider-Ham" obtenida.'
    },
    lossOutcome: {
      title: 'RETIRADA: ACUERDO FORZADO',
      epilogue: 'El encuentro se complica pero Spider-Ham se suma al equipo de todos modos para no perderse la fiesta.',
      unlockedHeroes: ['spider_ham'],
      unlockedPerks: ['perk_cartoon_mallet'],
      nextChapter: 9,
      bonusText: 'Spider-Ham desbloqueado listo para la batalla final.'
    }
  },
  {
    id: 9,
    act: 3,
    actTitle: 'ACTO III: GUERRA TOTAL Y CRISIS OMEGA',
    title: 'Capítulo 9: El Frente Unido en Manhattan',
    villainId: 'rhino',
    synopsis: '¡La víspera del juicio final! Los remanentes de las fuerzas de choque intentan cercar Manhattan antes de que Carnage desate la infección total. Los héroes deben limpiar el perímetro exterior para permitir que la fuerza de asalto penetre en el epicentro de Central Park.',
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
      'Coloca 1 Civil y 1 Matón en cada ubicación.',
      'BATALLA PREPARATORIA: Puedes equipar hasta 3 Ventajas de Campaña para esta misión.'
    ],
    specialRules: 'Sinergia Total: Cada vez que completéis una misión heroica, los héroes se curan 1 punto de daño.',
    events: {
      initial: {
        title: '¡POSICIONES DE COMBATE!',
        type: 'Evento de Inicio',
        badge: 'Frente Unido',
        text: 'Toda la alianza actúa como un solo cuerpo: <strong>Cada héroe comienza la partida con 1 Ficha de Ataque y 1 Ficha de Movimiento gratis.</strong>',
        flavor: '"¡Por los mutantes, por Nueva York, por nuestras familias!"'
      },
      underPressure: {
        title: '¡SINERGIA ARÁCNIDA Y MUTANTE!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Armonía Táctica',
        text: '¡Coordinación perfecta en el campo de batalla! <strong>Cada héroe puede intercambiar su posición con otro héroe en el tablero e infligir 1 de daño a un matón en su nueva casilla.</strong>',
        flavor: 'Rayos ópticos, telarañas y garras coordinadas en un ballet destructivo perfecto.'
      },
      accelerated: {
        title: '¡CAMINO A LA ZONA CERO DESPEJADO!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Carga Definitiva',
        text: '¡Las líneas enemigas colapsan! <strong>Todos los Héroes roban 2 cartas de su mazo y se curan 1 herida. La victoria está a tiro de piedra.</strong>',
        flavor: '"¡El perímetro está limpio! ¡Todos a Central Park, ahora!"'
      }
    },
    winOutcome: {
      title: '¡VICTORIA: EL PERÍMETRO ESTÁ ASEGURADO!',
      epilogue: 'Rhino y sus matones son finalmente neutralizados. El cielo sobre Central Park se tiñe de un rojo sangre espeluznante: Carnage ha abierto los tanques de biomasa mutante. ¡Es la hora de la batalla definitiva por el destino del planeta!',
      nextChapter: 10,
      bonusText: '¡Todos los héroes desbloqueados están disponibles con la moral al máximo para el Capítulo 10!'
    },
    lossOutcome: {
      title: 'ASALTO A LA DESESPERADA',
      epilogue: 'La escaramuza se extiende más de lo planeado y llegan con el tiempo justo a Central Park, donde los zarcillos rojos ya cubren los árboles.',
      nextChapter: 10,
      penalties: 'En el Cap. 10, no podrán usar perks en la primera ronda.',
      bonusText: 'No hay tiempo que perder: la batalla final comienza de inmediato.'
    }
  },
  {
    id: 10,
    act: 3,
    actTitle: 'ACTO III: GUERRA TOTAL Y CRISIS OMEGA',
    title: 'Capítulo 10: GRAN FINAL — MAXIMA MATANZA (MAXIMUM CARNAGE)',
    villainId: 'carnage',
    synopsis: '¡EL CLÍMAX DE LA CAMPAÑA! Cletus Kasady ha absorbido el tejido simbiótico fusionado con el Gen-X mutante. Transformado en un titán carmesí con zarcillos gigantescos y energía psíquica, Carnage busca infectar a toda la población del mundo. Los X-Men, la Spider-Family y sus aliados son la última línea de defensa entre la vida y el caos simbiótico absoluto.',
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
      'SALUD DEL JEFE: Se calcula automáticamente en la app según si juegan 2 o 3 héroes.',
      'Coloca 1 Civil y 1 Matón en cada una de las 6 ubicaciones.',
      'PUEDES EQUIPAR HASTA 3 VENTAJAS DE CAMPAÑA PARA ESTA BATALLA FINAL.'
    ],
    specialRules: 'Marea Roja: Los zarcillos amenazan la ciudad, pero la fuerza combinada de la alianza tiene la última palabra.',
    events: {
      initial: {
        title: '¡EL DESPERTAR DE LA MATANZA MÁXIMA!',
        type: 'Evento de Inicio',
        badge: 'Batalla por el Mañana',
        text: 'Toda la experiencia de la campaña se concentra en este momento: <strong>Cada héroe recibe 1 Ficha Comodín y 1 Ficha Heroica al empezar.</strong>',
        flavor: '"¡JAJAJAJAJA! ¡NO HAY LEYES! ¡NO HAY MUTANTES NI HUMANOS! ¡SÓLO HAY MATANZA!" — Carnage'
      },
      underPressure: {
        title: '¡DESCARGA BIOELÉCTRICA COMBINADA!',
        type: 'Bajo Presión (1ª Misión Completa)',
        badge: 'Golpe a la Infección',
        text: '¡Miles Morales y Spider-Woman desatan un pulso eléctrico que calcina los zarcillos rojos! <strong>Elimina hasta 3 matones simbióticos del tablero (sin Desbordamiento). Además, Carnage sufre 2 de daño directo.</strong>',
        flavor: 'Chispas bioeléctricas amarillas y azules queman la biomasa carmesí liberando a los rehenes.'
      },
      accelerated: {
        title: '¡LA JAULA DE VACÍO Y EL GOLPE DEFINITIVO!',
        type: 'Acelerado (2ª Misión Completa)',
        badge: 'Triunfo de la Alianza',
        text: '¡Magneto forja una cápsula ferrosa hermética mientras Wolverine y Spider-Man asestan el golpe de gracia! <strong>Inflige 4 de daño directo a Carnage y cada héroe roba 2 cartas.</strong>',
        flavor: '"¡Por los mutantes, por Nueva York, por la vida!"'
      }
    },
    winOutcome: {
      title: '¡VICTORIA ABSOLUTA: EL TRIUNFO DE LA ALIANZA!',
      epilogue: '¡LO HAN LOGRADO! El simbionte rojo es arrancado de Cletus Kasady mediante la jaula magnética y sellado en una cápsula criogénica de contención en la Sala de Peligro. Manhattan vuelve a respirar en paz. Los mutantes y los héroes arácnidos forjan una hermandad inmortal de respeto mutuo.',
      isCampaignWon: true,
      bonusText: '¡FELICITACIONES! Has completado con éxito la campaña "MARVEL UNITED: MAXIMUM MUTATION". ¡Una victoria legendaria para ti y tu esposa!'
    },
    lossOutcome: {
      title: 'RETIRADA ESTRATÉGICA',
      epilogue: 'Carnage es formidable, pero los héroes logran replegarse a la Mansión X para reagruparse. La guerra no ha terminado: pueden reorganizar sus ventajas y desafiar nuevamente el Capítulo 10 cuando estén listos.',
      isCampaignWon: false,
      bonusText: 'Pueden intentarlo de nuevo reorganizando sus ventajas y héroes en la app.'
    }
  }
];
