# UI Components

## Purpose
- Shared primitive components used across all routes
- Single source of truth for consistent interaction/styling patterns

## Core Files
components/ui/button.tsx
→ primary button primitive + variants/sizes

components/ui/card.tsx
→ container framing used for page sections and panels

components/ui/dialog.tsx
→ modal/dialog primitives (used by concierge modal)

components/ui/sheet.tsx
→ drawer/sheet primitives (used by mobile nav)

components/ui/input.tsx
→ input primitive (sign-in/otp/schedule/concierge forms)

components/ui/badge.tsx
→ small status labels (verified markers, etc.)

## Related Files
lib/utils.ts
→ `cn()` used by UI primitives for className merging

app/globals.css
→ theme tokens referenced by Tailwind classes used in primitives

## Flow Summary
- Route pages import primitives from `components/ui/*`
- Primitives compose Tailwind classes + shared tokens for consistent look/feel

## Common Tasks
Change a button size/variant used site-wide
→ components/ui/button.tsx

Fix dialog layering/scroll behavior
→ components/ui/dialog.tsx, components/ui/sheet.tsx

Align input visuals across forms
→ components/ui/input.tsx

## Constraints
- Keep primitives generic; feature-specific UI belongs in `src/*` or `components/*`
- Changes have broad blast radius across most pages

## Avoid Touching Unless Necessary
Feature page composition
→ app/**/page.tsx

