import { Reveal } from "./common/Reveal";
import { MagneticBtn } from "./common/MagneticBtn";

export function CtaBanner() {
  return (
    <section style={{ padding: "var(--section-padding) var(--container-padding)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Reveal>
          <div style={{
            borderRadius: "12px", padding: "72px 64px",
            display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "32px",
            background: "linear-gradient(135deg, rgba(215,74,21,0.15) 0%, rgba(243,192,79,0.06) 100%)",
            border: "1px solid rgba(215,74,21,0.25)",
            position: "relative", overflow: "hidden",
          }}>
            {/* Decorative circle */}
            <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "220px", height: "220px", borderRadius: "50%", border: "1px solid rgba(215,74,21,0.15)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: "-20px", top: "-20px", width: "140px", height: "140px", borderRadius: "50%", border: "1px solid rgba(234,168,44,0.12)", pointerEvents: "none" }} />
            <div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,3.5vw,44px)", marginBottom: "12px" }}>
                Ready to Elevate<br /><em style={{ color: "var(--amber)" }}>Your Cooking?</em>
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)" }}>Bring home the authentic essence of Indian culinary tradition.</p>
            </div>
            <MagneticBtn className="cta-primary" style={{ padding: "16px 48px", fontSize: "14px" }}>
              Explore Our Products →
            </MagneticBtn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
