import { useEffect } from "react";

export function Lightbox({ src, label, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: "fadeInOverlay 0.25s ease",
        cursor: "zoom-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "90vw", maxHeight: "90vh",
          position: "relative",
          animation: "scaleInLB 0.3s cubic-bezier(0.22,1,0.36,1)",
          cursor: "default",
        }}
      >
        <img
          src={src} alt={label}
          style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: "8px", display: "block" }}
        />
        <div style={{ marginTop: "12px", textAlign: "center" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {label}
          </span>
        </div>
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "-16px", right: "-16px",
            width: "36px", height: "36px", borderRadius: "50%",
            background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}
          aria-label="Close"
        >✕</button>
      </div>
    </div>
  );
}
