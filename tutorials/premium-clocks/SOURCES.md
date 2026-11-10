# Sources — 9 Premium CSS Clocks

Checked 2026-11-10. Standing rule: every line of code and every narration claim is checked against the current docs.

## Page & every clock

| Code / claim | Source | What it says |
|---|---|---|
| `role="img"` + `aria-label` on every clock | [MDN: ARIA img role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) (last modified 2026-10-14) | "can be used to identify multiple elements inside page content that should be considered as a single image" · "otherwise use aria-label" |
| "A negative delay starts it at ten past ten" (`spin 43200s -36600s`, `3600s -600s`) | [MDN: animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) (last modified 2026-07-26) | "A negative value causes the animation to begin immediately, but partway through its cycle" · Baseline since September 2015 |
| "Twelve hours is forty three thousand two hundred seconds" | Arithmetic | 12 × 3600 = 43200; 10:10 = 36600 s into the 12 hours, 600 s into the hour |
| "The second hand ticks: steps sixty" | [MDN: steps()](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/steps) (last modified 2026-10-07) | "divides the animation duration into equal intervals": steps(60) makes 60 jumps of 6° per minute |
| Decorative motion only in `prefers-reduced-motion: no-preference` (radar sweep, HUD, blips, beam, pop, sun, stars, blobs, pendulum, pulse); the time itself (hands, counters, rings, flaps) always runs | [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) | no-preference: the user has made no preference known; reduce: the user prefers less motion |
| "If the user asks for less motion, the radar just ticks, like the neon clock" | [MDN: Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity) (last modified 2026-09-22) | without the media rule, only `.neon .s, .radar { animation: spin 60s steps(60) infinite }` matches the pro radar |
| "An animation list replaces the whole list, so the count comes along" | [MDN: Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity) (last modified 2026-09-22) | "When multiple declarations have equal specificity, the last declaration found in the CSS is applied to the element": the later `animation` value wins as a whole, so it restates `count` next to `pop` |

## 1. Neon Clock / 2. Neon Radar

| Code / claim | Source | What it says |
|---|---|---|
| Ticks with `repeating-conic-gradient` (6° = 60 minute ticks, 30° = 12 hour ticks), masked to the edge | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-10 | 360 / 6 = 60, 360 / 30 = 12; the radial mask keeps the outer 10% / 20% |
| "Pro radar is more specific than radar alone, so it wins" | [MDN: Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity) | `.pro .radar` (two classes) beats `.radar` (one class); `.pro` and `.neon` tie, so the later rule wins |
| "Each blip lights up exactly when the sweep passes over it" | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-10 | blip angles from the center: about 32°, 132°, 243° → 0.35 s, 1.47 s, 2.7 s of the 4 s sweep; delays .4 s, 1.5 s, 2.6 s |

## 3. Digital Glow

| Code / claim | Source | What it says |
|---|---|---|
| `@property --n { syntax: '<integer>' }` | [MDN: @property syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/@property/syntax) (last modified 2026-04-20) | "<integer>": "Accepts any valid <integer> value" |
| "A registered integer can animate, one whole number at a time" | [MDN: &lt;integer&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/integer) (last modified 2026-04-20) | "When animated, values of the <integer> data type are interpolated using discrete, whole steps" |
| `counter-reset: n var(--n)` + `content: counter(n, decimal-leading-zero)` | [MDN: counter-reset](https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset) (last modified 2026-09-25) | "creates named CSS counters and initializes their values" (e.g. `counter-reset: another-counter 15`) · Baseline since July 2015 |
| "Tabular nums gives every digit the same width" | [MDN: font-variant-numeric](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric) (last modified 2026-09-10) | tabular-nums: "numbers are all of the same size, allowing them to be easily aligned" |
| Gradient digits (`background-clip: text`) | [MDN: background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) (last modified 2026-04-20) | text: "The background is painted within (clipped to) the foreground text" |
| `@property --a` (angle) for the beam | [MDN: @property](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) (last modified 2026-05-01) | registers a typed custom property; the MDN example animates a registered property in @keyframes · Baseline 2024 |
| Digits: white → `#00e5ff` on `#0b0c1e` | [WCAG 2.2 · 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum) | 19.3:1 / 12.6:1 |

## 4. Flip Clock

| Code / claim | Source | What it says |
|---|---|---|
| "P is the one before it: n plus fifty nine, mod sixty. So after zero comes fifty nine" | [MDN: mod()](https://developer.mozilla.org/en-US/docs/Web/CSS/mod) (last modified 2026-04-18) | "returns a modulus left over when the first parameter is divided by the second"; (0 + 59) mod 60 = 59 · Baseline 2024 |
| Flaps turn with `rotate: x -90deg` / `rotate: x 90deg` | [MDN: rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/rotate) (last modified 2026-09-16) | axis syntax `rotate: x 90deg` · Baseline since August 2022 |
| Each face shows half a number with `clip-path: inset(0 0 50%)` / `inset(50% 0 0)` | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-10 | the four faces are the same size; the clip keeps the top or bottom half, so they turn around the middle |
| Digits `#e8e9ff` on `#24264a` / `#1d1f3f` | [WCAG 2.2 · 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum) | 12.1:1 / 13.3:1 |

## 5. Activity Rings

| Code / claim | Source | What it says |
|---|---|---|
| "After is the end cap. It rotates … by the same angle. That's why dash dash a inherits" | [MDN: @property](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) (last modified 2026-05-01) | `inherits: true`: the ::after inherits the animated --a from its ring |
| Track: `color-mix(in srgb, var(--c) 16%, #0000)` | [MDN: color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix) (last modified 2026-09-28) | mixes the ring color with transparent, 16% / 84% · Baseline since May 2023 |
| Time `#e8e9ff` in the middle (on `#15173a`) | [WCAG 2.2 · 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum) | 14.4:1 |

## 6. Orbit

| Code / claim | Source | What it says |
|---|---|---|
| Planets on a turning orbit, trail = conic gradient masked to a ring | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-10 | the orbit turns like a hand; the planet sits at its top |
| Stars: three repeating dot layers at 53×61, 71×47, 97×83 px | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-10 | different sizes, so together they don't read as one grid |

## 7. Glass Watch

| Code / claim | Source | What it says |
|---|---|---|
| `backdrop-filter: blur(18px) saturate(170%)` | [MDN: backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) (last modified 2026-04-20) | blurs and color-shifts the area behind the element · Baseline 2024 |
| "Pointer events none, so it never blocks the hover" (glare) | [MDN: pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) (last modified 2026-08-14) | none: "The element is generally not the target of pointer events" |
| Date `#1d1b33` on white | [WCAG 2.2 · 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum) | 16.7:1 |

## 8. Pendulum

| Code / claim | Source | What it says |
|---|---|---|
| "Rotate does the tick, and a second animation on transform adds the wobble. Two properties, so they add up" | [MDN: rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/rotate) (last modified 2026-09-16) | "allows you to specify rotation transforms individually and independently of the transform property" |
| "One second each way … so it ticks exactly with the second hand" | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-10 | swing: 1 s, alternate (−14° ↔ 14°); the second hand jumps every 1 s with steps(60), both from t = 0 |
| Numerals `#3b2412` on the cream dial `#efe2c4` | [WCAG 2.2 · 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum) | 11.3:1 |

## 9. LED Ring

| Code / claim | Source | What it says |
|---|---|---|
| "Mask composite intersect keeps only where both overlap" | [MDN: mask-composite](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-composite) (last modified 2026-04-20) | intersect: "The parts of the associated mask image that overlap all composited mask layers below it replace those previously composited layers" |
| 60 LEDs: `repeating-conic-gradient(… #000 0 4deg, #0000 0 6deg)` | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-10 | 360 / 6 = 60 dots, each 4° lit, 2° dark |
| Time `#ffffff` on `#15173a` | [WCAG 2.2 · 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum) | 17.3:1 |
