# Auth

## Purpose
- Phone-number + OTP sign-in UI flow (demo/mocked)
- Route-to-route handoff via query params (no real verification)

## Core Files
app/sign-in/page.tsx
→ collects phone number and navigates to OTP step

app/otp/page.tsx
→ displays masked phone + collects 4-digit OTP and navigates onward

## Related Files
src/Homepage/Navbar.tsx
→ entry CTA links to `/sign-in`

app/home/page.tsx
→ post-OTP landing route target

## Flow Summary
- `/sign-in` renders phone input
- Submit performs `GET /otp?phone=...`
- `/otp` masks `phone` from `searchParams` and collects 4 digits
- Submit performs `GET /home` (no OTP validation)

## Common Tasks
Change sign-in routing (where submit goes)
→ app/sign-in/page.tsx, app/otp/page.tsx

Add real OTP verification / API call
→ app/otp/page.tsx

Update phone masking behavior
→ app/otp/page.tsx

## Constraints
- No auth provider, sessions, tokens, or server verification in this repo
- Phone/OTP values are not persisted beyond query params / form submission

## Avoid Touching Unless Necessary
Property browsing modules
→ src/Homepage/*, src/ProductDetail/*

