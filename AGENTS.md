# AGENTS.md — Ali Miri Portfolio Website

## Project Overview
- Static portfolio website for Ali Miri, indie Flutter developer
- Showcases two apps: Kaghaz (classroom management) and Artilo (art/music/podcasts)
- Bilingual: Farsi (default, RTL) and English (LTR)
- Pure static: no build tools, no dependencies, no tests

## Critical Issues
- **Image extension mismatch**: HTML originally referenced `.jpg` but actual files are `.png` — now fixed
- Always verify image paths match actual files in `assets/`

## Development Workflow
- Edit files directly: `index.html`, `style.css`, `script.js`
- Test by opening `index.html` in browser
- Check both Farsi and English versions (language toggle in top-right)
- Verify responsive design on mobile viewports

## Design Guidelines
- Current design language: "quiet paper background, ink typography, red pen accent"
- User wants: attractive, beautiful design with smooth animations
- Images are market screenshots — no frames needed, focus on attractive presentation
- Enhance existing animations (scroll reveal, SVG draw) and add micro-interactions
- Maintain bilingual support (RTL/LTR) using CSS logical properties

### Animations
- Hero text: Staggered fade-in-up on page load
- Hero underline: SVG draw animation
- App cards: Hover lift + shadow effect
- Screenshots: Scroll reveal with stagger delay
- Contact links: Hover color change + lift
- Language toggle: Smooth background transition

### File Structure
- `index.html`: Main structure with i18n `data-i18n` attributes
- `style.css`: All styling with CSS logical properties for RTL/LTR
- `script.js`: Language toggle (localStorage) and scroll reveal (IntersectionObserver)
- `assets/`:
  - `profile.jpg`: Profile image
  - `kaghaz-logo.png`, `artilo-logo.png`: App logos (used in app cards)
  - `kaghaz/`: Kaghaz app screenshots (1.png, 2.png, 3.png)
  - `artilo/`: Artilo app screenshots (1.png, 2.png, 3.png)

## Technical Notes
- i18n keys defined in `script.js` under `i18n.fa` and `i18n.en`
- Images have `onerror` fallback that hides broken images
- Fonts loaded from Google Fonts: Vazirmatn (Farsi), Space Grotesk (English display), Inter (English body)
- `prefers-reduced-motion` media query disables all animations for accessibility
- CSS uses logical properties (`margin-inline`, `padding-block`) for RTL/LTR support
- App download links point to Myket store (update URLs when apps are published)
