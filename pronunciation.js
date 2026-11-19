// --- BANCO AMPLIADO DE PRONUNCIACIÓN (SHADOWING + PARES MÍNIMOS + MODO LIBRE) ---
const PRONUNCIATION_DATA = {
  basic: {
    shadowing: [
      {
        phrase: "I would like a cup of coffee please",
        ipa: "/aɪ wʊd laɪk ə kʌp əv ˈkɔːfi pliːz/",
        tip: "Une 'cup of' como si sonara 'cuppa' y suaviza la 'd' en 'would'."
      },
      {
        phrase: "Where is the nearest train station",
        ipa: "/weər ɪz ðə ˈnɪərɪst treɪn ˈsteɪʃən/",
        tip: "Pronuncia 'th' en 'the' poniendo la punta de la lengua suavemente entre los dientes."
      },
      {
        phrase: "How much does this ticket cost",
        ipa: "/haʊ mʌtʃ dʌz ðɪs ˈtɪkɪt kɒst/",
        tip: "Marca bien la 't' final en 'ticket' y 'cost' sin agregar una vocal después."
      },
      {
        phrase: "Could you repeat that a little slower",
        ipa: "/kʊd juː rɪˈpiːt ðæt ə ˈlɪtl ˈsləʊər/",
        tip: "Suaviza la 't' de 'little' como una 'r' suave americana ('liddle')."
      }
    ],
    pairs: [
      {
        wordA: "ship", ipaA: "/ʃɪp/ (barco)",
        wordB: "sheep", ipaB: "/ʃiːp/ (oveja)",
        tip: "'ship' tiene una 'i' corta y relajada; 'sheep' alarga el sonido 'ii' con sonrisa."
      },
      {
        wordA: "live", ipaA: "/lɪv/ (vivir)",
        wordB: "leave", ipaB: "/liːv/ (irse)",
        tip: "En 'live' la vocal es breve; en 'leave' se estira como una 'i' española larga."
      },
      {
        wordA: "full", ipaA: "/fʊl/ (lleno)",
        wordB: "fool", ipaB: "/fuːl/ (tonto)",
        tip: "'full' es una 'u' corta y relajada; 'fool' proyecta los labios hacia adelante."
      },
      {
        wordA: "hat", ipaA: "/hæt/ (sombrero)",
        wordB: "hot", ipaB: "/hɒt/ (caliente)",
        tip: "'hat' abre la boca hacia los lados (/æ/); 'hot' baja la mandíbula (/ɒ/)."
      }
    ]
  },
  intermediate: {
    shadowing: [
      {
        phrase: "I have been working on this project all week",
        ipa: "/aɪ həv bɪn ˈwɜːrkɪŋ ɒn ðɪs ˈprɒdʒekt ɔːl wiːk/",
        tip: "Pronuncia 'have' muy rápido (/həv/) sin marcar la 'h' fuerte para sonar fluido."
      },
      {
        phrase: "Could you tell me what time the meeting starts",
        ipa: "/kʊd juː tel miː wɒt taɪm ðə ˈmiːtɪŋ stɑːrts/",
        tip: "'Could you' suele fusionarse en inglés natural sonando parecido a 'coud-joo'."
      },
      {
        phrase: "I am looking forward to hearing from you soon",
        ipa: "/aɪ æm ˈlʊkɪŋ ˈfɔːrwərd tə ˈhɪərɪŋ frɒm juː suːn/",
        tip: "Reduce 'to' a un sonido neutro rápido (/tə/) entre 'forward' y 'hearing'."
      },
      {
        phrase: "Let me know if you run into any issues",
        ipa: "/let miː nəʊ ɪf juː rʌn ˈɪntuː ˈeni ˈɪʃuːz/",
        tip: "Conecta 'run into' sin pausa entre ambas palabras."
      }
    ],
    pairs: [
      {
        wordA: "work", ipaA: "/wɜːrk/ (trabajar)",
        wordB: "walk", ipaB: "/wɔːk/ (caminar)",
        tip: "'work' lleva una 'r' cerrada en el centro; 'walk' suena más parecido a 'uók' sin 'r'."
      },
      {
        wordA: "beach", ipaA: "/biːtʃ/ (playa)",
        wordB: "bitch", ipaB: "/bɪtʃ/ (insulto)",
        tip: "Clave: en 'beach' mantén la 'i' larga (/biːtʃ/) para no confundirla con la 'i' corta."
      },
      {
        wordA: "dessert", ipaA: "/dɪˈzɜːrt/ (postre)",
        wordB: "desert", ipaB: "/ˈdezərt/ (desierto)",
        tip: "'dessert' lleva el acento en la segunda sílaba; 'desert' en la primera."
      },
      {
        wordA: "sheet", ipaA: "/ʃiːt/ (hoja/sábana)",
        wordB: "shit", ipaB: "/ʃɪt/ (grosería)",
        tip: "Alarga siempre la vocal en 'sheet' (/ʃiːt/) cuando pidas una hoja de papel."
      }
    ]
  },
  advanced: {
    shadowing: [
      {
        phrase: "Thorough preparation prevents poor performance",
        ipa: "/ˈθʌrə ˌprepəˈreɪʃən prɪˈvents pʊər pərˈfɔːrməns/",
        tip: "'Thorough' termina con sonido 'oh' (/ˈθʌrə/), no como 'through'."
      },
      {
        phrase: "She sells seashells by the seashore",
        ipa: "/ʃiː selz ˈsiːʃelz baɪ ðə ˈsiːʃɔːr/",
        tip: "Alterna limpiamente entre el sonido 's' (sells/sea) y el sonido 'sh' (she/shells/shore)."
      },
      {
        phrase: "Rarely do we encounter such an extraordinary opportunity",
        ipa: "/ˈreərli duː wiː ɪnˈkaʊntər sʌtʃ ən ɪkˈstrɔːrdəneri ˌɒpərˈtuːnəti/",
        tip: "En 'extraordinary', la 'a' se fusiona con la 'o' formando un solo sonido largo (/ɪkˈstrɔːr/)."
      }
    ],
    pairs: [
      {
        wordA: "thought", ipaA: "/θɔːt/ (pensó)",
        wordB: "taught", ipaB: "/tɔːt/ (enseñó)",
        tip: "'thought' empieza soplando aire entre los dientes (/θ/); 'taught' golpea con la lengua arriba (/t/)."
      },
      {
        wordA: "three", ipaA: "/θriː/ (tres)",
        wordB: "tree", ipaB: "/triː/ (árbol)",
        tip: "No digas 'tri' para el número 3; saca ligeramente la lengua en 'th' antes de la 'r'."
      },
      {
        wordA: "world", ipaA: "/wɜːrld/ (mundo)",
        wordB: "word", ipaB: "/wɜːrd/ (palabra)",
        tip: "En 'world', sube la lengua al paladar para la 'l' justo antes de cerrar con la 'd'."
      }
    ]
  }
};

// Respaldo de frases reales si la API externa tarda
const REAL_QUOTES_BACKUP = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
  "Believe you can and you are halfway there.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "Quality is not an act, it is a habit."
];

// --- ESTADO DEL MÓDULO ---
let pronLevel = 'basic';
let pronMode = 'shadowing';
let pronIndex = 0;
let activeRecognition = null;
let customTargetPhrase = "Practice makes progress, not perfection.";

const pronArena = document.getElementById('pronunciation-arena');

document.querySelectorAll('#pron-level-selector .lvl-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#pron-level-selector .lvl-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    pronLevel = btn.dataset.plevel;
    pronIndex = 0;
    renderPronunciationExercise();
  });
});

document.querySelectorAll('#pron-mode-selector .mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#pron-mode-selector .mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    pronMode = btn.dataset.pmode;
    pronIndex = 0;
    renderPronunciationExercise();
  });
});

function renderPronunciationExercise() {
  if (activeRecognition) {
    try { activeRecognition.abort(); } catch (e) {}
  }

  if (pronMode === 'custom') {
    renderCustomShadowing();
    return;
  }

  const list = PRONUNCIATION_DATA[pronLevel][pronMode];
  const item = list[pronIndex % list.length];

  if (pronMode === 'shadowing') {
    renderShadowing(item);
  } else {
    renderMinimalPairs(item);
  }
}

// --- MODO 1: SHADOWING GUIADO ---
function renderShadowing(item) {
  const safePhrase = item.phrase.replace(/'/g, "\\'");

  pronArena.innerHTML = `
    <p style="color: var(--text-muted); font-size: 0.9rem;">1. Escucha la frase modelo. 2. Presiona el micrófono y repítela en voz alta:</p>
    
    <div id="shadow-phrase-display" class="target-phrase-box">${item.phrase}</div>
    <p style="font-family: monospace; color: var(--primary); margin-bottom: 1rem;">${item.ipa}</p>

    <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center; margin-bottom: 1.2rem;">
      <button class="btn-audio" onclick="speakText('${safePhrase}', 1.0)">🔊 Escuchar Normal</button>
      <button class="btn-audio" onclick="speakText('${safePhrase}', 0.65)">🐢 Escuchar Lento</button>
      <button id="start-mic-btn" class="mic-btn">🎙️ Grabar mi voz</button>
      <button id="next-pron-btn" class="btn-audio">Siguiente ➔</button>
    </div>

    <div id="speech-result-box"></div>

    <div class="grammar-explanation" style="margin-top: 1.2rem;">
      <strong>💡 Tip de articulación:</strong> ${item.tip}
    </div>
  `;

  document.getElementById('next-pron-btn').onclick = () => { pronIndex++; renderPronunciationExercise(); };
  bindMicrophoneButton(item.phrase);
}

// --- MODO 2: PRÁCTICA LIBRE Y FRASES REALES INFINITAS ---
function renderCustomShadowing() {
  const safePhrase = customTargetPhrase.replace(/'/g, "\\'");

  pronArena.innerHTML = `
    <p style="color: var(--text-muted); font-size: 0.9rem;">Pega cualquier frase, diálogo o letra en inglés, o genera una cita real aleatoria para practicar Shadowing sin límites:</p>

    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 0.8rem 0;">
      <input type="text" id="custom-shadow-input" style="flex: 1; min-width: 240px; padding: 0.75rem; border-radius: 10px; border: 1px solid var(--border); background: var(--bg); color: var(--text); font-size: 1rem;" placeholder="Escribe o pega tu frase en inglés..." value="${customTargetPhrase.replace(/"/g, '&quot;')}" />
      <button id="apply-custom-btn" class="btn-primary">Cargar Texto</button>
      <button id="fetch-random-quote-btn" class="btn-secondary">🎲 Frase Real Aleatoria</button>
    </div>

    <div id="shadow-phrase-display" class="target-phrase-box">${customTargetPhrase}</div>

    <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center; margin-bottom: 1.2rem;">
      <button class="btn-audio" onclick="speakText('${safePhrase}', 1.0)">🔊 Escuchar Normal</button>
      <button class="btn-audio" onclick="speakText('${safePhrase}', 0.65)">🐢 Escuchar Lento</button>
      <button id="start-mic-btn" class="mic-btn">🎙️ Grabar mi voz</button>
    </div>

    <div id="speech-result-box"></div>
  `;

  document.getElementById('apply-custom-btn').onclick = () => {
    const val = document.getElementById('custom-shadow-input').value.trim();
    if (val) {
      customTargetPhrase = val;
      renderCustomShadowing();
    }
  };

  document.getElementById('fetch-random-quote-btn').onclick = async () => {
    const btn = document.getElementById('fetch-random-quote-btn');
    btn.textContent = "⏳ Cargando...";
    try {
      const res = await fetch('https://dummyjson.com/quotes/random');
      if (!res.ok) throw new Error();
      const data = await res.json();
      customTargetPhrase = data.quote;
    } catch {
      customTargetPhrase = REAL_QUOTES_BACKUP[Math.floor(Math.random() * REAL_QUOTES_BACKUP.length)];
    }
    renderCustomShadowing();
    speakText(customTargetPhrase, 1.0);
  };

  bindMicrophoneButton(customTargetPhrase);
}

// --- CONTROLADOR COMPARTIDO DE MICRÓFONO ---
function bindMicrophoneButton(targetPhrase) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const micBtn = document.getElementById('start-mic-btn');
  const resultBox = document.getElementById('speech-result-box');

  if (!SpeechRecognition) {
    micBtn.disabled = true;
    micBtn.textContent = "🎙️ Micrófono no soportado en este navegador";
    return;
  }

  micBtn.onclick = () => {
    const recognition = new SpeechRecognition();
    activeRecognition = recognition;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    micBtn.classList.add('recording');
    micBtn.textContent = "🔴 Escuchando... habla ahora";
    resultBox.innerHTML = `<p style="color: var(--text-muted);">Te escucho...</p>`;

    recognition.start();

    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript;
      evaluatePronunciation(targetPhrase, spoken);
    };

    recognition.onerror = (event) => {
      micBtn.classList.remove('recording');
      micBtn.textContent = "🎙️ Grabar mi voz";
      resultBox.innerHTML = `<p style="color: var(--danger);">No se detectó voz (${event.error}). Verifica permisos del micrófono e intenta de nuevo.</p>`;
    };

    recognition.onend = () => {
      micBtn.classList.remove('recording');
      micBtn.textContent = "🎙️ Intentar de nuevo";
    };
  };
}

function evaluatePronunciation(targetPhrase, spokenText) {
  const cleanTarget = targetPhrase.toLowerCase().replace(/[^a-z'\s]/g, '').split(/\s+/).filter(Boolean);
  const cleanSpoken = spokenText.toLowerCase().replace(/[^a-z'\s]/g, '').split(/\s+/).filter(Boolean);
  const originalWords = targetPhrase.split(/\s+/);

  let matchedCount = 0;
  const highlightedHTML = originalWords.map((origWord) => {
    const norm = origWord.toLowerCase().replace(/[^a-z']/g, '');
    if (!norm || cleanSpoken.includes(norm)) {
      if (norm) matchedCount++;
      return `<span class="word-match">${origWord}</span>`;
    } else {
      return `<span class="word-miss">${origWord}</span>`;
    }
  }).join(' ');

  const totalCountable = cleanTarget.length || 1;
  const score = Math.round((matchedCount / totalCountable) * 100);
  document.getElementById('shadow-phrase-display').innerHTML = highlightedHTML;

  const color = score >= 80 ? 'var(--accent)' : score >= 50 ? '#fbbf24' : 'var(--danger)';
  document.getElementById('speech-result-box').innerHTML = `
    <div style="background: var(--bg); padding: 1rem; border-radius: 10px; border: 1px solid var(--border);">
      <p style="font-size: 1.1rem; font-weight: bold; color: ${color};">Precisión: ${score}% (${matchedCount}/${totalCountable} palabras)</p>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.3rem;">Lo que captó el micrófono: <em>"${spokenText}"</em></p>
    </div>
  `;
}

// --- MODO 3: PARES MÍNIMOS (ENTRENAMIENTO AUDITIVO) ---
function renderMinimalPairs(pair) {
  const secretWord = Math.random() < 0.5 ? pair.wordA : pair.wordB;

  pronArena.innerHTML = `
    <p style="color: var(--text-muted); font-size: 0.9rem;">Escucha la palabra secreta y haz clic en cuál de las dos acabas de oír:</p>
    
    <div style="margin: 1.2rem 0;">
      <button id="play-secret-btn" class="btn-primary">🔊 Reproducir Palabra Misteriosa</button>
      <button class="btn-audio" onclick="speakText('${secretWord}', 0.6)">🐢 Lento</button>
    </div>

    <div class="pairs-grid">
      <button class="pair-card-btn" data-choice="${pair.wordA}">
        <h3>${pair.wordA}</h3>
        <span>${pair.ipaA}</span>
      </button>
      <button class="pair-card-btn" data-choice="${pair.wordB}">
        <h3>${pair.wordB}</h3>
        <span>${pair.ipaB}</span>
      </button>
    </div>

    <div id="pair-feedback"></div>
    <div style="margin-top: 1rem;">
      <button id="next-pair-btn" class="btn-audio">Siguiente Par ➔</button>
    </div>
  `;

  setTimeout(() => speakText(secretWord, 1.0), 200);

  document.getElementById('play-secret-btn').onclick = () => speakText(secretWord, 1.0);
  document.getElementById('next-pair-btn').onclick = () => { pronIndex++; renderPronunciationExercise(); };

  document.querySelectorAll('.pair-card-btn').forEach(btn => {
    btn.onclick = () => {
      const choice = btn.dataset.choice;
      const fb = document.getElementById('pair-feedback');
      if (choice === secretWord) {
        fb.innerHTML = `
          <div class="grammar-explanation">
            <p style="color: var(--accent); font-weight: bold;">✅ ¡Oído fino! Era "${secretWord}".</p>
            <p style="margin-top: 0.3rem;">${pair.tip}</p>
          </div>
        `;
      } else {
        fb.innerHTML = `
          <p style="color: var(--danger); font-weight: 600;">❌ Elegiste "${choice}", pero sonó "${secretWord}". Escucha ambas para notar la diferencia:</p>
          <div style="margin-top: 0.5rem; display: flex; gap: 0.5rem;">
            <button class="btn-audio" onclick="speakText('${pair.wordA}')">🔊 ${pair.wordA}</button>
            <button class="btn-audio" onclick="speakText('${pair.wordB}')">🔊 ${pair.wordB}</button>
          </div>
        `;
      }
    };
  });
}

// Inicializar
renderPronunciationExercise();
