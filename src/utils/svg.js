// Inline SVG data URI generators — zero network requests, always renders

export function svgIcon(color, accent, emoji) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stop-color="${color}"  stop-opacity="0.35"/>
        <stop offset="100%" stop-color="${accent}" stop-opacity="0.6"/>
      </linearGradient>
      <radialGradient id="r" cx="30%" cy="30%">
        <stop offset="0%"   stop-color="${color}"  stop-opacity="0.25"/>
        <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="200" height="200" fill="#0d0d1a"/>
    <rect width="200" height="200" fill="url(#g)"/>
    <rect width="200" height="200" fill="url(#r)"/>
    <circle cx="160" cy="40"  r="60" fill="${color}"  fill-opacity="0.08"/>
    <circle cx="40"  cy="160" r="40" fill="${accent}" fill-opacity="0.08"/>
    <text x="100" y="118" font-size="72" text-anchor="middle" font-family="system-ui">${emoji}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function svgScreen(color, accent, label, index) {
  const bars = [65,80,50,90,70,85,60,95,75,55,88,72].map((h, i) =>
    `<rect x="${8 + i * 14}" y="${180 - h}" width="10" height="${h}" rx="3"
      fill="${color}" fill-opacity="${i === 7 ? 0.9 : 0.3 + (i % 3) * 0.15}"/>`
  ).join('');

  const cards = [0,1,2].map(i =>
    `<rect x="16" y="${310 + i * 52}" width="268" height="40" rx="8"
      fill="${color}" fill-opacity="${i === 0 ? 0.2 : 0.08}"
      stroke="${color}" stroke-opacity="0.15" stroke-width="1"/>`
  ).join('');

  const dots = [0,1,2,3].map(i =>
    `<circle cx="${130 + i * 14}" cy="640" r="4"
      fill="${color}" fill-opacity="${i === (index % 4) ? 1 : 0.25}"/>`
  ).join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="390" height="844" viewBox="0 0 390 844">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="60%" y2="100%">
        <stop offset="0%"   stop-color="#0d0d1a"/>
        <stop offset="100%" stop-color="#07070f"/>
      </linearGradient>
    </defs>
    <rect width="390" height="844" fill="url(#bg)"/>
    <circle cx="300" cy="120" r="160" fill="${color}"  fill-opacity="0.06"/>
    <circle cx="80"  cy="700" r="120" fill="${accent}" fill-opacity="0.05"/>
    <rect x="16" y="60"  width="120" height="8"   rx="4" fill="${color}" fill-opacity="0.7"/>
    <rect x="16" y="78"  width="80"  height="6"   rx="3" fill="${color}" fill-opacity="0.3"/>
    <rect x="16" y="110" width="358" height="140" rx="16"
      fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-opacity="0.2" stroke-width="1"/>
    ${bars}
    <rect x="16"  y="270" width="170" height="32" rx="8"
      fill="${color}"  fill-opacity="0.15" stroke="${color}"  stroke-opacity="0.2" stroke-width="1"/>
    <rect x="196" y="270" width="88"  height="32" rx="8"
      fill="${accent}" fill-opacity="0.15" stroke="${accent}" stroke-opacity="0.2" stroke-width="1"/>
    ${cards}
    <rect x="16" y="480" width="358" height="100" rx="12"
      fill="${color}" fill-opacity="0.08" stroke="${color}" stroke-opacity="0.12" stroke-width="1"/>
    <rect x="30" y="494" width="200" height="7" rx="3" fill="${color}" fill-opacity="0.5"/>
    <rect x="30" y="508" width="140" height="5" rx="3" fill="${color}" fill-opacity="0.25"/>
    <rect x="30" y="520" width="160" height="5" rx="3" fill="${color}" fill-opacity="0.2"/>
    <text x="195" y="618" font-size="13" text-anchor="middle"
      font-family="system-ui, monospace" fill="${color}" fill-opacity="0.6" letter-spacing="1">
      ${label.toUpperCase()}
    </text>
    ${dots}
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
