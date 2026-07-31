# AGENTS.md — Ali Miri Portfolio Website (Dakto)

## Project Overview
- Static portfolio for Ali Miri (Dakto Studio, Flutter/Android dev). Site: dakto.ir.
- 5 plain HTML pages: `index.html` + 4 app pages (`kaghaz.html`, `artilo.html`, `danak.html`, `shakhes.html`). All share ONE `style.css` and ONE `script.js`.
- Bilingual: Farsi (default, RTL) / English (LTR). No build tools, frameworks, or package.json — open the HTML directly in a browser to test.

## i18n — the biggest gotcha
- Every visible text node has a `data-i18n` key resolved from the `i18n.fa` / `i18n.en` objects in `script.js`. `setLanguage()` runs on page load (localStorage key `app_lang`, default `fa`), so the dict value **wins over** the HTML text; HTML text is only a no-JS fallback.
- Adding any new text element requires adding the key to **both** dicts. Missing keys fail silently — the HTML (Farsi) text stays, even in English mode. (Former bug: footer app links `nav.kaghaz`/`nav.artilo`/`nav.danak`/`nav.shakhes` were missing from both dicts — now fixed.)
- App detail pages use `<app>Page.*` prefixes (`kaghazPage.title`, `artiloPage.spec1Desc`, …). FAQ text on `kaghaz.html` and the "گالری تصاویر"/FAQ headings are **not** i18n'd — Farsi-only by design.
- Language priority on load: `?lang=` URL param (matches hreflang links) → `localStorage["app_lang"]` → `fa`. The toggle persists via localStorage.

## Layout & RTL/LTR rules
- JS toggles `dir` on `<html>` (rtl/ltr). New layout code MUST use CSS logical properties (`margin-inline`, `inset-inline-start`, `padding-block`) — never `left`/`right` — or the other language direction breaks.
- Fonts via Google Fonts CDN: Vazirmatn (fa), Space Grotesk/Inter (en). Needs network; no local font fallback beyond generic system fonts.
- Design tokens in `:root` of `style.css` (`--max-w: 1140px`, `--gutter`, `--section-gap`, `--bg-card`, `--accent-indigo`). Reuse them; don't hardcode colors/radii.

## Existing responsive behavior (breakpoints in style.css)
- `960px`: hero grid → 1 column, hero visual becomes 2-col (preview-card `rotate` offsets only apply ≥961px).
- `820px`: `.nav-menu` becomes an animated fixed dropdown drawer (fade+slide); `.mobile-toggle` toggles `.nav-menu.open`. The drawer closes on outside click, `Esc`, link click, and resizing above 820px, and locks body scroll (`.nav-locked`).
- `768px`: about-box and footer-grid stack. `600px`: hero-visual → 1 col, hero-stats collapse, smaller type. `480px`: buttons go full-width (hero-actions, card-actions, contact-btn-item), footer-grid → 1 col.
- Font sizes mostly use `clamp()`. Keep the mobile-first pattern: base styles + `@media` overrides.

## JS behaviors (script.js)
- Scroll reveal: an IntersectionObserver adds `.reveal-on-scroll` then `.visible`. Only elements listed in the observer selector list (script.js:348: `.preview-card`, `.app-card-featured`, `.spec-card`, `.timeline-card-item`, `.skill-category-card`) are animated. New animated component classes must be added to that list. `prefers-reduced-motion: reduce` disables all animations/transitions (style.css reduced-motion block).
- Lightbox: clicking any `.screenshot-item img` opens a modal created dynamically in JS.
- Topbar gets `.scrolled` (shadow) when `scrollY > 10`.

## Assets & file conventions
- `assets/<app>-logo.png` for logos; screenshots at `assets/<app>/1.png|2.png|3.png` (rendered at 9/16 aspect-ratio).
- Index/app pages carry full SEO head (canonical, hreflang, OG, Twitter, JSON-LD). New pages should mirror it; assets referenced must exist.
- Most inline `style="..."` was moved to classes, but some remain (contact section eyebrow/desc, app-page gallery wrapper, FAQ headings). Check the HTML before moving styles. App card accents: `card-kaghaz` / `card-artilo` classes; header buttons use `.card-actions`.
- `manifest.json` PWA icons point at `assets/kaghaz-logo.png`. `.gitignore` ignores `*.md`/`*.json` but `AGENTS.md`/`manifest.json` are force-tracked (already committed). `.mimocode/` is agent tooling — never touch.

## Verification checklist
1. Toggle فا/EN — check both dirs, and that no element keeps Farsi text in English mode (esp. footer).
2. Test 375px (mobile), 768px (tablet), ≥1140px (desktop) — no horizontal scroll (`body { overflow-x: hidden }` masks issues, so check child widths too).
3. Reduced motion (`prefers-reduced-motion: reduce`) disables reveal animations.
4. Click a screenshot → lightbox opens/closes.
5. `?lang=en` in URL sets English; drawer closes on outside click/Esc.
6. Apply changes to all 5 HTML pages when editing shared markup (nav, footer).
