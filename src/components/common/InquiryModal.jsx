import { useState, useEffect } from "react";

export function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Bulk Ground Spices",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "Bulk Ground Spices",
        message: "",
      });
      onClose();
    }, 2500);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(10,9,5,0.85)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeInOverlay 0.25s ease",
        cursor: "zoom-out",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "linear-gradient(135deg, #181512 0%, #0F0D0B 100%)",
          border: "1px solid rgba(234,168,44,0.15)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(215,74,21,0.1)",
          borderRadius: "12px",
          position: "relative",
          animation: "scaleInLB 0.3s cubic-bezier(0.22,1,0.36,1)",
          cursor: "default",
          padding: "36px",
          overflow: "hidden",
        }}
      >
        {/* Glow backdrop decorative */}
        <div style={{
          position: "absolute",
          width: "150px",
          height: "150px",
          background: "var(--orange)",
          filter: "blur(60px)",
          opacity: 0.15,
          top: "-50px",
          right: "-50px",
          pointerEvents: "none",
        }} />

        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(215,74,21,0.2)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            e.currentTarget.style.color = "rgba(255,255,255,0.6)";
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 0", animation: "fadeInOverlay 0.5s ease" }}>
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "rgba(62,142,117,0.1)",
              border: "2px solid var(--green)",
              color: "var(--green)",
              fontSize: "24px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}>
              ✓
            </div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "24px", color: "#fff", marginBottom: "12px" }}>
              Inquiry Submitted
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
              Thank you for contacting Adani Spices. Our taste specialists will get back to you shortly.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: "28px" }}>
              <span className="pill" style={{ fontSize: "9px", padding: "3px 10px", marginBottom: "12px" }}>
                Contact Form
              </span>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "28px", color: "#fff", marginTop: "6px" }}>
                Product Inquiry
              </h3>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", marginTop: "6px" }}>
                Submit your details below for bulk orders or distributorship.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                    padding: "12px 14px",
                    color: "#fff",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--amber)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>

              {/* Email & Phone Row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="form-row">
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "4px",
                      padding: "12px 14px",
                      color: "#fff",
                      fontSize: "14px",
                      fontFamily: "inherit",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "var(--amber)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "4px",
                      padding: "12px 14px",
                      color: "#fff",
                      fontSize: "14px",
                      fontFamily: "inherit",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "var(--amber)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Inquiry Type
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  style={{
                    background: "#161310",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                    padding: "12px 14px",
                    color: "#fff",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    outline: "none",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--amber)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                >
                  <option value="Bulk Ground Spices">Bulk Ground Spices</option>
                  <option value="Blended Masalas">Blended Masalas</option>
                  <option value="Whole Spices">Whole Spices</option>
                  <option value="Distributorship Interest">Distributorship Interest</option>
                  <option value="Export Orders">Export Orders</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Message / Requirements
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder="Detail your requirements here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                    padding: "12px 14px",
                    color: "#fff",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--amber)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="cta-primary"
                style={{ width: "100%", marginTop: "6px", display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                Send Inquiry →
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
