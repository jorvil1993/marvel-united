// MARVEL UNITED: MAXIMUM MUTATION (SPIDER-VERSE & X-MEN)
// Base de Datos Equilibrada y Adaptada a 2 Jugadores (Jorge & Esposa) + 1 Apoyo Opcional
// Narrativa Serializada Ininterrumpida y Libre de LaTeX

const CAMPAIGN_HEROES = {
  "spider_man": {
    "id": "spider_man",
    "name": "Spider-Man",
    "alterEgo": "Peter Parker",
    "originBox": "Enter The Spider-Verse",
    "initialUnlocked": true,
    "avatar": "./assets/heroes/spider_man.png",
    "role": "Ágil / Rescate y Balance",
    "trait": "Sentido Arácnido",
    "description": "Movilidad excepcional por la red y rescate veloz de civiles en peligro.",
    "stats": {
      "mov": "Alto",
      "atk": "Medio",
      "her": "Alto",
      "wild": "Medio"
    },
    "comicBio": "Picado por una araña radiactiva en una exhibición científica cuando era estudiante, Peter Parker aprendió con la trágica pérdida de su tío Ben que 'un gran poder conlleva una gran responsabilidad'. Es el corazón moral de la alianza arácnida, combinando un intelecto científico brillante con reflejos sobrehumanos, trepamuros y su fórmula patentada de telarañas."
  },
  "miles_morales": {
    "id": "miles_morales",
    "name": "Miles Morales",
    "alterEgo": "Spider-Man de Brooklyn",
    "originBox": "Enter The Spider-Verse",
    "initialUnlocked": true,
    "avatar": "./assets/heroes/miles_morales.png",
    "role": "Táctico / Descarga Venenosa",
    "trait": "Camuflaje y Bioelectricidad",
    "description": "Capacidad de aturdir enemigos y golpear sin ser detectado.",
    "stats": {
      "mov": "Alto",
      "atk": "Alto",
      "her": "Medio",
      "wild": "Medio"
    },
    "comicBio": "Un adolescente de Brooklyn picado por una araña alterada genéticamente por Oscorp. Además de las habilidades arácnidas tradicionales de Peter, Miles posee dos dones evolutivos únicos: camuflaje arácnido que lo vuelve completamente invisible y una poderosa bioelectricidad ('Venom Strike') que descarga a través de sus manos para aturdir o sobrecargar a los enemigos más blindados."
  },
  "wolverine": {
    "id": "wolverine",
    "name": "Wolverine",
    "alterEgo": "Logan",
    "originBox": "X-Men Core Box",
    "initialUnlocked": true,
    "avatar": "./assets/heroes/wolverine.png",
    "role": "Combatiente / Regeneración",
    "trait": "Factor Curativo y Garras de Adamantium",
    "description": "Daño cuerpo a cuerpo letal y resistencia superior ante heridas graves.",
    "stats": {
      "mov": "Medio",
      "atk": "Muy Alto",
      "her": "Bajo",
      "wild": "Medio"
    },
    "comicBio": "Nacido como James Howlett y conocido mundialmente como Logan, es un mutante centenario dotado de sentidos animales hipersensibles, un factor curativo sobrehumano que sana casi cualquier herida y un esqueleto reforzado quirúrgicamente con adamantium indestructible, del que brotan tres garras afiladas en cada mano. Es el combatiente más tenaz de los X-Men."
  },
  "cyclops": {
    "id": "cyclops",
    "name": "Cyclops",
    "alterEgo": "Scott Summers",
    "originBox": "X-Men Core Box",
    "initialUnlocked": true,
    "avatar": "./assets/heroes/cyclops.png",
    "role": "Líder / Ataque a Distancia",
    "trait": "Liderazgo Táctico y Rayos Ópticos",
    "description": "Permite coordinar y potenciar las acciones de otros héroes en el Storyline.",
    "stats": {
      "mov": "Medio",
      "atk": "Alto",
      "her": "Alto",
      "wild": "Medio"
    },
    "comicBio": "Primer recluta y líder táctico indiscutible de los X-Men. Scott Summers canaliza a través de sus ojos una energía de fuerza concusiva descomunal proveniente de otra dimensión, la cual solo puede controlar mediante su visor de cuarzo de rubí. Es la mano derecha del Profesor Charles Xavier y el estratega maestro del equipo en combate."
  },
  "black_cat": {
    "id": "black_cat",
    "name": "Black Cat",
    "alterEgo": "Felicia Hardy",
    "originBox": "Enter The Spider-Verse",
    "initialUnlocked": false,
    "unlockCondition": "Asegura los datos secretos en Oscorp Tower (Capítulo 1)",
    "avatar": "./assets/heroes/black_cat.png",
    "role": "Infiltración / Fortuna y Suerte",
    "trait": "Manipulación de Probabilidad",
    "description": "Robo de fichas a villanos y alteración de los planes enemigos.",
    "stats": {
      "mov": "Muy Alto",
      "atk": "Medio",
      "her": "Alto",
      "wild": "Alto"
    },
    "comicBio": "¿Quién es y de dónde sale? Felicia Hardy es la ladrona de guante blanco más astuta y escurridiza de Nueva York, hija del maestro del robo Walter Hardy. Con un traje blindado acrobático, ganchos de escalada retráctiles, microgarras y un dispositivo que manipula los campos de probabilidad para provocar 'mala suerte' instantánea a sus perseguidores, ha sido aliada, rival y romance intermitente de Spider-Man. En esta historia, Felicia se infiltró en Oscorp por su cuenta para saquear los servidores de Norman Osborn cuando Rhino atacó; al ver el peligro biológico, decide usar su botín de datos para ayudar a la alianza."
  },
  "beast": {
    "id": "beast",
    "name": "Beast",
    "alterEgo": "Dr. Hank McCoy",
    "originBox": "X-Men Core Box",
    "initialUnlocked": false,
    "unlockCondition": "Rescata a los informantes en Central Park o desbarata el asedio en Daily Bugle (Capítulo 2)",
    "avatar": "./assets/heroes/beast.png",
    "role": "Científico / Apoyo de Misiones",
    "trait": "Intelecto Superior y Fisiología Feral",
    "description": "Resuelve misiones de amenaza y rescates científicos con el doble de efectividad.",
    "stats": {
      "mov": "Alto",
      "atk": "Medio",
      "her": "Muy Alto",
      "wild": "Medio"
    },
    "comicBio": "El Dr. Hank McCoy combina la fuerza, agilidad y pelaje azul de una bestia feral con una de las ocho mentes científicas más brillantes del planeta Tierra. Es el bioquímico y médico principal de los X-Men. En esta campaña, mientras el Profesor Xavier opera Cerebro telepáticamente, Beast coordina los análisis moleculares de la biomasa simbiótica y desarrolla los antídotos de campo."
  },
  "ghost_spider": {
    "id": "ghost_spider",
    "name": "Ghost-Spider",
    "alterEgo": "Gwen Stacy",
    "originBox": "Enter The Spider-Verse",
    "initialUnlocked": false,
    "unlockCondition": "Neutraliza la tapadera mediática y hackea los satélites (Capítulo 3)",
    "avatar": "./assets/heroes/ghost_spider.png",
    "role": "Acróbata / Evasión Dimensional",
    "trait": "Piruetas Interdimensionales",
    "description": "Redistribuye héroes y se desplaza sorteando cualquier trampa enemiga.",
    "stats": {
      "mov": "Muy Alto",
      "atk": "Medio",
      "her": "Alto",
      "wild": "Medio"
    },
    "comicBio": "¿Quién es y de dónde sale? En su universo de origen (Tierra-65), no fue Peter Parker quien recibió la picadura de la araña, sino la baterista adolescente Gwen Stacy. Tras la trágica muerte de Peter en su mundo, Gwen asumió el manto heroico como Spider-Woman (conocida como Ghost-Spider por su sigilo y traje blanco con capucha). ¿Cómo llega a nuestra historia? Equipada con un reloj de viaje interdimensional, Gwen detectó alteraciones en el tejido multiversal provocadas por los experimentos de Oscorp y saltó a nuestra dimensión para evitar que este Peter Parker sufra una tragedia."
  },
  "jean_grey": {
    "id": "jean_grey",
    "name": "Jean Grey",
    "alterEgo": "Marvel Girl",
    "originBox": "X-Men Core Box",
    "initialUnlocked": false,
    "unlockCondition": "Despierta su mente psiónica para rastrear a Green Goblin (Capítulo 3)",
    "avatar": "./assets/heroes/jean_grey.png",
    "role": "Psiónica / Manipulación Mental",
    "trait": "Telequinesis y Telepatía",
    "description": "Mueve civiles, matones y héroes entre ubicaciones sin necesidad de viajar a pie.",
    "stats": {
      "mov": "Medio",
      "atk": "Medio",
      "her": "Muy Alto",
      "wild": "Alto"
    },
    "comicBio": "Mutante de nivel Omega y una de las telequinéticas y telépatas más poderosas del cosmos. Jean Grey puede mover toneladas de escombros con el pensamiento, levantar escudos de fuerza psiónica impenetrables y conectar las mentes de sus compañeros en una red táctica instantánea. Es el vínculo empático que mantiene unida la moral del equipo."
  },
  "storm": {
    "id": "storm",
    "name": "Storm",
    "alterEgo": "Ororo Munroe",
    "originBox": "X-Men Core Box",
    "initialUnlocked": false,
    "unlockCondition": "Despliegue aéreo de refuerzo ante el asedio en Brooklyn Bridge (Capítulo 4)",
    "avatar": "./assets/heroes/storm.png",
    "role": "Control de Masas / Vuelo",
    "trait": "Furia de los Elementos",
    "description": "Vientos huracanados que barren con grupos enteros de matones a su paso.",
    "stats": {
      "mov": "Muy Alto",
      "atk": "Alto",
      "her": "Alto",
      "wild": "Medio"
    },
    "comicBio": "Adorada en su juventud en África como una diosa de la lluvia, Ororo Munroe posee la habilidad mutante de controlar todos los aspectos del clima y la atmósfera: desde vientos huracanados y nieblas densas hasta relámpagos devastadores de alta tensión. Es una líder sabia, noble y una de las figuras más respetadas tanto por humanos como por mutantes."
  },
  "spider_woman": {
    "id": "spider_woman",
    "name": "Spider-Woman",
    "alterEgo": "Jessica Drew",
    "originBox": "Enter The Spider-Verse",
    "initialUnlocked": false,
    "unlockCondition": "Agente encubierta intercepta el convoy aéreo de Green Goblin (Capítulo 4)",
    "avatar": "./assets/heroes/spider_woman.png",
    "role": "Veneno Bioeléctrico / Vuelo",
    "trait": "Rayos Venenosos y Planeo",
    "description": "Ataques que atraviesan escudos y eliminación certera de amenazas.",
    "stats": {
      "mov": "Alto",
      "atk": "Alto",
      "her": "Alto",
      "wild": "Medio"
    },
    "comicBio": "¿Quién es y de dónde sale? De niña en Wundagore Mountain, Jessica Drew enfermó de gravedad por radiación de uranio. Su padre le inyectó un suero experimental de veneno de araña y la colocó en un acelerador genético. Reclutada y entrenada como espía de élite por organizaciones encubiertas (Hydra y luego S.H.I.E.L.D. y Avengers), Jessica domina el combate táctico militar, vuelo mediante alas de planeo y descargas de bioelectricidad pura ('Venom Blasts') capaces de freír blindajes de titanio. Estaba investigando el contrabando de Oscorp como agente encubierta cuando se suma a la alianza."
  },
  "spider_2099": {
    "id": "spider_2099",
    "name": "Spider-Man 2099",
    "alterEgo": "Miguel O'Hara",
    "originBox": "Enter The Spider-Verse",
    "initialUnlocked": false,
    "unlockCondition": "Llega a través de una brecha temporal tras defender la Mansión X (Capítulo 5)",
    "avatar": "./assets/heroes/spider_2099.png",
    "role": "Tecnológico / Garras y Visión Lyla",
    "trait": "Garras de Aceleración y Traje de Moléculas Inestables",
    "description": "Combate frontal feroz con visión anticipada del mazo de plan maestro.",
    "stats": {
      "mov": "Alto",
      "atk": "Muy Alto",
      "her": "Medio",
      "wild": "Medio"
    },
    "comicBio": "¿Quién es y por qué vino del futuro? Miguel O'Hara es un brillante genetista que vive en la corrupta Nueva York del año 2099, gobernada por la megacorporación Alchemax. Tras un sabotaje que reescribió su ADN con genes arácnidos, obtuvo colmillos retráctiles con veneno paralizante, garras afiladas en manos y pies, visión hiperacelerada y un traje de moléculas inestables asistido por su IA holográfica, Lyla. ¿Por qué viajó al presente? En el año 2099, los bancos de datos indicaban que la 'Mutación Máxima' de Osborn y Carnage en nuestro presente extinguió a la humanidad. Miguel calibró un portal temporal de Alchemax y viajó al pasado para salvar la línea de tiempo."
  },
  "venom_hero": {
    "id": "venom_hero",
    "name": "Venom (Héroe)",
    "alterEgo": "Eddie Brock (Anti-Héroe)",
    "originBox": "Enter The Spider-Verse",
    "initialUnlocked": false,
    "isAntiHero": true,
    "unlockCondition": "Purga la toxina de Osborn y redime a Eddie Brock en Morlock Tunnels (Capítulo 6)",
    "avatar": "./assets/heroes/venom_hero.png",
    "role": "Protector Letal / Bestia Simbiótica",
    "trait": "Fuerza Monstruosa y Resistencia",
    "description": "El simbionte se une al bando heroico con daño masivo y zarcillos protectores.",
    "stats": {
      "mov": "Medio",
      "atk": "Muy Alto",
      "her": "Medio",
      "wild": "Alto"
    },
    "comicBio": "Eddie Brock y el simbionte alienígena Klyntar compartieron durante años un odio visceral hacia Spider-Man. Sin embargo, con el tiempo forjaron un pacto de redención como el 'Protector Letal', defendiendo a los inocentes a su manera brutal. En esta campaña, Oscorp capturó y drogó a Venom para extraer su biomasa; al ser purgado de la toxina por los héroes, Brock jura redimirse y luchar hombro con hombro junto a Spider-Man y los X-Men."
  },
  "spider_ham": {
    "id": "spider_ham",
    "name": "Spider-Ham",
    "alterEgo": "Peter Porker",
    "originBox": "Enter The Spider-Verse",
    "initialUnlocked": false,
    "unlockCondition": "Emerge por una singularidad cósmica interdimensional en auxilio del equipo (Capítulo 6)",
    "avatar": "./assets/heroes/spider_ham.png",
    "role": "Toon Force / Humor Desconcertante",
    "trait": "Leyes de Caricatura y Martillo Gigante",
    "description": "Rompe las reglas convencionales del juego y desconcierta a villanos siniestros.",
    "stats": {
      "mov": "Medio",
      "atk": "Alto",
      "her": "Medio",
      "wild": "Muy Alto"
    },
    "comicBio": "¿Quién es y cómo se coló en la historia? Peter Porker proviene de la Tierra-8311 (un universo de animales antropomórficos de caricatura). Originalmente era una pequeña araña que vivía en el sótano de la cerdita científica May Porker. Tras un experimento atómico fallido, May mordió a Peter en pleno delirio y la araña mutó en un cerdo parlante con poderes arácnidos. Se rige por las leyes de la 'Toon Force' (saca martillos gigantes de madera de la nada y desafía la física). Fue succionado al presente cuando las explosiones mutagénicas rasgaron el tejido dimensional, sumándose con su humor hilarante a la batalla."
  },
  "mystique_hero": {
    "id": "mystique_hero",
    "name": "Mystique (Héroe)",
    "alterEgo": "Raven Darkhölme (Anti-Héroe)",
    "originBox": "X-Men Core Box",
    "initialUnlocked": false,
    "isAntiHero": true,
    "unlockCondition": "Comprende el horror del virus de Carnage y pacta una alianza con los X-Men (Capítulo 7)",
    "avatar": "./assets/heroes/mystique_hero.png",
    "role": "Infiltrada / Metamorfa Camaleónica",
    "trait": "Cambio de Forma y Sabotaje Encubierto",
    "description": "Copia las mejores habilidades de sus compañeros y desactiva trampas enemigas.",
    "stats": {
      "mov": "Alto",
      "atk": "Alto",
      "her": "Alto",
      "wild": "Muy Alto"
    },
    "comicBio": "Raven Darkhölme es una metamorfa centenaria capaz de alterar sus células para duplicar con perfección milimétrica la apariencia, voz y retina de cualquier persona. Histórica líder de la Hermandad de Mutantes, Mystique es ante todo una superviviente pragmática. Al descubrir que las bio-armas de Carnage aniquilarían tanto a mutantes como a humanos, decide traicionar a los extremistas y aliarse con los X-Men."
  },
  "magneto_hero": {
    "id": "magneto_hero",
    "name": "Magneto (Héroe)",
    "alterEgo": "Erik Lehnsherr (Anti-Héroe)",
    "originBox": "X-Men Core Box",
    "initialUnlocked": false,
    "isAntiHero": true,
    "unlockCondition": "Redención solemne en Asteroid M al descubrir el complot de exterminio de Carnage (Capítulo 7)",
    "avatar": "./assets/heroes/magneto_hero.png",
    "role": "Amo del Magnetismo / Escudos de Fuerza",
    "trait": "Control Ferroso y Campo Electromagnético",
    "description": "Manipulación masiva de fichas y escudos infranqueables para proteger al equipo.",
    "stats": {
      "mov": "Medio",
      "atk": "Muy Alto",
      "her": "Muy Alto",
      "wild": "Alto"
    },
    "comicBio": "Superviviente del Holocausto y caudillo legendario de la especie mutante, Erik Lehnsherr domina una de las cuatro fuerzas fundamentales del universo: el electromagnetismo. Puede doblar submarinos, desviar misiles y generar campos de fuerza orbitales. En su momento más conmovedor, al descubrir que Norman Osborn lo utilizó para crear el virus de Carnage, Erik se une a los X-Men y a Spider-Man como un aliado protector supremo."
  }
};

const CAMPAIGN_VILLAINS = {
  "rhino": {
    "id": "rhino",
    "name": "Rhino",
    "subtitle": "El Imparable Ariete Rinoceronte",
    "originBox": "Enter The Spider-Verse",
    "avatar": "./assets/villains/rhino.png",
    "hpByHeroes": {
      "2": 5,
      "3": 8,
      "4": 11
    },
    "threatStyle": "Destrucción física directa y embestidas devastadoras.",
    "comicBio": "Aleksei Sytsevich es un mercenario ruso sometido a tratamientos químicos y radiación gama que fusionaron a su piel una armadura artificial casi impenetrable inspirada en la piel de un rinoceronte. Posee una fuerza colosal y una inercia destructiva que derriba edificios enteros cuando inicia su carrera."
  },
  "sabretooth": {
    "id": "sabretooth",
    "name": "Sabretooth",
    "subtitle": "El Depredador Sádico de Mutantes",
    "originBox": "X-Men Core Box",
    "avatar": "./assets/villains/sabretooth.png",
    "hpByHeroes": {
      "2": 5,
      "3": 7,
      "4": 10
    },
    "threatStyle": "Caza implacable, acecho al héroe más débil y regeneración salvaje.",
    "comicBio": "Victor Creed es el archienemigo más sangriento y visceral de Wolverine. Dotado de garras y colmillos afilados, sentidos animales y un factor curativo brutal, Sabretooth es un psicópata despiadado que disfruta atormentando a sus presas antes de asestar el golpe de gracia."
  },
  "mystique_villain": {
    "id": "mystique_villain",
    "name": "Mystique",
    "subtitle": "La Sombra de la Hermandad",
    "originBox": "X-Men Core Box",
    "avatar": "./assets/villains/mystique_villain.png",
    "hpByHeroes": {
      "2": 4,
      "3": 6,
      "4": 9
    },
    "threatStyle": "Manipulación de la prensa, trampas encubiertas y engaños mortales.",
    "comicBio": "La metamorfa Raven Darkhölme opera como la estratega en las sombras de la Hermandad de Mutantes. Experta en espionaje internacional, artes marciales y armas de fuego, es capaz de suplantar a altos mandos gubernamentales o periodistas para sembrar el caos y manipular la opinión pública."
  },
  "green_goblin": {
    "id": "green_goblin",
    "name": "Green Goblin",
    "subtitle": "El Genio Psicópata de Oscorp",
    "originBox": "Enter The Spider-Verse",
    "avatar": "./assets/villains/green_goblin.png",
    "hpByHeroes": {
      "2": 5,
      "3": 7,
      "4": 10
    },
    "threatStyle": "Bombas calabaza en racimo, fuego sobre Nueva York y caos aéreo.",
    "comicBio": "Norman Osborn, director general de Oscorp Industries, experimentó consigo mismo una fórmula que aumentó su fuerza e intelecto pero fracturó su cordura. A bordo de su aerodeslizador ('Goblin Glider') y armado con un arsenal de bombas de calabaza y gas alucinógeno, es el archienemigo más retorcido de Spider-Man."
  },
  "juggernaut": {
    "id": "juggernaut",
    "name": "Juggernaut",
    "subtitle": "La Fuerza Arrasadora de Cyttorak",
    "originBox": "X-Men Core Box",
    "avatar": "./assets/villains/juggernaut.png",
    "hpByHeroes": {
      "2": 8,
      "3": 8,
      "4": 8
    },
    "threatStyle": "Inmune al freno; derriba edificios y arrasa con todo héroe que se interponga.",
    "comicBio": "Cain Marko, hermanastro de Charles Xavier, halló en un templo perdido el legendario rubí del dios Cyttorak. La gema mística le otorgó un poder avatar sobrehumano: una vez que Juggernaut se pone en movimiento hacia adelante, ninguna fuerza física conocida en el universo puede frenarlo."
  },
  "venom_villain": {
    "id": "venom_villain",
    "name": "Venom",
    "subtitle": "El Terror Negro Fuera de Control",
    "originBox": "Enter The Spider-Verse",
    "avatar": "./assets/villains/venom_villain.png",
    "hpByHeroes": {
      "2": 5,
      "3": 8,
      "4": 11
    },
    "threatStyle": "Agresión simbiótica voraz, zarcillos estranguladores e infección.",
    "comicBio": "La unión entre el periodista caído en desgracia Eddie Brock y el simbionte alienígena Klyntar. En esta fase de la campaña, Venom ha sido intoxicado con sueros mutagénicos sintéticos por los laboratorios de Oscorp, sumiendo a la criatura en un dolor agónico y un frenesí destructivo en las cloacas de Manhattan."
  },
  "magneto_villain": {
    "id": "magneto_villain",
    "name": "Magneto",
    "subtitle": "El Caudillo de la Supremacía Mutante",
    "originBox": "X-Men Core Box",
    "avatar": "./assets/villains/magneto_villain.png",
    "hpByHeroes": {
      "2": 5,
      "3": 7,
      "4": 10
    },
    "threatStyle": "Campos electromagnéticos que bloquean ubicaciones y lanzas de metal.",
    "comicBio": "El Amo del Magnetismo en su etapa de mayor confrontación ideológica. Erik Lehnsherr cree firmemente que los mutantes deben defenderse de la persecución humana cueste lo que cueste. Desde su fortaleza de Asteroid M y la isla soberana de Genosha, está dispuesto a usar las bio-muestras para blindar a su raza, sin sospechar la trampa de Osborn."
  },
  "carnage": {
    "id": "carnage",
    "name": "Carnage",
    "subtitle": "El Heraldo del Caos Simbiótico Absoluto",
    "originBox": "Enter The Spider-Verse",
    "avatar": "./assets/villains/carnage.png",
    "hpByHeroes": {
      "2": 5,
      "3": 8,
      "4": 11
    },
    "threatStyle": "Letalidad desmedida, infección mutante masiva y exterminio desenfrenado.",
    "comicBio": "¿Quién es y de dónde sale? Cletus Kasady era un asesino en serie despiadado recluido en el instituto psiquiátrico de Ravencroft. Cuando el simbionte de Venom ayudó a Brock a fugarse de prisión, dejó atrás una cría recién engendrada. Esa masa alienígena penetró en el torrente sanguíneo de Kasady a través de una herida abierta, fusionándose a nivel celular con su sangre psicópata. Así nació Carnage: una masa carmesí y negra de puro sadismo que puede transformar sus extremidades en hachas, guadañas y zarcillos afilados como cuchillas, inmune a muchas de las debilidades del simbionte clásico y motivado únicamente por el caos absoluto."
  }
};

const CAMPAIGN_PERKS = {
  "perk_oscorp_intel": {
    "id": "perk_oscorp_intel",
    "name": "Datos Secretos de Oscorp",
    "sourceChapter": 1,
    "icon": "💾",
    "description": "Al inicio de la partida, entrega 1 Ficha Comodín a cualquier héroe para ayudarlo en su primer turno.",
    "effect": "Recurso inicial flexible para resolver la primera crisis."
  },
  "perk_beast_serum": {
    "id": "perk_beast_serum",
    "name": "Suero Médico de Beast",
    "sourceChapter": 2,
    "icon": "🧪",
    "description": "Una vez por partida, un héroe puede descartar esta ventaja para recuperar 2 cartas de su descarte a su mano.",
    "effect": "Cura de emergencia ante golpes críticos."
  },
  "perk_gwen_lens": {
    "id": "perk_gwen_lens",
    "name": "Lente Dimensional de Gwen",
    "sourceChapter": 3,
    "icon": "📸",
    "description": "Ignora la primera Ficha de Exposición (celular) que obtengan los héroes en la partida.",
    "effect": "Evita que el Daily Bugle difame a los héroes."
  },
  "perk_telekinetic_shield": {
    "id": "perk_telekinetic_shield",
    "name": "Escudo Psiónico de Jean",
    "sourceChapter": 4,
    "icon": "🧠",
    "description": "Los civiles en la ubicación del héroe líder no pueden ser eliminados por ataques del villano.",
    "effect": "Protección absoluta para misiones de rescate."
  },
  "perk_blackbird_hanger": {
    "id": "perk_blackbird_hanger",
    "name": "Despliegue del Blackbird",
    "sourceChapter": 5,
    "icon": "✈️",
    "description": "Una vez por partida, cualquier héroe puede volar a cualquier ubicación del tablero sin gastar acciones de movimiento.",
    "effect": "Respuesta inmediata en el otro extremo de la ciudad."
  },
  "perk_symbiote_tendril": {
    "id": "perk_symbiote_tendril",
    "name": "Zarcillo Protector Aliado",
    "sourceChapter": 6,
    "icon": "🖤",
    "description": "Cuando un héroe reciba un golpe que lo dejaría sin cartas, reduce el daño recibido a la mitad (redondeado hacia abajo).",
    "effect": "Segunda oportunidad gracias a la ayuda de Venom."
  },
  "perk_magnetic_pulse": {
    "id": "perk_magnetic_pulse",
    "name": "Pulso Magnético Táctico",
    "sourceChapter": 7,
    "icon": "🧲",
    "description": "Al completarse la 2ª misión, aturde al villano impidiendo que active su siguiente efecto BAM.",
    "effect": "Freno temporal crucial contra el jefe."
  },
  "perk_cartoon_mallet": {
    "id": "perk_cartoon_mallet",
    "name": "Martillo Toon de Spider-Ham",
    "sourceChapter": 8,
    "icon": "🔨",
    "description": "Inflige 2 de daño directo a cualquier esbirro o amenaza sin importar las reglas de protección.",
    "effect": "Ataque cómico demoledor."
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
    "assignedHeroSlot1": "spider_man",
    "assignedHeroSlot2": "miles_morales",
    "assignedHeroSlot3": "cyclops",
    "squadOptions": [
      "spider_man",
      "miles_morales",
      "cyclops",
      "wolverine"
    ],
    "comicReference": "Champions Vol. 2 (Mark Waid) & Ultimate Spider-Man",
    "synopsis": "«PRÓLOGO: EL COMPLOT EN LAS SOMBRAS»\nUna noche inusualmente fría en Manhattan es sacudida por estruendosas detonaciones en los niveles subterráneos de Oscorp Tower. Norman Osborn ha estado acumulando en secreto bio-muestras de mutantes y cultivos alienígenas de tejido simbiótico para sintetizar un catalizador biológico ilegal: el K-Gene.\n\n«LA CRISIS ACTUAL»\nRhino (Aleksei Sytsevich) irrumpe como un ariete viviente derribando mamparas blindadas con furia ciega. No busca dinero: fue contratado como fuerza de choque para extraer los contenedores criogénicos que albergan las cepas mutagénicas maestras.\n\n«MISIÓN DEL EQUIPO»\nPeter Parker (Spider-Man) y Miles Morales acuden de inmediato al escuchar las alarmas sísmicas. Deben coordinar redes de contención y bioelectricidad para neutralizar a Rhino antes de que derribe las columnas maestras y escape con las muestras. Desde los conductos de ventilación, Felicia Hardy (Black Cat) —la ladrona de guante blanco más astuta de Nueva York, equipada con garras y un dispositivo que altera las probabilidades de suerte— merodea buscando desvalijar los servidores de Oscorp.",
    "locations": [
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg",
        "startVillain": true
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
        "img": "./assets/locations/sims_tower.jpg",
        "startHero2": true
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Rhino): Inicia en OSCORP TOWER — Rhino derriba las compuertas de la bóveda subterránea de biomasa.",
      "👤 JORGE (Spider-Man): Inicia en MIDTOWN HIGH SCHOOL — Peter se balancea a toda velocidad desde Queens al escuchar las sirenas.",
      "🌸 ESPOSA (Miles Morales): Inicia en SIMS TOWER — Miles patrullaba las azoteas de Brooklyn y corta la avenida.",
      "⭐ APOYO (Cyclops, si juega): Inicia en DAILY BUGLE — Scott Summers vigila desde las alturas con visor táctico.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Muros de Refuerzo: La estructura de Oscorp tiembla. Cada vez que Rhino active BAM, coloca 1 Matón en su ubicación SOLO SI hay espacio libre (sin Desbordamiento).",
    "events": {
      "initial": {
        "title": "¡ALARMA DE CONTENCIÓN!",
        "type": "Evento de Inicio",
        "badge": "Comienzo Táctico",
        "text": "Peter y Miles sorprenden a Rhino al ingresar a la bóveda: <strong>Cada héroe roba 1 carta adicional al inicio de su primer turno.</strong> Rhino derriba una compuerta: coloca 1 Matón en Oscorp Tower (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Fuera de mi camino, bichitos! ¡Esta noche me pagan el triple por romper cosas!\" — Rhino"
      },
      "underPressure": {
        "title": "¡ABRIENDO BRECHA HEROICA!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Avance Heroico",
        "text": "¡La coordinación arácnida da sus frutos! <strong>Cada Héroe gana inmediatamente 1 Ficha de Acción de su elección (Movimiento, Ataque o Heroica).</strong> Rhino ruge desorientado: avanza 1 espacio en sentido horario.",
        "flavor": "Las redes bioeléctricas y la agilidad de los héroes hacen retroceder la mole blindada de Aleksei."
      },
      "accelerated": {
        "title": "¡SOBRECARGA BIOELÉCTRICA!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Clímax del Combate",
        "text": "¡Momento decisivo! <strong>Inflige 2 de daño directo a Rhino inmediatamente</strong>, ignorando cualquier protección. Rhino embiste a ciegas: coloca 1 Matón en la ubicación adyacente con más espacio libre (sin Desbordamiento).",
        "flavor": "\"¡Mis circuitos se están quemando! ¡No puedo ver nada con estas telarañas!\" — Rhino"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: BÓVEDA ASEGURADA Y DATOS RECUPERADOS!",
      "epilogue": "Con una maniobra perfectamente sincronizada, Peter Parker y Miles Morales sobrecargan la armadura de Rhino con bioelectricidad, haciéndolo desplomarse contra el suelo reforzado. Entre las sombras de la bóveda aparece Black Cat (Felicia Hardy) con un disco duro militar de Oscorp en mano: \"Buen golpe, chicos. Aleksei solo era la fuerza bruta: estos archivos indican que Victor Creed (Sabretooth) fue desplegado en Central Park para cazar y silenciar a informantes mutantes clave\". Preocupado por la conexión mutante, Peter utiliza la frecuencia de emergencia de los Vengadores para contactar a Scott Summers y a Logan en Westchester. ¡Black Cat se une formalmente a la alianza!",
      "unlockedHeroes": [
        "black_cat"
      ],
      "unlockedPerks": [
        "perk_oscorp_intel"
      ],
      "nextChapter": "2A",
      "bonusText": "Black Cat desbloqueada. Ventaja \"Datos Secretos de Oscorp\" obtenida. Avanzan con iniciativa hacia Central Park (Capítulo 2A)."
    },
    "lossOutcome": {
      "title": "DERROTA: COLAPSO EN OSCORP Y ESCAPE DEL ARIETE",
      "epilogue": "La embestida colosal de Rhino pulveriza las columnas maestras de la bóveda subterránea, sepultando a los héroes bajo vigas de acero y escombros. Rhino logra escapar en un furgón blindado con los contenedores criogénicos de biomasa. Para desviar la atención policial y criminalizar a los justicieros, la Hermandad de Mutantes activa de inmediato a Mystique en el Daily Bugle: la cambiaformas imprime portadas sensacionalistas acusando a Spider-Man y a los justicieros mutantes de terrorismo urbano. ¡Scott Summers y Beast acuden de urgencia a Manhattan para detener la desinformación antes de que la ciudad arda en pánico!",
      "unlockedHeroes": [
        "black_cat"
      ],
      "nextChapter": "2B",
      "penalties": "No se obtiene la ventaja de Oscorp. La ciudad entra en estado de sospecha y hostilidad mediática.",
      "bonusText": "La derrota fuerza un despliegue de emergencia en el Daily Bugle para frenar la difamación (Capítulo 2B)."
    },
    "deployment": {
      "villain": {
        "location": "Oscorp Tower",
        "reason": "Rhino derriba las compuertas de la bóveda de bio-muestras subterránea de Osborn."
      },
      "hero1": {
        "location": "Midtown High School",
        "reason": "Spider-Man (Peter) acude a toda velocidad balanceándose desde Queens al escuchar las alarmas."
      },
      "hero2": {
        "location": "Sims Tower",
        "reason": "Miles Morales patrullaba las azoteas de Brooklyn y corta la avenida principal."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Cyclops vigila desde la azotea del Bugle para cortar la ruta de escape de los camiones de asalto con rayos de advertencia."
      }
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
    "assignedHeroSlot2": "cyclops",
    "assignedHeroSlot3": "black_cat",
    "squadOptions": [
      "wolverine",
      "cyclops",
      "black_cat",
      "spider_man"
    ],
    "comicReference": "Astonishing Spider-Man & Wolverine (Jason Aaron)",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON CAPÍTULO 1 - VICTORIA)»\nTras someter a Rhino en la bóveda de Oscorp, Peter Parker y Miles Morales aseguraron los discos duros de Norman Osborn con ayuda de Black Cat. En Westchester, el Profesor Charles Xavier detectó una perturbación mediante Cerebro y alertó telepáticamente a los X-Men sobre una orden de ejecución activa: Victor Creed (Sabretooth) fue enviado por la Hermandad a Central Park para eliminar a científicos desertores de Oscorp que intentaban denunciar el desarrollo del virus mutagénico K-Gene.\n\n«LA CRISIS ACTUAL»\nLogan capta el inconfundible hedor a sangre y tabaco de su eterno némesis en la espesura del parque nocturno. Sabretooth está cazando a los informantes civiles uno a uno entre las sombras para borrar todo rastro del pacto secreto entre Osborn y Magneto.\n\n«MISIÓN DEL EQUIPO»\nScott Summers (Cyclops) coordina el perímetro de evacuación con rayos ópticos de contención, mientras Wolverine se lanza a la espesura para frenar a Creed garras contra colmillos. Desde un laboratorio móvil en las inmediaciones, el Dr. Hank McCoy asiste con apoyo científico.",
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
      "😈 VILLANO (Sabretooth): Inicia en CENTRAL PARK — Sabretooth acecha en la espesura buscando erradicar testigos civiles.",
      "👤 JORGE (Wolverine): Inicia en CENTRAL PARK — Logan sigue el rastro olfativo de Creed hasta la arboleda central.",
      "🌸 ESPOSA (Cyclops): Inicia en MIDTOWN HIGH SCHOOL — Cyclops asegura el perímetro sur guiando la evacuación ciudadana.",
      "⭐ APOYO (Black Cat, si juega): Inicia en DAILY BUGLE — Felicia vigila las rutas de escape y desvía patrullas.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Rastreo de Presa: Sabretooth acecha al Héroe con menos cartas en mano, pero los Héroes en Central Park pueden emboscarlo usando el terreno arbolado.",
    "events": {
      "initial": {
        "title": "¡EMBOSCADA NOCTURNA!",
        "type": "Evento de Inicio",
        "badge": "Rastreadores",
        "text": "Logan y Scott detectan el rastro de Creed antes de que aseste el golpe letal: <strong>Cada héroe gana 1 Ficha de Movimiento gratuita al inicio de la partida.</strong> Sabretooth acecha desde la penumbra.",
        "flavor": "\"¿Creías que podías esconderte de mí, enano? ¡Huelo tu miedo a kilómetros!\" — Sabretooth"
      },
      "underPressure": {
        "title": "¡REFLEJOS FERALES Y CONTRAATAQUE!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Respuesta Heroica",
        "text": "¡Los héroes dan vuelta la cacería! <strong>El héroe objetivo puede infligir 2 de daño directo a Sabretooth inmediatamente.</strong> Sabretooth retrocede 1 espacio aturdido (no provoca Desbordamiento).",
        "flavor": "Un destello de garras de adamantium corta la noche: esta vez el cazador se convierte en presa."
      },
      "accelerated": {
        "title": "¡DARDO TRANQUILIZANTE DE BESTIA!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Ciencia al Rescate",
        "text": "Hank McCoy dispara un dardo bioestabilizador: <strong>Sabretooth no podrá regenerar salud ni usar BAM en su siguiente turno. Además, cada héroe se cura 1 carta de daño.</strong>",
        "flavor": "\"¡Una dosis precisa de neurotoxina para calmar sus instintos feroces!\" — Beast"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: EL DEPREDADOR ENJAULADO!",
      "epilogue": "Wolverine inmoviliza a Creed contra las rocas mientras Cyclops sella su escape con una ráfaga óptica desintegradora de armas. Hank McCoy (Beast) requisa el transceptor de comunicación de Creed: en la frecuencia militar se escucha la voz de Raven Darkhölme (Mystique), quien confirma que ya tomó las rotativas del Daily Bugle para desatar una ola de desinformación masiva. Con las pruebas biológicas y la frecuencia enemiga en sus manos, los héroes avanzan hacia el Bugle con la verdad de su lado. ¡Beast se une formalmente al equipo de campo!",
      "unlockedHeroes": [
        "beast"
      ],
      "unlockedPerks": [
        "perk_beast_serum"
      ],
      "nextChapter": "3A",
      "bonusText": "Beast desbloqueado. Ventaja \"Suero Médico de Beast\" obtenida. Avanzan con pruebas sólidas hacia el Daily Bugle (Capítulo 3A)."
    },
    "lossOutcome": {
      "title": "DERROTA: HUIDA SANGRIENTA Y ALERTA A LA HERMANDAD",
      "epilogue": "Sabretooth aprovecha un descuido, hiere a Logan en el flanco y desaparece por los conductos pluviales de Central Park. Aunque los científicos civiles sobrevivieron, Creed alertó a Mystique de que los X-Men van en camino. Mystique fortifica el Daily Bugle con mercenarios y francotiradores antes de la llegada de los héroes.",
      "unlockedHeroes": [
        "beast"
      ],
      "nextChapter": "3B",
      "penalties": "Logan debe recuperarse; en el Cap. 3B Mystique estará prevenida y fuertemente atrincherada.",
      "bonusText": "La historia avanza hacia el Daily Bugle, pero bajo la hostilidad de la Hermandad (Capítulo 3B)."
    },
    "deployment": {
      "villain": {
        "location": "Central Park",
        "reason": "Sabretooth acecha en la espesura del parque buscando eliminar testigos de Oscorp."
      },
      "hero1": {
        "location": "Central Park",
        "reason": "Wolverine rastrea el hedor de Creed hasta la arboleda y se lanza al combate cuerpo a cuerpo."
      },
      "hero2": {
        "location": "Midtown High School",
        "reason": "Cyclops coordina el perímetro exterior guiando la evacuación con rayos de advertencia."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Felicia Hardy vigila desde las alturas para cortar las vías de escape del parque."
      }
    }
  },
  {
    "id": "2B",
    "step": 2,
    "act": 1,
    "actTitle": "ACTO I: LA SOMBRA EN MANHATTAN",
    "title": "Capítulo 2B: Asedio Mediático en el Daily Bugle (Ruta Bajo Presión)",
    "villainId": "mystique_villain",
    "assignedHeroSlot1": "cyclops",
    "assignedHeroSlot2": "wolverine",
    "assignedHeroSlot3": "black_cat",
    "squadOptions": [
      "cyclops",
      "wolverine",
      "black_cat",
      "miles_morales"
    ],
    "comicReference": "All-New X-Men & Uncanny X-Men (Bendis)",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON CAPÍTULO 1 - DERROTA)»\nEl brutal asalto de Rhino culminó con la fuga del villano y el colapso de la bóveda subterránea de Oscorp. Con los frascos de K-Gene en manos del crimen organizado, la Hermandad de Mutantes puso en marcha la segunda fase de su plan: Mystique se infiltró en el Daily Bugle suplantando al editor ejecutivo para publicar portadas sensacionalistas que acusan a los mutantes de terrorismo y destrucción urbana.\n\n«LA CRISIS ACTUAL»\nSirenas policiales atronan las avenidas mientras turbas de manifestantes engañados rodean la torre del periódico exigiendo la detención de los justicieros. Mystique utiliza sus dones de camuflaje para sembrar el caos en la sala de redacción y alterar los cables de noticias internacionales.\n\n«MISIÓN DEL EQUIPO»\nScott Summers (Cyclops) y Logan irrumpen en el edificio para desenmascarar a la impostora, mientras el Dr. Hank McCoy hackea los servidores centrales para anular la emisión de noticias falsas.",
    "locations": [
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg",
        "startHero2": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg",
        "startHero3": true
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
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
      "😈 VILLANO (Mystique): Inicia en DAILY BUGLE — Mystique altera los titulares en la sala de redacción central.",
      "👤 JORGE (Cyclops): Inicia en DAILY BUGLE — Scott ingresa por el vestíbulo exigiendo un alto al fuego mediático.",
      "🌸 ESPOSA (Wolverine): Inicia en MIDTOWN HIGH SCHOOL — Logan vigila los accesos de escape para evitar la huida de la metamorfa.",
      "⭐ APOYO (Black Cat, si juega): Inicia en OSCORP TOWER — Felicia rastrea las firmas de los contenedores robados.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Prensa Manipulada: Si los Héroes salvan a 2 Civiles en el Daily Bugle, la multitud descubre a Mystique y retiran inmediatamente 1 Matón de esa ubicación.",
    "events": {
      "initial": {
        "title": "¡PORTADAS EN LLAMAS!",
        "type": "Evento de Inicio",
        "badge": "Alerta Ciudadana",
        "text": "Los megáfonos de Times Square difunden falsedades: <strong>Coloca 1 Civil en Daily Bugle y 1 en Midtown High School</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Miren a estos 'héroes'! ¡Destruyeron Oscorp y ahora vienen por nosotros!\" — Mystique disfrazada"
      },
      "underPressure": {
        "title": "¡CABLES DESENMASCARADOS!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Contraataque Heroico",
        "text": "Beast hackea la señal central de televisión: <strong>Retira 1 Ficha de Amenaza de la ubicación de Cyclops o inflige 1 daño a Mystique.</strong>",
        "flavor": "Las pantallas gigantes revelan las grabaciones de seguridad: ¡los mutantes estaban protegiendo la ciudad!"
      },
      "accelerated": {
        "title": "¡CERCO TÁCTICO EN LA AZOTEA!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Acorralada",
        "text": "¡Mystique queda atrapada en el helipuerto! <strong>Los ataques de Cyclops y Wolverine infligen +1 de daño contra Mystique en esta ronda.</strong>",
        "flavor": "\"¡Esto no ha terminado, Summers! ¡La Hermandad ya tiene lo que necesita!\" — Mystique"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: LA FARSA DESENMASCARADA!",
      "epilogue": "Cyclops acorrala a Mystique en la azotea del Bugle y Beast proyecta en Times Square el video original del robo perpetrado por Rhino, limpiando el nombre de los héroes ante la opinión pública. Mystique escapa saltando en ala delta, pero abandona un mapa táctico: las muestras robadas de Oscorp fueron transferidas a un campamento clandestino en Central Park custodiado por Victor Creed (Sabretooth). ¡El equipo cuenta con el respaldo ciudadano para dar caza a Creed!",
      "unlockedHeroes": [
        "beast"
      ],
      "unlockedPerks": [
        "perk_beast_serum"
      ],
      "nextChapter": "3C",
      "bonusText": "Beast desbloqueado. Ventaja \"Suero Médico de Beast\" obtenida. Avanzan con pruebas a cazar a Creed en Central Park (Capítulo 3C)."
    },
    "lossOutcome": {
      "title": "DERROTA: ESTADO DE SITIO EN MANHATTAN",
      "epilogue": "Mystique logra activar la antena repetidora antes de esfumarse entre la muchedumbre. Las pantallas de la ciudad declaran a los héroes enemigos públicos y la alcaldía decreta el toque de queda. Aprovechando que la policía persigue a los justicieros, Sabretooth se apodera de Central Park con total impunidad para asegurar el contrabando de las bio-armas.",
      "unlockedHeroes": [
        "beast"
      ],
      "nextChapter": "3D",
      "penalties": "La policía y la prensa son hostiles; el combate en el Cap. 3D será bajo máxima tensión ambiental.",
      "bonusText": "Avanzan a Central Park bajo estado de sitio y persecución policial (Capítulo 3D)."
    },
    "deployment": {
      "villain": {
        "location": "Daily Bugle",
        "reason": "Mystique altera los titulares en la sala de redacción central del Bugle."
      },
      "hero1": {
        "location": "Daily Bugle",
        "reason": "Cyclops ingresa por el vestíbulo exigiendo un alto al fuego mediático."
      },
      "hero2": {
        "location": "Midtown High School",
        "reason": "Wolverine vigila las salidas de emergencia de la calle posterior."
      },
      "hero3": {
        "location": "Oscorp Tower",
        "reason": "Felicia Hardy rastrea los componentes de la toxina en los restos de Oscorp."
      }
    }
  },
  {
    "id": "3A",
    "step": 3,
    "act": 1,
    "actTitle": "ACTO I: LA SOMBRA EN MANHATTAN",
    "title": "Capítulo 3A: Desarticulando a la Impostora en el Daily Bugle",
    "villainId": "mystique_villain",
    "assignedHeroSlot1": "black_cat",
    "assignedHeroSlot2": "beast",
    "assignedHeroSlot3": "spider_man",
    "squadOptions": [
      "black_cat",
      "beast",
      "spider_man",
      "wolverine"
    ],
    "comicReference": "Spider-Gwen & Uncanny X-Men",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON CAPÍTULO 2A - VICTORIA)»\nLa captura de Sabretooth en Central Park dio frutos determinantes: el comunicador confiscado por Beast reveló que Mystique se encuentra atrincherada en el Daily Bugle manipulando las rotativas para encubrir la síntesis de un virus mutageno simbiótico financiado por Norman Osborn.\n\n«LA CRISIS ACTUAL»\nSabiendo la frecuencia enemiga exacta, Black Cat (Felicia Hardy) se infiltra por los conductos de ventilación ejecutivos del periódico mientras el Dr. Hank McCoy neutraliza los repetidores de telecomunicaciones. Pero Mystique ha colocado explosivos plásticos en los talleres de prensa y amenaza con volarlos si intentan desenmascararla.\n\n«MISIÓN DEL EQUIPO»\nDesactivar las trampas explosivas, evacuar al personal civil de redacción y capturar a Mystique antes de que transmita el código de detonación.",
    "locations": [
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startVillain": true,
        "startHero2": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg"
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg",
        "startHero1": true
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg",
        "startHero3": true
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Mystique): Inicia en DAILY BUGLE — Mystique custodia las cargas de demolición en las rotativas.",
      "👤 JORGE (Black Cat): Inicia en OSCORP TOWER — Felicia rastrea la línea troncal de datos desde la torre vecina.",
      "🌸 ESPOSA (Beast): Inicia en DAILY BUGLE — Hank McCoy hackea la consola de seguridad en el sótano.",
      "⭐ APOYO (Spider-Man, si juega): Inicia en BROOKLYN BRIDGE — Peter vigila las vías de escape hacia el río.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Gatos y Sabotaje: Black Cat puede usar fichas de Movimiento para desarmar cartas de Amenaza en su ubicación como si fueran fichas Heroicas.",
    "events": {
      "initial": {
        "title": "¡CARGAS TEMPORIZADAS!",
        "type": "Evento de Inicio",
        "badge": "Alarma Máxima",
        "text": "Mystique activa las cargas: <strong>Coloca 1 Civil en Daily Bugle y 1 en Sims Tower</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Un paso en falso y este edificio se convertirá en cenizas junto con sus secretos!\" — Mystique"
      },
      "underPressure": {
        "title": "¡CABLES CORTADOS!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Desarme Ágil",
        "text": "Felicia y Beast neutralizan los detonadores: <strong>Retira 1 Matón de Daily Bugle e inflige 1 daño a Mystique.</strong>",
        "flavor": "Un corte milimétrico de las garras de Felicia desactiva el circuito maestro."
      },
      "accelerated": {
        "title": "¡REVELACIÓN DE LA FRECUENCIA!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Pruebas Obtenidas",
        "text": "Hank McCoy extrae los datos de vuelo del Green Goblin: <strong>Cada héroe roba 1 carta inmediatamente.</strong>",
        "flavor": "\"¡Norman Osborn está en el aire! ¡Se dirige hacia el puente con el mutágeno!\" — Beast"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: EL COMPLOT DE OSBORN AL DESCUBIERTO!",
      "epilogue": "Felicia arrebata el detonador de las manos de Mystique con su gancho acrobático, mientras Beast y Spider-Man evacuan al personal civil. Al verse acorralada, Mystique confiesa la aterradora verdad: ¡Norman Osborn nunca perdió las bio-muestras! El propio Osborn financió a la Hermandad para probar el mutágeno y ahora vuela en su planeador hacia el Puente de Brooklyn con un arsenal de bombas mutagénicas. En las sombras de la redacción, Gwen Stacy (Ghost-Spider) —la heroína arácnida de la Tierra-65 que viaja entre dimensiones con su reloj multiversal— y Jean Grey se presentan ofreciendo su poder dimensional y psiónico. ¡Ghost-Spider y Jean Grey se unen al equipo activo!",
      "unlockedHeroes": [
        "ghost_spider",
        "jean_grey"
      ],
      "unlockedPerks": [
        "perk_gwen_lens"
      ],
      "nextChapter": "4A",
      "bonusText": "Ghost-Spider y Jean Grey desbloqueadas. Ventaja \"Cámara Antiespía de Gwen\" obtenida. Avanzan con iniciativa al Puente de Brooklyn (Capítulo 4A)."
    },
    "lossOutcome": {
      "title": "DERROTA: DETONACIÓN EN LA ROTATIVA",
      "epilogue": "Una detonación secundaria destruye los talleres del Daily Bugle. Mystique se desvanece en el humo mientras las alarmas inundan la avenida. El sabotaje impide acceder a los radares a tiempo: Osborn ya ha alcanzado el Puente de Brooklyn con su planeador cargado al máximo de bio-explosivos.",
      "unlockedHeroes": [
        "ghost_spider",
        "jean_grey"
      ],
      "nextChapter": "4B",
      "penalties": "La destrucción del Bugle retrasa la llegada; el Green Goblin iniciará el Cap. 4B bombardeando el puente.",
      "bonusText": "Ghost-Spider y Jean Grey se suman a la desesperada para frenar el fuego del Duende (Capítulo 4B)."
    },
    "deployment": {
      "villain": {
        "location": "Daily Bugle",
        "reason": "Mystique custodia las cargas de demolición en las rotativas del periódico."
      },
      "hero1": {
        "location": "Oscorp Tower",
        "reason": "Felicia rastrea la línea troncal de datos desde la torre vecina de Oscorp."
      },
      "hero2": {
        "location": "Daily Bugle",
        "reason": "Beast hackea la consola de seguridad en el sótano del edificio."
      },
      "hero3": {
        "location": "Brooklyn Bridge",
        "reason": "Spider-Man vigila las rutas de escape hacia el río Este."
      }
    }
  },
  {
    "id": "3B",
    "step": 3,
    "act": 1,
    "actTitle": "ACTO I: LA SOMBRA EN MANHATTAN",
    "title": "Capítulo 3B: Alarma en las Sombras del Daily Bugle",
    "villainId": "mystique_villain",
    "assignedHeroSlot1": "black_cat",
    "assignedHeroSlot2": "beast",
    "assignedHeroSlot3": "spider_man",
    "squadOptions": [
      "black_cat",
      "beast",
      "spider_man",
      "cyclops"
    ],
    "comicReference": "Spider-Island & X-Men: Schism",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON CAPÍTULO 2A - DERROTA)»\nLa fuga de Sabretooth en Central Park dio a la Hermandad tiempo de sobra para fortificar el Daily Bugle. Avisada por Creed, Mystique ha tomado rehenes entre el personal editorial y colocado francotiradores en las ventanas superiores.\n\n«LA CRISIS ACTUAL»\nLa torre del Bugle está en silencio sepulcral, pero la señal de difusión ya comenzó a emitir datos alterados culpando a mutantes y arácnidos del colapso biológico de Oscorp. Felicia Hardy y Hank McCoy deben infiltrarse bajo la vigilancia de mercenarios fuertemente armados.\n\n«MISIÓN DEL EQUIPO»\nRescatar a los rehenes civiles, neutralizar a los mercenarios y vencer a Mystique en el estudio de televisión antes de que la señal sea irreversible.",
    "locations": [
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startVillain": true,
        "startHero2": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg"
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg",
        "startHero1": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg",
        "startHero3": true
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Mystique): Inicia en DAILY BUGLE — Mystique transmite la señal hostil custodiada por matones.",
      "👤 JORGE (Black Cat): Inicia en CENTRAL PARK — Felicia se desplaza por las cornisas esquivando los reflectores policiales.",
      "🌸 ESPOSA (Beast): Inicia en DAILY BUGLE — Hank fuerza la entrada de ventilación trasera.",
      "⭐ APOYO (Spider-Man, si juega): Inicia en BROOKLYN BRIDGE — Peter acude tras asegurar a civiles en las vías de acceso.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Cerco Hostil: Mystique coloca 1 Matón adicional en Daily Bugle cada vez que active BAM si hay espacio disponible (sin Desbordamiento).",
    "events": {
      "initial": {
        "title": "¡REHENES EN EL ESTUDIO!",
        "type": "Evento de Inicio",
        "badge": "Alerta Ciudadana",
        "text": "Mystique mantiene rehenes: <strong>Coloca 1 Civil en Daily Bugle y 1 en Midtown High School</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Nadie sale de este edificio hasta que la ciudad entera conozca la 'amenaza mutante'!\" — Mystique"
      },
      "underPressure": {
        "title": "¡LIBERACIÓN Y CONTRAATAQUE!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Rescate Crítico",
        "text": "Los rehenes son puestos a salvo: <strong>Los héroes ganan 1 Ficha Comodín colectiva y retiran 1 Matón de Daily Bugle.</strong>",
        "flavor": "Con los civiles a salvo, los héroes pueden desatar todo su poder sin reservas."
      },
      "accelerated": {
        "title": "¡TERMINAL HACKEADO!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Datos Clave",
        "text": "Beast intercepta la señal militar: <strong>Inflige 2 de daño directo a Mystique e identifica el vuelo del Green Goblin.</strong>",
        "flavor": "\"¡El Green Goblin se dirige al Puente de Brooklyn con las bombas!\" — Beast"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: RESCATE HEROICO Y CÓDIGOS DE VUELO!",
      "epilogue": "Con una sincronización asombrosa, Felicia abre las cerraduras de las salas de rehenes mientras Beast noquea a la escolta de Mystique. Antes de huir, Mystique deja caer su comunicador militar con las coordenadas del Green Goblin: Norman Osborn se dirige al Puente de Brooklyn. Gwen Stacy (Ghost-Spider) y Jean Grey llegan como refuerzos de emergencia. ¡Ambas se unen al equipo activo!",
      "unlockedHeroes": [
        "ghost_spider",
        "jean_grey"
      ],
      "unlockedPerks": [
        "perk_gwen_lens"
      ],
      "nextChapter": "4A",
      "bonusText": "Ghost-Spider y Jean Grey desbloqueadas. Ventaja obtenida. Avanzan con datos al Puente de Brooklyn (Capítulo 4A)."
    },
    "lossOutcome": {
      "title": "DERROTA: DIFUSIÓN CONSUMADA",
      "epilogue": "Mystique completa la emisión hostil antes de escapar en un helicóptero camuflado. La ciudad entra en histeria y el Green Goblin aprovecha el caos para bombardear el Puente de Brooklyn sin oposición.",
      "unlockedHeroes": [
        "ghost_spider",
        "jean_grey"
      ],
      "nextChapter": "4B",
      "penalties": "La opinión pública está en contra; el Duende ataca el puente con total sorpresa en el Cap. 4B.",
      "bonusText": "Ghost-Spider y Jean Grey se incorporan al equipo en plena emergencia aérea (Capítulo 4B)."
    },
    "deployment": {
      "villain": {
        "location": "Daily Bugle",
        "reason": "Mystique transmite la señal difamatoria custodiada por matones armados."
      },
      "hero1": {
        "location": "Central Park",
        "reason": "Felicia se desplaza por las cornisas esquivando los reflectores policiales."
      },
      "hero2": {
        "location": "Daily Bugle",
        "reason": "Hank McCoy fuerza la entrada de ventilación trasera de los estudios."
      },
      "hero3": {
        "location": "Brooklyn Bridge",
        "reason": "Spider-Man acude tras asegurar a civiles en las vías de acceso al puente."
      }
    }
  },
  {
    "id": "3C",
    "step": 3,
    "act": 1,
    "actTitle": "ACTO I: LA SOMBRA EN MANHATTAN",
    "title": "Capítulo 3C: Cacería con Pistas Claras en Central Park",
    "villainId": "sabretooth",
    "assignedHeroSlot1": "beast",
    "assignedHeroSlot2": "miles_morales",
    "assignedHeroSlot3": "black_cat",
    "squadOptions": [
      "beast",
      "miles_morales",
      "black_cat",
      "wolverine"
    ],
    "comicReference": "Astonishing Spider-Man & Wolverine & All-New X-Men",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON CAPÍTULO 2B - VICTORIA)»\nTras desbaratar la tapadera de Mystique en el Daily Bugle y recuperar los datos del convoy de escape de Rhino, los héroes tienen la ubicación exacta del campamento de contrabando en Central Park: Victor Creed (Sabretooth) custodia los camiones que transportan los contenedores de biomasa de Oscorp.\n\n«LA CRISIS ACTUAL»\nCreed ha armado una emboscada con trampas de caza y matones fuertemente armados entre los monumentos del parque para defender el cargamento. Hank McCoy y Miles Morales lideran la incursión de rastreo.\n\n«MISIÓN DEL EQUIPO»\nDesarmar las trampas, asegurar las bio-muestras y someter a Sabretooth antes de que ordene la partida del convoy.",
    "locations": [
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startHero3": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg",
        "startHero2": true
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
      "😈 VILLANO (Sabretooth): Inicia en CENTRAL PARK — Creed vigila los camiones con las bio-muestras de Oscorp.",
      "👤 JORGE (Beast): Inicia en CENTRAL PARK — Hank McCoy rastrea las firmas químicas de las sustancias robadas.",
      "🌸 ESPOSA (Miles Morales): Inicia en MIDTOWN HIGH SCHOOL — Miles se aproxima en modo sigilo por las copas de los árboles.",
      "⭐ APOYO (Black Cat, si juega): Inicia en DAILY BUGLE — Felicia intercepta las rutas de escape de los transportes.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Rastreo Químico: Beast puede resolver misiones de Amenaza en Central Park con 1 acción heroica menos de lo requerido.",
    "events": {
      "initial": {
        "title": "¡TRAMPAS EN LA ARBOLEDA!",
        "type": "Evento de Inicio",
        "badge": "Terreno Minado",
        "text": "Creed ha colocado cepos: <strong>Cada héroe debe gastar 1 acción de movimiento adicional al entrar en Central Park en su primer turno.</strong>",
        "flavor": "\"¡Entren a mi jardín, cachorros! ¡A ver si salen de una pieza!\" — Sabretooth"
      },
      "underPressure": {
        "title": "¡DESCARGA BIOELÉCTRICA EN LA EMBOSCADA!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Ataque Sorpresa",
        "text": "Miles aturde a Creed desde el camuflaje: <strong>Inflige 2 de daño directo a Sabretooth.</strong>",
        "flavor": "Un chispazo de bioelectricidad azul ilumina la noche y derriba al depredador."
      },
      "accelerated": {
        "title": "¡CONTENEDORES ASEGURADOS!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Cargamento Recuperado",
        "text": "Beast sella los frascos criogénicos: <strong>Cada héroe recupera 1 carta de su descarte a su mano.</strong>",
        "flavor": "\"¡Las muestras de Oscorp están bajo control, pero Norman Osborn ya despegó hacia el puente!\" — Beast"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: CONVOY INTERCEPTADO Y REVELACIÓN DE OSBORN!",
      "epilogue": "Beast y Miles neutralizan a Creed con una combinación de suero sedante y descargas bioeléctricas. Al revisar la cabina del camión principal, descubren el logotipo personal de Norman Osborn y planes de vuelo hacia el Puente de Brooklyn: ¡el Green Goblin va a liberar el virus desde el aire! Ghost-Spider y Jean Grey se unen a la vanguardia. ¡Ambas se incorporan al roster activo!",
      "unlockedHeroes": [
        "ghost_spider",
        "jean_grey"
      ],
      "unlockedPerks": [
        "perk_telekinetic_shield"
      ],
      "nextChapter": "4A",
      "bonusText": "Ghost-Spider y Jean Grey desbloqueadas. Ventaja \"Escudo Psiónico de Jean\" obtenida. Avanzan con ventaja al Puente de Brooklyn (Capítulo 4A)."
    },
    "lossOutcome": {
      "title": "DERROTA: EL CONVOY ROMPE EL CERCO",
      "epilogue": "Creed derriba las barricadas y permite que uno de los camiones escape hacia los almacenes de Osborn. El retraso permite que el Green Goblin cargue su planeador y comience el bombardeo sobre el Puente de Brooklyn.",
      "unlockedHeroes": [
        "ghost_spider",
        "jean_grey"
      ],
      "nextChapter": "4B",
      "penalties": "El camión fugitivo entregó las sustancias a Osborn; el Green Goblin inicia el Cap. 4B con mayor potencia de fuego.",
      "bonusText": "Ghost-Spider y Jean Grey se suman al escuadrón para interceptar el ataque aéreo (Capítulo 4B)."
    },
    "deployment": {
      "villain": {
        "location": "Central Park",
        "reason": "Creed vigila los camiones con las bio-muestras robadas de Oscorp."
      },
      "hero1": {
        "location": "Central Park",
        "reason": "Hank McCoy rastrea las firmas químicas de las sustancias en el parque."
      },
      "hero2": {
        "location": "Midtown High School",
        "reason": "Miles Morales se aproxima en modo sigilo por las copas de los árboles."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Felicia Hardy intercepta las rutas de escape de los transportes hacia el centro."
      }
    }
  },
  {
    "id": "3D",
    "step": 3,
    "act": 1,
    "actTitle": "ACTO I: LA SOMBRA EN MANHATTAN",
    "title": "Capítulo 3D: Cacería en Central Park Bajo Estado de Sitio",
    "villainId": "sabretooth",
    "assignedHeroSlot1": "beast",
    "assignedHeroSlot2": "miles_morales",
    "assignedHeroSlot3": "black_cat",
    "squadOptions": [
      "beast",
      "miles_morales",
      "black_cat",
      "spider_man"
    ],
    "comicReference": "Days of Future Past & Spider-Man: The Gauntlet",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON CAPÍTULO 2B - DERROTA)»\nLa difusión de la propaganda hostil de Mystique en el Daily Bugle causó estragos: la ciudad está bajo toque de queda policial y patrullas armadas persiguen a los justicieros. Sabretooth aprovecha la cacería de brujas para saquear laboratorios en Central Park y ejecutar informantes sin oposición.\n\n«LA CRISIS ACTUAL»\nEn medio de sirenas, reflectores de helicópteros y civiles aterrorizados, Beast y Miles Morales deben moverse como sombras para frenar a Creed sin herir a las fuerzas del orden engañadas.\n\n«MISIÓN DEL EQUIPO»\nProteger a los civiles en medio del fuego cruzado y derrotar a Sabretooth para detener la sangría urbana.",
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
        "img": "./assets/locations/midtown_high.jpg",
        "startHero1": true
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
      "😈 VILLANO (Sabretooth): Inicia en CENTRAL PARK — Creed ataca impunemente amparado por el desorden.",
      "👤 JORGE (Beast): Inicia en MIDTOWN HIGH SCHOOL — Hank se infiltra por los callejones para evitar las patrullas policiales.",
      "🌸 ESPOSA (Miles Morales): Inicia en CENTRAL PARK — Miles vigila desde la estatua del parque camuflado.",
      "⭐ APOYO (Black Cat, si juega): Inicia en DAILY BUGLE — Felicia desvía los helicópteros con bengalas.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Reflectores Policiales: Si un Héroe termina su turno en Central Park, no puede usar cartas con acciones de Ataque en su siguiente turno a menos que rescate a un Civil.",
    "events": {
      "initial": {
        "title": "¡REFLECTORES EN EL CIELO!",
        "type": "Evento de Inicio",
        "badge": "Alerta Policial",
        "text": "Los helicópteros sobrevuelan el parque: <strong>Coloca 1 Civil en Central Park y 1 en Midtown High School</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Aquí viene la presa! ¡Dejen que los uniformados miren cómo los desgarro!\" — Sabretooth"
      },
      "underPressure": {
        "title": "¡CORTINA DE HUMO Y RESCATE!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Evasión Táctica",
        "text": "Miles usa su bioelectricidad para fundir los reflectores: <strong>Retira 1 Matón de Central Park e inflige 1 daño a Creed.</strong>",
        "flavor": "Un apagón repentino sume el claro del parque en tinieblas, cegando a Creed."
      },
      "accelerated": {
        "title": "¡GOLPE DE ADAMANTIUM CIENTÍFICO!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Inmovilización",
        "text": "Hank inyecta un neutralizador neural en el cuello de Creed: <strong>Sabretooth no podrá atacar en su siguiente turno.</strong>",
        "flavor": "\"¡Un golpe a la médula oblonga para frenar tu frenesí!\" — Beast"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: EL FRENTE SE SOSTIENE!",
      "epilogue": "A pesar de la hostilidad ambiental, Miles y Beast reducen a Creed frente a las cámaras de los noticieros, demostrando quién era el verdadero agresor. La confesión grabada de Creed desenmascara a Norman Osborn como el Green Goblin. Ghost-Spider y Jean Grey se incorporan al equipo para cortar el paso a Osborn en el Puente de Brooklyn. ¡Ambas se unen al roster activo!",
      "unlockedHeroes": [
        "ghost_spider",
        "jean_grey"
      ],
      "unlockedPerks": [
        "perk_telekinetic_shield"
      ],
      "nextChapter": "4A",
      "bonusText": "Ghost-Spider y Jean Grey desbloqueadas. Ventaja obtenida. Avanzan al Puente de Brooklyn (Capítulo 4A)."
    },
    "lossOutcome": {
      "title": "DERROTA: CAOS TOTAL Y EMBESTIDA DEL DUENDE",
      "epilogue": "El fuego cruzado obliga a los héroes a retirarse a las cloacas. Con la ciudad sumida en la histeria, el Green Goblin sobrevuela Manhattan desatando una lluvia de bombas de fuego sobre el Puente de Brooklyn.",
      "unlockedHeroes": [
        "ghost_spider",
        "jean_grey"
      ],
      "nextChapter": "4B",
      "penalties": "La ciudad está colapsada; el combate en el Cap. 4B será una carrera desesperada contra las llamas.",
      "bonusText": "Ghost-Spider y Jean Grey se suman al escuadrón en plena emergencia aérea (Capítulo 4B)."
    },
    "deployment": {
      "villain": {
        "location": "Central Park",
        "reason": "Creed ataca amparado por el desorden del toque de queda en la ciudad."
      },
      "hero1": {
        "location": "Midtown High School",
        "reason": "Hank McCoy se infiltra por los callejones para evitar las patrullas policiales."
      },
      "hero2": {
        "location": "Central Park",
        "reason": "Miles Morales vigila desde la estatua del parque camuflado en las sombras."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Felicia Hardy desvía la atención de los helicópteros con bengalas nocturnas."
      }
    }
  },
  {
    "id": "4A",
    "step": 4,
    "act": 2,
    "actTitle": "ACTO II: FUEGO CRUZADO Y LA SOMBRA ALIENÍGENA",
    "title": "Capítulo 4A: Interceptación Aérea en el Puente (Green Goblin)",
    "villainId": "green_goblin",
    "assignedHeroSlot1": "ghost_spider",
    "assignedHeroSlot2": "jean_grey",
    "assignedHeroSlot3": "spider_man",
    "squadOptions": [
      "ghost_spider",
      "jean_grey",
      "spider_man",
      "cyclops"
    ],
    "comicReference": "Ultimate Spider-Man: Death of a Goblin & Dark Phoenix Saga",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 3 - VICTORIA)»\nLa desarticulación de las células de la Hermandad arrojó una revelación aterradora: Norman Osborn en persona es la mente maestra que orquestó tanto el asalto a Oscorp como la tapadera mediática. Con las bio-muestras mutantes sintetizadas en bombas de calabaza mutagénicas, el Green Goblin vuela en su aerodeslizador hacia el Puente de Brooklyn para dispersar el gas tóxico sobre el tráfico matutino.\n\n«LA CRISIS ACTUAL»\nGracias a los datos de telemetría asegurados a tiempo, Gwen Stacy (Ghost-Spider) —la heroína arácnida de la Tierra-65 que viaja entre dimensiones con su reloj multiversal— y Jean Grey despliegan escudos telequinéticos y redes de contención aérea sobre los cables del puente para interceptar al villano antes del lanzamiento.\n\n«MISIÓN DEL EQUIPO»\nGwen Stacy realiza maniobras acrobáticas entre las torres de suspensión mientras Jean Grey protege a los conductores con barreras psiónicas. Deben derribar el planeador del Green Goblin antes de que alcance altitud de dispersión.",
    "locations": [
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startHero2": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg"
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
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
      "😈 VILLANO (Green Goblin): Inicia en BROOKLYN BRIDGE — Osborn sobrevuela el puente con su arsenal de calabazas.",
      "👤 JORGE (Ghost-Spider): Inicia en BROOKLYN BRIDGE — Gwen se columpia entre los cables de acero para emboscarlo.",
      "🌸 ESPOSA (Jean Grey): Inicia en DAILY BUGLE — Jean proyecta un escudo telequinético desde la orilla de Manhattan.",
      "⭐ APOYO (Spider-Man, si juega): Inicia en SIMS TOWER — Peter asegura la evacuación del tráfico en el extremo este.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Vuelo Rasante: El Green Goblin salta de ubicación tras cada BAM, pero los escudos de Jean Grey evitan que los Civiles en su casilla sufran daño.",
    "events": {
      "initial": {
        "title": "¡BOMBAS CALABAZA EN EL AIRE!",
        "type": "Evento de Inicio",
        "badge": "Alerta Aérea",
        "text": "Osborn lanza una andanada explosiva: <strong>Coloca 1 Civil en Brooklyn Bridge y 1 en Daily Bugle</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Miren arriba, insectos! ¡La nueva evolución caerá sobre sus cabezas!\" — Green Goblin"
      },
      "underPressure": {
        "title": "¡ESCUDO TELEQUINÉTICO TOTAL!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Protección Psiónica",
        "text": "Jean levanta una barrera mental: <strong>Los héroes retiran 1 Ficha de Amenaza de Brooklyn Bridge e infligen 1 daño al Duende.</strong>",
        "flavor": "Un resplandor rosado desvía las esquirlas de metralla hacia las aguas del río."
      },
      "accelerated": {
        "title": "¡RED ARACNIDA EN LA TURBINA!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Planeador Dañado",
        "text": "Gwen bloquea la turbina del aerodeslizador: <strong>El Green Goblin pierde 2 de salud inmediatamente y no puede moverse en su siguiente turno.</strong>",
        "flavor": "\"¡Tu juguete acaba de perder el equilibrio, Norman!\" — Ghost-Spider"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: AERODESLIZADOR DERRIBADO!",
      "epilogue": "Con un impacto certero, Gwen Stacy atasca el rotor del planeador y Jean Grey estrella el vehículo contra un pilar de hormigón. Norman Osborn es neutralizado, pero antes de perder el conocimiento su radio militar emite una transmisión cifrada hacia Westchester: ¡había contratado a Juggernaut (Cain Marko) para arrasar la Escuela de Xavier y saquear las bobinas de Cerebro! Con ventaja de tiempo, Storm y Jessica Drew (Spider-Woman) —agente encubierta con alas de planeo y devastadores rayos bioeléctricos de veneno— llegan volando al rescate para partir a la Mansión X. ¡Storm y Spider-Woman se unen al equipo activo!",
      "unlockedHeroes": [
        "storm",
        "spider_woman"
      ],
      "unlockedPerks": [
        "perk_telekinetic_shield"
      ],
      "nextChapter": "5A",
      "bonusText": "Storm y Spider-Woman desbloqueadas. Ventaja obtenida. Vuelan a tiempo a defender la Mansión X (Capítulo 5A)."
    },
    "lossOutcome": {
      "title": "DERROTA: CORTINA DE HUMO Y ASALTO INICIADO",
      "epilogue": "El Green Goblin detona una granada de humo químico que cubre el puente, huyendo entre las nubes. La conmoción retrasa las comunicaciones y la alerta de Westchester llega tarde: Juggernaut ya ha comenzado su embestida contra la Mansión X. Storm y Spider-Woman acuden a la carrera para contener la brecha.",
      "unlockedHeroes": [
        "storm",
        "spider_woman"
      ],
      "nextChapter": "5B",
      "penalties": "Llegan con retraso a Westchester; Juggernaut habrá causado estragos iniciales en el Cap. 5B.",
      "bonusText": "Storm y Spider-Woman se suman de emergencia a la defensa de la Mansión (Capítulo 5B)."
    },
    "deployment": {
      "villain": {
        "location": "Brooklyn Bridge",
        "reason": "Osborn sobrevuela el puente con su arsenal de calabazas mutagénicas."
      },
      "hero1": {
        "location": "Brooklyn Bridge",
        "reason": "Gwen Stacy se columpia entre los cables de acero para emboscarlo en el aire."
      },
      "hero2": {
        "location": "Daily Bugle",
        "reason": "Jean Grey proyecta un escudo telequinético desde la orilla de Manhattan."
      },
      "hero3": {
        "location": "Sims Tower",
        "reason": "Peter Parker asegura la evacuación del tráfico en el extremo este del puente."
      }
    }
  },
  {
    "id": "4B",
    "step": 4,
    "act": 2,
    "actTitle": "ACTO II: FUEGO CRUZADO Y LA SOMBRA ALIENÍGENA",
    "title": "Capítulo 4B: Lluvia de Fuego sobre Manhattan (Green Goblin)",
    "villainId": "green_goblin",
    "assignedHeroSlot1": "ghost_spider",
    "assignedHeroSlot2": "jean_grey",
    "assignedHeroSlot3": "spider_man",
    "squadOptions": [
      "ghost_spider",
      "jean_grey",
      "spider_man",
      "wolverine"
    ],
    "comicReference": "Spider-Man: A Death in the Family & Uncanny X-Men",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 3 - DERROTA)»\nLos retrasos y contratiempos de las misiones anteriores permitieron a Norman Osborn finalizar la síntesis de su fórmula mutagénica. Con una carcajada desquiciada que resuena por los altavoces de la ciudad, el Green Goblin lanza una lluvia de calabazas explosivas sobre el Puente de Brooklyn, atrapando a cientos de civiles en medio de detonaciones y humo tóxico.\n\n«LA CRISIS ACTUAL»\nEl puente arde y los cables de suspensión crujen peligrosamente. Gwen Stacy (Ghost-Spider) y Jean Grey acuden a la desesperada en medio del fuego para evacuar a las familias atrapadas y derribar el planeador del maniático.\n\n«MISIÓN DEL EQUIPO»\nExtinguir los incendios, salvar a los civiles de caer al río y neutralizar al Green Goblin en medio de un infierno de llamas.",
    "locations": [
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg"
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg",
        "startHero2": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
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
      "😈 VILLANO (Green Goblin): Inicia en BROOKLYN BRIDGE — Osborn bombardea los carriles centrales del puente.",
      "👤 JORGE (Ghost-Spider): Inicia en BROOKLYN BRIDGE — Gwen rescata vehículos a punto de precipitarse al agua.",
      "🌸 ESPOSA (Jean Grey): Inicia en MIDTOWN HIGH SCHOOL — Jean sujeta los cables rotos con telequinesis pura.",
      "⭐ APOYO (Spider-Man, si juega): Inicia en SIMS TOWER — Peter teje redes gigantes bajo el puente.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Puente en Llamas: Cada vez que el Duende active BAM, los Héroes en Brooklyn Bridge deben descartar 1 carta de su mano o sufrir 1 herida.",
    "events": {
      "initial": {
        "title": "¡CABLES AL ROJO VIVO!",
        "type": "Evento de Inicio",
        "badge": "Peligro Crítico",
        "text": "El puente tiembla por las bombas: <strong>Coloca 1 Civil en Brooklyn Bridge y 1 en Sims Tower</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Que Nueva York vea cómo caen sus símbolos!\" — Green Goblin"
      },
      "underPressure": {
        "title": "¡REDES DE RESCATE MASIVO!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Salvamento Épico",
        "text": "Los héroes aseguran a los civiles: <strong>Cada héroe roba 1 carta y gana 1 Ficha de Movimiento.</strong>",
        "flavor": "Las redes de Gwen y Peter sostienen los vehículos suspendidos en el abismo."
      },
      "accelerated": {
        "title": "¡ESTRUENDO PSÍQUICO!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Golpe Decisivo",
        "text": "Jean lanza una onda psíquica demoledora: <strong>Inflige 2 de daño directo al Duende y apaga los fuegos del puente.</strong>",
        "flavor": "La furia mental de Jean Grey derriba a Osborn de su deslizador."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: TRAGEDIA EVITADA Y AVISO DE WESTCHESTER!",
      "epilogue": "A costa de un esfuerzo titánico, Jean Grey y Gwen Stacy salvan a todos los civiles del puente y reducen a Norman Osborn. En su traje chamuscado, una transmisión revela que Juggernaut ya avanza hacia la Mansión X en Westchester para saquear los laboratorios de Xavier. Storm y Spider-Woman llegan surcando el cielo para reforzar la defensa. ¡Ambas se incorporan al roster activo!",
      "unlockedHeroes": [
        "storm",
        "spider_woman"
      ],
      "unlockedPerks": [
        "perk_telekinetic_shield"
      ],
      "nextChapter": "5A",
      "bonusText": "Storm y Spider-Woman desbloqueadas. Ventaja obtenida. Avanzan a marchas forzadas a defender la Mansión X (Capítulo 5A)."
    },
    "lossOutcome": {
      "title": "DERROTA: COLAPSO PARCIAL Y ALERTA ROJA",
      "epilogue": "El puente sufre graves daños y Osborn se pierde en la noche. Las sirenas de Manhattan se mezclan con la señal de socorro de Westchester: ¡Juggernaut ha roto las puertas de la Escuela de Xavier! El equipo debe correr sin descanso hacia la Mansión.",
      "unlockedHeroes": [
        "storm",
        "spider_woman"
      ],
      "nextChapter": "5B",
      "penalties": "La infraestructura rota demora el viaje; la Mansión X estará a oscuras en el Cap. 5B.",
      "bonusText": "Storm y Spider-Woman se unen a la defensa desesperada de la Mansión (Capítulo 5B)."
    },
    "deployment": {
      "villain": {
        "location": "Brooklyn Bridge",
        "reason": "Osborn bombardea los carriles centrales del puente con granadas de fósforo."
      },
      "hero1": {
        "location": "Brooklyn Bridge",
        "reason": "Gwen Stacy rescata vehículos a punto de precipitarse al agua del río."
      },
      "hero2": {
        "location": "Midtown High School",
        "reason": "Jean Grey sujeta los cables rotos del puente con telequinesis pura."
      },
      "hero3": {
        "location": "Sims Tower",
        "reason": "Peter Parker teje redes gigantes de seguridad bajo la estructura del puente."
      }
    }
  },
  {
    "id": "5A",
    "step": 5,
    "act": 2,
    "actTitle": "ACTO II: FUEGO CRUZADO Y LA SOMBRA ALIENÍGENA",
    "title": "Capítulo 5A: El Asedio a la Mansión X (Defensa con Trampas de Gravedad)",
    "villainId": "juggernaut",
    "assignedHeroSlot1": "storm",
    "assignedHeroSlot2": "spider_woman",
    "assignedHeroSlot3": "cyclops",
    "squadOptions": [
      "storm",
      "spider_woman",
      "cyclops",
      "wolverine"
    ],
    "comicReference": "Uncanny X-Men #102 & Astonishing X-Men",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 4 - VICTORIA)»\nTras derribar el aerodeslizador del Green Goblin en el Puente de Brooklyn, Jean Grey extrajo un fragmento psíquico de la mente de Osborn: antes de despegar, había contratado a una fuerza destructiva imparable: ¡Juggernaut (Cain Marko)! Cain marcha hacia Westchester para demoler la Escuela de Xavier y saquear las bobinas de amplificación de Cerebro.\n\n«LA CRISIS ACTUAL»\nGracias a que neutralizaron a Osborn con rapidez, los héroes llegaron a tiempo a la Mansión X y activaron los sistemas de defensa perimetral. Cain Marko embiste las rejas exteriores alimentado por la gema de Cyttorak y sobrealimentado con implantes bio-simbióticos.\n\n«MISIÓN DEL EQUIPO»\nOroro Munroe (Storm) desata vendavales huracanados y Jessica Drew (Spider-Woman) dispara ráfagas bioeléctricas para frenar el ímpetu de Marko y arrancarle el yelmo místico.",
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
        "name": "Muir Island",
        "img": "./assets/locations/muir_island.jpg"
      },
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg"
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Juggernaut): Inicia en XAVIER INSTITUTE — Marko destroza las rejas de hierro del patio principal.",
      "👤 JORGE (Storm): Inicia en XAVIER INSTITUTE — Ororo levanta un vórtice aéreo para frenar su carrera frontal.",
      "🌸 ESPOSA (Spider-Woman): Inicia en THE DANGER ROOM — Jessica calibra los proyectores de fuerza gravitacional.",
      "⭐ APOYO (Cyclops, si juega): Inicia en HANGAR BAY — Scott prepara el despegue de emergencia del Blackbird.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Inercia Imparable: Juggernaut no puede ser retrasado por efectos de movimiento ordinarios, pero si recibe 2 o más daños en un solo turno, pierde 1 punto de aceleración.",
    "events": {
      "initial": {
        "title": "¡TERREMOTO EN EL PATIO!",
        "type": "Evento de Inicio",
        "badge": "Fuerza Bruta",
        "text": "Marko embiste con furia: <strong>Coloca 1 Civil en Xavier Institute y 1 en The Danger Room</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Nada puede detener al Juggernaut! ¡Esta escuelita se viene abajo hoy!\" — Cain Marko"
      },
      "underPressure": {
        "title": "¡RÁFAGAS VENENOSAS DIRECTAS!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Golpe Penetrante",
        "text": "Spider-Woman atraviesa el blindaje: <strong>Inflige 2 de daño directo a Juggernaut e inhabilita su siguiente embestida.</strong>",
        "flavor": "Un rayo bioeléctrico verde penetra las juntas de su armadura, haciéndolo trastabillar."
      },
      "accelerated": {
        "title": "¡RAYO HURACANADO DE ORORO!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Poder Elemental",
        "text": "Storm desciende con un relámpago colosal: <strong>Juggernaut pierde 2 de salud y su yelmo queda dañado.</strong>",
        "flavor": "\"¡Por los elementos del cielo y la tierra, no darás un paso más en esta casa!\" — Storm"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: EL COLOSO DOBLEGADO!",
      "epilogue": "Con un relámpago celestial de Storm y un disparo de precisión óptica de Cyclops, el yelmo místico de Juggernaut salta por los aires, cayendo inconsciente en el jardín delantero. Al revisar el arnés cibernético adosado a su pecho, Hank McCoy detecta una señal biológica estremecedora: Marko fue dopado con tejido vivo de un huésped cautivo: ¡Eddie Brock (Venom)! Brock está retenido y torturado en los Túneles Morlock bajo Manhattan. En ese instante, una brecha temporal se abre en el jardín y de ella emerge Miguel O'Hara (Spider-Man 2099): \"El colapso temporal comenzó con ese simbionte. Vengo del futuro para ayudarlos a salvarlo\". ¡Spider-Man 2099 se suma a la alianza!",
      "unlockedHeroes": [
        "spider_2099"
      ],
      "unlockedPerks": [
        "perk_blackbird_hanger"
      ],
      "nextChapter": "6A",
      "bonusText": "Spider-Man 2099 desbloqueado. Ventaja \"Despliegue del Blackbird\" obtenida. Avanzan con datos a los Túneles Morlock (Capítulo 6A)."
    },
    "lossOutcome": {
      "title": "DERROTA: BRECHA EN EL SUBTERRÁNEO",
      "epilogue": "Juggernaut pulveriza los cimientos subterráneos de la Mansión X antes de ser repelido. La onda de choque colapsa las cloacas de Manhattan conectadas a los Túneles Morlock. En las profundidades, Venom se libera de su tanque en medio de un ataque de dolor y furia ciega. Miguel O'Hara (Spider-Man 2099) llega del futuro justo a tiempo para rescatar a los héroes de los escombros.",
      "unlockedHeroes": [
        "spider_2099"
      ],
      "nextChapter": "6B",
      "penalties": "La Mansión sufre daños estructurales; Venom estará en frenesí total en el Cap. 6B.",
      "bonusText": "Spider-Man 2099 se incorpora al equipo para descender a las cloacas en penumbra (Capítulo 6B)."
    },
    "deployment": {
      "villain": {
        "location": "Xavier Institute",
        "reason": "Juggernaut destroza las rejas de hierro del patio delantero de la Mansión."
      },
      "hero1": {
        "location": "Xavier Institute",
        "reason": "Storm levanta un vórtice aéreo para frenar la carrera frontal del gigante."
      },
      "hero2": {
        "location": "The Danger Room",
        "reason": "Jessica Drew calibra los proyectores de fuerza gravitacional defensivos."
      },
      "hero3": {
        "location": "Hangar Bay",
        "reason": "Cyclops prepara el despegue de emergencia del Blackbird para soporte."
      }
    }
  },
  {
    "id": "5B",
    "step": 5,
    "act": 2,
    "actTitle": "ACTO II: FUEGO CRUZADO Y LA SOMBRA ALIENÍGENA",
    "title": "Capítulo 5B: Asedio a la Mansión X a Oscuras (Brecha Crítica)",
    "villainId": "juggernaut",
    "assignedHeroSlot1": "storm",
    "assignedHeroSlot2": "spider_woman",
    "assignedHeroSlot3": "cyclops",
    "squadOptions": [
      "storm",
      "spider_woman",
      "cyclops",
      "jean_grey"
    ],
    "comicReference": "X-Men: Messiah Complex & Fear Itself",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 4 - DERROTA)»\nEl Green Goblin logró detonar sus bombas de dispersión en el puente y escapar entre el humo químico. La emergencia colapsó los sistemas de respuesta y la señal de socorro de Westchester llegó tarde: Cain Marko (Juggernaut) ya ha embestido los muros exteriores de la Mansión X, reventando los generadores eléctricos y dejando el complejo en penumbra.\n\n«LA CRISIS ACTUAL»\nLa Escuela de Xavier está a oscuras y los sistemas de contención fallan. Marko avanza por los pasillos derribando muros en busca de Cerebro, mientras los estudiantes mutantes evacuan hacia los hangares subterráneos.\n\n«MISIÓN DEL EQUIPO»\nStorm y Spider-Woman deben combatir a ciegas en los pasillos destrozados, protegiendo a los jóvenes y arrancando el casco a Juggernaut antes de que alcance la cámara de Cerebro.",
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
        "name": "Muir Island",
        "img": "./assets/locations/muir_island.jpg"
      },
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg"
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Juggernaut): Inicia en XAVIER INSTITUTE — Marko destroza las paredes del vestíbulo principal.",
      "👤 JORGE (Storm): Inicia en XAVIER INSTITUTE — Ororo ilumina los pasillos con chispas de relámpago.",
      "🌸 ESPOSA (Spider-Woman): Inicia en THE DANGER ROOM — Jessica guía a los estudiantes mutantes hacia los refugios.",
      "⭐ APOYO (Cyclops, si juega): Inicia en HANGAR BAY — Scott defiende la puerta de las bahías subterráneas.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Oscuridad en el Complejo: Los Héroes no pueden usar cartas de Movimiento para desplazarse más de 1 casilla por acción mientras Juggernaut esté en Xavier Institute.",
    "events": {
      "initial": {
        "title": "¡CORTOCIRCUITO TOTAL!",
        "type": "Evento de Inicio",
        "badge": "Penumbra Hostil",
        "text": "Las luces de emergencia parpadean: <strong>Coloca 1 Civil en Xavier Institute y 1 en Hangar Bay</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡No necesitan luces para ver cómo se derrumba su sueño, mutantes!\" — Juggernaut"
      },
      "underPressure": {
        "title": "¡BENGALAS BIOELÉCTRICAS!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Luz en la Noche",
        "text": "Spider-Woman ilumina los pasillos: <strong>Los héroes retiran la penalización de movimiento e infligen 1 daño a Juggernaut.</strong>",
        "flavor": "Un resplandor verde esmeralda despeja las sombras y marca el blanco."
      },
      "accelerated": {
        "title": "¡GOLPE DE PRECISIÓN EN EL YELMO!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Casco Arrancado",
        "text": "Cyclops dispara una ráfaga óptica a quemarropa: <strong>Juggernaut pierde 2 de salud inmediatamente.</strong>",
        "flavor": "\"¡Fuera de esta casa, Cain!\" — Cyclops"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: DEFENSA HEROICA EN LA OSCURIDAD!",
      "epilogue": "En medio de los pasillos en penumbra, Cyclops y Storm logran desprender el casco de Juggernaut, dejándolo noqueado a metros de la puerta de Cerebro. Las lecturas del arnés de Marko revelan la firma de Venom en los Túneles Morlock. De una fisura temporal aparece Miguel O'Hara (Spider-Man 2099) para advertirles sobre el peligro de esa criatura. ¡Spider-Man 2099 se incorpora al roster activo!",
      "unlockedHeroes": [
        "spider_2099"
      ],
      "unlockedPerks": [
        "perk_blackbird_hanger"
      ],
      "nextChapter": "6A",
      "bonusText": "Spider-Man 2099 desbloqueado. Ventaja obtenida. Avanzan hacia los Túneles Morlock (Capítulo 6A)."
    },
    "lossOutcome": {
      "title": "DERROTA: DAÑOS GRAVES EN EL SUBSUELO",
      "epilogue": "Juggernaut destroza el suelo del vestíbulo antes de ser repelido, fracturando las cloacas de la ciudad. El impacto despierta a un Venom enfurecido y drogado en las profundidades. Spider-Man 2099 se materializa para evacuar a los héroes heridos.",
      "unlockedHeroes": [
        "spider_2099"
      ],
      "nextChapter": "6B",
      "penalties": "El temblor desató el frenesí de Venom; el combate en el Cap. 6B será subterráneo y claustrofóbico.",
      "bonusText": "Spider-Man 2099 se suma al equipo para entrar a las cloacas (Capítulo 6B)."
    },
    "deployment": {
      "villain": {
        "location": "Xavier Institute",
        "reason": "Juggernaut destroza las paredes del vestíbulo principal a oscuras."
      },
      "hero1": {
        "location": "Xavier Institute",
        "reason": "Storm ilumina los pasillos con chispas de relámpago defensivas."
      },
      "hero2": {
        "location": "The Danger Room",
        "reason": "Jessica Drew guía a los estudiantes mutantes hacia los refugios blindados."
      },
      "hero3": {
        "location": "Hangar Bay",
        "reason": "Cyclops defiende la puerta de las bahías subterráneas del Blackbird."
      }
    }
  },
  {
    "id": "6A",
    "step": 6,
    "act": 2,
    "actTitle": "ACTO II: FUEGO CRUZADO Y LA SOMBRA ALIENÍGENA",
    "title": "Capítulo 6A: La Hora del Simbionte —¿Monstruo o Aliado?",
    "villainId": "venom_villain",
    "assignedHeroSlot1": "spider_2099",
    "assignedHeroSlot2": "miles_morales",
    "assignedHeroSlot3": "beast",
    "squadOptions": [
      "spider_2099",
      "miles_morales",
      "beast",
      "jean_grey"
    ],
    "comicReference": "Venom: Lethal Protector & Spider-Man 2099 (Peter David)",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 5 - VICTORIA)»\nCon un golpe combinado en la Mansión X, el yelmo de Juggernaut fue derribado. Al inspeccionar el arnés cibernético de Marko, Hank McCoy y Spider-Man 2099 descubrieron lecturas biológicas estremecedoras: Osborn utilizó fluido simbiótico extraído de un huésped cautivo para sobrealimentar a Marko. Esas lecturas guían a los héroes hacia las profundidades de los Túneles Morlock: allí, Eddie Brock (Venom) yace en agonía, consumido por toxinas que han vuelto al simbionte salvaje y descontrolado.\n\n«LA CRISIS ACTUAL»\nVenom no es un villano voluntario en esta crisis: fue torturado y modificado genéticamente por Oscorp. Atormentado por el dolor, el simbionte ataca a ciegas derribando tuberías de gas y amenazando a los civiles del metro subterráneo.\n\n«MISIÓN DEL EQUIPO»\nSpider-Man 2099 y Miles Morales deben usar bioelectricidad y frecuencias sónicas calculadas por Beast para purgar el mutágeno sin matar a Eddie Brock, convirtiendo al monstruo en un aliado.",
    "locations": [
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg",
        "startHero2": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
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
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Venom): Inicia en MORLOCK TUNNELS — Venom ruge atrapado entre conductos de vapor rotos.",
      "👤 JORGE (Spider-Man 2099): Inicia en MORLOCK TUNNELS — Miguel utiliza sus garras y sensores sónicos para calibrar la purga.",
      "🌸 ESPOSA (Miles Morales): Inicia en SIMS TOWER — Miles desciende por los huecos del ascensor hacia las cloacas.",
      "⭐ APOYO (Beast, si juega): Inicia en DAILY BUGLE — Hank opera el emisor sónico desde una unidad móvil en la superficie.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Zarcillos Agónicos: Venom ataca a la ubicación más cercana con Civiles, pero las acciones de Ataque de Miles Morales con Bioelectricidad lo aturden impidiendo su movimiento.",
    "events": {
      "initial": {
        "title": "¡RUGIDO EN LAS CLOACAS!",
        "type": "Evento de Inicio",
        "badge": "Terror Subterráneo",
        "text": "Venom se convulsiona por el mutágeno: <strong>Coloca 1 Civil en Morlock Tunnels y 1 en Sims Tower</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Quemen... quemen el dolor! ¡Fuera de nuestra cabeza!\" — Venom"
      },
      "underPressure": {
        "title": "¡DESCARGA DE PURGA BIOELÉCTRICA!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Estabilización",
        "text": "Miles descarga una onda sónica purificadora: <strong>Inflige 2 de daño a Venom y retira 1 Ficha de Amenaza de los Túneles.</strong>",
        "flavor": "Los zarcillos negros humean al disolverse el suero sintético de Osborn."
      },
      "accelerated": {
        "title": "¡FRECUENCIA SÓNICA DE LYLA!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Conexión Mental",
        "text": "Spider-Man 2099 modula el sonido exacto: <strong>Venom queda aturdido y no puede realizar daño en su siguiente turno.</strong>",
        "flavor": "\"¡Lyla encontró la longitud de onda! ¡Resiste, Brock, estamos de tu lado!\" — Spider-Man 2099"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: REDENCIÓN SIMBIÓTICA Y LA PISTA DE GENOSHA!",
      "epilogue": "La purga sónica de 2099 y la bioelectricidad de Miles logran expulsar el mutágeno sintético sin herir de muerte al simbionte. Eddie Brock recupera el control de su cuerpo, con la masa negra envolviéndolo con firmeza protectora. Con voz gutural pero cuerda, Venom ruge la verdad: \"¡Osborn no actuaba solo! ¡El Amo del Magnetismo, Erik Lehnsherr, recibió los cargamentos de biomasa en su santuario de Asteroide M / Genosha creyendo que salvarían a los mutantes del virus Legacy!\". Eddie Brock jura redimirse y luchar junto a ellos. En ese instante, un portal cósmico parpadea y de él cae Peter Porker (Spider-Ham) con un martillo gigante: \"¿Alguien pidió refuerzos de otra dimensión?\". ¡Venom (Héroe) y Spider-Ham se unen al equipo activo!",
      "unlockedHeroes": [
        "venom_hero",
        "spider_ham"
      ],
      "unlockedPerks": [
        "perk_symbiote_tendril"
      ],
      "nextChapter": "7A",
      "bonusText": "Venom (Héroe) y Spider-Ham desbloqueados. Ventaja \"Zarcillo Protector Aliado\" obtenida. Viajan al santuario de Magneto (Capítulo 7A)."
    },
    "lossOutcome": {
      "title": "DERROTA: VENOM ESCAPA MALHERIDO",
      "epilogue": "El simbionte huye por las corrientes subterráneas hacia la bahía, pero en su rastro deja fragmentos celulares con frecuencias electromagnéticas que apuntan directamente a Asteroide M y Genosha. Eddie Brock logra dominar al simbionte a duras penas y regresa para unirse a los héroes, junto al recién llegado Spider-Ham.",
      "unlockedHeroes": [
        "venom_hero",
        "spider_ham"
      ],
      "nextChapter": "7B",
      "penalties": "El enfrentamiento deja secuelas; la incursión a Genosha en el Cap. 7B será hostil y peligrosa.",
      "bonusText": "Venom (Héroe) y Spider-Ham se incorporan a la patrulla para viajar a Genosha (Capítulo 7B)."
    },
    "deployment": {
      "villain": {
        "location": "Morlock Tunnels",
        "reason": "Venom ruge agónico entre los conductos de vapor y las aguas residuales."
      },
      "hero1": {
        "location": "Morlock Tunnels",
        "reason": "Miguel O'Hara utiliza sus garras y sensores sónicos para calibrar la purga."
      },
      "hero2": {
        "location": "Sims Tower",
        "reason": "Miles Morales desciende por los huecos del ascensor hacia las cloacas."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Hank McCoy opera el emisor de sonido médico desde su furgón en la superficie."
      }
    }
  },
  {
    "id": "6B",
    "step": 6,
    "act": 2,
    "actTitle": "ACTO II: FUEGO CRUZADO Y LA SOMBRA ALIENÍGENA",
    "title": "Capítulo 6B: Choque Feral en la Oscuridad (Venom Fuera de Control)",
    "villainId": "venom_villain",
    "assignedHeroSlot1": "spider_2099",
    "assignedHeroSlot2": "miles_morales",
    "assignedHeroSlot3": "beast",
    "squadOptions": [
      "spider_2099",
      "miles_morales",
      "beast",
      "spider_woman"
    ],
    "comicReference": "Spider-Man: Maximum Carnage & Uncanny X-Men",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 5 - DERROTA)»\nJuggernaut arrasó la planta baja de la Mansión X, dañando gravemente las subestaciones subterráneas. El colapso provocó un sismo que fracturó las cloacas y los Túneles Morlock bajo Manhattan. El impacto liberó a Venom de su cámara de contención clandestina, pero el trauma sumió al simbionte en un frenesí homicida.\n\n«LA CRISIS ACTUAL»\nEn la oscuridad total de las cloacas, Venom acecha con zarcillos gigantescos derribando pilares del metro subterráneo. Cuadrillas de rescate civil están atrapadas entre los vagones aplastados.\n\n«MISIÓN DEL EQUIPO»\nSpider-Man 2099 y Miles Morales deben rescatar a los trabajadores del metro y utilizar pulsos eléctricos de alta frecuencia para aturdir al monstruo antes de que el túnel entero se desplome.",
    "locations": [
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg",
        "startHero2": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
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
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Venom): Inicia en MORLOCK TUNNELS — Venom destroza los vagones del metro en la oscuridad.",
      "👤 JORGE (Spider-Man 2099): Inicia en MORLOCK TUNNELS — Miguel utiliza su visión infrarroja para rastrear al monstruo.",
      "🌸 ESPOSA (Miles Morales): Inicia en SIMS TOWER — Miles evacua a los operarios del metro hacia la superficie.",
      "⭐ APOYO (Beast, si juega): Inicia en DAILY BUGLE — Hank prepara el antidoto químico en la superficie.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Pánico Subterráneo: Venom se mueve 1 casilla adicional en sentido horario tras cada BAM si hay algún Civil en los Túneles Morlock.",
    "events": {
      "initial": {
        "title": "¡COLAPSO DE VAGONES!",
        "type": "Evento de Inicio",
        "badge": "Emergencia en Metro",
        "text": "El túnel cruje: <strong>Coloca 1 Civil en Morlock Tunnels y 1 en Midtown High School</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Nadie escapa de la oscuridad! ¡Todos van a pagar!\" — Venom enfurecido"
      },
      "underPressure": {
        "title": "¡DESPEJE DE ESCOMBROS!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Vía Libre",
        "text": "Miles rescata a los obreros: <strong>Los héroes ganan 1 Ficha Comodín y retiran 1 Matón de Morlock Tunnels.</strong>",
        "flavor": "Un puente de telarañas sostiene los techos colapsados permitiendo la huida."
      },
      "accelerated": {
        "title": "¡PULSO NEURO-ELÉCTRICO!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Aturdimiento",
        "text": "Spider-Man 2099 descarga sus garras de energía: <strong>Venom pierde 2 de salud y cae de rodillas exhausto.</strong>",
        "flavor": "\"¡Basta, Brock! ¡Escucha la voz de la razón!\" — Spider-Man 2099"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: TRUCE SUBTERRÁNEA Y LA ALIANZA CON BROCK!",
      "epilogue": "Acorralado y aliviado del dolor por los pulsos de Miguel, Eddie Brock recupera el juicio: \"¡Magneto cree que este mutágeno es el futuro de su pueblo! ¡Tiene las muestras maestras en Asteroide M / Genosha!\". Brock ofrece su poder simbiótico a la causa para enmendar sus actos. En ese momento, Spider-Ham aparece saltando desde una caja de alcantarilla: \"¡Menuda fiesta tienen montada aquí abajo!\". ¡Venom (Héroe) y Spider-Ham se unen formalmente al equipo activo!",
      "unlockedHeroes": [
        "venom_hero",
        "spider_ham"
      ],
      "unlockedPerks": [
        "perk_symbiote_tendril"
      ],
      "nextChapter": "7A",
      "bonusText": "Venom (Héroe) y Spider-Ham desbloqueados. Ventaja obtenida. Viajan hacia el santuario de Magneto (Capítulo 7A)."
    },
    "lossOutcome": {
      "title": "DERROTA: HUIDA CAÓTICA HACIA GENOSHA",
      "epilogue": "Venom escapa hacia el océano, pero deja tras de sí coordenadas que apuntan al reino de Magneto en Genosha. Eddie Brock logra serenarse en las aguas de la bahía y se une al equipo, mientras Spider-Ham llega para aportar su humor y martillo.",
      "unlockedHeroes": [
        "venom_hero",
        "spider_ham"
      ],
      "nextChapter": "7B",
      "penalties": "La incursión a Genosha se realiza sin planes precisos; Magneto estará en guardia máxima en el Cap. 7B.",
      "bonusText": "Venom (Héroe) y Spider-Ham se suman al equipo para la peligrosa misión en Genosha (Capítulo 7B)."
    },
    "deployment": {
      "villain": {
        "location": "Morlock Tunnels",
        "reason": "Venom destroza los vagones del metro sumido en un frenesí homicida."
      },
      "hero1": {
        "location": "Morlock Tunnels",
        "reason": "Spider-Man 2099 utiliza su visión infrarroja para rastrear al monstruo."
      },
      "hero2": {
        "location": "Sims Tower",
        "reason": "Miles Morales evacua a los operarios del metro hacia las avenidas de la superficie."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Hank McCoy prepara el suero neuroestabilizador en la unidad médica."
      }
    }
  },
  {
    "id": "7A",
    "step": 7,
    "act": 3,
    "actTitle": "ACTO III: LA REDENCIÓN DEL CAUDILLO Y LA MÁXIMA MATANZA",
    "title": "Capítulo 7A: La Ley del Más Fuerte en Genosha (Conferencia por la Supervivencia)",
    "villainId": "magneto_villain",
    "assignedHeroSlot1": "venom_hero",
    "assignedHeroSlot2": "spider_ham",
    "assignedHeroSlot3": "cyclops",
    "squadOptions": [
      "venom_hero",
      "spider_ham",
      "cyclops",
      "storm"
    ],
    "comicReference": "X-Men: Magneto Testament & House of M",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 6 - VICTORIA)»\nEn los túneles subterráneos de Manhattan, la purga sónica de Spider-Man 2099 y la bioelectricidad de Miles lograron salvar a Eddie Brock de la muerte. Recuperado y consciente, Venom reveló la escalofriante verdad: Erik Lehnsherr (Magneto) había recibido los cargamentos originales de biomasa en su santuario de Asteroide M / Genosha, engañado por Norman Osborn con la promesa de que la sustancia protegería a los mutantes del virus Legacy y de los Centinelas.\n\n«LA CRISIS ACTUAL»\nVenom (ahora como héroe aliado) y Spider-Ham viajan junto a Cyclops al santuario de Magneto en Genosha para mostrarle los análisis de Beast y apelar a su nobleza antes de que desate una catástrofe global. Sin embargo, Magneto, convencido de que los humanos quieren sabotear su paraíso mutante, despliega sus escudos electromagnéticos de guerra.\n\n«MISIÓN DEL EQUIPO»\nSometer las defensas magnéticas de Erik, desarticular sus lanzas de metal y obligarlo a escuchar la verdad sobre el virus mutagénico de Osborn.",
    "locations": [
      {
        "name": "Asteroid M",
        "img": "./assets/locations/asteroid_m.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Genosha",
        "img": "./assets/locations/genosha.jpg",
        "startHero2": true
      },
      {
        "name": "The Savage Land",
        "img": "./assets/locations/savage_land.jpg"
      },
      {
        "name": "Hangar Bay",
        "img": "./assets/locations/hangar_bay.jpg",
        "startHero3": true
      },
      {
        "name": "Muir Island",
        "img": "./assets/locations/muir_island.jpg"
      },
      {
        "name": "Xavier Institute",
        "img": "./assets/locations/xavier_institute.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Magneto): Inicia en ASTEROID M — Magneto levanta un campo electromagnético en su sala del trono.",
      "👤 JORGE (Venom Héroe): Inicia en ASTEROID M — Eddie salta con zarcillos protectores hacia la plataforma del villano.",
      "🌸 ESPOSA (Spider-Ham): Inicia en GENOSHA — Peter Porker desconcierta a los centinelas acorazados con su mazo toon.",
      "⭐ APOYO (Cyclops, si juega): Inicia en HANGAR BAY — Scott desembarca del Blackbird con los discos de datos científicos.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Campo Electromagnético: La ubicación donde esté Magneto requiere 1 acción de Movimiento adicional para entrar, pero los zarcillos orgánicos de Venom pueden cruzarla sin penalización.",
    "events": {
      "initial": {
        "title": "¡TORMENTA MAGNÉTICA!",
        "type": "Evento de Inicio",
        "badge": "Escudo Férreo",
        "text": "Magneto alza columnas de metal: <strong>Coloca 1 Civil en Asteroid M y 1 en Genosha</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡No permitiré que la arrogancia humana mancille la tierra prometida de mi pueblo!\" — Magneto"
      },
      "underPressure": {
        "title": "¡DISCURSO DE SCOTT Y GOLPE TOON!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Mente Dividida",
        "text": "Spider-Ham arroja una bomba cómica mientras Cyclops proyecta las pruebas: <strong>Magneto pierde 2 de salud y su escudo electromagnético parpadea.</strong>",
        "flavor": "\"¡Mira los análisis, Erik! ¡No es una cura, es un parásito carnívoro!\" — Cyclops"
      },
      "accelerated": {
        "title": "¡ZARCILLO DE CONTENCIÓN!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Desarme Magnético",
        "text": "Venom neutraliza las vigas de metal con su masa simbiótica: <strong>Magneto no puede usar BAM en su siguiente turno.</strong>",
        "flavor": "La sustancia alienígena no ferrosa bloquea los campos de fuerza del caudillo."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: LA REDENCIÓN SOLEMNE DE MAGNETO!",
      "epilogue": "Los escudos de Magneto colapsan y las pruebas holográficas de Beast se despliegan en la sala: el mutágeno K-Gene no estaba diseñado para fortalecer el gen X, sino para mutar a humanos y mutantes en una colmena obediente para Cletus Kasady (Carnage). Horrorizado por haber sido el peón de Osborn, Erik Lehnsherr desciende solemnemente de su trono: \"Charles... tenía razón. He sido cegado por mi ira. No permitiré que esa abominación destruya a mis hermanos\". Magneto jura lealtad a la alianza y entrega los códigos de una célula clandestina en los Muelles de Brooklyn, donde Mystique ha estado cargando los contenedores de Carnage en cargueros navales. Mystique, dándose cuenta de que la vida misma está en juego, pacta un alto al fuego. ¡Magneto (Héroe) y Mystique (Héroe) se unen a la causa!",
      "unlockedHeroes": [
        "magneto_hero",
        "mystique_hero"
      ],
      "unlockedPerks": [
        "perk_magnetic_pulse"
      ],
      "nextChapter": "8A",
      "bonusText": "Magneto (Héroe) y Mystique (Héroe) desbloqueados. Ventaja \"Pulso Magnético Táctico\" obtenida. Avanzan a los Muelles de Brooklyn (Capítulo 8A)."
    },
    "lossOutcome": {
      "title": "DERROTA: MAGNETO SE RETIRA EN CONFLICTO MORAL",
      "epilogue": "Una explosión electromagnética rechaza a los héroes, pero en medio de la contienda un enlace satelital alerta a Magneto: una facción renegada en los Muelles de Brooklyn ya comenzó a dispersar el virus sin su consentimiento. Erik comprende con amargura que fue engañado y ordena una retirada táctica, pactando una tregua armada con los héroes.",
      "unlockedHeroes": [
        "magneto_hero",
        "mystique_hero"
      ],
      "nextChapter": "8B",
      "penalties": "La fortaleza quedó en alerta; la llegada a los muelles en el Cap. 8B será una carrera desesperada contra el reloj.",
      "bonusText": "Magneto y Mystique aceptan colaborar para detener la tragedia en los Muelles de Brooklyn (Capítulo 8B)."
    },
    "deployment": {
      "villain": {
        "location": "Asteroid M",
        "reason": "Magneto levanta un campo electromagnético en su sala del trono."
      },
      "hero1": {
        "location": "Asteroid M",
        "reason": "Venom salta con zarcillos protectores hacia la plataforma del villano."
      },
      "hero2": {
        "location": "Genosha",
        "reason": "Spider-Ham desconcierta a los centinelas acorazados con su mazo toon."
      },
      "hero3": {
        "location": "Hangar Bay",
        "reason": "Cyclops desembarca del Blackbird con los discos de datos científicos de Beast."
      }
    }
  },
  {
    "id": "7B",
    "step": 7,
    "act": 3,
    "actTitle": "ACTO III: LA REDENCIÓN DEL CAUDILLO Y LA MÁXIMA MATANZA",
    "title": "Capítulo 7B: Incursión Hostil en Genosha (Choque con el Caudillo)",
    "villainId": "magneto_villain",
    "assignedHeroSlot1": "venom_hero",
    "assignedHeroSlot2": "spider_ham",
    "assignedHeroSlot3": "cyclops",
    "squadOptions": [
      "venom_hero",
      "spider_ham",
      "cyclops",
      "spider_2099"
    ],
    "comicReference": "X-Men: Magneto Rex & House of M",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 6 - DERROTA)»\nVenom escapó malherido hacia el mar tras una batalla brutal en las cloacas, pero en su retirada dejó fragmentos de tejido adheridos a receptores con el sello de la Hermandad. Cerebro confirmó lo peor: Magneto movilizó sus fuerzas en Genosha, creyendo que los héroes atacaron a Venom para arrebatarle una supuesta cura genética para su pueblo.\n\n«LA CRISIS ACTUAL»\nLa fortaleza de Genosha está en estado de máxima alerta bélica. Misiles magnéticos y torretas de defensa rodean la isla mientras Magneto se prepara para defender su santuario a toda costa.\n\n«MISIÓN DEL EQUIPO»\nInfiltrarse en medio del fuego antiaéreo, desactivar las baterías de defensa y derribar la barrera de Erik antes de que inicie un contraataque a escala mundial.",
    "locations": [
      {
        "name": "Asteroid M",
        "img": "./assets/locations/asteroid_m.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Genosha",
        "img": "./assets/locations/genosha.jpg",
        "startHero2": true
      },
      {
        "name": "The Savage Land",
        "img": "./assets/locations/savage_land.jpg"
      },
      {
        "name": "Hangar Bay",
        "img": "./assets/locations/hangar_bay.jpg",
        "startHero3": true
      },
      {
        "name": "Muir Island",
        "img": "./assets/locations/muir_island.jpg"
      },
      {
        "name": "Xavier Institute",
        "img": "./assets/locations/xavier_institute.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Magneto): Inicia en ASTEROID M — Magneto concentra el magnetismo terrestre en su estación orbital.",
      "👤 JORGE (Venom Héroe): Inicia en ASTEROID M — Eddie trepa por los cascos metálicos del exterior de la nave.",
      "🌸 ESPOSA (Spider-Ham): Inicia en GENOSHA — Peter Porker distrae a las patrullas con cáscaras de banana cómicas.",
      "⭐ APOYO (Cyclops, si juega): Inicia en HANGAR BAY — Scott dirige la maniobra de aterrizaje forzoso del jet.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Baterías Antiaéreas: Los Héroes no pueden usar cartas con acciones Heroicas mientras haya cartas de Amenaza sin resolver en Hangar Bay.",
    "events": {
      "initial": {
        "title": "¡BARRERA ELECTROMAGNÉTICA!",
        "type": "Evento de Inicio",
        "badge": "Fuego Defensivo",
        "text": "Las torretas abren fuego: <strong>Coloca 1 Civil en Asteroid M y 1 en Hangar Bay</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Todo invasor será aplastado por el metal de este santuario!\" — Magneto"
      },
      "underPressure": {
        "title": "¡CORTOCIRCUITO EN LA RED!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Desarme Masivo",
        "text": "Venom revienta los generadores: <strong>Los héroes retiran las amenazas antiaéreas e infligen 2 de daño a Magneto.</strong>",
        "flavor": "Los zarcillos estrangulan las turbinas de las baterías de plasma."
      },
      "accelerated": {
        "title": "¡IMPACTO DE MAZO TOON!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Humor Demoledor",
        "text": "Spider-Ham golpea el casco de Magneto con un martillo gigante: <strong>Magneto queda aturdido y no puede atacar en su siguiente turno.</strong>",
        "flavor": "\"¡BONG! ¡Eso le pasa por no escuchar las noticias, don Metales!\" — Spider-Ham"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: TREGUA ARMADA Y LA VERDAD AL DESCUBIERTO!",
      "epilogue": "Con el generador orbital destrozado, Magneto cae de rodillas mientras las pantallas de la estación muestran la traición de la Hermandad: en los Muelles de Brooklyn, Mystique ha perdido el control del cargamento y el virus de Carnage se está multiplicando sin freno. Horrorizado, Magneto reconoce su error: \"He sido un insensato. Detengamos esto juntos antes de que el mundo perezca\". ¡Magneto y Mystique se unen al bando de los héroes!",
      "unlockedHeroes": [
        "magneto_hero",
        "mystique_hero"
      ],
      "unlockedPerks": [
        "perk_magnetic_pulse"
      ],
      "nextChapter": "8A",
      "bonusText": "Magneto (Héroe) y Mystique (Héroe) desbloqueados. Ventaja obtenida. Se dirigen a los Muelles de Brooklyn (Capítulo 8A)."
    },
    "lossOutcome": {
      "title": "DERROTA: FUGA DE LAS BIO-ARMAS HACIA BROOKLYN",
      "epilogue": "La batalla termina en tablas cuando una transmisión urgente interrumpe el combate: un buque cargado con las bio-armas acaba de zarpar hacia Nueva York sin órdenes. Magneto y los héroes declaran una tregua de emergencia para volar juntos a los Muelles de Brooklyn.",
      "unlockedHeroes": [
        "magneto_hero",
        "mystique_hero"
      ],
      "nextChapter": "8B",
      "penalties": "El retraso permite que el virus comience a infectar los muelles en el Cap. 8B.",
      "bonusText": "Magneto y Mystique se incorporan a la fuerza de asalto de los muelles (Capítulo 8B)."
    },
    "deployment": {
      "villain": {
        "location": "Asteroid M",
        "reason": "Magneto concentra el magnetismo terrestre en su estación orbital."
      },
      "hero1": {
        "location": "Asteroid M",
        "reason": "Venom trepa por los cascos metálicos exteriores de la nave espacial."
      },
      "hero2": {
        "location": "Genosha",
        "reason": "Spider-Ham distrae a las patrullas mutantes con trucos y mazos cómicos."
      },
      "hero3": {
        "location": "Hangar Bay",
        "reason": "Cyclops coordina el aterrizaje táctico de la nave para la ofensiva."
      }
    }
  },
  {
    "id": "8A",
    "step": 8,
    "act": 3,
    "actTitle": "ACTO III: LA REDENCIÓN DEL CAUDILLO Y LA MÁXIMA MATANZA",
    "title": "Capítulo 8A: Infiltración Silenciosa en los Muelles de Brooklyn",
    "villainId": "mystique_villain",
    "assignedHeroSlot1": "wolverine",
    "assignedHeroSlot2": "ghost_spider",
    "assignedHeroSlot3": "black_cat",
    "squadOptions": [
      "wolverine",
      "ghost_spider",
      "black_cat",
      "spider_ham"
    ],
    "comicReference": "Wolverine: Weapon X & Spider-Man: Maximum Carnage",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 7 - VICTORIA)»\nAnte las pruebas y el valor de los héroes, el orgullo de Magneto se quebró en su trono de Asteroide M. Al comprender que Norman Osborn lo manipuló para gestar un arma de exterminio simbiótico, el Amo del Magnetismo bajó los brazos con solemnidad: «Xavier tenía razón... casi condeno a nuestra especie». Con su redención en marcha, Erik entregó a los héroes los códigos de una instalación encubierta en los Muelles de Brooklyn, donde una célula renegada de Mystique está cargando los contenedores simbióticos en barcazas hacia el océano.\n\n«LA CRISIS ACTUAL»\nWolverine y Ghost-Spider lideran la operación encubierta de asalto nocturno en los muelles. Las barcazas están listas para zarpar con detonadores temporizados para dispersar las esporas carmesíes.\n\n«MISIÓN DEL EQUIPO»\nInfiltrarse en los almacenes portuarios, cortar los amarres de las barcazas, desactivar los explosivos navales y capturar a Mystique antes de la ignición.",
    "locations": [
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg",
        "startHero2": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg",
        "startHero3": true
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
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Mystique): Inicia en BROOKLYN BRIDGE — Mystique supervisa el embarque de los contenedores en los muelles.",
      "👤 JORGE (Wolverine): Inicia en BROOKLYN BRIDGE — Logan avanza por debajo de las grúas portuarias en sigilo.",
      "🌸 ESPOSA (Ghost-Spider): Inicia en SIMS TOWER — Gwen Stacy vigila las barcazas desde los mástiles de carga.",
      "⭐ APOYO (Black Cat, si juega): Inicia en OSCORP TOWER — Felicia sabotea los sistemas de control de las compuertas navales.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Barcazas con Temporizador: Si una barcaza (Amenaza) no se desactiva antes de que Mystique use su 2º BAM, coloca 1 Matón en cada ubicación adyacente (sin Desbordamiento).",
    "events": {
      "initial": {
        "title": "¡MOTORES DE CARGA EN MARCHA!",
        "type": "Evento de Inicio",
        "badge": "Operación Encubierta",
        "text": "Los cargueros preparan la partida: <strong>Coloca 1 Civil en Brooklyn Bridge y 1 en Sims Tower</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Aseguren las bodegas! ¡Estas muestras valen más que todas sus vidas juntas!\" — Mystique"
      },
      "underPressure": {
        "title": "¡CABLES DE AMARRE SECCIONADOS!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Sabotaje Perfecto",
        "text": "Logan corta las amarras: <strong>Los héroes retiran 1 Ficha de Amenaza de los muelles e infligen 2 de daño a Mystique.</strong>",
        "flavor": "Tres tajos de adamantium liberan los cabos, dejando las barcazas a la deriva."
      },
      "accelerated": {
        "title": "¡BARRIDO ACROBÁTICO DE GWEN!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Detonadores Anulados",
        "text": "Gwen Stacy neutraliza el cuadro eléctrico: <strong>Mystique pierde 2 de salud y se rinde.</strong>",
        "flavor": "\"¡Fin del embarque, Raven! ¡Tu barquito no va a ninguna parte!\" — Ghost-Spider"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: PUERTO ASEGURADO PERO LA BESTIA DESPIERTA!",
      "epilogue": "La infiltración en los muelles fue impecable: las cargas navales fueron desactivadas y Mystique fue sometida. Sin embargo, en el último contenedor los sellos criogénicos estaban rotos: ¡Cletus Kasady ya había absorbido la cepa alfa, transformándose en CARNAGE! Y para ganar tiempo, Kasady infectó el exoesqueleto de Rhino con zarcillos simbióticos gigantescos. La bestia blindada ruge ahora en el centro de Manhattan destruyendo barricadas. Magneto (Héroe) llega en auxilio de la alianza para detener al titán.",
      "unlockedPerks": [
        "perk_cartoon_mallet"
      ],
      "nextChapter": "9A",
      "bonusText": "Ventaja \"Martillo Toon de Spider-Ham\" obtenida. Magneto (Héroe) se une a la defensa en Manhattan (Capítulo 9A)."
    },
    "lossOutcome": {
      "title": "DERROTA: EXPLOSIÓN EN LOS MUELLES Y RUINAS",
      "epilogue": "Una detonación en el carguero tiñe el cielo de rojo y libera a un Rhino potenciado con fluidos simbióticos que embiste hacia Times Square derribando edificios. Los héroes deben replegarse a Manhattan para una defensa de emergencia.",
      "nextChapter": "9B",
      "penalties": "El humo tóxico cubre la ciudad; el combate en el Cap. 9B comenzará con barricadas rotas.",
      "bonusText": "La alianza se reorganiza en Manhattan para contener a la bestia (Capítulo 9B)."
    },
    "deployment": {
      "villain": {
        "location": "Brooklyn Bridge",
        "reason": "Mystique supervisa el embarque de los contenedores en los muelles clandestinos."
      },
      "hero1": {
        "location": "Brooklyn Bridge",
        "reason": "Logan avanza por debajo de las grúas portuarias en absoluto sigilo."
      },
      "hero2": {
        "location": "Sims Tower",
        "reason": "Gwen Stacy vigila las barcazas desde los mástiles de carga superiores."
      },
      "hero3": {
        "location": "Oscorp Tower",
        "reason": "Felicia Hardy sabotea los controles hidráulicos de las esclusas navales."
      }
    }
  },
  {
    "id": "8B",
    "step": 8,
    "act": 3,
    "actTitle": "ACTO III: LA REDENCIÓN DEL CAUDILLO Y LA MÁXIMA MATANZA",
    "title": "Capítulo 8B: Asalto Clandestino de Emergencia a los Muelles",
    "villainId": "mystique_villain",
    "assignedHeroSlot1": "wolverine",
    "assignedHeroSlot2": "ghost_spider",
    "assignedHeroSlot3": "black_cat",
    "squadOptions": [
      "wolverine",
      "ghost_spider",
      "black_cat",
      "beast"
    ],
    "comicReference": "Maximum Carnage & Wolverine: Blood Hungry",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 7 - DERROTA)»\nEl choque en Asteroide M culminó en una onda de choque electromagnética que dispersó a los héroes. Aunque Magneto mantuvo su posición, las alarmas de su propia fortaleza le alertaron de una traición interna: una facción renegada liderada por Mystique desobedeció sus órdenes y trasladó las reservas de bio-armas a los Muelles de Brooklyn para venderlas al mejor postor. Aterrado por la pérdida de control, Magneto envía una señal abierta a los héroes.\n\n«LA CRISIS ACTUAL»\nSin tiempo para planear y con el equipo exhausto, Wolverine y Ghost-Spider asaltan los muelles a toda velocidad para impedir que los barcos zarpen con el mutágeno hacia alta mar.\n\n«MISIÓN DEL EQUIPO»\nRomper el cerco de mercenarios en los muelles, evitar que el buque principal escape y neutralizar a Mystique antes de que detone las cargas de encubrimiento.",
    "locations": [
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg",
        "startHero2": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
      },
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startHero3": true
      },
      {
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg"
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Mystique): Inicia en BROOKLYN BRIDGE — Mystique apura la partida de las barcazas armadas.",
      "👤 JORGE (Wolverine): Inicia en BROOKLYN BRIDGE — Logan asalta la rampa de carga rompiendo las defensas.",
      "🌸 ESPOSA (Ghost-Spider): Inicia en SIMS TOWER — Gwen Stacy intercepta a los tiradores de las grúas.",
      "⭐ APOYO (Black Cat, si juega): Inicia en DAILY BUGLE — Felicia hackea los radares portuarios desde el centro.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Fuego Portuario: Mystique coloca 1 Matón en su ubicación cada vez que un Héroe sufra daño (solo si hay espacio libre; sin Desbordamiento).",
    "events": {
      "initial": {
        "title": "¡SIRENAS EN EL EMBARCADERO!",
        "type": "Evento de Inicio",
        "badge": "Asalto Frontal",
        "text": "Los mercenarios abren fuego: <strong>Coloca 1 Civil en Brooklyn Bridge y 1 en Daily Bugle</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Mátenlos a todos! ¡El cargamento debe zarpar cueste lo que cueste!\" — Mystique"
      },
      "underPressure": {
        "title": "¡ASALTO DE GARRAS FURIBUNDAS!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Apertura Heroica",
        "text": "Logan derriba las barricadas: <strong>Inflige 2 de daño a Mystique y retira 1 Matón de Brooklyn Bridge.</strong>",
        "flavor": "Un rugido feral atraviesa la niebla marina mientras el metal de las puertas cede."
      },
      "accelerated": {
        "title": "¡CONTENEDORES ENCADENADOS!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Frenada en Seco",
        "text": "Gwen teje una red que bloquea el timón del barco: <strong>Mystique no puede escapar y sufre 2 de daño.</strong>",
        "flavor": "\"¡Tu barco no va a ninguna parte, Raven!\" — Ghost-Spider"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: CARGAMENTO FRENADO EN EL LÍMITE!",
      "epilogue": "Ghost-Spider y Logan logran encallar el buque mercante contra el muelle, pero de las entrañas del barco surge un colosal rugido: Aleksei Sytsevich (Rhino) emerge modificado con zarcillos simbióticos rojos que cubren su armadura. Kasady ha escapado hacia el centro de la ciudad y Rhino es su punta de lanza. Magneto (Héroe) se presenta en el puerto listo para luchar junto a los héroes en Manhattan.",
      "nextChapter": "9A",
      "bonusText": "Victoria táctica. Magneto (Héroe) se une a la defensa en Manhattan (Capítulo 9A)."
    },
    "lossOutcome": {
      "title": "DERROTA: EXPLOSIÓN QUÍMICA Y MARCHA DE LA BESTIA",
      "epilogue": "El buque estalla y de las llamas brota un Rhino gigante poseído por el simbionte carmesí. La bestia avanza hacia Manhattan derribando puentes. La alianza debe replegarse urgentemente para una última defensa perimetral.",
      "nextChapter": "9B",
      "penalties": "El centro de la ciudad está desprotegido; en el Cap. 9B las defensas comenzarán colapsadas.",
      "bonusText": "La historia avanza hacia el choque perimetral en Manhattan (Capítulo 9B)."
    },
    "deployment": {
      "villain": {
        "location": "Brooklyn Bridge",
        "reason": "Mystique apura la partida de las barcazas con las bio-armas."
      },
      "hero1": {
        "location": "Brooklyn Bridge",
        "reason": "Logan asalta la rampa de carga rompiendo las líneas enemigas."
      },
      "hero2": {
        "location": "Sims Tower",
        "reason": "Gwen Stacy intercepta a los francotiradores apostados en las grúas."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Felicia Hardy hackea los radares portuarios desde las oficinas del centro."
      }
    }
  },
  {
    "id": "9A",
    "step": 9,
    "act": 3,
    "actTitle": "ACTO III: LA REDENCIÓN DEL CAUDILLO Y LA MÁXIMA MATANZA",
    "title": "Capítulo 9A: El Frente Unido en Manhattan (Defensa Perimetral con Iniciativa)",
    "villainId": "rhino",
    "assignedHeroSlot1": "magneto_hero",
    "assignedHeroSlot2": "spider_woman",
    "assignedHeroSlot3": "jean_grey",
    "squadOptions": [
      "magneto_hero",
      "spider_woman",
      "jean_grey",
      "beast"
    ],
    "comicReference": "Avengers vs X-Men & Maximum Carnage",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 8 - VICTORIA)»\nLa infiltración en los muelles fue un éxito rotundo: los detonadores navales fueron desactivados y Mystique quedó acorralada. Sin embargo, su captura destapó el horror definitivo: un contenedor maestro ya había sido abierto. El asesino convicto Cletus Kasady absorbió la cepa madre. Al fusionarse el simbionte con su propia sangre psicópata, nació el monstruo supremo: ¡CARNAGE, una entidad carmesí de puro sadismo capaz de transformar sus brazos en guadañas y cuchillas afiladas! Para blindar su ascensión, Kasady inyectó los restos de la masa mutagénica en Rhino, transformándolo en una colosal bestia acorazada con zarcillos simbióticos de choque.\n\n«LA CRISIS ACTUAL»\nCon Manhattan en llamas, Magneto (ahora como Héroe y protector) se materializa junto a Spider-Woman para levantar un frente defensivo y derribar al titán antes de que alcance la torre central.\n\n«MISIÓN DEL EQUIPO»\nMagneto utiliza su control ferroso para aplastar las placas blindadas de Rhino, mientras Spider-Woman y Jean Grey disuelven los zarcillos orgánicos para despejar el camino hacia el Gran Final.",
    "locations": [
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg",
        "startHero2": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg",
        "startHero3": true
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Rhino Simbiótico): Inicia en DAILY BUGLE — Rhino embiste con cuernos simbióticos que rompen el asfalto.",
      "👤 JORGE (Magneto Héroe): Inicia en DAILY BUGLE — Erik levanta una barrera de automóviles y vigas de acero.",
      "🌸 ESPOSA (Spider-Woman): Inicia en MIDTOWN HIGH SCHOOL — Jessica dispara rayos venenosos desde las azoteas.",
      "⭐ APOYO (Jean Grey, si juega): Inicia en SIMS TOWER — Jean protege a las cuadrillas de rescate con escudos mentales.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Armadura Ferro-Simbiótica: Magneto puede usar cartas de Ataque a 1 ubicación de distancia contra Rhino gracias a su control magnético de la armadura del villano.",
    "events": {
      "initial": {
        "title": "¡LA BESTIA DEL APOCALIPSIS!",
        "type": "Evento de Inicio",
        "badge": "Embestida Colosal",
        "text": "Rhino ruge envuelto en masa carmesí: <strong>Coloca 1 Civil en Daily Bugle y 1 en Midtown High School</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Carnage me dio el poder supremo! ¡Nadie me frena esta vez!\" — Rhino Simbiótico"
      },
      "underPressure": {
        "title": "¡CONTRACCIÓN MAGNÉTICA DE ERIK!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Poder Supremo",
        "text": "Magneto estruja el exoesqueleto de Aleksei: <strong>Inflige 2 de daño a Rhino e inhabilita su siguiente BAM.</strong>",
        "flavor": "\"¡Tu armadura te pertenecía a ti, pero el metal responde a mí!\" — Magneto"
      },
      "accelerated": {
        "title": "¡DESINTEGRACIÓN DE ZARCILLOS!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Golpe de Gracia",
        "text": "Spider-Woman y Jean disuelven el tejido alienígena: <strong>Rhino pierde 2 de salud y cae de bruces contra la avenida.</strong>",
        "flavor": "Los rayos bioeléctricos despojan a Aleksei del parásito carmesí."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: EL ARIETE DERRIBADO Y ACCESO LIBRE A LA TORRE!",
      "epilogue": "Con una demostración sobrehumana de magnetismo y bioelectricidad, Magneto y Spider-Woman despojan a Rhino de su armadura y lo derriban en el asfalto. El perímetro de Manhattan queda asegurado. Sin embargo, en la cima de Sims Tower, la masa roja de Carnage ha cubierto el cielo de Manhattan. Cletus Kasady ríe entre relámpagos carmesíes. Peter Parker (Spider-Man) regresa al frente junto a Storm y Magneto para el choque final por el destino del planeta. ¡Es la hora de la Máxima Carnage!",
      "nextChapter": "10A",
      "bonusText": "¡Acceso con iniciativa al Gran Final (Capítulo 10A)! La alianza enfrenta a Carnage con la moral al máximo."
    },
    "lossOutcome": {
      "title": "DERROTA: BARRICADAS ROTAS Y ASALTO DESESPERADO",
      "epilogue": "Rhino derriba las barreras de metal y aplasta las defensas antes de sucumbir a sus propias heridas. Aunque la bestia cae, el camino queda en ruinas y Carnage completa la infección de los satélites de Sims Tower. Los héroes avanzan heridos y sin aliento hacia la torre central en una última resistencia desesperada.",
      "nextChapter": "10B",
      "penalties": "La ciudad arde; en el Cap. 10B Carnage comenzará con mayor propagación de infección.",
      "bonusText": "Avanzan a la Última Resistencia Desesperada contra Carnage (Capítulo 10B)."
    },
    "deployment": {
      "villain": {
        "location": "Daily Bugle",
        "reason": "Rhino embiste con cuernos simbióticos partiendo el asfalto de la avenida."
      },
      "hero1": {
        "location": "Daily Bugle",
        "reason": "Magneto levanta una barrera impenetrable de vigas de acero y coches."
      },
      "hero2": {
        "location": "Midtown High School",
        "reason": "Spider-Woman dispara rayos venenosos desde las azoteas superiores."
      },
      "hero3": {
        "location": "Sims Tower",
        "reason": "Jean Grey protege a las cuadrillas de rescate de los escombros voladores."
      }
    }
  },
  {
    "id": "9B",
    "step": 9,
    "act": 3,
    "actTitle": "ACTO III: LA REDENCIÓN DEL CAUDILLO Y LA MÁXIMA MATANZA",
    "title": "Capítulo 9B: Ruptura de Barricadas en Manhattan (Rhino Simbiótico Desatado)",
    "villainId": "rhino",
    "assignedHeroSlot1": "magneto_hero",
    "assignedHeroSlot2": "spider_woman",
    "assignedHeroSlot3": "jean_grey",
    "squadOptions": [
      "magneto_hero",
      "spider_woman",
      "jean_grey",
      "cyclops"
    ],
    "comicReference": "Maximum Carnage & X-Men: Mutant Genesis",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 8 - DERROTA)»\nEl asalto a los muelles derivó en una serie de explosiones en cadena que incendiaron los almacenes portuarios. Del fuego emergió la pesadilla: Cletus Kasady consumió la cepa mutagénica completa, renaciendo como CARNAGE: un simbionte carmesí sediento de caos absoluto que fusionó su tejido con la sangre de su huésped. En su estela de caos, dotó a Rhino de una armadura bio-simbiótica viviente que arrasa las barricadas policiales en Midtown Manhattan.\n\n«LA CRISIS ACTUAL»\nLas sirenas de evacuación civil suenan sin descanso. Magneto desciende de los cielos como redentor aliado para unir fuerzas con Spider-Woman e intentar frenar a la bestia antes de que Carnage alcance la cima de Sims Tower.\n\n«MISIÓN DEL EQUIPO»\nEvacuar a los civiles atrapados bajo los escombros de Times Square y contener las embestidas de Rhino a través de campos de fuerza y rayos psíquicos.",
    "locations": [
      {
        "name": "Daily Bugle",
        "img": "./assets/locations/daily_bugle.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Midtown High School",
        "img": "./assets/locations/midtown_high.jpg",
        "startHero2": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg"
      },
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg",
        "startHero3": true
      },
      {
        "name": "Central Park",
        "img": "./assets/locations/central_park.jpg"
      },
      {
        "name": "Brooklyn Bridge",
        "img": "./assets/locations/brooklyn_bridge.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO (Rhino Simbiótico): Inicia en DAILY BUGLE — Rhino derriba los letreros luminosos de la avenida.",
      "👤 JORGE (Magneto Héroe): Inicia en DAILY BUGLE — Erik contiene la caída de los rascacielos con energía magnética.",
      "🌸 ESPOSA (Spider-Woman): Inicia en MIDTOWN HIGH SCHOOL — Jessica evacua los refugios subterráneos.",
      "⭐ APOYO (Jean Grey, si juega): Inicia en SIMS TOWER — Jean dispersa las esquirlas con telequinesis.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Furia Ciega: Rhino embiste 1 casilla adicional en sentido horario tras cada BAM si no hay Héroes en su ubicación.",
    "events": {
      "initial": {
        "title": "¡TERREMOTO EN MIDTOWN!",
        "type": "Evento de Inicio",
        "badge": "Caos Urbano",
        "text": "La avenida se quiebra: <strong>Coloca 1 Civil en Daily Bugle y 1 en Oscorp Tower</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Nadie va a salvar esta ciudad de la marea roja!\" — Rhino"
      },
      "underPressure": {
        "title": "¡ESCUDO DE HIERRO MAGNÉTICO!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Defensa Infranqueable",
        "text": "Magneto detiene la embestida en seco: <strong>Inflige 2 de daño a Rhino y retira 1 Matón de la avenida.</strong>",
        "flavor": "Un muro de toneladas de acero frena los cuernos de la bestia a centímetros de los civiles."
      },
      "accelerated": {
        "title": "¡SOBRECARGA VENENOSA TOTAL!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Parálisis Masiva",
        "text": "Spider-Woman impacta en el centro nervioso de Aleksei: <strong>Rhino queda paralizado y no puede moverse en su siguiente turno.</strong>",
        "flavor": "La bioelectricidad desactiva los zarcillos simbióticos por completo."
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA: EL FRENTE SE SOSTIENE A DURAS PENAS!",
      "epilogue": "Con un sobreesfuerzo agónico, Magneto y Spider-Woman doblegan a Rhino y salvan a los últimos civiles de Midtown. Pero en lo alto de Sims Tower, la luna se tiñe de carmesí: Carnage ha mutado por completo y su reinado de terror está por desatarse. Peter Parker y Storm llegan volando para la batalla definitiva.",
      "nextChapter": "10A",
      "bonusText": "Victoria heroica. Avanzan al Gran Final de la campaña (Capítulo 10A)."
    },
    "lossOutcome": {
      "title": "DERROTA: LA CIUDAD CAE ANTE EL SIMBIONTE",
      "epilogue": "Rhino aplasta las últimas líneas antes de desplomarse, dejando Manhattan abierta para Carnage. Cletus Kasady ríe desde la torre más alta mientras hordas de zarcillos rojos caen del cielo. Con las fuerzas al límite, la alianza avanza hacia su última resistencia desesperada.",
      "nextChapter": "10B",
      "penalties": "La marea roja cubre la ciudad; el combate final en el Cap. 10B será agónico y despiadado.",
      "bonusText": "Avanzan a la Última Resistencia Desesperada en Sims Tower (Capítulo 10B)."
    },
    "deployment": {
      "villain": {
        "location": "Daily Bugle",
        "reason": "Rhino derriba los letreros luminosos de la avenida en furia ciega."
      },
      "hero1": {
        "location": "Daily Bugle",
        "reason": "Magneto sostiene la caída de los rascacielos con energía magnética."
      },
      "hero2": {
        "location": "Midtown High School",
        "reason": "Spider-Woman evacua los refugios subterráneos escolares."
      },
      "hero3": {
        "location": "Sims Tower",
        "reason": "Jean Grey dispersa las esquirlas de vidrio con telequinesis pura."
      }
    }
  },
  {
    "id": "10A",
    "step": 10,
    "act": 3,
    "actTitle": "ACTO III: LA REDENCIÓN DEL CAUDILLO Y LA MÁXIMA MATANZA",
    "title": "Capítulo 10A: GRAN FINAL — MAXIMA MATANZA (El Golpe Maestro de la Alianza)",
    "villainId": "carnage",
    "assignedHeroSlot1": "spider_man",
    "assignedHeroSlot2": "storm",
    "assignedHeroSlot3": "magneto_hero",
    "squadOptions": [
      "spider_man",
      "storm",
      "magneto_hero",
      "wolverine"
    ],
    "comicReference": "Maximum Carnage (Tom DeFalco & Mark Bagley) & Uncanny X-Men",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 9 - VICTORIA)»\n¡El frente coordinado de la alianza logró abatir al titánico Rhino en una demostración asombrosa de poder magnético y bioeléctrico! Pero en lo alto de Sims Tower, la masa carmesí de Carnage cubre el cielo de Manhattan. Cletus Kasady ríe mientras sus zarcillos infectan la red de antenas de telecomunicaciones, buscando convertir a cada habitante de la ciudad en un huésped voraz.\n\n«LA CRISIS FINAL»\nPeter Parker (Spider-Man), Storm y Magneto unen sus fuerzas en la misión definitiva: un ataque coordinado de redes sónicas, relámpagos celestiales y campos electromagnéticos para disolver el núcleo simbiótico y salvar al mundo de la Máxima Mutación.\n\n«MISIÓN DEL EQUIPO»\nSometer a Carnage en la azotea de Sims Tower, proteger a los últimos civiles y purgar la infección simbiótica antes de que consuma el planeta.",
    "locations": [
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg",
        "startHero2": true
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
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg"
      },
      {
        "name": "Asteroid M",
        "img": "./assets/locations/asteroid_m.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO FINAL (Carnage): Inicia en SIMS TOWER — Kasady infecta la aguja de telecomunicaciones en la cima de la torre.",
      "👤 JORGE (Spider-Man): Inicia en SIMS TOWER — Peter se balancea entre los zarcillos carmesíes buscando el núcleo del simbionte.",
      "🌸 ESPOSA (Storm): Inicia en OSCORP TOWER — Ororo desata una tormenta de relámpagos de alta tensión desde los cielos.",
      "⭐ APOYO (Magneto Héroe, si juega): Inicia en DAILY BUGLE — Erik pulveriza los emisores de radio para aislar la señal del villano.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Marea Carmesí: Carnage ataca con letalidad despiadada, pero los relámpagos de Storm y las redes de Spider-Man reducen a la mitad el daño que inflige si están en la misma casilla.",
    "events": {
      "initial": {
        "title": "¡EL CIELO ENROJECE SOBRE NUEVA YORK!",
        "type": "Evento de Inicio",
        "badge": "Apocalipsis Simbiótico",
        "text": "Carnage desata zarcillos gigantes: <strong>Coloca 1 Civil en Sims Tower y 1 en Daily Bugle</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Se acabó el orden! ¡Se acabó la paz! ¡ESTA CIUDAD ES DE MATANZA!\" — Carnage"
      },
      "underPressure": {
        "title": "¡TORMENTA ELÉCTRICA PURIFICADORA!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Luz en las Sombras",
        "text": "Ororo descarga un trueno celestial: <strong>Inflige 2 de daño directo a Carnage y retira 1 Ficha de Amenaza de Sims Tower.</strong>",
        "flavor": "Los relámpagos queman el tejido carmesí, arrancando aullidos de dolor a Kasady."
      },
      "accelerated": {
        "title": "¡PULSO COMBINADO MAGNÉTICO-SÓNICO!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "El Golpe Maestro",
        "text": "Magneto y Spider-Man canalizan las frecuencias sónicas: <strong>Carnage pierde 3 de salud inmediatamente.</strong>",
        "flavor": "\"¡Por cada inocente que intentaste quebrar, Kasady! ¡SE ACABÓ!\" — Spider-Man"
      }
    },
    "winOutcome": {
      "title": "¡VICTORIA ABSOLUTA: EL TRIUNFO DE LA ALIANZA MUTANTE-ARÁCNIDA!",
      "epilogue": "¡EL MUNDO ESTÁ A SALVO! Con una sincronización perfecta que quedará grabada en la historia de los cómics, Spider-Man dispara una red de condensadores sónicos mientras Storm canaliza un rayo descomunal a través de la cúpula magnética forjada por Magneto. El simbionte carmesí se desintegra en cenizas humeantes, dejando a Cletus Kasady inconsciente y enjaulado en titanio. El amanecer rompe sobre Manhattan: en las calles, humanos y mutantes celebran juntos el fin de la pesadilla. Magneto contempla la ciudad en silencio desde la azotea del Daily Bugle, asintiendo con orgullo hacia Spider-Man y los X-Men: \"Charles... hoy tus muchachos me enseñaron lo que significa ser un verdadero protector\". ¡La campaña MÁXIMA MUTACIÓN ha sido completada con gloria eterna!",
      "bonusText": "¡CAMPAÑA COMPLETADA CON VICTORIA TOTAL! Has derrotado a la Máxima Mutación y forjado la legendaria alianza."
    },
    "lossOutcome": {
      "title": "HEROICA RESISTENCIA Y SACRIFICIO LEGENDARIO",
      "epilogue": "A pesar de una resistencia épica que hizo temblar los cielos de Manhattan, la marea simbiótica de Carnage logra sobrecargar las defensas. Pero en el último aliento, Magneto y Storm levantan un domo electromagnético final que permite a Spider-Man evacuar a miles de supervivientes hacia Westchester y la Tierra Salvaje. La ciudad cayó, pero la llama de la resistencia arde con más fuerza que nunca. Algún día volverán para reconquistar Nueva York.",
      "bonusText": "Fin de campaña con desenlace agridulce: Los héroes resistieron hasta el final y salvaron a la humanidad."
    },
    "deployment": {
      "villain": {
        "location": "Sims Tower",
        "reason": "Kasady infecta la aguja de telecomunicaciones en la cima de Sims Tower."
      },
      "hero1": {
        "location": "Sims Tower",
        "reason": "Spider-Man se balancea entre los zarcillos carmesíes buscando el núcleo del simbionte."
      },
      "hero2": {
        "location": "Oscorp Tower",
        "reason": "Storm desata una tormenta de relámpagos de alta tensión desde los cielos."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Magneto pulveriza los emisores de radio para aislar la señal del villano."
      }
    }
  },
  {
    "id": "10B",
    "step": 10,
    "act": 3,
    "actTitle": "ACTO III: LA REDENCIÓN DEL CAUDILLO Y LA MÁXIMA MATANZA",
    "title": "Capítulo 10B: GRAN FINAL — MAXIMA MATANZA (La Última Resistencia Desesperada)",
    "villainId": "carnage",
    "assignedHeroSlot1": "spider_man",
    "assignedHeroSlot2": "storm",
    "assignedHeroSlot3": "magneto_hero",
    "squadOptions": [
      "spider_man",
      "storm",
      "magneto_hero",
      "miles_morales"
    ],
    "comicReference": "Maximum Carnage & Age of Apocalypse",
    "synopsis": "«ANTERIORMENTE... (CONEXIÓN CON PASO 9 - DERROTA)»\nLa embestida de Rhino simbiótico desbarató las líneas defensivas, permitiendo a Carnage asentar su nido en la cúspide de Sims Tower. Grandes llamaradas rojas brotan de los rascacielos y zarcillos carmesíes bloquean las avenidas de Manhattan. La ciudad está al borde del abismo. Sin refuerzos, heridos pero determinados a no rendirse jamás, Peter Parker (Spider-Man), Storm y Magneto (con su capa ondeando entre el humo) avanzan hacia la torre central en una última resistencia desesperada.\n\n«LA CRISIS FINAL»\nKasady ha liberado esporas mutagenas sobre toda la atmósfera de Nueva York. Si no es destruido en los próximos minutos, la infección alcanzará el continente entero.\n\n«MISIÓN DEL EQUIPO»\nCombatir con el corazón en la mano, superar el dolor de las heridas previas y dar el golpe de gracia a Carnage en la cima del mundo.",
    "locations": [
      {
        "name": "Sims Tower",
        "img": "./assets/locations/sims_tower.jpg",
        "startVillain": true,
        "startHero1": true
      },
      {
        "name": "Oscorp Tower",
        "img": "./assets/locations/oscorp.jpg",
        "startHero2": true
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
        "name": "Morlock Tunnels",
        "img": "./assets/locations/morlock_tunnels.jpg"
      },
      {
        "name": "Asteroid M",
        "img": "./assets/locations/asteroid_m.jpg"
      }
    ],
    "setupNotes": [
      "📍 DESPLIEGUE TÁCTICO INICIAL EN MESA:",
      "😈 VILLANO FINAL (Carnage): Inicia en SIMS TOWER — Carnage ríe entre espirales de zarcillos rojos gigantescos.",
      "👤 JORGE (Spider-Man): Inicia en SIMS TOWER — Peter se lanza al combate final con su traje rasgado pero con voluntad inquebrantable.",
      "🌸 ESPOSA (Storm): Inicia en OSCORP TOWER — Ororo convoca un huracán de viento polar para congelar las esporas.",
      "⭐ APOYO (Magneto Héroe, si juega): Inicia en DAILY BUGLE — Erik hace levitar los restos de los tanques para aplastar a la bestia.",
      "Distribuye 1 Matón y 1 Civil en cada ubicación libre del círculo.",
      "REGLA DE ORO DE CAMPAÑA: Al colocar Matones o Civiles por eventos, colócalos en casillas libres. NUNCA provoques Desbordamiento (Overflow)."
    ],
    "specialRules": "Desesperación Heroica: Cuando un Héroe quede con solo 1 carta en mano, esa carta puede jugarse con el doble de iconos de acción de su elección.",
    "events": {
      "initial": {
        "title": "¡LLUVIA DE ZARCILLOS CARMESÍES!",
        "type": "Evento de Inicio",
        "badge": "Agonía Urbana",
        "text": "El cielo arde en sangre: <strong>Coloca 1 Civil en Sims Tower y 1 en Oscorp Tower</strong> (solo si hay espacio libre; sin Desbordamiento).",
        "flavor": "\"¡Miren sus cuerpos débiles! ¡Nada puede frenar la matanza!\" — Carnage"
      },
      "underPressure": {
        "title": "¡LA ÚLTIMA CHISPA DE ESPERANZA!",
        "type": "Bajo Presión (1ª Misión Completa)",
        "badge": "Coraje Indómito",
        "text": "Los héroes resisten el dolor: <strong>Cada héroe roba 1 carta y gana 1 Ficha Comodín. Carnage pierde 2 de salud.</strong>",
        "flavor": "Un destello en los ojos de Peter Parker demuestra que ningún monstruo podrá quebrar su espíritu."
      },
      "accelerated": {
        "title": "¡DESCARGA DEFINITIVA DEL DESTINO!",
        "type": "Acelerado (2ª Misión Completa)",
        "badge": "Sacrificio y Victoria",
        "text": "Magneto y Storm desatan todo su poder: <strong>Carnage sufre 3 de daño directo inmediatamente.</strong>",
        "flavor": "\"¡Por todos los que sufrieron, por el futuro de este mundo... CAE!\" — Magneto"
      }
    },
    "winOutcome": {
      "title": "¡EL MILAGRO DEL ÚLTIMO ALIENTO — TRIUNFO CONTRA TODO PRONÓSTICO!",
      "epilogue": "¡CONTRA TODO PRONÓSTICO, LA ALIANZA TRIUNFA! En el momento más oscuro, cuando todo parecía perdido y la ciudad ardía en sangre, Peter Parker clava sus telarañas en el pecho de Carnage mientras Magneto condensa un campo de fuerza electromagnético que estruja al monstruo desde adentro. Con un alarido ensordecedor que se escucha en los cinco distritos, el simbionte carmesí se vaporiza. La lluvia purificadora de Storm apaga los incendios. Ensangrentados pero erguidos, Spider-Man, Storm y Magneto contemplan el amanecer de una nueva era. ¡Has ganado la campaña en su máxima dificultad narrativa!",
      "bonusText": "¡VICTORIA ÉPICA CONTRA TODO PRONÓSTICO! Has superado todas las adversidades y salvado al universo Marvel."
    },
    "lossOutcome": {
      "title": "CAÍDA DE MANHATTAN Y EL INICIO DE LA RESISTENCIA CLANDESTINA",
      "epilogue": "El poder simbiótico de Carnage devora el centro de la ciudad, pero el coraje de los héroes compró el tiempo suficiente para salvar a los supervivientes en búnkeres subterráneos de Westchester y Genosha. Aunque esta batalla se perdió, la alianza sigue viva en el corazón de la resistencia. La guerra por el futuro recién comienza...",
      "bonusText": "Fin de campaña heroico: La ciudad cayó, pero la resistencia mutante-arácnida perdurará."
    },
    "deployment": {
      "villain": {
        "location": "Sims Tower",
        "reason": "Carnage ríe entre espirales de zarcillos rojos gigantescos en la cima de la torre."
      },
      "hero1": {
        "location": "Sims Tower",
        "reason": "Spider-Man se lanza al combate final con traje rasgado pero voluntad inquebrantable."
      },
      "hero2": {
        "location": "Oscorp Tower",
        "reason": "Storm convoca un huracán de viento polar para congelar las esporas tóxicas."
      },
      "hero3": {
        "location": "Daily Bugle",
        "reason": "Magneto hace levitar los restos blindados de la avenida para aplastar al monstruo."
      }
    }
  }
];
