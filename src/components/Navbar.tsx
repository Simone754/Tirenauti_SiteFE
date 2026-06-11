import { Link } from 'react-router-dom'
import logoMark from '../assets/logo-full.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand" aria-label="Tirenauti — torna in cima">
        <img src={logoMark} alt="" className="navbar-logo" aria-hidden="true" />
        <span className="navbar-wordmark">TIRENAUTI</span>
      </a>

      <ul className="navbar-links" role="list">
        <li><a href="#chi-siamo">Chi siamo</a></li>
        <li><a href="#cosa-facciamo">Cosa facciamo</a></li>
        <li><a href="#partner">Partner</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contatti">Contatti</a></li>
        <li>
          <Link to="/festival" className="navbar-festival-link">
            Festival
          </Link>
        </li>
      </ul>

      <a href="#partner" className="navbar-cta">
        Collabora con noi
      </a>
    </nav>
  )
}
