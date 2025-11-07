// Lightweight SVG gradient placeholders encoded as data URIs.
// These act as fallbacks until real assets are added.

function svgDataUri(label: string, from: string, to: string) {
  const svg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='${from}'/>
          <stop offset='100%' stop-color='${to}'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(#g)'/>
      <g fill='white' fill-opacity='0.75'>
        <rect x='40' y='640' rx='20' width='420' height='80'/>
      </g>
      <text x='60' y='692' font-family='Inter, system-ui, sans-serif' font-size='28' fill='#0b0b0b' opacity='0.7'>${label}</text>
    </svg>`,
  );
  return `data:image/svg+xml;charset=utf-8,${svg}`;
}

export const heroCar = svgDataUri('Car interior (dash)', '#dbeafe', '#ecfeff');
export const heroCenter = svgDataUri('Road test center vibe', '#e9d5ff', '#dbeafe');
export const heroLearner = svgDataUri('Confident learner', '#dcfce7', '#e0f2fe');
export const heroCity = svgDataUri('City backdrop', '#fee2e2', '#e0e7ff');

// Naming convention for real images you drop into /src/assets/images/hero:
// - car-480/768/1024/1440/1920.(avif|webp|jpg)
// - center-480/768/1024/1440/1920.(avif|webp|jpg)
// - learner-480/768/1024/1440/1920.(avif|webp|jpg)
// - city-480/768/1024/1440/1920.(avif|webp|jpg)

