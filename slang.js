// --- BANCO DE MODISMOS, SLANG Y PHRASAL VERBS ---
const SLANG_DATA = {
  phrasal: {
    decode: [
      {
        scene: "💬 Chat entre amigos antes de salir:",
        expression: "call off",
        sentence: "Hey, it's pouring rain outside. Should we call off the barbecue?",
        options: [
          "Cancelar o suspender un evento planeado",
          "Llamar por teléfono a todos los invitados",
          "Mover la fiesta adentro de la casa"
        ],
        correctIndex: 0,
        literalTrap: "Trampa literal: no tiene nada que ver con hacer una llamada ('call').",
        tip: "Se usa muchísimo en trabajo y planes: 'call off a meeting' (cancelar una reunión)."
      },
      {
        scene: "💼 En la oficina resolviendo un problema:",
        expression: "figure out",
        sentence: "Don't worry, give me ten minutes and I'll figure out why the code is crashing.",
        options: [
          "Resolver, descifrar o entender cómo funciona algo",
          "Dibujar un diagrama del error",
          "Borrar todo y empezar desde cero"
        ],
        correctIndex: 0,
        literalTrap: "Trampa literal: 'figure' aquí no es figura, sino calcular o deducir mentalmente.",
        tip: "Uno de los phrasal verbs más usados del inglés diario: 'I can't figure it out' (No logro entenderlo)."
      },
      {
        scene: "🚗 Camino a casa:",
        expression: "run out of",
        sentence: "We need to stop at a gas station, we're about to run out of fuel.",
        options: [
          "Quedarse sin algo / agotarse el suministro",
          "Salir corriendo del auto",
          "Acelerar para llegar más rápido"
        ],
        correctIndex: 0,
        literalTrap: "Trampa literal: nadie está corriendo fuera del auto.",
        tip: "Sirve para tiempo, dinero, batería o comida: 'I ran out of time' (Se me acabó el tiempo)."
      }
    ],
    upgrade: [
      {
        formal: "I need to tolerate my noisy neighbors.",
        targetExpression: "put up with",
        nativeSentence: "I need to put up with my noisy neighbors.",
        options: [
          "I need to put up with my noisy neighbors.",
          "I need to look forward to my noisy neighbors.",
          "I need to give up on my noisy neighbors."
        ],
        correctIndex: 0,
        tip: "'Put up with' significa aguantar o tolerar algo molesto con paciencia."
      },
      {
        formal: "She postponed the dentist appointment until next week.",
        targetExpression: "put off",
        nativeSentence: "She put off the dentist appointment until next week.",
        options: [
          "She put off the dentist appointment until next week.",
          "She took off the dentist appointment until next week.",
          "She turned off the dentist appointment until next week."
        ],
        correctIndex: 0,
        tip: "'Put off' = posponer o dejar para después ('Stop putting it off!')."
      }
    ]
  },
  idioms: {
    decode: [
      {
        scene: "🎯 Planeando un viaje sin itinerario fijo:",
        expression: "play it by ear",
        sentence: "We don't have reservations yet; let's just go downtown and play it by ear.",
        options: [
          "Improvisar y decidir sobre la marcha según cómo vayan las cosas",
          "Escuchar música en vivo en el centro",
          "Preguntar direcciones a la gente"
        ],
        correctIndex: 0,
        literalTrap: "Viene de tocar un instrumento 'de oído' sin partitura.",
        tip: "Súper común cuando no quieres comprometerte a un horario rígido: 'Let's play it by ear'."
      },
      {
        scene: "💸 Hablando de compras:",
        expression: "cost an arm and a leg",
        sentence: "I love that new laptop, but it costs an arm and a leg!",
        options: [
          "Cuesta carísimo / vale un ojo de la cara",
          "Es muy pesada para cargarla",
          "Tiene garantía de por vida"
        ],
        correctIndex: 0,
        literalTrap: "En español decimos 'cuesta un ojo de la cara'; en inglés cuesta un brazo y una pierna.",
        tip: "También puedes decir en pasado: 'It cost me an arm and a leg'."
      }
    ],
    upgrade: [
      {
        formal: "I am feeling slightly sick today, so I will stay home.",
        targetExpression: "under the weather",
        nativeSentence: "I'm feeling a bit under the weather today, so I'll stay home.",
        options: [
          "I'm feeling a bit under the weather today, so I'll stay home.",
          "I'm feeling over the moon today, so I'll stay home.",
          "I'm feeling on thin ice today, so I'll stay home."
        ],
        correctIndex: 0,
        tip: "'Under the weather' es la forma más natural de decir que te sientes indispuesto o con malestar leve."
      },
      {
        formal: "You guessed the exact root of the problem!",
        targetExpression: "hit the nail on the head",
        nativeSentence: "You hit the nail on the head!",
        options: [
          "You hit the nail on the head!",
          "You bit the bullet!",
          "You spilled the beans!"
        ],
        correctIndex: 0,
        tip: "'Hit the nail on the head' equivale literalmente a nuestro '¡Diste en el clavo!'."
      }
    ]
  },
  slang: {
    decode: [
      {
        scene: "🎮 Mensaje de un amigo invitándote a jugar o salir:",
        expression: "I'm down",
        sentence: "— Wanna grab tacos after work? — Yeah, I'm totally down!",
        options: [
          "¡Me apunto! / ¡De una, estoy dentro!",
          "Estoy triste o desanimado",
          "Ya estoy bajando las escaleras"
        ],
        correctIndex: 0,
        literalTrap: "Aunque 'I feel down' es estar triste, responder 'I'm down' a un plan significa entusiasmo total.",
        tip: "También se pregunta: 'Are you down for tonight?' (¿Te apuntas para hoy en la noche?)."
      },
      {
        scene: "🔥 Reaccionando a algo impresionante:",
        expression: "no cap",
        sentence: "That was honestly the best match I've seen all year, no cap.",
        options: [
          "Sin mentir / en serio / de verdad",
          "Sin límite de tiempo",
          "No llevaba gorra puesta"
        ],
        correctIndex: 0,
        literalTrap: "'Cap' en slang moderno significa mentira o exageración.",
        tip: "Si alguien exagera mucho, le dicen 'Stop capping' (Deja de inventar)."
      }
    ],
    upgrade: [
      {
        formal: "That concert was extremely good and exciting!",
        targetExpression: "lit / sick",
        nativeSentence: "That concert was insane, totally lit!",
        options: [
          "That concert was insane, totally lit!",
          "That concert was mid, totally basic!",
          "That concert was salty, totally shady!"
        ],
        correctIndex: 0,
        tip: "'Lit' o 'sick' (en tono positivo) se usan para describir algo brutal o increíble."
      },
      {
        formal: "Don't worry about it, it is not a big problem.",
        targetExpression: "no biggie / my bad",
        nativeSentence: "No biggie, don't sweat it!",
        options: [
          "No biggie, don't sweat it!",
          "My bad, break a leg!",
          "Piece of cake, spill the tea!"
        ],
        correctIndex: 0,
        tip: "'No biggie' (no big deal) + 'don't sweat it' = 'No pasa nada, no te preocupes'."
      }
    ]
  }
};

// --- ESTADO DEL MÓDULO 4 ---
let slangCat = 'phrasal';
let slangMode = 'decode';
let slangIndex = 0;

const slangArena = document.getElementById('slang-arena');

document.querySelectorAll('#slang-cat-selector .lvl-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#slang-cat-selector .lvl-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    slangCat = btn.dataset.scat;
    slangIndex = 0;
    renderSlangExercise();
  });
});

document.querySelectorAll('#slang-mode-selector .mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#slang-mode-selector .mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    slangMode = btn.dataset.smode;
    slangIndex = 0;
    renderSlangExercise();
  });
});

function renderSlangExercise() {
  const list = SLANG_DATA[slangCat][slangMode];
  const item = list[slangIndex % list.length];

  if (slangMode === 'decode') {
    renderSlangDecode(item);
  } else {
    renderSlangUpgrade(item);
  }
}

// --- MODO 1: DECODIFICAR EN CONTEXTO ---
function renderSlangDecode(item) {
  const highlightedSentence = item.sentence.replace(
    new RegExp(`(${item.expression})`, 'gi'),
    `<span class="highlight-idiom">$1</span>`
  );
  const safeSentence = item.sentence.replace(/'/g, "\\'");

  slangArena.innerHTML = `
    <p style="color: var(--text-muted); font-size: 0.9rem;">${item.scene}</p>
    <div class="dialogue-box">
      "${highlightedSentence}"
      <div style="margin-top: 0.6rem;">
        <button class="btn-audio" onclick="speakText('${safeSentence}', 1.0)">🔊 Escuchar Frase</button>
        <button class="btn-audio" onclick="speakText('${safeSentence}', 0.65)">🐢 Lento</button>
      </div>
    </div>

    <p style="font-weight: 600;">¿Qué significa realmente "<span style="color: var(--primary);">${item.expression}</span>" aquí?</p>

    <div class="slang-options-grid">
      ${item.options.map((opt, idx) => `
        <button class="slang-choice-btn" data-idx="${idx}">${opt}</button>
      `).join('')}
    </div>

    <div id="slang-feedback"></div>
    <div style="margin-top: 1rem;">
      <button id="next-slang-btn" class="btn-audio">Siguiente Expresión ➔</button>
    </div>
  `;

  document.getElementById('next-slang-btn').onclick = () => { slangIndex++; renderSlangExercise(); };

  document.querySelectorAll('.slang-choice-btn').forEach(btn => {
    btn.onclick = () => {
      const picked = Number(btn.dataset.idx);
      const fb = document.getElementById('slang-feedback');

      if (picked === item.correctIndex) {
        btn.classList.add('correct');
        speakText(item.sentence);
        fb.innerHTML = `
          <div class="grammar-explanation">
            <p style="color: var(--accent); font-weight: bold;">✅ ¡Exacto! ${item.options[item.correctIndex]}</p>
            <p style="margin-top: 0.4rem;">⚠️ <strong>${item.literalTrap}</strong></p>
            <p style="margin-top: 0.3rem;">💡 ${item.tip}</p>
            <button id="save-idiom-deck" class="btn-save" style="margin-top: 0.8rem;">+ Guardar "${item.expression}" en mi Mazo SRS</button>
          </div>
        `;
        document.getElementById('save-idiom-deck').onclick = () => {
          addWordToDeck({
            word: item.expression,
            phonetic: `(${slangCat})`,
            definition: item.options[item.correctIndex],
            example: item.sentence,
            box: 1,
            nextReview: Date.now()
          });
        };
      } else {
        btn.classList.add('wrong');
        fb.innerHTML = `<p style="color: var(--danger); font-weight: 600;">❌ No exactamente. Fíjate en el contexto de la situación y prueba otra opción.</p>`;
      }
    };
  });
}

// --- MODO 2: DE LIBRO DE TEXTO A NATIVO ---
function renderSlangUpgrade(item) {
  slangArena.innerHTML = `
    <p style="color: var(--text-muted); font-size: 0.9rem;">Frase rígida / de libro de texto:</p>
    <div class="dialogue-box" style="border-left-color: var(--text-muted);">
      "${item.formal}"
    </div>

    <p style="font-weight: 600;">Elige cómo lo diría un hablante nativo de forma natural:</p>

    <div class="slang-options-grid">
      ${item.options.map((opt, idx) => `
        <button class="slang-choice-btn" data-idx="${idx}">${opt}</button>
      `).join('')}
    </div>

    <div id="slang-feedback"></div>
    <div style="margin-top: 1rem;">
      <button id="next-slang-btn" class="btn-audio">Siguiente Reto ➔</button>
    </div>
  `;

  document.getElementById('next-slang-btn').onclick = () => { slangIndex++; renderSlangExercise(); };

  document.querySelectorAll('.slang-choice-btn').forEach(btn => {
    btn.onclick = () => {
      const picked = Number(btn.dataset.idx);
      const fb = document.getElementById('slang-feedback');

      if (picked === item.correctIndex) {
        btn.classList.add('correct');
        speakText(item.nativeSentence);
        fb.innerHTML = `
          <div class="grammar-explanation">
            <p style="color: var(--accent); font-weight: bold;">✅ ¡Suenas como nativo!</p>
            <p style="margin-top: 0.3rem;">💡 ${item.tip}</p>
            <button id="save-idiom-deck" class="btn-save" style="margin-top: 0.8rem;">+ Guardar "${item.targetExpression}" en mi Mazo SRS</button>
          </div>
        `;
        document.getElementById('save-idiom-deck').onclick = () => {
          addWordToDeck({
            word: item.targetExpression,
            phonetic: `(native expression)`,
            definition: item.formal,
            example: item.nativeSentence,
            box: 1,
            nextReview: Date.now()
          });
        };
      } else {
        btn.classList.add('wrong');
        fb.innerHTML = `<p style="color: var(--danger); font-weight: 600;">❌ Esa expresión significa otra cosa. Intenta de nuevo.</p>`;
      }
    };
  });
}

// Inicializar
renderSlangExercise();