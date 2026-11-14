import { useCallback, useRef } from "react";

export function useMagnetic(intensityX = 0.16, intensityY = 0.26) {
  const isFinePointer = useRef(
    typeof window !== "undefined" ? window.matchMedia("(pointer:fine)").matches : true
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!isFinePointer.current) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const deltaX = (e.clientX - rect.left - rect.width / 2) * intensityX;
      const deltaY = (e.clientY - rect.top - rect.height / 2) * intensityY;
      e.currentTarget.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    },
    [intensityX, intensityY]
  );

  const onPointerLeave = useCallback((e: React.PointerEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "";
  }, []);

  return { onPointerMove, onPointerLeave };
}

