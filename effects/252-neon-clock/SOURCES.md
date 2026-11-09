# Sources — 252-neon-clock

Checked 2026-11-09. Standing rule: every line of code and every narration claim is checked against the current docs.

| Code / claim | Source | What it says |
|---|---|---|
| "Two rings of ticks from repeating conic gradients. Sixty for the minutes, twelve for the hours" | [MDN: repeating-conic-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-conic-gradient) (last modified 2026-04-18) | "creates an image consisting of a repeating gradient … with color transitions rotated around a center point" · a stripe every 6deg (60 minute ticks) and every 30deg (12 hour ticks); `from -.4deg` / `from -1deg` center each stripe on its mark |
| Ticks only at the edge: `mask: radial-gradient(closest-side, #0000 90%, #000 0)` + `border-radius: 50%` | Measured in Chromium 141 (Playwright) on the rendered Short, 2026-11-09 | the minute ticks show in the outer 10% of the radius, the hour ticks in the outer 20%; the round corners keep both rings circular |
| "Real speeds" | Code | hour hand 43200s = 12 hours per turn, minute hand 3600s = 1 hour, second hand 60s = 1 minute |
| "From ten past ten": `-36600s` and `-600s` delays | [MDN: animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) (last modified 2026-07-26) | "A negative value causes the animation to begin immediately, but partway through its cycle" · 36600s = 10h 10m, 600s = 10m |
| "The second hand ticks in sixty steps": `steps(60)` | [MDN: steps()](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/steps) (last modified 2026-10-07) | "divides the input time into a specified number of intervals that are equal in length" · 60 steps in 60s = one tick per second; the trail uses the same animation |
| `role="img"` + `aria-label="Analog clock"` | Code | the clock is announced as one image with a name; the decorative spans inside it are not read one by one |
| Quick format: the HTML is in the description | Note | a test of short CSS-only Shorts since 8/11/2026; the full HTML is in the description, the pinned comment and on GitHub |
