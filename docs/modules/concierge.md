# Concierge

## Purpose
- Concierge marketing page (`/concierge`)
- Cross-app “Speak with a Concierge” dialog + inquiry form (UI-only)

## Core Files
app/concierge/page.tsx
→ concierge landing page composed from `conciergePageData`

components/concierge/SpeakWithConciergeModal.tsx
→ dialog + lifestyle chips + inquiry form POST

src/Concierge/data.ts
→ concierge page content model (hero, steps, services, lifestyles)

src/Concierge/index.ts
→ exports concierge page data

## Related Files
app/properties/[slug]/page.tsx
→ opens concierge modal from property detail

app/saved/page.tsx
→ concierge-themed CTA section (separate from modal)

## Flow Summary
- `/concierge` renders hero + steps + services from `src/Concierge/*`
- “Speak with a Concierge” opens modal
- Modal collects contact fields + lifestyle selections
- Form submits to `/api/concierge-inquiries` (endpoint not implemented here)

## Common Tasks
Change concierge page content (copy/images/steps)
→ src/Concierge/data.ts, app/concierge/page.tsx

Adjust fields submitted by concierge form
→ components/concierge/SpeakWithConciergeModal.tsx

Wire a real endpoint for inquiries
→ (new) app/api/concierge-inquiries/route.ts

## Constraints
- Modal is client-only (`"use client"`) and owns its internal selection state
- `/api/concierge-inquiries` is referenced but not present in this repo

## Avoid Touching Unless Necessary
Shared UI primitives
→ components/ui/*

