import { PROJECTS, POSTS } from '../data'

import { useReveal } from '../hooks/useReveal'

export default function Home() {
  useReveal()
  const featured = PROJECTS.filter(p => p.featured).slice(0, 6)
  const latest = POSTS.slice(0, 3)

  return (
    <>
      <section className="hero reveal" id="top">
        <div className="hero-content">
          <h1>Building resilient, scalable systems that ship value.</h1>
          <p className="lead">Principal Software Engineer with deep experience in distributed systems, developer platforms, and technical leadership. I design architectures that last and teams that deliver.</p>
          <div className="hero-actions">
            <a className="button button--primary" href="/projects">View Projects</a>
            <a className="button" href="#contact">Get in Touch</a>
          </div>
          <ul className="hero-highlights">
            <li>15+ years in backend & cloud</li>
            <li>Led 10+ mission-critical launches</li>
            <li>OSS maintainer & conference speaker</li>
          </ul>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orb" />
          <div className="grid" />
        </div>
      </section>

      <section id="about" className="section reveal">
        <h2>About</h2>
        <p>I connect business goals to engineering strategy, with a bias for simple architectures, reliable operations, and strong engineering culture. I mentor senior engineers, establish technical direction, and partner cross‑functionally to ship outcomes, not just code.</p>
        <div className="quick-cards">
          <div className="card">
            <h3>Leadership</h3>
            <p>Technical strategy, staff+ growth, cross-functional alignment, RFCs, design reviews.</p>
          </div>
          <div className="card">
            <h3>Architecture</h3>
            <p>Distributed systems, event-driven design, domain modeling, API platforms.</p>
          </div>
          <div className="card">
            <h3>Delivery</h3>
            <p>Incremental migrations, reliability SLOs, incident analysis, Platform/DevEx.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section reveal">
        <h2>Skills</h2>
        <div className="grid-3">
          <div>
            <h3>Core</h3>
            <ul className="tag-list">
              <li>System Design</li>
              <li>Distributed Systems</li>
              <li>APIs & Platforms</li>
              <li>Observability</li>
              <li>Reliability/SRE</li>
            </ul>
          </div>
          <div>
            <h3>Stack</h3>
            <ul className="tag-list">
              <li>Go</li>
              <li>TypeScript/Node</li>
              <li>Python</li>
              <li>Postgres</li>
              <li>Kafka</li>
              <li>Redis</li>
            </ul>
          </div>
          <div>
            <h3>Cloud</h3>
            <ul className="tag-list">
              <li>AWS</li>
              <li>Kubernetes</li>
              <li>Terraform</li>
              <li>CI/CD</li>
              <li>Security/Compliance</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="section reveal">
        <h2>Experience</h2>
        <ol className="timeline">
          <li>
            <div className="timeline-item">
              <div className="timeline-meta">2021 — Present</div>
              <h3>Principal Engineer — Acme Corp</h3>
              <p>Led platform modernization to event-driven architecture, reducing lead time by 40% and increasing reliability to 99.95% SLO.</p>
            </div>
          </li>
          <li>
            <div className="timeline-item">
              <div className="timeline-meta">2017 — 2021</div>
              <h3>Staff Engineer — Beta Inc</h3>
              <p>Scaled payments system to 10k TPS, introduced domain boundaries and paved road tooling.</p>
            </div>
          </li>
          <li>
            <div className="timeline-item">
              <div className="timeline-meta">2012 — 2017</div>
              <h3>Senior Engineer — Gamma LLC</h3>
              <p>Built high-availability microservices on Kubernetes; mentored engineers and led incident reviews.</p>
            </div>
          </li>
        </ol>
        <div className="section-cta">
          <a className="button" href="/resume">View Resume</a>
          <a className="button button--ghost" href="/projects">Explore Projects</a>
        </div>
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
          <a className="button" href="/projects">All Projects</a>
        </div>
      </section>

      <section id="writing" className="section reveal">
        <h2>Latest Writing</h2>
        <div className="list">
          {latest.map(post => (
            <article className="post-item reveal" key={post.slug}>
              <a href={post.href || '#'}><h3>{post.title}</h3></a>
              <div className="meta">{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' })}</div>
              <p className="muted">{post.description}</p>
              <ul className="tag-list">{post.tags?.map(t => <li key={t}>{t}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <a className="button button--ghost" href="/blog">All Posts</a>
        </div>
      </section>

      <section id="contact" className="section reveal">
        <h2>Contact</h2>
        <p>Interested in collaborating or just want to say hi? Reach out:</p>
        <ul className="contact-list">
          <li>Email: <a href="mailto:you@example.com">you@example.com</a></li>
          <li>LinkedIn: <a href="#" target="_blank" rel="noopener">linkedin.com/in/your-handle</a></li>
          <li>GitHub: <a href="#" target="_blank" rel="noopener">github.com/your-handle</a></li>
          <li>Twitter: <a href="#" target="_blank" rel="noopener">@your-handle</a></li>
        </ul>
      </section>
    </>
  )
}
