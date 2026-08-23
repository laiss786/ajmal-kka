# Ajmal Komalam — personal site

Single-page personal site for Ajmal Komalam, a marketing and sales strategist
working across Dubai, Kochi and Lakshadweep.

Built by [Kaelo Solutions](https://kaelo.solutions).

## Stack

- **Astro 7** — static output, near-zero client JS by default
- **Tailwind CSS 4** — brand tokens defined in `src/styles/global.css`
- **GSAP + ScrollTrigger** — scroll reveals and parallax
- **Fontsource** — Inter and Outfit, self-hosted (no third-party font requests)

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Where things live

| Path | What |
|---|---|
| `src/data/site.ts` | **All content.** Single source of truth |
| `src/styles/global.css` | Brand tokens, type scale, focus styles |
| `src/layouts/Layout.astro` | Meta, SEO, JSON-LD, animation system |
| `src/components/` | Nav, Hero, Stats, Section, ContactForm, Pending |
| `src/pages/` | `index`, `404`, `thanks` |

## Content workflow

Everything the client still owes is a `null` in `src/data/site.ts` marked
`TODO(client)`. The UI renders a visible "pending" chip wherever content is
missing, so gaps show up on the page instead of silently disappearing.

**Do not write placeholder copy that reads as real.** Empty states are
deliberate — a plausible-sounding invented metric is worse than a visible gap.

### Before launch

1. Fill in the `TODO(client)` fields in `src/data/site.ts`
2. Set `site.draft = false` — hides all pending chips and the corner badge
3. Set the real domain in `astro.config.mjs` (`SITE`) **and** `public/robots.txt`
4. Replace the interim portrait in `src/assets/`

## Outstanding

**Domain.** `astro.config.mjs` currently has a placeholder. It drives canonical
URLs, the sitemap and absolute OG image paths — all three break if it's wrong.

**Headshot.** The current portrait is interim. Shot brief: plain mid-grey or
dark background, no cap, collared shirt or jacket in a neutral colour that
won't fight the gold accent, waist-up, a few frames looking at camera. Phone
portrait mode near a window is fine.

**Hosting not decided.** The contact form is wired for **Netlify Forms** —
Netlify parses the built HTML at deploy time, no backend needed. **On Vercel
this form silently no-ops**: it appears to submit and nothing arrives. To move
to Formspree, change `action` in `src/components/ContactForm.astro` and drop the
two `netlify-*` attributes plus the hidden `form-name` input.

## Design system

Palette, type pairings and the full WCAG contrast audit are in
`Ajmal_Brand_System.png` (one level up, not tracked in this repo).

Two rules the audit produced, both enforced in `global.css`:

- **Gold buttons take charcoal labels, never white.** Gold on white is 2.0:1.
- **Never use gold as text on ivory or white** (2.3:1 — fails even the
  large-text threshold). Use Deep Bronze `#8A6620` instead.

All 104 text elements currently pass WCAG AA.

## Accessibility

Skip link, `main` landmark, gold focus rings on both grounds, labelled form
fields, `aria-expanded`/`aria-label` on the mobile nav, and every animation
short-circuits under `prefers-reduced-motion`.

## Notes

Image and OG-card generation uses `@napi-rs/canvas`, not SVG rasterisation —
the librsvg build available here silently ignores `@font-face` entirely, so
every typeface fell back to the system sans. Generator scripts are kept outside
this repo.
