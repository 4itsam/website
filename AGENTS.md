# AGENTS.md — Ali Miri Portfolio Website

## Project Overview
- Static portfolio website for Ali Miri (indie Flutter developer).
- Showcases two Android apps: **Kaghaz** (classroom management) and **Artilo** (art, music, podcasts).
- Bilingual: Farsi (default, RTL) and English (LTR).
- Pure static setup: no build tools, no package manager dependencies, no test runner.

## Core Architecture & Files
- `index.html`: Main HTML structure with `data-i18n` localization attributes.
- `style.css`: Styling using CSS logical properties (`margin-inline`, `padding-block`) for seamless RTL/LTR support.
- `script.js`: Client-side i18n dictionaries (`i18n.fa`, `i18n.en`), language toggle with `localStorage`, and `IntersectionObserver` scroll animations.
- `assets/`:
  - `profile.jpg`: Developer profile photo.
  - `kaghaz-logo.png`, `artilo-logo.png`: App logos.
  - `kaghaz/` & `artilo/`: App screenshots (`1.png`, `2.png`, `3.png`).

## Development & Testing Workflow
- **Run/Test**: Open `index.html` directly in any web browser. No local dev server or build step required.
- **Verification Checklist**:
  - Test both Farsi (RTL) and English (LTR) toggles.
  - Verify all asset paths in `assets/` (ensure exact filename matching, e.g., `.png`).
  - Check responsive layout on mobile viewports.
  - Respect `prefers-reduced-motion` for accessibility (animations disabled).
