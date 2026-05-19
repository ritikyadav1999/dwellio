# Profile

## Purpose
- Profile dashboard UI (`/profile`)
- Preference surfaces (lifestyle, discovery filters, touring preferences) using static data

## Core Files
app/profile/page.tsx
→ profile route page composition (sections + right-rail cards)

src/Profile/data.ts
→ `profileData` + preference option datasets (lifestyle, discovery, touring)

src/Profile/index.ts
→ exports profile datasets

## Related Files
components/ui/*
→ cards/buttons/badges used heavily in profile layout

app/saved/page.tsx
→ “saved homes” UX adjacency; profile links to saved

## Flow Summary
- `/profile` renders hero + multiple sections from `src/Profile/*` data
- Right rail shows verification/concierge/settings cards (UI-only)
- “Saved homes” action routes to `/saved`

## Common Tasks
Update profile hero content (name/avatar/summary)
→ src/Profile/data.ts

Adjust preference chip defaults
→ src/Profile/data.ts, app/profile/page.tsx

Add a new profile section
→ app/profile/page.tsx, src/Profile/index.ts

## Constraints
- No authenticated user state; everything is static/demo content
- Sliders/segmented controls are visual (no real state management)

## Avoid Touching Unless Necessary
Property detail route
→ app/properties/[slug]/page.tsx, src/ProductDetail/*

