# Neighbourhood

## Purpose
- Neighbourhood discovery listing page (`/neighbourhoods`)
- Individual neighbourhood detail pages (`/neighbourhoods/[slug]`)
- Grid of curated Bangalore neighbourhoods with editorial content on the listing page
- Full editorial detail page for each neighbourhood: hero, snapshot data, pros/cons, lifestyle highlights, CTA

## Core Files
app/neighbourhoods/page.tsx
→ neighbourhood discovery listing page: hero + editorial intro + card grid

app/neighbourhoods/[slug]/page.tsx
→ neighbourhood detail page: hero, editorial story, snapshot bento (rent/walkability/commute), pros/cons, lifestyle highlights, CTA

src/Neighbourhood/data.ts
→ neighbourhood content model — extended `NeighbourhoodData` type with:
  - Card data: `name`, `slug`, `description`, `image`, `imageAlt`, `tags`, `featured`
  - Detail page data: `heroBadges`, `editorialTitle`, `editorialParagraphs`, `rentPG`, `rent1BHK`, `walkabilityRating`, `walkabilityDescription`, `commuteRating`, `commuteDescription`, `pros` / `cons`, `idealFor`, `notIdealFor`, `highlights[]`

src/Neighbourhood/index.ts
→ barrel exports: `neighbourhoodData`, `heroImage`, `NeighbourhoodData` type

## Related Files
src/Homepage/NeighbourhoodSection.tsx
→ homepage section that reuses the same neighbourhood card data pattern

src/Homepage/data.ts
→ `homepageNavItems` includes "Neighbourhoods" nav link

## Flow Summary
- `/neighbourhoods` renders hero + editorial intro + 3-column card grid from `src/Neighbourhood/*`
- Each card links to `/neighbourhoods/[slug]` — rendered via `generateStaticParams` from `neighbourhoodData`
- Navbar "Neighbourhoods" link points to `/neighbourhoods`
- Reuses card layout patterns from the homepage `NeighbourhoodSection`
- Detail page uses lucide-react icons mapped from the data's `heroBadges.icon` strings
- Detail page CTA links to `/properties?neighbourhood={slug}`

## Common Tasks
Change neighbourhood listing content (copy/images/neighbourhoods)
→ src/Neighbourhood/data.ts

Change neighbourhood detail content (editorial, highlights, stats)
→ src/Neighbourhood/data.ts

Adjust listing page layout or sections
→ app/neighbourhoods/page.tsx

Adjust detail page layout or sections
→ app/neighbourhoods/[slug]/page.tsx

Add/remove neighbourhoods from navigation
→ src/Homepage/data.ts

Update neighbourhood card component styling
→ app/neighbourhoods/page.tsx (cards are inline)
→ src/Homepage/NeighbourhoodSection.tsx (homepage variant)

## Constraints
- All data is static; no API calls — uses `generateStaticParams` for SSG
- Cards use `aspect-[4/5]` for image ratios
- "Popular" badge uses `bg-tertiary-fixed` / `text-on-tertiary-fixed-variant`
- Detail page sections use 120px (`pb-[120px]`) gap between core sections
- Snapshot bento grid: lg 7/5 split editorial/snapshot, snapshot uses 2-col grid with commute spanning full width
- Icon mapping lives in-page: `ICON_MAP` in `[slug]/page.tsx` — add new keys when adding neighbourhoods with new badge icons
- All `text-on-primary` tokens must use `text-primary-foreground` (project's CSS variable convention)

## Avoid Touching Unless Necessary
Shared UI primitives
→ components/ui/*