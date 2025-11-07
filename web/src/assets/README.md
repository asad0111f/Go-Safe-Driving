Assets guide

- Place responsive hero images under `src/assets/images/hero/` using this naming:
  - `car-{480|768|1024|1440|1920}.avif|webp|jpg`
  - `center-{480|768|1024|1440|1920}.avif|webp|jpg`
  - `learner-{480|768|1024|1440|1920}.avif|webp|jpg`
  - `city-{480|768|1024|1440|1920}.avif|webp|jpg`

Recommendations
- Export AVIF and WebP with perceptual quality; include JPEG fallback.
- Provide 5 widths: 480, 768, 1024, 1440, 1920.
- Keep subject-safe cropping for small widths.

Usage
- Use `ResponsiveImage` component and pass the base path without suffix:
  - Example: basePath=`/src/assets/images/hero/car` alt=`"Car interior dashboard"`
  - Component automatically generates AVIF/WebP/JPG srcSets and lazy loads.

Placeholders
- Until real images are added, `src/assets/placeholders.ts` exports data-URI placeholders for the four hero scenes.

