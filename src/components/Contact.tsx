import React, { useState } from "react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { useMagnetic } from "../hooks/useMagnetic";
import { portfolioData } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const { onPointerMove: onCardSpotlight } = useCardSpotlight();
  const mailMagnetic = useMagnetic(0.16, 0.26);
  const submitMagnetic = useMagnetic(0.16, 0.26);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const bodyText = `${message}\n\n— ${name} (${email})`;
    const mailtoUrl = `mailto:${portfolioData.email}?subject=${encodeURIComponent(
      `Portfolio message from ${name}`
    )}&body=${encodeURIComponent(bodyText)}`;

    window.location.href = mailtoUrl;
    setStatusMessage("Opening your email app…");
  };

  return (
    <section id="contact" className="alt">
      <div className="wrap cwrap">
        <div className="rv">
          <span className="k">/contact</span>
          <h2>Let’s build something reliable.</h2>

          <a
            className="mail"
            href={`mailto:${portfolioData.email}`}
            onPointerMove={mailMagnetic.onPointerMove}
            onPointerLeave={mailMagnetic.onPointerLeave}
          >
            {portfolioData.email}
          </a>

          <div className="links">
            {portfolioData.socials.map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {soc.label}
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
            <label htmlFor="n">name</label>
            <input
              id="n"
              required
              autoComplete="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="e">email</label>
            <input
              id="e"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="m">message</label>
            <textarea
              id="m"
              required
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
            Send message
          </button>

          <div className="sent" id="ok" role="status">
            {statusMessage}
          </div>
        </form>
      </div>
    </section>
  );
};

