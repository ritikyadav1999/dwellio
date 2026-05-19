# Saved

## Purpose
- “Workspace” / saved homes overview (`/saved`)
- Saved list + upcoming visit summary + preference chips (static/demo)

## Core Files
app/saved/page.tsx
→ saved page layout + section navigation anchors

src/Saved/data.ts
→ `savedPageData` backing the page

src/Saved/index.ts
→ exports saved page data

## Related Files
app/profile/page.tsx
→ links to `/saved` via hero actions

app/home/page.tsx
→ “View All Collections” link target for saved homes browsing

## Flow Summary
- `/saved` renders hero + sticky section nav
- Saved homes and upcoming visit are rendered from `savedPageData`
- Preference chips are cosmetic toggles (no persistence)

## Common Tasks
Change which homes show as saved
→ src/Saved/data.ts

Update “upcoming visit” card content
→ src/Saved/data.ts, app/saved/page.tsx

Adjust sticky nav sections/anchors
→ app/saved/page.tsx

## Constraints
- No storage layer (saved items are not user-specific)
- No message/concierge actions are wired to APIs

## Avoid Touching Unless Necessary
Schedule picker internals
→ app/schedule/page.tsx, src/Schedule/*

