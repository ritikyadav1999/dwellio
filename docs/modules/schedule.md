# Schedule

## Purpose
- “Schedule a private visit” flow UI (`/schedule`)
- Date/time selection + visitor info + preference capture (static/demo)

## Core Files
app/schedule/page.tsx
→ schedule page composition + picker/form UI

src/Schedule/data.ts
→ `calendarDays`, `timeSlots`, `scheduleProperty`, and option lists

src/Schedule/index.ts
→ exports schedule data for the route page

## Related Files
app/properties/[slug]/page.tsx
→ links to `/schedule` from property detail CTA

src/Profile/data.ts
→ overlap in “availability/tour preference” concepts (separate data models)

## Flow Summary
- `/schedule` renders schedule picker + visitor form + lifestyle focus chips
- All options come from `src/Schedule/data.ts` (no state persistence)
- “Confirm Visit” is UI-only (no submission wired)

## Common Tasks
Update calendar/time slot presets
→ src/Schedule/data.ts

Wire confirm action to a real API
→ app/schedule/page.tsx, (new) app/api/visits/route.ts

Change the scheduled property preview card
→ src/Schedule/data.ts, app/schedule/page.tsx

## Constraints
- No real calendar logic; selection is cosmetic/static
- Inputs are uncontrolled; there is no validation or backend submission

## Avoid Touching Unless Necessary
Landing/homepage content
→ app/page.tsx, src/Homepage/*

