import React, { useState, useEffect } from "react";

export const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`top ${show ? "show" : ""}`}
      id="top2"
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

