import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

interface Service {
  num: string
  name: string
  desc: string
  pill: string
  pillClass: string
  festivalLink?: boolean
}

const services: Service[] = [
  {
    num: '01',
    name: '1500 Miglia Festival',
    desc: 'Festival itinerante lungo le coste del Tirreno. Una flotta di barche a vela, 10 città portuali, 2 mesi di eventi gratuiti: musica, arte, divulgazione scientifica, incontri con il territorio.',
    pill: 'FESTIVAL',
    pillClass: 'pill-magenta',
    festivalLink: true,
  },
  {
    num: '02',
    name: 'Workshop Creativi',
    desc: "Laboratori pratici nelle tappe del festival. Sessioni che mettono in dialogo discipline diverse: dalla scienza alla cucina, dall'arte alle tecnologie marine.",
    pill: 'WORKSHOP',
    pillClass: 'pill-yellow',
  },
  {
    num: '03',
    name: 'Produzione Culturale',
    desc: "Ideazione e sviluppo di format culturali ad alto impatto sociale. Dall'evento fisico alla narrazione digitale: costruiamo esperienze che lasciano traccia nei territori.",
    pill: 'PRODUZIONE',
    pillClass: 'pill-orange',
  },
]

export default function CosaFacciamo() {
  const [ref, inView] = useInView<HTMLElement>()
  const v = inView ? ' visible' : ''

  return (
    <section className="services" id="cosa-facciamo" ref={ref}>
      <div className="services-header">
        <h2 className={`heading anim-fade-up${v}`}>Cosa facciamo</h2>
        <p className={`services-header-sub anim-fade-up delay-1${v}`}>
          Format e iniziative pensate per connettere persone, luoghi e discipline diverse.
        </p>
      </div>

      <div className="services-list">
        {services.map((s, i) => (
          <div
            className={`service-row${s.festivalLink ? ' service-row--festival' : ''} anim-fade-up${i > 0 ? ` delay-${i + 1}` : ''}${v}`}
            key={s.num}
          >
            <span className="service-num">{s.num}</span>
            <div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              {s.festivalLink && (
                <Link to="/festival" className="service-festival-cta">
                  Scopri l'esperienza →
                </Link>
              )}
            </div>
            <span className={`service-pill ${s.pillClass}`}>{s.pill}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
