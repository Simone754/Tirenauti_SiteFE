import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/hero-bg.png'
import logoFull from '../assets/logo-full.png'


export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50)
    return () => clearTimeout(t)
  }, [])

  const v = loaded ? ' visible' : ''

  return (
    <section className={`hero${loaded ? ' loaded' : ''}`} id="hero">
      <div className="hero-left">
        <div className={`hero-tag anim-fade-up${v}`}>
          <span className="hero-tag-dot" />
          Format culturale multidisciplinare
        </div>

        <h1 className={`display hero-h1 anim-fade-up delay-1${v}`}>
          Navigatori<br />
          di <span className="accent">cultura,</span><br />
          arte e scienza
        </h1>

        <p className={`hero-body anim-fade-up delay-2${v}`}>
          Promuoviamo il territorio e tutto ciò che offre. Ci muoviamo per connettere
          persone, discipline e luoghi — costruendo insieme un futuro migliore.
        </p>

        <div className={`hero-actions anim-fade-up delay-3${v}`}>
          <a href="#cosa-facciamo" className="btn-fill">Scopri cosa facciamo</a>
          <a href="#partner" className="btn-outline">Diventa partner</a>
        </div>
      </div>

      <Link to="/festival" className="hero-right" aria-label="Scopri il Festival 1500 Miglia">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="hero-right-img"
        />

        {/* Rete di connessioni animata */}
        <svg
          className="hero-network"
          viewBox="0 0 500 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <line className="network-line" x1="80" y1="120" x2="260" y2="280" stroke="#E8005A" strokeWidth="1.5" />
          <line className="network-line" x1="260" y1="280" x2="420" y2="180" stroke="#2060EE" strokeWidth="1.5" style={{ transitionDelay: '0.2s' }} />
          <line className="network-line" x1="260" y1="280" x2="340" y2="440" stroke="#FFD000" strokeWidth="1.5" style={{ transitionDelay: '0.4s' }} />
          <line className="network-line" x1="80" y1="120" x2="340" y2="440" stroke="#E87800" strokeWidth="1" style={{ transitionDelay: '0.6s' }} />
          <line className="network-line" x1="420" y1="180" x2="340" y2="440" stroke="#7B2DB5" strokeWidth="1" style={{ transitionDelay: '0.8s' }} />
          <line className="network-line" x1="160" y1="480" x2="260" y2="280" stroke="#3DA050" strokeWidth="1" style={{ transitionDelay: '1s' }} />
          <circle className="network-dot" cx="80" cy="120" r="6" fill="#E8005A" style={{ transitionDelay: '0.3s' }} />
          <circle className="network-dot" cx="260" cy="280" r="9" fill="#2060EE" style={{ transitionDelay: '0.5s' }} />
          <circle className="network-dot" cx="420" cy="180" r="5" fill="#FFD000" style={{ transitionDelay: '0.7s' }} />
          <circle className="network-dot" cx="340" cy="440" r="7" fill="#E87800" style={{ transitionDelay: '0.9s' }} />
          <circle className="network-dot" cx="160" cy="480" r="5" fill="#7B2DB5" style={{ transitionDelay: '1.1s' }} />
        </svg>

        <div className="hero-right-content">
          <img
            src={logoFull}
            alt="Logo Tirenauti"
            className={`hero-logo-large${v}`}
          />
          <p className={`hero-quote anim-fade-up delay-4${v}`}>
            Culture in movimento — ogni luogo ha qualcosa da dare.
          </p>
        </div>

        {/* Festival gateway */}
        <div className="hero-festival-badge" aria-hidden="true">
          <div className="hero-festival-badge__dot" />
          <span className="hero-festival-badge__text">1500 Miglia Festival</span>
        </div>

        <div className="hero-festival-cta" aria-hidden="true">
          ⛵ Scopri il Festival →
        </div>


      </Link>
    </section>
  )
}
