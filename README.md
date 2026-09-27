# Portfolio — Next.js + Tailwind

Dark-first personal site. App Router, Tailwind v4, no other runtime dependencies.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit

| What | File |
| --- | --- |
| Name, email, intro, status, timezone | `lib/content.ts` |
| Projects (title, tags, hover caption, preview colour) | `lib/content.ts` → `projects` |
| Toolkit columns, stats, social links | `lib/content.ts` |
| Colours and fonts | `app/globals.css` → `:root` and `@theme inline` |
| Page title and description | `app/layout.tsx` → `metadata` |

Almost all copy lives in `lib/content.ts`, so you rarely need to touch the components.

## Theming

Colour tokens are plain CSS variables on `:root`, re-exported to Tailwind through
`@theme inline`. That means `bg-ink`, `text-dim`, `border-line` and friends all
flip automatically when `data-theme="light"` is set on `<html>`. The toggle in
the header writes the choice to `localStorage`; an inline script in
`app/layout.tsx` reads it before paint so there is no flash.

## Motion

- `components/Hero.tsx` — the one non-interactive moment: headline lines rise
  from behind an overflow mask, staggered 90ms.
- `components/Cursor.tsx` — lerped cursor ring, `mix-blend-difference`, grows
  over any `a` or `button`. Disabled on touch and for reduced motion.
- `components/Work.tsx` — hover rows plus the cursor-following preview panel.
- `lib/useReveal.ts` — IntersectionObserver scroll reveals, fired once per
  element.

Everything is disabled under `prefers-reduced-motion: reduce` via the block at
the bottom of `app/globals.css`.

## Deploy

Push to GitHub and import on Vercel. No environment variables needed.
