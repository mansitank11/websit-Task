import { IMAGES } from "../constants/data";
import { Reveal } from "./common/Reveal";
import { TiltCard } from "./common/TiltCard";

export function GifFeature({ setCursorBig, setLightbox }) {
  return (
    <section className="gif-feature-section" style={{ padding: "0 var(--container-padding) var(--section-padding)", maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
      {/* Ambient background glow */}
      <div style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        background: "var(--orange)",
        filter: "blur(130px)",
        opacity: 0.15,
        right: "5%",
        top: "10%",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Section Header */}
      <Reveal style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "16px" }}>
          <span className="section-badge" />Our Process
        </p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4vw,50px)", lineHeight: 1.1 }}>
          Uncompromised <em style={{ color: "var(--amber)" }}>Purity & Quality</em>
        </h2>
      </Reveal>

      <Reveal style={{ position: "relative", zIndex: 1 }}>
        <TiltCard
          className="hover-img-wrap shine-hover gif-card-container"
          style={{ borderRadius: "10px", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", cursor: "zoom-in" }}
          onMouseEnter={() => setCursorBig("zoom")}
          onMouseLeave={() => setCursorBig(false)}
          onClick={() => setLightbox({ src: IMAGES.gif, label: "Adani Spices — Sourcing and Packaging Excellence" })}
        >
          <img src={IMAGES.gif} alt="Adani Spices Process" style={{ width: "100%", height: "auto", display: "block" }} />
        </TiltCard>
      </Reveal>
    </section>
  );
}
