import { IMAGES } from "../constants/data";
import { Reveal } from "./common/Reveal";
import { TiltCard } from "./common/TiltCard";

export function Gallery({ setCursorBig, setLightbox }) {
  return (
    <section style={{ padding: "var(--section-padding) 0", background: "#0F0D0B", position: "relative" }}>
      {/* Gallery ambient glows */}
      <div style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        background: "var(--amber)",
        filter: "blur(140px)",
        opacity: 0.1,
        left: "5%",
        top: "20%",
        pointerEvents: "none",
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        background: "var(--green)",
        filter: "blur(140px)",
        opacity: 0.08,
        right: "5%",
        bottom: "10%",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 var(--container-padding)", position: "relative", zIndex: 1 }}>
        <Reveal style={{ marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "16px" }}>
                <span className="section-badge" />Product Showcase
              </p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4vw,50px)", lineHeight: 1.1 }}>
                Our Premium <em style={{ color: "var(--amber)" }}>Spice Range</em>
              </h2>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", maxWidth: "260px", textAlign: "right", lineHeight: 1.7 }}>
              Click any image to view details
            </p>
          </div>
        </Reveal>

        {/* Masonry-style grid */}
        <div className="responsive-gallery-grid">
          {/* img2 — large left */}
          <Reveal delay={0} style={{ gridColumn: "1", gridRow: "1 / 3" }}>
            <TiltCard
              className="gallery-card shine-hover"
              style={{ height: "100%", minHeight: "440px" }}
              onMouseEnter={() => setCursorBig("view")}
              onMouseLeave={() => setCursorBig(false)}
              onClick={() => setLightbox({ src: IMAGES.img2, label: "Signature Blends" })}
            >
              <img src={IMAGES.img2} alt="Signature Blends" style={{ height: "100%", objectFit: "cover" }} />
              <div className="overlay"><span className="pill" style={{ fontSize: "11px" }}>Blended Masalas</span></div>
            </TiltCard>
          </Reveal>

          {/* img4 */}
          <Reveal delay={80} style={{ gridColumn: "2", gridRow: "1" }}>
            <TiltCard
              className="gallery-card shine-hover"
              style={{ height: "210px" }}
              onMouseEnter={() => setCursorBig("view")}
              onMouseLeave={() => setCursorBig(false)}
              onClick={() => setLightbox({ src: IMAGES.img4, label: "Pure Ground Spices" })}
            >
              <img src={IMAGES.img4} alt="Ground Spices" />
              <div className="overlay"><span className="pill" style={{ fontSize: "11px" }}>Ground Spices</span></div>
            </TiltCard>
          </Reveal>

          {/* img5 */}
          <Reveal delay={120} style={{ gridColumn: "3", gridRow: "1" }}>
            <TiltCard
              className="gallery-card shine-hover"
              style={{ height: "210px" }}
              onMouseEnter={() => setCursorBig("view")}
              onMouseLeave={() => setCursorBig(false)}
              onClick={() => setLightbox({ src: IMAGES.img5, label: "Aromatic Whole Spices" })}
            >
              <img src={IMAGES.img5} alt="Whole Spices" />
              <div className="overlay"><span className="pill" style={{ fontSize: "11px" }}>Whole Spices</span></div>
            </TiltCard>
          </Reveal>

          {/* img6 */}
          <Reveal delay={160} style={{ gridColumn: "2", gridRow: "2" }}>
            <TiltCard
              className="gallery-card shine-hover"
              style={{ height: "210px" }}
              onMouseEnter={() => setCursorBig("view")}
              onMouseLeave={() => setCursorBig(false)}
              onClick={() => setLightbox({ src: IMAGES.img6, label: "Traditional Pickles" })}
            >
              <img src={IMAGES.img6} alt="Pickles" />
              <div className="overlay"><span className="pill" style={{ fontSize: "11px" }}>Pickles</span></div>
            </TiltCard>
          </Reveal>

          {/* img7 */}
          <Reveal delay={200} style={{ gridColumn: "3", gridRow: "2" }}>
            <TiltCard
              className="gallery-card shine-hover"
              style={{ height: "210px" }}
              onMouseEnter={() => setCursorBig("view")}
              onMouseLeave={() => setCursorBig(false)}
              onClick={() => setLightbox({ src: IMAGES.img7, label: "Festive Gift Boxes" })}
            >
              <img src={IMAGES.img7} alt="Gift Packs" />
              <div className="overlay"><span className="pill" style={{ fontSize: "11px" }}>Gift Packs</span></div>
            </TiltCard>
          </Reveal>

          {/* img8 — full width bottom */}
          <Reveal delay={240} style={{ gridColumn: "1 / 4", gridRow: "3" }}>
            <TiltCard
              className="gallery-card shine-hover"
              style={{ height: "340px" }}
              onMouseEnter={() => setCursorBig("view")}
              onMouseLeave={() => setCursorBig(false)}
              onClick={() => setLightbox({ src: IMAGES.img8, label: "Estd. 1955 Quality Selection" })}
            >
              <img src={IMAGES.img8} alt="Quality Selection" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div className="overlay" style={{ padding: "20px" }}>
                <div className="responsive-card-overlay-content">
                  <span className="pill" style={{ fontSize: "11px" }}>Heritage Spice Selection</span>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Pure & Natural Ingredients</span>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
