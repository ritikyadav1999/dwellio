# Data (Static)

## Purpose
- Central place for static/demo content backing pages
- Keep UI components mostly presentational (data imported from `src/*/data.ts`)

## Core Files
src/Homepage/data.ts
→ navigation items + featured property list + footer groups

src/ProductDetail/data.ts
→ property detail dataset (gallery/transparency/host/similar)

src/Concierge/data.ts
→ concierge page content (hero/steps/services/lifestyles)

src/Schedule/data.ts
→ schedule presets (calendar days, timeslots, property card)

src/Saved/data.ts
→ saved page content model

src/Profile/data.ts
→ profile page content model + preference options

## Related Files
app/**/page.tsx
→ route pages that render these datasets

src/*/index.ts
→ module export surfaces for page imports

## Flow Summary
- Pages import module exports from `src/*/index.ts`
- `index.ts` re-exports data/constants/types from `data.ts`
- UI renders these objects directly (no fetching)

## Common Tasks
Add a field to a data model
→ src/*/data.ts, plus any consuming page/component

Swap demo images/copy for new content
→ src/*/data.ts

Change what’s exported from a module
→ src/*/index.ts

## Constraints
- No runtime persistence; data changes require a rebuild/redeploy
- Keep IDs stable (used for routing, lists, and keys)

## Avoid Touching Unless Necessary
UI primitives
→ components/ui/*

