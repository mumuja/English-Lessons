// --- MUSIC & LYRICS LAB (LRCLIB API + YOUTUBE + FILL-IN-THE-BLANKS) ---
const loadSongBtn = document.getElementById('load-song-btn');
const musicArena = document.getElementById('music-arena');

let currentLyricsLines = [];
let isGapMode = true;

function extractYouTubeId(input) {
  if (!input) return '';
  const clean = input.trim();
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = clean.match(regExp);
  if (match && match[1]) return match[1];
  if (clean.length === 11) return clean;
  return '';
}

async function fetchAndRenderSong(title, artist, ytRaw = '') {
  if (!title.trim()) {
    alert('Escribe el nombre de una canción para buscar su letra.');
    return;
  }

  musicArena.classList.remove('hidden');
  musicArena.innerHTML = `<p>Buscando letra de "<strong>${title}</strong>" en LRCLIB...</p>`;

  try {
    const query = encodeURIComponent(`${title} ${artist}`.trim());
    const res = await fetch(`https://lrclib.net/api/search?q=${query}`);
    if (!res.ok) throw new Error('Error al conectar con LRCLIB');
    const results = await res.json();

    if (!results || results.length === 0) {
      musicArena.innerHTML = `<p style="color: var(--danger);">No encontramos letra para esa canción. Prueba escribiendo el título y artista exactos en inglés.</p>`;
      return;
    }

    const bestMatch = results.find(r => r.plainLyrics) || results[0];
    const rawLyrics = bestMatch.plainLyrics || 'Letra no disponible.';
    currentLyricsLines = rawLyrics
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0)
      .slice(0, 28); // Primeras 28 líneas para una sesión ágil

    const ytId = extractYouTubeId(ytRaw);
    renderMusicWorkspace(bestMatch.trackName, bestMatch.artistName, ytId);
  } catch (err) {
    musicArena.innerHTML = `<p style="color: var(--danger);">Hubo un problema cargando la letra. Intenta de nuevo en unos segundos.</p>`;
  }
}

function renderMusicWorkspace(trackName, artistName, ytId) {
  const ytSearchQuery = encodeURIComponent(`${trackName} ${artistName} lyrics`);

  musicArena.innerHTML = `
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 1.2rem;">
      <div>
        <h2 style="color: var(--primary);">${trackName}</h2>
        <p style="color: var(--text-muted);">${artistName}</p>
      </div>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <button id="toggle-gap-mode" class="btn-secondary">${isGapMode ? '👁️ Ver Letra Completa' : '🧩 Modo Completar Huecos'}</button>
        ${isGapMode ? `<button id="check-lyrics-btn" class="btn-primary">Comprobar Respuestas</button>` : ''}
      </div>
    </div>

    <div class="music-workspace">
      <div>
        ${ytId ? `
          <div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/${ytId}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        ` : `
          <div style="background: var(--bg); padding: 1.2rem; border-radius: 10px; border: 1px solid var(--border); text-align: center;">
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.8rem;">No pegaste un enlace de YouTube, pero puedes abrir la canción directamente o escuchar cada línea con el sintetizador:</p>
            <a href="https://www.youtube.com/results?search_query=${ytSearchQuery}" target="_blank" class="btn-primary" style="display: inline-block; text-decoration: none;">▶️ Buscar en YouTube</a>
          </div>
        `}
        <div style="margin-top: 1rem; background: var(--bg); padding: 0.9rem; border-radius: 10px; border: 1px solid var(--border); font-size: 0.88rem; color: var(--text-muted);">
          💡 <strong>Tip interactivo:</strong> Haz clic en cualquier palabra de la letra para escuchar su pronunciación y buscarla al instante en tu diccionario.
        </div>
        <div id="music-word-inspector" style="margin-top: 1rem;"></div>
      </div>

      <div class="lyrics-container" id="lyrics-box">
        ${buildLyricsHTML()}
      </div>
    </div>
  `;

  document.getElementById('toggle-gap-mode').onclick = () => {
    isGapMode = !isGapMode;
    renderMusicWorkspace(trackName, artistName, ytId);
  };

  if (isGapMode) {
    document.getElementById('check-lyrics-btn').onclick = checkLyricsAnswers;
  }

  // Evento para inspeccionar palabras al hacer clic
  document.querySelectorAll('.clickable-word').forEach(span => {
    span.onclick = () => inspectLyricWord(span.dataset.word);
  });
}

function buildLyricsHTML() {
  return currentLyricsLines.map((line, lineIdx) => {
    const words = line.split(/\s+/);
    // En modo hueco, oculta una palabra de >= 4 letras en líneas pares
    const candidateIdx = isGapMode && lineIdx % 2 === 1
      ? words.findIndex(w => w.replace(/[^a-zA-Z]/g, '').length >= 4)
      : -1;

    const renderedWords = words.map((rawWord, wIdx) => {
      const clean = rawWord.replace(/[^a-zA-Z']/g, '');
      if (wIdx === candidateIdx && clean.length >= 4) {
        return `<input type="text" class="blank-input" data-answer="${clean.toLowerCase()}" placeholder="..." autocomplete="off" />`;
      }
      return `<span class="clickable-word" data-word="${clean}">${rawWord}</span>`;
    }).join(' ');

    const safeLine = line.replace(/'/g, "\\'");
    return `
      <div class="lyric-line">
        <button class="btn-audio" style="padding: 0.15rem 0.45rem; font-size: 0.75rem; margin-right: 0.4rem;" onclick="speakText('${safeLine}', 0.85)">🔊</button>
        ${renderedWords}
      </div>
    `;
  }).join('');
}

function checkLyricsAnswers() {
  const inputs = document.querySelectorAll('.blank-input');
  let correct = 0;
  inputs.forEach(inp => {
    const userVal = inp.value.trim().toLowerCase().replace(/[^a-z']/g, '');
    const expected = inp.dataset.answer;
    if (userVal === expected) {
      inp.classList.remove('bad');
      inp.classList.add('ok');
      correct++;
    } else {
      inp.classList.remove('ok');
      inp.classList.add('bad');
      inp.value = expected;
    }
  });
  alert(`Completaste ${correct} de ${inputs.length} palabras correctamente.`);
}

async function inspectLyricWord(word) {
  if (!word) return;
  speakText(word);
  const inspector = document.getElementById('music-word-inspector');
  inspector.innerHTML = `<div class="card" style="padding: 1rem;"><p>Consultando "<strong>${word}</strong>"...</p></div>`;

  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    const entry = data[0];
    const def = entry.meanings[0]?.definitions[0]?.definition || 'Definición no disponible';
    const phonetic = entry.phonetic || '';

    inspector.innerHTML = `
      <div class="card" style="padding: 1rem; border-color: var(--primary);">
        <h4 style="color: var(--primary);">${entry.word} <small style="color: var(--text-muted);">${phonetic}</small></h4>
        <p style="font-size: 0.88rem; margin: 0.4rem 0;">${def}</p>
        <button id="save-lyric-word" class="btn-save" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;">+ Guardar en Mazo</button>
      </div>
    `;

    document.getElementById('save-lyric-word').onclick = () => {
      addWordToDeck({
        word: entry.word,
        phonetic,
        definition: def,
        example: `Learned from song lyrics.`,
        box: 1,
        nextReview: Date.now()
      });
    };
  } catch {
    inspector.innerHTML = `<div class="card" style="padding: 0.8rem;"><p style="font-size: 0.85rem; color: var(--text-muted);">🔊 Pronunciando "${word}" (sin definición en diccionario).</p></div>`;
  }
}

// Eventos
loadSongBtn.addEventListener('click', () => {
  fetchAndRenderSong(
    document.getElementById('song-title-input').value,
    document.getElementById('song-artist-input').value,
    document.getElementById('yt-url-input').value
  );
});

document.querySelectorAll('.preset-song-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('song-title-input').value = btn.dataset.title;
    document.getElementById('song-artist-input').value = btn.dataset.artist;
    document.getElementById('yt-url-input').value = btn.dataset.yt;
    fetchAndRenderSong(btn.dataset.title, btn.dataset.artist, btn.dataset.yt);
  });
});