# Module Routing
Frontend
→ docs/modules/frontend.md

UI Components
→ docs/modules/ui.md

Data (Static)
→ docs/modules/data.md

Authentication
→ docs/modules/auth.md

Properties
→ docs/modules/properties.md

Neighbourhood
→ docs/modules/neighbourhood.md

Concierge
→ docs/modules/concierge.md

Schedule
→ docs/modules/schedule.md

Saved
→ docs/modules/saved.md

Profile
→ docs/modules/profile.md

Socket
→ docs/modules/socket.md

Payments
→ docs/modules/payments.md

# Task Routing
Change global nav/footer
→ src/Homepage/Navbar.tsx
→ src/Homepage/Footer.tsx
→ app/layout.tsx

Adjust theme tokens / radii
→ app/globals.css

Modify sign-in (phone/OTP) screens
→ app/sign-in/page.tsx
→ app/otp/page.tsx

Change homepage property list / nav items
→ src/Homepage/data.ts

Fix property detail route behavior
→ app/properties/[slug]/page.tsx
→ src/ProductDetail/index.ts
→ src/ProductDetail/data.ts

Update concierge modal fields / behavior
→ components/concierge/SpeakWithConciergeModal.tsx

Update neighbourhood page content
→ src/Neighbourhood/data.ts
→ app/neighbourhoods/page.tsx

Update neighbourhood detail page content
→ src/Neighbourhood/data.ts
→ app/neighbourhoods/[slug]/page.tsx

Update concierge page content
→ src/Concierge/data.ts
→ app/concierge/page.tsx

Update schedule presets (calendar/slots)
→ src/Schedule/data.ts
→ app/schedule/page.tsx

Update saved page content
→ src/Saved/data.ts
→ app/saved/page.tsx

Update profile page content/preferences
→ src/Profile/data.ts
→ app/profile/page.tsx

Change shared UI primitives
→ components/ui/*

Fix className merge issues
→ lib/utils.ts

# Important Root Files
README.md
→ project overview / local run notes

package.json
→ scripts + dependencies

next.config.ts
→ Next.js configuration

tsconfig.json
→ TypeScript configuration

eslint.config.mjs
→ lint rules

postcss.config.mjs
→ PostCSS/Tailwind pipeline

components.json
→ shadcn/ui ccgonfig

# Ignore Areas
- node_modules
- .next
