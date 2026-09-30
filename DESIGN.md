# Design System — Vira Lata Vira Amor

## Visual world

Editorial organic care: a local veterinary clinic rendered through broad color fields, large rounded image crops, curved transitions and a friendly, precise reading order. The page should feel authored for a real pet-care business, not assembled from repeated dashboard cards.

## Color tokens

- `--blue #124B75`: trust surfaces, hero and gallery background.
- `--blue-deep #0B3657`: footer, dark CTA buttons and high-contrast text.
- `--teal #12B7AD`: care sections, links and active states.
- `--yellow #F7C948`: action, emphasis and warmth.
- `--white #FFFDF7`: reading surfaces and light contrast.
- `--muted #5B7280`: supporting copy on light surfaces.

## Typography

- **Varela Round** for headlines, brand name and feature labels.
- **Nunito Sans** for body copy, navigation, buttons and supporting labels.
- Headlines use generous scale and tight tracking; body copy stays near 65–75ch where possible.

## Composition

- One-column anchor navigation with a divided hero.
- Organic image containers, curved section transitions and asymmetric editorial blocks.
- Service list and specialty list carry hierarchy without a wall of same-size cards.
- Mobile collapses into a single-column reading order with a persistent WhatsApp action.

## Components

Buttons are pill-shaped with visible focus, clear action verbs and a yellow primary state. Functional icons are SVGs from Lucide or authored inline SVGs, never emoji. Image captions are compact pills. Lists use index, title and supporting sentence rather than nested cards.

## Motion

Reveal-on-scroll uses small opacity and translate changes. Hover uses transform, color and background only; no width, height, margin or padding transitions. `prefers-reduced-motion` disables non-essential motion.

## Asset provenance

The hero and gallery images are generated build-time assets reserved by the Manus image tool under `/manus-storage/async-images/5tF05GTQaKLTqimiQT0uhD/` and are intentionally easy to replace when the clinic's real photography arrives. The project icon is authored from the Vira Lata Vira Amor placeholder mark and uploaded to managed storage for project branding.
