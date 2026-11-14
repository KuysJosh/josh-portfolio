import React, { useState } from "react";
import { PhoneCall, MessageSquare, Mail, MapPin, Send, ExternalLink, Sparkles } from "lucide-react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { useMagnetic } from "../hooks/useMagnetic";
import { portfolioData } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const { onPointerMove: onCardSpotlight } = useCardSpotlight();
  const callMagnetic = useMagnetic(0.12, 0.2);
  const smsMagnetic = useMagnetic(0.12, 0.2);
  const mailMagnetic = useMagnetic(0.12, 0.2);
  const submitMagnetic = useMagnetic(0.12, 0.2);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development (MERN / PHP)",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    const bodyText = `Project / Commission Inquiry:\nService: ${service}\n\nMessage:\n${message}\n\n— From: ${name} (${email})`;
    const mailtoUrl = `mailto:${portfolioData.email}?subject=${encodeURIComponent(
      `[Commission Inquiry] ${service} - from ${name}`
    )}&body=${encodeURIComponent(bodyText)}`;

    window.location.href = mailtoUrl;
    setStatusMessage("✓ Launching your email client...");
  };

  return (
    <section id="contact" className="alt">
      <div className="wrap cwrap">
        <div className="rv">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
            <Sparkles size={14} color="var(--ice)" />
            <span className="k" style={{ margin: 0 }}>/commission &amp; contact</span>
          </div>

          <h2>Let’s build something reliable.</h2>

          <p style={{ color: "var(--silver)", fontSize: "14px", lineHeight: "1.5", marginBottom: "20px" }}>
            Currently working as <b>IT Staff</b> and open for <b>commission projects</b>. Tap any option below to reach me instantly:
          </p>

          {/* Direct Action Buttons - Instant Call, SMS, Email */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
            {/* Direct Phone Call */}
            <a
              className="card contact-action-card"
              href={`tel:${portfolioData.phone}`}
              onPointerMove={callMagnetic.onPointerMove}
              onPointerLeave={callMagnetic.onPointerLeave}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 18px",
                textDecoration: "none",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(12, 18, 30, 0.8))",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "rgba(16, 185, 129, 0.2)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--ok)",
                  flexShrink: 0,
                }}
              >
                <PhoneCall size={20} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "11px", fontFamily: "var(--mono)", color: "var(--ok)", fontWeight: 600 }}>
                  DIRECT CALL
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {portfolioData.phoneFormatted}
                </div>
              </div>
              <span style={{ fontSize: "11px", color: "var(--mute)", fontFamily: "var(--mono)" }}>Tap to call ↗</span>
            </a>

            {/* Direct SMS Message */}
            <a
              className="card contact-action-card"
              href={`sms:${portfolioData.phone}`}
              onPointerMove={smsMagnetic.onPointerMove}
              onPointerLeave={smsMagnetic.onPointerLeave}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 18px",
                textDecoration: "none",
                border: "1px solid rgba(76, 201, 240, 0.3)",
                background: "linear-gradient(135deg, rgba(76, 201, 240, 0.1), rgba(12, 18, 30, 0.8))",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "rgba(76, 201, 240, 0.2)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--ice)",
                  flexShrink: 0,
                }}
              >
                <MessageSquare size={20} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "11px", fontFamily: "var(--mono)", color: "var(--ice)", fontWeight: 600 }}>
                  SEND SMS / TEXT
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {portfolioData.phone}
                </div>
              </div>
              <span style={{ fontSize: "11px", color: "var(--mute)", fontFamily: "var(--mono)" }}>Tap to text ↗</span>
            </a>

            {/* Direct Email */}
            <a
              className="card contact-action-card"
              href={`mailto:${portfolioData.email}`}
              onPointerMove={mailMagnetic.onPointerMove}
              onPointerLeave={mailMagnetic.onPointerLeave}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 18px",
                textDecoration: "none",
                border: "1px solid rgba(108, 130, 255, 0.3)",
                background: "linear-gradient(135deg, rgba(108, 130, 255, 0.1), rgba(12, 18, 30, 0.8))",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "rgba(108, 130, 255, 0.2)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--a2)",
                  flexShrink: 0,
                }}
              >
                <Mail size={20} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "11px", fontFamily: "var(--mono)", color: "var(--a2)", fontWeight: 600 }}>
                  DIRECT EMAIL
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {portfolioData.email}
                </div>
              </div>
              <span style={{ fontSize: "11px", color: "var(--mute)", fontFamily: "var(--mono)" }}>Open mail ↗</span>
            </a>
          </div>

          {/* Interactive Google Map of Tacloban City, Leyte */}
          <div
            className="card"
            style={{
              marginTop: "20px",
              padding: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={16} color="var(--ice)" />
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>
                  {portfolioData.locationFull}
                </span>
              </div>
              <a
                href={portfolioData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "11px",
                  fontFamily: "var(--mono)",
                  color: "var(--ice)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Open Map <ExternalLink size={12} />
              </a>
            </div>

            <div
              style={{
                width: "100%",
                height: "170px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--line-strong)",
                position: "relative",
              }}
            >
              <iframe
                title="Google Map Tacloban City Leyte"
                src={portfolioData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(92%) hue-rotate(180deg) contrast(110%)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Commission & Message Form */}
        <form
          className="card rv"
          id="f"
          onSubmit={handleSubmit}
          onPointerMove={onCardSpotlight}
          style={{ padding: "clamp(18px, 3vw, 28px)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <Sparkles size={16} color="var(--ice)" />
            <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}>Commission &amp; Message</h3>
          </div>
          <p style={{ margin: "0 0 10px", color: "var(--mute)", fontSize: "13px" }}>
            Send your project details or service inquiry directly:
          </p>

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
            <label htmlFor="svc">Requested Service / Commission</label>
            <select
              id="svc"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              style={{
                width: "100%",
                background: "var(--ink3)",
                border: "1px solid var(--line-strong)",
                borderRadius: "14px",
                padding: "12px 14px",
                color: "var(--bone)",
                fontFamily: "inherit",
                fontSize: "14px",
              }}
            >
              {portfolioData.commissionServices.map((svc, sIdx) => (
                <option key={sIdx} value={svc} style={{ background: "#0d1424", color: "#fff" }}>
                  {svc}
                </option>
              ))}
              <option value="Other Inquiries" style={{ background: "#0d1424", color: "#fff" }}>
                General Inquiry / Other
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="m">Project Details / Message</label>
            <textarea
              id="m"
              required
              placeholder="Describe what you want to build or what IT help you need..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ minHeight: "100px" }}
            />
          </div>

          <button
            className="btn p"
            type="submit"
            onPointerMove={submitMagnetic.onPointerMove}
            onPointerLeave={submitMagnetic.onPointerLeave}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Send size={16} /> Send Commission Request
          </button>

          {statusMessage && (
            <div className="sent" id="ok" role="status">
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
