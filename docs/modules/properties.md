# Properties

## Purpose
- Property browsing entrypoint (`/home`) and property detail route (`/properties/[slug]`)
- Static/demo data-backed property gallery + “similar homes” recommendations

## Core Files
app/home/page.tsx
→ “Verified Homes” list + filters entry page

app/properties/[slug]/page.tsx
→ property detail page (gallery, transparency cards, host panel, similar homes)

src/Homepage/PropertyCard.tsx
→ reusable property card used across lists and recommendations

src/ProductDetail/index.ts
→ property detail selectors (`getPropertyDetail`, `getSimilarHomes`)

src/ProductDetail/data.ts
→ static property detail dataset

## Related Files
src/Homepage/HomeFilters.tsx
→ filtering UI over `featuredProperties`

src/Homepage/data.ts
→ `featuredProperties` list backing `/home` and static params

components/concierge/SpeakWithConciergeModal.tsx
→ “Speak with a Concierge” CTA in property detail

app/schedule/page.tsx
→ schedule CTA destination from property detail

## Flow Summary
- `/home` renders filters + property cards based on `featuredProperties`
- `/properties/[slug]` validates slug against `featuredProperties`
- Detail page pulls `detail` + `similarHomes` from `src/ProductDetail/*`
- CTAs route to `/schedule` and open concierge modal

## Common Tasks
Add/remove properties in lists
→ src/Homepage/data.ts

Change property detail content/layout
→ app/properties/[slug]/page.tsx, src/ProductDetail/data.ts

Fix “similar homes” logic
→ src/ProductDetail/index.ts

## Constraints
- Property data is static (no API fetching, no persistence)
- `generateStaticParams()` is derived from `featuredProperties`

## Avoid Touching Unless Necessary
Profile/saved/schedule flows
→ src/Profile/*, src/Saved/*, src/Schedule/*

