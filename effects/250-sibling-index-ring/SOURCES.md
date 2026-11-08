# Sources — 250-sibling-index-ring

Checked 2026-11-08. Standing rule: every line of code and every narration claim is checked against the current docs.

| Code / claim | Source | What it says |
|---|---|---|
| `role="img"` + `aria-label` on the drawing | [MDN: img role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) (last modified 2026-10-14) | "identify multiple elements inside page content that should be considered as a single image" · "An accessible name is required" (aria-label when there's no visible label) |
| Looping motion only with `prefers-reduced-motion: no-preference` | [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) (last modified 2026-06-10) | "no-preference: Indicates that a user has made no preference known on the device" |
| Note for real pages: endless motion | [WCAG 2.2 Understanding 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) | moving content that starts automatically and lasts more than five seconds needs a way to pause it; these are demos, add a pause control on a real page |
| "CSS can finally count": `sibling-index()` is a number you can calculate with | [MDN: sibling-index()](https://developer.mozilla.org/docs/Web/CSS/sibling-index) (last modified 2026-04-18) | "returns an <integer>" for the element's position among its siblings, 1-based like :nth-child() · unlike counter(), which returns a <string>, it can be used in calculations |
| "Sibling count is how many there are" | [MDN: sibling-count()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/sibling-count) | "the total number of sibling DOM elements (direct children of the parent) of the element on which it is used, including itself" |
| `rotate: calc(360deg / sibling-count() * sibling-index())`: 12 spans, 30° apart | Computed in Chromium 141 | span 1 → 30deg, span 2 → 60deg … span 12 → 360deg |
| Rainbow: the same math as the hue of `hsl()` | [MDN: sibling-index()](https://developer.mozilla.org/docs/Web/CSS/sibling-index) (last modified 2026-04-18) | the page's example spreads colors evenly with `hsl(calc(360deg / sibling-count() * sibling-index()) 50% 50%)` |
| Staggered delay: `calc(sibling-index() * 0.1s - 1.2s)` | [MDN: sibling-index()](https://developer.mozilla.org/docs/Web/CSS/sibling-index) (last modified 2026-04-18) | the page's staggered-animation example sets `animation-delay: calc(1s * sibling-index())` · here the delays are negative so every dot is already mid-fade on the first frame; 12 × 0.1s = the 1.2s duration, so the glow chases round without a gap |
| Dot + glow from `currentColor` | Rendered frame by frame | each span's `color` is its hue; `::before` uses it for `background` and `box-shadow` |
| "New in every major browser" | [web-features: sibling-count() and sibling-index()](https://web-platform-dx.github.io/web-features-explorer/features/sibling-count/) | Baseline newly available since 2026-08-18 · Chrome 138, Edge 138, Firefox 154, Safari 26.2 |
| Firefox 154 completed it | [web.dev: New to the web platform in August 2026](https://web.dev/blog/web-platform-08-2026?hl=en) | Firefox 154 added sibling-index() and sibling-count(), which made them Baseline newly available |
| "No more numbering elements by hand" | Code | the HTML is twelve identical `<span></span>`: no `--i` variables and no `:nth-child()` rule per dot |
