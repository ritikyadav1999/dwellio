# Frontend

## Purpose
- Next.js App Router UI for Dwellio pages and flows
- Shared layout, navigation, styling system, and UI primitives

## Core Files
app/layout.tsx
→ global shell (Navbar + Footer) + fonts + metadata

app/globals.css
→ theme tokens + Tailwind layers + shared utility classes

app/page.tsx
→ marketing/landing entry route

components/ui/*
→ reusable UI primitives (Button, Card, Dialog, Sheet, etc.)

lib/utils.ts
→ `cn()` helper for className composition (clsx + tailwind-merge)

next.config.ts
→ Next.js config (routing/build/runtime behaviors)

## Related Files
app/**/page.tsx
→ route pages (feature entrypoints)

src/*
→ feature modules backing pages (data + components)

components/concierge/SpeakWithConciergeModal.tsx
→ shared cross-page modal used by Concierge + Property Detail

## Flow Summary
- `app/layout.tsx` wraps all routes with `<Navbar />` + `<Footer />`
- Route pages in `app/*/page.tsx` compose feature components from `src/*` + `components/ui/*`
- Styling comes from `app/globals.css` + Tailwind utility classes

## Common Tasks
Change global nav/footer
→ src/Homepage/Navbar.tsx, src/Homepage/Footer.tsx, app/layout.tsx

Adjust theme tokens / radii
→ app/globals.css

Add/modify a shared UI primitive
→ components/ui/*

Fix className merge issues
→ lib/utils.ts

## Constraints
- This repo is frontend-only (no real backend/auth/payments integration)
- `app/` route files are server components unless `"use client"` is present

## Avoid Touching Unless Necessary
.next/*
→ build artifacts

node_modules/*
→ installed dependencies

package-lock.json
→ lockfile churn unless changing deps intentionally

