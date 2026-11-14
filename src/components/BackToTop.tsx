import React, { useState, useEffect } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";

export const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 21;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <button
      className={`top ${show ? "show" : ""}`}
      id="top2"
      aria-label="Back to top"
      onClick={scrollToTop}
      title="Back to top"
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "rotate(-90deg)",
          pointerEvents: "none",
        }}
      >
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="2.5"
          fill="transparent"
        />
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="var(--ice)"
          strokeWidth="2.5"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.15s ease-out" }}
        />
      </svg>
      <span style={{ position: "relative", zIndex: 1, fontSize: "16px" }}>↑</span>
    </button>
  );
};
