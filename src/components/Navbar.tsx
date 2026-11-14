import React, { useState, useEffect } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { portfolioData } from "../data/portfolioData";

interface NavbarProps {
  name?: string;
  location?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  name = "josh",
  location = "Tacloban City, Leyte · open to work",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(["about", "stack", "experience", "work", "contact"]);

  const toggleMenu = (open?: boolean) => {
    const nextState = typeof open === "boolean" ? open : !isOpen;
    setIsOpen(nextState);
    if (typeof document !== "undefined") {
      document.body.style.overflow = nextState ? "hidden" : "";
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggleMenu(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Stack", href: "#stack", id: "stack" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#work", id: "work" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className={`nav ${isOpen ? "open" : ""}`} id="nav">
      <div className="pill">
        <a className="logo" href="#top" onClick={() => toggleMenu(false)}>
          ~/{name}<i>_</i>
        </a>

        <ul className="menu" id="menu">
          {navLinks.slice(0, 4).map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={activeSection === item.id ? "on" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a className="hire" href="#contact">
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 8px #4ade80",
            }}
          />
          Hire me
        </a>

        <button
          className="burger"
          id="bg"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => toggleMenu()}
        >
          <i />
          <i />
        </button>
      </div>

      <div className="sheet" id="sheet">
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => toggleMenu(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Quick mobile action bar */}
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <a
            href={`tel:${portfolioData.phone}`}
            style={{
              fontSize: "14px",
              padding: "10px 18px",
              borderRadius: "99px",
              background: "rgba(76, 201, 240, 0.15)",
              border: "1px solid rgba(76, 201, 240, 0.3)",
              color: "#fff",
              fontFamily: "var(--mono)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            📱 Call {portfolioData.phone}
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            style={{
              fontSize: "14px",
              padding: "10px 18px",
              borderRadius: "99px",
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid var(--line-strong)",
              color: "#cbd5e1",
              fontFamily: "var(--mono)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            ✉ Email Me
          </a>
        </div>

        <small style={{ marginTop: "20px" }}>📍 {location}</small>
      </div>
    </header>
  );
};
