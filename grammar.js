// --- BANCO DE EJERCICIOS DE GRAMÁTICA (A1 -> C1) ---
const GRAMMAR_DATA = {
  basic: {
    builder: [
      {
        prompt: "Pregunta por la rutina de otra persona (Presente Simple):",
        spanish: "¿A qué hora empieza ella a trabajar?",
        words: ["What time", "does", "she", "start", "work?"],
        rule: "En preguntas en Presente Simple con 'he/she/it', usamos el auxiliar 'does' y el verbo principal ('start') va en forma base sin -s."
      },
      {
        prompt: "Expresa algo que no hiciste ayer (Pasado Simple negativo):",
        spanish: "Ellos no vieron el mensaje anoche.",
        words: ["They", "didn't", "see", "the", "message", "last night."],
        rule: "Después del auxiliar negativo 'didn't', el verbo principal siempre regresa a su forma base ('see', nunca 'saw')."
      }
    ],
    hunter: [
      {
        context: "Chat de trabajo:",
        tokens: ["She", "don't", "have", "the", "keys", "today."],
        errorIndex: 1,
        options: ["doesn't", "isn't", "not"],
        correctOption: "doesn't",
        rule: "Con tercera persona singular ('She'), la negación en Presente Simple usa 'doesn't', no 'don't'."
      },
      {
        context: "Planes del fin de semana:",
        tokens: ["We", "are", "going", "to", "visiting", "my", "parents."],
        errorIndex: 4,
        options: ["visit", "visited", "visits"],
        correctOption: "visit",
        rule: "La estructura de futuro 'be going to' siempre va seguida del verbo en infinitivo sin -ing ('going to visit')."
      }
    ]
  },
  intermediate: {
    builder: [
      {
        prompt: "Experiencia de vida sin fecha exacta (Presente Perfecto):",
        spanish: "¿Alguna vez has trabajado de forma remota?",
        words: ["Have", "you", "ever", "worked", "remotely?"],
        rule: "Usamos 'Have + sujeto + ever + participio pasado' para preguntar por experiencias en algún momento de la vida."
      },
      {
        prompt: "Situación hipotética en el presente (Segundo Condicional):",
        spanish: "Si tuviera más tiempo, aprendería otro idioma.",
        words: ["If", "I", "had", "more time,", "I", "would", "learn", "another language."],
        rule: "Segundo Condicional: 'If + Pasado Simple (had)' para la condición irreal, y 'would + verbo base' para el resultado."
      }
    ],
    hunter: [
      {
        context: "Reunión de equipo:",
        tokens: ["The", "final", "decision", "depends", "of", "the", "budget."],
        errorIndex: 4,
        options: ["on", "in", "at"],
        correctOption: "on",
        rule: "Falso amigo del español: en inglés siempre se dice 'depend on' (o 'depend upon'), nunca 'depend of'."
      },
      {
        context: "Contando una anécdota:",
        tokens: ["I", "have", "lived", "in", "this", "city", "since", "five", "years."],
        errorIndex: 6,
        options: ["for", "during", "from"],
        correctOption: "for",
        rule: "Usamos 'for' para períodos de duración ('for five years') y 'since' únicamente para un punto exacto en el tiempo ('since 2021')."
      }
    ]
  },
  advanced: {
    builder: [
      {
        prompt: "Arrepentimiento o hipótesis en el pasado (Tercer Condicional):",
        spanish: "Si hubiera sabido del tráfico, habría salido más temprano.",
        words: ["Had", "I", "known", "about", "the traffic,", "I", "would", "have", "left", "earlier."],
        rule: "Inversión formal C1: 'Had I known...' equivale a 'If I had known...', dando un tono más sofisticado y natural."
      },
      {
        prompt: "Énfasis con inversión negativa (Nivel C1):",
        spanish: "Rara vez vemos un progreso tan rápido.",
        words: ["Rarely", "do", "we", "see", "such", "rapid", "progress."],
        rule: "Cuando una oración empieza con un adverbio negativo o restrictivo ('Rarely', 'Seldom', 'Never'), se invierte el auxiliar y el sujeto ('do we see')."
      }
    ],
    hunter: [
      {
        context: "Correo ejecutivo:",
        tokens: ["We", "look", "forward", "to", "hear", "from", "you", "soon."],
        errorIndex: 4,
        options: ["hearing", "heard", "be hearing"],
        correctOption: "hearing",
        rule: "En la expresión 'look forward to', el 'to' funciona como preposición, por lo que el verbo siguiente debe ir en gerundio (-ing): 'to hearing'."
      },
      {
        context: "Negociación de proyecto:",
        tokens: ["Not", "only", "she", "finished", "the", "report,", "but", "she", "also", "presented", "it."],
        errorIndex: 2,
        options: ["did she finish", "she did finish", "had she finish"],
        correctOption: "did she finish",
        rule: "Tras iniciar una cláusula con 'Not only', es obligatorio invertir el auxiliar antes del sujeto: 'Not only did she finish...'."
      }
    ]
  }
};

// --- ESTADO DEL MÓDULO DE GRAMÁTICA ---
let currentLevel = 'basic';
let currentMode = 'builder';
let currentIndex = 0;
let selectedIndices = [];

const grammarArena = document.getElementById('grammar-arena');

// Selectores de Nivel y Modo
document.querySelectorAll('.lvl-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = btn.dataset.level;
    currentIndex = 0;
    renderGrammarExercise();
  });
});

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMode = btn.dataset.mode;
    currentIndex = 0;
    renderGrammarExercise();
  });
});

function renderGrammarExercise() {
  const list = GRAMMAR_DATA[currentLevel][currentMode];
  const exercise = list[currentIndex % list.length];

  if (currentMode === 'builder') {
    renderBuilder(exercise);
  } else {
    renderHunter(exercise);
  }
}

// --- MODO 1: CONSTRUCTOR DE BLOQUES ---
function renderBuilder(ex) {
  selectedIndices = [];
  // Mezclar palabras manteniendo sus índices originales
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
      <button id="next-grammar-btn" class="btn-audio">Siguiente ➔</button>
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
  document.getElementById('next-grammar-btn').onclick = () => { currentIndex++; renderGrammarExercise(); };

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
      <button id="next-hunter-btn" class="btn-audio">Siguiente Ejercicio ➔</button>
    </div>
  `;

  document.getElementById('next-hunter-btn').onclick = () => { currentIndex++; renderGrammarExercise(); };

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

// Inicializar primer ejercicio
renderGrammarExercise();