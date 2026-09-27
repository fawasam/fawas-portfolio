# Portfolio — "Paper & ink"

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4.
Design source: the eight-artboard canvas in this project's Design artifact.

## Run it

```bash
npm install
npm run dev
```

## Where to edit

| You want to change… | Open |
| --- | --- |
| Any word on the page | `lib/content.ts` |
| Colours, type, shadows, motifs | `app/globals.css` (the `@theme` block) |
| A section's layout | `components/sections/<name>.tsx` |
| Buttons, chips, badges, eyebrows | `components/ui/primitives.tsx` |
| Hand-drawn circles, underlines, arrows | `components/ui/doodles.tsx` |

Everything in `[brackets]` is a placeholder. Search for `[` and you have
your to-do list.

## Design tokens

| Token | Value | Used for |
| --- | --- | --- |
| `--color-ink` | `#111111` | all body text |
| `--color-muted` | `#6b6b6b` | secondary copy |
| `--color-paper` | `#fbfaf7` | dotted ground |
| `--color-mist` | `#fafafa` | cards, form |
| `--color-chip` | `#f0f0f0` | pills, tabs |
| `--color-accent` | `#ff6a3d` | strokes, dots, doodles |
| `--color-accent-ink` | `#cc3d16` | accent **text** (contrast-safe) |
| `--color-highlight` | `#ffe58a` | highlighter pen |
| `--color-night` | `#0a0a0a` | the two dark bands |

Rhythm: `max-w-6xl` (1152px) container, 24px gutter, `py-28 md:py-36`
(112/144px) on every section. Four utilities carry the character:
`paper-dots`, `night-dots`, `highlight`, `link-underline`.

## Photos

Every image is a labelled `PhotoPlaceholder` at the right aspect ratio
(4:5 polaroids, 4:3 collages). Swap each one for `next/image` at the same
ratio and nothing in the layout moves.

## The contact form

`app/api/contact/route.ts` validates input and has a honeypot, but no mail
provider. Set `CONTACT_WEBHOOK_URL` (Slack/Discord) for the quickest path, or
replace `deliver()` with Resend/Postmark/SendGrid. Until then the route answers
`501` and the form says so instead of pretending to send.

## Notes on the build

- The Process section is `300vh` tall with a pinned panel inside; scroll
  position picks the active step.
- `Reveal` uses `IntersectionObserver` and is disabled under
  `prefers-reduced-motion`.
- Only five components are client components: nav, about (tabs), process
  (scroll), fun (fortunes), contact (form). Everything else renders on the server.
