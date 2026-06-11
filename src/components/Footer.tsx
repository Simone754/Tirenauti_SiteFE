import { useInView } from '../hooks/useInView'

export default function Footer() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.3 })

  return (
    <footer
      className={`footer anim-fade-up${inView ? ' visible' : ''}`}
      ref={ref}
    >
      <p><strong>Tirenauti</strong> — Culture in movimento.</p>
      <p>&copy; {new Date().getFullYear()} Tutti i diritti riservati</p>
    </footer>
  )
}
