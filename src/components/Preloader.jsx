export function Preloader({ isLoading, progress }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0A0905",
        zIndex: 10000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.8s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.8s ease",
        transform: isLoading ? "translateY(0)" : "translateY(-100%)",
        pointerEvents: isLoading ? "auto" : "none",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", textAlign: "center" }}>
        {/* Logo */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute",
            width: "120px",
            height: "120px",
            background: "var(--orange)",
            filter: "blur(40px)",
            opacity: 0.4,
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }} />
          <img
            src="/logo.svg"
            alt="Adani Spices Logo"
            style={{
              width: "80px",
              height: "80px",
              display: "block",
              position: "relative",
              animation: "logoFloat 3s ease-in-out infinite",
            }}
          />
        </div>

        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "8px" }}>
          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "32px", fontWeight: 700, letterSpacing: "-0.01em", color: "#fff" }}>
            Adani Spices
          </span>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--amber)" }}>
            Creators Of Taste — Since 1955
          </span>
        </div>

        {/* Progress Section */}
        <div style={{ width: "200px", marginTop: "32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px", fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
            <span>Loading</span>
            <span style={{ color: "var(--amber)", fontWeight: 600 }}>{Math.min(progress, 100)}%</span>
          </div>
          <div style={{ width: "100%", height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${Math.min(progress, 100)}%`,
              background: "linear-gradient(90deg, var(--orange), var(--amber))",
              transition: "width 0.1s linear",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
