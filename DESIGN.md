# Fluent 2 profile design

## Authority and scope

This document replaces the previous NVIDIA design specification. All routes use a Fluent 2 inspired visual system: neutral surfaces, blue emphasis, readable typography, rounded geometry, and restrained elevation. Existing profile information, external destinations, Korean and English translations, and utility-page interactions remain part of the product.

The implementation combines semantic CSS custom properties with Fluent UI React v9 controls. `FluentProvider` follows the stored light or dark theme. Shared buttons and the Nintendo QR dialog use the official components. Site-specific content layouts, navigation, typography, and responsive geometry retain the visual direction below. Griffel styles are collected during Pages Router server rendering.

Official references:

- [Fluent 2](https://fluent2.microsoft.design/): design system overview.
- [Color](https://fluent2.microsoft.design/color): neutral, brand, and semantic color roles.
- [Typography](https://fluent2.microsoft.design/typography): platform font stacks, hierarchy, and text contrast.
- [Layout](https://fluent2.microsoft.design/layout): four-pixel spacing, responsive composition, and mobile touch targets.
- [Elevation](https://fluent2.microsoft.design/elevation): depth used to communicate surface hierarchy.
- [Motion](https://fluent2.microsoft.design/motion): purposeful transitions and reduced motion.

## Visual direction

Use a quiet application-like frame with a compact navigation bar and an open profile introduction. Place the portrait beside the introduction on wide screens and below it on narrow screens. Group experience, activities, capabilities, projects, and personal profiles into distinct sections. Cards use consistent internal spacing and subtle borders rather than decorative corner markers. The contact section uses a tinted brand surface. The footer shares the neutral surface system.

Nintendo Switch, Pokémon Champions, and the hidden page share the same navigation, typography, controls, card geometry, and themes. Pokémon artwork may retain a dark overlay to keep text legible independently of the selected theme.

## Color and surface roles

The following palette is the site's chosen Fluent-inspired mapping. CSS is the source of truth for final token names and values.

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| Brand action | `#0f6cbd` | `#0f6cbd` | Primary actions and selected navigation |
| Primary text | `#242424` | `#f5f5f5` | Headings and body text |
| Secondary text | `#616161` | `#bdbdbd` | Descriptions and metadata |
| Page canvas | `#fafafa` | `#141414` | Document background |
| Card surface | `#ffffff` | `#1f1f1f` | Content surfaces |
| Subtle surface | `#f0f0f0` | `#191919` | Secondary groups |
| Border | `#e0e0e0` | `#383838` | Card and control boundaries |

Use separate tokens for action backgrounds, action foregrounds, inline links, muted text, and brand-tinted surfaces. Do not reuse a light-theme color on a dark surface without checking contrast. Primary buttons need a contrasting foreground in both themes. Disabled actions remain visibly disabled and use native `disabled` semantics.

## Typography and geometry

Use Segoe UI with the bundled Pretendard font for Korean coverage and native system sans-serif fallbacks. Do not fetch a proprietary font or rely on remote fonts for rendering.

| Role | Target size | Weight | Application |
| --- | --- | --- | --- |
| Profile display | Fluid 32–56 px | 600 | Home introduction |
| Page title | Fluid 32–48 px | 600 | Utility routes |
| Section heading | Fluid 28–36 px | 600 | Content hierarchy |
| Card heading | 20 px | 600 | Projects and grouped content |
| Body | 16 px | 400 | Main text, comfortable line height |
| Controls and metadata | 14 px | 400–600 | Navigation, actions, captions |

Use the four-pixel spacing rhythm with 8, 12, 16, 24, 32, 48, and 64 px intervals. Controls use 4 px corners. Cards use 8 px corners. Large portrait surfaces may use 12 px corners. Avatar marks may be circular. These sizes are site decisions.

Use low elevation for resting cards and stronger elevation for interactive hover states and dialogs. Do not make static cards look clickable. Keep solid surface fallbacks when backdrop filtering is unavailable. Avoid ornamental animation and large atmospheric effects.

## Responsive behavior

Layouts respond to available space instead of user-agent strings or a list of device models. Support widths from 320 CSS px upward, portrait and landscape orientation, tablets, split-screen windows, and wide desktop displays. This target does not imply that every physical device has been tested.

| Viewport | Composition |
| --- | --- |
| 320–479 px | Single-column cards, compact navigation, wrapped actions and metadata |
| 480–639 px | Single-column primary content with more breathing room |
| 640–1023 px | Two-column card groups where their content fits; desktop navigation above 768 px |
| 1024 px and above | Desktop navigation, side-by-side introduction, wider editorial and card grids |

Keep content within a centered maximum-width container. Use fluid gutters and `minmax(0, 1fr)` grid tracks. Children of flex and grid containers must be allowed to shrink. Long names, links, IDs, and English translations must wrap without creating document-level horizontal scrolling. Do not hide overflow to disguise layout defects.

Use at least 48 × 48 CSS px for primary touch controls, including language, theme, menu, copy, dialog close, and QR controls. Text links retain enough vertical padding for reliable use. Actions may wrap to additional rows. Preserve document zoom; do not set `maximum-scale` or `user-scalable=no`.

Use `viewport-fit=cover` with safe-area insets for notched screens. Dialogs must fit the available viewport height, scroll internally when necessary, and keep their close control reachable. Images retain their aspect ratio and use responsive sizes. No fixed-height content panel may clip translated text.

## Interaction and accessibility

- Preserve semantic headings, landmarks, alternative text, external-link protection, and the skip-to-content link.
- Show a clearly visible keyboard focus outline. Hover must not be the only state indicator.
- Keep menu expansion state, Escape dismissal, and focus return through Headless UI Disclosure and Fluent UI Dialog.
- Keep copy success and failure feedback in live regions. Preserve the original friend codes and trainer IDs.
- Use `#75b6e7` for brand text on dark surfaces. Store explicit language and theme choices using the existing storage contract. Both languages and both themes must work across every route.
- Honor `prefers-reduced-motion` by removing nonessential transitions and smooth scrolling.
- Support forced colors with visible boundaries and system color roles.
- Check text contrast against the actual rendered surface. Target at least 4.5:1 for standard text and 3:1 for qualifying large text, following the official typography guidance.

## Validation and acceptance

Run `corepack yarn typecheck`, `corepack yarn lint`, and `corepack yarn build`. These commands verify code and build integrity; they do not establish browser behavior.

Browser review must cover Korean and English in light and dark themes, mobile and desktop composition, navigation, internal links, copy feedback, and the Nintendo QR dialog. Inspect 320, 390, 640, 768, 1024, and 1440 px widths plus a landscape viewport. Check document overflow, image sizing, action wrapping, and dialog visibility. Include keyboard focus and reduced-motion review when the available browser tools support them.

Record the checks actually performed and their limits in the delivery report. Real iOS Safari and Android Chrome remain separate acceptance environments when testing is limited to a desktop browser viewport.
