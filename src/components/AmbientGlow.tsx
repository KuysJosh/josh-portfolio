import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export const AmbientGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer:coarse)").matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let animId: number;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updateGlow = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }

      animId = requestAnimationFrame(updateGlow);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animId = requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animId);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return <div id="glow" ref={glowRef} aria-hidden="true" />;
};

