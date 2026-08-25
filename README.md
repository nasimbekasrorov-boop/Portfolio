# Junior Frontend Developer Portfolio

A minimalist, editorial, black & white portfolio for a junior frontend developer — built with React, Vite and Tailwind CSS. Includes dark/light mode, UZ/EN language switching, an interactive terminal page, and a dedicated projects page.

## Features

- **Editorial, monochrome design** — large outlined typography, generous whitespace, no gradients or heavy shadows
- **Dark / Light mode** with a smooth transition, saved to `localStorage`
- **UZ / EN language switch**, saved to `localStorage`, powered by a single translations file
- **Interactive terminal page** with real commands (`help`, `about`, `skills`, `projects`, `experience`, `education`, `contact`, `social`, `whoami`, `clear`), command history (↑ / ↓) and tab-completion
- **Dedicated projects page** with an easy-to-edit project list
- **Fully responsive** from 320px up to large desktop, no horizontal scroll
- **Accessible** — semantic HTML, visible focus states, aria-labels, respects `prefers-reduced-motion`
- **Frontend-only contact form** — ready to be wired up to your backend or a service like Formspree / EmailJS

## Tech stack

React 18 · Vite · Tailwind CSS · React Router · lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is output to `dist/`.

## Project structure

```
src/
  components/
    Navbar.jsx           Sticky nav with mobile menu, theme + language switch
    Hero.jsx              Big-typography hero section
    About.jsx              Editorial "about" section
    Skills.jsx              Skill list (no fake percentages)
    Experience.jsx      "Learning journey" experience block
    Learning.jsx           "Currently learning" list
    Contact.jsx             Contact section + form
    Footer.jsx
    ThemeToggle.jsx
    LanguageSwitcher.jsx
    ProjectCard.jsx        Single project row (used on the Projects page)
    Terminal.jsx             The interactive terminal widget
    ScrollToTop.jsx        Scrolls to top / anchors on route change
  pages/
    Home.jsx                  Hero + About + Skills + Experience + Learning + Contact
    ProjectsPage.jsx     /projects route
    TerminalPage.jsx     /terminal route
  data/
    profile.js              Your name, role, location, email, social links
    projects.js             Project list (title, tech, links)
    skills.js                  Skill list
    translations.js       All UI copy, in English and Uzbek
  context/
    ThemeContext.jsx     Dark/light mode state + localStorage
    LanguageContext.jsx   UZ/EN state + localStorage
  App.jsx
  main.jsx
  index.css
```

## Customization guide

### 1. Your personal info
Edit `src/data/profile.js`:

```js
export const profile = {
  name: 'Your Name',
  firstName: 'Your',
  role: 'Frontend Developer',
  country: 'Uzbekistan',
  city: 'Samarkand',
  year: '2026',
  email: 'youremail@example.com',
  telegram: 'https://t.me/yourusername',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  instagram: 'https://instagram.com/yourusername',
}
```

### 2. Projects
Edit `src/data/projects.js` — add, remove, or edit entries. Set `image` to a path (e.g. `/projects/todo.png`, dropped into `public/projects/`) once you have real screenshots; leave it `null` for a text placeholder.

### 3. Text content / translations
All copy lives in `src/data/translations.js`, split into `en` and `uz`. Both languages mirror the same structure, so add a key to both when you add new copy.

To change the **default language**, open `src/context/LanguageContext.jsx` and change:

```js
const DEFAULT_LANGUAGE = 'uz' // change to 'en' if you prefer
```

### 4. Terminal commands
Command output text lives under `terminal.commands` in `src/data/translations.js`. To add a brand-new command, add its text there and add a `case` for it in `src/components/Terminal.jsx`.

### 5. Colors
Colors are CSS variables in `src/index.css` (`:root` for dark, `.light` for light mode). Change the hex values there to re-theme the whole site.

### 6. Fonts
Loaded from Google Fonts in `index.html` (Space Grotesk for display type, Inter for body text, JetBrains Mono for labels/terminal) and mapped in `tailwind.config.js` under `theme.extend.fontFamily`.

## Notes

- The contact form is frontend-only — it shows a success message on submit but doesn't send anywhere yet. Connect it to a form backend (Formspree, EmailJS, your own API route, etc.) when you're ready.
- No fake skill percentages are used, on purpose — skill level is hard to quantify honestly, so short descriptions are used instead.
