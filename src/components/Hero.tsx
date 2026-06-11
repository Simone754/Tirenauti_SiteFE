import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import imgFestival from '../assets/festival/backgrounds/immagine1.png'
import imgWorkshop from '../assets/festival/backgrounds/immagine4.png'
import imgProduzione from '../assets/festival/backgrounds/immagine6.png'

interface Slide {
  img: string
  alt: string
  label: string
  title: string
  desc: string
  cta: string
  /** Route interna (react-router) */
  to?: string
  /** Anchor nella stessa pagina */
  href?: string
  /** Punto focale dell'immagine (object-position) — il soggetto resta in frame nei crop stretti */
  focus?: string
}

const slides: Slide[] = [
  {
    img: imgFestival,
    alt: 'Barca a vela al tramonto sul Tirreno',
    label: 'Festival itinerante',
    title: '1500 Miglia Festival',
    desc: 'Una flotta di barche a vela, 10 città portuali, 2 mesi di eventi gratuiti lungo le coste del Tirreno.',
    cta: 'Scopri il festival',
    to: '/festival',
    focus: '72% center',
  },
  {
    img: imgWorkshop,
    alt: 'Barca con vela colorata in navigazione al tramonto',
    label: 'Laboratori',
    title: 'Workshop Creativi',
    desc: 'Sessioni pratiche che mettono in dialogo scienza, cucina, arte e tecnologie marine.',
    cta: 'Vedi i workshop',
    href: '#cosa-facciamo',
  },
  {
    img: imgProduzione,
    alt: 'La crew dei Tirenauti in navigazione al tramonto',
    label: 'Format',
    title: 'Produzione Culturale',
    desc: "Format culturali ad alto impatto sociale: dall'evento fisico alla narrazione digitale.",
    cta: 'Cosa facciamo',
    href: '#cosa-facciamo',
  },
]

const AUTOPLAY_MS = 7000

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused])

  return (
    <>
      <section
        className="hero"
        id="hero"
        aria-roledescription="carosello"
        aria-label="In evidenza"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {slides.map((s, i) => (
          <div
            key={s.title}
            className={`hero-slide${i === idx ? ' active' : ''}`}
            aria-hidden={i !== idx}
          >
            <img
              src={s.img}
              alt={s.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              style={s.focus ? { objectPosition: s.focus } : undefined}
            />
            <div className="hero-scrim" aria-hidden="true" />
            <div className="hero-slide-content">
              <span className="hero-slide-label">{s.label}</span>
              <h2 className="hero-slide-title">{s.title}</h2>
              <p className="hero-slide-desc">{s.desc}</p>
              {s.to ? (
                <Link to={s.to} className="hero-slide-cta" tabIndex={i === idx ? 0 : -1}>
                  {s.cta} →
                </Link>
              ) : (
                <a href={s.href} className="hero-slide-cta" tabIndex={i === idx ? 0 : -1}>
                  {s.cta} →
                </a>
              )}
            </div>
          </div>
        ))}

        <div className="hero-nav" aria-label="Scegli la slide">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              className={`hero-nav-bar${i === idx ? ' active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}: ${s.title}`}
              aria-current={i === idx}
            />
          ))}
        </div>
      </section>

      <section className="manifesto" aria-label="Chi sono i Tirenauti">
        <h1 className="heading manifesto-title">
          Navigatori di <span className="accent">cultura,</span> arte e scienza
        </h1>
        <p className="manifesto-body">
          Promuoviamo il territorio e tutto ciò che offre. Ci muoviamo per connettere
          persone, discipline e luoghi — costruendo insieme un futuro migliore.
        </p>
        <div className="manifesto-actions">
          <a href="#cosa-facciamo" className="btn-fill">Scopri cosa facciamo</a>
          <a href="#partner" className="btn-outline">Diventa partner</a>
        </div>
      </section>
    </>
  )
}
