import { NAV_LINKS } from "../constants/data";

export function Navbar({ menuOpen, setMenuOpen, scrolled, onInquiryClick }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? "14px 0" : "22px 0",
      background: scrolled ? "rgba(10,9,5,0.9)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 var(--container-padding)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", transition: "opacity 0.3s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          <img
            src="/logo.svg"
            alt="Adani Spices Logo"
            style={{
              width: "40px",
              height: "40px",
              display: "block",
              animation: "logoFloat 3s ease-in-out infinite",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
            <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "18px", fontWeight: 700, letterSpacing: "-0.01em", color: "#fff" }}>Adani</span>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)" }}>Spices</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          {NAV_LINKS.map(l => <a key={l} href="#" className="nav-link">{l}</a>)}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button 
            className="cta-primary desktop-nav" 
            style={{ padding: "10px 22px", fontSize: "12px" }}
            onClick={onInquiryClick}
          >
            Inquiry
          </button>
          {/* Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: "24px", height: "1.5px", background: "#fff",
                transformOrigin: "center",
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(4.5px,4.5px)"
                    : i === 1 ? "scaleX(0)"
                      : "rotate(-45deg) translate(4.5px,-4.5px)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          background: "rgba(10,9,5,0.98)", padding: "24px var(--container-padding) 28px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex", flexDirection: "column", gap: "20px",
        }}>
          {NAV_LINKS.map(l => <a key={l} href="#" className="nav-link" style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)" }} onClick={() => setMenuOpen(false)}>{l}</a>)}
          <button 
            className="cta-primary" 
            style={{ alignSelf: "flex-start", marginTop: "8px" }}
            onClick={() => {
              setMenuOpen(false);
              onInquiryClick();
            }}
          >
            Inquiry
          </button>
        </div>
      )}
    </nav>
  );
}
