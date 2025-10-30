import { useEffect } from 'react'

// Re-initializable reveal-on-scroll hook. Pass `deps` to re-scan DOM when content changes.
export function useReveal(
  selector = '.reveal',
  options: IntersectionObserverInit = { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  deps: unknown[] = [],
) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (els.length === 0) return
    const onIntersect: IntersectionObserverCallback = (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          obs.unobserve(e.target)
        }
      })
    }
    const io = new IntersectionObserver(onIntersect, options)
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [selector, ...deps])
}
