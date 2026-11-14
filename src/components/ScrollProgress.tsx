import React from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div
      id="bar"
      aria-hidden="true"
      style={{
        transform: `scaleX(${progress})`,
      }}
    />
  );
};

