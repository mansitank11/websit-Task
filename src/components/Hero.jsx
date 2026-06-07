import { IMAGES, SERVICES_TAGS } from "../constants/data";
import { Reveal } from "./common/Reveal";
import { MagneticBtn } from "./common/MagneticBtn";
import { TiltCard } from "./common/TiltCard";

export function Hero({ setCursorBig, setLightbox }) {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
      paddingTop: "100px", position: "relative", overflow: "hidden",
      background: "radial-gradient(ellipse 70% 60% at 65% 45%, rgba(212,82,10,0.16) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 70%, rgba(242,201,76,0.06) 0%, transparent 60%), #0A0905",
    }}>
      {/* Animated ring */}
      <div style={{
        position: "absolute", top: "50%", right: "-8%",
        width: "500px", height: "500px", borderRadius: "50%",
        border: "1px solid rgba(212,82,10,0.15)",
        transform: "translateY(-50%)",
        animation: "borderGlow 4s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "50%", right: "-4%",
        width: "350px", height: "350px", borderRadius: "50%",
        border: "1px solid rgba(232,138,26,0.1)",
        transform: "translateY(-50%)",
        animation: "borderGlow 4s ease-in-out infinite 2s",
        pointerEvents: "none",
      }} />

      {/* Floating dots */}
      {[
        { top: "20%", left: "10%", size: 4, delay: 0 },
        { top: "70%", left: "6%", size: 3, delay: 1 },
        { top: "35%", right: "20%", size: 5, delay: 0.5 },
        { top: "80%", right: "30%", size: 3, delay: 1.5 },
      ].map((d, i) => (
        <div key={i} style={{
          position: "absolute", ...d,
          width: d.size, height: d.size, borderRadius: "50%",
          background: "var(--amber)", opacity: 0.5,
          animation: `floatY ${3 + i * 0.7}s ease-in-out infinite`,
          animationDelay: `${d.delay}s`,
          pointerEvents: "none",
        }} />
      ))}

      <div className="responsive-hero-grid" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 var(--container-padding)", width: "100%" }}>
        {/* Left */}
        <div>
          <Reveal delay={0}>
            <span className="pill" style={{ marginBottom: "24px", display: "inline-flex" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--orange)" }} />
              Creators Of Taste — Since 1955
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(44px,5.5vw,76px)", lineHeight: 1.04, fontWeight: 700, marginBottom: "24px" }}>
              Crafting Pure<br />
              <span style={{ background: "linear-gradient(135deg,#D4520A,#E88A1A,#F2C94C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Adani Spices
              </span>{" "}
              <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>Every Day</em>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "rgba(255,255,255,0.5)", maxWidth: "420px", marginBottom: "32px" }}>
              Unmatched quality and uncompromised taste. Handpicked, meticulously grounded, and blended to perfection to deliver the authentic spirit of Indian culinary heritage.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
              {SERVICES_TAGS.map(t => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <MagneticBtn className="cta-primary">Explore Products →</MagneticBtn>
              <MagneticBtn className="cta-outline">Our Heritage</MagneticBtn>
            </div>
          </Reveal>
        </div>

        {/* Right — hero image */}
        <Reveal delay={200} y={60} style={{ position: "relative", width: "100%", maxWidth: "540px", margin: "0 auto" }}>
          {/* Ambient Glow Backdrop */}
          <div style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            background: "var(--orange)",
            filter: "blur(100px)",
            opacity: 0.3,
            borderRadius: "50%",
            top: "10%",
            left: "10%",
            pointerEvents: "none",
            zIndex: 0,
          }} />
          
          <TiltCard
            className="hover-img-wrap shine-hover"
            style={{ borderRadius: "8px", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", position: "relative", zIndex: 1 }}
            onMouseEnter={() => setCursorBig("zoom")}
            onMouseLeave={() => setCursorBig(false)}
            onClick={() => setLightbox({ src: IMAGES.hero, label: "Adani Spices — Creators of Taste" })}
          >
            <img
              src={IMAGES.hero}
              alt="Adani Spices Hero"
              style={{
                width: "100%",
                display: "block",
                aspectRatio: "4/3",
                objectFit: "cover",
                animation: "kenBurns 24s ease-in-out infinite",
              }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,13,11,0.5) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "20px", left: "20px" }}>
              <span className="pill" style={{ background: "rgba(15,13,11,0.75)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}>Click to expand</span>
            </div>
          </TiltCard>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.35 }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ display: "flex", gap: "4px" }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: "2px", height: "24px", background: "#fff", borderRadius: "1px", animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite` }} />
          ))}
        </div>
      </div>
    </section>
  );
}
