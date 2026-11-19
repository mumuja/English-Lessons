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
        return {
          prompt: `Forma una pregunta en Presente Simple (${a.es}):`,
          spanish: `¿${s.subj} suele ${a.es} ${t.es}?`,
          words: [s.auxPres === "does" ? "Does" : "Do", s.subj.toLowerCase() === "you" || s.subj.toLowerCase() === "we" || s.subj.toLowerCase() === "they" ? s.subj.toLowerCase() : s.subj, a.base, `${t.en}?`],
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
      // Cazador de errores dinámico
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

  // Advanced (C1)
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
let currentMode = 'builder';
let selectedIndices = [];

const grammarArena = document.getElementById('grammar-arena');

document.querySelectorAll('.lvl-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = btn.dataset.level;
    renderGrammarExercise();
  });
});

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMode = btn.dataset.mode;
    renderGrammarExercise();
  });
});

function renderGrammarExercise() {
  const exercise = generateDynamicGrammarExercise(currentLevel, currentMode);
  if (currentMode === 'builder') {
    renderBuilder(exercise);
  } else {
    renderHunter(exercise);
  }
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

renderGrammarExercise();
