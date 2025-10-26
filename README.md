# Principal Software Engineer — Portfolio

A fast, accessible, and responsive static site to showcase skills, experience, projects, and writing. No build tools required — plain HTML/CSS/JS.

## Structure

- `index.html` — Home with About, Skills, Experience, Featured Projects, Latest Writing, Contact
- `projects.html` — Filterable projects gallery
- `blog.html` — Blog index
- `posts/hello-world.html` — Sample blog post template
- `resume.html` — Simple resume page (export to PDF via browser)
- `assets/css/styles.css` — Global styles (light/dark via data-theme)
- `assets/js/data.js` — Sample data (projects and posts)
- `assets/js/main.js` — Theme toggle, mobile nav, page rendering

## Customize

1. Update profile, contact links, and copy in `index.html: About`, `Skills`, and `Experience` sections.
2. Edit sample data in `assets/js/data.js` (projects, posts). Add tags, years, links.
3. Add new blog posts by copying `posts/hello-world.html` and adding an entry to `POSTS` in `assets/js/data.js`.
4. Update site name and title in `assets/js/data.js` under `SITE`.
5. Swap the logo glyph in the header (currently `⟡`) with your own or an SVG.

## Run locally

Open `index.html` directly, or serve via a local server for best results:

- Python: `python -m http.server 8000`
- Node: `npx serve` (if installed)

Then visit `http://localhost:8000`.

Note: Fetching JSON from the filesystem is blocked in many browsers; this site embeds data in JS to avoid that requirement.

## Notes

- Accessible, semantic HTML; keyboard-friendly navigation.
- Dark mode respects system preference and persists via localStorage.
- Minimal, modern CSS with design tokens and responsive layout.

