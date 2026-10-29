import { useEffect, useState } from 'react'
import { profile, about, stats, experience, projects, skills, education } from './data/profile'
import {
  LinkedInIcon, GitHubIcon, CodeIcon, TrophyIcon, MailIcon, PinIcon,
  ArrowIcon, SunIcon, MoonIcon, DownloadIcon,
} from './components/Icons'

const NAV = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
]

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    } catch {
      return 'dark'
    }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])
  return [theme, () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))]
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('visible'))
      return
    }
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.12 },
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}

const socials = [
  { href: profile.links.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: profile.links.github, label: 'GitHub', Icon: GitHubIcon },
  { href: profile.links.leetcode, label: 'LeetCode', Icon: CodeIcon },
  { href: profile.links.codeforces, label: 'Codeforces', Icon: TrophyIcon },
]

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  useReveal()

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand" aria-label="Home">
            <span className="brand-mark">{profile.initials}</span>
            <span className="brand-name">{profile.name}</span>
          </a>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle color theme">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button className="icon-btn menu-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu" aria-expanded={menuOpen}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="container">
        {/* HERO */}
        <section className="hero">
          <h1>
            Hi, I'm {profile.name.split(' ')[0]}.<br />
            <span className="gradient">{profile.role}</span>
          </h1>
          <p className="lead">{profile.tagline}</p>
          <div className="meta">
            <span><PinIcon /> {profile.location}</span>
            <span><CodeIcon /> {profile.experience} · Insurance / BFSI</span>
          </div>
          <div className="cta">
            <a className="btn primary" href="#contact">Get in touch</a>
            <a className="btn" href="#projects">View projects</a>
            {profile.resumeUrl && (
              <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer"><DownloadIcon /> Resume</a>
            )}
          </div>
          <div className="socials">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><Icon /></a>
            ))}
          </div>
          <div className="code-card" aria-hidden>
            <div className="code-head"><i /><i /><i /><span>Developer.cs</span></div>
            <pre>{`public record Developer(
    string Name    = "${profile.name}",
    string Stack   = "C# · .NET · SQL · Azure · React",
    string Domain  = "Insurance & Billing",
    bool   OpenTo  = true);`}</pre>
          </div>
        </section>

        {/* STATS */}
        <section className="stats reveal" aria-label="Highlights">
          {stats.map(s => (
            <div key={s.label} className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-detail">{s.detail}</div>
            </div>
          ))}
        </section>

        <Section id="about" eyebrow="01 · About" title="Backend-minded, full-stack capable">
          <div className="about">
            <div className="about-text">
              {about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <aside className="card about-card">
              <h3>Quick facts</h3>
              <dl>
                <dt>Current</dt><dd>Software Developer, Cogitate</dd>
                <dt>Experience</dt><dd>{profile.experience}</dd>
                <dt>Domain</dt><dd>Insurance · Billing · Documents</dd>
                <dt>Looking for</dt><dd>{profile.openTo}</dd>
              </dl>
            </aside>
          </div>
        </Section>

        <Section id="experience" eyebrow="02 · Experience" title="Where I've worked">
          {experience.map(job => (
            <div key={job.company} className="job">
              <div className="job-head">
                <h3>{job.company}</h3>
                <span className="muted">{job.span} · {job.location}</span>
              </div>
              <ol className="timeline">
                {job.roles.map(r => (
                  <li key={r.title}>
                    <div className="role-head">
                      <h4>{r.title}</h4>
                      <span className="tag">{r.period}</span>
                    </div>
                    <ul className="points">
                      {r.points.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </Section>

        <Section id="projects" eyebrow="03 · Projects" title="Things I've built">
          <div className="grid projects">
            {projects.map(p => (
              <article key={p.name} className="card project">
                <div className="project-top">
                  <h3>{p.name}</h3>
                  <span className={`status ${p.status.startsWith('In') ? 'live' : ''}`}>{p.status}</span>
                </div>
                <p className="muted small">{p.period}</p>
                <p>{p.summary}</p>
                <ul className="points compact">
                  {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
                <div className="chips">
                  {p.tech.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
                {p.link && (
                  <a className="project-link" href={p.link} target="_blank" rel="noreferrer">View code <ArrowIcon /></a>
                )}
              </article>
            ))}
          </div>
          <a className="more-link" href={profile.links.github} target="_blank" rel="noreferrer">
            More on GitHub <ArrowIcon />
          </a>
        </Section>

        <Section id="skills" eyebrow="04 · Skills" title="Tools of the trade">
          <div className="grid skills">
            {skills.map(g => (
              <div key={g.group} className="card">
                <h3 className="skill-group">{g.group}</h3>
                <div className="chips">
                  {g.items.map(s => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="05 · Education & DSA" title="Foundations">
          <div className="grid two">
            <div className="card">
              <ul className="edu">
                {education.map(e => (
                  <li key={e.title}>
                    <div>
                      <strong>{e.title}</strong>
                      <span className="muted">{e.place}</span>
                    </div>
                    <span className="tag">{e.period}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card cp">
              <a href={profile.links.leetcode} target="_blank" rel="noreferrer" className="cp-item">
                <CodeIcon />
                <div><strong>400+ problems</strong><span className="muted">LeetCode · data structures & algorithms</span></div>
                <ArrowIcon />
              </a>
              <a href={profile.links.codeforces} target="_blank" rel="noreferrer" className="cp-item">
                <TrophyIcon />
                <div><strong>Rank 1126</strong><span className="muted">Codeforces Round 754 (Div. 2)</span></div>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="06 · Contact" title="Let's work together">
          <div className="card contact">
            <p className="lead">
              I'm open to backend and full-stack .NET roles.
              Send me a message below, or reach out by email or LinkedIn.
            </p>
            <ContactForm />
            <p className="muted contact-alt">Or reach me directly:</p>
            <div className="cta">
              <a className="btn primary" href={`mailto:${profile.email}`}><MailIcon /> {profile.email}</a>
              <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="socials small">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon /></a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.contactFormKey,
          subject: `Portfolio message from ${form.name}`,
          from_name: 'Portfolio contact form',
          ...form,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === 'false' || data.success === false) throw new Error()
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return <p className="form-status ok" role="status">Thanks! Your message has been sent. I'll get back to you soon.</p>
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" required value={form.name} onChange={update} autoComplete="name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required value={form.email} onChange={update} autoComplete="email" />
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea name="message" required rows={5} value={form.message} onChange={update} />
      </label>
      <button className="btn primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'error' && (
        <p className="form-status err" role="alert">Something went wrong. Please try again or email me directly.</p>
      )}
    </form>
  )
}
