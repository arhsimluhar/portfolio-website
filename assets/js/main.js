// Theme handling
(function themeInit() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const stored = localStorage.getItem('theme');
  const theme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Header behavior
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const open = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Normalize Home links to the static home.html so navigation works without the React dev server
  const brandLink = document.querySelector('a.brand');
  if (brandLink && brandLink.getAttribute('href') === 'index.html') {
    brandLink.setAttribute('href', 'home.html');
  }
  document.querySelectorAll('a[href^="index.html#"]').forEach((a) => {
    const hash = a.getAttribute('href').slice('index.html'.length);
    a.setAttribute('href', `home.html${hash}`);
  });
  document.querySelectorAll('a[href="index.html"]').forEach((a) => a.setAttribute('href', 'home.html'));
});

// Rendering helpers
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else node.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c == null) return;
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return node;
}

// Index: Featured Projects
function renderFeaturedProjects() {
  const root = document.getElementById('featuredProjects');
  if (!root) return;
  const featured = PROJECTS.filter(p => p.featured).slice(0, 6);
  root.innerHTML = '';
  featured.forEach(p => root.appendChild(projectCard(p)));
}

// Index: Latest Posts
function renderLatestPosts() {
  const root = document.getElementById('latestPosts');
  if (!root) return;
  const latest = POSTS.slice(0, 3);
  root.innerHTML = '';
  latest.forEach(post => root.appendChild(postListItem(post)));
}

// Projects page
function renderProjectsPage() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;
  const chips = document.querySelectorAll('.chip');
  function render(filter) {
    grid.innerHTML = '';
    const items = PROJECTS.filter(p => filter === 'all' || p.tags.includes(filter));
    items.forEach(p => grid.appendChild(projectCard(p)));
  }
  chips.forEach(ch => ch.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    ch.classList.add('active');
    render(ch.dataset.filter);
  }));
  const initial = (new URLSearchParams(location.search).get('tag')) || 'all';
  const initialChip = Array.from(chips).find(c => c.dataset.filter === initial) || chips[0];
  initialChip.click();
}

// Blog index
function renderBlogIndex() {
  const list = document.getElementById('postList');
  if (!list) return;
  list.innerHTML = '';
  POSTS.forEach(p => list.appendChild(postListItem(p)));
}

// Components
function projectCard(p) {
  const tagList = el('ul', { class: 'tag-list' }, p.tags.map(t => el('li', {}, t)));
  return el('article', { class: 'card' }, [
    el('div', { class: 'muted' }, String(p.year)),
    el('h3', {}, p.name),
    el('p', { class: 'muted' }, p.summary),
    tagList,
    el('div', { class: 'section-cta' }, [
      el('a', { class: 'button', href: p.link || '#' }, 'Details'),
      el('a', { class: 'button button--ghost', href: `projects.html?tag=${encodeURIComponent(p.tags[0] || 'all')}` }, 'Similar'),
    ]),
  ]);
}

function postListItem(p) {
  const date = new Date(p.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
  const tags = el('ul', { class: 'tag-list' }, (p.tags || []).map(t => el('li', {}, t)));
  return el('article', { class: 'post-item' }, [
    el('a', { href: p.href || '#' }, [
      el('h3', {}, p.title),
    ]),
    el('div', { class: 'meta' }, date),
    el('p', { class: 'muted' }, p.description || ''),
    tags,
  ]);
}

// Expose functions for inline calls in HTML
window.renderFeaturedProjects = renderFeaturedProjects;
window.renderLatestPosts = renderLatestPosts;
window.renderProjectsPage = renderProjectsPage;
window.renderBlogIndex = renderBlogIndex;
