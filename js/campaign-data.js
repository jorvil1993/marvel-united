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
    "id": "1",
    "step": 1,
    "act": 1,
    "actTitle": "ACTO I: LA SOMBRA EN MANHATTAN",
    "title": "Capítulo 1: Asalto a Medianoche en Oscorp",
    "villainId": "rhino",
    "assignedHeroSlot1": "cyclops",
    "assignedHeroSlot2": "miles_morales",
    "assignedHeroSlot3": "black_cat",
    "squadOptions": [
      "cyclops",
      "miles_morales",
      "black_cat",
      "spider_man"
    ],
    "comicReference": "Champions Vol. 2 (Mark Waid) & Ultimate Spider-Man",
    "synopsis": "Miles Morales patrullaba Brooklyn investigando robos de generadores de energía cuando detectó un apagón repentino en los laboratorios de Oscorp en Midtown. Al infiltrarse por la ventilación, se topa de frente con Scott Summers (Cíclope), quien rastreaba una fuga de radiación mutante detectada por Cerebro. Antes de poder coordinarse, las compuertas de titanio revientan en pedazos: ¡Rhino ha sido contratado para saquear las cámaras criogénicas donde Norman Osborn almacena bio-muestras mutantes y tejido simbiótico! Cíclope y Miles deberán unir la bioelectricidad del rayo veneno con los rayos ópticos de conmoción para frenar al bruto antes de que Manhattan sea contaminada. Y en las vigas del techo, la Gata Negra (Felicia Hardy) vigila lista para apoyar.",
    "locations": [
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg",
        "startVillain": true,
        "startHero2": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg",
        "startHero1": true
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startHero3": true
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg"
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Rhino): Inicia en OSCORP TOWER — Rhino derriba las compuertas acorazadas de Norman Osborn para saquear bio-muestras mutantes y tejido simbiótico.",
      "👤 JORGE (Cíclope (Scott)): Inicia en MIDTOWN HIGH SCHOOL — Cíclope vigilaba el sector tras detectar picos inusuales de radiación con Cerebro cerca del instituto.",
      "🌸 ESPOSA (Miles Morales): Inicia en OSCORP TOWER — Miles Morales se infiltró por los ductos de ventilación tras ver el apagón repentino en la torre.",
      "⭐ APOYO (Gata Negra (Felicia), si juega): Inicia en DAILY BUGLE — Gata Negra vigila desde las alturas de la redacción lista para cortar la ruta de escape de los contrabandistas.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Muros de Refuerzo: La estructura de Oscorp tiembla. Cada vez que Rhino active BAM, coloca 1 Matón en su ubicación SOLO SI hay espacio libre (sin Desbordamiento).",
    "events": {
      "initial": {
        "title": "¡ALARMA DE CONTENCIÓN!",
        "type": "Evento de Inicio",
        "badge": "Comienzo Táctico",
        "text": "Cíclope y Miles sorprenden a Rhino al ingresar a la bóveda: <strong>Cada héroe roba 1 carta adicional al inicio de su primer turno.</strong> Rhino derriba una compuerta: coloca 1 Matón en Oscorp Tower (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Fuera de mi camino, bichitos! ¡Esta noche me pagan el triple por romper cosas!\" — Rhino"
      },
      "underPressure": {
        "title": "¡ABRIENDO BRECHA HEROICA!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Avance Heroico",
        "text": "¡La coordinación entre el mutante y la araña da sus frutos! <strong>Cada Héroe gana inmediatamente 1 Ficha de Acción de su elección (Movimiento, Ataque o Heroica).</strong> Rhino ruge desorientado: avanza 1 espacio en sentido horario.",
        "flavor": "Las redes bioeléctricas y los rayos de precisión hacen retroceder la masa blindada de Rhino."
      },
      "accelerated": {
        "title": "¡GOLPE COMBINADO DE PRECISIÓN!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Clímax del Combate",
        "text": "¡Momento decisivo! <strong>Inflige 2 de daño directo a Rhino inmediatamente</strong>, ignorando cualquier escudo. Rhino embiste a ciegas: coloca 1 Matón en la ubicación adyacente que tenga más espacio libre (sin Desbordamiento).",
        "flavor": "\"¡No puedo ver nada con estas telarañas en los ojos!\" — Rhino"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: LA BÓVEDA ASEGURADA!",
      "epilogue": "Con un trabajo en equipo impecable, Cíclope y Miles logran derribar a Rhino contra el suelo reforzado. Entre las sombras de la bóveda aparece Gata Negra (Felicia Hardy) con los discos duros de Osborn en la mano: \"Buen golpe, chicos. Estos archivos revelan que Victor Creed (Dientes de Sable) fue enviado a interceptar supervivientes en Central Park\". ¡Gata Negra se une oficialmente a la alianza!",
      "unlockedHeroes": [
        "black_cat"
      ],
      "unlockedPerks": [
        "perk_oscorp_intel"
      ],
      "nextChapter": "2A",
      "bonusText": "Gata Negra desbloqueada. Ventaja \"Datos Secretos de Oscorp\" obtenida. Avanzan con iniciativa hacia Central Park (Capítulo 2A)."
    },
    "lossOutcome": {
      "title": "DERROTA: FUGA DE OSCORP Y ALERTA PÚBLICA",
      "epilogue": "Rhino derriba los pilares maestros y escapa en un transporte blindado con los contenedores criogénicos de biomasa. La explosión hace sonar todas las alarmas de Manhattan. Para cubrir el robo, la Hermandad activa inmediatamente a Mística en el Daily Bugle para culpar públicamente a los mutantes y a los héroes arácnidos de terrorismo y desastre civil. ¡Toda la policía y la prensa van tras de ustedes!",
      "nextChapter": "2B",
      "penalties": "No se desbloquea a Gata Negra (quedó cercada en los escombros). La ciudad entra en estado de sospecha.",
      "bonusText": "La derrota fuerza un despliegue de emergencia en el Daily Bugle para frenar la difamación (Capítulo 2B)."
    },
    "deployment": {
      "villain": {
        "location": "Oscorp Tower",
        "reason": "Rhino derriba las compuertas acorazadas de Norman Osborn para saquear bio-muestras mutantes y tejido simbiótico."
      },
      "hero1": {
        "location": "Midtown High School",
        "reason": "Cíclope vigilaba el sector tras detectar picos inusuales de radiación con Cerebro cerca del instituto."
      },
      "hero2": {
        "location": "Oscorp Tower",
        "reason": "Miles Morales se infiltró por los ductos de ventilación tras ver el apagón repentino en la torre."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Gata Negra vigila desde las alturas de la redacción lista para cortar la ruta de escape de los contrabandistas."
      },
      "locations": [
        "Oscorp Tower",
        "Midtown High School",
        "Central Park",
        "Daily Bugle",
        "Brooklyn Bridge",
        "Sims Tower"
      ]
    }
  },
  {
    "id": "2A",
    "step": 2,
    "act": 1,
    "actTitle": "ACTO I: LA SOMBRA EN MANHATTAN",
    "title": "Capítulo 2A: Cacería Feral en Central Park (Ruta con Iniciativa)",
    "villainId": "sabretooth",
    "assignedHeroSlot1": "wolverine",
    "assignedHeroSlot2": "spider_man",
    "assignedHeroSlot3": "beast",
    "squadOptions": [
      "wolverine",
      "spider_man",
      "beast",
      "black_cat"
    ],
    "comicReference": "Astonishing Spider-Man & Wolverine (Jason Aaron)",
    "synopsis": "Gracias a los datos rescatados por Gata Negra en Oscorp, la alianza llega a tiempo a Central Park. Victor Creed (Dientes de Sable) ha sido enviado para eliminar testigos civiles en la niebla nocturna. Logan (Wolverine) capta el olor a sangre de su viejo enemigo y llama de urgencia a su compañero Peter Parker (Spider-Man). Con la iniciativa de su lado, Peter teje redes de contención entre los árboles para proteger a los guardaparques mientras Logan rastrea a Creed en la penumbra, apoyados desde el laboratorio móvil por Hank McCoy (Bestia).",
    "locations": [
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg",
        "startHero2": true
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startHero3": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg"
      },
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Dientes de Sable): Inicia en CENTRAL PARK — Dientes de Sable acecha en la espesura del parque nocturno buscando eliminar testigos civiles.",
      "👤 JORGE (Lobezno (Logan)): Inicia en CENTRAL PARK — Lobezno ha rastreado el olor a sangre de Creed hasta la arboleda y se lanza a interceptarlo.",
      "🌸 ESPOSA (Spider-Man (Peter)): Inicia en MIDTOWN HIGH SCHOOL — Spider-Man (Peter) patrullaba cerca y acude a toda prisa al oír los rugidos ferales entre los árboles.",
      "⭐ APOYO (Bestia (Hank), si juega): Inicia en DAILY BUGLE — Bestia coordina la búsqueda desde un laboratorio móvil en el centro para monitorear lecturas biológicas.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Rastreo de Presa: Dientes de Sable acecha al Héroe con menos cartas en mano, pero los Héroes en Central Park pueden esconderse entre los árboles.",
    "events": {
      "initial": {
        "title": "¡EMBOSCADA NOCTURNA!",
        "type": "Evento de Inicio",
        "badge": "Rastreadores",
        "text": "Logan y Spidey detectan el olor de Creed antes de que ataque: <strong>Cada héroe gana 1 Ficha de Movimiento gratuita al inicio de la partida.</strong> Dientes de Sable acecha desde la penumbra.",
        "flavor": "\"¿Creías que podías esconderte de mí, enano? ¡Huelo tu miedo a kilómetros!\" — Dientes de Sable"
      },
      "underPressure": {
        "title": "¡REFLEJOS FERALES Y CONTRAATAQUE!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Respuesta Heroica",
        "text": "¡Los héroes dan vuelta la cacería! <strong>El héroe objetivo puede infligir 2 de daño directo a Dientes de Sable inmediatamente.</strong> Dientes de Sable retrocede 1 espacio aturdido (no provoca Desbordamiento).",
        "flavor": "Un destello de garras corta la noche: esta vez el cazador se convierte en presa."
      },
      "accelerated": {
        "title": "¡DARDO TRANQUILIZANTE DE BESTIA!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Ciencia al Rescate",
        "text": "Hank McCoy dispara un dardo bioestabilizador: <strong>Dientes de Sable no podrá regenerar salud ni usar BAM en su siguiente turno. Además, cada héroe se cura 1 carta de daño.</strong>",
        "flavor": "\"¡Una dosis precisa de neurotoxina para calmar sus instintos feroces!\" — Bestia"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: EL DEPREDADOR ENJAULADO!",
      "epilogue": "Wolverine inmoviliza a Creed contra las rocas mientras Spider-Man lo sella con toneladas de telaraña de alta resistencia. Bestia extrae de su cinturón una clave criptográfica que apunta directamente al Daily Bugle: alguien planea usar los satélites de noticias para engañar a la ciudad. ¡Hank McCoy (Bestia) se suma a la patrulla de campo!",
      "unlockedHeroes": [
        "beast"
      ],
      "unlockedPerks": [
        "perk_beast_serum"
      ],
      "nextChapter": "3A",
      "bonusText": "Bestia desbloqueado. Ventaja \"Suero Médico de Bestia\" obtenida. Avanzan con pruebas sólidas hacia el Daily Bugle (Capítulo 3A)."
    },
    "lossOutcome": {
      "title": "DERROTA: HUIDA SANGRIENTA",
      "epilogue": "Dientes de Sable aprovecha un descuido, hiere a Logan y escapa por los conductos pluviales de Central Park. Aunque los civiles se salvaron, Creed alertó a Mística de que los héroes están tras la pista de la Hermandad.",
      "nextChapter": "3B",
      "penalties": "Logan debe recuperarse; en el Cap. 3B la alarma ya estará sonando en los medios.",
      "bonusText": "La historia avanza hacia el Daily Bugle, pero con Mística prevenida (Capítulo 3B)."
    },
    "deployment": {
      "villain": {
        "location": "Central Park",
        "reason": "Dientes de Sable acecha en la espesura del parque nocturno buscando eliminar testigos civiles."
      },
      "hero1": {
        "location": "Central Park",
        "reason": "Lobezno ha rastreado el olor a sangre de Creed hasta la arboleda y se lanza a interceptarlo."
      },
      "hero2": {
        "location": "Midtown High School",
        "reason": "Spider-Man (Peter) patrullaba cerca y acude a toda prisa al oír los rugidos ferales entre los árboles."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Bestia coordina la búsqueda desde un laboratorio móvil en el centro para monitorear lecturas biológicas."
      },
      "locations": [
        "Central Park",
        "Midtown High School",
        "Daily Bugle",
        "Oscorp Tower",
        "Brooklyn Bridge",
        "Morlock Tunnels"
      ]
    }
  },
  {
    "id": "2B",
    "step": 2,
    "act": 1,
    "actTitle": "ACTO I: LA SOMBRA EN MANHATTAN",
    "title": "Capítulo 2B: Asedio Mediático en el Daily Bugle (Ruta Bajo Presión)",
    "villainId": "mystique_villain",
    "assignedHeroSlot1": "ghost_spider",
    "assignedHeroSlot2": "jean_grey",
    "assignedHeroSlot3": "spider_woman",
    "squadOptions": [
      "ghost_spider",
      "jean_grey",
      "spider_woman",
      "spider_man"
    ],
    "comicReference": "All-New X-Men & Spider-Gwen",
    "synopsis": "¡Crisis total en Manhattan! Tras la fuga de Rhino en Oscorp, el Daily Bugle ha emitido boletines extraordinarios culpando a Spider-Man y a los X-Men de terrorismo. Mística se ha infiltrado en el edificio del periódico suplantando a los directores editoriales para alimentar la paranoia. Gwen Stacy (Ghost-Spider), indignada por las noticias falsas, acude a los tejados del Bugle donde Jean Grey detecta una intensa onda de manipulación mental. Deben asaltar la redacción para detener la transmisión satelital antes de que la ciudad declare la cacería de mutantes.",
    "locations": [
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg",
        "startHero3": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg",
        "startHero2": true
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg"
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (mystique_villain): Inicia en DAILY BUGLE — Mística se ha infiltrado en la rotativa del Bugle para imprimir portadas falsas culpando a mutantes y arañas del desastre.",
      "👤 JORGE (Ghost-Spider (Gwen)): Inicia en DAILY BUGLE — Cíclope entra por la recepción con su visor listo para desmentir la difamación y frenar el pánico mediático.",
      "🌸 ESPOSA (Jean Grey): Inicia en MIDTOWN HIGH SCHOOL — Spider-Man corre desde Queens tras ver los titulares del periódico difamando a los héroes.",
      "⭐ APOYO (Spider-Woman (Jessica), si juega): Inicia en OSCORP TOWER — Bestia analiza los restos químicos en los escombros de Oscorp buscando pruebas de la inocencia mutante.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Flashes y Megafonía: Mística usa a los reporteros como escudos. Gastar 1 acción Heroica calma a los fotógrafos.",
    "events": {
      "initial": {
        "title": "¡TRANSMISIÓN EN VIVO!",
        "type": "Evento de Inicio",
        "badge": "Alerta Roja",
        "text": "Mística ordena a los guardias de seguridad cerrar las puertas: <strong>Cada héroe recibe 1 Ficha Heroica al empezar para proteger civiles.</strong>",
        "flavor": "\"¡Enfoquen bien las cámaras! ¡Que todo el país vea cómo caen estos vigilantes!\" — Mística"
      },
      "underPressure": {
        "title": "¡INTERFERENCIA TELEPÁTICA!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Poder Psiónico",
        "text": "¡Jean Grey bloquea los transmisores de Mística! <strong>Descarta 1 Ficha de Exposición acumulada y cada héroe gana 1 Ficha Comodín.</strong>",
        "flavor": "Las pantallas parpadean con estática rosada desarmando el engaño."
      },
      "accelerated": {
        "title": "¡DESENMASCARADA FRENTE A LAS CÁMARAS!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Verdad en Directo",
        "text": "¡Gwen derriba el foco sobre Mística revelando su piel azul! <strong>Mística sufre 2 de daño directo y se descartan todas las fichas de exposición restantes.</strong>",
        "flavor": "Los reporteros quedan mudos al ver la farsa de la impostora."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: LA MENTIRA AL DESCUBIERTO!",
      "epilogue": "Ghost-Spider y Jean Grey logran transmitir la confesión de los saboteadores antes de que Mística huya. El nombre de los héroes queda limpio en la prensa. Además, descubren que Dientes de Sable está acorralando a un grupo de mutantes en Central Park. ¡Ghost-Spider y Jean Grey se incorporan a la patrulla de campo!",
      "unlockedHeroes": [
        "ghost_spider",
        "jean_grey"
      ],
      "unlockedPerks": [
        "perk_gwen_lens"
      ],
      "nextChapter": "3C",
      "bonusText": "Ghost-Spider y Jean Grey desbloqueadas. Ventaja \"Cámara Antiespía\" lista. Parten hacia Central Park (Capítulo 3C)."
    },
    "lossOutcome": {
      "title": "DERROTA: LA CIUDAD EN ESTADO DE SITIO",
      "epilogue": "Mística logra escapar tras emitir una grabación manipulada. La policía cerca los distritos centrales y los héroes deben operar en la clandestinidad más absoluta mientras los informes señalan que Central Park está siendo atacado por Dientes de Sable.",
      "nextChapter": "3D",
      "penalties": "La opinión pública es hostil; habrá presencia de matones adicionales en la siguiente misión.",
      "bonusText": "Avanzan a Central Park bajo estado de sitio (Capítulo 3D)."
    },
    "deployment": {
      "villain": {
        "location": "Daily Bugle",
        "reason": "Mística se ha infiltrado en la rotativa del Bugle para imprimir portadas falsas culpando a mutantes y arañas del desastre."
      },
      "hero1": {
        "location": "Daily Bugle",
        "reason": "Cíclope entra por la recepción con su visor listo para desmentir la difamación y frenar el pánico mediático."
      },
      "hero2": {
        "location": "Midtown High School",
        "reason": "Spider-Man corre desde Queens tras ver los titulares del periódico difamando a los héroes."
      },
      "hero3": {
        "location": "Oscorp Tower",
        "reason": "Bestia analiza los restos químicos en los escombros de Oscorp buscando pruebas de la inocencia mutante."
      },
      "locations": [
        "Daily Bugle",
        "Oscorp Tower",
        "Midtown High School",
        "Brooklyn Bridge",
        "Central Park",
        "Sims Tower"
      ]
    }
  },
  {
    "id": "3A",
    "step": 3,
    "act": 1,
    "actTitle": "ACTO I: LA SOMBRA EN MANHATTAN",
    "title": "Capítulo 3A: Desarticulando a la Impostora en el Daily Bugle",
    "villainId": "mystique_villain",
    "assignedHeroSlot1": "ghost_spider",
    "assignedHeroSlot2": "jean_grey",
    "assignedHeroSlot3": "spider_woman",
    "squadOptions": [
      "ghost_spider",
      "jean_grey",
      "spider_woman",
      "spider_man"
    ],
    "comicReference": "All-New X-Men & Spider-Gwen",
    "synopsis": "Con Dientes de Sable neutralizado, la alianza intercepta los planes de Mística antes de que monte su campaña de desprestigio en el Daily Bugle. Gwen Stacy y Jean Grey asaltan el edificio con las pruebas de Oscorp en mano. Mística se ve acorralada y activa guardias armados y trampas de gas para cubrir su escape.",
    "locations": [
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg",
        "startVillain": true,
        "startHero2": true
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg"
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg",
        "startHero1": true
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg"
      },
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg",
        "startHero3": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (mystique_villain): Inicia en SIMS TOWER — Mística se ha camuflado en las suites ejecutivas de la torre para transferir patentes genéticas robadas.",
      "👤 JORGE (Ghost-Spider (Gwen)): Inicia en CENTRAL PARK — Tormenta desata niebla densa y vientos cruzados sobre la torre para cegar las cámaras de seguridad.",
      "🌸 ESPOSA (Jean Grey): Inicia en SIMS TOWER — Ghost-Spider (Gwen) trepa sigilosamente por los ventanales de cristal para sorprender a Raven en su oficina.",
      "⭐ APOYO (Spider-Woman (Jessica), si juega): Inicia en MORLOCK TUNNELS — Lobezno bloquea las salidas subterráneas para evitar que Mística se desvanezca en la red de alcantarillas.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Guerra de Evidencias: Con las pruebas en mano, los héroes reducen en 1 el coste de limpiar Amenazas.",
    "events": {
      "initial": {
        "title": "¡CERCO AL BUGLE!",
        "type": "Evento de Inicio",
        "badge": "Iniciativa",
        "text": "Los héroes rodean el edificio: <strong>Cada héroe recibe 1 Ficha de Movimiento y 1 Ficha Heroica al empezar.</strong>",
        "flavor": "\"¡Se acabó tu teatrito, Raven!\" — Jean Grey"
      },
      "underPressure": {
        "title": "¡DESCONEXIÓN SATELITAL!",
        "type": "Bajo Presión",
        "badge": "Control de Prensa",
        "text": "¡Gwen arranca los cables de transmisión! <strong>Mística no puede invocar matones en su siguiente turno.</strong>",
        "flavor": "Las pantallas se van a negro, frustrando el plan de la Hermandad."
      },
      "accelerated": {
        "title": "¡BARRERA TELEQUINÉTICA!",
        "type": "Acelerado",
        "badge": "Acorralada",
        "text": "¡Jean Grey sella las puertas con telequinesis! <strong>Inflige 2 de daño directo a Mística.</strong>",
        "flavor": "Sin salida posible, la impostora se ve forzada a combatir."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA ROTUNDA DEL ACTO I!",
      "epilogue": "Mística es capturada y entrega los registros completos: el cerebro de toda la conspiración es Norman Osborn, quien se ha transformado en el Duende Verde y prepara un bombardeo incendiario masivo desde los cielos de Manhattan. ¡Ghost-Spider y Jean Grey se incorporan al equipo!",
      "unlockedHeroes": [
        "ghost_spider",
        "jean_grey"
      ],
      "unlockedPerks": [
        "perk_gwen_lens"
      ],
      "nextChapter": "4A",
      "bonusText": "Acto I completado con éxito total. Pasan al Capítulo 4A (Interceptación Aérea)."
    },
    "lossOutcome": {
      "title": "RETIRADA TÁCTICA DEL ACTO I",
      "epilogue": "Mística detona una granada de humo y escapa en helicóptero. En su huida, deja escapar el nombre del verdadero titiritero: Norman Osborn desciende sobre el puente de Brooklyn.",
      "nextChapter": "4B",
      "penalties": "El Duende Verde golpea primero en el Acto II.",
      "bonusText": "Avanzan al Capítulo 4B (Manhattan Bajo Fuego)."
    },
    "deployment": {
      "villain": {
        "location": "Sims Tower",
        "reason": "Mística se ha camuflado en las suites ejecutivas de la torre para transferir patentes genéticas robadas."
      },
      "hero1": {
        "location": "Central Park",
        "reason": "Tormenta desata niebla densa y vientos cruzados sobre la torre para cegar las cámaras de seguridad."
      },
      "hero2": {
        "location": "Sims Tower",
        "reason": "Ghost-Spider (Gwen) trepa sigilosamente por los ventanales de cristal para sorprender a Raven en su oficina."
      },
      "hero3": {
        "location": "Morlock Tunnels",
        "reason": "Lobezno bloquea las salidas subterráneas para evitar que Mística se desvanezca en la red de alcantarillas."
      },
      "locations": [
        "Sims Tower",
        "Daily Bugle",
        "Central Park",
        "Brooklyn Bridge",
        "Morlock Tunnels",
        "Oscorp Tower"
      ]
    }
  },
  {
    "id": "3B",
    "step": 3,
    "act": 1,
    "actTitle": "ACTO I: LA SOMBRA EN MANHATTAN",
    "title": "Capítulo 3B: Alarma en las Sombras del Daily Bugle",
    "villainId": "mystique_villain",
    "assignedHeroSlot1": "ghost_spider",
    "assignedHeroSlot2": "jean_grey",
    "assignedHeroSlot3": "spider_woman",
    "squadOptions": [
      "ghost_spider",
      "jean_grey",
      "spider_woman",
      "spider_man"
    ],
    "comicReference": "All-New X-Men & Spider-Gwen",
    "synopsis": "Tras la fuga de Dientes de Sable en Central Park, Mística aprovecha el pánico para difundir grabaciones manipuladas acusando a los héroes de la violencia en el parque. Gwen Stacy y Jean Grey deben infiltrarse contrarreloj en el Daily Bugle para desactivar las cámaras y frenar la histeria colectiva.",
    "locations": [
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg",
        "startHero2": true
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg",
        "startHero3": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg"
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg"
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (mystique_villain): Inicia en MORLOCK TUNNELS — Dientes de Sable ha arrinconado a mutantes desarmados en los conductos inundados bajo Manhattan.",
      "👤 JORGE (Ghost-Spider (Gwen)): Inicia en MORLOCK TUNNELS — Lobezno desciende a las aguas negras con sus garras de adamantium desenvainadas para el choque definitivo.",
      "🌸 ESPOSA (Jean Grey): Inicia en CENTRAL PARK — Spider-Woman (Jessica Drew) rastrea feromonas y cubre las rejillas de ventilación superiores del parque.",
      "⭐ APOYO (Spider-Woman (Jessica), si juega): Inicia en BROOKLYN BRIDGE — Coloso monta guardia en las rampas del puente para evitar que Creed intente una fuga hacia el río.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Prensa Hostil: Cada vez que un héroe resulte herido, añade 1 ficha de Exposición.",
    "events": {
      "initial": {
        "title": "¡PRENSA EN FRENESÍ!",
        "type": "Evento de Inicio",
        "badge": "Tensión",
        "text": "Los reporteros disparan fotos: <strong>Cada héroe recibe 1 Ficha Heroica al empezar.</strong>",
        "flavor": "\"¡Esto es primicia mundial!\" — Periodistas"
      },
      "underPressure": {
        "title": "¡CORTOCIRCUITO EN EL ESTUDIO!",
        "type": "Bajo Presión",
        "badge": "Sabotaje",
        "text": "¡Gwen inutiliza los cables maestros! <strong>Descarta 1 Ficha de Exposición acumulada.</strong>",
        "flavor": "Chispas eléctricas apagan los monitores del Bugle."
      },
      "accelerated": {
        "title": "¡SONDA PSÍQUICA DE JEAN!",
        "type": "Acelerado",
        "badge": "Revelación",
        "text": "¡Jean proyecta la verdad en las mentes de los reporteros! <strong>Inflige 2 de daño a Mística.</strong>",
        "flavor": "La verdad psíquica disipa la mentira de Mística."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: LA FARSA DESTRUIDA!",
      "epilogue": "Mística es derrotada y confiesa que Norman Osborn desatará el caos aéreo sobre el puente con el Duende Verde. ¡Ghost-Spider y Jean Grey salvan la reputación de la alianza!",
      "unlockedHeroes": [
        "ghost_spider",
        "jean_grey"
      ],
      "unlockedPerks": [
        "perk_gwen_lens"
      ],
      "nextChapter": "4A",
      "bonusText": "Ghost-Spider y Jean Grey desbloqueadas. Avanzan al Capítulo 4A."
    },
    "lossOutcome": {
      "title": "RETIRADA: CIUDAD EN ALERTA MÁXIMA",
      "epilogue": "Mística huye y la prensa publica las fotos falsas. Osborn aprovecha el caos para despegar en su planeador.",
      "nextChapter": "4B",
      "penalties": "Comenzarán el Cap. 4B con 1 matón extra en el puente.",
      "bonusText": "Avanzan al Capítulo 4B."
    },
    "deployment": {
      "villain": {
        "location": "Morlock Tunnels",
        "reason": "Dientes de Sable ha arrinconado a mutantes desarmados en los conductos inundados bajo Manhattan."
      },
      "hero1": {
        "location": "Morlock Tunnels",
        "reason": "Lobezno desciende a las aguas negras con sus garras de adamantium desenvainadas para el choque definitivo."
      },
      "hero2": {
        "location": "Central Park",
        "reason": "Spider-Woman (Jessica Drew) rastrea feromonas y cubre las rejillas de ventilación superiores del parque."
      },
      "hero3": {
        "location": "Brooklyn Bridge",
        "reason": "Coloso monta guardia en las rampas del puente para evitar que Creed intente una fuga hacia el río."
      },
      "locations": [
        "Morlock Tunnels",
        "Central Park",
        "Brooklyn Bridge",
        "Midtown High School",
        "Daily Bugle",
        "Oscorp Tower"
      ]
    }
  },
  {
    "id": "3C",
    "step": 3,
    "act": 1,
    "actTitle": "ACTO I: LA SOMBRA EN MANHATTAN",
    "title": "Capítulo 3C: Cacería con Pistas Claras en Central Park",
    "villainId": "sabretooth",
    "assignedHeroSlot1": "wolverine",
    "assignedHeroSlot2": "spider_man",
    "assignedHeroSlot3": "beast",
    "squadOptions": [
      "wolverine",
      "spider_man",
      "beast",
      "black_cat"
    ],
    "comicReference": "Astonishing Spider-Man & Wolverine",
    "synopsis": "Habiendo desenmascarado a Mística en el Bugle, Gwen y Jean enviaron las coordenadas del escondite de Dientes de Sable en Central Park. Logan y Peter van con las pistas claras para neutralizar a Creed antes de que escape con las muestras genéticas restantes.",
    "locations": [
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg",
        "startHero3": true
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg"
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg",
        "startHero2": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Dientes de Sable): Inicia en BROOKLYN BRIDGE — Dientes de Sable ha saltado sobre el tráfico del puente, destrozando cables y arrojando vehículos al vacío.",
      "👤 JORGE (Lobezno (Logan)): Inicia en BROOKLYN BRIDGE — Coloso clava sus botas de acero en el asfalto para resistir el impacto de camiones y proteger a las familias.",
      "🌸 ESPOSA (Spider-Man (Peter)): Inicia en SIMS TOWER — Spider-Man 2099 desciende en planeo con sus garras térmicas directo hacia el centro del puente.",
      "⭐ APOYO (Bestia (Hank), si juega): Inicia en MORLOCK TUNNELS — Lobezno trepa a toda prisa por los pilares del puente emergiendo desde el desagüe fluvial.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Cercando a la Bestia: Los héroes pueden usar acciones de Ataque para obligar a Creed a retroceder.",
    "events": {
      "initial": {
        "title": "¡RASTREO EN EQUIPO!",
        "type": "Evento de Inicio",
        "badge": "Cazadores",
        "text": "Logan y Peter conocen el escondite: <strong>Cada héroe recibe 1 Ficha de Ataque gratis al inicio.</strong>",
        "flavor": "\"¡Te encontré, Victor!\" — Wolverine"
      },
      "underPressure": {
        "title": "¡RED ARÁCNIDA DE ALTA TENSIÓN!",
        "type": "Bajo Presión",
        "badge": "Inmovilización",
        "text": "¡Peter enreda las garras de Creed! <strong>Dientes de Sable no ataca en su siguiente turno.</strong>",
        "flavor": "Telarañas reforzadas clavan a Creed a un roble gigante."
      },
      "accelerated": {
        "title": "¡SUERO NEUTRALIZADOR DE BESTIA!",
        "type": "Acelerado",
        "badge": "Golpe Químico",
        "text": "Hank McCoy clava el dardo: <strong>Inflige 2 de daño a Dientes de Sable y cada héroe se cura 1 carta.</strong>",
        "flavor": "El factor curativo de Creed se apaga momentáneamente."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: CREED DERROTADO!",
      "epilogue": "Creed cae enjaulado. Los archivos recuperados señalan a Norman Osborn como el financista del Duende Verde. ¡Bestia se une oficialmente a la alianza!",
      "unlockedHeroes": [
        "beast"
      ],
      "unlockedPerks": [
        "perk_beast_serum"
      ],
      "nextChapter": "4A",
      "bonusText": "Bestia desbloqueado. Avanzan al Capítulo 4A."
    },
    "lossOutcome": {
      "title": "RETIRADA: ESCAPE POR LAS CLOACAS",
      "epilogue": "Creed escapa malherido por las alcantarillas. La pista lleva a Norman Osborn en el puente.",
      "nextChapter": "4B",
      "penalties": "Avanzan con fatiga al siguiente acto.",
      "bonusText": "Avanzan al Capítulo 4B."
    },
    "deployment": {
      "villain": {
        "location": "Brooklyn Bridge",
        "reason": "Dientes de Sable ha saltado sobre el tráfico del puente, destrozando cables y arrojando vehículos al vacío."
      },
      "hero1": {
        "location": "Brooklyn Bridge",
        "reason": "Coloso clava sus botas de acero en el asfalto para resistir el impacto de camiones y proteger a las familias."
      },
      "hero2": {
        "location": "Sims Tower",
        "reason": "Spider-Man 2099 desciende en planeo con sus garras térmicas directo hacia el centro del puente."
      },
      "hero3": {
        "location": "Morlock Tunnels",
        "reason": "Lobezno trepa a toda prisa por los pilares del puente emergiendo desde el desagüe fluvial."
      },
      "locations": [
        "Brooklyn Bridge",
        "Morlock Tunnels",
        "Daily Bugle",
        "Central Park",
        "Sims Tower",
        "Midtown High School"
      ]
    }
  },
  {
    "id": "3D",
    "step": 3,
    "act": 1,
    "actTitle": "ACTO I: LA SOMBRA EN MANHATTAN",
    "title": "Capítulo 3D: Cacería en Central Park Bajo Estado de Sitio",
    "villainId": "sabretooth",
    "assignedHeroSlot1": "wolverine",
    "assignedHeroSlot2": "spider_man",
    "assignedHeroSlot3": "beast",
    "squadOptions": [
      "wolverine",
      "spider_man",
      "beast",
      "black_cat"
    ],
    "comicReference": "Astonishing Spider-Man & Wolverine",
    "synopsis": "Con la opinión pública envenenada por las mentiras de Mística, la policía y matones armados patrullan Central Park. Entre el caos, Dientes de Sable aprovecha para cazar a civiles y héroes por igual. Wolverine y Spider-Man deben internarse en el parque esquivando a las fuerzas del orden mientras neutralizan al sádico Creed.",
    "locations": [
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startVillain": true,
        "startHero1": true,
        "startHero2": true
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg"
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg"
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg",
        "startHero3": true
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Dientes de Sable): Inicia en DAILY BUGLE — Mística ha detonado cargas incendiarias en los archivos históricos del Bugle para quemar pruebas incriminatorias.",
      "👤 JORGE (Lobezno (Logan)): Inicia en DAILY BUGLE — Jean Grey alza barreras telequinéticas para contener el fuego y evitar que el edificio colapse.",
      "🌸 ESPOSA (Spider-Man (Peter)): Inicia en DAILY BUGLE — Miles Morales rescata a los reporteros atrapados descolgándolos con redes por las cornisas.",
      "⭐ APOYO (Bestia (Hank), si juega): Inicia en CENTRAL PARK — Tormenta invoca lluvia torrencial sobre la manzana para sofocar las chispas que amenazan Midtown.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Fuego Cruzado: Matones patrullan el parque. Cada vez que Creed active BAM, mueve 1 Matón a su casilla (sin Desbordamiento).",
    "events": {
      "initial": {
        "title": "¡NOCHE DE FUEGO CRUZADO!",
        "type": "Evento de Inicio",
        "badge": "Alerta Máxima",
        "text": "Logan y Peter esquivan reflectores: <strong>Cada héroe recibe 1 Ficha de Movimiento al empezar.</strong>",
        "flavor": "\"¡No disparen a los civiles, concéntrense en Creed!\" — Spider-Man"
      },
      "underPressure": {
        "title": "¡CORTINA DE HUMO ARÁCNIDA!",
        "type": "Bajo Presión",
        "badge": "Evasión",
        "text": "¡Spidey cega a los matones con redes! <strong>Elimina 1 matón en la casilla de cada héroe (sin Desbordamiento).</strong>",
        "flavor": "Telarañas en los parabrisas detienen el fuego cruzado."
      },
      "accelerated": {
        "title": "¡GARRA DE ADAMANTIUM!",
        "type": "Acelerado",
        "badge": "Golpe Salvaje",
        "text": "¡Logan corta las defensas de Creed! <strong>Inflige 2 de daño directo a Dientes de Sable.</strong>",
        "flavor": "Un golpe seco tumba al depredador en la hierba."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA TRAS EL ASEDIO!",
      "epilogue": "Logan noquea a Creed y demuestra a la prensa presente quién era el verdadero monstruo. La pista apunta a Norman Osborn.",
      "unlockedHeroes": [
        "beast"
      ],
      "unlockedPerks": [
        "perk_beast_serum"
      ],
      "nextChapter": "4A",
      "bonusText": "Bestia desbloqueado. Avanzan al Capítulo 4A."
    },
    "lossOutcome": {
      "title": "RETIRADA AL LÍMITE",
      "epilogue": "Creed escapa entre el tiroteo. La ciudad entra en pánico total justo cuando el Duende Verde toma los cielos.",
      "nextChapter": "4B",
      "penalties": "El Duende Verde golpea con ventaja en el Acto II.",
      "bonusText": "Avanzan al Capítulo 4B."
    },
    "deployment": {
      "villain": {
        "location": "Daily Bugle",
        "reason": "Mística ha detonado cargas incendiarias en los archivos históricos del Bugle para quemar pruebas incriminatorias."
      },
      "hero1": {
        "location": "Daily Bugle",
        "reason": "Jean Grey alza barreras telequinéticas para contener el fuego y evitar que el edificio colapse."
      },
      "hero2": {
        "location": "Daily Bugle",
        "reason": "Miles Morales rescata a los reporteros atrapados descolgándolos con redes por las cornisas."
      },
      "hero3": {
        "location": "Central Park",
        "reason": "Tormenta invoca lluvia torrencial sobre la manzana para sofocar las chispas que amenazan Midtown."
      },
      "locations": [
        "Daily Bugle",
        "Brooklyn Bridge",
        "Oscorp Tower",
        "Midtown High School",
        "Central Park",
        "Sims Tower"
      ]
    }
  },
  {
    "id": "4A",
    "step": 4,
    "act": 2,
    "actTitle": "ACTO II: EL ALZAMIENTO DE LA HERMANDAD",
    "title": "Capítulo 4A: Interceptación Aérea en el Puente (Duende Verde)",
    "villainId": "green_goblin",
    "assignedHeroSlot1": "storm",
    "assignedHeroSlot2": "spider_woman",
    "assignedHeroSlot3": "miles_morales",
    "squadOptions": [
      "storm",
      "spider_woman",
      "miles_morales",
      "ghost_spider"
    ],
    "comicReference": "Secret Invasion & A+X (Avengers + X-Men)",
    "synopsis": "Con los datos obtenidos en el Acto I, la alianza intercepta a Norman Osborn justo cuando despega con su planeador en el puente de Brooklyn. Osborn busca bombardear Manhattan para crear una distracción y enviar a Juggernaut a demoler la Mansión X. Tormenta (Ororo Munroe) y Spider-Woman (Jessica Drew) lideran la intercepción aérea con ventaja estratégica.",
    "locations": [
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg",
        "startHero2": true
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg"
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg",
        "startHero3": true
      },
      {
        "name": "Xavier Institute",
        "img": "./assets/locations/xavier_institute.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Duende Verde): Inicia en OSCORP TOWER — Norman Osborn (Duende Verde) despega de su helipuerto cargado de bombas de calabaza con neurotoxina mutagénica.",
      "👤 JORGE (Tormenta (Ororo)): Inicia en OSCORP TOWER — Bestia se infiltra en el taller de investigación subterráneo saboteando los dispensadores de gas del planeador.",
      "🌸 ESPOSA (Spider-Woman (Jessica)): Inicia en MIDTOWN HIGH SCHOOL — Spider-Man (Peter) patrulla su vecindario cuando detecta la estela de humo esmeralda del planeador.",
      "⭐ APOYO (Miles Morales, si juega): Inicia en BROOKLYN BRIDGE — Ghost-Spider (Gwen) vigila los corredores aéreos del río para interceptar misiles desviados.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Bombardeo Aéreo: El Duende vuela entre edificios. Acciones heroicas apagan incendios.",
    "events": {
      "initial": {
        "title": "¡REDES DE RESCATE EN EL PUENTE!",
        "type": "Evento de Inicio",
        "badge": "Despliegue Rápido",
        "text": "Tormenta y Spider-Woman despliegan redes gigantes antes del primer bombardeo: <strong>Cada héroe rescata 1 Civil inmediatamente en su ubicación inicial.</strong>",
        "flavor": "\"¡JAJAJAJA! ¡Miren cómo bailan mis pequeñas arañitas bajo el fuego de mis calabazas!\" — Duende Verde"
      },
      "underPressure": {
        "title": "¡CORRIENTE ASCENDENTE DE TORMENTA!",
        "type": "Bajo Presión",
        "badge": "Poder Elemental",
        "text": "¡Tormenta desvía los proyectiles hacia el río! <strong>Ningún Civil o Héroe puede sufrir daño por efectos de área durante la siguiente ronda. Cada héroe roba 1 carta.</strong>",
        "flavor": "Vientos tempestuosos apagan las llamas de las calabazas explosivas."
      },
      "accelerated": {
        "title": "¡PROPULSOR DEL PLANEADOR AVERIADO!",
        "type": "Acelerado",
        "badge": "Ataque Certero",
        "text": "¡Spider-Woman descarga un rayo bioeléctrico que inutiliza el planeador! <strong>El Duende Verde recibe 2 de daño directo y queda inmovilizado en su ubicación hasta el final de la ronda.</strong>",
        "flavor": "El planeador humea y pierde altura dando giros descontrolados."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: EL DUENDE DERRIBADO!",
      "epilogue": "Tormenta descarga un relámpago colosal que estrella el planeador del Duende contra las aguas del río. Spider-Woman recupera los transmisores de Osborn y alerta a la Mansión X con tiempo suficiente para fortificar el perímetro ante la llegada de Juggernaut. ¡Tormenta y Spider-Woman se suman a la alianza!",
      "unlockedHeroes": [
        "storm",
        "spider_woman"
      ],
      "unlockedPerks": [
        "perk_telekinetic_shield"
      ],
      "nextChapter": "5A",
      "bonusText": "Tormenta y Spider-Woman desbloqueadas. La Mansión X está fortificada con trampas activas (Capítulo 5A)."
    },
    "lossOutcome": {
      "title": "RETIRADA: NOCHE DE HUMO",
      "epilogue": "El Duende escapa en un planeador de reserva lanzando una andanada que corta el suministro eléctrico de la costa norte. Juggernaut ya marcha hacia la Mansión X a oscuras.",
      "nextChapter": "5B",
      "penalties": "La Mansión X estará sin energía en el Capítulo 5B.",
      "bonusText": "Avanzan a la Mansión X en emergencia crítica (Capítulo 5B)."
    },
    "deployment": {
      "villain": {
        "location": "Oscorp Tower",
        "reason": "Norman Osborn (Duende Verde) despega de su helipuerto cargado de bombas de calabaza con neurotoxina mutagénica."
      },
      "hero1": {
        "location": "Oscorp Tower",
        "reason": "Bestia se infiltra en el taller de investigación subterráneo saboteando los dispensadores de gas del planeador."
      },
      "hero2": {
        "location": "Midtown High School",
        "reason": "Spider-Man (Peter) patrulla su vecindario cuando detecta la estela de humo esmeralda del planeador."
      },
      "hero3": {
        "location": "Brooklyn Bridge",
        "reason": "Ghost-Spider (Gwen) vigila los corredores aéreos del río para interceptar misiles desviados."
      },
      "locations": [
        "Oscorp Tower",
        "Midtown High School",
        "Central Park",
        "Daily Bugle",
        "Brooklyn Bridge",
        "Xavier Institute"
      ]
    }
  },
  {
    "id": "4B",
    "step": 4,
    "act": 2,
    "actTitle": "ACTO II: EL ALZAMIENTO DE LA HERMANDAD",
    "title": "Capítulo 4B: Lluvia de Fuego sobre Manhattan (Duende Verde)",
    "villainId": "green_goblin",
    "assignedHeroSlot1": "storm",
    "assignedHeroSlot2": "spider_woman",
    "assignedHeroSlot3": "miles_morales",
    "squadOptions": [
      "storm",
      "spider_woman",
      "miles_morales",
      "ghost_spider"
    ],
    "comicReference": "Secret Invasion & A+X (Avengers + X-Men)",
    "synopsis": "Norman Osborn toma por sorpresa a la ciudad lanzando un ataque masivo de bombas incendiarias. Las alarmas de los rascacielos aúllan mientras Jessica Drew y Ororo Munroe deben rescatar contrarreloj a familias atrapadas en los puentes antes de derribar al loco del planeador.",
    "locations": [
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg",
        "startVillain": true,
        "startHero2": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg"
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg",
        "startHero1": true
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg",
        "startHero3": true
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Duende Verde): Inicia en BROOKLYN BRIDGE — El Duende Verde bombardea las torres de suspensión del puente amenazando con aislar Manhattan del continente.",
      "👤 JORGE (Tormenta (Ororo)): Inicia en MIDTOWN HIGH SCHOOL — Cíclope dispara salvas ópticas ascendentes guiadas por Cerebro para neutralizar las bombas en pleno vuelo.",
      "🌸 ESPOSA (Spider-Woman (Jessica)): Inicia en BROOKLYN BRIDGE — Ghost-Spider (Gwen Stacy) intercepta los explosivos tejiendo redes acolchadas antes de que toquen los cables.",
      "⭐ APOYO (Miles Morales, si juega): Inicia en SIMS TOWER — Spider-Man 2099 analiza los patrones de vuelo del planeador con su computadora Lyla desde las alturas.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Bombardeo Imparable: En cada BAM del Duende, coloca 1 Matón en una casilla con espacio libre.",
    "events": {
      "initial": {
        "title": "¡LLUVIA DE FUEGO!",
        "type": "Evento de Inicio",
        "badge": "Emergencia",
        "text": "El puente arde: <strong>Cada héroe recibe 1 Ficha de Movimiento y 1 Ficha Heroica al empezar.</strong>",
        "flavor": "\"¡Miren cómo arde su patética ciudad!\" — Duende Verde"
      },
      "underPressure": {
        "title": "¡TORBELLINO DE AGUA DE TORMENTA!",
        "type": "Bajo Presión",
        "badge": "Fuerza de la Naturaleza",
        "text": "¡Tormenta atrae trombas de agua del East River! <strong>Apaga los incendios y elimina 2 matones del tablero (sin Desbordamiento).</strong>",
        "flavor": "Columnas de agua salada ahogan las bombas incendiarias."
      },
      "accelerated": {
        "title": "¡DISPARO BIOELÉCTRICO DE SPIDER-WOMAN!",
        "type": "Acelerado",
        "badge": "Impacto Crítico",
        "text": "¡Jessica Drew alcanza el motor del planeador! <strong>Inflige 2 de daño directo al Duende Verde.</strong>",
        "flavor": "Chispas de energía bioeléctrica parten el timón del planeador."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA ÉPICA EN EL PUENTE!",
      "epilogue": "El Duende Verde es derribado y sus comunicaciones interceptadas: Juggernaut se dirige a la escuela. ¡Tormenta y Spider-Woman se unen al equipo!",
      "unlockedHeroes": [
        "storm",
        "spider_woman"
      ],
      "unlockedPerks": [
        "perk_telekinetic_shield"
      ],
      "nextChapter": "5A",
      "bonusText": "Tormenta y Spider-Woman desbloqueadas. Avanzan a la Mansión X (Capítulo 5A)."
    },
    "lossOutcome": {
      "title": "RETIRADA: PUENTES EN LLAMAS",
      "epilogue": "El Duende escapa y causa un apagón masivo en el estado. Juggernaut golpea una escuela sin defensas.",
      "nextChapter": "5B",
      "penalties": "La Mansión X no tendrá defensas automáticas.",
      "bonusText": "Avanzan a la Mansión X a oscuras (Capítulo 5B)."
    },
    "deployment": {
      "villain": {
        "location": "Brooklyn Bridge",
        "reason": "El Duende Verde bombardea las torres de suspensión del puente amenazando con aislar Manhattan del continente."
      },
      "hero1": {
        "location": "Midtown High School",
        "reason": "Cíclope dispara salvas ópticas ascendentes guiadas por Cerebro para neutralizar las bombas en pleno vuelo."
      },
      "hero2": {
        "location": "Brooklyn Bridge",
        "reason": "Ghost-Spider (Gwen Stacy) intercepta los explosivos tejiendo redes acolchadas antes de que toquen los cables."
      },
      "hero3": {
        "location": "Sims Tower",
        "reason": "Spider-Man 2099 analiza los patrones de vuelo del planeador con su computadora Lyla desde las alturas."
      },
      "locations": [
        "Brooklyn Bridge",
        "Oscorp Tower",
        "Daily Bugle",
        "Midtown High School",
        "Central Park",
        "Sims Tower"
      ]
    }
  },
  {
    "id": "5A",
    "step": 5,
    "act": 2,
    "actTitle": "ACTO II: EL ALZAMIENTO DE LA HERMANDAD",
    "title": "Capítulo 5A: El Asedio a la Mansión X (Defensa con Trampas de Gravedad)",
    "villainId": "juggernaut",
    "assignedHeroSlot1": "beast",
    "assignedHeroSlot2": "spider_2099",
    "assignedHeroSlot3": "cyclops",
    "squadOptions": [
      "beast",
      "spider_2099",
      "cyclops",
      "wolverine"
    ],
    "comicReference": "Timestorm 2009/2099 & X-Men: Danger Room Sessions",
    "synopsis": "¡Alarma roja en Westchester! Cain Marko (Juggernaut) embiste los muros del Instituto Xavier para robar Cerebro. Sin embargo, la advertencia previa permitió a Hank McCoy (Bestia) y a Miguel O'Hara (Spider-Man 2099, recién llegado del futuro) activar generadores de gravedad artificial de la Sala de Peligro. Con trampas de desaceleración listas, la patrulla encara al gigante imparable.",
    "locations": [
      {
        "name": "Xavier Institute",
        "img": "./assets/locations/xavier_institute.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "The Danger Room",
        "img": "./assets/locations/danger_room.jpg",
        "startHero2": true
      },
      {
        "name": "Hangar Bay",
        "img": "./assets/locations/hangar_bay.jpg",
        "startHero3": true
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      },
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg"
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Juggernaut): Inicia en XAVIER INSTITUTE — Juggernaut (Cain Marko) revienta los portones de hierro de la Mansión X arrasando el jardín botánico frontal.",
      "👤 JORGE (Bestia (Hank)): Inicia en XAVIER INSTITUTE — Coloso aguarda firme en las escalinatas de la entrada para frenar el ariete imparable de su hermanastro.",
      "🌸 ESPOSA (spider_2099): Inicia en THE DANGER ROOM — Spider-Man 2099 activa el sistema holográfico de combate de la Sala de Peligro para crear barreras de choque.",
      "⭐ APOYO (Cíclope (Scott), si juega): Inicia en HANGAR BAY — Jean Grey resguarda a los estudiantes mutantes en el búnker subterráneo junto al Blackbird.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Masa Imparable: Juggernaut empuja a los héroes si entra a su casilla, pero la tecnología de la Sala de Peligro puede tenderle trampas.",
    "events": {
      "initial": {
        "title": "¡DEFENSAS PERIMETRALES ACTIVAS!",
        "type": "Evento de Inicio",
        "badge": "Alerta en la Escuela",
        "text": "Las puertas de titanio se cierran para proteger a los estudiantes: <strong>Cada héroe recibe 1 Ficha de Ataque y 1 Ficha Heroica al iniciar la partida.</strong>",
        "flavor": "\"¡Abran paso a Cain Marko! ¡Hoy convertiré esta escuelita en escombros!\" — Juggernaut"
      },
      "underPressure": {
        "title": "¡GRAVEDAD ARTIFICIAL DE LA SALA DE PELIGRO!",
        "type": "Bajo Presión",
        "badge": "Trampa Tecnológica",
        "text": "¡Bestia y Miguel activan los campos de gravedad inversa! <strong>Juggernaut queda completamente inmovilizado durante su siguiente turno de villano (no se mueve ni empuja héroes).</strong>",
        "flavor": "Campos de fuerza electromagnéticos clavan los pies gigantescos de Juggernaut al suelo."
      },
      "accelerated": {
        "title": "¡CASCO MÍSTICO DESPRENDIDO!",
        "type": "Acelerado",
        "badge": "Vulnerabilidad",
        "text": "¡Las garras de 2099 y la fuerza de Bestia desprenden el casco! <strong>Todos los ataques contra Juggernaut durante esta partida infligen +1 de daño adicional. Además, cada héroe roba 1 carta.</strong>",
        "flavor": "Sin su casco protector de Cyttorak, Cain Marko queda vulnerable a los impactos."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: EL GIGANTE DERRUMBADO!",
      "epilogue": "Combinando trampas cinéticas con las garras de 2099 y la agilidad de Bestia, derriban a Juggernaut. Cerebro queda intacto y detecta una extraña frecuencia negra despertando en los túneles subterráneos. ¡Spider-Man 2099 se suma formalmente a la alianza!",
      "unlockedHeroes": [
        "spider_2099"
      ],
      "unlockedPerks": [
        "perk_blackbird_hanger"
      ],
      "nextChapter": "6A",
      "bonusText": "Spider-Man 2099 desbloqueado. Cerebro funciona al 100%: avanzan con ventaja a los túneles Morlock (Capítulo 6A)."
    },
    "lossOutcome": {
      "title": "RETIRADA: EL ALA ESTE EN ESCOMBROS",
      "epilogue": "Juggernaut logra averiar parte de Cerebro antes de ser arrojado al lago exterior. La energía dispersada despierta a una bestia simbiótica en el subsuelo.",
      "nextChapter": "6B",
      "penalties": "Cerebro averiado; no habrá escaneos en la siguiente misión.",
      "bonusText": "Avanzan a los túneles a ciegas (Capítulo 6B)."
    },
    "deployment": {
      "villain": {
        "location": "Xavier Institute",
        "reason": "Juggernaut (Cain Marko) revienta los portones de hierro de la Mansión X arrasando el jardín botánico frontal."
      },
      "hero1": {
        "location": "Xavier Institute",
        "reason": "Coloso aguarda firme en las escalinatas de la entrada para frenar el ariete imparable de su hermanastro."
      },
      "hero2": {
        "location": "The Danger Room",
        "reason": "Spider-Man 2099 activa el sistema holográfico de combate de la Sala de Peligro para crear barreras de choque."
      },
      "hero3": {
        "location": "Hangar Bay",
        "reason": "Jean Grey resguarda a los estudiantes mutantes en el búnker subterráneo junto al Blackbird."
      },
      "locations": [
        "Xavier Institute",
        "The Danger Room",
        "Hangar Bay",
        "Central Park",
        "Morlock Tunnels",
        "Midtown High School"
      ]
    }
  },
  {
    "id": "5B",
    "step": 5,
    "act": 2,
    "actTitle": "ACTO II: EL ALZAMIENTO DE LA HERMANDAD",
    "title": "Capítulo 5B: Asedio a la Mansión X a Oscuras (Brecha Crítica)",
    "villainId": "juggernaut",
    "assignedHeroSlot1": "beast",
    "assignedHeroSlot2": "spider_2099",
    "assignedHeroSlot3": "cyclops",
    "squadOptions": [
      "beast",
      "spider_2099",
      "cyclops",
      "wolverine"
    ],
    "comicReference": "Timestorm 2009/2099 & X-Men: Danger Room Sessions",
    "synopsis": "A oscuras y con las defensas perimetrales caídas tras el ataque del Duende, Cain Marko irrumpe en el patio principal de la Mansión X aplastando estatuas y muros. Hank McCoy y Miguel O'Hara deben defender a los estudiantes cara a cara sin sistemas automáticos.",
    "locations": [
      {
        "name": "Hangar Bay",
        "img": "./assets/locations/hangar_bay.jpg",
        "startVillain": true
      },
      {
        "name": "The Danger Room",
        "img": "./assets/locations/danger_room.jpg",
        "startHero1": true
      },
      {
        "name": "Xavier Institute",
        "img": "./assets/locations/xavier_institute.jpg",
        "startHero2": true
      },
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg",
        "startHero3": true
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      },
      {
        "name": "Muir Island",
        "img": "./assets/locations/muir_island.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Juggernaut): Inicia en HANGAR BAY — Juggernaut ha penetrado al subsuelo demoliendo los transformadores principales y aplastando el fuselaje del Blackbird.",
      "👤 JORGE (Bestia (Hank)): Inicia en THE DANGER ROOM — Jean Grey utiliza telepatía para vincular los sentidos de los héroes a oscuras durante la falla eléctrica.",
      "🌸 ESPOSA (spider_2099): Inicia en XAVIER INSTITUTE — Miles Morales se desliza en modo camuflaje entre los escombros del piso superior para atacar por sorpresa.",
      "⭐ APOYO (Cíclope (Scott), si juega): Inicia en MORLOCK TUNNELS — Lobezno emerge por el túnel de emergencia de la escuela para flanquear a Marko por la espalda.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Asedio en Penumbra: Juggernaut avanza 1 espacio extra en cada BAM.",
    "events": {
      "initial": {
        "title": "¡DEFENSA MANUAL!",
        "type": "Evento de Inicio",
        "badge": "Emergencia",
        "text": "Los héroes defienden la entrada: <strong>Cada héroe recibe 1 Ficha de Ataque y 1 Ficha de Movimiento al empezar.</strong>",
        "flavor": "\"¡No tocarás a un solo estudiante, Marko!\" — Bestia"
      },
      "underPressure": {
        "title": "¡DESCARGA DE CONMOCIÓN DE CÍCLOPE!",
        "type": "Bajo Presión",
        "badge": "Liderazgo",
        "text": "¡Scott descarga toda la potencia de su visor! <strong>Juggernaut retrocede 1 espacio aturdido.</strong>",
        "flavor": "Un rayo rojo continuo frena la masa imparable."
      },
      "accelerated": {
        "title": "¡CORTE DE CABLES DE 2099!",
        "type": "Acelerado",
        "badge": "Maniobra Rápida",
        "text": "¡Miguel arranca el soporte del casco! <strong>Inflige 2 de daño directo a Juggernaut.</strong>",
        "flavor": "Garras cibernéticas desprenden las junturas místicas del casco."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: LA ESCUELA SALVADA!",
      "epilogue": "Juggernaut cae finalmente inconsciente. La escuela está a salvo y Spider-Man 2099 se incorpora al escuadrón.",
      "unlockedHeroes": [
        "spider_2099"
      ],
      "unlockedPerks": [
        "perk_blackbird_hanger"
      ],
      "nextChapter": "6A",
      "bonusText": "Spider-Man 2099 desbloqueado. Avanzan al Capítulo 6A."
    },
    "lossOutcome": {
      "title": "RETIRADA: DEMOLICIÓN DEL ALA ESTE",
      "epilogue": "Cain Marko daña los generadores subterráneos antes de caer. Los sensores detectan una masa negra alienígena en los túneles.",
      "nextChapter": "6B",
      "penalties": "No podrán usar la Sala de Peligro en la siguiente misión.",
      "bonusText": "Avanzan al Capítulo 6B."
    },
    "deployment": {
      "villain": {
        "location": "Hangar Bay",
        "reason": "Juggernaut ha penetrado al subsuelo demoliendo los transformadores principales y aplastando el fuselaje del Blackbird."
      },
      "hero1": {
        "location": "The Danger Room",
        "reason": "Jean Grey utiliza telepatía para vincular los sentidos de los héroes a oscuras durante la falla eléctrica."
      },
      "hero2": {
        "location": "Xavier Institute",
        "reason": "Miles Morales se desliza en modo camuflaje entre los escombros del piso superior para atacar por sorpresa."
      },
      "hero3": {
        "location": "Morlock Tunnels",
        "reason": "Lobezno emerge por el túnel de emergencia de la escuela para flanquear a Marko por la espalda."
      },
      "locations": [
        "Hangar Bay",
        "The Danger Room",
        "Xavier Institute",
        "Morlock Tunnels",
        "Central Park",
        "Muir Island"
      ]
    }
  },
  {
    "id": "6A",
    "step": 6,
    "act": 2,
    "actTitle": "ACTO II: EL ALZAMIENTO DE LA HERMANDAD",
    "title": "Capítulo 6A: La Hora del Simbionte —¿Monstruo o Aliado?",
    "villainId": "venom_villain",
    "assignedHeroSlot1": "cyclops",
    "assignedHeroSlot2": "spider_man",
    "assignedHeroSlot3": "jean_grey",
    "squadOptions": [
      "cyclops",
      "spider_man",
      "jean_grey",
      "storm"
    ],
    "comicReference": "Marvel Super Heroes Secret Wars (1984) & Spider-Man and the X-Men",
    "synopsis": "En los túneles subterráneos de los Morlocks, una masa negra simbiótica devora patrullas y genera pánico. Peter Parker reconoce el patrón al instante: se trata de Venom (Eddie Brock), quien ha enloquecido por la presencia de una frecuencia mutante roja. Peter convence a Scott Summers (Cíclope) de no aniquilarlo, sino rescatar al hombre dentro del monstruo: Scott calcula los rebotes de sus rayos ópticos para generar calor extremo y aturdir al simbionte sin dañarlo, mientras Peter lo cerca con telaraña sónica y Jean Grey proyecta una sonda mental para devolverle la cordura a Eddie Brock.",
    "locations": [
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg",
        "startVillain": true,
        "startHero2": true
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg"
      },
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg"
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg",
        "startHero3": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg",
        "startHero1": true
      },
      {
        "name": "Xavier Institute",
        "img": "./assets/locations/xavier_institute.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (venom_villain): Inicia en CENTRAL PARK — Eddie Brock pierde el control del simbionte alienígena, desatando una vorágine negra sobre los senderos del parque.",
      "👤 JORGE (Cíclope (Scott)): Inicia en MIDTOWN HIGH SCHOOL — Tormenta modula relámpagos de baja frecuencia para generar ondas acústicas que debiliten al simbionte.",
      "🌸 ESPOSA (Spider-Man (Peter)): Inicia en CENTRAL PARK — Spider-Man (Peter) se acerca a corta distancia buscando la mirada de Eddie para apelar a su humanidad.",
      "⭐ APOYO (Jean Grey, si juega): Inicia en OSCORP TOWER — Bestia calibra los cañones de ultrasonido en el laboratorio de Osborn para una descarga quirúrgica.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Frenesí de Zarcillos: Las vibraciones sónicas y el calor calman al simbionte.",
    "events": {
      "initial": {
        "title": "¡ECOS EN EL SUBTERRÁNEO!",
        "type": "Evento de Inicio",
        "badge": "Rastreo Subterráneo",
        "text": "Peter y Scott reconocen la frecuencia del simbionte: <strong>Cada héroe recibe 1 Ficha Comodín al inicio de la partida.</strong>",
        "flavor": "\"¡TODOS SON CULPABLES! ¡NOSOTROS NOS ALIMENTAREMOS DE SUS MIEDOS!\" — Venom"
      },
      "underPressure": {
        "title": "¡ONDA SÓNICA SALVADORA!",
        "type": "Bajo Presión",
        "badge": "Vibración Calmante",
        "text": "¡Peter golpea una tubería de vapor creando una campana sónica! <strong>El simbionte se repliega aturdido: todos los Civiles en la ubicación de Venom son evacuados a salvo inmediatamente.</strong>",
        "flavor": "\"¡Aaargh! ¡Ese sonido... deténganlo... Parker, ayúdanos!\""
      },
      "accelerated": {
        "title": "¡LA ADVERTENCIA DE EDDIE BROCK!",
        "type": "Acelerado",
        "badge": "Revelación Vital",
        "text": "¡Eddie Brock retoma el control por un instante! <strong>Venom no realiza su efecto BAM este turno y entrega 1 Ficha de Ataque y 1 de Movimiento a cada héroe.</strong>",
        "flavor": "\"¡Escuchen... Cletus Kasady... Carnage ha robado el virus mutante en Ravencroft!\""
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA ÉPICA: LA REDENCIÓN DE VENOM!",
      "epilogue": "Con campanas sónicas de Peter, rayos precisos de Cíclope y el apoyo telepático de Jean, Venom se detiene jadeante. Eddie Brock extiende su garra simbiótica: \"¡Ese monstruo rojo de Kasady quiere extinguirlos a todos... lucharemos a su lado!\". ¡VENOM SE UNE OFICIALMENTE COMO HÉROE JUGABLE!",
      "unlockedHeroes": [
        "venom_hero"
      ],
      "unlockedPerks": [
        "perk_symbiote_tendril"
      ],
      "nextChapter": "7A",
      "bonusText": "¡VENOM DESBLOQUEADO COMO HÉROE JUGABLE! Eddie Brock viaja con la alianza hacia Genosha con un testimonio crucial para Magneto (Capítulo 7A)."
    },
    "lossOutcome": {
      "title": "RETIRADA: LA BESTIA EN LAS SOMBRAS",
      "epilogue": "Venom no puede controlar el frenesí y escapa hacia los bajos fondos. Eddie Brock se pierde en la oscuridad y no podrá unirse a la alianza. Los radares alertan de que Magneto ha alzado un muro en Genosha.",
      "nextChapter": "7B",
      "penalties": "Venom no estará disponible como héroe en los siguientes capítulos.",
      "bonusText": "Avanzan a Genosha en una misión de confrontación hostil (Capítulo 7B)."
    },
    "deployment": {
      "villain": {
        "location": "Central Park",
        "reason": "Eddie Brock pierde el control del simbionte alienígena, desatando una vorágine negra sobre los senderos del parque."
      },
      "hero1": {
        "location": "Midtown High School",
        "reason": "Tormenta modula relámpagos de baja frecuencia para generar ondas acústicas que debiliten al simbionte."
      },
      "hero2": {
        "location": "Central Park",
        "reason": "Spider-Man (Peter) se acerca a corta distancia buscando la mirada de Eddie para apelar a su humanidad."
      },
      "hero3": {
        "location": "Oscorp Tower",
        "reason": "Bestia calibra los cañones de ultrasonido en el laboratorio de Osborn para una descarga quirúrgica."
      },
      "locations": [
        "Central Park",
        "Daily Bugle",
        "Morlock Tunnels",
        "Oscorp Tower",
        "Midtown High School",
        "Xavier Institute"
      ]
    }
  },
  {
    "id": "6B",
    "step": 6,
    "act": 2,
    "actTitle": "ACTO II: EL ALZAMIENTO DE LA HERMANDAD",
    "title": "Capítulo 6B: Choque Feral en la Oscuridad (Venom Fuera de Control)",
    "villainId": "venom_villain",
    "assignedHeroSlot1": "cyclops",
    "assignedHeroSlot2": "spider_man",
    "assignedHeroSlot3": "jean_grey",
    "squadOptions": [
      "cyclops",
      "spider_man",
      "jean_grey",
      "storm"
    ],
    "comicReference": "Marvel Super Heroes Secret Wars & Spider-Man/X-Men",
    "synopsis": "Con la escuela en reparaciones, Peter y Scott deben adentrarse a ciegas en los túneles Morlock donde Venom ataca con una violencia desenfrenada. La oscuridad es total y las vibraciones del subterráneo dificultan la comunicación.",
    "locations": [
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg",
        "startHero2": true
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startHero3": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg"
      },
      {
        "name": "Xavier Institute",
        "img": "./assets/locations/xavier_institute.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (venom_villain): Inicia en MORLOCK TUNNELS — Venom se ha refugiado enfurecido en las cloacas profundas, atacando a ciegas impulsado por el dolor sónico.",
      "👤 JORGE (Cíclope (Scott)): Inicia en MORLOCK TUNNELS — Lobezno avanza con sigilo rastreando el rastro aceitoso y el hedor alienígena entre las tuberías.",
      "🌸 ESPOSA (Spider-Man (Peter)): Inicia en CENTRAL PARK — Spider-Woman (Jessica) sella las compuertas de drenaje del parque con masa adhesiva bio-química.",
      "⭐ APOYO (Jean Grey, si juega): Inicia en DAILY BUGLE — Cíclope coordina con las sirenas de emergencia de la ciudad para canalizar a Venom hacia una trampa.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Oscuridad Subterránea: Los héroes gastan 1 acción extra para moverse entre lugares subterráneos.",
    "events": {
      "initial": {
        "title": "¡ATAQUE EN LAS SOMBRAS!",
        "type": "Evento de Inicio",
        "badge": "Peligro Inminente",
        "text": "Venom ataca desde el techo de la cueva: <strong>Cada héroe recibe 1 Ficha de Ataque al empezar.</strong>",
        "flavor": "\"¡SENTIRÁN NUESTRA IRA!\" — Venom"
      },
      "underPressure": {
        "title": "¡RAYO GUÍA DE CÍCLOPE!",
        "type": "Bajo Presión",
        "badge": "Luz en la Cueva",
        "text": "¡Cíclope ilumina los túneles con una descarga constante! <strong>Anula la penalización de movimiento y cada héroe roba 1 carta.</strong>",
        "flavor": "Un haz carmesí brillante disipa las sombras de las cloacas."
      },
      "accelerated": {
        "title": "¡CAMPANADA SÓNICA IMPROVISADA!",
        "type": "Acelerado",
        "badge": "Impacto Sónico",
        "text": "¡Spidey hace repicar vigas metálicas! <strong>Inflige 2 de daño a Venom y rescata 1 civil.</strong>",
        "flavor": "El sonido agudo quiebra la consistencia del simbionte."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: VENOM RECOBRA LA CORDURA!",
      "epilogue": "Eddie Brock logra zafarse del control de la ira simbiótica: \"¡Kasady... Carnage es la verdadera amenaza!\". ¡Venom se une como héroe aliado!",
      "unlockedHeroes": [
        "venom_hero"
      ],
      "unlockedPerks": [
        "perk_symbiote_tendril"
      ],
      "nextChapter": "7A",
      "bonusText": "Venom desbloqueado como héroe. Avanzan a Genosha (Capítulo 7A)."
    },
    "lossOutcome": {
      "title": "RETIRADA: LA BESTIA EN LAS CLOACAS",
      "epilogue": "Venom huye desquiciado. La oportunidad de salvar a Brock se pierde por ahora. Deben viajar a Genosha por su cuenta.",
      "nextChapter": "7B",
      "penalties": "Venom no estará disponible en el resto de la campaña.",
      "bonusText": "Avanzan a Genosha bajo hostilidad (Capítulo 7B)."
    },
    "deployment": {
      "villain": {
        "location": "Morlock Tunnels",
        "reason": "Venom se ha refugiado enfurecido en las cloacas profundas, atacando a ciegas impulsado por el dolor sónico."
      },
      "hero1": {
        "location": "Morlock Tunnels",
        "reason": "Lobezno avanza con sigilo rastreando el rastro aceitoso y el hedor alienígena entre las tuberías."
      },
      "hero2": {
        "location": "Central Park",
        "reason": "Spider-Woman (Jessica) sella las compuertas de drenaje del parque con masa adhesiva bio-química."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Cíclope coordina con las sirenas de emergencia de la ciudad para canalizar a Venom hacia una trampa."
      },
      "locations": [
        "Morlock Tunnels",
        "Central Park",
        "Daily Bugle",
        "Oscorp Tower",
        "Brooklyn Bridge",
        "Xavier Institute"
      ]
    }
  },
  {
    "id": "7A",
    "step": 7,
    "act": 3,
    "actTitle": "ACTO III: GUERRA TOTAL Y CRISIS OMEGA",
    "title": "Capítulo 7A: La Ley del Más Fuerte en Genosha (Conferencia por la Supervivencia)",
    "villainId": "magneto_villain",
    "assignedHeroSlot1": "spider_2099",
    "assignedHeroSlot2": "wolverine",
    "assignedHeroSlot3": "ghost_spider",
    "squadOptions": [
      "spider_2099",
      "wolverine",
      "ghost_spider",
      "jean_grey"
    ],
    "comicReference": "2099: World of Tomorrow & Astonishing X-Men",
    "synopsis": "La alianza viaja en el Blackbird hacia la isla de Genosha con los testimonios y pruebas recuperadas. Creyendo que el virus simbiótico es una bioarma humana para exterminar mutantes, Magneto prepara un pulso electromagnético masivo. Logan (Wolverine), arriesgando su vida ante los poderes de Magneto sobre el metal, se interna en la ciudadela junto a Spider-Man 2099 (Miguel O'Hara), quien usa armamento de Alchemax no ferromagnético para esquivar los campos de fuerza. Juntos deben confrontar a Erik y mostrarle los archivos del futuro: si no se unen contra Carnage, ni humanos ni mutantes sobrevivirán.",
    "locations": [
      {
        "name": "Genosha",
        "img": "./assets/locations/genosha.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Asteroid M",
        "img": "./assets/locations/asteroid_m.jpg",
        "startHero3": true
      },
      {
        "name": "Muir Island",
        "img": "./assets/locations/muir_island.jpg",
        "startHero2": true
      },
      {
        "name": "Hangar Bay",
        "img": "./assets/locations/hangar_bay.jpg"
      },
      {
        "name": "Xavier Institute",
        "img": "./assets/locations/xavier_institute.jpg"
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (magneto_villain): Inicia en GENOSHA — Magneto preside la asamblea en la ciudadela mutante protegido por un domo electromagnético polarizado.",
      "👤 JORGE (spider_2099): Inicia en GENOSHA — Cíclope lidera la comitiva diplomática en persona, dispuesto a apelar al sueño de Xavier sin ceder terreno.",
      "🌸 ESPOSA (Lobezno (Logan)): Inicia en MUIR ISLAND — Spider-Man 2099 monitorea el campo gravitatorio y las líneas de fuerza terrestre desde el laboratorio de Moira.",
      "⭐ APOYO (Ghost-Spider (Gwen), si juega): Inicia en ASTEROID M — Tormenta aguarda en la estación orbital como embajadora de paz reconocida y respetada por Lehnsherr.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Muro Magnético: El metal obedece a Erik, pero los héroes pueden canalizar energías tácticas para neutralizar sus campos.",
    "events": {
      "initial": {
        "title": "¡TREGUA TÁCTICA PREVIA!",
        "type": "Evento de Inicio",
        "badge": "Respeto Mutuo",
        "text": "Magneto escucha las advertencias de Logan y la tecnología del futuro de Miguel: <strong>Cada héroe recibe 1 Ficha Heroica al empezar.</strong>",
        "flavor": "\"Charles siempre fue un soñador ingenuo. Demuéstrenme que tienen la fuerza para proteger nuestro futuro.\" — Magneto"
      },
      "underPressure": {
        "title": "¡DISIPACIÓN DE LA TORMENTA MAGNÉTICA!",
        "type": "Bajo Presión",
        "badge": "Canalización Heroica",
        "text": "¡Los héroes estabilizan los campos de fuerza de la isla! <strong>Cada héroe recupera 1 carta de su pila de descarte a su mano. Magneto retira 1 amenaza de Genosha.</strong>",
        "flavor": "Miguel y Logan demuestran convicción y control absoluto."
      },
      "accelerated": {
        "title": "¡RECONOCIMIENTO DEL PELIGRO COMÚN!",
        "type": "Acelerado",
        "badge": "Pacto de Sangre",
        "text": "¡Magneto observa las muestras de infección simbiótica traídas por los héroes! <strong>Magneto otorga un escudo magnético a los héroes que previene las siguientes 2 heridas que fueran a sufrir.</strong>",
        "flavor": "\"¿Un parásito capaz de esclavizar el Gen-X? ¡Esa aberración no tocará a mis mutantes!\""
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: EL PACTO DE GENOSHA!",
      "epilogue": "Magneto desciende solemnemente: \"Si esa criatura demente amenaza a mis hermanos mutantes, lucharé a vuestro lado bajo el estandarte de la supervivencia\". ¡MAGNETO SE SUMA OFICIALMENTE COMO HÉROE ALIADO PARA LA GUERRA FINAL!",
      "unlockedHeroes": [
        "magneto_hero"
      ],
      "unlockedPerks": [
        "perk_magnetic_pulse"
      ],
      "nextChapter": "8A",
      "bonusText": "¡MAGNETO DESBLOQUEADO COMO HÉROE! Ventaja \"Pulso Magnético\" obtenida. Avanzan a la infiltración en los muelles (Capítulo 8A)."
    },
    "lossOutcome": {
      "title": "RETIRADA: AISLAMIENTO MUTANTE",
      "epilogue": "Magneto se aísla en Genosha bajo un escudo impenetrable. Los héroes deben regresar a Manhattan sabiendo que deberán enfrentar el apocalipsis simbiótico sin su ayuda.",
      "nextChapter": "8B",
      "penalties": "Magneto no estará disponible como héroe aliado en el desenlace.",
      "bonusText": "Avanzan a la infiltración sin apoyo de Genosha (Capítulo 8B)."
    },
    "deployment": {
      "villain": {
        "location": "Genosha",
        "reason": "Magneto preside la asamblea en la ciudadela mutante protegido por un domo electromagnético polarizado."
      },
      "hero1": {
        "location": "Genosha",
        "reason": "Cíclope lidera la comitiva diplomática en persona, dispuesto a apelar al sueño de Xavier sin ceder terreno."
      },
      "hero2": {
        "location": "Muir Island",
        "reason": "Spider-Man 2099 monitorea el campo gravitatorio y las líneas de fuerza terrestre desde el laboratorio de Moira."
      },
      "hero3": {
        "location": "Asteroid M",
        "reason": "Tormenta aguarda en la estación orbital como embajadora de paz reconocida y respetada por Lehnsherr."
      },
      "locations": [
        "Genosha",
        "Asteroid M",
        "Muir Island",
        "Hangar Bay",
        "Xavier Institute",
        "Sims Tower"
      ]
    }
  },
  {
    "id": "7B",
    "step": 7,
    "act": 3,
    "actTitle": "ACTO III: GUERRA TOTAL Y CRISIS OMEGA",
    "title": "Capítulo 7B: Incursión Hostil en Genosha (Choque con el Caudillo)",
    "villainId": "magneto_villain",
    "assignedHeroSlot1": "spider_2099",
    "assignedHeroSlot2": "wolverine",
    "assignedHeroSlot3": "ghost_spider",
    "squadOptions": [
      "spider_2099",
      "wolverine",
      "ghost_spider",
      "jean_grey"
    ],
    "comicReference": "2099: World of Tomorrow & Astonishing X-Men",
    "synopsis": "Sin testimonios concluyentes, los héroes son recibidos como invasores en Genosha. Magneto levanta barricadas de acero triturado y tormentas de inducción electromagnética. Miguel O'Hara y Logan deben abrirse paso a la fuerza hasta la sala del trono para someter temporalmente a Erik y obligarlo a escuchar la verdad.",
    "locations": [
      {
        "name": "Asteroid M",
        "img": "./assets/locations/asteroid_m.jpg",
        "startVillain": true,
        "startHero3": true
      },
      {
        "name": "Genosha",
        "img": "./assets/locations/genosha.jpg",
        "startHero1": true
      },
      {
        "name": "Hangar Bay",
        "img": "./assets/locations/hangar_bay.jpg",
        "startHero2": true
      },
      {
        "name": "Muir Island",
        "img": "./assets/locations/muir_island.jpg"
      },
      {
        "name": "Xavier Institute",
        "img": "./assets/locations/xavier_institute.jpg"
      },
      {
        "name": "The Savage Land",
        "img": "./assets/locations/savage_land.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (magneto_villain): Inicia en ASTEROID M — Magneto concentra energía magnética orbital listo para paralizar todos los sistemas tecnológicos de la Tierra.",
      "👤 JORGE (spider_2099): Inicia en GENOSHA — Lobezno sabotea las plataformas de lanzamiento en tierra para abordar el transbordador espacial a la fuerza.",
      "🌸 ESPOSA (Lobezno (Logan)): Inicia en HANGAR BAY — Spider-Man (Peter) se sujeta con redes de polímero térmico al fuselaje exterior del Blackbird presurizado.",
      "⭐ APOYO (Ghost-Spider (Gwen), si juega): Inicia en ASTEROID M — Coloso desafía la influencia magnética resistiendo el torbellino de metralla metálica con pura fuerza de voluntad.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Vórtice Electromagnético: Cada BAM de Magneto atrae a los héroes hacia su ubicación y les inflige 1 herida si tienen metal.",
    "events": {
      "initial": {
        "title": "¡TORMENTA MAGNÉTICA HOSTIL!",
        "type": "Evento de Inicio",
        "badge": "Combate Crítico",
        "text": "Lanzas de metal llueven sobre la playa: <strong>Cada héroe recibe 1 Ficha de Movimiento y 1 Ficha de Ataque al empezar.</strong>",
        "flavor": "\"¡No recibiré lecciones de humanos ni de traidores a su raza!\" — Magneto"
      },
      "underPressure": {
        "title": "¡ARRASTRE DE GRAVEDAD DE 2099!",
        "type": "Bajo Presión",
        "badge": "Tecnología Alchemax",
        "text": "¡Miguel dispersa el campo magnético con un pulso de fase! <strong>Magneto no puede usar BAM en su siguiente turno.</strong>",
        "flavor": "Dispositivos del futuro desorientan las líneas de fuerza polar."
      },
      "accelerated": {
        "title": "¡CARGA SALVAJE DE LOGAN!",
        "type": "Acelerado",
        "badge": "Voluntad de Hierro",
        "text": "¡Wolverine desafía el dolor y derriba el estrado de Magneto! <strong>Inflige 2 de daño directo a Magneto.</strong>",
        "flavor": "\"¡Si no nos escuchas, Erik, todos nuestros hermanos van a morir!\""
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: TREGUA FORZADA POR EL DESTINO!",
      "epilogue": "Derrotado en su propio trono, Magneto contempla los análisis de Alchemax: \"Es una monstruosidad... lucharé para exterminar a ese simbionte\". ¡Magneto se suma a regañadientes a la alianza final!",
      "unlockedHeroes": [
        "magneto_hero"
      ],
      "unlockedPerks": [
        "perk_magnetic_pulse"
      ],
      "nextChapter": "8A",
      "bonusText": "¡Magneto desbloqueado como héroe! Avanzan a los muelles (Capítulo 8A)."
    },
    "lossOutcome": {
      "title": "RETIRADA: EXPULSADOS DE GENOSHA",
      "epilogue": "Magneto expulsa a los héroes con un pulso masivo que avería el Blackbird. Deben enfrentar a Carnage solos.",
      "nextChapter": "8B",
      "penalties": "Magneto permanecerá aislado en su fortaleza.",
      "bonusText": "Avanzan a los muelles sin apoyo (Capítulo 8B)."
    },
    "deployment": {
      "villain": {
        "location": "Asteroid M",
        "reason": "Magneto concentra energía magnética orbital listo para paralizar todos los sistemas tecnológicos de la Tierra."
      },
      "hero1": {
        "location": "Genosha",
        "reason": "Lobezno sabotea las plataformas de lanzamiento en tierra para abordar el transbordador espacial a la fuerza."
      },
      "hero2": {
        "location": "Hangar Bay",
        "reason": "Spider-Man (Peter) se sujeta con redes de polímero térmico al fuselaje exterior del Blackbird presurizado."
      },
      "hero3": {
        "location": "Asteroid M",
        "reason": "Coloso desafía la influencia magnética resistiendo el torbellino de metralla metálica con pura fuerza de voluntad."
      },
      "locations": [
        "Asteroid M",
        "Genosha",
        "Hangar Bay",
        "Muir Island",
        "Xavier Institute",
        "The Savage Land"
      ]
    }
  },
  {
    "id": "8A",
    "step": 8,
    "act": 3,
    "actTitle": "ACTO III: GUERRA TOTAL Y CRISIS OMEGA",
    "title": "Capítulo 8A: Infiltración Silenciosa en los Muelles de Brooklyn",
    "villainId": "mystique_villain",
    "assignedHeroSlot1": "spider_ham",
    "assignedHeroSlot2": "mystique_hero",
    "assignedHeroSlot3": "black_cat",
    "squadOptions": [
      "spider_ham",
      "mystique_hero",
      "black_cat",
      "spider_woman"
    ],
    "comicReference": "Spider-Verse (Dan Slott) & X-Men Black: Mystique",
    "synopsis": "Para asaltar la fábrica clandestina en los muelles de Brooklyn donde se sintetizan las cepas rojas de Carnage, se requiere sigilo absoluto y desorientación. Mística, ahora aliada por la supervivencia mutante, utiliza sus habilidades de camuflaje para vulnerar las esclusas biométricas. A su lado, Peter Porker (Spider-Ham), recién llegado del multiverso animado, desafía la gravedad y la física con su martillo de caricatura, demoliendo las defensas de seguridad de la forma más cómica e impredecible posible, con la Gata Negra cubriendo la retaguardia.",
    "locations": [
      {
        "name": "Muir Island",
        "img": "./assets/locations/muir_island.jpg",
        "startVillain": true,
        "startHero2": true,
        "startHero3": true
      },
      {
        "name": "Hangar Bay",
        "img": "./assets/locations/hangar_bay.jpg",
        "startHero1": true
      },
      {
        "name": "Xavier Institute",
        "img": "./assets/locations/xavier_institute.jpg"
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg"
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      },
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (mystique_villain): Inicia en MUIR ISLAND — Mística vulnera las terminales del centro genético escocés para copiar los secuenciadores de ADN mutante.",
      "👤 JORGE (Spider-Ham (Peter Porker)): Inicia en HANGAR BAY — Tormenta vuela a la vanguardia disimulando la llegada de los héroes con un manto de nubes marinas bajas.",
      "🌸 ESPOSA (mystique_hero): Inicia en MUIR ISLAND — Spider-Ham (Peter Porker) se escurre cómicamente por las tuberías de desagüe con un mazo gigante a la espalda.",
      "⭐ APOYO (Gata Negra (Felicia), si juega): Inicia en MUIR ISLAND — Gata Negra fuerza la caja fuerte de los servidores para salvar los datos antes de que Mística ejecute el borrado.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Prueba de Reflejos: Mística evalúa la coordinación de los héroes.",
    "events": {
      "initial": {
        "title": "¡ENCUENTRO EN LOS MUELLES!",
        "type": "Evento de Inicio",
        "badge": "Prueba Táctica",
        "text": "La niebla cubre los almacenes. Mística observa la destreza del equipo: <strong>Cada héroe recibe 1 Ficha de Movimiento gratis.</strong>",
        "flavor": "\"Si quieren derribar a Kasady, necesitarán a alguien que sepa entrar sin ser visto.\" — Mística"
      },
      "underPressure": {
        "title": "¡LLEGA EL HÉROE DE LOS DIBUJOS!",
        "type": "Bajo Presión",
        "badge": "Toon Force al Rescate",
        "text": "¡PLOP! Spider-Ham saca un martillo gigante de su bolsillo: <strong>Elimina a todos los matones en su ubicación inmediatamente (sin Desbordamiento) y cada héroe roba 1 carta.</strong>",
        "flavor": "\"¡Tranquilos todos, el jamón de la justicia ha llegado para arreglar esto a martillazos!\" — Spider-Ham"
      },
      "accelerated": {
        "title": "¡LOS PLANOS DEL NIDO ROJO!",
        "type": "Acelerado",
        "badge": "Información Clasificada",
        "text": "¡Mística entrega los códigos de desactivación de las trampas de Carnage! <strong>Todos los Héroes ganan 1 Ficha Comodín y se curan 1 herida.</strong>",
        "flavor": "\"Tomen esto. Es el mapa de ventilación de la zona cero. Salven a esta ciudad.\""
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: ALIANZA DE ESPÍAS Y DIBUJOS!",
      "epilogue": "Mística sonríe y guarda sus armas: \"Tienen valor. Cuenten con mis habilidades para infiltrarnos\". Con el ingenio surrealista de Spider-Ham y su martillo toon, el equipo cuenta con la fuerza más impredecible del multiverso. ¡Desbloquean a Mística Heroína y Spider-Ham con los planos de la zona cero!",
      "unlockedHeroes": [
        "mystique_hero",
        "spider_ham"
      ],
      "unlockedPerks": [
        "perk_cartoon_mallet"
      ],
      "nextChapter": "9A",
      "bonusText": "¡MÍSTICA HEROÍNA Y SPIDER-HAM DESBLOQUEADOS! Avanzan con los planos hacia el Frente de Manhattan (Capítulo 9A)."
    },
    "lossOutcome": {
      "title": "RETIRADA: ACUERDO FORZADO Y ALARMA GENERAL",
      "epilogue": "El asalto es ruidoso y las alarmas de la fábrica se disparan. Aunque Spider-Ham rescata parte de los planos, la biomasa roja es bombeada hacia las calles.",
      "unlockedHeroes": [
        "spider_ham"
      ],
      "unlockedPerks": [
        "perk_cartoon_mallet"
      ],
      "nextChapter": "9B",
      "bonusText": "Spider-Ham desbloqueado. Las barricadas de Manhattan enfrentan una marea roja (Capítulo 9B)."
    },
    "deployment": {
      "villain": {
        "location": "Muir Island",
        "reason": "Mística vulnera las terminales del centro genético escocés para copiar los secuenciadores de ADN mutante."
      },
      "hero1": {
        "location": "Hangar Bay",
        "reason": "Tormenta vuela a la vanguardia disimulando la llegada de los héroes con un manto de nubes marinas bajas."
      },
      "hero2": {
        "location": "Muir Island",
        "reason": "Spider-Ham (Peter Porker) se escurre cómicamente por las tuberías de desagüe con un mazo gigante a la espalda."
      },
      "hero3": {
        "location": "Muir Island",
        "reason": "Gata Negra fuerza la caja fuerte de los servidores para salvar los datos antes de que Mística ejecute el borrado."
      },
      "locations": [
        "Muir Island",
        "Hangar Bay",
        "Xavier Institute",
        "Sims Tower",
        "Central Park",
        "Morlock Tunnels"
      ]
    }
  },
  {
    "id": "8B",
    "step": 8,
    "act": 3,
    "actTitle": "ACTO III: GUERRA TOTAL Y CRISIS OMEGA",
    "title": "Capítulo 8B: Asalto Clandestino de Emergencia a los Muelles",
    "villainId": "mystique_villain",
    "assignedHeroSlot1": "spider_ham",
    "assignedHeroSlot2": "mystique_hero",
    "assignedHeroSlot3": "black_cat",
    "squadOptions": [
      "spider_ham",
      "mystique_hero",
      "black_cat",
      "spider_woman"
    ],
    "comicReference": "Spider-Verse (Dan Slott) & X-Men Black",
    "synopsis": "Sin la cobertura de Magneto, los héroes deben asaltar los almacenes clandestinos de Brooklyn a la desesperada. Spider-Ham y Mística intentan sabotear las válvulas maestras de bio-infección antes de que los tanques revienten sobre el río.",
    "locations": [
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg",
        "startVillain": true,
        "startHero2": true
      },
      {
        "name": "Muir Island",
        "img": "./assets/locations/muir_island.jpg",
        "startHero3": true
      },
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg",
        "startHero1": true
      },
      {
        "name": "Hangar Bay",
        "img": "./assets/locations/hangar_bay.jpg"
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg"
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (mystique_villain): Inicia en SIMS TOWER — Mística se atrinchera en la torre de comunicaciones cargando el código malicioso en una antena satelital masiva.",
      "👤 JORGE (Spider-Ham (Peter Porker)): Inicia en MORLOCK TUNNELS — Lobezno corta de cuajo los cables troncales de energía en el subsuelo para dejar sin energía el transmisor.",
      "🌸 ESPOSA (mystique_hero): Inicia en SIMS TOWER — Spider-Ham llena el hueco del ascensor con tartas de merengue y muelles para atrapar a los guardias mercenarios.",
      "⭐ APOYO (Gata Negra (Felicia), si juega): Inicia en MUIR ISLAND — Bestia hackea la señal desde los laboratorios de la isla sobrecargando el receptor de la antena.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Válvulas a Presión: Los héroes sufren 1 de daño si terminan su turno en casillas con 2 o más matones.",
    "events": {
      "initial": {
        "title": "¡CARRERA EN LOS MUELLES!",
        "type": "Evento de Inicio",
        "badge": "Contrarreloj",
        "text": "Los tanques hierven de líquido rojo: <strong>Cada héroe recibe 1 Ficha Heroica al empezar.</strong>",
        "flavor": "\"¡Rápido, o este puerto será una sopa de zarcillos!\" — Spider-Ham"
      },
      "underPressure": {
        "title": "¡MARTILLAZO DE DIBUJOS ANIMADOS!",
        "type": "Bajo Presión",
        "badge": "Física Toon",
        "text": "¡Spider-Ham aplasta la válvula principal! <strong>Elimina a 2 matones del tablero (sin Desbordamiento).</strong>",
        "flavor": "¡BOING! El metal se dobla como acordeón cómico."
      },
      "accelerated": {
        "title": "¡CAMUFLAJE TOTAL DE MÍSTICA!",
        "type": "Acelerado",
        "badge": "Engaño Letal",
        "text": "¡Mística confunde a los centinelas enemigos! <strong>Inflige 2 de daño a la amenaza del villano.</strong>",
        "flavor": "Los guardias se disparan entre sí confundidos."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: VÁLVULAS SELLADAS A TIEMPO!",
      "epilogue": "Mística y Spider-Ham logran cerrar las válvulas maestras. La biomasa roja es contenida y Spider-Ham se suma al equipo.",
      "unlockedHeroes": [
        "mystique_hero",
        "spider_ham"
      ],
      "unlockedPerks": [
        "perk_cartoon_mallet"
      ],
      "nextChapter": "9A",
      "bonusText": "Spider-Ham y Mística desbloqueados. Avanzan al Capítulo 9A."
    },
    "lossOutcome": {
      "title": "RETIRADA: FUGA PARCIAL DE BIOMASA",
      "epilogue": "Una de las compuertas cede y el líquido rojo inunda la avenida central. Rhino avanza mutado hacia las barricadas.",
      "unlockedHeroes": [
        "spider_ham"
      ],
      "unlockedPerks": [
        "perk_cartoon_mallet"
      ],
      "nextChapter": "9B",
      "penalties": "Rhino comenzará con más fuerza en la siguiente misión.",
      "bonusText": "Spider-Ham desbloqueado. Avanzan al Capítulo 9B."
    },
    "deployment": {
      "villain": {
        "location": "Sims Tower",
        "reason": "Mística se atrinchera en la torre de comunicaciones cargando el código malicioso en una antena satelital masiva."
      },
      "hero1": {
        "location": "Morlock Tunnels",
        "reason": "Lobezno corta de cuajo los cables troncales de energía en el subsuelo para dejar sin energía el transmisor."
      },
      "hero2": {
        "location": "Sims Tower",
        "reason": "Spider-Ham llena el hueco del ascensor con tartas de merengue y muelles para atrapar a los guardias mercenarios."
      },
      "hero3": {
        "location": "Muir Island",
        "reason": "Bestia hackea la señal desde los laboratorios de la isla sobrecargando el receptor de la antena."
      },
      "locations": [
        "Sims Tower",
        "Muir Island",
        "Morlock Tunnels",
        "Hangar Bay",
        "Daily Bugle",
        "Central Park"
      ]
    }
  },
  {
    "id": "9A",
    "step": 9,
    "act": 3,
    "actTitle": "ACTO III: GUERRA TOTAL Y CRISIS OMEGA",
    "title": "Capítulo 9A: El Frente Unido en Manhattan (Defensa Perimetral con Iniciativa)",
    "villainId": "rhino",
    "assignedHeroSlot1": "storm",
    "assignedHeroSlot2": "venom_hero",
    "assignedHeroSlot3": "miles_morales",
    "squadOptions": [
      "storm",
      "venom_hero",
      "miles_morales",
      "cyclops"
    ],
    "comicReference": "Venomverse & X-Men Red",
    "synopsis": "¡El cerco a Manhattan! Rhino, sobrecargado con tejido simbiótico rojo que multiplica su blindaje, lidera el ataque para aislar el perímetro exterior antes del despertar de Carnage. Eddie Brock (Venom), redimido y enfurecido por la corrupción de su linaje, se lanza de frente en un choque monumental de fuerza bruta. Desde lo alto, Tormenta desata tempestades y rayos para calcinar los zarcillos parásitos de la armadura de Rhino, mientras Miles Morales teje barreras bioeléctricas para impedir que la embestida rompa el cordón de evacuación de civiles.",
    "locations": [
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg",
        "startVillain": true,
        "startHero2": true
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startHero3": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg"
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg",
        "startHero1": true
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg"
      },
      {
        "name": "Xavier Institute",
        "img": "./assets/locations/xavier_institute.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Rhino): Inicia en CENTRAL PARK — Rhino, poseído por zarcillos rojos simbióticos de Carnage, arremete contra las defensas de Central Park.",
      "👤 JORGE (Tormenta (Ororo)): Inicia en OSCORP TOWER — Bestia avanza veloz en un transporte táctico cargando los cañones sónicos de frecuencia disolvente.",
      "🌸 ESPOSA (venom_hero): Inicia en CENTRAL PARK — Spider-Woman (Jessica) descarga ráfagas de veneno bioeléctrico para desintegrar los tentáculos parásitos.",
      "⭐ APOYO (Miles Morales, si juega): Inicia en DAILY BUGLE — Venom (Eddie Brock, aliado) ruge desde el Bugle y se lanza con ferocidad fraternal contra la infección roja.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Sinergia Total: Cada vez que completéis una misión heroica, los héroes se curan 1 punto de daño.",
    "events": {
      "initial": {
        "title": "¡POSICIONES DE COMBATE!",
        "type": "Evento de Inicio",
        "badge": "Frente Unido",
        "text": "Toda la alianza actúa como un solo cuerpo: <strong>Cada héroe comienza la partida con 1 Ficha de Ataque y 1 Ficha de Movimiento gratis.</strong>",
        "flavor": "\"¡Por los mutantes, por Nueva York, por nuestras familias!\""
      },
      "underPressure": {
        "title": "¡SINERGIA ARÁCNIDA Y MUTANTE!",
        "type": "Bajo Presión",
        "badge": "Armonía Táctica",
        "text": "¡Coordinación perfecta en el campo de batalla! <strong>Cada héroe puede intercambiar su posición con otro héroe en el tablero e infligir 1 de daño a un matón en su nueva casilla.</strong>",
        "flavor": "Rayos ópticos, telarañas y garras coordinadas en un ballet destructivo perfecto."
      },
      "accelerated": {
        "title": "¡CAMINO A LA ZONA CERO DESPEJADO!",
        "type": "Acelerado",
        "badge": "Carga Definitiva",
        "text": "¡Las líneas enemigas colapsan! <strong>Todos los Héroes roban 2 cartas de su mazo y se curan 1 herida. La victoria está a tiro de piedra.</strong>",
        "flavor": "\"¡El perímetro está limpio! ¡Todos a Central Park, ahora!\""
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: EL PERÍMETRO ESTÁ ASEGURADO!",
      "epilogue": "Rhino y sus matones son finalmente neutralizados gracias al poder de Tormenta y la fuerza simbiótica de Venom. El cielo sobre Central Park se tiñe de un rojo sangre espeluznante: Carnage ha abierto los tanques. ¡La alianza entra con la moral al máximo al Gran Final (Capítulo 10A)!",
      "nextChapter": "10A",
      "bonusText": "¡Todos los héroes desbloqueados están disponibles con la moral al máximo para el Capítulo 10A!"
    },
    "lossOutcome": {
      "title": "ASALTO A LA DESESPERADA",
      "epilogue": "La escaramuza se extiende más de lo planeado y las defensas sufren bajas. Llegan fatigados al epicentro de Central Park.",
      "nextChapter": "10B",
      "penalties": "En el Cap. 10B no podrán usar ventajas en la primera ronda.",
      "bonusText": "Avanzan al Capítulo 10B (Batalla al Límite de la Extinción)."
    },
    "deployment": {
      "villain": {
        "location": "Central Park",
        "reason": "Rhino, poseído por zarcillos rojos simbióticos de Carnage, arremete contra las defensas de Central Park."
      },
      "hero1": {
        "location": "Oscorp Tower",
        "reason": "Bestia avanza veloz en un transporte táctico cargando los cañones sónicos de frecuencia disolvente."
      },
      "hero2": {
        "location": "Central Park",
        "reason": "Spider-Woman (Jessica) descarga ráfagas de veneno bioeléctrico para desintegrar los tentáculos parásitos."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Venom (Eddie Brock, aliado) ruge desde el Bugle y se lanza con ferocidad fraternal contra la infección roja."
      },
      "locations": [
        "Central Park",
        "Daily Bugle",
        "Midtown High School",
        "Oscorp Tower",
        "Brooklyn Bridge",
        "Xavier Institute"
      ]
    }
  },
  {
    "id": "9B",
    "step": 9,
    "act": 3,
    "actTitle": "ACTO III: GUERRA TOTAL Y CRISIS OMEGA",
    "title": "Capítulo 9B: Ruptura de Barricadas en Manhattan (Rhino Simbiótico Desatado)",
    "villainId": "rhino",
    "assignedHeroSlot1": "storm",
    "assignedHeroSlot2": "venom_hero",
    "assignedHeroSlot3": "miles_morales",
    "squadOptions": [
      "storm",
      "venom_hero",
      "miles_morales",
      "cyclops"
    ],
    "comicReference": "Venomverse & X-Men Red",
    "synopsis": "¡Las líneas de contención han colapsado! Rhino, completamente recubierto de biomasa carmesí que lo vuelve invulnerable a ataques convencionales, lidera una estampida demoledora a través de la 5ª Avenida. Tormenta y Venom deben improvisar un frente de rescate y combate brutal para evitar que la marea roja devore a los refugiados civiles.",
    "locations": [
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg",
        "startVillain": true,
        "startHero1": true,
        "startHero2": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg",
        "startHero3": true
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg"
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      },
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg"
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Rhino): Inicia en BROOKLYN BRIDGE — Rhino Simbiótico destruye las barricadas del puente abriendo paso a hordas de infectados hacia Manhattan.",
      "👤 JORGE (Tormenta (Ororo)): Inicia en BROOKLYN BRIDGE — Coloso se interpone en medio del puente plantando sus puños blindados para contener la estampida alienígena.",
      "🌸 ESPOSA (venom_hero): Inicia en BROOKLYN BRIDGE — Ghost-Spider (Gwen) teje una telaraña de seguridad gigante bajo el puente para salvar a los peatones que caen.",
      "⭐ APOYO (Miles Morales, si juega): Inicia en MIDTOWN HIGH SCHOOL — Jean Grey levanta telequinéticamente los autobuses escolares fuera del alcance del puente destruido.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Marea de Zarcillos: Cada BAM de Rhino coloca 1 Matón en cada casilla adyacente que tenga espacio libre.",
    "events": {
      "initial": {
        "title": "¡BARRICADAS ARDIENTES!",
        "type": "Evento de Inicio",
        "badge": "Línea de Choque",
        "text": "Los héroes defienden a los civiles cuerpo a cuerpo: <strong>Cada héroe recibe 1 Ficha de Ataque y 1 Ficha Heroica al empezar.</strong>",
        "flavor": "\"¡Mantengan la línea, por la vida de todos!\" — Tormenta"
      },
      "underPressure": {
        "title": "¡PULSO BIOELÉCTRICO DE MILES!",
        "type": "Bajo Presión",
        "badge": "Descarga Masiva",
        "text": "¡Miles electrifica la calzada de asfalto! <strong>Elimina a 2 matones simbióticos (sin Desbordamiento).</strong>",
        "flavor": "Arco voltaico de alto voltaje calปcina los parásitos rojos."
      },
      "accelerated": {
        "title": "¡DESGARRO SIMBIÓTICO DE VENOM!",
        "type": "Acelerado",
        "badge": "Fuerza Titánica",
        "text": "¡Eddie Brock arranca la coraza carmesí de Rhino! <strong>Inflige 2 de daño directo a Rhino.</strong>",
        "flavor": "\"¡TÚ NO ERES DIGNO DE LLEVAR A LOS NUESTROS!\" — Venom"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA HEROICA EN LA BARRICADA!",
      "epilogue": "Rhino es derribado in extremis y la última caravana de evacuación sale hacia el norte. El cielo se tiñe de carmesí: Carnage despierta en Central Park.",
      "nextChapter": "10A",
      "bonusText": "¡Han salvado a los refugiados! Avanzan a la batalla definitiva (Capítulo 10A)."
    },
    "lossOutcome": {
      "title": "RETIRADA: LAS LÍNEAS CEDEN",
      "epilogue": "El perímetro cae y los héroes deben replegarse a trompicones hacia Central Park. Todo depende del asalto final.",
      "nextChapter": "10B",
      "penalties": "Empezarán el combate final exhaustos.",
      "bonusText": "Avanzan al Capítulo 10B."
    },
    "deployment": {
      "villain": {
        "location": "Brooklyn Bridge",
        "reason": "Rhino Simbiótico destruye las barricadas del puente abriendo paso a hordas de infectados hacia Manhattan."
      },
      "hero1": {
        "location": "Brooklyn Bridge",
        "reason": "Coloso se interpone en medio del puente plantando sus puños blindados para contener la estampida alienígena."
      },
      "hero2": {
        "location": "Brooklyn Bridge",
        "reason": "Ghost-Spider (Gwen) teje una telaraña de seguridad gigante bajo el puente para salvar a los peatones que caen."
      },
      "hero3": {
        "location": "Midtown High School",
        "reason": "Jean Grey levanta telequinéticamente los autobuses escolares fuera del alcance del puente destruido."
      },
      "locations": [
        "Brooklyn Bridge",
        "Midtown High School",
        "Daily Bugle",
        "Central Park",
        "Morlock Tunnels",
        "Oscorp Tower"
      ]
    }
  },
  {
    "id": "10A",
    "step": 10,
    "act": 3,
    "actTitle": "ACTO III: GUERRA TOTAL Y CRISIS OMEGA",
    "title": "Capítulo 10A: GRAN FINAL — MAXIMA MATANZA (El Golpe Maestro de la Alianza)",
    "villainId": "carnage",
    "assignedHeroSlot1": "magneto_hero",
    "assignedHeroSlot2": "spider_man",
    "assignedHeroSlot3": "wolverine",
    "squadOptions": [
      "magneto_hero",
      "spider_man",
      "wolverine",
      "miles_morales"
    ],
    "comicReference": "Spider-Man: Maximum Carnage & X-Men: Fatal Attractions",
    "synopsis": "¡EL CLÍMAX DE LA CAMPAÑA MAXIMUM CARNAGE! Cletus Kasady se ha fusionado por completo con la biomasa mutante en Central Park, transformado en un torbellino gigante de zarcillos carmesí asesinos. Con el perímetro exterior asegurado y la alianza unida con toda su fuerza, Erik Lehnsherr (Magneto) desciende del cielo envuelto en un campo de fuerza colosal, levantando toneladas de acero para forjar una jaula de confinamiento electromagnético. A su lado, Peter Parker (Spider-Man) y Logan (Wolverine) se lanzan al corazón de la tormenta roja en un despliegue heroico definitivo de garras, telarañas y valor para salvar el futuro de la Tierra.",
    "locations": [
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startVillain": true,
        "startHero3": true
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg",
        "startHero1": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg",
        "startHero2": true
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg"
      },
      {
        "name": "Xavier Institute",
        "img": "./assets/locations/xavier_institute.jpg"
      },
      {
        "name": "The Danger Room",
        "img": "./assets/locations/danger_room.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Carnage): Inicia en DAILY BUGLE — Cletus Kasady (Carnage) ha tomado la torre del Daily Bugle, extendiendo una cúpula viscosa de sangre simbiótica sobre Manhattan.",
      "👤 JORGE (magneto_hero): Inicia en CENTRAL PARK — Lobezno se abre camino a garras limpias entre las masas infectadas despejando el corredor hacia el rascacielos.",
      "🌸 ESPOSA (Spider-Man (Peter)): Inicia en OSCORP TOWER — Spider-Man (Peter) corre con los contenedores del antídoto acústico sintetizado para la inyección final.",
      "⭐ APOYO (Lobezno (Logan), si juega): Inicia en DAILY BUGLE — Jean Grey alza una jaula psiónica sobre el helipuerto del Bugle para evitar la dispersión aérea de Carnage.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Marea Roja: Los zarcillos amenazan la ciudad, pero la fuerza combinada de la alianza tiene la última palabra.",
    "events": {
      "initial": {
        "title": "¡EL DESPERTAR DE LA MATANZA MÁXIMA!",
        "type": "Evento de Inicio",
        "badge": "Batalla por el Mañana",
        "text": "Toda la experiencia de la campaña se concentra en este momento: <strong>Cada héroe recibe 1 Ficha Comodín y 1 Ficha Heroica al empezar.</strong>",
        "flavor": "\"¡JAJAJAJAJA! ¡NO HAY LEYES! ¡NO HAY MUTANTES NI HUMANOS! ¡SÓLO HAY MATANZA!\" — Carnage"
      },
      "underPressure": {
        "title": "¡DESCARGA BIOELÉCTRICA COMBINADA!",
        "type": "Bajo Presión",
        "badge": "Golpe a la Infección",
        "text": "¡Miles Morales y Spider-Woman desatan un pulso eléctrico que calcina los zarcillos rojos! <strong>Elimina hasta 3 matones simbióticos del tablero (sin Desbordamiento). Además, Carnage sufre 2 de daño directo.</strong>",
        "flavor": "Chispas bioeléctricas amarillas y azules queman la biomasa carmesí liberando a los rehenes."
      },
      "accelerated": {
        "title": "¡LA JAULA DE VACÍO Y EL GOLPE DEFINITIVO!",
        "type": "Acelerado",
        "badge": "Triunfo de la Alianza",
        "text": "¡Magneto forja una cápsula ferrosa hermética mientras Wolverine y Spider-Man asestan el golpe de gracia! <strong>Inflige 4 de daño directo a Carnage y cada héroe roba 2 cartas.</strong>",
        "flavor": "\"¡Por los mutantes, por Nueva York, por la vida!\""
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA ABSOLUTA: EL TRIUNFO DE LA ALIANZA MUTANTE Y ARÁCNIDA!",
      "epilogue": "¡LO HAN LOGRADO! El simbionte carmesí es arrancado de Cletus Kasady mediante la jaula magnética de Magneto y sellado en una cápsula criogénica de contención en la Sala de Peligro. Manhattan vuelve a respirar en paz. Los periódicos del Daily Bugle imprimen ediciones históricas reconociendo a los mutantes y héroes arácnidos como los salvadores legendarios del planeta. Una hermandad indestructible ha nacido.",
      "isCampaignWon": true,
      "bonusText": "¡FELICITACIONES! Han completado la campaña MAXIMUM MUTATION con una victoria legendaria. ¡El multiverso y la raza mutante están a salvo gracias a ti y tu esposa!"
    },
    "lossOutcome": {
      "title": "SACRIFICIO HEROICO Y RETIRADA A LA CLANDESTINIDAD",
      "epilogue": "Carnage es colosal y la jaula magnética cede bajo la presión de millones de zarcillos. Los héroes logran rescatar a los supervivientes y replegarse a los búnkeres secretos de la Mansión X. Manhattan queda temporalmente bajo cuarentena biológica, pero la alianza sobrevive en la clandestinidad, jurando que mientras un solo héroe respire, la resistencia continuará.",
      "isCampaignWon": false,
      "bonusText": "Campaña concluida con Desenlace Dramático: Los héroes resisten en las sombras. ¡Una gesta inolvidable de valentía!"
    },
    "deployment": {
      "villain": {
        "location": "Daily Bugle",
        "reason": "Cletus Kasady (Carnage) ha tomado la torre del Daily Bugle, extendiendo una cúpula viscosa de sangre simbiótica sobre Manhattan."
      },
      "hero1": {
        "location": "Central Park",
        "reason": "Lobezno se abre camino a garras limpias entre las masas infectadas despejando el corredor hacia el rascacielos."
      },
      "hero2": {
        "location": "Oscorp Tower",
        "reason": "Spider-Man (Peter) corre con los contenedores del antídoto acústico sintetizado para la inyección final."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Jean Grey alza una jaula psiónica sobre el helipuerto del Bugle para evitar la dispersión aérea de Carnage."
      },
      "locations": [
        "Daily Bugle",
        "Central Park",
        "Oscorp Tower",
        "Brooklyn Bridge",
        "Xavier Institute",
        "The Danger Room"
      ]
    }
  },
  {
    "id": "10B",
    "step": 10,
    "act": 3,
    "actTitle": "ACTO III: GUERRA TOTAL Y CRISIS OMEGA",
    "title": "Capítulo 10B: GRAN FINAL — MAXIMA MATANZA (La Última Resistencia Desesperada)",
    "villainId": "carnage",
    "assignedHeroSlot1": "magneto_hero",
    "assignedHeroSlot2": "spider_man",
    "assignedHeroSlot3": "wolverine",
    "squadOptions": [
      "magneto_hero",
      "spider_man",
      "wolverine",
      "miles_morales"
    ],
    "comicReference": "Spider-Man: Maximum Carnage & X-Men: Fatal Attractions",
    "synopsis": "¡EL MUNDO AL BORDE DE LA EXTINCIÓN! Manhattan está cubierta por una densa neblina carmesí y los zarcillos rojos crecen por los rascacielos. Los héroes llegan con el aliento justo y sin suministros de reserva a Central Park. Carnage se alza en el centro como una pesadilla viviente. No hay retirada posible, no hay refuerzos en camino: es matar o morir por el destino de toda la humanidad y los mutantes.",
    "locations": [
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg",
        "startVillain": true,
        "startHero2": true
      },
      {
        "name": "Xavier Institute",
        "img": "./assets/locations/xavier_institute.jpg",
        "startHero1": true
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg"
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
      },
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg",
        "startHero3": true
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Carnage): Inicia en CENTRAL PARK — Carnage ha transformado el lago de Central Park en una biomasa gigante palpitante que devora la ciudad.",
      "👤 JORGE (magneto_hero): Inicia en XAVIER INSTITUTE — Cíclope se retira el visor por completo en la entrada de la mansión, desatando un rayo óptico de potencia destructiva total.",
      "🌸 ESPOSA (Spider-Man (Peter)): Inicia en CENTRAL PARK — Miles Morales canaliza una sobrecarga bioeléctrica extrema en el epicentro de la masa alienígena.",
      "⭐ APOYO (Lobezno (Logan), si juega): Inicia en MORLOCK TUNNELS — Coloso defiende la última compuerta de las cloacas resguardando a los sobrevivientes civiles.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, usa casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Marea Roja Voraz: Cada BAM de Carnage inflige 1 herida adicional a todos los héroes en su ubicación si no descartan 1 carta.",
    "events": {
      "initial": {
        "title": "¡ÚLTIMA RESISTENCIA!",
        "type": "Evento de Inicio",
        "badge": "Todo o Nada",
        "text": "Los héroes juntan sus últimas fuerzas: <strong>Cada héroe recibe 1 Ficha Comodín al empezar.</strong>",
        "flavor": "\"¡Si caemos hoy, caemos de pie y peleando!\" — Wolverine"
      },
      "underPressure": {
        "title": "¡DESCARGA DE CORAZÓN HEROICO!",
        "type": "Bajo Presión",
        "badge": "Milagro",
        "text": "¡La determinación heroica se enciende al límite! <strong>Cada héroe recupera 2 cartas de su pila de descarte a su mano.</strong>",
        "flavor": "Un segundo aire de adrenalina en medio de la pesadilla roja."
      },
      "accelerated": {
        "title": "¡GOLPE DE FRENESÍ FINAL!",
        "type": "Acelerado",
        "badge": "Sacrificio",
        "text": "¡Todos los héroes cargan simultáneamente al centro del simbionte! <strong>Inflige 3 de daño directo a Carnage.</strong>",
        "flavor": "Garras, redes y magnetismo chocan en un destello cegador."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA HEROICA MILAGROSA: LA SALVACIÓN IN EXTREMIS!",
      "epilogue": "¡CONTRA TODO PRONÓSTICO, LO HAN LOGRADO! A pesar del cansancio y las heridas acumuladas a lo largo de la campaña, la alianza asesta el golpe definitivo arrancando al simbionte de Kasady. Central Park amanece bañado por la luz del sol mientras la pesadilla carmesí se disipa. ¡Una hazaña que pasará a la historia de los cómics!",
      "isCampaignWon": true,
      "bonusText": "¡VICTORIA ÉPICA IN EXTREMIS! Han completado la campaña superando la adversidad más brutal. ¡Felicidades a ambos jugadores!"
    },
    "lossOutcome": {
      "title": "LA CAÍDA DE MANHATTAN: EL COMIENZO DE LA RESISTENCIA",
      "epilogue": "Los zarcillos de Carnage sobrepasan las defensas finales. Los héroes heridos son evacuados en el Blackbird por Tormenta hacia las montañas del norte mientras Nueva York queda bajo la niebla carmesí. La guerra no ha terminado: la resistencia arácnida y mutante se reorganizará para el contraataque.",
      "isCampaignWon": false,
      "bonusText": "Campaña concluida con Desenlace Oscuro: Manhattan cae, pero la resistencia sobrevive en las sombras."
    },
    "deployment": {
      "villain": {
        "location": "Central Park",
        "reason": "Carnage ha transformado el lago de Central Park en una biomasa gigante palpitante que devora la ciudad."
      },
      "hero1": {
        "location": "Xavier Institute",
        "reason": "Cíclope se retira el visor por completo en la entrada de la mansión, desatando un rayo óptico de potencia destructiva total."
      },
      "hero2": {
        "location": "Central Park",
        "reason": "Miles Morales canaliza una sobrecarga bioeléctrica extrema en el epicentro de la masa alienígena."
      },
      "hero3": {
        "location": "Morlock Tunnels",
        "reason": "Coloso defiende la última compuerta de las cloacas resguardando a los sobrevivientes civiles."
      },
      "locations": [
        "Central Park",
        "Xavier Institute",
        "Daily Bugle",
        "Oscorp Tower",
        "Morlock Tunnels",
        "Brooklyn Bridge"
      ]
    }
  }
];
