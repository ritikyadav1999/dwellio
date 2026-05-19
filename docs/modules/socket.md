# Socket

## Purpose
- Realtime/websocket layer (not implemented in this repo)

## Core Files
N/A
→ no websocket client/server code found

## Related Files
package.json
→ no websocket dependencies currently declared

## Flow Summary
- N/A (no realtime flow present)

## Common Tasks
Add a websocket client dependency
→ package.json

Create a connection manager
→ (new) src/realtime/socketManager.ts

## Constraints
- Introducing realtime will require deciding: polling vs WS vs SSE, and server support

## Avoid Touching Unless Necessary
Existing route pages
→ app/**/page.tsx

