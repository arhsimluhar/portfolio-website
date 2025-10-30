import { useMemo, useState } from 'react'
import { PROJECTS } from '../data'
import { useReveal } from '../hooks/useReveal'

const FILTERS = ['all', 'platform', 'distributed', 'devex', 'data'] as const

export default function Projects() {
  // Re-run reveal observer when the filter changes so new cards are observed
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('all')
  const filtered = useMemo(() => PROJECTS.filter(p => filter === 'all' || p.tags.includes(filter)), [filter])
  useReveal('.reveal', { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }, [filter, filtered.length])

  return (
    <section className="section reveal">
      <h1>Projects</h1>
      <p className="muted">Selected initiatives and systems I’ve designed and delivered.</p>
      <div className="filters" role="tablist" aria-label="Project filters">
        {FILTERS.map(f => (
          <button key={f} className={`chip ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)} role="tab">{f[0].toUpperCase() + f.slice(1)}</button>
        ))}
      </div>

      <div className="card-grid">
        {filtered.map(p => (
          <article className="card reveal" key={p.id}>
            <div className="muted">{p.year}</div>
            <h3>{p.name}</h3>
            <p className="muted">{p.summary}</p>
            {p.impact ? (<p className="muted"><strong>Impact:</strong> {p.impact}</p>) : null}
            <ul className="tag-list">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
            {p.tech?.length ? (
              <div>
                <div className="muted"><strong>Tech:</strong></div>
                <ul className="tag-list">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
              </div>
            ) : null}
            <div className="section-cta">
              <a className="button" href={p.link || '#'}>Details</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
