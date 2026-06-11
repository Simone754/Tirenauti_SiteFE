import { useInView } from '../hooks/useInView'

interface TeamMember {
  initial: string
  name: string
  role: string
  email: string
  color: string
}

const members: TeamMember[] = [
  {
    initial: 'M',
    name: 'Matteo Paris',
    role: 'Ideatore & Sponsor',
    email: 'Matteo.Paris@1500miglia.it',
    color: 'var(--magenta)',
  },
  {
    initial: 'C',
    name: 'Claudia Quaranta',
    role: 'Amministrazione',
    email: 'Claudia.Quaranta@1500miglia.it',
    color: 'var(--blue)',
  },
]

export default function Team() {
  const [ref, inView] = useInView<HTMLElement>()
  const v = inView ? ' visible' : ''

  return (
    <section className="team" id="team" ref={ref}>
      <h2 className={`heading anim-fade-up${v}`}>Le persone dietro il progetto</h2>
      <div className="team-grid">
        {members.map((m, i) => (
          <div
            className={`team-card anim-scale${i > 0 ? ` delay-${i + 1}` : ''}${v}`}
            key={m.email}
          >
            <div
              className="team-initial"
              style={{ background: m.color }}
            >
              {m.initial}
            </div>
            <div className="team-name">{m.name}</div>
            <div className="team-role">{m.role}</div>
            <a
              className="team-email"
              href={`mailto:${m.email}`}
            >
              {m.email}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
