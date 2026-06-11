import { useState, useEffect, useRef } from 'react'

/**
 * Anima un valore intero da 0 a `target` quando `active` diventa true.
 * Usa ease-out cubico e requestAnimationFrame.
 */
export function useCounter(
  target: number,
  duration: number = 1200,
  active: boolean = false
): number {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!active) return

    const startTime = performance.now()

    function update(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubico: 1 - (1 - t)^3
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(update)
      }
    }

    rafRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafRef.current)
  }, [active, target, duration])

  return count
}
