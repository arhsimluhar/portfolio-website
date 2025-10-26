import { SITE, SKILLS } from '../data'

export default function Resume() {
  return (
    <section className="section resume">
      <h1>Resume</h1>
      <p className="muted">{SITE.name} • {SITE.title} • {SITE.location} • {SITE.social.email}</p>

      <h2>Summary</h2>
      <p>Principal Software Engineer with 8+ years of experience architecting and scaling backend systems, distributed systems, and cloud‑native infrastructure. Proven leader in engineering excellence, performance, cost optimization, and DevSecOps adoption. Passionate mentor and advocate for secure, reliable, and scalable software design.</p>

      <h2>Technical Skills</h2>
      <p><strong>Languages:</strong> {SKILLS.languages.join(', ')}</p>
      <p><strong>Cloud & DevOps:</strong> {SKILLS.cloudDevOps.join(', ')}</p>
      <p><strong>Databases & Processing:</strong> {SKILLS.databases.join(', ')}</p>
      <p><strong>Frameworks & Tools:</strong> {SKILLS.frameworksTools.join(', ')}</p>

      <h2>Work Experience</h2>
      <ul className="resume-list">
        <li>
          <strong>Principal Software Engineer — Autodesk, Bangalore</strong> (Dec 2024 – Present)
          <div>Lead a team of 6 engineers to deliver backend services end‑to‑end; improved release velocity by 50% and reduced post‑deploy security incidents by ~40% via secure SDLC and paved‑road CI/CD. Drove staged validation and canary rollouts for scale and cost efficiency.</div>
        </li>
        <li>
          <strong>Senior Software Engineer — Autodesk</strong> (Nov 2019 – Nov 2024)
          <div>Designed an internal security and license‑compliance platform detecting 1M+ non‑compliant users; recovered over $16M. Served as Security Champion, aligning with enterprise security goals.</div>
        </li>
        <li>
          <strong>Software Engineer</strong> (Jul 2016 – 2019)
          <div>Engineered detection/analytics systems; migrated legacy systems to modular services; improved test coverage and CI/CD to accelerate delivery.</div>
        </li>
      </ul>

      <h2>Education</h2>
      <p>B.Tech. in Computer Science & Engineering — Shri Mata Vaishno Devi University, J&K • CGPA: 7.81/10 (Aug 2012 – May 2016)</p>

      <h2>Awards & Certifications</h2>
      <ul className="resume-list">
        <li><strong>Applause Recognition — Autodesk:</strong> contributions to client renewals valued at $300M.</li>
        <li><strong>Autobooks Awards — Autodesk:</strong> led strategic initiatives with measurable business and operational impact.</li>
      </ul>
    </section>
  )
}
