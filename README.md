# iOS Developer Portfolio

A polished portfolio site built with **Vite + React + Tailwind CSS v3**.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## Project Structure

```
src/
├── App.jsx                     # Root — layout, global state
├── main.jsx                    # Entry point
├── index.css                   # Tailwind directives + custom utilities
│
├── data/
│   ├── apps.js                 # App portfolio data (iconImage, screenshots)
│   └── skills.js               # Skills, timeline, toolkit, architecture data
│
├── utils/
│   └── svg.js                  # Inline SVG generators (no network needed)
│
├── components/
│   ├── Navbar.jsx
│   ├── AppIcon.jsx             # iOS squircle icon container
│   ├── StoreBadge.jsx          # App Store / Google Play badges
│   ├── AppCard.jsx             # Work grid card
│   ├── AppDetailModal.jsx      # Full detail overlay
│   ├── ScreenshotCarousel.jsx  # Phone frame + swipeable screenshots
│   ├── SkillCard.jsx           # Individual skill with dot proficiency
│   └── SkillGroup.jsx          # Grouped skill category
│
└── sections/
    ├── Hero.jsx
    ├── About.jsx
    ├── Work.jsx
    ├── Skills.jsx
    └── Contact.jsx
```

## Swapping in real images

**App icons** — set `iconImage` in `src/data/apps.js`:
```js
iconImage: 'https://your-cdn.com/app-icon.png',  // 1024×1024 recommended
```

**Screenshots** — set `src` on each screenshot object:
```js
screenshots: [
  { label: 'Home Screen', src: 'https://your-cdn.com/screen1.png' },  // 390×844 portrait
  ...
]
```
When `iconImage` or `src` is `null`, the inline SVG placeholder is used automatically.

## Customising

- **Personal info** — edit `src/sections/Hero.jsx` (name, tagline, stats)
- **Apps** — edit `src/data/apps.js`
- **Skills** — edit `src/data/skills.js`
- **Timeline / experience** — edit `timeline` in `src/data/skills.js`
- **Contact email / social links** — edit `src/sections/Contact.jsx`
- **Colours / fonts / animations** — edit `tailwind.config.js`
