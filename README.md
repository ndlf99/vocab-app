# Vocab App

A personal vocabulary app for discovering and memorizing uncommon words.

## Live App

**[https://ndlf99.github.io/vocab-app/](https://ndlf99.github.io/vocab-app/)**

Open in any browser — no installation required. GitHub Pages serves from `main`.

---

## Branches

| Branch | Status | Description |
|---|---|---|
| `main` | Live on GitHub Pages | Stable web app with tab navigation and My Lists |
| `iphone-redesign` | In progress | iPhone-style UX — single card home screen, swipe nav, auto-cycle, settings sheet |

---

## What It Does (main branch)

- Browse 300 curated words across three difficulty levels: Beginner, Intermediate, and Advanced
- Read the definition, etymology, and an example sentence for each word
- Mark words as **Starred** (words you like), **Memorize** (words you want to learn), or **Known** (words you already know)
- View your tagged words in **My Lists** — a scrollable list of all tagged words; tap any word to open its card, then swipe or use prev/next to navigate, or return to the full list
- Navigate freely forward and back through any list

---

## What's in `iphone-redesign`

A ground-up UX rethink to make the web app feel like the iOS app it's becoming. Key changes from `main`:

- **Home screen** — just a single word card, no tabs, no clutter
- **Swipe navigation** — swipe left/right (or drag with mouse) to move between words; keyboard arrow keys also work
- **Auto-cycling** — words advance automatically on a configurable timer; a small pulsing green dot in the counter shows when it's active
- **Settings** (⚙ button, top right) — opens a bottom sheet with:
  - **Home word list** — choose Beginner, Intermediate, Advanced, Starred, Memorize, or Known as the source for the home card
  - **Auto-cycle speed** — custom time picker with separate fields for days / hours / minutes / seconds (each 0–59), plus an Off button. Default is 10 seconds.
- Settings persist in localStorage across sessions
- The star / memorize / known tagging buttons remain on the card

### To preview `iphone-redesign`
Either point GitHub Pages at the branch (repo Settings → Pages → Branch), or open `index.html` locally in a browser — the word data still fetches from GitHub raw URLs.

### Next step on this branch
Port the UI to a native iOS app in SwiftUI (set up Xcode project, recreate card view, wire up SwiftData for storage).

---

## How It's Built

| Layer | Technology |
|---|---|
| Frontend | Plain HTML, CSS, JavaScript — no framework, no build step |
| Word data | JSON files stored in this GitHub repo, fetched at load time |
| User data | Browser localStorage (persists across sessions in the same browser) |
| Hosting | GitHub Pages, served from the `main` branch |

The word lists live in `data/` as JSON files. Each entry has a term, definition, etymology, and example sentence. Because the app fetches them from GitHub at load time, you can edit them directly on GitHub and the changes appear the next time the app loads — no deployment step needed.

---

## Word Lists

| File | Level | Words |
|---|---|---|
| `data/words-beginner.json` | Beginner | 100 |
| `data/words-intermediate.json` | Intermediate | 100 |
| `data/words-advanced.json` | Advanced | 100 |

To add or edit words, open any of these files on GitHub and edit directly. Each entry follows this format:

```json
{
  "term": "Ephemeral",
  "definition": "Lasting for a very short time.",
  "example": "The ephemeral beauty of cherry blossoms makes them all the more precious.",
  "etymology": "Greek ephemeros — lasting only a day"
}
```

---

## Project Structure

```
vocab-app/
├── index.html        # App shell and layout
├── style.css         # All styles
├── app.js            # App logic, state, and GitHub fetch
└── data/
    ├── words-beginner.json
    ├── words-intermediate.json
    └── words-advanced.json
```

---

## End Goal — iOS App

The web app is Phase 1. The long-term goal is a native iOS app built with SwiftUI that includes:

- All the same core features (browse, star, memorize, known)
- **Lock screen widget** showing a word to memorize whenever you glance at your phone
- **Spaced repetition** — words marked as Memorize surface more frequently over time until mastered
- Local storage via SwiftData (replacing localStorage and GitHub fetch)
- Word lists bundled with the app, editable via future update

### What Carries Over to iOS
- The three-tier difficulty structure and word data (JSON → bundled in the app)
- The star / memorize / known status model
- The card-based UI and swipe navigation pattern (already built in `iphone-redesign`)
- The settings model (home list selection, cycle speed → maps to widget refresh interval)

### What Changes
- GitHub fetch → word data bundled directly in the app
- localStorage → SwiftData for persistent on-device storage
- Web app → SwiftUI with WidgetKit for the lock screen widget

---

## Returning to This Project

When picking this back up:

1. The live app (main) is always at `https://ndlf99.github.io/vocab-app/`
2. The iPhone-style redesign is on the `iphone-redesign` branch — open this folder in Claude Code and `git checkout iphone-redesign` to continue
3. Edit word lists directly on GitHub — changes go live on next page load
4. Next major milestone: set up Xcode, create the iOS project, port the `iphone-redesign` UI to SwiftUI
