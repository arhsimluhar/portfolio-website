# Principal Software Engineer — Portfolio (React + Vite)

A fast, accessible, responsive SPA built with React, TypeScript, and Vite. Routes are handled client‑side with React Router, content is driven by `src/data.ts`, and the site is ready to deploy to GitHub Pages.

## Requirements

- Node.js 18+ and npm

## Install & Run

1) Install dependencies
   - `npm ci` (preferred) or `npm install`

2) Start the dev server
   - `npm run dev`
   - Vite serves at the shown URL (typically `http://localhost:5173`). Hot reload is enabled.

## Build

- `npm run build` — creates a production build in `dist/`
- `npm run preview` — locally preview the production build (uses the same base path as prod)

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml` that builds and deploys on pushes to `main`.

Before first deploy:
- Ensure the `base` in `vite.config.ts` matches your repository name: set to `/<repo-name>/` (for example, `'/portfolio-website/'`).
- In your repo settings, under Pages, set Source to “GitHub Actions”.

Deploy steps:
- Push to `main` (or trigger the workflow manually). The action:
  - Installs dependencies and runs `npm run build`
  - Copies `dist/index.html` to `dist/404.html` for SPA fallback
  - Publishes `dist/` to GitHub Pages

Custom domain:
- If you configure a custom domain in Pages, you can change `base` in `vite.config.ts` to `'/'` so links resolve from the root domain.

Manual deploy (alternative):
- `npm run build`
- Publish the `dist/` directory to a static host, or push it to a `gh-pages` branch (e.g., using `git subtree` or a deploy script).

## Project Structure

- `index.html` — HTML entry point with `<div id="root"></div>` and Vite script
- `src/main.tsx` — App bootstrap and `BrowserRouter` with `basename` derived from Vite `BASE_URL`
- `src/App.tsx` — Route definitions
- `src/pages/*` — Pages: Home, Projects, Blog, Resume
- `src/components/*` — Shared layout and components
- `src/styles.css` — Global styles (light/dark via `data-theme`)
- `src/data.ts` — Site metadata, skills, projects, and posts
- `public/posts/` — Static HTML posts copied to build (e.g., `public/posts/hello-world.html`)

Notes:
- The GitHub Pages base path is set in `vite.config.ts` (`base: '/portfolio-website/'`). Update it if your repo name changes.
- For SPA routing on GitHub Pages, the workflow creates `dist/404.html` so deep links work.

## Customize

- Update profile, contact links, and metadata in `src/data.ts` (`SITE`, `SKILLS`).
- Add or edit projects in `src/data.ts` (`PROJECTS`).
- Add blog entries in `src/data.ts` (`POSTS`). Link to static posts in `posts/` or to external URLs.
- Modify content and sections under `src/pages/`.
- Adjust styling in `src/styles.css`.
