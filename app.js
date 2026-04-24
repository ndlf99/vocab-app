let words = [];
let index = 0;
let level = 'beginner';

const $ = id => document.getElementById(id);
const wordEl      = $('word');
const definitionEl = $('definition');
const etymologyEl  = $('etymology');
const exampleEl   = $('example');
const counterEl   = $('counter');
const extrasEl    = $('extras');
const revealBtn   = $('revealBtn');
const prevBtn     = $('prevBtn');
const nextBtn     = $('nextBtn');
const btnStar     = $('btnStar');
const btnMemorize = $('btnMemorize');
const btnKnown    = $('btnKnown');
const statsEl     = $('stats');

function storageKey(term, status) {
  return `vocab:${level}:${term}:${status}`;
}

function getStatus(term, status) {
  return localStorage.getItem(storageKey(term, status)) === '1';
}

function toggleStatus(term, status) {
  const key = storageKey(term, status);
  const current = localStorage.getItem(key) === '1';
  if (current) localStorage.removeItem(key);
  else localStorage.setItem(key, '1');
}

function render() {
  if (!words.length) return;
  const word = words[index];

  wordEl.textContent = word.term;
  definitionEl.textContent = word.definition;
  etymologyEl.textContent = word.etymology || '';
  exampleEl.textContent = word.example ? `"${word.example}"` : '';
  counterEl.textContent = `${index + 1} / ${words.length}`;

  extrasEl.classList.add('hidden');
  revealBtn.textContent = 'Show etymology & example';

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === words.length - 1;

  const starred   = getStatus(word.term, 'star');
  const memorize  = getStatus(word.term, 'memorize');
  const known     = getStatus(word.term, 'known');

  btnStar.classList.toggle('active', starred);
  btnStar.querySelector('.icon').textContent = starred ? '★' : '☆';
  btnMemorize.classList.toggle('active', memorize);
  btnKnown.classList.toggle('active', known);

  renderStats();
}

function renderStats() {
  let stars = 0, memorizes = 0, knowns = 0;
  words.forEach(w => {
    if (getStatus(w.term, 'star'))     stars++;
    if (getStatus(w.term, 'memorize')) memorizes++;
    if (getStatus(w.term, 'known'))    knowns++;
  });

  statsEl.innerHTML = [
    stars     ? `<span class="stat-item"><span class="stat-dot star"></span>${stars} starred</span>` : '',
    memorizes ? `<span class="stat-item"><span class="stat-dot memorize"></span>${memorizes} to memorize</span>` : '',
    knowns    ? `<span class="stat-item"><span class="stat-dot known"></span>${knowns} known</span>` : '',
  ].filter(Boolean).join('');
}

function loadWords(lvl) {
  level = lvl;
  index = 0;
  words = WORDS[lvl];
  render();
}

revealBtn.addEventListener('click', () => {
  const hidden = extrasEl.classList.toggle('hidden');
  revealBtn.textContent = hidden ? 'Show etymology & example' : 'Hide';
});

prevBtn.addEventListener('click', () => {
  if (index > 0) { index--; render(); }
});

nextBtn.addEventListener('click', () => {
  if (index < words.length - 1) { index++; render(); }
});

btnStar.addEventListener('click', () => {
  toggleStatus(words[index].term, 'star');
  render();
});

btnMemorize.addEventListener('click', () => {
  toggleStatus(words[index].term, 'memorize');
  render();
});

btnKnown.addEventListener('click', () => {
  toggleStatus(words[index].term, 'known');
  render();
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    loadWords(tab.dataset.level);
  });
});

loadWords('beginner');
