
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#544249'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#877179'
  outline-variant: '#d9c0c8'
  surface-tint: '#9f376f'
  primary: '#9f376f'
  on-primary: '#ffffff'
  primary-container: '#ff85c0'
  on-primary-container: '#791650'
  inverse-primary: '#ffafd2'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fdd73b'
  on-secondary-container: '#715d00'
  tertiary: '#00658b'
  on-tertiary: '#ffffff'
  tertiary-container: '#55b7ea'
  on-tertiary-container: '#004661'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd8e6'
  primary-fixed-dim: '#ffafd2'
  on-primary-fixed: '#3d0025'
  on-primary-fixed-variant: '#811d56'
  secondary-fixed: '#ffe173'
  secondary-fixed-dim: '#e8c426'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#554500'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7dd0ff'
  on-tertiary-fixed: '#001e2d'
  on-tertiary-fixed-variant: '#004c6a'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.5'
  label-md:
    fontFamily: Quicksand
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base-unit: 8px
  gutter-desktop: 24px
  margin-desktop: 40px
  gutter-mobile: 16px
  margin-mobile: 20px
  container-max-width: 1200px
---

## Brand & Style

This design system is built on a "Light Neo-Brutalism" aesthetic—a high-energy, cartoonish style that balances radical simplicity with exuberant character. It is designed to evoke feelings of optimism, accessibility, and playfulness, making it ideal for educational platforms, creative tools, or youth-oriented social apps.

The visual language combines the raw structural integrity of brutalism (thick strokes, high contrast) with the softness of modern cartooning (pastels, extreme roundedness). The interface should feel tactile and "poppable," utilizing whitespace not just for clarity, but to let the vibrant colors and bold outlines breathe.

## Colors

The palette is anchored by "Bubblegum Pink," "Sunny Yellow," and "Sky Blue." These high-chroma primaries are used to draw attention to interactive elements and brand moments. 

- **Primary:** Bubblegum Pink (#FF85C0) for main actions and highlights.
- **Secondary:** Sunny Yellow (#FFD93D) for secondary actions or warning-states that need a friendly tone.
- **Tertiary:** Sky Blue (#6BCBFF) for informational elements or accent flourishes.
- **Surface:** The background remains a very light gray (#F9FAFB) or pure white to ensure the pastel colors pop without overwhelming the user.
- **Ink:** A near-black (#1A1A1A) is used for all borders and typography to maintain high legibility and the "cartoon" outline effect.

## Typography

This design system exclusively utilizes **Quicksand** for its rounded terminals and friendly, open counters. The typographic hierarchy is intentionally dramatic.

Headlines should be set with tight leading and slight negative letter-spacing to create a "chunky" visual block. Body text requires generous line-height to maintain the minimal, airy feel of the cartoon aesthetic. Always use Medium (500) or Bold (700) weights; regular weights often feel too thin against the thick borders used in the UI.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to maintain a contained, "app-like" feel, transitioning to a fluid model for mobile. 

- **Grid:** A 12-column grid with generous 24px gutters.
- **Rhythm:** All spacing (padding, margins) must be multiples of 8px. 
- **Breathing Room:** Use aggressive whitespace (often 64px or 80px) between major sections to prevent the bold borders from feeling cluttered. Elements should never feel cramped; if in doubt, increase the padding.

## Elevation & Depth

Depth in this design system is achieved through **structural layering** rather than realistic lighting. 

1. **Borders:** Every card, button, and input field must have a 2px or 3px solid stroke (#1A1A1A). This is the primary method of separation.
2. **Hard Shadows:** Instead of soft blurs, use "drop" shadows that are slightly offset (e.g., 4px 4px) with a very low blur radius or 0 blur. These shadows should be tinted with a semi-transparent version of the stroke color.
3. **Interactive Lift:** Upon hover, elements should "lift" by increasing their shadow offset and shifting 2px up and left, simulating a physical button being released.

## Shapes

The shape language is defined by extreme roundedness. The system uses a `roundedness: 3` setting, meaning even standard components feel soft and approachable.

- **Base Components:** Buttons and inputs use a 16px (1rem) minimum radius.
- **Large Containers:** Cards and modals use 32px or 48px radii to emphasize the "bubbly" cartoon nature.
- **Pills:** All tags and chips should be fully pill-shaped (500px radius).

## Components

### Buttons
Buttons are the centerpiece of the system. They must feature a 3px black border and a flat background color (Primary or Secondary). On hover, they shift position slightly. Text inside buttons should be Bold and centered.

### Cards
Cards use a white background with a 2px border. They should always have a "soft-hard" shadow—a shadow with a 4px offset but a subtle 8px blur to bridge the gap between neobrutalism and modern softness.

### Input Fields
Inputs are chunky, with a minimum height of 56px. They use a 2px border. When focused, the border weight does not change, but the background color shifts to a very pale version of the Primary color (e.g., a 5% opacity pink).

### Chips & Lists
Chips are always pill-shaped and use the Tertiary (Sky Blue) color. Lists should have generous vertical padding (16px+) between items, with items separated by a 1px border or distinct card-like containers.

### Checkboxes & Radios
These are oversized (24px x 24px). Checkboxes are square with 4px rounded corners; radios are perfect circles. Both feature the signature 2px stroke and fill with the Primary color when active.