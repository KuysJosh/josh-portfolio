import React, { useState } from "react";
import { PhoneCall, MessageSquare, Mail, MapPin, Send, ExternalLink, ArrowUpRight } from "lucide-react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { useMagnetic } from "../hooks/useMagnetic";
import { portfolioData } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const { onPointerMove: onCardSpotlight } = useCardSpotlight();
  const submitMagnetic = useMagnetic(0.12, 0.2);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web App Development (MERN / PHP)",
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
    setStatusMessage("Opening your email client...");
  };

  return (
    <section id="contact" className="section-contact">
      <div className="wrap contact-layout">
        {/* Left Column: Direct Access & Map */}
        <div className="contact-info rv">
          <span className="section-pill">Get In Touch</span>
          <h2>Let’s build something dependable.</h2>
          <p className="section-sub">
            Currently working as <b>IT Staff</b> and open for <b>freelance commissions</b>. Reach out directly through any channel below:
          </p>

          {/* Action Cards: Direct Call, SMS, Email */}
          <div className="contact-actions">
            {/* Call */}
            <a
              className="action-card"
              href={`tel:${portfolioData.phone}`}
              title="Direct call"
            >
              <div className="action-icon">
                <PhoneCall size={18} />
              </div>
              <div className="action-meta">
                <span className="action-label">Direct Phone Call</span>
                <span className="action-value">{portfolioData.phoneFormatted}</span>
              </div>
              <span className="action-arrow">
                <ArrowUpRight size={15} />
              </span>
            </a>

            {/* SMS */}
            <a
              className="action-card"
              href={`sms:${portfolioData.phone}`}
              title="Direct SMS"
            >
              <div className="action-icon">
                <MessageSquare size={18} />
              </div>
              <div className="action-meta">
                <span className="action-label">Direct SMS / Text</span>
                <span className="action-value">{portfolioData.phone}</span>
              </div>
              <span className="action-arrow">
                <ArrowUpRight size={15} />
              </span>
            </a>

            {/* Email */}
            <a
              className="action-card"
              href={`mailto:${portfolioData.email}`}
              title="Direct email"
            >
              <div className="action-icon">
                <Mail size={18} />
              </div>
              <div className="action-meta">
                <span className="action-label">Direct Email</span>
                <span className="action-value">{portfolioData.email}</span>
              </div>
              <span className="action-arrow">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>

          {/* Google Maps Card */}
          <div className="map-card">
            <div className="map-card-head">
              <div className="map-location-tag">
                <MapPin size={15} />
                <span>{portfolioData.locationFull}</span>
              </div>
              <a
                href={portfolioData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                <span>Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="map-embed-wrapper">
              <iframe
                title="Google Map Tacloban City Leyte"
                src={portfolioData.mapEmbedUrl}
                width="100%"
                height="100%"
                className="map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Commission Form */}
        <div className="contact-form-col rv">
          <form
            className="commission-form"
            onSubmit={handleSubmit}
            onPointerMove={onCardSpotlight}
          >
            <div className="form-head">
              <h3>Commission Inquiry</h3>
              <p>Fill out the details below to initiate a project proposal.</p>
            </div>

            <div className="form-field">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                required
                autoComplete="name"
                placeholder="e.g. Juan dela Cruz"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="juan@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label htmlFor="service">Requested Service</label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                {portfolioData.commissionServices.map((svc, sIdx) => (
                  <option key={sIdx} value={svc}>
                    {svc}
                  </option>
                ))}
                <option value="General IT Support">General IT Support</option>
                <option value="Other Inquiries">Other Inquiries</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">Project Description / Message</label>
              <textarea
                id="message"
                required
                placeholder="Briefly describe what you'd like to build, your timeline, or any technical requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
              />
            </div>

            <button
              className="btn btn-primary submit-btn"
              type="submit"
              onPointerMove={submitMagnetic.onPointerMove}
              onPointerLeave={submitMagnetic.onPointerLeave}
            >
              <Send size={15} />
              <span>Send Commission Inquiry</span>
            </button>

            {statusMessage && (
              <div className="form-status" role="status">
                {statusMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
