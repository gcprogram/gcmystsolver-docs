# AI Chat per Cache

For cases where an automatically found solution is wrong or none was found at all, you can open a
**full-screen chat** with the AI on a cache's detail page — specifically about that one cache.

## What the chat knows

The chat starts with the cache's full context: listing text, hint, and the existing (possibly
wrong) solution. You can additionally attach your own photos, e.g. of a hint sign or a puzzle
element that isn't part of the listing text.

## Solvers on call

Mid-conversation, the AI can independently invoke one of the classic solvers (what3words,
Vigenère, ROT-N, crypto decoders, Enigma, Reverse Wherigo) — e.g. to directly decrypt an
intermediate text discussed in the chat. The result appears as its own, clearly labeled chat
entry, and the AI automatically factors it into its next reply. That's capped at three automatic
AI reply rounds per message, so the conversation can't spiral into an endless loop.

## Adopting the solution

If the chat leads to a better solution, you take it over via the **"Take over as solution"**
button, straight into the cache database — no need to manually enter the solution anywhere else.
