import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SITE } from '../data'

export default function Layout() {
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const yearEl = document.getElementById('year')
    if (yearEl) yearEl.textContent = String(new Date().getFullYear())
  }, [])

  // Smoothly scroll to hash targets when route changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // Ensure top when navigating to new pages
      window.scrollTo({ top: 0 })
    }
  }, [location])

  return (
    <div className="shell container">
      <aside className="sidebar">
        <div className="profile">
          <div className="avatar" aria-hidden="true">
            <div className="ring"></div>
            <div className="photo" title={SITE.name}>{SITE.name[0]}</div>
          </div>
          <div className="identity">
            <div className="name">{SITE.name}</div>
            <div className="role">{SITE.title}</div>
          </div>
          <div className="social">
            <a aria-label="GitHub" href="#" target="_blank" rel="noopener" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.19-3.37-1.19-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.1.64-1.36-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
            </a>
            <a aria-label="LinkedIn" href="#" target="_blank" rel="noopener" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.44 2.44 0 0 1 6.94 6.5zM5 8.75h3.06V20H5zM13.22 8.75h-2.99V20h3.1v-5.77c0-1.52.29-2.99 2.17-2.99 1.86 0 1.89 1.74 1.89 3.09V20H20v-6.46c0-3.17-.68-5.62-4.4-5.62-1.78 0-2.97.97-3.45 1.88h.06z"/></svg>
            </a>
            <a aria-label="X" href="#" target="_blank" rel="noopener" title="X/Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.7 10.3 20.5 3h-1.9l-5.9 6.6L7.7 3H3l7.2 10.3L3 21h1.9l6.3-7.1 5.2 7.1H21l-7.3-10.7z"/></svg>
            </a>
          </div>
        </div>

        <nav className="side-nav" aria-label="Primary">
          <NavLink to="/" end>Home</NavLink>
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#experience">Experience</a>
          <a href="/#featured">Projects</a>
          <a href="/#writing">Writing</a>
          <a href="/#contact">Contact</a>
          <NavLink to="/projects">All Projects</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/resume">Resume</NavLink>
        </nav>

        <div className="side-actions">
          <button className="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle dark mode">🌓 Theme</button>
          <a className="button button--primary" href="/#contact">Contact</a>
        </div>
      </aside>

      <header className="topbar">
        <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}>☰</button>
        <nav className={`site-nav ${open ? 'open' : ''}`} aria-label="Mobile">
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
          <NavLink to="/resume" onClick={() => setOpen(false)}>Resume</NavLink>
          <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>🌓</button>
        </nav>
      </header>

      <main className="content">
        <Outlet />
        <footer className="site-footer">
          <div>© <span id="year"></span> {SITE.name} — {SITE.title}</div>
          <div className="footer-links">
            <a href="/projects">Projects</a>
            <a href="/blog">Blog</a>
          </div>
        </footer>
      </main>
    </div>
  )
}
