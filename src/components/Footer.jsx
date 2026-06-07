import { FOOTER_COMPANY, FOOTER_SERVICES, SOCIALS } from "../constants/data";

export function Footer() {
  return (
    <footer style={{ background: "#060604", paddingTop: "80px", paddingBottom: "32px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 var(--container-padding)" }}>
        {/* Footer top */}
        <div className="responsive-footer-grid" style={{ paddingBottom: "60px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <img
                src="/logo.svg"
                alt="Adani Spices Logo"
                style={{ width: "36px", height: "36px", display: "block", filter: "drop-shadow(0 0 6px rgba(215,74,21,0.4))" }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "18px", fontWeight: 700, color: "#fff" }}>Adani Spices</span>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber)" }}>Creators Of Taste</span>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", lineHeight: 1.8, marginBottom: "24px" }}>
              Have questions or want to partner with us? Reach out directly to our team.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href="tel:+912812454252" style={{ color: "var(--amber)", fontSize: "13px", textDecoration: "none" }}>+91 281 245 4252</a>
              <a href="mailto:info@adanispices.com" style={{ color: "var(--amber)", fontSize: "13px", textDecoration: "none" }}>info@adanispices.com</a>
            </div>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", lineHeight: 1.7, marginTop: "20px" }}>
              Adani Food Products Pvt. Ltd.<br />
              Plot No. 16, Phase-II, G.I.D.C., Rajkot - 360003, Gujarat, India
            </p>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "24px" }}>Company</p>
            {FOOTER_COMPANY.map(l => (
              <a key={l} href="#" style={{ display: "block", fontSize: "13px", color: "rgba(255,255,255,0.38)", textDecoration: "none", marginBottom: "12px", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.38)"}>
                {l}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "24px" }}>Services</p>
            {FOOTER_SERVICES.map(l => (
              <a key={l} href="#" style={{ display: "block", fontSize: "13px", color: "rgba(255,255,255,0.38)", textDecoration: "none", marginBottom: "12px", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.38)"}>
                {l}
              </a>
            ))}
          </div>

          {/* Social */}
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "24px" }}>Follow Us</p>
            {SOCIALS.map(l => (
              <a key={l} href="#" style={{ display: "block", fontSize: "13px", color: "rgba(255,255,255,0.38)", textDecoration: "none", marginBottom: "12px", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.38)"}>
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Footer bottom */}
        <div style={{ paddingTop: "28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
            © 2025{" "}
            <span style={{ color: "var(--amber)", fontWeight: 600 }}>Adani Spices (Adani Food Products Pvt. Ltd.)</span>
            {" "}— All Rights Reserved. Created by{" "}
            <span style={{ color: "rgba(255,255,255,0.4)" }}>Asense Branding</span>
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms", "Sitemap"].map(l => (
              <a key={l} href="#" style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.5)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.2)"}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
