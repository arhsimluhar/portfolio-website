import { POSTS } from '../data'

export default function Blog() {
  return (
    <section className="section reveal">
      <h1>Blog</h1>
      <p className="muted">Essays on system design, leadership, and delivery.</p>
      <div className="post-list">
        {POSTS.map(p => (
          <article className="post-item reveal" key={p.slug}>
            <a href={p.href || '#'}><h3>{p.title}</h3></a>
            <div className="meta">{new Date(p.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' })}</div>
            <p className="muted">{p.description}</p>
            <ul className="tag-list">{p.tags?.map(t => <li key={t}>{t}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}
