import React, { useState } from "react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { useMagnetic } from "../hooks/useMagnetic";
import { portfolioData } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const { onPointerMove: onCardSpotlight } = useCardSpotlight();
  const mailMagnetic = useMagnetic(0.16, 0.26);
  const submitMagnetic = useMagnetic(0.16, 0.26);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(portfolioData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } else {
      window.location.href = `mailto:${portfolioData.email}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const bodyText = `${message}\n\n— ${name} (${email})`;
    const mailtoUrl = `mailto:${portfolioData.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(bodyText)}`;

    window.location.href = mailtoUrl;
    setStatusMessage("✓ Opening your email client to send...");
  };

  return (
    <section id="contact" className="alt">
      <div className="wrap cwrap">
        <div className="rv">
          <span className="k">/contact</span>
          <h2>Let’s build something reliable.</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
            <a
              className="mail"
              href={`mailto:${portfolioData.email}`}
              onClick={handleCopyEmail}
              onPointerMove={mailMagnetic.onPointerMove}
              onPointerLeave={mailMagnetic.onPointerLeave}
              title="Click to copy email address"
            >
              {portfolioData.email}
              <span
                style={{
                  fontSize: "12px",
                  marginLeft: "12px",
                  padding: "4px 10px",
                  borderRadius: "99px",
                  background: copied ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.1)",
                  color: copied ? "var(--ok)" : "var(--silver)",
                  verticalAlign: "middle",
                  fontFamily: "var(--mono)",
                  fontWeight: 500,
                  transition: "all 0.3s",
                }}
              >
                {copied ? "✓ Copied!" : "Click to copy"}
              </span>
            </a>
          </div>

          <div className="links">
            {portfolioData.socials.map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {soc.label} ↗
              </a>
            ))}
          </div>
        </div>

        <form
          className="card rv"
          id="f"
          onSubmit={handleSubmit}
          onPointerMove={onCardSpotlight}
        >
          <div>
            <label htmlFor="n">Your Name</label>
            <input
              id="n"
              required
              autoComplete="name"
              placeholder="e.g. Alex Santos"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="e">Email Address</label>
            <input
              id="e"
              type="email"
              required
              autoComplete="email"
              placeholder="alex@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="m">Message</label>
            <textarea
              id="m"
              required
              placeholder="Tell me about your project, idea, or questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            className="btn p"
            type="submit"
            onPointerMove={submitMagnetic.onPointerMove}
            onPointerLeave={submitMagnetic.onPointerLeave}
          >
            Send message ↗
          </button>

          <div className="sent" id="ok" role="status">
            {statusMessage}
          </div>
        </form>
      </div>
    </section>
  );
};
