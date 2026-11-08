# Sources — New in CSS #1: field-sizing & text-wrap: balance

Checked 2026-11-08. Standing rule: every line of code and every narration claim is checked against the current docs.

## Step 1 · The Page

| Code / claim | Source | What it says |
|---|---|---|
| Labels connected with `for` and `id` | [MDN: &lt;label&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label) (last modified 2026-04-24) | a label is associated with its control by the `for` attribute matching the control's `id` |
| Field border #8f86c9 on white | [WCAG 2.2 Understanding 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | 3.27:1, above the 3:1 needed for the boundary of a form control |
| White on #6d4aff button, #4b4675 labels | [WCAG Understanding 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum) | 5.15:1 and 8.63:1, above 4.5:1 |
| A clear outline for keyboard focus | [MDN: :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:focus-visible) (last modified 2026-10-16) | `:focus-visible` shows focus for keyboard users; never remove it without a replacement |
| "The box stays small. The text scrolls inside it" | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-08 | the default textarea keeps its size; a 140-character message overflows and scrolls |

## Step 2 · Before: JavaScript

| Code / claim | Source | What it says |
|---|---|---|
| "The input event fires on every key you press" | [MDN (es translation, 2025-06-24): Element input event](https://developer.mozilla.org/es/docs/Web/API/Element/input_event) | it fires when the value of an input, select or textarea has been changed; each key press changes the value |
| `box.style.height = box.scrollHeight + "px"` | [MDN: Element.scrollHeight](https://developer.mozilla.org/en-us/docs/web/api/element/scrollheight) (last modified 2026-10-14) | "a measurement of the height of an element's content, including content not visible on the screen due to overflow" |
| Reset to `auto` first, then `scrollHeight` (the classic pattern) | [modern-css.com: Auto-growing textarea without JavaScript](https://modern-css.com/auto-growing-textarea-without-javascript/) (updated 2026-08-24) | the old approach: reset the height to auto, then set it to scrollHeight on every input |
| "Runs on every key press, and each time the browser has to measure the page again" | [modern-css.com: Auto-growing textarea without JavaScript](https://modern-css.com/auto-growing-textarea-without-javascript/) (updated 2026-08-24) | re-measured on every keystroke, "which forces a reflow each time" |
| "Every text box needs its own listener" | [modern-css.com: Auto-growing textarea without JavaScript](https://modern-css.com/auto-growing-textarea-without-javascript/) (updated 2026-08-24) | each textarea needs its own input listener |

## Step 3 · Now: field-sizing

| Code / claim | Source | What it says |
|---|---|---|
| `field-sizing: content` ("size this field to fit what's inside it") | [MDN: field-sizing](https://developer.mozilla.org/docs/Web/CSS/field-sizing) (last modified 2026-07-26) | values `content` and `fixed` (the initial value); `content` lets the element adjust its size to fit its contents |
| A textarea grows taller, then scrolls at `max-height` | [MDN (ja translation, updated 2026-10-25): field-sizing](https://developer.mozilla.org/ja/docs/Web/CSS/field-sizing) | a textarea grows taller for new lines, and shows a scrollbar once it reaches its height constraint |
| Use min / max instead of a fixed size | [MDN: field-sizing](https://developer.mozilla.org/docs/Web/CSS/field-sizing) (last modified 2026-07-26) | avoid fixed width and height with `field-sizing: content`; use min and max sizes so it can grow and shrink within limits |
| `min-height: 5em` ≈ "about three lines" | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-08 | 18px text, 21px per line; the textarea is border-box, so 5em = 90px minus 24px of padding and border = 66px ≈ 3 lines |
| "In every major browser since June 2026" | [MDN: field-sizing](https://developer.mozilla.org/docs/Web/CSS/field-sizing) (last modified 2026-07-26) | Baseline 2026, newly available since June 2026 (Chrome 123, Safari 26.2, Firefox 152, per modern-css.com) |

## Step 4 · Inputs Grow Too

| Code / claim | Source | What it says |
|---|---|---|
| `min-width: 8ch` ("so an empty field is still easy to tap") | [MDN (ja translation, updated 2026-10-25): field-sizing](https://developer.mozilla.org/ja/docs/Web/CSS/field-sizing) | without a min-width, an input with field-sizing: content is only as wide as the text cursor |
| `max-width: 100%` keeps it inside the card | [MDN: field-sizing](https://developer.mozilla.org/docs/Web/CSS/field-sizing) (last modified 2026-07-26) | min and max sizes stop the control from becoming too small or too large |
| `justify-self: start` ("in a grid, an input stretches to the full width") | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-08 | without it the input fills the grid column; with it, it keeps its own width and grows with the name |

## Step 5 · Before: A Manual Line Break

| Code / claim | Source | What it says |
|---|---|---|
| Phone (390px): "one lonely word: snacks" | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-08 | lines: "Tell us what you | think of our new | snacks" |
| Desktop with the br after "think": two even lines | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-08 | "Tell us what you think | of our new snacks" |
| Phone with the br: four lines, a word alone in the middle | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-08 | "Tell us what you | think | of our new | snacks" |
| "A br doesn't know the screen size or the font" | [Chrome for Developers: CSS text-wrap: balance](https://developer.chrome.com/blog/css-text-wrap-balance) (updated 2023-12-19) | content size, font and language vary, so manual fixes don't scale |

## Step 6 · Now: text-wrap: balance

| Code / claim | Source | What it says |
|---|---|---|
| `text-wrap: balance` ("the lines come out about the same length") | [MDN: text-wrap](https://developer.mozilla.org/docs/Web/CSS/text-wrap) (last modified 2026-08-27) | `text-wrap` is a shorthand for text-wrap-mode and text-wrap-style; `balance` balances the characters across lines |
| Desktop: two even lines · phone: three even lines | Measured in Chromium 141 (Playwright) on the finished page, 2026-11-08 | "Tell us what you think | of our new snacks" · "Tell us what | you think of our | new snacks" |
| "Balancing is extra work, so browsers only balance short text: six lines or fewer in Chrome, ten in Firefox" | [MDN: text-wrap-style](https://developer.mozilla.org/docs/Web/CSS/text-wrap-style) (last modified 2026-06-08) | computationally expensive, so it only applies to blocks of six or fewer lines in Chromium and ten or fewer in Firefox; recommended for headings, captions and blockquotes |
| It does not change the heading's width | [Chrome for Developers: CSS text-wrap: balance](https://developer.chrome.com/blog/css-text-wrap-balance) (updated 2023-12-19) | it only changes where lines wrap, not the element's inline size |
| "In every major browser since May 2024" | [web-features explorer: Baseline newly available](https://web-platform-dx.github.io/web-features-explorer/newly-available) | text-wrap: balance, Baseline newly available 2024-05-13 · Chrome/Edge 114, Firefox 121, Safari 17.5 (Chrome for Developers) |
