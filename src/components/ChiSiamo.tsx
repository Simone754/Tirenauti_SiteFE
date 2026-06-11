import aboutBg from '../assets/about-bg.png'
import { useInView } from '../hooks/useInView'
import CounterBlock from './CounterBlock'

export default function ChiSiamo() {
  const [ref, inView] = useInView<HTMLElement>()
  const v = inView ? ' visible' : ''

  return (
    <section className="about" id="chi-siamo" ref={ref}>
      <div className="about-text">
        <h2 className={`heading anim-fade-up${v}`}>
          Discendenti di Ulisse,{' '}
          <span className="underline-yellow">navigatori di idee</span>
        </h2>
        <p className={`anim-fade-up delay-1${v}`}>
          I Tirenauti sono un popolo immaginario che esiste solo nel movimento.
          Legati alla propria terra ma destinati a navigare oltre l'orizzonte,
          portano con sé la storia, gli usi e le culture delle rive del Tirreno.
        </p>
        <p className={`anim-fade-up delay-2${v}`}>
          Il nostro format è dedicato alla sostenibilità sociale e ambientale.
          Mettiamo al centro l'uomo, la natura e le culture locali: attraverso
          cucina, arte e scienza diamo voce all'ecosistema di incontri che ha
          costruito la storia del Mediterraneo.
        </p>
        <CounterBlock />
      </div>

      <div className={`about-image anim-fade-right${v}`}>
        <img
          src={aboutBg}
          alt="Il crew dei Tirenauti al tramonto"
          loading="lazy"
        />
      </div>
    </section>
  )
}
