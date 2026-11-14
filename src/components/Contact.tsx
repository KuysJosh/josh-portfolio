import React, { useState } from "react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { useMagnetic } from "../hooks/useMagnetic";
import { portfolioData } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const { onPointerMove: onCardSpotlight } = useCardSpotlight();
  const mailMagnetic = useMagnetic(0.16, 0.26);
  const phoneMagnetic = useMagnetic(0.16, 0.26);
  const submitMagnetic = useMagnetic(0.16, 0.26);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(portfolioData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      window.location.href = `mailto:${portfolioData.email}`;
    }
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(portfolioData.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } else {
      window.location.href = `tel:${portfolioData.phone}`;
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

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "stretch", maxWidth: "480px" }}>
            {/* Email Button */}
            <a
              className="mail"
              href={`mailto:${portfolioData.email}`}
              onClick={handleCopyEmail}
              onPointerMove={mailMagnetic.onPointerMove}
              onPointerLeave={mailMagnetic.onPointerLeave}
              title="Click to copy email address"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 24px",
                fontSize: "clamp(15px, 2.5vw, 20px)",
              }}
            >
              <span>✉ {portfolioData.email}</span>
              <span
                style={{
                  fontSize: "11.5px",
                  padding: "4px 10px",
                  borderRadius: "99px",
                  background: copiedEmail ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.08)",
                  color: copiedEmail ? "var(--ok)" : "var(--silver)",
                  fontFamily: "var(--mono)",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {copiedEmail ? "✓ Copied!" : "Copy"}
              </span>
            </a>

            {/* Phone Button */}
            <a
              className="mail"
              href={`tel:${portfolioData.phone}`}
              onClick={handleCopyPhone}
              onPointerMove={phoneMagnetic.onPointerMove}
              onPointerLeave={phoneMagnetic.onPointerLeave}
              title="Click to call or copy phone number"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 24px",
                fontSize: "clamp(15px, 2.5vw, 20px)",
              }}
            >
              <span>📱 {portfolioData.phone}</span>
              <span
                style={{
                  fontSize: "11.5px",
                  padding: "4px 10px",
                  borderRadius: "99px",
                  background: copiedPhone ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.08)",
                  color: copiedPhone ? "var(--ok)" : "var(--silver)",
                  fontFamily: "var(--mono)",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {copiedPhone ? "✓ Copied!" : "Call / Copy"}
              </span>
            </a>
          </div>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--mono)",
              fontSize: "13px",
              color: "var(--mute)",
            }}
          >
            <span>📍 Based in:</span>
            <span style={{ color: "var(--ice)", fontWeight: 500 }}>{portfolioData.location}</span>
          </div>

          <div className="links">
            <a href={`tel:${portfolioData.phone}`}>Call Directly</a>
            <a href={`sms:${portfolioData.phone}`}>SMS</a>
            <a href={portfolioData.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
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
