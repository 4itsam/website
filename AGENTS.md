# AGENTS.md — Ali Miri Portfolio Website

## Project Overview
- Static portfolio website for Ali Miri (indie Flutter developer).
- Showcases Android apps (e.g., Kaghaz, Artilo, Danak, Shakhes).
- Bilingual: Farsi (default, RTL) and English (LTR).
- Architecture: Pure static HTML/CSS/JS. No build tools, package managers, or frameworks.

## Core Architecture
- `index.html`: Main structure with `data-i18n` localization.
- `style.css`: RTL/LTR support using CSS logical properties (`margin-inline`, `padding-block`).
- `script.js`: i18n logic (`i18n.fa`, `i18n.en`), `localStorage` language persistence, and `IntersectionObserver` for animations.
- `assets/`: Contains app logos and subdirectories with screenshots (`1.png`, `2.png`, `3.png`).

## Development & Workflow
- **Run/Test**: Open `index.html` directly in a browser. No server required.
- **Verification Checklist**:
  - Toggle Farsi/English: Validate RTL/LTR layout transitions.
  - Assets: Ensure new screenshot/logo paths match existing naming conventions (e.g., `.png`).
  - Responsiveness: Check mobile viewports.
  - Accessibility: `prefers-reduced-motion` must disable animations.

