// --- CONFIGURACIÓN SUPABASE ---
// Pega aquí tus credenciales públicas (Project Settings -> API)
const SUPABASE_URL = 'https://stzukfgxwsjuztjjmfov.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_sdKNxaC0HQUeGa3thZQAIg_yFoYwa3Z';

const supabaseClient = (SUPABASE_URL.startsWith('https://') && !SUPABASE_URL.includes('TU_PROYECTO'))
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

let currentUser = null;
let memoryDeck = [];

// --- NAVEGACIÓN ENTRE MÓDULOS ---
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// --- MOTOR DE VOZ NATIVO LIMPIO ---
function speakText(text, rate = 1.0) {
  const cleanText = text.trim();
  if (!cleanText || !('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();
  window.speechSynthesis.resume();

  const voices = window.speechSynthesis.getVoices();
  const enVoice =
    voices.find(v => v.name.includes('Google US English')) ||
    voices.find(v => v.name.includes('Microsoft Aria')) ||
    voices.find(v => v.name.includes('Microsoft Guy')) ||
    voices.find(v => v.lang === 'en-US') ||
    voices.find(v => v.lang.startsWith('en'));

  const utterance = new SpeechSynthesisUtterance(cleanText);
  if (enVoice) utterance.voice = enVoice;
  utterance.lang = 'en-US';
  utterance.rate = rate;
  utterance.pitch = 1.0;

  window.speechSynthesis.speak(utterance);
}

function playNativeAudio(rawUrl, fallbackWord) {
  if (!rawUrl) {
    speakText(fallbackWord, 1.0);
    return;
  }
  const fixedUrl = rawUrl.startsWith('//') ? `https:${rawUrl}` : rawUrl;
  const audio = new Audio(fixedUrl);
  audio.play().catch(() => speakText(fallbackWord, 1.0));
}

// --- GESTIÓN HÍBRIDA DEL MAZO (SUPABASE + RESPALDO LOCALSTORAGE) ---
const STORAGE_KEY = 'english_lab_deck_v1';

function getDeck() {
  return memoryDeck;
}

async function loadUserDeck() {
  if (supabaseClient && currentUser) {
    const { data, error } = await supabaseClient
      .from('user_deck')
      .select('*')
      .eq('user_id', currentUser.id)
      .order('created_at', { ascending: false });

    if (!error && data) {
      memoryDeck = data.map(row => ({
        word: row.word,
        phonetic: row.phonetic,
        definition: row.definition,
        example: row.example,
        box: row.box,
        nextReview: row.next_review
      }));
      renderDeck();
      return;
    }
  }
  // Si no hay sesión iniciada, usa localStorage
  memoryDeck = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  renderDeck();
}

async function addWordToDeck(item) {
  if (memoryDeck.some(w => w.word.toLowerCase() === item.word.toLowerCase())) {
    alert('Esta palabra o expresión ya está en tu mazo.');
    return;
  }

  memoryDeck.unshift(item);
  renderDeck();

  if (supabaseClient && currentUser) {
    const { error } = await supabaseClient.from('user_deck').insert([{
      user_id: currentUser.id,
      word: item.word,
      phonetic: item.phonetic || '',
      definition: item.definition,
      example: item.example || '',
      box: item.box || 1,
      next_review: item.nextReview || Date.now()
    }]);
    if (error) console.error('Error guardando en Supabase:', error.message);
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryDeck));
  }
}

async function updateWordBox(word, newBox) {
  memoryDeck = memoryDeck.map(w => w.word === word ? { ...w, box: newBox } : w);
  renderDeck();

  if (supabaseClient && currentUser) {
    await supabaseClient
      .from('user_deck')
      .update({ box: newBox, next_review: Date.now() })
      .eq('user_id', currentUser.id)
      .eq('word', word);
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryDeck));
  }
}

async function removeWord(word) {
  memoryDeck = memoryDeck.filter(w => w.word !== word);
  renderDeck();

  if (supabaseClient && currentUser) {
    await supabaseClient
      .from('user_deck')
      .delete()
      .eq('user_id', currentUser.id)
      .eq('word', word);
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryDeck));
  }
}

// --- AUTENTICACIÓN DE USUARIOS (SUPABASE AUTH) ---
const authModal = document.getElementById('auth-modal');
const authOpenBtn = document.getElementById('auth-open-btn');
const authCloseBtn = document.getElementById('auth-close-btn');
const authMsg = document.getElementById('auth-msg');

authOpenBtn.onclick = () => {
  authMsg.textContent = '';
  authModal.classList.remove('hidden');
};
authCloseBtn.onclick = () => authModal.classList.add('hidden');

function updateAuthUI() {
  const loggedOutView = document.getElementById('auth-logged-out-view');
  const loggedInView = document.getElementById('auth-logged-in-view');

  if (currentUser) {
    authOpenBtn.textContent = `☁️ ${currentUser.email.split('@')[0]}`;
    authOpenBtn.style.borderColor = 'var(--accent)';
    loggedOutView.classList.add('hidden');
    loggedInView.classList.remove('hidden');
    document.getElementById('user-email-label').textContent = currentUser.email;
  } else {
    authOpenBtn.textContent = '👤 Entrar';
    authOpenBtn.style.borderColor = 'transparent';
    loggedOutView.classList.remove('hidden');
    loggedInView.classList.add('hidden');
  }
}

if (supabaseClient) {
  supabaseClient.auth.getSession().then(({ data: { session } }) => {
    currentUser = session?.user || null;
    updateAuthUI();
    loadUserDeck();
  });

  supabaseClient.auth.onAuthStateChange((_event, session) => {
    currentUser = session?.user || null;
    updateAuthUI();
    loadUserDeck();
  });

  document.getElementById('login-submit-btn').onclick = async () => {
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    authMsg.style.color = 'var(--text-muted)';
    authMsg.textContent = 'Conectando...';

    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      authMsg.style.color = 'var(--danger)';
      authMsg.textContent = `Error: ${error.message}`;
    } else {
      authModal.classList.add('hidden');
    }
  };

  document.getElementById('signup-submit-btn').onclick = async () => {
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    authMsg.style.color = 'var(--text-muted)';
    authMsg.textContent = 'Creando cuenta...';

    const { error } = await supabaseClient.auth.signUp({ email, password });
    if (error) {
      authMsg.style.color = 'var(--danger)';
      authMsg.textContent = `Error: ${error.message}`;
    } else {
      authMsg.style.color = 'var(--accent)';
      authMsg.textContent = '✅ ¡Cuenta creada! Ya puedes iniciar sesión.';
    }
  };

  document.getElementById('logout-btn').onclick = async () => {
    await supabaseClient.auth.signOut();
    authModal.classList.add('hidden');
  };
} else {
  loadUserDeck();
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
    resultBox.innerHTML = `<p style="color: var(--danger);">No encontramos esa palabra exacta. Revisa la ortografía o intenta con su forma base.</p>`;
  }
}

function renderDictionaryCard(entry) {
  const phonetic = entry.phonetic || (entry.phonetics.find(p => p.text)?.text) || '';
  const audioObj = entry.phonetics.find(p => p.audio && p.audio.length > 0);
  const realAudioUrl = audioObj ? audioObj.audio : '';

  let meaningsHTML = '';
  let firstDefinition = '';
  let firstExample = '';

  entry.meanings.slice(0, 2).forEach(m => {
    const def = m.definitions[0];
    if (!firstDefinition) firstDefinition = def.definition;
    if (!firstExample && def.example) firstExample = def.example;

    const safeExample = def.example ? def.example.replace(/'/g, "\\'") : '';

    meaningsHTML += `
      <div class="meaning-block">
        <span class="pos-tag">${m.partOfSpeech}</span>
        <p><strong>Definición:</strong> ${def.definition}</p>
        ${def.example ? `<p class="example-text">"${def.example}" <button class="btn-audio" onclick="speakText('${safeExample}')">🔊</button></p>` : ''}
      </div>
    `;
  });

  const safeWord = entry.word.replace(/'/g, "\\'");

  resultBox.innerHTML = `
    <div class="word-title-row">
      <div>
        <h2>${entry.word} <span class="phonetic">${phonetic}</span></h2>
      </div>
      <div class="audio-controls">
        <button class="btn-audio" onclick="speakText('${safeWord}', 1.0)">🔊 Normal</button>
        <button class="btn-audio" onclick="speakText('${safeWord}', 0.65)">🐢 Lento</button>
        ${realAudioUrl ? `<button class="btn-audio" onclick="playNativeAudio('${realAudioUrl}', '${safeWord}')">🎙️ Nativo</button>` : ''}
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
      box: 1,
      nextReview: Date.now()
    });
  });
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

  list.innerHTML = deck.map(item => {
    const safeWord = item.word.replace(/'/g, "\\'");
    return `
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
          <button class="btn-audio" onclick="speakText('${safeWord}')">🔊 Escuchar</button>
          <button class="delete-btn" onclick="removeWord('${safeWord}')">Eliminar</button>
        </div>
      </div>
    `;
  }).join('');
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
  const sorted = [...deck].sort((a, b) => a.box - b.box);
  const target = sorted[0];
  const safeWord = target.word.replace(/'/g, "\\'");

  reviewArena.classList.remove('hidden');
  reviewArena.innerHTML = `
    <p style="color: var(--text-muted); font-size: 0.9rem;">Escucha la pronunciación y lee la pista. Escribe la palabra en inglés:</p>
    <div style="margin: 0.8rem 0;">
      <button class="btn-audio" onclick="speakText('${safeWord}', 1.0)">🔊 Escuchar Palabra</button>
      <button class="btn-audio" onclick="speakText('${safeWord}', 0.6)">🐢 Escuchar Lento</button>
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
  document.getElementById('check-review-btn').onclick = async () => {
    const userAns = document.getElementById('review-answer').value.trim().toLowerCase();
    const feedback = document.getElementById('review-feedback');

    if (userAns === target.word.toLowerCase()) {
      feedback.style.color = 'var(--accent)';
      feedback.textContent = `¡Correcto! "${target.word}" sube de nivel.`;
      await updateWordBox(target.word, Math.min(5, target.box + 1));
      setTimeout(startReviewSession, 1300);
    } else {
      feedback.style.color = 'var(--danger)';
      feedback.textContent = `Incorrecto. La palabra era "${target.word}". Intenta con la siguiente.`;
      await updateWordBox(target.word, 1);
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
