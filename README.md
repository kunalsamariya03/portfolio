# Kunal Samariya — Portfolio

A premium, matte-navy glassmorphism portfolio built with React, Vite, and Tailwind CSS. Features
a radial "skill tree" that maps the full technical stack as branching, dashed connections.

## Stack

- React 18 + Vite
- Tailwind CSS
- lucide-react icons
- Fonts: Fraunces (display), Inter (body), JetBrains Mono (labels/mono accents)

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build outputs to `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages, or
any static host.

## Project structure

```
src/
  assets/            → avatar.jpg, project-social.jpg
  components/
    ui/
      GlassPanel.jsx      → reusable frosted-glass container
      SectionHeading.jsx  → eyebrow + title heading pattern
    Nav.jsx
    Hero.jsx
    About.jsx
    SkillTree.jsx    → the branching skill-tree visualization
    Projects.jsx
    Achievements.jsx → hackathon/achievement timeline
    Contact.jsx       → contact form (front-end only, see below)
    Footer.jsx
  data.js             → all resume content (profile, skills, projects, timeline)
  App.jsx
  main.jsx
  index.css
tailwind.config.js     → color tokens, fonts, animation keyframes
```

## Things to connect before going live

1. **Resume download** — the "Resume" button in the hero links to `/resume.pdf`. Drop your resume
   PDF into the `public/` folder as `resume.pdf`, or update the `href` in `Hero.jsx`.
2. **Contact form** — `Contact.jsx` currently only shows a "sent" confirmation locally. Wire the
   `submit` handler up to a service like [Formspree](https://formspree.io) or
   [EmailJS](https://www.emailjs.com), or your own backend endpoint.
3. **Project images** — only the Social Media App project has a real screenshot. Add
   photos/screenshots for the Ventilator and Drone projects to `src/assets/` and reference them in
   `data.js` + `Projects.jsx`.
4. **Content** — all resume text lives in `src/data.js`. Edit there — no need to touch components.

## Customizing the theme

Colors, fonts, and animation timing are all defined as tokens in `tailwind.config.js`
(`navy`, `blush` color scales) and `src/index.css`. Change the hex values there to retint the
whole site consistently.
