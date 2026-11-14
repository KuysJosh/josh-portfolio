import { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

export function useAnimatedCounter(targetNumber: number, suffix = "", duration = 1400) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setValue(targetNumber);
      return;
    }

    const node = elementRef.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(1, elapsed / duration);
              // Ease-out cubic: 1 - (1 - progress)^3
              const eased = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.round(targetNumber * eased);
              setValue(currentVal);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setValue(targetNumber);
              }
            };

            requestAnimationFrame(animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [targetNumber, duration, hasAnimated, reducedMotion]);

  return { ref: elementRef, display: `${value}${suffix}` };
}

