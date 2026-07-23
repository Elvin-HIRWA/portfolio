# Elvin Hirwa — Portfolio

Personal landing page built for the MailerLite Backend Engineer job application.

## Stack

- **React 19** + **Vite 5**
- **Tailwind CSS 3** with custom design tokens
- **Framer Motion** — animations throughout
- **Lucide React** — icons
- **react-type-animation** — hero typewriter effect
- **react-countup** — animated statistics
- **react-intersection-observer** — scroll-triggered animations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

Option 1 — Vercel CLI:
```bash
npm i -g vercel
vercel
```

Option 2 — Push to GitHub, import in [vercel.com/new](https://vercel.com/new). Zero configuration required.

## Project Structure

```
src/
├── components/       # Reusable UI atoms
│   ├── Badge.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── CursorGlow.jsx
│   ├── GradientBorder.jsx
│   ├── MouseFollower.jsx
│   ├── Pill.jsx
│   ├── ProgressBar.jsx
│   ├── ScrollProgress.jsx
│   └── SectionHeader.jsx
├── data/             # Static content (projects, skills, timeline)
│   └── index.js
├── hooks/            # Custom React hooks
│   ├── useActiveSection.js
│   ├── useMouseGlow.js
│   ├── usePrefersReducedMotion.js
│   └── useScrollProgress.js
├── layouts/          # Page layout wrapper
│   └── RootLayout.jsx
├── sections/         # Page sections (one per component)
│   ├── Challenge.jsx
│   ├── Contact.jsx
│   ├── FunSection.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Stats.jsx
│   ├── TechCloud.jsx
│   ├── Timeline.jsx
│   └── WhyIBuild.jsx
├── styles/
│   └── globals.css
├── utils/
│   ├── cn.js         # Class name utility
│   └── variants.js   # Framer Motion variants
├── App.jsx
└── main.jsx
```

## Customization

All content lives in `src/data/index.js`. Update:
- `projects` — your project cards
- `skillGroups` — skills and percentages
- `timelineItems` — work history
- `stats` — counter numbers
- Contact links in `src/sections/Contact.jsx`

## Features

- Sticky glassmorphism navigation with active section tracking
- Full-screen hero with typewriter subtitle animation
- Animated stat counters (CountUp on scroll)
- AcademicBridge v2 technical challenge case study
- Project cards with hover glow effects
- Animated skill progress bars
- Parallax "Why I Build" section
- Professional timeline (alternating layout on desktop)
- Floating technology pills cloud
- Contact CTA with gradient border
- Scroll progress indicator
- Cursor glow + mouse follower
- Dark/light mode toggle (persisted to localStorage)
- Fully responsive (mobile, tablet, desktop)
- ARIA labels and semantic HTML throughout
- SEO meta, Open Graph, Twitter Cards
- `robots.txt` + `sitemap.xml`
- Zero-config Vercel deployment
