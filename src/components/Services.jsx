import { IMAGES } from "../constants/data";
import { Reveal } from "./common/Reveal";

export function Services() {
  return (
    <section style={{ padding: "var(--section-padding) 0", background: "linear-gradient(180deg, rgba(215,74,21,0.06) 0%, #0F0D0B 100%)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 var(--container-padding)" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "20px" }}>
            <span className="section-badge" />Our Promises
          </p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4vw,50px)", lineHeight: 1.1, marginBottom: "16px" }}>
            Unmatched Taste, <em style={{ color: "var(--amber)" }}>Uncompromised Quality</em>
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.75 }}>
            From traditional farms to your kitchen — how we ensure the absolute purity of every single pack.
          </p>
        </Reveal>

        <div className="responsive-services-grid">
          {[
            {
              n: "01", title: "Supreme Sourcing",
              desc: "Handpicked ingredients sourced directly from India's standard farms to ensure maximum flavor and richness.",
              img: IMAGES.img4,
            },
            {
              n: "02", title: "Natural Oils Preserved",
              desc: "Low-temperature processing techniques that preserve the natural oils and authentic aroma of the spices.",
              img: IMAGES.img6,
            },
            {
              n: "03", title: "Freshness-Locked Packaging",
              desc: "Premium, moisture-proof, and airtight packaging that keeps spices clean, safe, and flavorful for longer.",
              img: IMAGES.img5,
            },
          ].map((card, i) => (
            <Reveal key={card.n} delay={i * 100}>
              <div className="service-card shine-hover">
                <div className="svc-img-wrap">
                  <img src={card.img} alt={card.title} />
                </div>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", marginBottom: "12px" }}>{card.n}</p>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "22px", marginBottom: "14px" }}>{card.title}</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}>{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
