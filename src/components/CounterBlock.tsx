import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

interface CounterItemData {
  target: number
  suffix?: string
  label: string
}

const items: CounterItemData[] = [
  { target: 10, label: 'Città portuali' },
  { target: 2, label: 'Mesi di festival' },
  { target: 100, suffix: '%', label: 'Gratuito' },
]

function Counter({
  target,
  suffix = '',
  label,
  active,
}: CounterItemData & { active: boolean }) {
  const count = useCounter(target, 1200, active)
  return (
    <div className="counter-item">
      <span className="counter-num">
        {count}
        {suffix}
      </span>
      <span className="counter-label">{label}</span>
    </div>
  )
}

export default function CounterBlock() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.5 })
  return (
    <div className="counter-block" ref={ref}>
      {items.map((item) => (
        <Counter key={item.label} {...item} active={inView} />
      ))}
    </div>
  )
}
