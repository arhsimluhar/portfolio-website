import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SITE } from '../data'
import SocialIcons from './SocialIcons'

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
          <SocialIcons />
        </div>

        <nav className="side-nav" aria-label="Primary">
          <NavLink to="/" end>Home</NavLink>
          <Link to="/#about">About</Link>
          <Link to="/#skills">Skills</Link>
          <Link to="/#experience">Experience</Link>
          <Link to="/#featured">Projects</Link>
          <Link to="/#writing">Writing</Link>
          <Link to="/#contact">Contact</Link>
          <NavLink to="/projects">All Projects</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/resume">Resume</NavLink>
        </nav>

        <div className="side-actions">
          <button className="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle dark mode">Theme</button>
          <Link className="button button--primary" to="/#contact">Contact</Link>
        </div>
      </aside>

      <header className="topbar">
        <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}>Menu</button>
        <nav className={`site-nav ${open ? 'open' : ''}`} aria-label="Mobile">
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
          <NavLink to="/resume" onClick={() => setOpen(false)}>Resume</NavLink>
          <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Theme</button>
        </nav>
      </header>

      <main className="content">
        <Outlet />
        <footer className="site-footer">
          <div>(c) <span id="year"></span> {SITE.name} - {SITE.title}</div>
          <div className="footer-links">
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
        </footer>
      </main>
    </div>
  )
}









