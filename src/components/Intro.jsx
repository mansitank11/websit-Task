import { IMAGES } from "../constants/data";
import { Reveal } from "./common/Reveal";
import { ParallaxImg } from "./common/ParallaxImg";
import { Counter } from "./common/Counter";

export function Intro({ setCursorBig, setLightbox }) {
  return (
    <section style={{ padding: "var(--section-padding) 0", background: "#0F0D0B" }}>
      <div className="responsive-approach-grid" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 var(--container-padding)" }}>
        <Reveal style={{ position: "relative", width: "100%", maxWidth: "540px", margin: "0 auto" }}>
          {/* Ambient glow behind parallax image */}
          <div style={{
            position: "absolute",
            width: "250px",
            height: "350px",
            background: "var(--green)",
            filter: "blur(120px)",
            opacity: 0.15,
            borderRadius: "50%",
            top: "10%",
            left: "10%",
            pointerEvents: "none",
            zIndex: 0,
          }} />
          <div 
            className="shine-hover"
            onMouseEnter={() => setCursorBig("zoom")}
            onMouseLeave={() => setCursorBig(false)}
            onClick={() => setLightbox({ src: IMAGES.img2, label: "Adani Brand Identity" })}
            style={{ position: "relative", zIndex: 1, cursor: "zoom-in", borderRadius: "8px", overflow: "hidden" }}
          >
            <ParallaxImg
              src={IMAGES.img2}
              alt="Adani Brand Identity"
              speed={0.1}
              className="intro-parallax-img"
            />
          </div>
        </Reveal>
        <div>
          <Reveal delay={80}>
            <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "20px" }}>
              <span className="section-badge" />Our Heritage
            </p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(34px,4vw,52px)", lineHeight: 1.1, marginBottom: "24px" }}>
              A tradition of flavor,<br />
              <em style={{ color: "var(--amber)" }}>crafted with care</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", marginBottom: "20px" }}>
              Since 1955, Adani Spices has been dedicated to delivering unmatched purity and authentic Indian taste. We source the finest ingredients directly from traditional farms to ensure every pinch of our spice enhances your cooking with rich aroma and color.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.4)" }}>
              From our signature Kashmiri Chili to our aromatic blended masalas, we maintain the highest standards of processing, preserving the natural oils and rich taste of every single spice.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="responsive-stats-grid">
              {[
                { n: 70, s: "+", label: "Years of Trust" },
                { n: 50, s: "+", label: "Pure Spices" },
                { n: 100, s: "%", label: "Natural & Pure" },
              ].map(({ n, s, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "36px", color: "var(--amber)", lineHeight: 1 }}>
                    <Counter target={n} suffix={s} />
                  </p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "8px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
