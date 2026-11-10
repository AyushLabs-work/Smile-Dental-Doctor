import { useEffect, useRef } from 'react'

/**
 * Attaches IntersectionObserver scroll-reveal to a container ref.
 * All child elements with class "reveal" inside the ref will animate in.
 * Also works if the ref itself has class "reveal".
 */
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = root.classList.contains('reveal')
      ? [root]
      : Array.from(root.querySelectorAll('.reveal'))

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    targets.forEach((t) => obs.observe(t))
    return () => obs.disconnect()
  }, [])

  return ref
}
