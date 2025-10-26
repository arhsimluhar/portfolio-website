import { useMemo, useState } from 'react'
import { PROJECTS } from '../data'

const FILTERS = ['all', 'platform', 'distributed', 'devex', 'data'] as const

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('all')
  const filtered = useMemo(() => PROJECTS.filter(p => filter === 'all' || p.tags.includes(filter)), [filter])

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
            <ul className="tag-list">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
            <div className="section-cta">
              <a className="button" href={p.link || '#'}>Details</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
