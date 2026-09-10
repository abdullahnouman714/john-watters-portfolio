# John Watters — Career Guidance Website (React + Tailwind + Vite)

## Stack
React 18 · Tailwind CSS · Vite

## Run locally
```bash
npm install
npm run dev
```
Opens at `http://localhost:5173`.

## Project structure
```
src/
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Shows.jsx
    ForWho.jsx
    Topics.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
tailwind.config.js   ← design tokens (colors, fonts) live here
```

## Placeholders to replace
- Photo slot in `About.jsx` — swap for a real photo of John.
- Show artwork placeholders in `Shows.jsx` (`shows` array) — add real thumbnails.
- `Contact.jsx` only shows a confirmation message locally — no backend yet. Wire `handleSubmit` up to Formspree, Resend, or your own API route before relying on it.

## Deploy to Vercel
### Option A — CLI (fastest)
```bash
npm i -g vercel
vercel
```
Vercel auto-detects Vite. Follow the prompts and it gives you a shareable `.vercel.app` link.

### Option B — Dashboard
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com → **Add New → Project** → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command: `npm run build`. Output dir: `dist`.
4. Click **Deploy**.
