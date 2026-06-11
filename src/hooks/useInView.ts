import { useRef, useState, useEffect } from 'react'
import type { RefObject } from 'react'

interface UseInViewOptions extends IntersectionObserverInit {
  /** Se true (default), l'observer viene disconnesso dopo il primo trigger */
  once?: boolean
}

export function useInView<T extends Element>(
  options: UseInViewOptions = {}
): [RefObject<T | null>, boolean] {
  const {
    once = true,
    threshold = 0.12,
    rootMargin = '0px 0px -48px 0px',
    ...rest
  } = options

  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin, ...rest }
    )

    observer.observe(el)
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once, threshold, rootMargin])

  return [ref, inView]
}
