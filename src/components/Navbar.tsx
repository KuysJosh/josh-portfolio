import React, { useState, useEffect } from "react";
import { Sparkles, PhoneCall, Mail, User, Layers, Briefcase, FolderGit2 } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { portfolioData } from "../data/portfolioData";

interface NavbarProps {
  name?: string;
  location?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  name = "josh",
  location = "Tacloban City, Leyte · open for commission",
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
    { label: "About", href: "#about", id: "about", icon: User },
    { label: "Stack", href: "#stack", id: "stack", icon: Layers },
    { label: "Experience", href: "#experience", id: "experience", icon: Briefcase },
    { label: "Projects", href: "#work", id: "work", icon: FolderGit2 },
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
          <Sparkles size={14} />
          Commission Me
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
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => toggleMenu(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Icon size={18} color="var(--ice)" />
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => toggleMenu(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "var(--ice)",
            }}
          >
            <Sparkles size={18} />
            Commission / Contact
          </a>
        </div>

        {/* Quick mobile action buttons */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <a
            href={`tel:${portfolioData.phone}`}
            style={{
              fontSize: "13px",
              padding: "10px 16px",
              borderRadius: "12px",
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#fff",
              fontFamily: "var(--mono)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <PhoneCall size={16} color="var(--ok)" /> Call {portfolioData.phone}
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            style={{
              fontSize: "13px",
              padding: "10px 16px",
              borderRadius: "12px",
              background: "rgba(108, 130, 255, 0.15)",
              border: "1px solid rgba(108, 130, 255, 0.3)",
              color: "#fff",
              fontFamily: "var(--mono)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Mail size={16} color="var(--a2)" /> Email {portfolioData.email}
          </a>
        </div>

        <small style={{ marginTop: "16px" }}>📍 {location}</small>
      </div>
    </header>
  );
};
