const GITHUB_RAW = 'https://raw.githubusercontent.com/ndlf99/vocab-app/main/data';
const LEVELS = ['beginner', 'intermediate', 'advanced'];

let words = [];
let index = 0;
let level = 'beginner';
let mode = 'browse'; // 'browse' | 'mylists'
let activeFilter = 'star';
const cache = {}; // level -> word array

const $ = id => document.getElementById(id);
const wordEl       = $('word');
const wordLevelEl  = $('wordLevel');
const definitionEl = $('definition');
const etymologyEl  = $('etymology');
const exampleEl    = $('example');
const counterEl    = $('counter');
const extrasEl     = $('extras');
const revealBtn    = $('revealBtn');
const prevBtn      = $('prevBtn');
const nextBtn      = $('nextBtn');
const btnStar      = $('btnStar');
const btnMemorize  = $('btnMemorize');
const btnKnown     = $('btnKnown');
const statsEl      = $('stats');
const listFilters  = $('listFilters');
const emptyState   = $('emptyState');
const card         = document.querySelector('.card');
const nav          = document.querySelector('.nav');

function storageKey(lvl, term, status) {
  return `vocab:${lvl}:${term}:${status}`;
}

function getStatus(lvl, term, status) {
  return localStorage.getItem(storageKey(lvl, term, status)) === '1';
}

function toggleStatus(lvl, term, status) {
  const key = storageKey(lvl, term, status);
  if (localStorage.getItem(key) === '1') localStorage.removeItem(key);
  else localStorage.setItem(key, '1');
}

function render() {
  const hasWords = words.length > 0;
  card.classList.toggle('hidden', !hasWords);
  emptyState.classList.toggle('hidden', hasWords);
  nav.classList.toggle('hidden', !hasWords);
  if (!hasWords) return;

  const word = words[index];
  const lvl = word._level || level;

  wordEl.textContent = word.term;
  definitionEl.textContent = word.definition;
  etymologyEl.textContent = word.etymology || '';
  exampleEl.textContent = word.example ? `"${word.example}"` : '';
  counterEl.textContent = `${index + 1} / ${words.length}`;

  // Show level badge only in My Lists mode
  if (mode === 'mylists') {
    wordLevelEl.textContent = lvl.charAt(0).toUpperCase() + lvl.slice(1);
    wordLevelEl.classList.remove('hidden');
  } else {
    wordLevelEl.classList.add('hidden');
  }

  extrasEl.classList.add('hidden');
  revealBtn.textContent = 'Show etymology & example';

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === words.length - 1;

  const starred  = getStatus(lvl, word.term, 'star');
  const memorize = getStatus(lvl, word.term, 'memorize');
  const known    = getStatus(lvl, word.term, 'known');

  btnStar.classList.toggle('active', starred);
  btnStar.querySelector('.icon').textContent = starred ? '★' : '☆';
  btnMemorize.classList.toggle('active', memorize);
  btnKnown.classList.toggle('active', known);

  renderStats();
}

function renderStats() {
  if (mode === 'mylists') { statsEl.innerHTML = ''; return; }

  let stars = 0, memorizes = 0, knowns = 0;
  words.forEach(w => {
    if (getStatus(level, w.term, 'star'))     stars++;
    if (getStatus(level, w.term, 'memorize')) memorizes++;
    if (getStatus(level, w.term, 'known'))    knowns++;
  });

  statsEl.innerHTML = [
    stars     ? `<span class="stat-item"><span class="stat-dot star"></span>${stars} starred</span>` : '',
    memorizes ? `<span class="stat-item"><span class="stat-dot memorize"></span>${memorizes} to memorize</span>` : '',
    knowns    ? `<span class="stat-item"><span class="stat-dot known"></span>${knowns} known</span>` : '',
  ].filter(Boolean).join('');
}

async function fetchLevel(lvl) {
  if (cache[lvl]) return cache[lvl];
  const res = await fetch(`${GITHUB_RAW}/words-${lvl}.json`);
  cache[lvl] = await res.json();
  return cache[lvl];
}

async function loadWords(lvl) {
  level = lvl;
  mode = 'browse';
  index = 0;
  listFilters.classList.add('hidden');
  wordEl.textContent = 'Loading...';
  words = await fetchLevel(lvl);
  render();
}

async function loadMyLists(filter) {
  activeFilter = filter;
  mode = 'mylists';
  index = 0;
  wordEl.textContent = 'Loading...';

  // Fetch all levels (uses cache after first load)
  await Promise.all(LEVELS.map(fetchLevel));

  // Gather all words tagged with this filter across all levels
  words = [];
  LEVELS.forEach(lvl => {
    cache[lvl].forEach(w => {
      if (getStatus(lvl, w.term, filter)) {
        words.push({ ...w, _level: lvl });
      }
    });
  });

  render();
}

// Nav
revealBtn.addEventListener('click', () => {
  const hidden = extrasEl.classList.toggle('hidden');
  revealBtn.textContent = hidden ? 'Show etymology & example' : 'Hide';
});

prevBtn.addEventListener('click', () => { if (index > 0) { index--; render(); } });
nextBtn.addEventListener('click', () => { if (index < words.length - 1) { index++; render(); } });

// Status buttons
btnStar.addEventListener('click', () => {
  const w = words[index];
  toggleStatus(w._level || level, w.term, 'star');
  if (mode === 'mylists') { words.splice(index, 1); if (index >= words.length) index = Math.max(0, words.length - 1); }
  render();
});

btnMemorize.addEventListener('click', () => {
  const w = words[index];
  toggleStatus(w._level || level, w.term, 'memorize');
  if (mode === 'mylists') { words.splice(index, 1); if (index >= words.length) index = Math.max(0, words.length - 1); }
  render();
});

btnKnown.addEventListener('click', () => {
  const w = words[index];
  toggleStatus(w._level || level, w.term, 'known');
  if (mode === 'mylists') { words.splice(index, 1); if (index >= words.length) index = Math.max(0, words.length - 1); }
  render();
});

// Difficulty tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    if (tab.dataset.level === 'mylists') {
      listFilters.classList.remove('hidden');
      loadMyLists(activeFilter);
    } else {
      loadWords(tab.dataset.level);
    }
  });
});

// List filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadMyLists(btn.dataset.filter);
  });
});

loadWords('beginner');
