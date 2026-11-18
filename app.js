// --- NAVEGACIÓN ENTRE MÓDULOS ---
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// --- MOTOR DE VOZ BLINDADO (WEB SPEECH + FALLBACK EXTERNO) ---
let availableVoices = [];

function initVoices() {
  availableVoices = window.speechSynthesis.getVoices();
}

initVoices();
if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = initVoices;
}

function speakText(text, rate = 1.0) {
  // 1. Intentar con Web Speech API si hay voces cargadas
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    if (availableVoices.length === 0) initVoices();

    const voice =
      availableVoices.find(v => v.lang === 'en-US') ||
      availableVoices.find(v => v.lang.startsWith('en'));

    if (voice) {
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = voice;
        utterance.lang = voice.lang;
        utterance.rate = rate;
        window.speechSynthesis.speak(utterance);
      }, 50);
      return;
    }
  }

  // 2. Respaldo automático (si el navegador/SO no tiene voces en inglés instaladas)
  const fallbackUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&type=2`;
  const audio = new Audio(fallbackUrl);
  audio.playbackRate = rate;
  audio.play().catch(err => console.error('Error en audio de respaldo:', err));
}

// --- REPRODUCTOR SEGURO PARA EL BOTÓN NATIVO DE LA API ---
function playNativeAudio(rawUrl, fallbackWord) {
  if (!rawUrl) {
    speakText(fallbackWord, 1.0);
    return;
  }
  // Corrige URLs que vienen sin protocolo (ej: "//api.dictionaryapi.dev/...")
  const fixedUrl = rawUrl.startsWith('//') ? `https:${rawUrl}` : rawUrl;
  const audio = new Audio(fixedUrl);
  
  audio.play().catch(() => {
    // Si el archivo MP3 de la API está roto, usa automáticamente speakText
    speakText(fallbackWord, 1.0);
  });
}

// Los navegadores cargan las voces de forma asíncrona
loadVoices();
if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function speakText(text, rate = 1.0) {
  if (!('speechSynthesis' in window)) {
    alert('Tu navegador no soporta síntesis de voz.');
    return;
  }

  // Si estaba pausado o trabado, lo reinicia suavemente
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  // Pequeña pausa de 50ms para evitar el bug de Chrome donde cancel() mata el siguiente speak()
  setTimeout(() => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    if (!englishVoice) loadVoices();
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    window.speechSynthesis.speak(utterance);
  }, 50);
}

// --- ALMACENAMIENTO LOCAL (ESTRUCTURA LISTA PARA SUPABASE) ---
const STORAGE_KEY = 'english_lab_deck_v1';

function getDeck() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveDeck(deck) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(deck));
  renderDeck();
}

// --- CONSULTA A FREE DICTIONARY API ---
const wordInput = document.getElementById('word-input');
const searchBtn = document.getElementById('search-btn');
const resultBox = document.getElementById('dictionary-result');

async function lookupWord(word) {
  const cleanWord = word.trim().toLowerCase();
  if (!cleanWord) return;

  resultBox.classList.remove('hidden');
  resultBox.innerHTML = `<p>Buscando "<strong>${cleanWord}</strong>"...</p>`;

  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`);
    if (!res.ok) throw new Error('Palabra no encontrada');
    const data = await res.json();
    renderDictionaryCard(data[0]);
  } catch (err) {
    resultBox.innerHTML = `<p style="color: var(--danger);">No encontramos esa palabra exacta. Revisa la ortografía o intenta con su forma base (ej. "run" en vez de "running").</p>`;
  }
}

function renderDictionaryCard(entry) {
  const phonetic = entry.phonetic || (entry.phonetics.find(p => p.text)?.text) || '';
  const audioObj = entry.phonetics.find(p => p.audio && p.audio.length > 0);
  const realAudioUrl = audioObj ? audioObj.audio : null;

  let meaningsHTML = '';
  let firstDefinition = '';
  let firstExample = '';

  entry.meanings.slice(0, 2).forEach(m => {
    const def = m.definitions[0];
    if (!firstDefinition) firstDefinition = def.definition;
    if (!firstExample && def.example) firstExample = def.example;

    meaningsHTML += `
      <div class="meaning-block">
        <span class="pos-tag">${m.partOfSpeech}</span>
        <p><strong>Definición:</strong> ${def.definition}</p>
        ${def.example ? `<p class="example-text">"${def.example}" <button class="btn-audio" onclick="speakText('${def.example.replace(/'/g, "\\'")}')">🔊</button></p>` : ''}
      </div>
    `;
  });

  resultBox.innerHTML = `
    <div class="word-title-row">
      <div>
        <h2>${entry.word} <span class="phonetic">${phonetic}</span></h2>
      </div>
      <div class="audio-controls">
        <button class="btn-audio" onclick="speakText('${entry.word}', 1.0)">🔊 Normal</button>
        <button class="btn-audio" onclick="speakText('${entry.word}', 0.65)">🐢 Lento</button>
        ${realAudioUrl ? `<button class="btn-audio" onclick="new Audio('${realAudioUrl}').play()">🎙️ Nativo</button>` : ''}
        <button class="btn-save" id="save-word-btn">+ Guardar en Mazo</button>
      </div>
    </div>
    ${meaningsHTML}
  `;

  document.getElementById('save-word-btn').addEventListener('click', () => {
    addWordToDeck({
      word: entry.word,
      phonetic,
      definition: firstDefinition,
      example: firstExample || `I need to practice using the word "${entry.word}".`,
      box: 1, // Nivel SRS (1 a 5)
      nextReview: Date.now()
    });
  });
}

function addWordToDeck(item) {
  const deck = getDeck();
  if (deck.some(w => w.word === item.word)) {
    alert('Esta palabra ya está en tu mazo.');
    return;
  }
  deck.unshift(item);
  saveDeck(deck);
}

function removeWord(word) {
  const deck = getDeck().filter(w => w.word !== word);
  saveDeck(deck);
}

// --- RENDERIZAR MAZO GUARDADO ---
function renderDeck() {
  const deck = getDeck();
  document.getElementById('deck-count').textContent = `📚 Mazo: ${deck.length}`;
  const list = document.getElementById('saved-words-list');

  if (deck.length === 0) {
    list.innerHTML = `<p style="color: var(--text-muted);">Aún no tienes palabras guardadas. Busca una arriba y agrégala.</p>`;
    return;
  }

  list.innerHTML = deck.map(item => `
    <div class="saved-card">
      <div>
        <h3>
          <span>${item.word}</span>
          <span class="srs-badge">Nivel ${item.box}/5</span>
        </h3>
        <small style="color: var(--text-muted);">${item.phonetic}</small>
        <p style="font-size: 0.9rem; margin-top: 0.5rem;">${item.definition}</p>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.8rem;">
        <button class="btn-audio" onclick="speakText('${item.word}')">🔊 Escuchar</button>
        <button class="delete-btn" onclick="removeWord('${item.word}')">Eliminar</button>
      </div>
    </div>
  `).join('');
}

// --- MODO PRÁCTICA ACTIVA (REPASO) ---
const reviewArena = document.getElementById('review-arena');
document.getElementById('start-review-btn').addEventListener('click', startReviewSession);

function startReviewSession() {
  const deck = getDeck();
  if (deck.length === 0) {
    alert('Agrega al menos una palabra a tu mazo para practicar.');
    return;
  }
  // Selecciona una palabra priorizando las de nivel SRS más bajo
  const sorted = [...deck].sort((a, b) => a.box - b.box);
  const target = sorted[0];

  reviewArena.classList.remove('hidden');
  reviewArena.innerHTML = `
    <p style="color: var(--text-muted); font-size: 0.9rem;">Escucha la pronunciación y lee la pista. Escribe la palabra en inglés:</p>
    <div style="margin: 0.8rem 0;">
      <button class="btn-audio" onclick="speakText('${target.word}', 1.0)">🔊 Escuchar Palabra</button>
      <button class="btn-audio" onclick="speakText('${target.word}', 0.6)">🐢 Escuchar Lento</button>
    </div>
    <p><strong>Definición:</strong> ${target.definition}</p>
    <input type="text" id="review-answer" class="review-input" placeholder="Escribe la palabra..." autocomplete="off" />
    <br>
    <button id="check-review-btn" class="btn-primary">Comprobar</button>
    <button id="close-review-btn" class="btn-audio">Cerrar</button>
    <p id="review-feedback" style="margin-top: 0.8rem; font-weight: bold;"></p>
  `;

  speakText(target.word);

  document.getElementById('close-review-btn').onclick = () => reviewArena.classList.add('hidden');
  document.getElementById('check-review-btn').onclick = () => {
    const userAns = document.getElementById('review-answer').value.trim().toLowerCase();
    const feedback = document.getElementById('review-feedback');

    if (userAns === target.word.toLowerCase()) {
      feedback.style.color = 'var(--accent)';
      feedback.textContent = `¡Correcto! "${target.word}" sube de nivel.`;
      const updatedDeck = getDeck().map(w => w.word === target.word ? { ...w, box: Math.min(5, w.box + 1) } : w);
      saveDeck(updatedDeck);
      setTimeout(startReviewSession, 1300);
    } else {
      feedback.style.color = 'var(--danger)';
      feedback.textContent = `Incorrecto. La palabra era "${target.word}". Intenta con la siguiente.`;
      const updatedDeck = getDeck().map(w => w.word === target.word ? { ...w, box: 1 } : w);
      saveDeck(updatedDeck);
      setTimeout(startReviewSession, 1800);
    }
  };
}

// Eventos de búsqueda
searchBtn.addEventListener('click', () => lookupWord(wordInput.value));
wordInput.addEventListener('keypress', e => { if (e.key === 'Enter') lookupWord(wordInput.value); });
document.querySelectorAll('.tag-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    wordInput.value = btn.dataset.word;
    lookupWord(btn.dataset.word);
  });
});

// Inicializar
renderDeck();
