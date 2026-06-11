import { useInView } from '../hooks/useInView'

interface Contact {
  label: string
  value: string
  href?: string
}

const contacts: Contact[] = [
  {
    label: 'Email generale',
    value: 'info@1500miglia.it',
    href: 'mailto:info@1500miglia.it',
  },
  {
    label: 'Telefono',
    value: '+39 351 584 5379',
    href: 'tel:+393515845379',
  },
  {
    label: 'Partnership & Sponsor',
    value: 'Matteo.Paris@1500miglia.it',
    href: 'mailto:Matteo.Paris@1500miglia.it',
  },
  {
    label: 'Amministrazione',
    value: 'Claudia.Quaranta@1500miglia.it',
    href: 'mailto:Claudia.Quaranta@1500miglia.it',
  },
]

export default function Contatti() {
  const [ref, inView] = useInView<HTMLElement>()
  const v = inView ? ' visible' : ''

  return (
    <section className="contact" id="contatti" ref={ref}>
      <div className={`contact-text anim-fade-up${v}`}>
        <h2 className="heading">
          Parliamo<br />
          <em>di qualcosa</em><br />
          che vale
        </h2>
        <p>
          Hai un'idea di collaborazione? Vuoi portare il festival nella tua città?
          Scrivici direttamente, rispondiamo a tutti.
        </p>
      </div>

      <div className="contact-list">
        {contacts.map((c, i) => (
          <div
            className={`contact-item anim-fade-up delay-${i + 1}${v}`}
            key={c.label}
          >
            <span className="contact-item-label">{c.label}</span>
            {c.href ? (
              <a
                href={c.href}
                className="contact-item-value contact-item-link"
              >
                {c.value}
              </a>
            ) : (
              <span className="contact-item-value">{c.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
