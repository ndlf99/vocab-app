# Vocab App

A personal vocabulary app for discovering and memorizing uncommon words.

## Live App

**[https://ndlf99.github.io/vocab-app/](https://ndlf99.github.io/vocab-app/)**

Open in any browser — no installation required.

---

## What It Does

- Browse 300 curated words across three difficulty levels: Beginner, Intermediate, and Advanced
- Read the definition, etymology, and an example sentence for each word
- Mark words as **Starred** (words you like), **Memorize** (words you want to learn), or **Known** (words you already know)
- View your tagged words in **My Lists**, filtered by category, with a badge showing which level each word came from
- Navigate freely forward and back through any list

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
- The overall card-based UI and navigation pattern

### What Changes
- GitHub fetch → word data bundled directly in the app
- localStorage → SwiftData for persistent on-device storage
- Web app → SwiftUI with WidgetKit for the lock screen widget

---

## Returning to This Project

When picking this back up:

1. The live app is always at `https://ndlf99.github.io/vocab-app/`
2. Edit word lists directly on GitHub — changes go live on next page load
3. For UI or feature changes, open this folder in Claude Code and continue from here
4. Next major milestone: set up Xcode, create the iOS project, port the UI to SwiftUI
