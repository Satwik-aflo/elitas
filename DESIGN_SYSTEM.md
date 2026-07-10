# Elitas design system

## Brand idea

Elitas presents land as something living, cultivated and held for the long term. The identity
should feel assured and contemporary, never ornamental or sales-led.

The logo combines an uppercase E with three agricultural terraces. Its vertical spine represents
a strong foundation. The open right edge gives the mark direction and room to grow.

## Logo use

- Use the full mark with the Elitas wordmark in primary navigation and formal brand applications.
- Use the mark alone for the favicon, social avatar and compact mobile placements.
- Keep clear space equal to one inner bar of the E on every side.
- Do not stretch, rotate, outline or recolor individual terraces.
- Preferred combinations are Forest on Limestone, Limestone on Forest, and Forest on Leaf.

Source assets:

- `src/components/ElitasMark.astro` for the site component
- `public/elitas-mark.svg` for external use
- `public/favicon.svg` for browser and bookmark surfaces

## Color

| Token | Value | Purpose |
|---|---|---|
| Forest | `#14352D` | Primary identity, text, large fields |
| Forest Deep | `#0C2822` | High-contrast backgrounds |
| Limestone | `#F2F4EF` | Primary canvas |
| Mist | `#E7EBE4` | Secondary surfaces |
| Leaf | `#C8DA72` | Single accent, focus, key moments |
| Text Muted | `#5D7069` | Supporting copy |

Leaf is the only Elitas accent. Anthara's terracotta is project-specific and should not appear in
the Elitas company interface outside Anthara content.

## Typography

- Geist Variable: wordmark, navigation, headings, actions and interface text
- Newsreader Variable: longer editorial and project copy
- IBM Plex Mono: small factual data only

Headings use tight tracking and compact leading. Body copy stays between 45 and 70 characters per
line where practical.

## Layout and components

- Maximum content width: 82rem
- Responsive gutter: 1.1rem to 3.25rem
- Minimum interactive target: 48px
- Media and interface surfaces use sharp corners
- Buttons use short labels and never wrap
- Desktop asymmetry collapses to one clear column below 768px
- Motion is limited to opacity, transform and clear interaction feedback
- Every animation respects reduced-motion preferences

## Voice

Calm, factual and specific. Prefer "land worth returning to" over abstract luxury language. Avoid
claims that cannot be supported, property-portal urgency, generic superlatives and invented data.

## Accessibility

- Maintain WCAG AA contrast for all copy and controls.
- Use visible focus outlines in Leaf.
- Preserve semantic headings, link purpose and alternative text.
- Keep the site fully usable with keyboard navigation and reduced motion.
