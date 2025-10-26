export default function Resume() {
  return (
    <section className="section resume">
      <h1>Resume</h1>
      <p className="muted">Here’s a concise summary. For a printable version, export this page as PDF.</p>

      <h2>Profile</h2>
      <p>Principal Software Engineer with expertise in distributed systems, platform engineering, and technical leadership. Proven record of shipping resilient systems and scaling engineering organizations.</p>

      <h2>Experience</h2>
      <ul className="resume-list">
        <li>
          <strong>Principal Engineer — Acme Corp</strong> (2021–Present)
          <div>Platform modernization, event-driven architecture, 99.95% SLO.</div>
        </li>
        <li>
          <strong>Staff Engineer — Beta Inc</strong> (2017–2021)
          <div>Payments scaling to 10k TPS, domain modeling, DevEx.</div>
        </li>
        <li>
          <strong>Senior Engineer — Gamma LLC</strong> (2012–2017)
          <div>Microservices, Kubernetes, incident response.</div>
        </li>
      </ul>

      <h2>Skills</h2>
      <ul className="tag-list">
        <li>System Design</li>
        <li>Distributed Systems</li>
        <li>APIs & Platforms</li>
        <li>Go</li>
        <li>TypeScript</li>
        <li>AWS</li>
        <li>Kubernetes</li>
      </ul>

      <h2>Education</h2>
      <p>B.S. Computer Science, Your University</p>
    </section>
  )
}

