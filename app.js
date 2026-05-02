const GITHUB_RAW = 'https://raw.githubusercontent.com/ndlf99/vocab-app/main/data';
const LEVELS = ['beginner', 'intermediate', 'advanced'];

let words = [];
let index = 0;
const cache = {};

const SETTINGS_DEFAULTS = { homeList: 'beginner', cycleSpeed: 10000 };
let settings = loadSettings();
let cycleTimer = null;
let swipeStartX = 0, swipeStartY = 0, isDragging = false;

const $ = id => document.getElementById(id);
const wordEl        = $('word');
const wordLevelEl   = $('wordLevel');
const definitionEl  = $('definition');
const etymologyEl   = $('etymology');
const exampleEl     = $('example');
const counterTextEl = document.querySelector('#counter #counterText');
const cycleDotEl    = $('cycleDot');
const extrasEl      = $('extras');
const revealBtn     = $('revealBtn');
const prevArrow     = $('prevArrow');
const nextArrow     = $('nextArrow');
const btnStar       = $('btnStar');
const btnMemorize   = $('btnMemorize');
const btnKnown      = $('btnKnown');
const emptyState    = $('emptyState');
const card          = document.querySelector('.card');
const profileBtn    = $('profileBtn');
const profileSheet  = $('profileSheet');
const sheetBackdrop = $('sheetBackdrop');
const sheetClose    = $('sheetClose');

// ── Settings ──────────────────────────────────────────────────────────────────

function loadSettings() {
  const stored = localStorage.getItem('vocab:settings:cycleSpeed');
  return {
    homeList:   localStorage.getItem('vocab:settings:homeList') || SETTINGS_DEFAULTS.homeList,
    cycleSpeed: stored !== null ? Number(stored) : SETTINGS_DEFAULTS.cycleSpeed,
  };
}

function saveSettings() {
  localStorage.setItem('vocab:settings:homeList',  settings.homeList);
  localStorage.setItem('vocab:settings:cycleSpeed', settings.cycleSpeed);
}

// ── Storage helpers ────────────────────────────────────────────────────────────

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

// ── Data fetching ──────────────────────────────────────────────────────────────

async function fetchLevel(lvl) {
  if (cache[lvl]) return cache[lvl];
  const res = await fetch(`${GITHUB_RAW}/words-${lvl}.json`);
  cache[lvl] = await res.json();
  return cache[lvl];
}

// ── Load word list ─────────────────────────────────────────────────────────────

async function loadHomeList(listKey) {
  wordEl.textContent = 'Loading…';

  if (['beginner', 'intermediate', 'advanced'].includes(listKey)) {
    const raw = await fetchLevel(listKey);
    words = raw.map(w => ({ ...w, _level: listKey }));
  } else {
    await Promise.all(LEVELS.map(fetchLevel));
    words = [];
    LEVELS.forEach(lvl => {
      cache[lvl].forEach(w => {
        if (getStatus(lvl, w.term, listKey)) {
          words.push({ ...w, _level: lvl });
        }
      });
    });
  }

  index = 0;
  render();
  startCycle();
}

// ── Render ─────────────────────────────────────────────────────────────────────

function render() {
  const hasWords = words.length > 0;
  card.classList.toggle('hidden', !hasWords);
  emptyState.classList.toggle('hidden', hasWords);
  if (!hasWords) return;

  const word = words[index];
  const lvl = word._level;

  wordEl.textContent = word.term;
  definitionEl.textContent = word.definition;
  etymologyEl.textContent = word.etymology || '';
  exampleEl.textContent = word.example ? `"${word.example}"` : '';
  counterTextEl.textContent = `${index + 1} / ${words.length}`;

  wordLevelEl.textContent = lvl.charAt(0).toUpperCase() + lvl.slice(1);
  wordLevelEl.classList.remove('hidden');

  extrasEl.classList.add('hidden');
  revealBtn.textContent = 'Show etymology & example';

  prevArrow.disabled = index === 0;
  nextArrow.disabled = index === words.length - 1;

  cycleDotEl.classList.toggle('hidden', settings.cycleSpeed === 0);

  const starred  = getStatus(lvl, word.term, 'star');
  const memorize = getStatus(lvl, word.term, 'memorize');
  const known    = getStatus(lvl, word.term, 'known');

  btnStar.classList.toggle('active', starred);
  btnStar.querySelector('.icon').textContent = starred ? '★' : '☆';
  btnMemorize.classList.toggle('active', memorize);
  btnKnown.classList.toggle('active', known);
}

// ── Navigation ─────────────────────────────────────────────────────────────────

function navigateTo(newIndex, direction) {
  const outClass = direction === 'left' ? 'slide-out-left' : 'slide-out-right';
  const inClass  = direction === 'left' ? 'slide-in-left'  : 'slide-in-right';

  card.style.transform = '';
  card.classList.add(outClass);

  setTimeout(() => {
    card.classList.remove(outClass);
    index = newIndex;
    render();
    card.classList.add(inClass);
    card.addEventListener('animationend', () => card.classList.remove(inClass), { once: true });
  }, 220);
}

function goNext() {
  const newIndex = index < words.length - 1 ? index + 1 : 0;
  navigateTo(newIndex, 'left');
  resetCycle();
}

function goPrev() {
  if (index === 0) return;
  navigateTo(index - 1, 'right');
  resetCycle();
}

// ── Auto-cycle ─────────────────────────────────────────────────────────────────

function startCycle() {
  clearInterval(cycleTimer);
  cycleTimer = null;
  if (settings.cycleSpeed === 0 || words.length === 0) return;
  cycleTimer = setInterval(goNext, settings.cycleSpeed);
}

function resetCycle() {
  startCycle();
}

// ── Swipe — touch ──────────────────────────────────────────────────────────────

card.addEventListener('touchstart', e => {
  swipeStartX = e.touches[0].clientX;
  swipeStartY = e.touches[0].clientY;
  isDragging = true;
}, { passive: true });

card.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const dx = e.touches[0].clientX - swipeStartX;
  card.style.transform = `translateX(${dx * 0.3}px)`;
}, { passive: true });

card.addEventListener('touchend', e => {
  if (!isDragging) return;
  isDragging = false;
  card.style.transform = '';

  const dx = e.changedTouches[0].clientX - swipeStartX;
  const dy = e.changedTouches[0].clientY - swipeStartY;

  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx < 0) goNext();
    else        goPrev();
  }
});

// ── Swipe — mouse ──────────────────────────────────────────────────────────────

card.addEventListener('mousedown', e => {
  swipeStartX = e.clientX;
  isDragging = true;
  card.classList.add('is-dragging');
});

window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const dx = e.clientX - swipeStartX;
  card.style.transform = `translateX(${dx * 0.25}px)`;
});

window.addEventListener('mouseup', e => {
  if (!isDragging) return;
  isDragging = false;
  card.classList.remove('is-dragging');
  card.style.transform = '';

  const dx = e.clientX - swipeStartX;
  if (Math.abs(dx) > 50) {
    if (dx < 0) goNext();
    else        goPrev();
  }
});

// ── Arrow buttons ──────────────────────────────────────────────────────────────

prevArrow.addEventListener('click', goPrev);
nextArrow.addEventListener('click', goNext);

// ── Reveal button ──────────────────────────────────────────────────────────────

revealBtn.addEventListener('click', () => {
  const hidden = extrasEl.classList.toggle('hidden');
  revealBtn.textContent = hidden ? 'Show etymology & example' : 'Hide';
});

// ── Status buttons ─────────────────────────────────────────────────────────────

btnStar.addEventListener('click', () => {
  const w = words[index];
  toggleStatus(w._level, w.term, 'star');
  render();
});

btnMemorize.addEventListener('click', () => {
  const w = words[index];
  toggleStatus(w._level, w.term, 'memorize');
  render();
});

btnKnown.addEventListener('click', () => {
  const w = words[index];
  toggleStatus(w._level, w.term, 'known');
  render();
});

// ── Profile sheet ──────────────────────────────────────────────────────────────

function openSheet() {
  sheetBackdrop.classList.remove('hidden');
  profileSheet.classList.add('open');
  document.body.style.overflow = 'hidden';
  syncSheetUI();
}

function closeSheet() {
  profileSheet.classList.remove('open');
  sheetBackdrop.classList.add('hidden');
  document.body.style.overflow = '';
}

function speedToFields(ms) {
  let total = Math.floor(ms / 1000);
  const s = total % 60; total = Math.floor(total / 60);
  const m = total % 60; total = Math.floor(total / 60);
  const h = total % 60; total = Math.floor(total / 60);
  const d = Math.min(total, 59);
  return { d, h, m, s };
}

function fieldsToSpeed() {
  const clamp = v => Math.min(59, Math.max(0, parseInt(v) || 0));
  const d = clamp($('speedDays').value);
  const h = clamp($('speedHours').value);
  const m = clamp($('speedMins').value);
  const s = clamp($('speedSecs').value);
  return (d * 86400 + h * 3600 + m * 60 + s) * 1000;
}

function syncSheetUI() {
  document.querySelectorAll('#homeListOptions .sheet-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.list === settings.homeList);
  });
  const { d, h, m, s } = speedToFields(settings.cycleSpeed);
  $('speedDays').value  = d;
  $('speedHours').value = h;
  $('speedMins').value  = m;
  $('speedSecs').value  = s;
  $('cycleOffBtn').classList.toggle('active', settings.cycleSpeed === 0);
}

profileBtn.addEventListener('click', openSheet);
sheetClose.addEventListener('click', closeSheet);
sheetBackdrop.addEventListener('click', closeSheet);

document.querySelectorAll('#homeListOptions .sheet-option').forEach(btn => {
  btn.addEventListener('click', () => {
    settings.homeList = btn.dataset.list;
    saveSettings();
    closeSheet();
    loadHomeList(settings.homeList);
  });
});

['speedDays', 'speedHours', 'speedMins', 'speedSecs'].forEach(id => {
  $(id).addEventListener('input', () => {
    const ms = fieldsToSpeed();
    settings.cycleSpeed = ms;
    saveSettings();
    startCycle();
    cycleDotEl.classList.toggle('hidden', ms === 0);
    $('cycleOffBtn').classList.toggle('active', ms === 0);
  });
});

$('cycleOffBtn').addEventListener('click', () => {
  $('speedDays').value  = 0;
  $('speedHours').value = 0;
  $('speedMins').value  = 0;
  $('speedSecs').value  = 0;
  settings.cycleSpeed = 0;
  saveSettings();
  startCycle();
  cycleDotEl.classList.add('hidden');
  $('cycleOffBtn').classList.add('active');
});

// ── Keyboard ───────────────────────────────────────────────────────────────────

document.addEventListener('keydown', e => {
  if (profileSheet.classList.contains('open')) {
    if (e.key === 'Escape') closeSheet();
    return;
  }
  if (e.key === 'ArrowRight') goNext();
  if (e.key === 'ArrowLeft')  goPrev();
});

// ── Init ───────────────────────────────────────────────────────────────────────

loadHomeList(settings.homeList);
