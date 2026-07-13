# 🌿 Sabina Kasumova — Portfolio

> Personal developer portfolio built with React, TypeScript, Vite and TailwindCSS.

**Live:** [portfolio-sabina-kasumova.vercel.app](https://portfolio-sabina-kasumova.vercel.app)

<img height="400" alt="image" src="https://github.com/user-attachments/assets/aa4bf59e-e789-4bce-81ba-a1c79e2bfcaf" />

---

## Features

- **Parallax scrolling** — Hero section layers (background grid, text, avatar) move at different speeds on scroll using Framer Motion `useScroll` + `useSpring`
- **Animated ring avatar** — SVG ring built with a custom `requestAnimationFrame` loop; segments morph in size and rotate with random speed bursts
- **Experience timeline** — vertical line that fills with green as you scroll, with sticky date labels and staggered card reveals
- **Tech stack marquee** — two rows of technology icons scrolling in opposite directions, infinite and seamless
- **Projects list** — hover reveals a floating project screenshot; title colour sweeps left→right via `clip-path`; external link icon draws itself stroke by stroke
- **Education cards** — two cards with blur fade-in entrance and hover lift effect
- **Contact section** — corner bracket animation on hover, glowing CTA button, `mailto:` link
- **Footer** — blurred large name treatment, animated underline nav links, smooth scroll on click
- **i18n** — language switching (Russian / English / 日本語) via `react-i18next`
- **Custom scrollbar** — thin green gradient scrollbar matching the site accent colour

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | TailwindCSS v4 |
| Animation | Framer Motion |
| i18n | react-i18next |
| Hosting | Vercel |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

Output goes to `dist/`. Deploy the contents of that folder to any static host.

---

## Deployment

The project is deployed on **Vercel** with zero configuration — Vercel auto-detects Vite and sets the correct build command (`npm run build`) and output directory (`dist`).

To deploy your own fork:

1. Push the repo to GitHub
2. Import it on [vercel.com](https://vercel.com)
3. Click **Deploy** — done

---

## Contact

**Sabina Kasumova** — Frontend Developer  
[nikolnikto330@gmail.com](mailto:nikolnikto330@gmail.com)  
[portfolio-sabina-kasumova.vercel.app](https://portfolio-sabina-kasumova.vercel.app)

---
