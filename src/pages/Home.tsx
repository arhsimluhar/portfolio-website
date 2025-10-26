import { PROJECTS, POSTS, SKILLS, SITE } from '../data'
import { Link } from 'react-router-dom'

import { useReveal } from '../hooks/useReveal'
import SocialIcons from '../components/SocialIcons'

export default function Home() {
  useReveal()
  const featured = PROJECTS.filter(p => p.featured).slice(0, 6)
  const latest = POSTS.slice(0, 3)

  return (
    <>
      <section className="hero reveal" id="top">
        <div className="hero-content">
          <h1>Engineering secure, scalable software that delivers.</h1>
          <p className="lead">Principal Software Engineer with 8+ years across backend systems, distributed architectures, and cloud‑native infrastructure. I drive engineering excellence, performance, and DevSecOps adoption—mentoring teams and building systems that last.</p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/projects">View Projects</Link>
            <Link className="button" to="/#contact">Get in Touch</Link>
          </div>
          <ul className="hero-highlights">
            <li>8+ years, backend & cloud</li>
            <li>Security champion & platform engineering</li>
            <li>Based in {SITE.location}</li>
          </ul>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orb" />
          <div className="grid" />
        </div>
      </section>

      <section id="about" className="section reveal">
        <h2>About</h2>
        <p>I connect business goals to engineering strategy with a bias for simple architectures, reliable operations, and strong engineering culture. Proven record driving performance, cost optimization, and secure software design.</p>
        <div className="quick-cards">
          <div className="card">
            <h3>Leadership</h3>
            <p>Technical direction, hiring and mentoring, cross‑functional alignment, pragmatic RFCs and design reviews.</p>
          </div>
          <div className="card">
            <h3>Architecture</h3>
            <p>Distributed systems, data access layers, event‑driven design, API platforms, observability.</p>
          </div>
          <div className="card">
            <h3>Delivery</h3>
            <p>Secure SDLC, paved‑road CI/CD, incremental migrations, SLOs, root‑cause analysis.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section reveal">
        <h2>Skills</h2>
        <div className="grid-3">
          <div>
            <h3>Languages</h3>
            <ul className="tag-list">{SKILLS.languages.map(s => <li key={s}>{s}</li>)}</ul>
          </div>
          <div>
            <h3>Cloud & DevOps</h3>
            <ul className="tag-list">{SKILLS.cloudDevOps.map(s => <li key={s}>{s}</li>)}</ul>
          </div>
          <div>
            <h3>DBs & Tools</h3>
            <ul className="tag-list">{[...SKILLS.databases, ...SKILLS.frameworksTools].map(s => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="experience" className="section reveal">
        <h2>Experience</h2>
        <ol className="timeline">
          <li>
            <div className="timeline-item">
              <div className="timeline-meta">Dec 2024 — Present • Autodesk, Bangalore</div>
              <h3>Principal Software Engineer</h3>
              <p>Lead a team of 6 engineers to deliver backend services end‑to‑end; improved release velocity by 50% and reduced security incidents by ~40% via secure SDLC and paved‑road CI/CD.</p>
            </div>
          </li>
          <li>
            <div className="timeline-item">
              <div className="timeline-meta">Nov 2019 — Nov 2024 • Autodesk</div>
              <h3>Senior Software Engineer</h3>
              <p>Designed an internal security and license‑compliance system detecting 1M+ non‑compliant users; recovered &gt;$16M. Championed enterprise security practices.</p>
            </div>
          </li>
          <li>
            <div className="timeline-item">
              <div className="timeline-meta">Jul 2016 — 2019</div>
              <h3>Software Engineer</h3>
              <p>Engineered detection and analytics systems; migrated legacy to modular services; improved testing and CI/CD to boost developer productivity.</p>
            </div>
          </li>
        </ol>
        <div className="section-cta">
          <Link className="button" to="/resume">View Resume</Link>
          <Link className="button button--ghost" to="/projects">Explore Projects</Link>
        </div>
      </section>

      <section id="awards" className="section reveal">
        <h2>Awards & Certifications</h2>
        <ul className="list">
          <li className="card">Applause Recognition — Autodesk: Awarded for key contributions to renewing client accounts worth $300M.</li>
          <li className="card">Autobooks Awards — Autodesk: Recognized for leading strategic initiatives with measurable business and operational impact.</li>
        </ul>
      </section>

      <section id="featured" className="section reveal">
        <h2>Featured Projects</h2>
        <div className="card-grid">
          {featured.map(p => (
            <article className="card reveal" key={p.id}>
              <div className="muted">{p.year}</div>
              <h3>{p.name}</h3>
              <p className="muted">{p.summary}</p>
              <ul className="tag-list">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
              <div className="section-cta">
                <a className="button" href={p.link || '#'}>Details</a>
              </div>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Link className="button" to="/projects">All Projects</Link>
        </div>
      </section>

      <section id="writing" className="section reveal">
        <h2>Latest Writing</h2>
        <div className="list">
          {latest.map(post => {
            const href = (post.href || '#').startsWith('/') ? (import.meta.env.BASE_URL + (post.href || '#').slice(1)) : (post.href || '#')
            return (
            <article className="post-item reveal" key={post.slug}>
              <a href={href}><h3>{post.title}</h3></a>
              <div className="meta">{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' })}</div>
              <p className="muted">{post.description}</p>
              <ul className="tag-list">{post.tags?.map(t => <li key={t}>{t}</li>)}</ul>
            </article>
          )})}
        </div>
        <div className="section-cta">
          <Link className="button button--ghost" to="/blog">All Posts</Link>
        </div>
      </section>

      <section id="contact" className="section reveal">
        <h2>Contact</h2>
        <p>Interested in collaborating or just want to say hi? Reach out:</p>
        <SocialIcons showLabels />
      </section>
    </>
  )
}
