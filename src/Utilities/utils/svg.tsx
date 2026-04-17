// Inline SVG data URI generators — zero network requests, always renders.

function screenLayout(kind: number, color: string, accent: string): string {
  if (kind === 0) {
    return `
      <rect x="20" y="132" width="350" height="120" rx="18" fill="${color}" fill-opacity="0.14" />
      <rect x="38" y="154" width="190" height="8" rx="4" fill="${color}" fill-opacity="0.75" />
      <rect x="38" y="170" width="125" height="6" rx="3" fill="${color}" fill-opacity="0.3" />
      <rect x="38" y="194" width="145" height="40" rx="12" fill="${accent}" fill-opacity="0.25" />
      <circle cx="305" cy="192" r="34" fill="${accent}" fill-opacity="0.22" />
      <rect x="20" y="272" width="168" height="90" rx="14" fill="${color}" fill-opacity="0.09" />
      <rect x="202" y="272" width="168" height="90" rx="14" fill="${accent}" fill-opacity="0.1" />
      <rect x="20" y="380" width="350" height="165" rx="18" fill="#ffffff" fill-opacity="0.7" />
      <rect x="35" y="400" width="120" height="7" rx="3.5" fill="${color}" fill-opacity="0.45" />
      <rect x="35" y="414" width="80" height="5" rx="2.5" fill="${color}" fill-opacity="0.22" />
      <rect x="35" y="434" width="320" height="34" rx="10" fill="${color}" fill-opacity="0.08" />
      <rect x="35" y="476" width="320" height="34" rx="10" fill="${color}" fill-opacity="0.08" />
      <rect x="35" y="518" width="320" height="34" rx="10" fill="${color}" fill-opacity="0.08" />
    `
  }
  if (kind === 1) {
    return `
      <rect x="20" y="132" width="350" height="210" rx="18" fill="#ffffff" fill-opacity="0.75" />
      <rect x="38" y="154" width="95" height="8" rx="4" fill="${color}" fill-opacity="0.7" />
      <rect x="38" y="171" width="70" height="5" rx="2.5" fill="${color}" fill-opacity="0.25" />
      <path d="M38 280 C92 210, 132 240, 184 200 C238 160, 282 220, 340 170" stroke="${accent}" stroke-width="5" fill="none" stroke-linecap="round" />
      <circle cx="184" cy="200" r="6" fill="${accent}" />
      <circle cx="282" cy="220" r="6" fill="${accent}" />
      <rect x="20" y="360" width="350" height="185" rx="18" fill="${color}" fill-opacity="0.08" />
      <rect x="36" y="380" width="210" height="8" rx="4" fill="${color}" fill-opacity="0.45" />
      <rect x="36" y="396" width="145" height="5" rx="2.5" fill="${color}" fill-opacity="0.25" />
      <rect x="36" y="422" width="334" height="42" rx="11" fill="#ffffff" fill-opacity="0.85" />
      <rect x="36" y="472" width="334" height="42" rx="11" fill="#ffffff" fill-opacity="0.85" />
    `
  }
  if (kind === 2) {
    return `
      <rect x="20" y="132" width="350" height="160" rx="18" fill="${accent}" fill-opacity="0.14" />
      <rect x="38" y="152" width="130" height="8" rx="4" fill="${accent}" fill-opacity="0.72" />
      <rect x="38" y="168" width="95" height="5" rx="2.5" fill="${accent}" fill-opacity="0.3" />
      <rect x="38" y="194" width="334" height="78" rx="12" fill="#ffffff" fill-opacity="0.78" />
      <rect x="56" y="214" width="120" height="8" rx="4" fill="${color}" fill-opacity="0.4" />
      <rect x="56" y="230" width="90" height="5" rx="2.5" fill="${color}" fill-opacity="0.2" />
      <rect x="20" y="312" width="170" height="230" rx="18" fill="#ffffff" fill-opacity="0.75" />
      <rect x="200" y="312" width="170" height="230" rx="18" fill="#ffffff" fill-opacity="0.75" />
      <rect x="34" y="334" width="142" height="110" rx="12" fill="${color}" fill-opacity="0.1" />
      <rect x="214" y="334" width="142" height="110" rx="12" fill="${accent}" fill-opacity="0.12" />
      <rect x="34" y="456" width="108" height="7" rx="3.5" fill="${color}" fill-opacity="0.35" />
      <rect x="214" y="456" width="108" height="7" rx="3.5" fill="${accent}" fill-opacity="0.35" />
    `
  }
  return `
    <rect x="20" y="132" width="350" height="410" rx="20" fill="#ffffff" fill-opacity="0.78" />
    <rect x="38" y="152" width="150" height="8" rx="4" fill="${color}" fill-opacity="0.65" />
    <rect x="38" y="170" width="98" height="5" rx="2.5" fill="${color}" fill-opacity="0.25" />
    <rect x="38" y="198" width="334" height="64" rx="12" fill="${color}" fill-opacity="0.1" />
    <rect x="52" y="220" width="120" height="8" rx="4" fill="${color}" fill-opacity="0.38" />
    <rect x="52" y="236" width="85" height="5" rx="2.5" fill="${color}" fill-opacity="0.2" />
    <rect x="38" y="276" width="334" height="64" rx="12" fill="${accent}" fill-opacity="0.12" />
    <rect x="52" y="298" width="120" height="8" rx="4" fill="${accent}" fill-opacity="0.5" />
    <rect x="52" y="314" width="85" height="5" rx="2.5" fill="${accent}" fill-opacity="0.26" />
    <rect x="38" y="354" width="334" height="64" rx="12" fill="${color}" fill-opacity="0.08" />
    <rect x="38" y="432" width="334" height="92" rx="14" fill="${accent}" fill-opacity="0.08" />
    <circle cx="86" cy="478" r="16" fill="${accent}" fill-opacity="0.3" />
    <rect x="112" y="468" width="160" height="7" rx="3.5" fill="${accent}" fill-opacity="0.35" />
    <rect x="112" y="482" width="100" height="5" rx="2.5" fill="${accent}" fill-opacity="0.2" />
  `
}

export function svgIcon(color: string, accent: string, mark: string): string {
  const glyph = (mark || 'MS').slice(0, 2).toUpperCase()
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color}" />
        <stop offset="100%" stop-color="${accent}" />
      </linearGradient>
      <linearGradient id="gloss" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="184" height="184" rx="44" fill="url(#bg)" />
    <rect x="8" y="8" width="184" height="96" rx="44" fill="url(#gloss)" />
    <circle cx="52" cy="48" r="34" fill="#ffffff" fill-opacity="0.12" />
    <circle cx="164" cy="164" r="44" fill="#000000" fill-opacity="0.08" />
    <text x="100" y="120" text-anchor="middle" font-family="Inter, Arial, sans-serif"
      font-size="64" font-weight="800" letter-spacing="1.2" fill="#ffffff">${glyph}</text>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export function svgScreen(color: string, accent: string, label: string, index: number): string {
  const dots = [0, 1, 2, 3].map((i) =>
    `<circle cx="${174 + i * 14}" cy="784" r="3.5" fill="${i === index % 4 ? accent : '#94a3b8'}" fill-opacity="${i === index % 4 ? 0.9 : 0.3}" />`
  ).join('')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="390" height="844" viewBox="0 0 390 844">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8f3ea" />
        <stop offset="100%" stop-color="#efe4d4" />
      </linearGradient>
    </defs>
    <rect width="390" height="844" fill="url(#bg)" />
    <circle cx="314" cy="86" r="140" fill="${accent}" fill-opacity="0.1" />
    <circle cx="84" cy="712" r="120" fill="${color}" fill-opacity="0.08" />

    <rect x="20" y="26" width="350" height="38" rx="12" fill="#ffffff" fill-opacity="0.75" />
    <text x="40" y="49" font-size="12" font-family="Inter, Arial, sans-serif" fill="#2f2922">9:41</text>
    <rect x="286" y="39" width="62" height="12" rx="6" fill="#2f2922" fill-opacity="0.12" />

    <rect x="20" y="76" width="350" height="44" rx="14" fill="#ffffff" fill-opacity="0.82" />
    <text x="36" y="103" font-size="16" font-family="Inter, Arial, sans-serif" font-weight="700" fill="#2f2922">${label}</text>

    ${screenLayout(index % 4, color, accent)}

    <rect x="20" y="740" width="350" height="72" rx="18" fill="#ffffff" fill-opacity="0.82" />
    <rect x="60" y="768" width="48" height="8" rx="4" fill="${color}" fill-opacity="0.55" />
    <rect x="170" y="768" width="48" height="8" rx="4" fill="${accent}" fill-opacity="0.55" />
    <rect x="280" y="768" width="48" height="8" rx="4" fill="${color}" fill-opacity="0.3" />
    ${dots}
  </svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
