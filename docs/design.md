---
name: Dwellio
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#181919'
  on-primary: '#ffffff'
  primary-container: '#2d2d2d'
  on-primary-container: '#959494'
  inverse-primary: '#c8c6c6'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e3e2e2'
  on-secondary-container: '#646464'
  tertiary: '#18190b'
  on-tertiary: '#ffffff'
  tertiary-container: '#2c2e1e'
  on-tertiary-container: '#959680'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e4e4cc'
  tertiary-fixed-dim: '#c8c8b0'
  on-tertiary-fixed: '#1b1d0e'
  on-tertiary-fixed-variant: '#474836'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-edge: 64px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

This design system embodies the intersection of **Luxury Hospitality** and **Editorial Design**, now reimagined through a sophisticated **Light Mode** lens. It is crafted for the discerning professional, prioritizing a sense of "quiet luxury" and architectural clarity. The brand personality is poised, dependable, and sophisticated, avoiding the frantic energy of typical real estate marketplaces in favor of a curated, gallery-like experience that feels exclusive and airy.

The visual style is a blend of **Minimalism** and **Tactile Modernism**. It leverages clean, expansive surfaces to signal premium value and openness. The UI should feel like a high-end physical magazine: structured yet fluid, with a focus on immersive property photography that stands out against a bright, neutral backdrop. Every interaction should evoke a sense of professional hospitality—seamless, soft, and intentional.

## Colors

The palette is rooted in organic, architectural tones optimized for a light environment, allowing property imagery to remain the focal point while maintaining high readability.

- **Primary (#2D2D2D):** A deep charcoal used for typography and structural accents, providing a grounded and authoritative weight.
- **Secondary (#8C8C8C):** Stone gray for secondary text and subtle decorative borders, providing essential hierarchy while maintaining a soft aesthetic.
- **Background:** A crisp, light neutral that creates an airy, "gallery" feel for property browsing.
- **Tertiary/Accents:** Soft beige (#F5F5DC) and earthy tones are used for "Verified" badges, highlight states, and subtle container backgrounds to provide warmth and a human element amidst the cool neutral tones.

## Typography

This design system utilizes a high-contrast typographic pairing to achieve an editorial feel. 

**Playfair Display** is reserved for headlines and large display moments. Its high-contrast serifs evoke traditional luxury and sophistication, appearing sharp and elegant in dark-on-light applications. **Inter** serves as the functional workhorse, providing maximum readability for property details, logistics, and interface labels. 

To maintain the premium aesthetic, generous line-height is applied to body text, and labels utilize increased letter spacing and uppercase styling to act as architectural "markers" within the layout.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach for desktop, centering content within a 1440px container to maintain control over line lengths and visual balance. 

- **Grid:** A 12-column grid with wide 32px gutters creates a spacious, airy feel.
- **Rhythm:** An 8px base unit drives all spacing. For vertical rhythm, prioritize large gaps (section-gap) between distinct content blocks to enforce a "calm" hierarchy.
- **Margins:** Generous outer margins (64px+) ensure the content never feels crowded against the viewport edges, mimicking the wide margins of a luxury coffee table book.

## Elevation & Depth

In Light Mode, depth is communicated through **Soft Ambient Shadows** and **Subtle Tonal Shifts** rather than heavy outlines.

- **Tonal Layers:** Surfaces use subtle shifts in off-white and cream to indicate elevation. The background is the lightest, while cards and interactive elements use slightly different "surface-container" tones.
- **Ambient Shadows:** Use extremely diffused, low-opacity shadows to lift elements off the page without creating visual noise.
- **Interactions:** On hover, elements should slightly darken in tone or experience a subtle increase in shadow depth, providing a tactile, responsive feedback loop that feels expensive and controlled.

## Shapes

To avoid the aggression of sharp corners while maintaining professional structure, this design system uses **Rounded** geometry. 

Standard components (buttons, inputs) utilize a 0.5rem (8px) radius. Larger containers, such as property cards and modal sheets, use `rounded-lg` (16px) or `rounded-xl` (24px) to emphasize a soft, welcoming hospitality vibe. Decorative elements like "Verified" badges may use pill-shaped (rounded-full) corners to distinguish them from functional UI.

## Components

- **Buttons:** Tactile and minimal. Primary buttons use the Primary Charcoal (#2D2D2D) with white text for high visibility. Secondary buttons use a fine 1px border in Stone Gray with dark text. All buttons feature a subtle "soft depth" to feel like a physical key.
- **Cards:** Editorial-inspired. Cards should feature "full-bleed" photography at the top with a 3:2 or 4:5 aspect ratio. Text is placed on a clean white surface below with minimal metadata. Verification badges are overlaid on the image in the top-right corner.
- **Input Fields:** Minimalist styling. Use a 1px bottom border or a light Stone Gray stroke on all sides. Focus states should transition the border to the Primary Charcoal color with no "glow," only a slight sharpening of the border weight.
- **Verification Badges:** Small, elegant chips using a combination of the Tertiary Beige (#F5F5DC) and dark text, acting as quality markers against the light background.
- **Property Hero:** An immersive, high-impact component utilizing the display-xl typography overlaid or adjacent to high-resolution architectural photography.
- **Navigation:** A clean, persistent top bar with a light, blurred background (glassmorphism), using label-sm links with generous 40px horizontal spacing.