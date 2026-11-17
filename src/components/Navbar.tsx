import React, { useState, useEffect } from "react";
import { PhoneCall, Mail, User, Layers, Briefcase, FolderGit2, ArrowUpRight, Award, MessageSquare } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { portfolioData } from "../data/portfolioData";

interface NavbarProps {
  name?: string;
  location?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  name = "Josh Astanio",
  location = "Tacloban City, Leyte · Open for Commission",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(["about", "stack", "experience", "work", "certs", "contact"]);

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
    { label: "Certificates", href: "#certs", id: "certs", icon: Award },
    { label: "Contact", href: "#contact", id: "contact", icon: MessageSquare },
  ];

  return (
    <header className={`nav ${isOpen ? "open" : ""}`} id="nav">
      <div className="nav-container">
        {/* Brand / Logo */}
        <a className="nav-brand" href="#top" onClick={() => toggleMenu(false)}>
          <span className="brand-avatar-mini">J</span>
          <div className="brand-text-col">
            <span className="brand-name">{name}</span>
            <span className="brand-subtitle">IT Staff &amp; Dev</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="nav-menu">
          {navLinks.slice(0, 5).map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="nav-action">
          <a className="btn-hire" href="#contact">
            <span>Commission Me</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Hamburger */}
          <button
            className="nav-burger"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => toggleMenu()}
          >
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Sheet */}
      <div className="mobile-sheet">
        <div className="sheet-links">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => toggleMenu(false)}
                className={`sheet-link ${activeSection === item.id ? "active" : ""}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Quick Mobile Action Buttons */}
        <div className="sheet-quick-actions">
          <a
            href={`tel:${portfolioData.phone}`}
            className="sheet-action-btn phone"
          >
            <PhoneCall size={16} />
            <span>Call {portfolioData.phone}</span>
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="sheet-action-btn email"
          >
            <Mail size={16} />
            <span>Email Josh</span>
          </a>
        </div>

        <div className="sheet-footer">
          <span className="location-indicator">📍 {location}</span>
        </div>
      </div>
    </header>
  );
};
