# Image Specifications — Indomit Website

All placeholder slots are defined in `assets/css/styles.css` and referenced in `index.html`. Replace the CSS placeholder backgrounds with actual images when ready.

---

## 1. Hero Background — `hero-castle.jpg`

**Dimensions:** 2560 x 1440px (16:9) — serves as full-viewport cover image
**File size target:** Under 400KB (use WebP with JPEG fallback)
**Focal point:** Center-bottom third (text overlay occupies upper-center)

### Subject & Mood
A small but sturdy stone castle or fortified tower on a rocky island. No neighboring structures visible. The island sits alone in calm water — could be a lake, fjord, or quiet sea. The structure should feel **ancient, enduring, and self-sufficient**. Not a grand palace. Not a ruin. A compact, well-maintained stronghold that clearly doesn't need anyone else.

### Atmosphere
- Time of day: Golden hour or soft overcast — warm, muted light
- Sky: Subdued. Soft clouds, no dramatic storms. Peaceful, not ominous.
- Water: Still or barely rippled. Reflective.
- Vegetation: Minimal. Some moss on stone, sparse grass on the island. Nothing lush.

### Color Guidance
Match the site palette. The image should feel like it belongs in this range:
- Stone walls: `#A67C52` to `#6B6560` (clay to stone grays)
- Water: `#7A8B6F` muted sage-blue to gray-green
- Sky: `#D9CBAF` to `#F5F0E8` (warm overcast parchment tones)
- Avoid saturated blues, vivid greens, or high-contrast skies

### CSS Integration
In `styles.css`, find `.hero__bg-image` and replace the placeholder gradient:
```css
.hero__bg-image {
  background-image: url('../images/hero-castle.jpg');
  background-size: cover;
  background-position: center 40%;
}
```

Keep the `::before` pseudo-element overlay for the gradient fade that ensures text legibility.

---

## 2. Open Graph Card — `og-card.jpg`

**Dimensions:** 1200 x 630px (1.91:1 — OG standard)
**File size target:** Under 200KB

### Content
Cropped or adapted version of the hero image with the Indomit logo/wordmark overlaid in the lower-left. Text should read clearly at thumbnail size in social media feeds.

### Integration
Uncomment the OG meta tag in `index.html`:
```html
<meta property="og:image" content="assets/images/og-card.jpg">
```

---

## 3. Favicon — `favicon.svg` (+ `favicon.ico` fallback)

**Dimensions:** SVG (scalable) + 32x32px ICO
**Concept:** Minimal castle tower silhouette or a stylized "A" with battlements. Monochrome — should read clearly at 16px.

### Color
- Primary: `#8B5E3C` (bronze) on transparent
- Dark mode variant: `#D9CBAF` (sandstone-light) on transparent

### Integration
Uncomment the favicon link in `index.html`:
```html
<link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
```

---

## General Image Guidelines

1. **Desaturate everything.** If the source image is vivid, pull saturation down 30-40%. The site's personality is muted earth, not National Geographic.
2. **WebP first, JPEG fallback.** Use `<picture>` elements if adding responsive images later.
3. **Lazy load** any images below the fold with `loading="lazy"`.
4. **Alt text matters.** Every `<img>` gets a descriptive `alt` attribute. The hero can use an `aria-label` on the container div since it's a CSS background.
