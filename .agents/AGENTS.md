# AGENTS.md — DISHA For India Project Rules

## Project Overview
This is the **DISHA For India Foundation and Educational Trust** website. It is a static multi-page HTML/CSS/JS project with no build tool or framework.

## File Structure
| File | Purpose |
|------|---------|
| `index.html` + `1.css` + `1.js` | Main landing page |
| `2.html` + `2.css` | Token Economy (Tokenomy) page |
| `3.html` + `3.css` + `3.js` | Refer & Earn page |
| `4.html` + `4.css` + `4.js` | Proof of Impact page |
| `5.html` + `5.css` + `5.js` | Active Programs / Volunteer Registration page |
| `shourya.png` | Profile image used in Proof of Impact |
| `PixVerse_V6_Image_Text_360P_Create_a_cinematic.mp4` | Cinematic brand video used in the Impact banner section |

## Design Rules
- **Color palette**: Light, warm tones — white, off-white (`#f8f5f0`), orange/amber (`var(--amber)`), coral, teal, charcoal navy. **No dark purple, pink, or neon colors.**
- **Typography**: Playfair Display (headings) + Inter (body) — loaded from Google Fonts.
- **CSS variables** are defined in `1.css` and reused across all page-specific CSS files. Do not hardcode color hex values; use the CSS variables.
- **No TailwindCSS**. Use vanilla CSS only.
- **No external JS frameworks**. Use vanilla JavaScript only.
- **Animations**: Subtle — scroll-reveal, hover scale/shadow, counter animation. Avoid excessive motion.

## Coding Rules
- Always preserve existing HTML comments (section markers like `<!-- NAVBAR -->`, `<!-- HERO -->`, etc.).
- The Google Apps Script URL in `5.js` (`APPS_SCRIPT_URL`) must remain intact — do not remove or blank it.
- When editing CSS, prefer updating existing rules over adding duplicate selectors.
- The `.section-inner` class has a global `max-width: 1200px`. Override it per-section using a more specific selector (e.g., `.ecosystem-docs .section-inner`) rather than changing the global value.
- Keep content **concise** — avoid long paragraphs in cards or banners. Users prefer short, punchy text.

## Volunteer Form (5.js)
- The form submits to Google Apps Script via `fetch` with `mode: 'no-cors'` and `Content-Type: text/plain`.
- The Apps Script parses `e.postData.contents` directly (JSON.parse) — it does NOT rely on `e.postData.type === 'application/json'`.

## Google Apps Script URL (current active deployment)
```
https://script.google.com/macros/s/AKfycbwTUb2oJKnRJKGAiFoacQTNFcWkFOkQNBA-6dOICZ3iE8N5HFmhMlTAaDHjvt_AqE8wzg/exec
```

## Contact Details
- **Phone**: +91-9888877722
- **Email**: inaggarwal76@gmail.com

## Out of Scope (for now)
- Do **not** start building a separate Teens Helpline / TeenSphere React app unless explicitly asked.
- Do **not** switch to a framework or build tool unless the user explicitly requests it.
