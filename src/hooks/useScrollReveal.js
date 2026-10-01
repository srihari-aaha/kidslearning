import { useEffect, useRef, useState } from 'react';

/**
 * Reusable useScrollReveal Hook
 * Observes an element and triggers reveal state whenever it enters or leaves the viewport.
 * Works seamlessly both when scrolling down and when scrolling up.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Viewport threshold (0.08 - 0.2 recommended for smooth entry)
 * @param {string} options.rootMargin - Margin around the root (e.g. '0px 0px -30px 0px')
 * @param {boolean} options.once - Set to false for continuous animations on scroll up and down
 * @returns {[React.RefObject, boolean]} [ref, isRevealed]
 */
export function useScrollReveal({
  threshold = 0.08,
  rootMargin = '0px 0px -30px 0px',
  once = false
} = {}) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return [ref, isRevealed];
}

export default useScrollReveal;
