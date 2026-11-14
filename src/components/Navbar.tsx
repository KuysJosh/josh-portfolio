import React, { useState, useEffect } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

interface NavbarProps {
  name?: string;
  location?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  name = "josh",
  location = "Cebu, Philippines · open to work",
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
  ];

  return (
    <header className={`nav ${isOpen ? "open" : ""}`} id="nav">
      <div className="pill">
        <a className="logo" href="#top" onClick={() => toggleMenu(false)}>
          ~/{name}<i>_</i>
        </a>

        <ul className="menu" id="menu">
          {navLinks.map((item) => (
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
        {navLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => toggleMenu(false)}
          >
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={() => toggleMenu(false)}>
          Contact
        </a>
        <small>{location}</small>
      </div>
    </header>
  );
};

