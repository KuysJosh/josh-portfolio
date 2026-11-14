import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".rv");
    elements.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${(index % 4) * 80}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

