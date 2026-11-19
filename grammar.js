// --- GUÍA DE 30 REGLAS GRAMATICALES COTIDIANAS POR NIVEL (10 POR NIVEL) ---
const GRAMMAR_RULES_GUIDE = {
  basic: [
    {
      title: "1. Verbo 'To Be' (Ser / Estar / Edad / Estados)",
      formula: "I am | You/We/They are | He/She/It is",
      examples: [
        { en: "I'm ready to go, are you?", es: "Estoy listo para ir, ¿y tú?" },
        { en: "She is 28 years old and she's hungry.", es: "Ella tiene 28 años y tiene hambre." }
      ],
      tip: "⚠️ En inglés la edad, el hambre, la sed y el frío usan 'to be', nunca 'have' ('I am 30', 'I am cold')."
    },
    {
      title: "2. Presente Simple (Rutinas, Hábitos y Verdades)",
      formula: "Afirmativo: He/She/It + verbo(-s) | Pregunta/Negación: Do / Does + verbo base",
      examples: [
        { en: "He works from home on Fridays.", es: "Él trabaja desde casa los viernes." },
        { en: "Does she speak English? — No, she doesn't.", es: "¿Ella habla inglés? — No." }
      ],
      tip: "💡 En cuanto aparece 'does' o 'doesn't', el verbo principal pierde la '-s' ('Does she work?', no 'works')."
    },
    {
      title: "3. Presente Continuo (Lo que pasa ahora mismo)",
      formula: "am / is / are + verbo(-ing)",
      examples: [
        { en: "I'm driving right now, can I call you back?", es: "Estoy manejando ahora mismo, ¿te puedo devolver la llamada?" },
        { en: "They are waiting for us outside.", es: "Ellos nos están esperando afuera." }
      ],
      tip: "⚠️ No lo uses con verbos de estado como 'know', 'want', 'like' o 'need' ('I need help', nunca 'I'm needing')."
    },
    {
      title: "4. Pasado Simple (Acciones terminadas en un momento pasado)",
      formula: "Sujeto + verbo en pasado (-ed o irregular) | Negación/Pregunta: didn't / Did + verbo base",
      examples: [
        { en: "I went to the beach last weekend.", es: "Fui a la playa el fin de semana pasado." },
        { en: "Did you see my message? — Sorry, I didn't see it.", es: "¿Viste mi mensaje? — Perdón, no lo vi." }
      ],
      tip: "⚠️ Igual que con 'does', después de 'didn't' o 'Did' el verbo vuelve a su forma base ('didn't go', nunca 'didn't went')."
    },
    {
      title: "5. Futuro Cotidiano: 'Going to' vs 'Will'",
      formula: "Plan decidido: am/is/are + going to + verbo | Decisión espontánea: will + verbo",
      examples: [
        { en: "We're going to watch a movie tonight.", es: "Vamos a ver una película esta noche (ya planeado)." },
        { en: "The phone is ringing — I'll get it!", es: "Suena el teléfono — ¡Yo contesto! (decisión al instante)." }
      ],
      tip: "🗣️ En habla rápida, 'going to' suena casi siempre como 'gonna' ('I'm gonna call you')."
    },
    {
      title: "6. 'There is' / 'There are' (Haber de existencia)",
      formula: "Singular/Incontable: There is | Plural: There are",
      examples: [
        { en: "There is a lot of traffic today.", es: "Hay mucho tráfico hoy." },
        { en: "Are there any seats available?", es: "¿Hay asientos disponibles?" }
      ],
      tip: "⚠️ Nunca uses 'Have' para decir 'hay' ('There are two options', nunca 'Have two options')."
    },
    {
      title: "7. Contables vs Incontables ('Much / Many / A lot of')",
      formula: "Plurales: How many / many | Incontables (agua, dinero, tiempo): How much / much",
      examples: [
        { en: "How much time do we have left?", es: "¿Cuánto tiempo nos queda?" },
        { en: "I don't have many meetings today, just a lot of emails.", es: "No tengo muchas reuniones hoy, solo muchos correos." }
      ],
      tip: "💡 'A lot of' es tu comodín seguro: funciona tanto para contables como para incontables en frases afirmativas."
    },
    {
      title: "8. Preposiciones de Tiempo ('In / On / At')",
      formula: "AT + hora exacta | ON + días y fechas | IN + meses, años y partes del día",
      examples: [
        { en: "The meeting is on Monday at 9:30 AM.", es: "La reunión es el lunes a las 9:30 AM." },
        { en: "I usually drink coffee in the morning.", es: "Usualmente tomo café en la mañana." }
      ],
      tip: "💡 Excepción clave: se dice 'in the morning/afternoon/evening', pero 'at night' y 'on the weekend'."
    },
    {
      title: "9. Pronombres Objeto y Posesivos ('Me / Him / Her / Their')",
      formula: "Después de verbo o preposición: me, you, him, her, it, us, them",
      examples: [
        { en: "Can you send it to me when you finish?", es: "¿Me lo puedes enviar cuando termines?" },
        { en: "I saw them at the mall yesterday.", es: "Los vi en el centro comercial ayer." }
      ],
      tip: "⚠️ No confundas 'he/she' (quien hace la acción) con 'him/her' (quien la recibe: 'Call her', no 'Call she')."
    },
    {
      title: "10. Comparativos y Superlativos Cotidianos",
      formula: "Cortos: -er than / the -est | Largos: more ... than / the most ...",
      examples: [
        { en: "This route is faster than the highway.", es: "Esta ruta es más rápida que la autopista." },
        { en: "That was the best meal I've had all week.", es: "Esa fue la mejor comida que he tenido en toda la semana." }
      ],
      tip: "⚠️ Nunca mezcles ambos ('more faster' es incorrecto). Irregulares clave: good → better → best; bad → worse → worst."
    }
  ],
  intermediate: [
    {
      title: "1. Presente Perfecto (Experiencias y pasado conectado al hoy)",
      formula: "have / has + participio pasado (worked, been, done, seen)",
      examples: [
        { en: "I've already finished the report.", es: "Ya terminé el informe (resultado visible ahora)." },
        { en: "Have you ever tried sushi?", es: "¿Alguna vez has probado el sushi? (en tu vida, sin fecha)." }
      ],
      tip: "💡 Si mencionas CUÁNDO pasó ('yesterday', 'in 2024'), usa Pasado Simple ('I saw him yesterday'), no Presente Perfecto."
    },
    {
      title: "2. 'For' vs 'Since' (Duración vs Punto de Inicio)",
      formula: "FOR + cantidad de tiempo | SINCE + momento exacto de inicio",
      examples: [
        { en: "We have lived here for five years.", es: "Hemos vivido aquí durante cinco años." },
        { en: "I've been waiting since 3:00 PM.", es: "He estado esperando desde las 3:00 PM." }
      ],
      tip: "⚠️ Nunca digas 'since five years' (calco del español 'desde hace 5 años'); usa siempre 'for five years'."
    },
    {
      title: "3. Presente Perfecto Continuo ('Have been + -ing')",
      formula: "have / has + been + verbo(-ing)",
      examples: [
        { en: "I've been working on this app all morning.", es: "He estado trabajando en esta app toda la mañana." },
        { en: "How long have you been learning English?", es: "¿Cuánto tiempo llevas aprendiendo inglés?" }
      ],
      tip: "💡 En español usamos 'llevo + gerundio' ('llevo dos horas esperando'); en inglés eso es 'I've been waiting for two hours'."
    },
    {
      title: "4. Primer Condicional (Consecuencias reales y probables)",
      formula: "If + Presente Simple, ... will / can / might + verbo base",
      examples: [
        { en: "If we leave now, we'll beat the traffic.", es: "Si salimos ahora, le ganaremos al tráfico." },
        { en: "Let me know if you need anything else.", es: "Avísame si necesitas algo más." }
      ],
      tip: "⚠️ Nunca pongas 'will' justo después de 'If' ('If it rains', nunca 'If it will rain')."
    },
    {
      title: "5. Segundo Condicional (Situaciones hipotéticas o deseos)",
      formula: "If + Pasado Simple, ... would / could + verbo base",
      examples: [
        { en: "If I had more free time, I would travel more.", es: "Si tuviera más tiempo libre, viajaría más." },
        { en: "If I were you, I would take that offer.", es: "Si yo fuera tú, aceptaría esa oferta." }
      ],
      tip: "💡 En inglés natural se prefiere 'If I were you' en lugar de 'If I was you' para dar consejos."
    },
    {
      title: "6. Verbos seguidos de '-ing' vs 'to + verbo'",
      formula: "enjoy / mind / avoid / finish / suggest + -ing | want / decide / need / promise + to",
      examples: [
        { en: "Would you mind opening the window?", es: "¿Te importaría abrir la ventana?" },
        { en: "I'm looking forward to meeting you.", es: "Tengo muchas ganas de conocerte ('to' aquí es preposición + -ing)." }
      ],
      tip: "⚠️ Nunca digas 'I enjoy to play'; después de 'enjoy', 'finish' y 'avoid' siempre va gerundio (-ing)."
    },
    {
      title: "7. Modales de Obligación y Consejo ('Should / Must / Have to')",
      formula: "Consejo: should | Obligación externa: have to | Prohibición: mustn't | No necesario: don't have to",
      examples: [
        { en: "You don't have to wear a suit, it's casual.", es: "No tienes que usar traje, es casual (no es obligatorio)." },
        { en: "You should back up your files before updating.", es: "Deberías respaldar tus archivos antes de actualizar." }
      ],
      tip: "⚠️ Diferencia crítica: 'mustn't' = prohibido hacerlo; 'don't have to' = no hace falta hacerlo, pero puedes si quieres."
    },
    {
      title: "8. Voz Pasiva Cotidiana (Cuando importa la acción, no quién la hizo)",
      formula: "be (is/was/has been) + participio pasado",
      examples: [
        { en: "My car is being repaired right now.", es: "Mi carro está siendo reparado ahora mismo." },
        { en: "The package was delivered this morning.", es: "El paquete fue entregado esta mañana." }
      ],
      tip: "💡 Úsalo mucho cuando hables de envíos, reparaciones, reglas o noticias."
    },
    {
      title: "9. Cláusulas Relativas ('Who / Which / That / Where')",
      formula: "Personas: who/that | Cosas: which/that | Lugares: where | Posesión: whose",
      examples: [
        { en: "The guy who fixed my laptop did a great job.", es: "El chico que arregló mi laptop hizo un gran trabajo." },
        { en: "That's the restaurant where we had dinner last week.", es: "Ese es el restaurante donde cenamos la semana pasada." }
      ],
      tip: "🗣️ En conversación, cuando 'that/who/which' es el objeto, los nativos lo omiten: 'The movie [that] we watched was awesome'."
    },
    {
      title: "10. Preguntas Indirectas (Para sonar educado y natural)",
      formula: "Could you tell me / Do you know + palabra pregunta + sujeto + verbo (sin invertir)",
      examples: [
        { en: "Do you know what time the store closes?", es: "¿Sabes a qué hora cierra la tienda? (no 'does the store close')." },
        { en: "Could you tell me where the restroom is?", es: "¿Me podrías decir dónde está el baño? (no 'where is the restroom')." }
      ],
      tip: "⚠️ En preguntas indirectas desaparece 'do/does/did' y el verbo vuelve al orden normal de afirmación."
    }
  ],
  advanced: [
    {
      title: "1. Tercer Condicional (Arrepentimientos e hipótesis del pasado)",
      formula: "If + had + participio, ... would have + participio",
      examples: [
        { en: "If I had known about the traffic, I would have left earlier.", es: "Si hubiera sabido del tráfico, habría salido más temprano." },
        { en: "She wouldn't have missed the flight if she had set an alarm.", es: "No habría perdido el vuelo si hubiera puesto alarma." }
      ],
      tip: "🗣️ Al hablar rápido, 'would have' se contrae en 'would've' (suena como 'wud-of')."
    },
    {
      title: "2. Condicionales Mixtos (Pasado irreal con efecto en el presente)",
      formula: "If + had + participio (pasado), ... would + verbo base (ahora)",
      examples: [
        { en: "If I had taken that job, I would be living in Madrid now.", es: "Si hubiera aceptado ese trabajo, estaría viviendo en Madrid ahora." },
        { en: "We wouldn't be lost if you had checked the map.", es: "No estaríamos perdidos si hubieras revisado el mapa." }
      ],
      tip: "💡 Conecta causas del pasado con consecuencias que sigues sintiendo hoy."
    },
    {
      title: "3. 'Used to' vs 'Be used to' vs 'Get used to'",
      formula: "used to + verbo (antes sí, ya no) | be/get used to + -ing/sustantivo (estar/acostumbrarse)",
      examples: [
        { en: "I used to drive a manual car, now I drive an automatic.", es: "Antes manejaba carro estándar, ahora manejo automático." },
        { en: "I'm getting used to waking up early.", es: "Me estoy acostumbrando a despertarme temprano." }
      ],
      tip: "⚠️ Cuando lleva 'be' o 'get' delante, 'used to' exige gerundio (-ing) o un sustantivo."
    },
    {
      title: "4. Modales de Deducción en el Pasado ('Must have / Might have / Can't have')",
      formula: "must have + participio (seguro pasó) | might/could have (quizás) | can't have (imposible)",
      examples: [
        { en: "The streets are wet; it must have rained last night.", es: "Las calles están mojadas; seguro llovió anoche." },
        { en: "He can't have finished already, he just started!", es: "¡No puede haber terminado ya, apenas empezó!" }
      ],
      tip: "💡 Es la forma más natural de deducir o especular sobre algo que ya ocurrió."
    },
    {
      title: "5. 'Wish' y 'If only' (Deseos y quejas)",
      formula: "Presente: wish + Pasado Simple | Pasado: wish + had + participio | Molestia: wish + would + verbo",
      examples: [
        { en: "I wish I had more time to practice.", es: "Ojalá tuviera más tiempo para practicar." },
        { en: "I wish it would stop raining!", es: "¡Ojalá dejara de llover!" }
      ],
      tip: "⚠️ Después de 'I wish' siempre retrocedes un tiempo verbal (nunca digas 'I wish I have')."
    },
    {
      title: "6. Causativos ('Have / Get something done')",
      formula: "have / get + objeto + participio pasado (encargar un servicio a alguien)",
      examples: [
        { en: "I need to get my car washed this afternoon.", es: "Necesito mandar a lavar mi carro esta tarde." },
        { en: "She had her hair cut yesterday.", es: "Ella se cortó el cabello ayer (en la peluquería)." }
      ],
      tip: "💡 Diferencia clave: 'I washed my car' (lo lavé yo mismo) vs 'I got my car washed' (pagué para que lo lavaran)."
    },
    {
      title: "7. Inversiones Enfáticas (Nivel C1 / Ejecutivo)",
      formula: "Adverbio negativo/restrictivo (Rarely, Never, Not only, Hardly) + auxiliar + sujeto + verbo",
      examples: [
        { en: "Rarely do we see such an immediate improvement.", es: "Rara vez vemos una mejora tan inmediata." },
        { en: "Not only did they finish on time, but they also saved budget.", es: "No solo terminaron a tiempo, sino que también ahorraron presupuesto." }
      ],
      tip: "💡 Úsalo en presentaciones, correos formales o entrevistas para sonar altamente articulado."
    },
    {
      title: "8. Subjuntivo Formal tras Verbos de Recomendación",
      formula: "suggest / recommend / insist / demand + that + sujeto + verbo base (sin -s ni 'to')",
      examples: [
        { en: "The doctor recommended that he take the medicine twice a day.", es: "El doctor recomendó que él tome la medicina dos veces al día." },
        { en: "It's essential that everyone be on time.", es: "Es esencial que todos lleguen a tiempo." }
      ],
      tip: "⚠️ Fíjate que en subjuntivo C1 se dice 'that he take' (sin -s) y 'that everyone be' (no 'is')."
    },
    {
      title: "9. Cláusulas de Participio (Frases más ágiles y fluidas)",
      formula: "Verbo(-ing) o Participio(-ed) al inicio para unir dos acciones del mismo sujeto",
      examples: [
        { en: "Having finished the project early, we took the afternoon off.", es: "Habiendo terminado el proyecto temprano, nos tomamos la tarde libre." },
        { en: "Built in 1984, the car still runs like a charm.", es: "Construido en 1984, el auto todavía funciona de maravilla." }
      ],
      tip: "💡 Elimina conectores repetitivos como 'Because we had finished...' y hace tu inglés mucho más natural."
    },
    {
      title: "10. 'Had better' vs 'Would rather' (Advertencias y Preferencias)",
      formula: "had better + verbo base (más vale que...) | would rather + verbo base (preferiría...)",
      examples: [
        { en: "We'd better leave now or we'll miss the flight.", es: "Más vale que salgamos ahora o perderemos el vuelo." },
        { en: "I'd rather stay home tonight than go to a crowded bar.", es: "Preferiría quedarme en casa esta noche antes que ir a un bar lleno." }
      ],
      tip: "⚠️ 'Had better' lleva un tono de urgencia o advertencia; para un consejo suave usa 'should'."
    }
  ]
};

// --- MOTOR DE GENERACIÓN PROCEDURAL INFINITA (A1 -> C1) ---
const DYNAMIC_GRAMMAR_ENGINE = {
  basic: {
    subjects: [
      { subj: "She", auxPres: "does", auxNeg: "doesn't", isThird: true },
      { subj: "He", auxPres: "does", auxNeg: "doesn't", isThird: true },
      { subj: "My brother", auxPres: "does", auxNeg: "doesn't", isThird: true },
      { subj: "They", auxPres: "do", auxNeg: "don't", isThird: false },
      { subj: "You", auxPres: "do", auxNeg: "don't", isThird: false },
      { subj: "We", auxPres: "do", auxNeg: "don't", isThird: false }
    ],
    actions: [
      { base: "start work", third: "starts work", past: "started work", wrongIng: "starting work", es: "empezar a trabajar" },
      { base: "study English", third: "studies English", past: "studied English", wrongIng: "studying English", es: "estudiar inglés" },
      { base: "drink coffee", third: "drinks coffee", past: "drank coffee", wrongIng: "drinking coffee", es: "tomar café" },
      { base: "visit the office", third: "visits the office", past: "visited the office", wrongIng: "visiting the office", es: "visitar la oficina" },
      { base: "check emails", third: "checks emails", past: "checked emails", wrongIng: "checking emails", es: "revisar correos" },
      { base: "cook dinner", third: "cooks dinner", past: "cooked dinner", wrongIng: "cooking dinner", es: "preparar la cena" }
    ],
    times: [
      { en: "every morning", es: "todas las mañanas" },
      { en: "on Mondays", es: "los lunes" },
      { en: "after lunch", es: "después del almuerzo" },
      { en: "at 8:00 AM", es: "a las 8:00 AM" }
    ]
  },
  intermediate: {
    conditions: [
      { ifClause: "If I had more free time,", resClause: ["I", "would", "learn", "another language."], es: "Si tuviera más tiempo libre, aprendería otro idioma." },
      { ifClause: "If she lived closer to work,", resClause: ["she", "would", "walk", "every day."], es: "Si ella viviera más cerca del trabajo, caminaría todos los días." },
      { ifClause: "If we knew the password,", resClause: ["we", "could", "access", "the system."], es: "Si supiéramos la contraseña, podríamos acceder al sistema." },
      { ifClause: "If they offered remote work,", resClause: ["I", "would", "accept", "the job."], es: "Si ofrecieran trabajo remoto, aceptaría el empleo." }
    ],
    prepositionTraps: [
      { tokens: ["The", "final", "result", "depends", "of", "our", "effort."], err: 4, ok: "on", opts: ["on", "in", "at"], rule: "En inglés se dice 'depend on', nunca 'depend of'." },
      { tokens: ["We", "arrived", "to", "the", "airport", "very", "early."], err: 2, ok: "at", opts: ["at", "on", "for"], rule: "Usamos 'arrive at' para lugares específicos (aeropuerto, oficina) y 'arrive in' para ciudades o países, nunca 'arrive to'." },
      { tokens: ["She", "is", "married", "with", "an", "architect."], err: 3, ok: "to", opts: ["to", "by", "at"], rule: "La combinación natural en inglés es 'married to', no 'married with'." },
      { tokens: ["I", "have", "worked", "here", "since", "three", "years."], err: 4, ok: "for", opts: ["for", "during", "from"], rule: "'For' indica duración ('for three years'); 'since' indica el punto de inicio ('since 2023')." }
    ]
  },
  advanced: {
    inversions: [
      { lead: "Rarely", aux: "do", subj: "we", rest: ["see", "such", "consistent", "results."], es: "Rara vez vemos resultados tan consistentes.", rule: "Al iniciar con un adverbio restrictivo ('Rarely'), se invierte auxiliar + sujeto ('do we see')." },
      { lead: "Never", aux: "have", subj: "I", rest: ["experienced", "such", "a", "smooth", "launch."], es: "Nunca he experimentado un lanzamiento tan fluido.", rule: "Tras 'Never' al inicio de la frase, invertimos 'have + sujeto' ('Never have I...')." },
      { lead: "Not only", aux: "did", subj: "she", rest: ["finish", "the", "project,", "but", "she", "also", "led", "the", "demo."], es: "No solo terminó el proyecto, sino que también dirigió la demostración.", rule: "'Not only' al inicio exige inversión con auxiliar ('did she finish')." },
      { lead: "Seldom", aux: "does", subj: "this", rest: ["opportunity", "arise", "twice."], es: "Pocas veces surge esta oportunidad dos veces.", rule: "'Seldom' (raramente) provoca inversión interrogativa ('does this opportunity arise')." }
    ],
    advancedTraps: [
      { tokens: ["We", "look", "forward", "to", "hear", "from", "you", "soon."], err: 4, ok: "hearing", opts: ["hearing", "heard", "be hear"], rule: "Después de 'look forward to', el verbo siempre lleva -ing ('to hearing')." },
      { tokens: ["Had", "I", "knew", "about", "the", "delay,", "I", "would", "have", "waited."], err: 2, ok: "known", opts: ["known", "know", "knowing"], rule: "En el Tercer Condicional invertido ('Had + sujeto + participio'), usamos 'known', no 'knew'." },
      { tokens: ["She", "suggested", "me", "to", "apply", "for", "the", "position."], err: 2, ok: "that I", opts: ["that I", "for me", "me"], rule: "El verbo 'suggest' no lleva objeto indirecto + infinitivo ('suggest me to'); se usa 'suggest that I apply' o 'suggest applying'." }
    ]
  }
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateDynamicGrammarExercise(level, mode) {
  if (level === 'basic') {
    const s = pickRandom(DYNAMIC_GRAMMAR_ENGINE.basic.subjects);
    const a = pickRandom(DYNAMIC_GRAMMAR_ENGINE.basic.actions);
    const t = pickRandom(DYNAMIC_GRAMMAR_ENGINE.basic.times);

    if (mode === 'builder') {
      const isQuestion = Math.random() > 0.5;
      if (isQuestion) {
        const subjFormatted = ["you", "we", "they"].includes(s.subj.toLowerCase()) ? s.subj.toLowerCase() : s.subj;
        return {
          prompt: `Forma una pregunta en Presente Simple (${a.es}):`,
          spanish: `¿${s.subj} suele ${a.es} ${t.es}?`,
          words: [s.auxPres === "does" ? "Does" : "Do", subjFormatted, a.base, `${t.en}?`],
          rule: `Con '${s.subj}', usamos el auxiliar '${s.auxPres}' al inicio y el verbo principal ('${a.base}') queda en forma base.`
        };
      } else {
        return {
          prompt: `Construye una oración negativa en Presente Simple:`,
          spanish: `${s.subj} no ${a.es} ${t.es}.`,
          words: [s.subj, s.auxNeg, a.base, `${t.en}.`],
          rule: `Después de '${s.auxNeg}', el verbo principal ('${a.base}') nunca lleva '-s'.`
        };
      }
    } else {
      const wrongAux = s.isThird ? "don't" : "doesn't";
      const rightAux = s.auxNeg;
      const baseWords = a.base.split(' ');
      return {
        context: "Mensaje diario:",
        tokens: [s.subj, wrongAux, ...baseWords, `${t.en}.`],
        errorIndex: 1,
        options: [rightAux, "isn't", "not"],
        correctOption: rightAux,
        rule: `Con '${s.subj}', el auxiliar negativo correcto en Presente Simple es '${rightAux}', no '${wrongAux}'.`
      };
    }
  }

  if (level === 'intermediate') {
    if (mode === 'builder') {
      const c = pickRandom(DYNAMIC_GRAMMAR_ENGINE.intermediate.conditions);
      return {
        prompt: "Arma el Segundo Condicional (situación hipotética):",
        spanish: c.es,
        words: [c.ifClause, ...c.resClause],
        rule: "Segundo Condicional: 'If + Pasado Simple' en la condición y 'would/could + verbo base' en el resultado."
      };
    } else {
      const trap = pickRandom(DYNAMIC_GRAMMAR_ENGINE.intermediate.prepositionTraps);
      return {
        context: "Revisión de redacción:",
        tokens: trap.tokens,
        errorIndex: trap.err,
        options: trap.opts,
        correctOption: trap.ok,
        rule: trap.rule
      };
    }
  }

  if (mode === 'builder') {
    const inv = pickRandom(DYNAMIC_GRAMMAR_ENGINE.advanced.inversions);
    return {
      prompt: "Construye una inversión enfática de nivel C1:",
      spanish: inv.es,
      words: [inv.lead, inv.aux, inv.subj, ...inv.rest],
      rule: inv.rule
    };
  } else {
    const trap = pickRandom(DYNAMIC_GRAMMAR_ENGINE.advanced.advancedTraps);
    return {
      context: "Correo profesional C1:",
      tokens: trap.tokens,
      errorIndex: trap.err,
      options: trap.opts,
      correctOption: trap.ok,
      rule: trap.rule
    };
  }
}

// --- ESTADO DEL MÓDULO DE GRAMÁTICA ---
let currentLevel = 'basic';
let currentMode = 'rules';
let selectedIndices = [];

const grammarArena = document.getElementById('grammar-arena');

document.querySelectorAll('#grammar .lvl-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#grammar .lvl-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = btn.dataset.level;
    renderGrammarExercise();
  });
});

document.querySelectorAll('#grammar .mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#grammar .mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMode = btn.dataset.mode;
    renderGrammarExercise();
  });
});

function renderGrammarExercise() {
  if (currentMode === 'rules') {
    renderRulesGuide(currentLevel);
    return;
  }
  const exercise = generateDynamicGrammarExercise(currentLevel, currentMode);
  if (currentMode === 'builder') {
    renderBuilder(exercise);
  } else {
    renderHunter(exercise);
  }
}

// --- MODO 0: GUÍA DE REGLAS ESENCIALES ---
function renderRulesGuide(level) {
  const rules = GRAMMAR_RULES_GUIDE[level];
  grammarArena.innerHTML = `
    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">
      Mostrando <strong>${rules.length} reglas esenciales</strong> para este nivel. Escucha los ejemplos y luego pasa a <strong>🧱 Constructor</strong> o <strong>🕵️ Cazador de Errores</strong>:
    </p>
    <div class="rules-grid">
      ${rules.map(r => `
        <div class="rule-card">
          <h3>${r.title}</h3>
          <div class="formula-badge">${r.formula}</div>
          ${r.examples.map(ex => {
            const safeEn = ex.en.replace(/'/g, "\\'");
            return `
              <div class="rule-example-row">
                <div>
                  <strong>${ex.en}</strong>
                  <div style="color: var(--text-muted); font-size: 0.85rem;">${ex.es}</div>
                </div>
                <button class="btn-audio" onclick="speakText('${safeEn}', 1.0)">🔊</button>
              </div>
            `;
          }).join('')}
          <p class="rule-tip">${r.tip}</p>
        </div>
      `).join('')}
    </div>
  `;
}

// --- MODO 1: CONSTRUCTOR DE BLOQUES ---
function renderBuilder(ex) {
  selectedIndices = [];
  const shuffled = ex.words
    .map((word, idx) => ({ word, idx }))
    .sort(() => Math.random() - 0.5);

  grammarArena.innerHTML = `
    <p style="color: var(--text-muted); font-size: 0.9rem;">${ex.prompt}</p>
    <h3 style="margin: 0.4rem 0 1rem 0; color: var(--primary);">"${ex.spanish}"</h3>
    
    <div id="builder-dropzone" class="drop-zone">
      <span style="color: var(--text-muted); font-size: 0.9rem;">Haz clic en los bloques de abajo para armar la oración...</span>
    </div>

    <div id="builder-bank" class="word-bank">
      ${shuffled.map(item => `
        <button class="word-chip" data-idx="${item.idx}">${item.word}</button>
      `).join('')}
    </div>

    <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
      <button id="check-builder-btn" class="btn-primary">Comprobar Orden</button>
      <button id="reset-builder-btn" class="btn-audio">↺ Reiniciar</button>
      <button id="next-grammar-btn" class="btn-audio">🎲 Generar Nuevo ➔</button>
    </div>

    <div id="grammar-feedback"></div>
  `;

  const dropzone = document.getElementById('builder-dropzone');
  const bankButtons = document.querySelectorAll('#builder-bank .word-chip');

  function updateDropzone() {
    if (selectedIndices.length === 0) {
      dropzone.innerHTML = `<span style="color: var(--text-muted); font-size: 0.9rem;">Haz clic en los bloques de abajo para armar la oración...</span>`;
    } else {
      dropzone.innerHTML = selectedIndices.map(origIdx => `
        <button class="word-chip placed" data-remove="${origIdx}">${ex.words[origIdx]}</button>
      `).join('');

      dropzone.querySelectorAll('.placed').forEach(chip => {
        chip.onclick = () => {
          const remIdx = Number(chip.dataset.remove);
          selectedIndices = selectedIndices.filter(i => i !== remIdx);
          document.querySelector(`#builder-bank .word-chip[data-idx="${remIdx}"]`).classList.remove('used');
          updateDropzone();
        };
      });
    }
  }

  bankButtons.forEach(btn => {
    btn.onclick = () => {
      const idx = Number(btn.dataset.idx);
      selectedIndices.push(idx);
      btn.classList.add('used');
      updateDropzone();
    };
  });

  document.getElementById('reset-builder-btn').onclick = () => renderBuilder(ex);
  document.getElementById('next-grammar-btn').onclick = () => renderGrammarExercise();

  document.getElementById('check-builder-btn').onclick = () => {
    const userSentence = selectedIndices.map(i => ex.words[i]).join(' ');
    const targetSentence = ex.words.join(' ');
    const fb = document.getElementById('grammar-feedback');

    if (userSentence === targetSentence) {
      speakText(targetSentence);
      fb.innerHTML = `
        <div class="grammar-explanation">
          <p style="color: var(--accent); font-weight: bold; margin-bottom: 0.4rem;">
            ✅ ¡Exacto! <button class="btn-audio" onclick="speakText('${targetSentence.replace(/'/g, "\\'")}')">🔊 Escuchar</button>
          </p>
          <p>${ex.rule}</p>
        </div>
      `;
    } else {
      fb.innerHTML = `<p style="color: var(--danger); margin-top: 1rem; font-weight: 600;">❌ El orden aún no es natural. Revisa la posición del sujeto y el auxiliar.</p>`;
    }
  };
}

// --- MODO 2: CAZADOR DE ERRORES ---
function renderHunter(ex) {
  grammarArena.innerHTML = `
    <p style="color: var(--text-muted); font-size: 0.9rem;">Contexto: <strong>${ex.context}</strong> — Haz clic en la palabra que tiene un error:</p>
    
    <div class="hunter-sentence">
      ${ex.tokens.map((tok, i) => `<span class="hunt-word" data-pos="${i}">${tok}</span>`).join(' ')}
    </div>

    <div id="hunter-step2"></div>
    <div id="grammar-feedback"></div>
    <div style="margin-top: 1rem;">
      <button id="next-hunter-btn" class="btn-audio">🎲 Generar Nuevo ➔</button>
    </div>
  `;

  document.getElementById('next-hunter-btn').onclick = () => renderGrammarExercise();

  document.querySelectorAll('.hunt-word').forEach(span => {
    span.onclick = () => {
      const pos = Number(span.dataset.pos);
      const step2 = document.getElementById('hunter-step2');
      const fb = document.getElementById('grammar-feedback');

      if (pos === ex.errorIndex) {
        span.classList.add('found-error');
        step2.innerHTML = `
          <p style="font-weight: 600; margin-top: 0.5rem;">🎯 ¡Error detectado ("${ex.tokens[pos]}")! Elige cómo corregirlo:</p>
          <div class="correction-options">
            ${ex.options.map(opt => `<button class="btn-audio opt-btn" data-opt="${opt}">${opt}</button>`).join('')}
          </div>
        `;

        step2.querySelectorAll('.opt-btn').forEach(optBtn => {
          optBtn.onclick = () => {
            if (optBtn.dataset.opt === ex.correctOption) {
              const fixedTokens = [...ex.tokens];
              fixedTokens[ex.errorIndex] = ex.correctOption;
              const fullCorrectSentence = fixedTokens.join(' ');
              speakText(fullCorrectSentence);

              fb.innerHTML = `
                <div class="grammar-explanation">
                  <p style="color: var(--accent); font-weight: bold; margin-bottom: 0.4rem;">
                    ✅ ¡Corregido! "${fullCorrectSentence}" <button class="btn-audio" onclick="speakText('${fullCorrectSentence.replace(/'/g, "\\'")}')">🔊</button>
                  </p>
                  <p>${ex.rule}</p>
                </div>
              `;
            } else {
              fb.innerHTML = `<p style="color: var(--danger); margin-top: 0.8rem; font-weight: 600;">❌ Esa opción no encaja con la estructura gramatical. Prueba otra.</p>`;
            }
          };
        });
      } else {
        span.classList.add('wrong-pick');
        setTimeout(() => span.classList.remove('wrong-pick'), 600);
      }
    };
  });
}

// Inicializar vista por defecto
renderGrammarExercise();
