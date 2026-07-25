# 🚀 Kunal Samariya — Portfolio

A premium, matte-navy glassmorphism portfolio built with **React 18**, **Vite**, and **Tailwind CSS**. It features interactive sections, a radial skill tree, EmailJS integration for direct contact messages, and seamless resume downloading.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend:** React 18, Vite, Tailwind CSS
- **Icons:** `lucide-react`
- **Form Handling:** `@emailjs/browser`
- **Typography:** Fraunces (Display), Inter (Body), JetBrains Mono (Accents)
- **Deployment:** Vercel

---

## ✨ Features

- **⚡ High Performance:** Lightning-fast load times powered by Vite.
- **📄 Instant Resume Download:** Pre-configured PDF download in the Hero section.
- **✉️ Working Contact Form:** Directly sends emails to inbox via EmailJS.
- **🌴 Interactive Skill Tree:** Visualized radial branch mapping out full-stack & hardware competencies.
- **🎨 Custom Matte Navy Theme:** Modern glassmorphism UI with custom glow/blur effects.

---

## 📁 Project Structure

```text
src/
  assets/            → avatar, project screenshots
  components/
    ui/
      GlassPanel.jsx      → Frosted-glass container component
      SectionHeading.jsx  → Eyebrow + title section layout
    Nav.jsx
    Hero.jsx         → Hero banner + Resume download button
    About.jsx
    SkillTree.jsx    → Radial branching skill-tree visualization
    Projects.jsx     → Showcasing Full-Stack & IoT projects
    Achievements.jsx → Hackathon and milestone timeline
    Contact.jsx      → EmailJS integrated contact form
    Footer.jsx
  data.js            → Centralized content (profile, skills, projects)
  App.jsx
  main.jsx
  index.css          → Custom animations & tailwind directives
tailwind.config.js   → Design tokens (navy, blush scales, fonts)
public/
  resume.pdf         → Resume file for instant download
🚀 Getting Started Locally


Clone the repository:

Bash
git clone [https://github.com/kunalsamariya03/portfolio.git](https://github.com/kunalsamariya03/portfolio.git)
cd portfolio
Install dependencies:

Bash
npm install
Set up Environment Variables:
Create a .env file in the root directory and add your EmailJS keys:

Code snippet
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key


Run development server:

Bash
npm run dev
📦 Production Build
Bash
npm run build
npm run preview   # Preview production build locally
The output build will be in the dist/ directory, ready to be deployed on Vercel or Netlify.

📬 Connect With Me
GitHub: @kunalsamariya03

LinkedIn: Kunal Samariya