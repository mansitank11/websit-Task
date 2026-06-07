export function NextProject() {
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0 var(--container-padding)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "28px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Next Project</span>
        <a href="#" style={{ fontFamily: "'Playfair Display',serif", fontSize: "26px", color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: "16px", transition: "gap 0.3s" }}
          onMouseEnter={e => e.currentTarget.style.gap = "24px"}
          onMouseLeave={e => e.currentTarget.style.gap = "16px"}
        >
          Akbari
          <span style={{ color: "var(--amber)", fontSize: "20px", transition: "transform 0.3s" }}>→</span>
        </a>
      </div>
    </div>
  );
}
