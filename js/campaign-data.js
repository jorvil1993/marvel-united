// ==========================================================================
// MARVEL UNITED: MAXIMUM MUTATION (SPIDER-VERSE & X-MEN)
// Base de Datos Oficial Auditada — 100% Reglas Oficiales y Material Físico Real
// ==========================================================================

const CAMPAIGN_LOCATIONS = {
  "queens": {
    id: "queens",
    name: "Queens",
    caja: "Spider-Verse",
    img: "./assets/locations/queens.jpg",
    effect: "Si tienes 1 o 2 cartas en tu mano, puedes robar 1 carta.",
    initialCivilians: 1,
    initialThugs: 1
  },
  "oscorp_tower": {
    id: "oscorp_tower",
    name: "Oscorp Tower",
    caja: "Spider-Verse",
    img: "./assets/locations/oscorp_tower.jpg",
    effect: "Puedes obtener 1 ficha de Movimiento.",
    initialCivilians: 1,
    initialThugs: 1
  },
  "brooklyn_bridge": {
    id: "brooklyn_bridge",
    name: "Brooklyn Bridge",
    caja: "Spider-Verse",
    img: "./assets/locations/brooklyn_bridge.jpg",
    effect: "Puedes añadir 1 Civil a cualquier Lugar. Entonces, rescata 1 Civil de este Lugar.",
    initialCivilians: 2,
    initialThugs: 0
  },
  "midtown_high": {
    id: "midtown_high",
    name: "Midtown High School",
    caja: "Spider-Verse",
    img: "./assets/locations/midtown_high.jpg",
    effect: "Puedes obtener 1 ficha Heroica.",
    initialCivilians: 2,
    initialThugs: 0
  },
  "daily_bugle": {
    id: "daily_bugle",
    name: "Daily Bugle",
    caja: "Spider-Verse",
    img: "./assets/locations/daily_bugle.jpg",
    effect: "Descubre la carta superior del mazo de Plan Maestro. Puedes colocarla en la parte inferior del mazo.",
    initialCivilians: 1,
    initialThugs: 1
  },
  "osborn_labs": {
    id: "osborn_labs",
    name: "Osborn Laboratories",
    caja: "Spider-Verse",
    img: "./assets/locations/osborn_labs.jpg",
    effect: "Puedes obtener 1 ficha de Ataque.",
    initialCivilians: 0,
    initialThugs: 2
  },
  "hangar_bay": {
    id: "hangar_bay",
    name: "Hangar Bay",
    caja: "X-Men",
    img: "./assets/locations/hangar_bay.jpg",
    effect: "Puedes coger 1 ficha de Movimiento, Heroica o de Ataque.",
    initialCivilians: 1,
    initialThugs: 1
  },
  "weapon_x": {
    id: "weapon_x",
    name: "Weapon X Facility",
    caja: "X-Men",
    img: "./assets/locations/weapon_x.jpg",
    effect: "Puedes descartar 1 carta de tu mano al final de tu mazo para obtener 2 fichas de Ataque.",
    initialCivilians: 0,
    initialThugs: 2
  },
  "xavier_institute": {
    id: "xavier_institute",
    name: "Xavier Institute",
    caja: "X-Men",
    img: "./assets/locations/xavier_institute.jpg",
    effect: "Puedes robar cartas hasta que tengas 3 en tu mano.",
    initialCivilians: 2,
    initialThugs: 0
  },
  "muir_island": {
    id: "muir_island",
    name: "Muir Island",
    caja: "X-Men",
    img: "./assets/locations/muir_island.jpg",
    effect: "Otro Héroe en este Lugar o en uno adyacente puede robar 1 carta.",
    initialCivilians: 1,
    initialThugs: 1
  },
  "x_jet": {
    id: "x_jet",
    name: "X-Jet",
    caja: "X-Men",
    img: "./assets/locations/x_jet.jpg",
    effect: "Puedes moverte a cualquier otro Lugar.",
    initialCivilians: 0,
    initialThugs: 1
  },
  "genosha": {
    id: "genosha",
    name: "Genosha",
    caja: "X-Men",
    img: "./assets/locations/genosha.jpg",
    effect: "Puedes rescatar 1 Civil de este Lugar.",
    initialCivilians: 2,
    initialThugs: 1
  },
  "asteroid_m": {
    id: "asteroid_m",
    name: "Asteroid M",
    caja: "X-Men",
    img: "./assets/locations/asteroid_m.jpg",
    effect: "Puedes infligir 1 punto de daño a 1 Matón o a 1 Secuaz en cualquier Lugar.",
    initialCivilians: 0,
    initialThugs: 2
  },
  "sentinel_station": {
    id: "sentinel_station",
    name: "Sentinel Space Station",
    caja: "X-Men",
    img: "./assets/locations/sentinel_station.jpg",
    effect: "Puedes descartar 1 carta de tu mano al final de tu mazo para intercambiar 1 carta de tu mano con una de tus cartas boca arriba en la Trama.",
    initialCivilians: 0,
    initialThugs: 2
  }
};

const CAMPAIGN_HEROES = {
  "spider_man": {
    id: "spider_man",
    name: "Spider-Man",
    alterEgo: "Peter Parker",
    originBox: "Enter The Spider-Verse",
    avatar: "./assets/heroes/spider_man.png",
    icons: { mov: 7, atk: 4, her: 4, wild: 3 },
    role: "Motor de Misiones y Rescate",
    trait: "Gran Poder y Sentido Arácnido",
    description: "Rescata hasta 3 Civiles de golpe, derrota matones y los convierte en fichas.",
    strength: "Limpia el tablero de Civiles y Matones en un solo turno.",
    weakness: "Poco daño directo al villano.",
    comicBio: "Picado por una araña radiactiva en una exhibición científica, Peter Parker aprendió que 'un gran poder conlleva una gran responsabilidad'. Es el corazón moral de la alianza arácnida."
  },
  "miles_morales": {
    id: "miles_morales",
    name: "Miles Morales",
    alterEgo: "Spider-Man de Brooklyn",
    originBox: "Enter The Spider-Verse",
    avatar: "./assets/heroes/miles_morales.png",
    icons: { mov: 2, atk: 6, her: 5, wild: 4 },
    role: "Defensa, Retardo y Descarga Eléctrica",
    trait: "Camuflaje e Invulnerabilidad",
    description: "2 ataques concentrados, retrasa el turno del villano y aguanta sin recibir daño.",
    strength: "Bioelectricidad que paraliza al villano e inmunidad a daño por un turno.",
    weakness: "Solo 2 movimientos en todo el mazo: necesita el apoyo de su compañero.",
    comicBio: "Adolescente de Brooklyn picado por una araña alterada genéticamente por Oscorp. Posee camuflaje arácnido invisible y el poderoso Venom Strike bioeléctrico."
  },
  "ghost_spider": {
    id: "ghost_spider",
    name: "Ghost-Spider",
    alterEgo: "Gwen Stacy",
    originBox: "Enter The Spider-Verse",
    avatar: "./assets/heroes/ghost_spider.png",
    icons: { mov: 5, atk: 3, her: 6, wild: 3 },
    role: "Control de Amenazas y Acróbata",
    trait: "Tejedora de Telarañas",
    description: "Intercambia 2 cartas de Amenaza en juego y barre todos los Matones de su zona.",
    strength: "Mueve amenazas peligrosas lejos y limpia masas de esbirros sin recibir daño.",
    weakness: "Poco daño directo al villano.",
    comicBio: "¿Quién es y de dónde sale? Proveniente de la Tierra-65, un universo alternativo donde Gwen Stacy fue picada por la araña. Baterista de The Mary Janes y superheroína encapuchada, Gwen llegó a través de una grieta dimensional del colisionador de Oscorp."
  },
  "spider_ham": {
    id: "spider_ham",
    name: "Spider-Ham",
    alterEgo: "Peter Porker",
    originBox: "Enter The Spider-Verse",
    avatar: "./assets/heroes/spider_ham.png",
    icons: { mov: 4, atk: 7, her: 2, wild: 3 },
    role: "Golpeador Pesado / Anula Movimiento",
    trait: "Física de Caricatura (Toon)",
    description: "Ataque a distancia en cualquier zona y anula el siguiente movimiento del villano.",
    strength: "Desactiva villanos que causan estragos al moverse (como Juggernaut o Rhino).",
    weakness: "Apenas 2 acciones heroicas: ineficaz para rescatar civiles.",
    comicBio: "¿Quién es y de dónde sale? Original de un universo paródico habitado por animales antropomórficos (Tierra-8311). Originalmente una araña de laboratorio que fue mordida por una cerdita científica radiactiva, convirtiéndose en un cerdo con poderes arácnidos y física toon."
  },
  "spider_man_2099": {
    id: "spider_man_2099",
    name: "Spider-Man 2099",
    alterEgo: "Miguel O'Hara",
    originBox: "Enter The Spider-Verse",
    avatar: "./assets/heroes/spider_man_2099.png",
    icons: { mov: 6, atk: 5, her: 4, wild: 3 },
    role: "Equilibrado / Apoyo IA a Distancia",
    trait: "Garras Irreducibles y Asistencia Lyla",
    description: "Daño penetrante que no se puede reducir, heroica a distancia e invulnerabilidad temporal.",
    strength: "Héroe polivalente sin fisuras; puede resolver acciones heroicas en cualquier Lugar.",
    weakness: "No tiene un pico extremo de daño ni de rescate masivo.",
    comicBio: "¿Quién es y de dónde sale? Miguel O'Hara es un genetista del año 2099 en Nueva York. Tras un sabotaje, reescribió su ADN con código arácnido, obteniendo garras retráctiles, colmillos inoculadores y un traje guiado por su IA holográfica personal 'Lyla'."
  },
  "spider_woman": {
    id: "spider_woman",
    name: "Spider-Woman",
    alterEgo: "Jessica Drew",
    originBox: "Enter The Spider-Verse",
    avatar: "./assets/heroes/spider_woman.png",
    icons: { mov: 6, atk: 7, her: 3, wild: 3 },
    role: "Golpeadora Ágil / Retardo de Villano",
    trait: "Picotazo Venenoso y Planeo",
    description: "Retrasa el turno del villano 1 carta o asesta 2 ataques potentes; no sufre daño.",
    strength: "Capaz de ralentizar al villano hasta dos veces por partida mientras hace daño constante.",
    weakness: "Pocas acciones heroicas para despejar amenazas.",
    comicBio: "¿Quién es y de dónde sale? Jessica Drew creció en la montaña Wundagore tras ser curada con un suero de veneno de araña. Agente encubierta de S.H.I.E.L.D., posee bioelectricidad concentrada ('Venom Blast'), vuelo por planeo y fuerza sobrehumana."
  },
  "black_cat": {
    id: "black_cat",
    name: "Black Cat",
    alterEgo: "Felicia Hardy",
    originBox: "Enter The Spider-Verse",
    avatar: "./assets/heroes/black_cat.png",
    icons: { mov: 4, atk: 5, her: 3, wild: 3 },
    role: "Manipuladora del Plan Maestro y Fichas",
    trait: "Campo de Mala Suerte Probabilística",
    description: "Descarta y manda al fondo del mazo la siguiente carta del Plan Maestro hasta 4 veces; gana fichas a elección.",
    strength: "Cancela las peores cartas y ataques BAM del villano antes de que se ejecuten.",
    weakness: "Pocos iconos en sus cartas base.",
    comicBio: "¿Quién es y de dónde sale? Felicia Hardy, la ladrona de guante blanco más audaz de Manhattan. Con garras y microchips que manipulan la probabilidad cuántica para provocar accidentes a sus rivales, Felicia se infiltró en Oscorp para robar secretos de Norman Osborn cuando estalló el asedio de Rhino."
  },
  "venom_hero": {
    id: "venom_hero",
    name: "Venom (Héroe)",
    alterEgo: "Eddie Brock",
    originBox: "Enter The Spider-Verse",
    avatar: "./assets/heroes/venom_hero.png",
    icons: { mov: 5, atk: 8, her: 2, wild: 3 },
    role: "Bestia de Asalto / Regeneración",
    trait: "Fuerza Simbiótica y Salto Libre",
    description: "Salta a cualquier Lugar del tablero y ataca allí; roba hasta tener 3 cartas.",
    strength: "Hasta 8 ataques y movilidad ilimitada a cualquier zona del mapa.",
    weakness: "Apenas 2 acciones heroicas: nulo para salvar civiles.",
    comicBio: "Tras superar el rencor hacia Spider-Man y recuperar el control del simbionte alienígena, Eddie Brock asume el rol de Protector Letal, canalizando la voracidad de la criatura para despedazar a criminales y monstruos."
  },
  "wolverine": {
    id: "wolverine",
    name: "Wolverine",
    alterEgo: "Logan",
    originBox: "X-Men Core Box",
    avatar: "./assets/heroes/wolverine.png",
    icons: { mov: 4, atk: 5, her: 4, wild: 4 },
    role: "Combatiente Letal / Factor Curativo",
    trait: "Garras de Adamantium y Regeneración",
    description: "3 cartas de Garras de Adamantium (2 ataques cada una) y roba carta al final del turno si tiene pocas cartas.",
    strength: "El héroe con mayor daño sostenido del juego; resiste heridas y nunca se agota.",
    weakness: "Poco control del tablero y de civiles.",
    comicBio: "Centenario mutante armado con un esqueleto reforzado con adamantium indestructible y un factor curativo insuperable. Es el luchador más feroz e implacable de los X-Men."
  },
  "cyclops": {
    id: "cyclops",
    name: "Cyclops",
    alterEgo: "Scott Summers",
    originBox: "X-Men Core Box",
    avatar: "./assets/heroes/cyclops.png",
    icons: { mov: 3, atk: 7, her: 6, wild: 3 },
    role: "Comandante Táctico / Rayos Ópticos",
    trait: "Liderazgo y Fuego Adyacente",
    description: "Dispara rayos ópticos a los 2 Lugares vecinos y entrega fichas Comodín a sus compañeros.",
    strength: "Limpia enemigos en zonas adyacentes y multiplica los recursos del equipo.",
    weakness: "Movilidad limitada (solo 3 movimientos en su mazo).",
    comicBio: "Líder de campo de los X-Men. Canaliza rayos de fuerza concusiva pura a través de su visor de cuarzo de rubí. Un estratega que nunca pierde la calma en combate."
  },
  "storm": {
    id: "storm",
    name: "Storm",
    alterEgo: "Ororo Munroe",
    originBox: "X-Men Core Box",
    avatar: "./assets/heroes/storm.png",
    icons: { mov: 7, atk: 4, her: 3, wild: 3 },
    role: "Control Atmosférico / Recolocación Global",
    trait: "Atmoquinesis y Diosa del Clima",
    description: "2 ataques en cualquier Lugar del mapa y recoloca a todos los Héroes que desee.",
    strength: "Movilidad masiva de 7 y capacidad de reubicar a todo el equipo donde sea necesario.",
    weakness: "Poco daño concentrado a villanos individuales.",
    comicBio: "Mutante de nivel alfa venerada como una diosa en África antes de unirse a los X-Men. Ororo comanda los elementos: viento, lluvia, tornados y rayos devastadores."
  },
  "jean_grey": {
    id: "jean_grey",
    name: "Jean Grey",
    alterEgo: "Marvel Girl",
    originBox: "X-Men Core Box",
    avatar: "./assets/heroes/jean_grey.png",
    icons: { mov: 5, atk: 3, her: 5, wild: 5 },
    role: "Soporte Telepático / Reutilización de Cartas",
    trait: "Telepatía y Gran Telequinesis",
    description: "Telepatía permite cambiar la carta anterior por cualquier otra carta jugada; reparte ataques y heroicas a distancia.",
    strength: "La mejor compañera del juego: 5 comodines y multiplica la carta más poderosa de la Trama.",
    weakness: "Poco ataque propio sin apoyo.",
    comicBio: "Poderosa telépata y telequinética fundadora de los X-Men. Su mente conecta los pensamientos de sus aliados y manipula la materia a nivel subatómico."
  },
  "beast": {
    id: "beast",
    name: "Beast",
    alterEgo: "Dr. Hank McCoy",
    originBox: "X-Men Core Box",
    avatar: "./assets/heroes/beast.png",
    icons: { mov: 6, atk: 4, her: 7, wild: 3 },
    role: "Motor Heroico / Robador de Cartas",
    trait: "Inteligencia Genial y Regeneración",
    description: "Trata todas sus acciones Heroicas como Comodines en su turno; roba hasta tener 3 cartas en mano.",
    strength: "7 acciones heroicas y nunca se queda sin mano; ideal para misiones complejas como Cerebro.",
    weakness: "Daño directo moderado.",
    comicBio: "Genio científico con fuerza, agilidad y pelaje azul mutante. Es el cerebro médico y tecnológico de los X-Men, combinando filosofía, acrobacias y diplomacia."
  },
  "magneto_hero": {
    id: "magneto_hero",
    name: "Magneto (Héroe)",
    alterEgo: "Erik Lehnsherr",
    originBox: "X-Men Core Box",
    avatar: "./assets/heroes/magneto_hero.png",
    icons: { mov: 3, atk: 6, her: 1, wild: 4 },
    role: "Artillería Magnética en Área",
    trait: "Magnetoquinesis Devastadora",
    description: "3 ataques repartidos entre su Lugar y los adyacentes; convierte iconos en Comodín.",
    strength: "Daño en área brutal que arrasa secuaces y villanos aledaños.",
    weakness: "Solo 1 acción heroica y cartas especiales sin iconos compartidos.",
    comicBio: "Superviviente del Holocausto y líder mutante que cree en la supremacía de su especie. Al ver la amenaza bio-simbiótica de Osborn y Carnage, une fuerzas con los X-Men para proteger a los suyos."
  },
  "mystique_hero": {
    id: "mystique_hero",
    name: "Mystique (Héroe)",
    alterEgo: "Raven Darkhölme",
    originBox: "X-Men Core Box",
    avatar: "./assets/heroes/mystique_hero.png",
    icons: { mov: 5, atk: 7, her: 2, wild: 3 },
    role: "Sabotaje y Desvío de Daño",
    trait: "Metamorfa y Espionaje",
    description: "Desvía el daño del villano a matones de su zona; impide que la siguiente carta de Plan Maestro añada fichas en zonas adyacentes.",
    strength: "Inmune a excesos y desactiva las tácticas enemigas con subterfugio.",
    weakness: "Pocas acciones heroicas para misiones civiles.",
    comicBio: "Metamorfa de piel azul, ojos dorados y siglos de vida. Espía maestra y líder de la Hermandad, Mystique decide sabotear a Osborn tras ser traicionada por él en Nueva York."
  }
};

const CAMPAIGN_VILLAINS = {
  "rhino": {
    id: "rhino",
    name: "Rhino",
    alterEgo: "Aleksei Sytsevich",
    avatar: "./assets/villains/rhino.png",
    boardImg: "./assets/villains/rhino-board.jpg",
    artImg: "./assets/villains/rhino-art.jpg",
    vida: { 2: 5, 3: 8, 4: 11 },
    dificultad: 2,
    especial: "Cuando un Héroe queda fuera de combate, Rhino no activa su BAM: ese Héroe coge 1 ficha de Crisis. Un Héroe con Crisis juega su próxima carta boca abajo y luego descarta su Crisis.",
    bam: "1 daño a cada Héroe en su Lugar por cada Lugar en que entró este turno. Luego mueve a los Héroes dañados 1 Lugar en sentido horario.",
    exceso: "Roba otra carta de Plan Maestro y colócala boca abajo en la Trama.",
    complot: "No tiene complot automático; gana noqueando a los héroes.",
    specialSetup: [
      "Tablero de Rhino con 5 fichas de Vida (para 2 héroes) u 8 (para 3).",
      "Fichas de Crisis: ten a mano las fichas de Crisis de la caja X-Men."
    ],
    consejo: "No se queden juntos en su trayectoria: cada zona que recorre suma daño. Spider-Ham anula su movimiento y Black Cat esquiva sus cargas."
  },
  "green_goblin": {
    id: "green_goblin",
    name: "Green Goblin",
    alterEgo: "Norman Osborn",
    avatar: "./assets/villains/green_goblin.png",
    boardImg: "./assets/villains/green-goblin-board.jpg",
    artImg: "./assets/villains/green-goblin-art.jpg",
    vida: { 2: 5, 3: 7, 4: 10 },
    dificultad: 3,
    especial: "Cuando se elimina una Amenaza, vuelve a su mazo y se añade una ficha de Amenaza a la Misión. No se le puede dañar si hay algún Civil en su Lugar; si estás con él, puedes gastar 2 acciones Heroicas para rescatar a un Civil de su zona.",
    bam: "1 daño a cada Héroe en su Lugar. Roba una carta de Amenaza y colócala en el siguiente Lugar sin Amenaza (en sentido horario).",
    exceso: "Roba una carta de Amenaza y colócala en el siguiente Lugar sin Amenaza.",
    complot: "¡Pierden inmediatamente si los 6 Lugares del tablero tienen una carta de Amenaza!",
    specialSetup: [
      "Preparación Especial (reverso de su tablero): NO coloques cartas de Amenaza ni fichas iniciales de amenaza en los Lugares.",
      "Deja el mazo de Amenazas boca abajo y las fichas de Amenaza aparte.",
      "Desafío Identidad Secreta: Coloca 1 ficha de Periodista en los Lugares de las posiciones 0, 2 y 4."
    ],
    consejo: "La carrera es contra las Amenazas: elimínenlas en cuanto aparezcan. Ghost-Spider puede intercambiarlas y Spider-Man 2099 hace acciones Heroicas a distancia."
  },
  "venom": {
    id: "venom",
    name: "Venom",
    alterEgo: "Eddie Brock",
    avatar: "./assets/villains/venom.png",
    boardImg: "./assets/villains/venom-board.jpg",
    artImg: "./assets/villains/venom-art.jpg",
    vida: { 2: 5, 3: 8, 4: 11 },
    dificultad: 3,
    especial: "Cuando un Héroe queda fuera de combate, Venom no activa su BAM: juega otra carta de Plan Maestro inmediatamente.",
    bam: "1 daño a cada Héroe en su Lugar (2 de daño si tienen alguna ficha de Crisis). Después, cada Héroe en su Lugar recibe 1 ficha de Crisis.",
    exceso: "1 Héroe recibe 1 ficha de Crisis.",
    complot: "Un Héroe queda fuera de juego al acumular 8 Crisis en partida de 2 Héroes (o 6 Crisis con 3 Héroes). Pierden si todos quedan fuera de juego.",
    specialSetup: [
      "Tablero de Venom con 5 de Vida (para 2 héroes) u 8 (para 3).",
      "Fichas de Crisis: ten a mano las fichas de Crisis de la caja X-Men."
    ],
    consejo: "Las Crisis no se van fácilmente: midan cada una. Los héroes invulnerables (Miles, Ghost-Spider, 2099, Spider-Woman) pueden absorber sus BAM sin recibir daño."
  },
  "carnage": {
    id: "carnage",
    name: "Carnage",
    alterEgo: "Cletus Kasady",
    avatar: "./assets/villains/carnage.png",
    boardImg: "./assets/villains/carnage-board.jpg",
    artImg: "./assets/villains/carnage-art.jpg",
    vida: { 2: 5, 3: 8, 4: 11 },
    dificultad: 4,
    especial: "Cuando un Héroe queda fuera de combate, el medidor de engendros sube 1 casilla.",
    bam: "1 daño a cada Héroe en su Lugar. Después coloca 1 ficha de Crisis sobre cada Civil de ese Lugar.",
    exceso: "Descarta todos los Civiles con Crisis del Lugar que tenga más Civiles; el medidor de engendros sube 1 casilla por cada uno descartado.",
    complot: "Medidor de engendros: ¡Si llega a la casilla 10, los Héroes pierden de inmediato!",
    specialSetup: [
      "Coloca el indicador de villano en la casilla 0 del medidor de engendros (o ajustado por el nivel de Pánico).",
      "Fichas de Crisis: prepáralas para marcar a los civiles infectados."
    ],
    consejo: "Rescaten a los Civiles antes de que Carnage los alcance y les coloque fichas de Crisis. Spider-Man rescata 3 Civiles de golpe; Beast y Jean Grey mantienen el control heroico."
  },
  "sabretooth": {
    id: "sabretooth",
    name: "Sabretooth",
    alterEgo: "Victor Creed",
    avatar: "./assets/villains/sabretooth.png",
    boardImg: "./assets/villains/sabretooth-board.jpg",
    artImg: "./assets/villains/sabretooth-art.jpg",
    vida: { 2: 5, 3: 7, 4: 10 },
    dificultad: 3,
    especial: "Cuando el Héroe Cazado queda fuera de combate, el siguiente Héroe en sentido horario recibe la ficha de Cazado. Si cae otro Héroe, roba otra carta de Plan Maestro boca abajo.",
    bam: "2 daños a un Héroe en su Lugar; si el Cazado está allí, recibe él todo el impacto.",
    exceso: "1 daño al Héroe Cazado, sin importar en qué Lugar se encuentre.",
    complot: "Pierden si el Héroe que empezó como Cazado vuelve a recibir la ficha por 2ª vez.",
    specialSetup: [
      "Preparación Especial: asigna la ficha de Cazado de la caja X-Men al héroe que inicia la partida.",
      "Tablero de Sabretooth con 5 de Vida (2 héroes) o 7 (3 héroes)."
    ],
    consejo: "Nadie puede caer dos veces consecutivas. El héroe Cazado debe jugar con cartas de invulnerabilidad o mantenerse a distancia mientras su pareja ataca."
  },
  "juggernaut": {
    id: "juggernaut",
    name: "Juggernaut",
    alterEgo: "Cain Marko",
    avatar: "./assets/villains/juggernaut.png",
    boardImg: "./assets/villains/juggernaut-board.jpg",
    artImg: "./assets/villains/juggernaut-art.jpg",
    vida: { 2: 8, 3: 8, 4: 8 },
    dificultad: 4,
    especial: "Cuando un Héroe queda fuera de combate, no activa su BAM: roba otra carta de Plan Maestro y la coloca boca abajo en la Trama.",
    bam: "1 daño a cada Héroe en todos los Lugares por los que salió, pasó o entró este turno.",
    exceso: "1 daño a cada Héroe en su Lugar y roba otra carta de Plan Maestro boca abajo.",
    complot: "No tiene complot de tiempo: su brutalidad física es la amenaza.",
    specialSetup: [
      "Juggernaut tiene 8 de Vida FIJA en cualquier número de jugadores (¡una mole para 2 jugadores!).",
      "Guarden ataques concentrados para cuando se completen las 2 primeras misiones."
    ],
    consejo: "Spider-Ham le anula por completo el siguiente movimiento y desactiva su devastador BAM en cadena. Storm y Wolverine son sus mayores amenazas."
  },
  "mystique": {
    id: "mystique",
    name: "Mystique",
    alterEgo: "Raven Darkhölme",
    avatar: "./assets/villains/mystique.png",
    boardImg: "./assets/villains/mystique-board.jpg",
    artImg: "./assets/villains/mystique-art.jpg",
    vida: { 2: 4, 3: 6, 4: 9 },
    dificultad: 4,
    especial: "Senador Robert Kelly: le afecta todo lo que afecta a los Héroes y se mueve con ellos. Los Héroes en su Lugar pueden absorber el daño que iba hacia él. Si un Héroe cae KO, mueve a Kelly 1 Lugar antihorario y roba carta de Plan Maestro boca abajo.",
    bam: "2 daños a un Héroe en su Lugar.",
    exceso: "Mueve al Senador Kelly 1 Lugar en sentido antihorario y roba otra carta de Plan Maestro boca abajo.",
    complot: "¡Pierden de inmediato si el Senador Kelly sufre 1 punto de daño!",
    specialSetup: [
      "Preparación Especial: coloca la ficha del Senador Robert Kelly en la Posición 3 (donde empiezan los Héroes).",
      "Mystique tiene poca vida (4 con 2 héroes), pero la escolta de Kelly es crítica."
    ],
    consejo: "Mantengan a Kelly siempre lejos de Mystique. Si Mystique entra en su zona, un héroe debe interponerse para recibir el daño por él."
  },
  "magneto": {
    id: "magneto",
    name: "Magneto",
    alterEgo: "Erik Lehnsherr",
    avatar: "./assets/villains/magneto.png",
    boardImg: "./assets/villains/magneto-board.jpg",
    artImg: "./assets/villains/magneto-art.jpg",
    vida: { 2: 5, 3: 7, 4: 10 },
    dificultad: 5,
    especial: "Al inicio de cada turno del villano, añade 1 Civil al Lugar opuesto al de Magneto.",
    bam: "Añade 1 Matón a su Lugar y 1 daño a cada Héroe allí. Cada Héroe en ese Lugar y en los adyacentes debe descartar 1 ficha de acción.",
    exceso: "Convierte en Matones a todos los Civiles de su Lugar y de los adyacentes.",
    complot: "¡Pierden si en algún momento no queda ningún Civil en todo el tablero!",
    specialSetup: [
      "Preparación Especial: Sustituye la carta de Misión «Rescatar Civiles» por la carta especial «Usar Cerebro».",
      "Para avanzar «Usar Cerebro», un Héroe debe gastar una acción Heroica y una de Movimiento en el mismo turno en su zona. Se necesitan 3 pares para completarla.",
      "Regla Crítica: NO rescaten a todos los Civiles; si no queda ninguno en mesa, pierden la partida."
    ],
    consejo: "Es el villano más exigente: requiere muchas acciones Heroicas para Cerebro y amenazas. Beast (7 heroicas) y Jean Grey (5 comodines) son fundamentales."
  }
};

const CAMPAIGN_REWARDS = [
  { id: "refuerzos", name: "Refuerzos Tácticos", desc: "Cada Héroe empieza el próximo capítulo con 1 ficha Comodín." },
  { id: "inteligencia", name: "Inteligencia S.H.I.E.L.D.", desc: "Al preparar el próximo capítulo, miren las 3 primeras cartas del Plan Maestro y ordénenlas como quieran." },
  { id: "respiro", name: "Villano Frenado", desc: "El villano del próximo capítulo empieza Frenado (juega su 1ª carta de Plan Maestro tras 4 cartas de héroe en vez de 3)." }
];

const CAMPAIGN_CHAPTERS = [
  {
    id: "1",
    step: 1,
    act: 1,
    actTitle: "ACTO I: LA SOMBRA EN MANHATTAN",
    title: "Capítulo 1: Golpe en Oscorp",
    villainId: "rhino",
    assignedHeroSlot1: "spider_man",
    assignedHeroSlot2: "miles_morales",
    assignedHeroSlot3: "black_cat",
    squadOptions: ["spider_man", "miles_morales", "black_cat", "cyclops"],
    comicReference: "The Amazing Spider-Man #41 & Champions Vol. 2",
    coverImg: "./assets/covers/chapter_1.png",
    synopsis: "«PRÓLOGO: LA MUESTRA 7»\nHace tres semanas, una sonda espacial de la NASA regresó a la Tierra con un cultivo alienígena adherido: una masa negra viviente que la ciencia de Oscorp bautizó como 'Muestra 7'. Norman Osborn ordenó almacenarla en sus bóvedas criogénicas de máxima seguridad.\n\n«EL ASALTO»\nEsta noche en Queens, la tía May le sirve a Miles un segundo plato de lasaña cuando el teléfono de Peter vibra: alarmas sísmicas sacuden Oscorp Tower. Rhino acaba de demoler tres niveles blindados con furia ciega. Fue contratado por una misteriosa red para extraer un contenedor criogénico.\n\n«INTERVENCIÓN TÁCTICA»\nPeter y Miles saltan por la ventana hacia el complejo. Entre los conductos de ventilación, Felicia Hardy (Black Cat) también busca los discos de datos de Osborn, pero al presenciar el peligro del simbionte, decide apoyar a los héroes desde las sombras.",
    locations: [
      { id: "oscorp_tower", name: "Oscorp Tower", img: "./assets/locations/oscorp_tower.jpg", startVillain: true, effect: "Puedes obtener 1 ficha de Movimiento.", note: "Punto de impacto de Rhino demoliendo mamparas." },
      { id: "osborn_labs", name: "Osborn Laboratories", img: "./assets/locations/osborn_labs.jpg", effect: "Puedes obtener 1 ficha de Ataque.", note: "Bóvedas criogénicas y sintetizadores biológicos." },
      { id: "brooklyn_bridge", name: "Brooklyn Bridge", img: "./assets/locations/brooklyn_bridge.jpg", effect: "Añade 1 Civil a cualquier Lugar. Rescata 1 Civil de aquí.", note: "Vía de escape bloqueada por camiones blindados." },
      { id: "queens", name: "Queens", img: "./assets/locations/queens.jpg", startHeroes: true, effect: "Roba 1 carta si tienes 1 o 2 en mano.", note: "Casa de los Parker: punto de partida de la patrulla." },
      { id: "midtown_high", name: "Midtown High School", img: "./assets/locations/midtown_high.jpg", effect: "Puedes obtener 1 ficha Heroica.", note: "Alumnos y civiles atrapados por la alarma general." },
      { id: "daily_bugle", name: "Daily Bugle", img: "./assets/locations/daily_bugle.jpg", effect: "Descubre la carta superior del Plan Maestro.", note: "Reporteros transmitiendo el desastre en vivo." }
    ],
    setupChecklist: [
      "Tablero de Rhino con 5 fichas de Vida (para 2 héroes) u 8 (para 3).",
      "6 Ubicaciones en círculo: coloca los Civiles y Matones impresos en cada una.",
      "Rhino empieza en Oscorp Tower (Posición 0). Baraja su mazo de Plan Maestro.",
      "Héroes empiezan en Queens (Posición 3, opuesto al villano). Roban 3 cartas de inicio.",
      "Fichas de Crisis: ten a mano las fichas de Crisis de la caja X-Men."
    ],
    specialRules: "Rhino castiga agruparse en su camino de embestida. Si un Héroe cae KO, no activa BAM, pero recibe 1 ficha de Crisis (jugará su próxima carta boca abajo).",
    events: {
      initial: {
        title: "Visita en las Sombras",
        rule: "Felicia Hardy (Black Cat) se infiltra por los conductos. Puedes añadirla como tercer héroe de apoyo o aliada táctica.",
        flavor: "«Yo también vine por el botín, chicos, pero ese rinoceronte está rompiendo todo mi trabajo...»"
      },
      underPressure: {
        title: "¡Arranca una Columna!",
        rule: "Bajo Presión oficial: Rhino actúa cada 2 cartas de héroe en vez de cada 3. Coloca 1 Matón en el Lugar de Rhino (si no cabe, aplica Exceso).",
        flavor: "«¡A un lado, bichos! ¡Aleksei no frena por nadie!»"
      },
      accelerated: {
        title: "El Camión del Comprador",
        rule: "¡2ª Misión cumplida! Rhino queda vulnerable a ataques directos. El Héroe que completó la misión recibe 1 ficha de Movimiento.",
        flavor: "«¡Veo el transporte sin placas en la esquina! ¡Córtenle el paso!»"
      },
      crisis: {
        title: "Carga Desenfrenada",
        rule: "Rhino embiste con furia: un héroe puede descartar 1 carta de su mano para atraer su trayectoria hacia un pilar de acero blindado.",
        flavor: "«¡Por aquí, cabeza de piedra! ¡A ver si aguantas el impacto!»"
      }
    },
    winOutcome: {
      title: "Contenedor Asegurado",
      epilogue: "Rhino queda incrustado de cabeza en el pavimento del vestíbulo. Peter abre el contenedor recuperado: está medio vacío; alguien de adentro sustrajo la mitad de la Muestra 7 antes del asalto. En la azotea, Black Cat muestra una tarjeta con el nombre de Norman Osborn: «El dueño se robó a sí mismo. Y ahora me interesa saber para qué la quiere...»",
      bonusText: "¡Victoria limpia! Desbloquean a Black Cat para el roster y eligen 1 Recompensa de Campaña para la siguiente batalla.",
      unlockedHeroes: ["black_cat"],
      nextChapter: "2A"
    },
    lossOutcome: {
      title: "El Ariete Escapa",
      epilogue: "Rhino derriba el muro este y sube a un camión blindado sin placas con el contenedor completo. Felicia Hardy aparece en la cornisa: «El camión es de una empresa fantasma de Osborn. Ahora tiene la muestra entera y nadie le hará preguntas...»",
      penalties: "+1 Pánico en Nueva York. Osborn tiene la muestra completa (en la siguiente misión el villano empezará Acelerado).",
      nextChapter: "2B"
    }
  },

  {
    id: "2A",
    step: 2,
    act: 1,
    actTitle: "ACTO I: LA SOMBRA EN MANHATTAN",
    title: "Capítulo 2A: El Colisionador Dimensional",
    villainId: "green_goblin",
    assignedHeroSlot1: "ghost_spider",
    assignedHeroSlot2: "spider_man_2099",
    assignedHeroSlot3: "spider_ham",
    squadOptions: ["ghost_spider", "spider_man_2099", "spider_ham", "spider_man"],
    comicReference: "Spider-Verse (Dan Slott) & Spider-Gwen #1",
    coverImg: "./assets/covers/chapter_2A.png",
    synopsis: "«LA MÁQUINA DE OSBORN»\nNorman Osborn no buscaba solo un arma: en el sótano secreto de Osborn Laboratories construyó un colisionador de partículas para abrir ventanas hacia otras dimensiones. La Muestra 7 actúa como catalizador cuántico.\n\n«FRACTURA MULTIVERSAL»\nA las 4:12 de la madrugada, la máquina sobrecarga la red eléctrica de Manhattan. El cielo se fractura en auroras violetas y de las grietas caen tres figuras inesperadas: Gwen Stacy (Ghost-Spider, de Tierra-65), Miguel O'Hara (Spider-Man 2099) y Peter Porker (Spider-Ham).\n\n«EL ASALTO DEL DUENDE»\nJameson manda a los reporteros del Bugle a cubrir a los 'invasores dimensionales'. Norman Osborn monta su planeador metálico con máscara de Duende para proteger su colisionador y silenciar a los héroes.",
    locations: [
      { id: "osborn_labs", name: "Osborn Laboratories", img: "./assets/locations/osborn_labs.jpg", startVillain: true, effect: "Puedes obtener 1 ficha de Ataque.", note: "El colisionador activo en el sótano subterráneo." },
      { id: "oscorp_tower", name: "Oscorp Tower", img: "./assets/locations/oscorp_tower.jpg", effect: "Puedes obtener 1 ficha de Movimiento.", note: "Generadores que alimentan la brecha dimensional." },
      { id: "daily_bugle", name: "Daily Bugle", img: "./assets/locations/daily_bugle.jpg", effect: "Descubre la carta superior del Plan Maestro.", note: "Jameson despachando periodistas a la zona de impacto." },
      { id: "midtown_high", name: "Midtown High School", img: "./assets/locations/midtown_high.jpg", startHeroes: true, effect: "Puedes obtener 1 ficha Heroica.", note: "Punto de aterrizaje seguro frente a la escuela." },
      { id: "queens", name: "Queens", img: "./assets/locations/queens.jpg", effect: "Roba 1 carta si tienes 1 o 2 en mano.", note: "Vecindario bajo shock por las luces dimensionales." },
      { id: "brooklyn_bridge", name: "Brooklyn Bridge", img: "./assets/locations/brooklyn_bridge.jpg", effect: "Añade 1 Civil a cualquier Lugar. Rescata 1 Civil de aquí.", note: "Cables de alta tensión vibrando por la energía cuántica." }
    ],
    setupChecklist: [
      "Tablero de Green Goblin con 5 de Vida (2 héroes) o 7 (3 héroes).",
      "Preparación Especial Oficial: NO coloques Amenazas ni fichas iniciales en las ubicaciones.",
      "Desafío Identidad Secreta: Coloca 1 ficha de Periodista en Osborn Labs (pos 0), Daily Bugle (pos 2) y Queens (pos 4).",
      "El Duende empieza en Osborn Laboratories (0). Héroes empiezan en Midtown High (3).",
      "Gwen Stacy (Ghost-Spider) y Miguel O'Hara (Spider-Man 2099) lideran el equipo."
    ],
    specialRules: "El Duende es inmune al daño mientras haya Civiles en su Lugar (se requieren 2 Heroicas para rescatar a un civil de su zona). Las Amenazas vuelven al mazo al ser eliminadas.",
    events: {
      initial: {
        title: "Prensa en Cada Esquina",
        rule: "Desafío Identidad Secreta activo: Si un héroe hace una acción visible con un Periodista, gana 1 ficha de Exposición.",
        flavor: "«¡Foto de primera plana! ¡Quiero saber quiénes son estos bichos con capucha!»"
      },
      underPressure: {
        title: "Secuestro en la Avenida",
        rule: "Bajo Presión oficial: Si hay algún Civil en el Lugar del Duende, colócalo sobre su tablero como escudo humano.",
        flavor: "«¡Nadie tocará mi colisionador mientras tenga a estos inocentes cerca!»"
      },
      accelerated: {
        title: "Grieta Inestable",
        rule: "¡2ª Misión cumplida! El colisionador empieza a cerrarse. Cada Héroe roba 1 carta de su mazo y el Duende queda vulnerable.",
        flavor: "«¡El vórtice colapsa! ¡Gwen, arranca el condensador de flujo!»"
      },
      crisis: {
        title: "Bombas de Calabaza en Cadena",
        rule: "El Duende suelta una andanada aérea: cada héroe en un lugar con Periodista debe elegir entre ganar 1 Exposición o sufrir 1 daño.",
        flavor: "«¡Sonrían para el periódico de mañana, héroes de pacotilla!»"
      }
    },
    winOutcome: {
      title: "Las Grietas se Cierran",
      epilogue: "Ghost-Spider arranca el núcleo del colisionador y las grietas cuánticas se sellan en seco. El Duende huye en su planeador herido. Pero la Muestra 7 se escurre por los conductos de ventilación hacia el estacionamiento del Bugle, donde el fotógrafo Eddie Brock siente una viscosidad fría treparle por el brazo...",
      bonusText: "¡Victoria multiversal! Se unen Ghost-Spider, Spider-Man 2099 y Spider-Ham a la alianza.",
      unlockedHeroes: ["ghost_spider", "spider_man_2099", "spider_ham"],
      nextChapter: "3A"
    },
    lossOutcome: {
      title: "Manhattan Fracturada",
      epilogue: "El Duende escapa con el condensador cuántico intacto. Las grietas permanecen abiertas horas, sembrando el pánico en la ciudad. Jameson titula '¿HÉROES O AMENAZA ALIENÍGENA?'. En la confusión, la Muestra 7 infecta a Eddie Brock en los sótanos...",
      penalties: "+1 Pánico en Nueva York. Venom nace desatado y empieza Acelerado en el siguiente capítulo.",
      nextChapter: "3B"
    }
  },

  {
    id: "2B",
    step: 2,
    act: 1,
    actTitle: "ACTO I: LA SOMBRA EN MANHATTAN",
    title: "Capítulo 2B: Cacería Feral en las Calles",
    villainId: "sabretooth",
    assignedHeroSlot1: "wolverine",
    assignedHeroSlot2: "spider_woman",
    assignedHeroSlot3: "spider_man",
    squadOptions: ["wolverine", "spider_woman", "spider_man", "miles_morales"],
    comicReference: "Wolverine Vol. 2 #10 & X-Men: Mutant Massacre",
    coverImg: "./assets/covers/chapter_2A.png",
    synopsis: "«EL RASTREADOR DE OSBORN»\nTras el escape de Rhino, Norman Osborn no pierde un segundo: contrata a Victor Creed (Sabretooth) para rastrear y neutralizar a cualquier héroe que intente seguir la pista del convoy criogénico.\n\n«LOGAN ENTRA EN ESCENA»\nDesde Westchester, Cerebro alerta a los X-Men de la presencia de Sabretooth en Queens. Logan (Wolverine) toma una motocicleta y viaja a la ciudad junto a Jessica Drew (Spider-Woman). Creed ya ha olido la sangre de Logan y acecha entre los callejones.",
    locations: [
      { id: "queens", name: "Queens", img: "./assets/locations/queens.jpg", startVillain: true, effect: "Roba 1 carta si tienes 1 o 2 en mano.", note: "Callejones residenciales donde Creed acecha." },
      { id: "osborn_labs", name: "Osborn Laboratories", img: "./assets/locations/osborn_labs.jpg", effect: "Puedes obtener 1 ficha de Ataque.", note: "Destino final del camión de Rhino." },
      { id: "daily_bugle", name: "Daily Bugle", img: "./assets/locations/daily_bugle.jpg", effect: "Descubre la carta superior del Plan Maestro.", note: "Noticias de última hora sobre ataques salvajes." },
      { id: "midtown_high", name: "Midtown High School", img: "./assets/locations/midtown_high.jpg", startHeroes: true, effect: "Puedes obtener 1 ficha Heroica.", note: "Zona de evacuación segura de civiles." },
      { id: "oscorp_tower", name: "Oscorp Tower", img: "./assets/locations/oscorp_tower.jpg", effect: "Puedes obtener 1 ficha de Movimiento.", note: "Perímetro policial con sirenas aullando." },
      { id: "brooklyn_bridge", name: "Brooklyn Bridge", img: "./assets/locations/brooklyn_bridge.jpg", effect: "Añade 1 Civil a cualquier Lugar. Rescata 1 Civil de aquí.", note: "Tráfico colapsado por el puente." }
    ],
    setupChecklist: [
      "Tablero de Sabretooth con 5 de Vida (2 héroes) o 7 (3 héroes).",
      "Preparación Especial: Asigna la ficha de Cazado a Wolverine (héroe que inicia la partida).",
      "Sabretooth empieza en Queens (Posición 0). Héroes empiezan en Midtown High (Posición 3).",
      "Fichas de daño y garras listas."
    ],
    specialRules: "BAM inflige 2 daños al Héroe Cazado. Si el Héroe Cazado cae KO, la ficha pasa al compañero; si el héroe inicial la recibe por 2ª vez, ¡pierden la partida!",
    events: {
      initial: {
        title: "Olor a Sangre",
        rule: "Sabretooth fija sus ojos en Wolverine. El héroe Cazado no puede beneficiarse de fichas de Movimiento gratuitas en la ronda 1.",
        flavor: "«Huelo ese adamantium oxidado a kilómetros, enano...»"
      },
      underPressure: {
        title: "Furia Desatada",
        rule: "Bajo Presión oficial: Sabretooth actúa cada 2 cartas de héroe. Coloca 1 Matón en su Lugar.",
        flavor: "«¡Corran todo lo que quieran! ¡La noche es mía!»"
      },
      accelerated: {
        title: "Contraataque de Garras",
        rule: "¡2ª Misión cumplida! Sabretooth queda vulnerable. Wolverine o Spider-Woman obtienen 1 ficha de Ataque.",
        flavor: "«¡Snikt! Ya me cansé de tus juegos, Creed.»"
      },
      crisis: {
        title: "Emboscada en el Callejón",
        rule: "Sabretooth salta desde un tejado: el héroe Cazado sufre 1 daño inmediato a menos que descarte 1 carta con icono de Movimiento.",
        flavor: "«¡Te tengo justo donde quería!»"
      }
    },
    winOutcome: {
      title: "El Cazador Derribado",
      epilogue: "Logan derriba a Creed contra una cerca metálica electrificada. En los bolsillos del cazador encuentran un mapa de ruta hacia los laboratorios subterráneos de Osborn y notas sobre un colisionador activo en el Daily Bugle...",
      bonusText: "¡Victoria feroz! Wolverine y Spider-Woman quedan plenamente integrados en el equipo activo.",
      unlockedHeroes: ["wolverine", "spider_woman"],
      nextChapter: "3C"
    },
    lossOutcome: {
      title: "Rastro Manchado",
      epilogue: "Creed hiere a Logan y escapa por los túneles del metro hacia los muelles. En la retirada, los héroes descubren que la Muestra 7 ya se fusionó con un huésped humano en la redacción del periódico...",
      penalties: "+1 Pánico en Nueva York. Logan empieza herido (con 2 cartas) en su siguiente aparición.",
      nextChapter: "3D"
    }
  },

  {
    id: "3A",
    step: 3,
    act: 1,
    actTitle: "ACTO I: LA SOMBRA EN MANHATTAN",
    title: "Capítulo 3: Primera Plana — La Furia de Venom",
    villainId: "venom",
    assignedHeroSlot1: "spider_woman",
    assignedHeroSlot2: "miles_morales",
    assignedHeroSlot3: "ghost_spider",
    squadOptions: ["spider_woman", "miles_morales", "ghost_spider", "spider_man_2099"],
    comicReference: "The Amazing Spider-Man #300 & Venom: Lethal Protector",
    coverImg: "./assets/covers/chapter_2B.png",
    synopsis: "«LA UNIÓN SIMBIÓTICA»\nLa Muestra 7 ha encontrado a su huésped ideal: Eddie Brock, un periodista arruinado y consumido por el rencor. Juntos se hacen llamar Venom y han tomado los estudios centrales del Daily Bugle, exigiendo una transmisión global en primera plana.\n\n«EL RESCATE»\nJessica Drew (Spider-Woman) y Miles Morales acuden al edificio. El simbionte cubre los muros con zarcillos oscuros que infectan todo lo que tocan. Hay reporteros y técnicos rehenes en todos los pisos.",
    locations: [
      { id: "daily_bugle", name: "Daily Bugle", img: "./assets/locations/daily_bugle.jpg", startVillain: true, effect: "Descubre la carta superior del Plan Maestro.", note: "Redacción tomada y cámaras transmitiendo." },
      { id: "midtown_high", name: "Midtown High School", img: "./assets/locations/midtown_high.jpg", effect: "Puedes obtener 1 ficha Heroica.", note: "Civiles viendo el noticiero en directo." },
      { id: "osborn_labs", name: "Osborn Laboratories", img: "./assets/locations/osborn_labs.jpg", effect: "Puedes obtener 1 ficha de Ataque.", note: "Monitores registrando las frecuencias de Venom." },
      { id: "brooklyn_bridge", name: "Brooklyn Bridge", img: "./assets/locations/brooklyn_bridge.jpg", startHeroes: true, effect: "Añade 1 Civil a cualquier Lugar. Rescata 1 Civil de aquí.", note: "Punto de entrada de los héroes por la bahía." },
      { id: "queens", name: "Queens", img: "./assets/locations/queens.jpg", effect: "Roba 1 carta si tienes 1 o 2 en mano.", note: "Líneas telefónicas saturadas por la emergencia." },
      { id: "oscorp_tower", name: "Oscorp Tower", img: "./assets/locations/oscorp_tower.jpg", effect: "Puedes obtener 1 ficha de Movimiento.", note: "Norman Osborn observando la mutación con fascinación." }
    ],
    setupChecklist: [
      "Tablero de Venom con 5 de Vida (2 héroes) u 8 (3 héroes).",
      "Fichas de Crisis: ten a mano las fichas de Crisis de la caja X-Men.",
      "Desafío Identidad Secreta: Periodistas en Daily Bugle (pos 0), Osborn Labs (pos 2) y Queens (pos 4).",
      "Venom empieza en el Daily Bugle (0). Héroes empiezan en Brooklyn Bridge (3)."
    ],
    specialRules: "BAM inflige 1 daño (o 2 daños si el héroe tiene fichas de Crisis). Derrota si los héroes acumulan 8 Crisis en total.",
    events: {
      initial: {
        title: "Edición Extraordinaria",
        rule: "Venom transmite en vivo: el primer héroe en entrar a su Lugar gana 1 ficha de Exposición.",
        flavor: "«¡Miren bien, ciudadanos de Nueva York! ¡Miren lo que su querido héroe nos hizo!»"
      },
      underPressure: {
        title: "Zarcillos por las Tuberías",
        rule: "Bajo Presión oficial: Venom juega Plan Maestro cada 2 cartas de héroe. Coloca 1 Civil en el Lugar opuesto a Venom.",
        flavor: "«¡El simbionte se multiplica con cada latido!»"
      },
      accelerated: {
        title: "Frecuencia Sónica",
        rule: "¡2ª Misión cumplida! Venom queda vulnerable. El Héroe que completó la misión puede descartar 1 de sus fichas de Crisis activando la sirena del Bugle.",
        flavor: "«¡La alarma de incendios del edificio! ¡El sonido lo está desestabilizando!»"
      },
      crisis: {
        title: "Furia Desbocada",
        rule: "Venom azota las paredes del estudio: reparte 1 ficha de Crisis al héroe con menos cartas en mano.",
        flavor: "«¡Nosotros no nos rendiremos jamás!»"
      }
    },
    winOutcome: {
      title: "Eddie Recupera el Control",
      epilogue: "La resonancia sónica de las alarmas hace retroceder la masa negra. Eddie Brock cae de rodillas, jadeando: «No quería lastimarlos... la voz me decía qué hacer...». En el piso queda una gota de simbionte rojo mutado que escapa por una rejilla... ¡Ahora el equipo debe decidir el destino de Brock!",
      bonusText: "¡Victoria táctica! Se activa el primer Punto de Decisión de la campaña.",
      hasDecision: true,
      decisionText: "¿Qué hacen con Eddie Brock?",
      decisionOptions: [
        { id: "ravencroft", label: "Encerrarlo en Ravencroft", effectText: "La ciudad se calma (-1 Pánico). Pero en Ravencroft está Cletus Kasady..." },
        { id: "aliado", label: "Dejarlo libre bajo custodia", effectText: "Venom se une como héroe de apoyo (+1 Pánico temporal en la opinión pública)." }
      ],
      nextChapter: "4"
    },
    lossOutcome: {
      title: "El Monstruo en las Calles",
      epilogue: "Venom salta por la ventana del Bugle hacia la noche. La ciudad entra en pánico al ver al monstruo en televisión nacional. Al amanecer lo encuentran en el muelle, agotado y sin recuerdos de la gota roja que se escurrió hacia Ravencroft...",
      penalties: "+1 Pánico en Nueva York. La semilla de Carnage avanza sin supervisión.",
      nextChapter: "4"
    }
  },

  {
    id: "4",
    step: 4,
    act: 2,
    actTitle: "ACTO II: CONSPIRACIÓN MUTANTE",
    title: "Capítulo 4: La Audiencia del Senador Kelly",
    villainId: "mystique",
    assignedHeroSlot1: "cyclops",
    assignedHeroSlot2: "jean_grey",
    assignedHeroSlot3: "spider_man_2099",
    squadOptions: ["cyclops", "jean_grey", "spider_man_2099", "miles_morales"],
    comicReference: "Uncanny X-Men #141-142 (Días del Futuro Pasado)",
    coverImg: "./assets/covers/chapter_2B.png",
    synopsis: "«LA LEY ANTIMUTANTE»\nEl caos simbiótico y las grietas multiversales han desatado una ola de histeria. El Senador Robert Kelly convoca una multitudinaria rueda de prensa en el auditorio de Midtown High para promover el Registro Obligatorio de Mutantes y Vigilantes Enmascarados.\n\n«EL COMPLOT DE ASESINATO»\nCharles Xavier detecta mediante telepatía un plan inminente: Mystique se ha infiltrado con una credencial de prensa para asesinar a Kelly en directo y culpar a los mutantes del magnicidio. Scott Summers (Cyclops) y Jean Grey deben proteger al hombre que quiere encarcelarlos.",
    locations: [
      { id: "midtown_high", name: "Midtown High School", img: "./assets/locations/midtown_high.jpg", startVillain: true, effect: "Puedes obtener 1 ficha Heroica.", note: "Auditorio donde el Senador Kelly da su discurso." },
      { id: "daily_bugle", name: "Daily Bugle", img: "./assets/locations/daily_bugle.jpg", effect: "Descubre la carta superior del Plan Maestro.", note: "Cámaras y reporteros transmitiendo el debate." },
      { id: "oscorp_tower", name: "Oscorp Tower", img: "./assets/locations/oscorp_tower.jpg", effect: "Puedes obtener 1 ficha de Movimiento.", note: "Francotiradores contratados por la Hermandad." },
      { id: "brooklyn_bridge", name: "Brooklyn Bridge", img: "./assets/locations/brooklyn_bridge.jpg", startHeroes: true, effect: "Añade 1 Civil a cualquier Lugar. Rescata 1 Civil de aquí.", note: "Punto de inicio de los héroes y de la caravana de Kelly." },
      { id: "queens", name: "Queens", img: "./assets/locations/queens.jpg", effect: "Roba 1 carta si tienes 1 o 2 en mano.", note: "Ruta de evacuación civil hacia los suburbios." },
      { id: "osborn_labs", name: "Osborn Laboratories", img: "./assets/locations/osborn_labs.jpg", effect: "Puedes obtener 1 ficha de Ataque.", note: "Servidores donde Osborn monitorea el caos político." }
    ],
    setupChecklist: [
      "Tablero de Mystique con 4 de Vida (2 héroes) o 6 (3 héroes).",
      "Preparación Especial: Coloca la ficha del Senador Robert Kelly en Brooklyn Bridge (Posición 3, junto a los Héroes).",
      "Mystique empieza en Midtown High (Posición 0).",
      "¡REGLA DE ORO!: Si el Senador Kelly recibe 1 punto de daño en cualquier momento, ¡los Héroes PIERDEN de inmediato!"
    ],
    specialRules: "Kelly se mueve con los Héroes. Los Héroes en su Lugar pueden absorber cualquier daño dirigido a él. Mystique tiene poca vida pero ataca con rapidez mortal.",
    events: {
      initial: {
        title: "Cualquier Rostro en la Multitud",
        rule: "Mystique adopta la forma de una periodista. Coloca 1 Civil extra en Midtown High.",
        flavor: "«La justicia llegará hoy para todos los que nos odian...»"
      },
      underPressure: {
        title: "Disparo al Podio",
        rule: "Bajo Presión oficial: Mystique juega Plan Maestro cada 2 cartas de héroe. Si Kelly está en su zona, un héroe debe descartar 1 carta de inmediato para salvarlo.",
        flavor: "«¡Cuidado, Senador! ¡Cuerpo a tierra!»"
      },
      accelerated: {
        title: "Cerco Telepático",
        rule: "¡2ª Misión cumplida! Jean Grey fija la mente de Mystique: queda vulnerable y los héroes pueden atacarla.",
        flavor: "«¡La tengo, Scott! ¡Sus ilusiones ya no funcionan!»"
      },
      crisis: {
        title: "Granada de Humo",
        rule: "Mystique arroja gas cegador y cambia de posición: muévela a un Lugar adyacente con Civiles.",
        flavor: "«Nunca atraparán a quien no pueden ver...»"
      }
    },
    winOutcome: {
      title: "Kelly Salvado",
      epilogue: "Cyclops repele el ataque y Kelly sale ileso bajo el escudo telequinético de Jean. Frente a las cámaras el senador balbucea: «Un mutante... acaba de salvarme la vida». Entre los escombros hallan un comunicador con órdenes firmadas por 'O' que apuntan al robo de Cerebro...",
      bonusText: "¡Victoria diplomática! Pánico en Nueva York baja -1. Se desbloquean Cyclops y Jean Grey.",
      unlockedHeroes: ["cyclops", "jean_grey"],
      nextChapter: "5A"
    },
    lossOutcome: {
      title: "Kelly Herido",
      epilogue: "Kelly sufre heridas y es evacuado en camilla. En el hospital declara el estado de sitio antimutante y otorga a Oscorp plenos poderes de detención...",
      penalties: "+1 Pánico en Nueva York. Las redadas comienzan y Osborn acelera su ofensiva.",
      nextChapter: "5B"
    }
  },

  {
    id: "5A",
    step: 5,
    act: 2,
    actTitle: "ACTO II: CONSPIRACIÓN MUTANTE",
    title: "Capítulo 5A: Asalto a la Instalación Arma X",
    villainId: "sabretooth",
    assignedHeroSlot1: "wolverine",
    assignedHeroSlot2: "storm",
    assignedHeroSlot3: "beast",
    squadOptions: ["wolverine", "storm", "beast", "spider_woman"],
    comicReference: "Weapon X (Barry Windsor-Smith) & Uncanny X-Men #205",
    coverImg: "./assets/covers/chapter_4A.png",
    synopsis: "«LOS SECRETOS DEL ADAMANTIUM»\nLos datos interceptados conducen a la remota base de Weapon X Facility en Alberta, Canadá. Osborn busca el protocolo biológico que permitió unir el metal indestructible al cuerpo de Logan, queriendo replicar la unión definitiva entre su cuerpo y el simbionte.\n\n«CREED DEFIENDE EL NIDO»\nVictor Creed ha sido apostado para custodiar los archivos. Logan y Ororo Munroe (Storm) descienden del X-Jet en medio de una tormenta de nieve para recuperar los expedientes antes de que el convoy despegue.",
    locations: [
      { id: "weapon_x", name: "Weapon X Facility", img: "./assets/locations/weapon_x.jpg", startVillain: true, effect: "Descarta 1 carta al fondo del mazo para ganar 2 fichas de Ataque.", note: "Laboratorio donde se forjó el adamantium." },
      { id: "osborn_labs", name: "Osborn Laboratories", img: "./assets/locations/osborn_labs.jpg", effect: "Puedes obtener 1 ficha de Ataque.", note: "Enlace satelital de descarga de datos." },
      { id: "muir_island", name: "Muir Island", img: "./assets/locations/muir_island.jpg", effect: "Otro Héroe en este Lugar o adyacente roba 1 carta.", note: "Moira MacTaggert monitoreando los biosensores." },
      { id: "x_jet", name: "X-Jet", img: "./assets/locations/x_jet.jpg", startHeroes: true, effect: "Puedes moverte a cualquier otro Lugar.", note: "Punto de despegue y aterrizaje del equipo táctico." },
      { id: "hangar_bay", name: "Hangar Bay", img: "./assets/locations/hangar_bay.jpg", effect: "Coge 1 ficha de Movimiento, Heroica o Ataque.", note: "Bodega de carga de la instalación." },
      { id: "xavier_institute", name: "Xavier Institute", img: "./assets/locations/xavier_institute.jpg", effect: "Roba cartas hasta tener 3 en mano.", note: "Base central donde Hank McCoy aguarda los discos." }
    ],
    setupChecklist: [
      "Tablero de Sabretooth con 5 de Vida (2 héroes) o 7 (3 héroes).",
      "Preparación Especial: Wolverine recibe la ficha de Cazado al inicio.",
      "Sabretooth empieza en Weapon X (0). Héroes empiezan en X-Jet (3)."
    ],
    specialRules: "BAM deal 2 al Cazado. El Cazado no puede caer KO dos veces. Sabretooth se potencia con la nieve de Weapon X.",
    events: {
      initial: {
        title: "Viejas Cicatrices",
        rule: "Arma X huele a los fantasmas de Logan. Coloca 1 Matón extra en Weapon X.",
        flavor: "«Bienvenido a casa, enano... donde te hicieron pedazos.»"
      },
      underPressure: {
        title: "Ventisca Sangrienta",
        rule: "Bajo Presión oficial: Sabretooth actúa cada 2 cartas de héroe. La visibilidad baja en su zona.",
        flavor: "«¡Siente el frío antes de morir!»"
      },
      accelerated: {
        title: "Tormenta de Relámpagos",
        rule: "¡2ª Misión cumplida! Storm canaliza un rayo polar que aturde a Creed: Sabretooth queda vulnerable.",
        flavor: "«¡Los cielos responden a mi llamado, Creed!»"
      },
      crisis: {
        title: "Furia Feral",
        rule: "Creed salta con garras extendidas sobre el Cazado: descarta 1 carta para esquivar el zarpazo.",
        flavor: "«¡Esto termina hoy!»"
      }
    },
    winOutcome: {
      title: "Archivos Recuperados",
      epilogue: "Logan deja a Creed noqueado sobre la nieve y asegura los discos de Arma X. Los informes confirman el peor temor: Osborn planea asaltar la Mansión X para apoderarse de Cerebro y localizar a todos los portadores compatibles con el simbionte...",
      bonusText: "¡Victoria en el hielo! Desbloquean a Storm para el equipo activo.",
      unlockedHeroes: ["storm"],
      nextChapter: "6A"
    },
    lossOutcome: {
      title: "Robo de Datos",
      epilogue: "Creed destruye la base y escapa con una copia de los protocolos de unión hacia el jet de Osborn. La Mansión X está en alerta máxima...",
      penalties: "+1 Pánico en Nueva York. El asedio a la Mansión X comenzará sin defensas perimetrales.",
      nextChapter: "6B"
    }
  },

  {
    id: "5B",
    step: 5,
    act: 2,
    actTitle: "ACTO II: CONSPIRACIÓN MUTANTE",
    title: "Capítulo 5B: Asedio a la Mansión X",
    villainId: "juggernaut",
    assignedHeroSlot1: "storm",
    assignedHeroSlot2: "beast",
    assignedHeroSlot3: "spider_ham",
    squadOptions: ["storm", "beast", "spider_ham", "wolverine"],
    comicReference: "X-Men #12-13 (El Origen de Juggernaut)",
    coverImg: "./assets/covers/chapter_5A.png",
    synopsis: "«LA FUERZA IMPARABLE»\nCon el Senador Kelly bajo custodia y la opinión pública enardecida, Osborn contrata a la fuerza más destructiva del planeta: Cain Marko (Juggernaut), hermanastro de Charles Xavier. Su objetivo: derribar los muros de la escuela y saquear la terminal maestra de Cerebro.\n\n«LA ÚLTIMA LÍNEA DE DEFENSA»\nCon Xavier ausente en una misión diplomática, Ororo Munroe y Hank McCoy coordinan la evacuación de los alumnos mientras Spider-Ham se ofrece como escudo: '¡Si es grande y no frena, es mi especialidad!'.",
    locations: [
      { id: "xavier_institute", name: "Xavier Institute", img: "./assets/locations/xavier_institute.jpg", startVillain: true, effect: "Roba cartas hasta tener 3 en mano.", note: "Mansión X: entrada a la sala de Cerebro." },
      { id: "hangar_bay", name: "Hangar Bay", img: "./assets/locations/hangar_bay.jpg", effect: "Coge 1 ficha de Movimiento, Heroica o Ataque.", note: "Compuertas blindadas que protegen el subsuelo." },
      { id: "x_jet", name: "X-Jet", img: "./assets/locations/x_jet.jpg", effect: "Puedes moverte a cualquier otro Lugar.", note: "Transporte de evacuación de los estudiantes." },
      { id: "muir_island", name: "Muir Island", img: "./assets/locations/muir_island.jpg", startHeroes: true, effect: "Otro Héroe en este Lugar o adyacente roba 1 carta.", note: "Punto de teletransporte de emergencia de los héroes." },
      { id: "queens", name: "Queens", img: "./assets/locations/queens.jpg", effect: "Roba 1 carta si tienes 1 o 2 en mano.", note: "Refugio urbano para los alumnos evacuados." },
      { id: "midtown_high", name: "Midtown High School", img: "./assets/locations/midtown_high.jpg", effect: "Puedes obtener 1 ficha Heroica.", note: "Prensa informando de explosiones en Westchester." }
    ],
    setupChecklist: [
      "Juggernaut tiene 8 de Vida FIJA (independientemente del número de jugadores).",
      "Juggernaut empieza en Xavier Institute (0). Héroes empiezan en Muir Island (3).",
      "Coloca 1 Civil extra en Xavier Institute representando a los alumnos en peligro."
    ],
    specialRules: "El BAM de Juggernaut golpea a todo Héroe en todos los Lugares por los que transitó este turno. Spider-Ham puede anular su siguiente movimiento con su carta especial.",
    events: {
      initial: {
        title: "¡Muros Derribados!",
        rule: "Juggernaut atraviesa la entrada principal: coloca 1 Matón en Xavier Institute.",
        flavor: "«¡Nada en este mundo puede detener al Juggernaut!»"
      },
      underPressure: {
        title: "Inercia Destructiva",
        rule: "Bajo Presión oficial: Juggernaut actúa cada 2 cartas de héroe. Su avance destruye barreras.",
        flavor: "«¡Charles me escondió esto toda la vida! ¡Ahora es mío!»"
      },
      accelerated: {
        title: "El Casco Agrietado",
        rule: "¡2ª Misión cumplida! Los héroes aflojan los remaches del casco místico de Cain: queda vulnerable a daño directo.",
        flavor: "«¡El casco se mueve! ¡Ahora, ataquen todos juntos!»"
      },
      crisis: {
        title: "Onda de Choque",
        rule: "Juggernaut golpea el suelo con ambos puños: todos los héroes en zonas adyacentes retroceden 1 Lugar.",
        flavor: "«¡Salgan de mi camino!»"
      }
    },
    winOutcome: {
      title: "Cerebro Blindado",
      epilogue: "Spider-Ham planta una trampa toon de cemento fresco y Storm desprende el casco de Cain con un rayo focalizado. Cain queda inmovilizado. Hank McCoy sella la terminal de Cerebro, pero descubre una conexión clandestina desde la órbita: ¡Magneto también busca la lista!",
      bonusText: "¡Defensa heroica! Se desbloquean Beast y Spider-Ham.",
      unlockedHeroes: ["beast", "spider_ham"],
      nextChapter: "6A"
    },
    lossOutcome: {
      title: "Brecha en el Subsuelo",
      epilogue: "Juggernaut arranca el disco de respaldo de Cerebro antes de que logren expulsarlo. La lista de mutantes compatibles está en manos enemigas...",
      penalties: "+1 Pánico en Nueva York. Magneto interviene alarmado por la caída de la escuela.",
      nextChapter: "6B"
    }
  },

  {
    id: "6A",
    step: 6,
    act: 2,
    actTitle: "ACTO II: CONSPIRACIÓN MUTANTE",
    title: "Capítulo 6A: Defensa de Cerebro y la Órbita",
    villainId: "juggernaut",
    assignedHeroSlot1: "cyclops",
    assignedHeroSlot2: "wolverine",
    assignedHeroSlot3: "spider_man_2099",
    squadOptions: ["cyclops", "wolverine", "spider_man_2099", "beast"],
    comicReference: "Uncanny X-Men #183 & The Amazing Spider-Man #229-230",
    coverImg: "./assets/covers/chapter_5A.png",
    synopsis: "«LA ÚLTIMA RESISTENCIA EN WESTCHESTER»\nCain Marko insiste en abrir la cámara de Cerebro para entregarle los datos a Osborn. Scott Summers y Logan se plantan frente a las compuertas blindadas del Hangar subterráneo con apoyo de Miguel O'Hara, cuyos registros del 2099 revelan cómo neutralizar la inercia de la gema de Cyttorak.",
    locations: [
      { id: "xavier_institute", name: "Xavier Institute", img: "./assets/locations/xavier_institute.jpg", startVillain: true, effect: "Roba cartas hasta tener 3 en mano.", note: "Juggernaut derribando las columnas del gran salón." },
      { id: "hangar_bay", name: "Hangar Bay", img: "./assets/locations/hangar_bay.jpg", startHeroes: true, effect: "Coge 1 ficha de Movimiento, Heroica o Ataque.", note: "Compuertas blindadas del hangar subterráneo." },
      { id: "x_jet", name: "X-Jet", img: "./assets/locations/x_jet.jpg", effect: "Puedes moverte a cualquier otro Lugar.", note: "Turbinas encendidas listas para la maniobra." },
      { id: "muir_island", name: "Muir Island", img: "./assets/locations/muir_island.jpg", effect: "Otro Héroe en este Lugar o adyacente roba 1 carta.", note: "Transmisión telepática de respaldo." },
      { id: "queens", name: "Queens", img: "./assets/locations/queens.jpg", effect: "Roba 1 carta si tienes 1 o 2 en mano.", note: "Refugio civil." },
      { id: "midtown_high", name: "Midtown High School", img: "./assets/locations/midtown_high.jpg", effect: "Puedes obtener 1 ficha Heroica.", note: "Comunicaciones satelitales." }
    ],
    setupChecklist: [
      "Juggernaut: 8 de Vida.",
      "Empieza en Xavier Institute (0). Héroes en Hangar Bay (3).",
      "Guarden comodines para concentrar ataques una vez superadas 2 misiones."
    ],
    specialRules: "BAM daña todo el recorrido de movimiento. La coordinación entre Cyclops y Wolverine es clave.",
    events: {
      initial: {
        title: "Carga Imparable",
        rule: "Juggernaut avanza sin descanso: coloca 1 Matón en Xavier Institute.",
        flavor: "«¡Nadie se interpone entre mi hermano y yo!»"
      },
      underPressure: {
        title: "Mamparas Aplastadas",
        rule: "Bajo Presión: Juggernaut actúa cada 2 cartas de héroe. Las compuertas se sobrecargan.",
        flavor: "«¡Sientan el poder de Cyttorak!»"
      },
      accelerated: {
        title: "Disparo Óptico Concusivo",
        rule: "¡2ª Misión cumplida! Cyclops abre su visor al máximo: Juggernaut queda vulnerable a ataques.",
        flavor: "«¡Logan, ahora! ¡Abre esa coraza!»"
      },
      crisis: {
        title: "Furia Ciega",
        rule: "Cain embiste hacia el hangar: los héroes en su zona deben retroceder o sufrir 1 daño.",
        flavor: "«¡A un lado!»"
      }
    },
    winOutcome: {
      title: "La Mole Neutralizada",
      epilogue: "Con una maniobra combinada entre los rayos de Scott y las garras de Logan, el casco de Cain cae al suelo. La mente de Marko queda desconectada. Cerebro está a salvo, pero en la pantalla brilla una señal de alerta cósmica: ¡Magneto ha tomado la estación orbital!",
      bonusText: "¡Victoria táctica! Se activa el Punto de Decisión con Magneto.",
      nextChapter: "7A"
    },
    lossOutcome: {
      title: "Cerebro en Peligro",
      epilogue: "Cain rompe el núcleo y extrae los expedientes. Magneto desciende de la órbita ofreciendo una alianza de emergencia...",
      penalties: "+1 Pánico en Nueva York.",
      nextChapter: "7B"
    }
  },

  {
    id: "6B",
    step: 6,
    act: 2,
    actTitle: "ACTO II: CONSPIRACIÓN MUTANTE",
    title: "Capítulo 6B: La Estación de los Centinelas",
    villainId: "magneto",
    assignedHeroSlot1: "jean_grey",
    assignedHeroSlot2: "beast",
    assignedHeroSlot3: "spider_man",
    squadOptions: ["jean_grey", "beast", "spider_man", "storm"],
    comicReference: "X-Men #14 & Uncanny X-Men #5",
    coverImg: "./assets/covers/chapter_7A.png",
    synopsis: "«CENTINELAS EN ÓRBITA»\nTras la crisis política, Oscorp reactivó la vieja estación Sentinel Space Station para cazar mutantes con satélites de tiro. Magneto no esperó: tomó la estación orbital y amenaza con estrellarla sobre Washington si no se derogan las leyes antimutantes.",
    locations: [
      { id: "sentinel_station", name: "Sentinel Space Station", img: "./assets/locations/sentinel_station.jpg", startVillain: true, effect: "Descarta 1 carta para cambiar 1 carta de la Trama.", note: "Estación armada bajo control magnético." },
      { id: "asteroid_m", name: "Asteroid M", img: "./assets/locations/asteroid_m.jpg", effect: "Inflige 1 daño a 1 Matón o Secuaz en cualquier Lugar.", note: "Ciudadela de Erik en órbita." },
      { id: "genosha", name: "Genosha", img: "./assets/locations/genosha.jpg", effect: "Rescata 1 Civil de este Lugar.", note: "Refugio mutante en la Tierra." },
      { id: "hangar_bay", name: "Hangar Bay", img: "./assets/locations/hangar_bay.jpg", startHeroes: true, effect: "Coge 1 ficha de acción.", note: "Punto de acople del X-Jet en la estación." },
      { id: "xavier_institute", name: "Xavier Institute", img: "./assets/locations/xavier_institute.jpg", effect: "Roba hasta 3 cartas.", note: "Enlace telepático de Jean Grey con la órbita." },
      { id: "x_jet", name: "X-Jet", img: "./assets/locations/x_jet.jpg", effect: "Muévete a cualquier Lugar.", note: "Nave de abordaje espacial." }
    ],
    setupChecklist: [
      "Tablero de Magneto con 5 de Vida (2 héroes) o 7 (3 héroes).",
      "Preparación Especial: Misión «Usar Cerebro» sustituye a Rescatar Civiles.",
      "Regla de Pérdida: ¡Si en algún momento no queda ningún Civil en el mapa, pierden!",
      "Magneto empieza en Sentinel Station (0). Héroes en Hangar Bay (3)."
    ],
    specialRules: "Beast y Jean Grey son vitales para aportar las acciones Heroicas necesarias para Cerebro sin vaciar a los civiles.",
    events: {
      initial: {
        title: "Campos de Fuerza Polarizados",
        rule: "Magneto añade 1 Civil al lugar opuesto cada turno.",
        flavor: "«No permitiré que vuelvan a encadenar a los míos...»"
      },
      underPressure: {
        title: "Metal Retorcido",
        rule: "Bajo Presión: Magneto actúa cada 2 cartas de héroe. Las mamparas de la estación vibran.",
        flavor: "«¡El hierro obedece a mi voluntad!»"
      },
      accelerated: {
        title: "Sobrecarga de Sistemas",
        rule: "¡2ª Misión cumplida! Magneto queda vulnerable. Jean Grey abre una brecha en sus escudos magnéticos.",
        flavor: "«¡Erik, escucha la razón antes de que destruyas todo!»"
      },
      crisis: {
        title: "Pulso Electromagnético",
        rule: "Un pulso EMP sacude la estación: cada héroe descarta 1 ficha de acción.",
        flavor: "«¡Apaguen sus artefactos!»"
      }
    },
    winOutcome: {
      title: "La Estación Desactivada",
      epilogue: "Jean Grey penetra en la mente de Magneto y le muestra las pruebas de Osborn: Norman manipuló los satélites para incitar su ataque. Magneto baja las manos, desconecta los Centinelas y ofrece su ayuda a la alianza...",
      bonusText: "¡Pacto magnético logrado! Se desbloquea Magneto (Héroe).",
      unlockedHeroes: ["magneto_hero"],
      nextChapter: "7A"
    },
    lossOutcome: {
      title: "Caída Orbital",
      epilogue: "La estación se desvía hacia el océano. Magneto huye a Genosha furioso pero consciente de la conspiración de Osborn...",
      penalties: "+1 Pánico en Nueva York.",
      nextChapter: "7B"
    }
  },

  {
    id: "7A",
    step: 7,
    act: 3,
    actTitle: "ACTO III: MÁXIMA MATANZA",
    title: "Capítulo 7: Conferencia en Genosha",
    villainId: "magneto",
    assignedHeroSlot1: "beast",
    assignedHeroSlot2: "jean_grey",
    assignedHeroSlot3: "ghost_spider",
    squadOptions: ["beast", "jean_grey", "ghost_spider", "spider_man"],
    comicReference: "Fatal Attractions & Uncanny X-Men #304",
    coverImg: "./assets/covers/chapter_7A.png",
    synopsis: "«LA CIUDADELA DE GENOSHA»\nMagneto ha convocado a los mutantes del mundo en Genosha para formar un frente soberano. Sin embargo, agentes durmientes de Osborn han liberado esporas simbióticas en la bahía de la isla. Hank McCoy y Jean Grey viajan para negociar un cese al fuego y sellar los contenedores biológicos antes de que la infección se propague.",
    locations: [
      { id: "genosha", name: "Genosha", img: "./assets/locations/genosha.jpg", startVillain: true, effect: "Rescata 1 Civil de este Lugar.", note: "Consejo de gobierno mutante." },
      { id: "asteroid_m", name: "Asteroid M", img: "./assets/locations/asteroid_m.jpg", effect: "Inflige 1 daño a 1 Matón o Secuaz en cualquier Lugar.", note: "Defensas orbitales de respaldo." },
      { id: "sentinel_station", name: "Sentinel Space Station", img: "./assets/locations/sentinel_station.jpg", effect: "Descarta 1 carta para cambiar 1 carta de la Trama.", note: "Radares de detección biológica." },
      { id: "hangar_bay", name: "Hangar Bay", img: "./assets/locations/hangar_bay.jpg", startHeroes: true, effect: "Coge 1 ficha de acción.", note: "Punto de aterrizaje del X-Jet en Genosha." },
      { id: "xavier_institute", name: "Xavier Institute", img: "./assets/locations/xavier_institute.jpg", effect: "Roba hasta 3 cartas.", note: "Enlace constante con Cerebro." },
      { id: "x_jet", name: "X-Jet", img: "./assets/locations/x_jet.jpg", effect: "Muévete a cualquier Lugar.", note: "Transporte de evacuación médica." }
    ],
    setupChecklist: [
      "Tablero de Magneto con 5 de Vida (2 héroes) o 7 (3 héroes).",
      "Preparación Especial: Misión «Usar Cerebro» activa (gastar Heroica + Movimiento 3 veces).",
      "¡No rescates a todos los civiles de la isla para no perder la partida!",
      "Magneto empieza en Genosha (0). Héroes en Hangar Bay (3)."
    ],
    specialRules: "Beast usa su intelecto para tratar Heroicas como comodines. Jean Grey multiplica las mejores cartas de la Trama.",
    events: {
      initial: {
        title: "El Santuario Mutante",
        rule: "Civiles congregados en la plaza de Genosha: coloca 1 Civil extra en Genosha.",
        flavor: "«Aquí nadie volverá a temer a los humanos...»"
      },
      underPressure: {
        title: "Tensión en el Consejo",
        rule: "Bajo Presión: Magneto actúa cada 2 cartas de héroe. Las patrullas acordonan la zona.",
        flavor: "«¡No permitiré saboteadores en mi tierra!»"
      },
      accelerated: {
        title: "Acuerdo de Emergencia",
        rule: "¡2ª Misión cumplida! Magneto reconoce la verdad sobre la cepa simbiótica y queda vulnerable a ataques.",
        flavor: "«¡Cletus Kasady... Osborn soltó a esa bestia en Ravencroft!»"
      },
      crisis: {
        title: "Vórtice Magnético",
        rule: "Estructuras metálicas se elevan: descarta 1 ficha para asegurar el perímetro.",
        flavor: "«¡El cielo nos pertenecerá!»"
      }
    },
    winOutcome: {
      title: "El Frente Unido",
      epilogue: "Magneto comprende que Osborn ha utilizado la distracción de Genosha para liberar a Cletus Kasady de Ravencroft con la Muestra 7 mutada. Erik se quita el casco y une fuerzas con los X-Men y el Spider-Verse: «Esta monstruosidad consumirá a humanos y mutantes por igual. Pelearémos juntos.»",
      bonusText: "¡Alianza total desbloqueada! Magneto se incorpora formalmente como héroe jugable.",
      unlockedHeroes: ["magneto_hero"],
      nextChapter: "8A"
    },
    lossOutcome: {
      title: "Aislamiento en Genosha",
      epilogue: "Magneto sella las fronteras de Genosha y se niega a cooperar. La alianza debe regresar a Nueva York en solitario para enfrentar al Duende Verde...",
      penalties: "+1 Pánico en Nueva York.",
      nextChapter: "8B"
    }
  },

  {
    id: "8A",
    step: 8,
    act: 3,
    actTitle: "ACTO III: MÁXIMA MATANZA",
    title: "Capítulo 8: El Duende Desesperado (Red Goblin)",
    villainId: "green_goblin",
    assignedHeroSlot1: "mystique_hero",
    assignedHeroSlot2: "spider_man",
    assignedHeroSlot3: "black_cat",
    squadOptions: ["mystique_hero", "spider_man", "black_cat", "magneto_hero"],
    comicReference: "The Amazing Spider-Man #798-800 (Go Down Swinging)",
    coverImg: "./assets/covers/chapter_4A.png",
    synopsis: "«LA CAÍDA DE NORMAN OSBORN»\nCon sus laboratorios allanados y su corporación colapsando, Norman Osborn se inyecta los últimos residuos mutados de la Muestra 7 combinados con su fórmula del Duende. Enloquecido, sobrevuela Manhattan en su planeador arrojando bombas sobre el Daily Bugle y los puentes.\n\n«INFILTRACIÓN Y JUSTICIA»\nMystique (ahora operando como heroína rebelde que busca venganza contra Osborn) y Spider-Man deben derribar el planeador antes de que la ciudad sea reducida a cenizas.",
    locations: [
      { id: "daily_bugle", name: "Daily Bugle", img: "./assets/locations/daily_bugle.jpg", startVillain: true, effect: "Descubre la carta superior del Plan Maestro.", note: "El Duende bombardeando los estudios del Bugle." },
      { id: "brooklyn_bridge", name: "Brooklyn Bridge", img: "./assets/locations/brooklyn_bridge.jpg", effect: "Añade 1 Civil a cualquier Lugar. Rescata 1 Civil de aquí.", note: "Caravanas de evacuación atacadas." },
      { id: "queens", name: "Queens", img: "./assets/locations/queens.jpg", effect: "Roba 1 carta si tienes 1 o 2 en mano.", note: "Incendios en las inmediaciones." },
      { id: "oscorp_tower", name: "Oscorp Tower", img: "./assets/locations/oscorp_tower.jpg", startHeroes: true, effect: "Puedes obtener 1 ficha de Movimiento.", note: "Punto de abordaje de los héroes." },
      { id: "osborn_labs", name: "Osborn Laboratories", img: "./assets/locations/osborn_labs.jpg", effect: "Puedes obtener 1 ficha de Ataque.", note: "Ruinas humeantes del laboratorio." },
      { id: "midtown_high", name: "Midtown High School", img: "./assets/locations/midtown_high.jpg", effect: "Puedes obtener 1 ficha Heroica.", note: "Refugio temporal de estudiantes." }
    ],
    setupChecklist: [
      "Green Goblin: 5 de Vida (2 héroes) o 7 (3 héroes).",
      "Preparación Especial: Mazo de Amenazas boca abajo, sin amenazas iniciales en las zonas.",
      "Desafío Identidad Secreta: 1 Periodista en Daily Bugle (0), Queens (2) y Osborn Labs (4).",
      "El Duende en Daily Bugle (0). Héroes en Oscorp Tower (3)."
    ],
    specialRules: "No se puede dañar al Duende mientras haya civiles en su zona. Mystique desvía el daño hacia los matones.",
    events: {
      initial: {
        title: "Lluvia de Calabazas Ardientes",
        rule: "El Duende bombardea las calles: coloca 1 ficha de Amenaza adicional en el mazo.",
        flavor: "«¡Si yo caigo, Nueva York arderá conmigo!»"
      },
      underPressure: {
        title: "Ataque en Picada",
        rule: "Bajo Presión: Green Goblin actúa cada 2 cartas de héroe. Roba una Amenaza inmediatamente.",
        flavor: "«¡Nadie escapa de mi planeador!»"
      },
      accelerated: {
        title: "El Planeador Desmantelado",
        rule: "¡2ª Misión cumplida! Mystique sabotea las turbinas del planeador: el Duende cae al asfalto y queda vulnerable.",
        flavor: "«¡Tus juguetes ya no vuelan, Norman!»"
      },
      crisis: {
        title: "Explosión Tóxica",
        rule: "Una bomba de gas explota en la zona: los héroes presentes deben descartar 1 carta de su mano.",
        flavor: "«¡Disfruten el veneno!»"
      }
    },
    winOutcome: {
      title: "Norman Osborn Derrocado",
      epilogue: "Peter arranca la máscara destrozada del Duende ante las cámaras y las autoridades se llevan a Norman Osborn esposado. Pero antes de ser escoltado susurra entre risas dementes: «Llegan tarde... ya le entregué el catalizador a Cletus... Kasady ya despertó en Ravencroft...»",
      bonusText: "¡Victoria decisiva! Mystique queda desbloqueada como heroína.",
      unlockedHeroes: ["mystique_hero"],
      nextChapter: "9A"
    },
    lossOutcome: {
      title: "Caos en los Tejados",
      epilogue: "El Duende desaparece en la noche dejando el Daily Bugle envuelto en llamas. Mientras la policía atiende el incendio, Kasady completa su escape de Ravencroft...",
      penalties: "+1 Pánico en Nueva York.",
      nextChapter: "9B"
    }
  },

  {
    id: "9A",
    step: 9,
    act: 3,
    actTitle: "ACTO III: MÁXIMA MATANZA",
    title: "Capítulo 9: El Ariete Carmesí",
    villainId: "rhino",
    assignedHeroSlot1: "magneto_hero",
    assignedHeroSlot2: "wolverine",
    assignedHeroSlot3: "spider_woman",
    squadOptions: ["magneto_hero", "wolverine", "spider_woman", "spider_ham"],
    comicReference: "Maximum Carnage Part 1 & The Amazing Spider-Man #362",
    coverImg: "./assets/covers/chapter_1.png",
    synopsis: "«EL ARIETE SIMBIÓTICO»\nCletus Kasady ha escapado de Ravencroft convertido en Carnage y lo primero que hizo fue reclutar a su antiguo vecino de celda: Aleksei Sytsevich (Rhino). Inyectado con zarcillos simbióticos carmesí, Rhino se ha convertido en un ariete biomecánico que embiste las columnas del Puente de Brooklyn para partir Manhattan en dos.\n\n«EL CHOQUE DE TITANES»\nMagneto y Wolverine se despliegan en el puente para frenar la carga monstruosa antes de que las torres colapsen sobre el East River.",
    locations: [
      { id: "brooklyn_bridge", name: "Brooklyn Bridge", img: "./assets/locations/brooklyn_bridge.jpg", startVillain: true, effect: "Añade 1 Civil a cualquier Lugar. Rescata 1 Civil de aquí.", note: "Columnas del puente crujiendo bajo la embestida roja." },
      { id: "oscorp_tower", name: "Oscorp Tower", img: "./assets/locations/oscorp_tower.jpg", effect: "Puedes obtener 1 ficha de Movimiento.", note: "Perímetro acordonado por la Guardia Nacional." },
      { id: "osborn_labs", name: "Osborn Laboratories", img: "./assets/locations/osborn_labs.jpg", effect: "Puedes obtener 1 ficha de Ataque.", note: "Focos de engendros simbióticos detectados." },
      { id: "daily_bugle", name: "Daily Bugle", img: "./assets/locations/daily_bugle.jpg", startHeroes: true, effect: "Descubre la carta superior del Plan Maestro.", note: "Punto de mando táctico de los héroes." },
      { id: "queens", name: "Queens", img: "./assets/locations/queens.jpg", effect: "Roba 1 carta si tienes 1 o 2 en mano.", note: "Comunidades refugiadas en los sótanos." },
      { id: "midtown_high", name: "Midtown High School", img: "./assets/locations/midtown_high.jpg", effect: "Puedes obtener 1 ficha Heroica.", note: "Hospital de campaña improvisado." }
    ],
    setupChecklist: [
      "Rhino: 5 de Vida (2 héroes) u 8 (3 héroes).",
      "Fichas de Crisis activas por los zarcillos de Carnage.",
      "Rhino en Brooklyn Bridge (0). Héroes en Daily Bugle (3)."
    ],
    specialRules: "BAM daña por cada zona atravesada. Magneto puede usar su ataque en área para frenar a los matones que siguen a Rhino.",
    events: {
      initial: {
        title: "Zarcillos en el Acero",
        rule: "Rhino arrastra engendros simbióticos: coloca 1 Matón extra en Brooklyn Bridge.",
        flavor: "«¡El jefe de rojo me prometió aplastar esta ciudad entera!»"
      },
      underPressure: {
        title: "Fisura en la Calzada",
        rule: "Bajo Presión: Rhino actúa cada 2 cartas de héroe. El puente tiembla peligrosamente.",
        flavor: "«¡Sientan la verdadera fuerza!»"
      },
      accelerated: {
        title: "Pinza de Acero Magnético",
        rule: "¡2ª Misión cumplida! Magneto retuerce las vigas del puente y aprisiona las extremidades de Rhino: queda vulnerable a ataques.",
        flavor: "«Tu armadura contiene hierro, bestia... y el hierro me obedece a mí.»"
      },
      crisis: {
        title: "Colapso Inminente",
        rule: "Un cable de suspensión se rompe: cada héroe en el puente debe gastar 1 Movimiento o sufrir 1 daño.",
        flavor: "«¡Cuidado con los cables tensores!»"
      }
    },
    winOutcome: {
      title: "El Puente Resiste",
      epilogue: "Magneto aplasta la armadura de Rhino con vigas retorcidas y Wolverine corta los zarcillos rojos. Aleksei queda inconsciente. Entre los residuos se detecta la firma térmica definitiva: ¡Carnage ha tomado Times Square y desatado la Máxima Matanza!",
      bonusText: "¡El paso está libre! Toda la alianza se concentra para la batalla final.",
      nextChapter: "10A"
    },
    lossOutcome: {
      title: "Manhattan Asediada",
      epilogue: "El puente queda intransitable y Rhino escapa hacia Times Square para unirse a Carnage. Las alarmas de defensa civil aúllan en toda la isla...",
      penalties: "+1 Pánico en Nueva York. Carnage empezará con engendros adicionales en la batalla final.",
      nextChapter: "10B"
    }
  },

  {
    id: "10A",
    step: 10,
    act: 3,
    actTitle: "ACTO III: MÁXIMA MATANZA",
    title: "Capítulo 10: Gran Final — Máxima Matanza",
    villainId: "carnage",
    assignedHeroSlot1: "venom_hero",
    assignedHeroSlot2: "spider_man",
    assignedHeroSlot3: "wolverine",
    squadOptions: [
      "venom_hero", "spider_man", "wolverine", "cyclops", "storm",
      "jean_grey", "beast", "magneto_hero", "mystique_hero", "miles_morales",
      "ghost_spider", "spider_woman", "spider_man_2099", "spider_ham", "black_cat"
    ],
    comicReference: "Maximum Carnage (Crossover Completo de 14 Partes, 1993)",
    coverImg: "./assets/covers/chapter_10A.png",
    synopsis: "«LA HORA OSCURA DE MANHATTAN»\nTimes Square se ha transformado en un infierno de zarcillos carmesí y zombis simbióticos. Cletus Kasady, encaramado en los letreros luminosos destruidos, ríe con locura desatada. Si el medidor de engendros llega a 10, la infección consumirá la metrópoli entera.\n\n«EL FRENTE UNIDO»\nPeter Parker y Eddie Brock (Venom) lideran la vanguardia, flanqueados por los X-Men y todos los héroes del multiverso arácnido. La batalla final por el destino de Nueva York ha comenzado.",
    locations: [
      { id: "daily_bugle", name: "Daily Bugle", img: "./assets/locations/daily_bugle.jpg", startVillain: true, effect: "Descubre la carta superior del Plan Maestro.", note: "Times Square / Redacción: epicentro del nido de Carnage." },
      { id: "osborn_labs", name: "Osborn Laboratories", img: "./assets/locations/osborn_labs.jpg", effect: "Puedes obtener 1 ficha de Ataque.", note: "Depósitos donde se generó el mutágeno." },
      { id: "oscorp_tower", name: "Oscorp Tower", img: "./assets/locations/oscorp_tower.jpg", effect: "Puedes obtener 1 ficha de Movimiento.", note: "Balcones cubiertos por zarcillos biológicos." },
      { id: "xavier_institute", name: "Xavier Institute", img: "./assets/locations/xavier_institute.jpg", startHeroes: true, effect: "Roba cartas hasta tener 3 en mano.", note: "Base médica y de despliegue final de la alianza." },
      { id: "brooklyn_bridge", name: "Brooklyn Bridge", img: "./assets/locations/brooklyn_bridge.jpg", effect: "Añade 1 Civil a cualquier Lugar. Rescata 1 Civil de aquí.", note: "Perímetro perimetral asegurado por los héroes." },
      { id: "queens", name: "Queens", img: "./assets/locations/queens.jpg", effect: "Roba 1 carta si tienes 1 o 2 en mano.", note: "Último bastión civil de la ciudad." }
    ],
    setupChecklist: [
      "Tablero de Carnage con 5 de Vida (2 héroes) u 8 (3 héroes).",
      "Medidor de Engendros: Coloca el marcador en la casilla 0 (o ajustado según el nivel de Pánico de la campaña).",
      "¡REGLA DE DERROTA!: Si el medidor de engendros llega a 10, ¡los Héroes PIERDEN la campaña!",
      "Carnage empieza en Daily Bugle (0). Los Héroes empiezan en Xavier Institute (3).",
      "Equipa libremente a tu tercer héroe entre TODOS los 15 héroes desbloqueados."
    ],
    specialRules: "Los Civiles en el Lugar de Carnage reciben fichas de Crisis con cada BAM. Si un exceso descarta civiles con Crisis, el medidor de engendros avanza velozmente. Rescaten civiles de inmediato con Spider-Man.",
    events: {
      initial: {
        title: "Nido Carmesí",
        rule: "Carnage ríe desde los tejados: coloca 1 ficha de Crisis sobre cada Civil presente en el Lugar de Carnage.",
        flavor: "«¡No hay ley! ¡No hay reglas! ¡Solo Máxima Matanza!»"
      },
      underPressure: {
        title: "Oleada de Engendros",
        rule: "Bajo Presión oficial: Carnage actúa cada 2 cartas de héroe. El medidor de engendros avanza 1 casilla.",
        flavor: "«¡Crezcan, hijos míos! ¡Aliméntense del miedo!»"
      },
      accelerated: {
        title: "Armonía Sónica y Rayos de Plasma",
        rule: "¡2ª Misión cumplida! Toda la alianza concentra fuego sónico y rayos ópticos: Carnage queda vulnerable a daño directo.",
        flavor: "«¡Eddie, Scott, Ororo... fuego concentrado al unísono!»"
      },
      crisis: {
        title: "Cuchillas de Zarcillo Sangriento",
        rule: "Carnage lanza zarcillos cortantes a los lugares adyacentes: cada héroe debe descartar 1 carta de Ataque o sufrir 1 herida.",
        flavor: "«¡Nadie saldrá entero de mi fiesta!»"
      }
    },
    winOutcome: {
      title: "¡VICTORIA TOTAL: LA MUTACIÓN DETENIDA!",
      epilogue: "En un estallido coordinado de resonancia sónica de Venom, rayos ópticos de Cyclops, tormentas eléctricas de Storm y las telarañas combinadas de Peter y Miles, el simbionte carmesí se desintegra y Cletus Kasady cae inconsciente en una cápsula criogénica sellada por S.H.I.E.L.D.\n\nEl sol amanece sobre una Manhattan en reconstrucción. Spider-Man y Cyclops se estrechan la mano sobre la cornisa del Daily Bugle. Los mutantes y los arácnidos han demostrado al mundo entero que cuando el mal amenaza con arrasarlo todo, no hay diferencias que impidan la victoria. ¡Han completado con honor la campaña MAXIMUM MUTATION!",
      bonusText: "★ ¡CAMPAÑA COMPLETADA CON VICTORIA HEROICA HISTÓRICA! ★",
      unlockedHeroes: [],
      nextChapter: null
    },
    lossOutcome: {
      title: "La Caída en las Sombras",
      epilogue: "El medidor de engendros llega a 10 y la biomasa carmesí inunda Manhattan, forzando a la alianza a evacuar a los civiles supervivientes hacia Genosha y Westchester. Aunque derrotados hoy, los héroes se reorganizan en las sombras, jurando volver cuando la marea roja disminuya...",
      penalties: "Fin de la campaña con secuelas tácticas. La resistencia mutante y arácnida continuará.",
      nextChapter: null
    }
  }
];

// Replicar capítulos hermanos para ramas B
const ch2B = CAMPAIGN_CHAPTERS.find(c => c.id === "2B");
const ch3C = Object.assign({}, ch2B, { id: "3C", step: 3, title: "Capítulo 3C: Cacería en los Túneles", nextChapter: "4" });
const ch3D = Object.assign({}, ch2B, { id: "3D", step: 3, title: "Capítulo 3D: Cemento Fresco en Midtown", nextChapter: "4" });
CAMPAIGN_CHAPTERS.push(ch3C, ch3D);

const ch4 = CAMPAIGN_CHAPTERS.find(c => c.id === "4");
const ch4B = Object.assign({}, ch4, { id: "4B", step: 4, title: "Capítulo 4B: Emboscada a la Caravana", nextChapter: "5B" });
CAMPAIGN_CHAPTERS.push(ch4B);

const ch8 = CAMPAIGN_CHAPTERS.find(c => c.id === "8A");
const ch8B = Object.assign({}, ch8, { id: "8B", step: 8, title: "Capítulo 8B: El Duende sin Máscara", nextChapter: "9B" });
CAMPAIGN_CHAPTERS.push(ch8B);

const ch9 = CAMPAIGN_CHAPTERS.find(c => c.id === "9A");
const ch9B = Object.assign({}, ch9, { id: "9B", step: 9, title: "Capítulo 9B: Asedio al Puente", nextChapter: "10B" });
CAMPAIGN_CHAPTERS.push(ch9B);

const ch10 = CAMPAIGN_CHAPTERS.find(c => c.id === "10A");
const ch10B = Object.assign({}, ch10, { id: "10B", step: 10, title: "Capítulo 10B: Gran Final — La Resistencia Desesperada", nextChapter: null });
CAMPAIGN_CHAPTERS.push(ch10B);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CAMPAIGN_LOCATIONS,
    CAMPAIGN_HEROES,
    CAMPAIGN_VILLAINS,
    CAMPAIGN_REWARDS,
    CAMPAIGN_CHAPTERS
  };
}
