<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stack

- **Next.js 16** (App Router, RSC enabled) — see breaking-changes warning above
- **Tailwind CSS v4** — no `tailwind.config.js`; config lives in `globals.css` via `@theme inline` and `postcss.config.mjs` uses `@tailwindcss/postcss`
- **shadcn/ui v4** (`radix-sera` style, `taupe` base color, RSC: true) — add components via `npx shadcn@latest add <name>`
- **framer-motion** — animations must follow Dwellio motion rules (restrained, cinematic, 200–300ms hovers, no bounce)
- **Radix UI** primitives under `@/components/ui/`

## Commands

```bash
npm run dev      # dev server (localhost:3000)
npm run build    # production build (also type-checks via Next.js)
npm run lint     # eslint only (no standalone typecheck script)
```

No test infrastructure exists yet.

## Path alias

`@/*` → `./*` (project root). Import from `@/components/ui/`, `@/src/<Feature>/`, `@/lib/utils`.

## Architecture

- **`app/`** — Next.js App Router routes: `/`, `/home`, `/sign-in`, `/otp`, `/properties/[slug]`, `/concierge`, `/profile`, `/saved`, `/schedule`
- **`src/<Feature>/`** — domain modules with barrel `index.ts` exports + `data.ts` mock data + component files. Features: Homepage, Concierge, ProductDetail, Profile, Saved, Schedule
- **`components/ui/`** — shadcn/ui primitives (do not edit manually; regenerate via shadcn CLI)
- **`components/concierge/`** — feature-specific components outside `src/`
- **`lib/utils.ts`** — `cn()` (clsx + tailwind-merge)

## Design system (critical constraints)

Full specs in `docs/` (`fundamentals.md`, `design.md`, `motion-system.md`, `ai-rules.md`). Key rules an agent would likely violate:

- **Typography**: Playfair Display (`--font-heading`, `font-heading` class) for headings only; Inter (`--font-sans`) for body/UI. NOT Geist for body text.
- **Colors**: Use semantic tokens (`surface`, `surface-container`, `on-surface`, `primary`, `outline-variant`, etc.) — never raw hex outside `globals.css`.
- **Layout**: `dwellio-container` utility class (1440px max, responsive padding). 8px spacing unit. Section gaps ≥120px. Mobile-first.
- **Label style**: `dwellio-label` utility (12px, semibold, uppercase, tracking 0.08em).
- **Depth**: `dwellio-soft-shadow` for premium cards. No heavy shadows, no SaaS-card elevation.
- **Borders**: `outline-variant/25` or `outline-variant/30` opacity — never full-opacity borders.
- **Radius**: `--radius: 0.625rem` base. Cards use `rounded-xl`. Buttons use `rounded-full`. Never overly rounded.
- **Motion**: Hover 200–300ms, subtle scale/depth. Page transitions: fade only. No bounce, no dramatic cuts.

**Brand rule**: Dwellio is premium hospitality, not a rental marketplace. UI must feel calm, spacious, warm, architectural — never dense, SaaS-like, or marketplace-cluttered.

## Before creating new components

Check existing patterns in `src/<Feature>/` and `components/ui/`. Reuse before creating. Follow spacing rhythm and typography hierarchy per `docs/ai-rules.md`.