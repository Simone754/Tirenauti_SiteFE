import { useInView } from '../hooks/useInView'

type Domain = {
  name: string
  hex: string
  bg: string
  icon: React.ReactNode
}

const domains: Domain[] = [
  {
    name: 'Arte',
    hex: '#E8005A',
    bg: 'rgba(232,0,90,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36" aria-hidden="true">
        <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a1 1 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96a1 1 0 0 0 0-1.41z"/>
      </svg>
    ),
  },
  {
    name: 'Cucina',
    hex: '#E87800',
    bg: 'rgba(232,120,0,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36" aria-hidden="true">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
      </svg>
    ),
  },
  {
    name: 'Scienze',
    hex: '#2060EE',
    bg: 'rgba(32,96,238,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36" aria-hidden="true">
        <path d="M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z"/>
      </svg>
    ),
  },
  {
    name: 'Musica',
    hex: '#7B2DB5',
    bg: 'rgba(123,45,181,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36" aria-hidden="true">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
    ),
  },
  {
    name: 'Territorio',
    hex: '#3DA050',
    bg: 'rgba(61,160,80,0.08)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
  },
  {
    name: 'Mare',
    hex: '#FFD000',
    bg: 'rgba(255,208,0,0.10)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36" aria-hidden="true">
        <path d="M17 16.99c-1.35 0-2.2-.42-3.05-.83-.8-.38-1.56-.75-2.95-.75s-2.15.37-2.95.75c-.85.41-1.7.83-3.05.83s-2.2-.42-3.05-.83c-.28-.13-.58-.27-.9-.39v2.02c.32.12.64.27.9.39.85.41 1.7.83 3.05.83s2.2-.42 3.05-.83c.8-.38 1.56-.75 2.95-.75s2.15.37 2.95.75c.85.41 1.7.83 3.05.83s2.2-.42 3.05-.83c.28-.13.58-.26.9-.39v-2.02c-.32.12-.62.26-.9.39-.85.41-1.7.83-3.05.83zm0-4.45c-1.35 0-2.2-.43-3.05-.84-.8-.38-1.56-.75-2.95-.75s-2.15.37-2.95.75c-.85.41-1.7.84-3.05.84s-2.2-.43-3.05-.84c-.28-.13-.58-.27-.9-.39v2.01c.32.12.64.27.9.39.85.41 1.7.84 3.05.84s2.2-.43 3.05-.84c.8-.38 1.56-.75 2.95-.75s2.15.37 2.95.75c.85.41 1.7.84 3.05.84s2.2-.43 3.05-.84c.28-.13.58-.27.9-.39v-2.01c-.32.12-.62.27-.9.39-.85.41-1.7.84-3.05.84zm3.05-9.77c-.85.41-1.7.83-3.05.83s-2.2-.42-3.05-.83c-.8-.38-1.56-.75-2.95-.75s-2.15.37-2.95.75c-.85.41-1.7.83-3.05.83s-2.2-.42-3.05-.83c-.28-.14-.58-.27-.9-.4V4.4c.32.13.62.27.9.4.85.41 1.7.83 3.05.83s2.2-.42 3.05-.83c.8-.37 1.56-.75 2.95-.75s2.15.38 2.95.75c.85.41 1.7.83 3.05.83s2.2-.42 3.05-.83c.28-.13.58-.26.9-.39V2.38c-.32.13-.62.27-.9.39z"/>
      </svg>
    ),
  },
]

const stagger = [' ', ' delay-1 ', ' delay-2 ', ' delay-3 ', ' delay-4 ', ' delay-5 ']

export default function Partner() {
  const [ref, inView] = useInView<HTMLElement>()
  const v = inView ? ' visible' : ''

  return (
    <section className="partners" id="partner" ref={ref}>
      <h2 className={`heading partners-heading anim-fade-up${v}`}>
        Costruiamo qualcosa insieme
      </h2>
      <div className="domains-grid">
        {domains.map((d, i) => (
          <div
            key={d.name}
            className={`domain-card anim-scale${stagger[i]}${v}`}
            style={{ background: d.bg, borderColor: `${d.hex}30`, color: d.hex }}
          >
            <span className="domain-card-icon" aria-hidden="true">{d.icon}</span>
            <span className="domain-card-name">{d.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
