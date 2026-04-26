# Indomit

**Sovereign AI infrastructure for businesses that refuse to rent their intelligence.**

Indomit builds closed-loop, on-site AI servers and orchestrators. One box. Your data. Your models. No cloud dependency, no runaway token costs, no third-party exposure.

## Quick Start

This is a static site. No build step required.

```bash
# Clone
git clone https://github.com/YOUR_USERNAME/indomit.git
cd indomit

# Serve locally (pick one)
python3 -m http.server 8000
# or
npx serve .
```

Open `http://localhost:8000` in your browser.

## Deployment

This repo is GitHub Pages-ready. Enable Pages in your repo settings, point it at the `main` branch root, and it ships.

## Structure

```
indomit/
  index.html              # Landing page
  assets/
    css/styles.css         # All styles, CSS custom properties for theming
    js/main.js             # Minimal interactions (scroll, nav toggle)
    images/                # Image assets (see IMAGE_SPECS.md)
  IMAGE_SPECS.md           # Placeholder image requirements and specs
  .gitignore
  README.md
```

## Image Placeholders

Hero and section images are placeholder slots. See `IMAGE_SPECS.md` for exact dimensions, aspect ratios, and mood/style guidance for each slot.

## Color Palette

Muted earth tones defined as CSS custom properties in `assets/css/styles.css`:

| Token            | Hex       | Use                          |
|------------------|-----------|------------------------------|
| `--parchment`    | `#F5F0E8` | Primary background           |
| `--sandstone`    | `#C4AD8A` | Borders, secondary accents   |
| `--sage`         | `#7A8B6F` | Trust/nature accent          |
| `--charcoal`     | `#2E2E2E` | Body text                    |
| `--bronze`       | `#8B5E3C` | CTAs, primary accent         |
| `--iron`         | `#3B3B3B` | Dark sections, footer        |

## License

Proprietary. All rights reserved.
